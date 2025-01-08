document.addEventListener('DOMContentLoaded', () => {
    console.log('[RecFix] Popup initialized');
    
    // UI Elements
    const tabs = document.querySelectorAll('.tab');
    const scanContent = document.getElementById('scan-content');
    const manualContent = document.getElementById('manual-content');
    const scanBtn = document.getElementById('scan-btn');
    const processUrlsBtn = document.getElementById('process-urls-btn');
    const fixFeedBtn = document.getElementById('fix-feed-btn');
    const saveBtn = document.getElementById('save-btn');
    const optionsBtn = document.getElementById('options-btn');
    const recommendationsList = document.getElementById('recommendations-list');
    const manualInput = document.getElementById('manual-input');
    const loadingElement = document.querySelector('.loading');
    const statusMessage = document.querySelector('.status-message');

    // Verify all UI elements are present
    const requiredElements = {
        tabs, scanContent, manualContent, scanBtn, processUrlsBtn,
        fixFeedBtn, saveBtn, optionsBtn, recommendationsList,
        manualInput, loadingElement, statusMessage
    };

    for (const [name, element] of Object.entries(requiredElements)) {
        if (!element) {
            console.error('[RecFix] Required UI element not found:', name);
        }
    }

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log('[RecFix] Tab clicked:', {
                tab: tab.dataset.tab,
                previousActive: document.querySelector('.tab.active')?.dataset.tab
            });
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding content
            if (tab.dataset.tab === 'scan') {
                scanContent.style.display = 'block';
                manualContent.style.display = 'none';
            } else {
                scanContent.style.display = 'none';
                manualContent.style.display = 'block';
            }
        });
    });

    // Scan current page
    scanBtn.addEventListener('click', async () => {
        console.log('[RecFix] Scan button clicked');
        
        console.time('[RecFix] Scanning recommendations');
        showLoading(true);
        showStatus('Scanning YouTube page...', 'info');

        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            console.log('[RecFix] Current tab:', {
                url: tab.url,
                id: tab.id,
                status: tab.status
            });
            
            if (!tab.url.includes('youtube.com')) {
                throw new Error('Please navigate to YouTube to scan recommendations');
            }

            // Send message to content script to scrape recommendations
            chrome.tabs.sendMessage(tab.id, { action: 'scrapeRecommendations' }, response => {
                console.timeEnd('[RecFix] Scanning recommendations');
                
                // Handle undefined response
                if (!response) {
                    console.error('[RecFix] No response from content script');
                    showStatus('Error: Could not connect to YouTube page. Please refresh the page and try again.', 'error');
                    showLoading(false);
                    return;
                }

                console.log('[RecFix] Received recommendations:', {
                    success: !response.error,
                    count: response.recommendations?.length,
                    error: response.error
                });

                if (response.error) {
                    showStatus(response.error, 'error');
                } else if (!response.recommendations || !response.recommendations.length) {
                    showStatus('No recommendations found. Try scrolling the page to load more videos.', 'warning');
                } else {
                    displayRecommendations(response.recommendations);
                    showStatus('Successfully scanned recommendations!', 'success');
                }
                showLoading(false);
            });
        } catch (error) {
            console.error('[RecFix] Error scanning recommendations:', {
                error: error.message,
                stack: error.stack
            });
            showStatus(error.message, 'error');
            showLoading(false);
        }
    });

    // Process manually input URLs
    processUrlsBtn.addEventListener('click', async () => {
        console.log('[RecFix] Process URLs button clicked');

        const urls = manualInput.value.trim().split('\n').filter(url => url.trim());
        
        console.log('[RecFix] Processing URLs:', {
            count: urls.length,
            urls: urls.slice(0, 3) // Log first 3 URLs for debugging
        });

        if (urls.length === 0) {
            showStatus('Please enter at least one YouTube URL', 'error');
            return;
        }

        showLoading(true);
        showStatus('Processing URLs...', 'info');
        console.time('[RecFix] Processing URLs');

        try {
            // Send URLs to background script for processing
            const response = await chrome.runtime.sendMessage({
                action: 'processManualUrls',
                urls: urls
            });

            console.timeEnd('[RecFix] Processing URLs');

            // Handle undefined response
            if (!response) {
                throw new Error('No response from background script. Please try again.');
            }

            console.log('[RecFix] URL processing response:', {
                success: !response.error,
                recommendationsCount: response.recommendations?.length,
                error: response.error
            });

            if (response.error) {
                throw new Error(response.error);
            }

            if (!response.recommendations || !response.recommendations.length) {
                throw new Error('No recommendations found for the provided URLs.');
            }

            displayRecommendations(response.recommendations);
            showStatus('Successfully processed URLs!', 'success');
        } catch (error) {
            console.error('[RecFix] Error processing URLs:', {
                error: error.message,
                stack: error.stack
            });
            showStatus(typeof error === 'string' ? error : error.message, 'error');
        } finally {
            showLoading(false);
        }
    });

    // Fix feed
    fixFeedBtn.addEventListener('click', async () => {
        console.log('[RecFix] Fix feed button clicked');

        const selectedVideos = getSelectedVideos();
        
        if (selectedVideos.length === 0) {
            showStatus('Please select at least one video', 'error');
            return;
        }
        
        console.log('[RecFix] Fixing feed:', {
            selectedCount: selectedVideos.length,
            videos: selectedVideos.slice(0, 3) // Log first 3 videos
        });

        showLoading(true);
        showStatus('Generating improved recommendations...', 'info');
        console.time('[RecFix] Fixing feed');

        try {
            const response = await chrome.runtime.sendMessage({
                action: 'fixFeed',
                selectedVideos: selectedVideos
            });

            console.timeEnd('[RecFix] Fixing feed');

            // Handle undefined response
            if (!response) {
                throw new Error('No response from background script. Please try again.');
            }

            console.log('[RecFix] Feed fix response:', {
                success: !response.error,
                recommendationsCount: response.recommendations?.length,
                error: response.error
            });

            if (response.error) {
                throw new Error(typeof response.error === 'string' ? response.error : 'Failed to fix feed. Please try again.');
            }

            if (!response.recommendations || !response.recommendations.length) {
                throw new Error('No recommendations generated. Please try different videos.');
            }

            displayRecommendations(response.recommendations);
            showStatus('Feed has been optimized!', 'success');
        } catch (error) {
            console.error('[RecFix] Error fixing feed:', {
                error: error.message,
                stack: error.stack
            });
            showStatus(typeof error === 'string' ? error : error.message, 'error');
        } finally {
            showLoading(false);
        }
    });

    // Save recommendations
    saveBtn.addEventListener('click', async () => {
        console.log('[RecFix] Save button clicked');
        const selectedVideos = getSelectedVideos();

        console.log('[RecFix] Saving recommendations:', {
            selectedCount: selectedVideos.length,
            videos: selectedVideos.slice(0, 3) // Log first 3 videos
        });

        showLoading(true);
        showStatus('Saving recommendations...', 'info');
        console.time('[RecFix] Saving recommendations');

        try {
            const response = await chrome.runtime.sendMessage({
                action: 'saveRecommendations',
                recommendations: selectedVideos
            });

            console.timeEnd('[RecFix] Saving recommendations');
            console.log('[RecFix] Save response:', {
                success: !response.error,
                error: response.error
            });

            if (response.error) {
                throw new Error(response.error);
            }

            showStatus('Recommendations saved successfully!', 'success');
        } catch (error) {
            console.error('[RecFix] Error saving recommendations:', {
                error: error.message,
                stack: error.stack
            });
            showStatus(error.message, 'error');
        } finally {
            showLoading(false);
        }
    });

    // Open options page
    optionsBtn.addEventListener('click', () => {
        console.log('[RecFix] Opening options page');
        chrome.runtime.openOptionsPage();
    });

    // Helper functions
    function showLoading(show) {
        console.log('[RecFix] Show loading:', show);
        loadingElement.style.display = show ? 'block' : 'none';
    }

    function showStatus(message, type) {
        console.log('[RecFix] Show status:', { message, type });
        statusMessage.textContent = message;
        statusMessage.className = 'status-message';
        if (type) {
            statusMessage.classList.add(type);
        }
        statusMessage.style.display = 'block';

        // Hide status after 3 seconds if it's a success message
        if (type === 'success') {
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 3000);
        }
    }

    function updateButtonStates() {
        console.log('[RecFix] Updating button states');
        const selectedCount = getSelectedVideos().length;
        
        // Disable fix feed and save buttons if no videos are selected
        fixFeedBtn.disabled = selectedCount === 0;
        saveBtn.disabled = selectedCount === 0;
        
        // Update button styles
        [fixFeedBtn, saveBtn].forEach(btn => {
            if (btn.disabled) {
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
            } else {
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        });

        console.log('[RecFix] Buttons updated:', { selectedCount, fixFeedDisabled: fixFeedBtn.disabled });
    }

    function displayRecommendations(recommendations) {
        console.log('[RecFix] Displaying recommendations:', {
            count: recommendations.length,
            first: recommendations[0],
            last: recommendations[recommendations.length - 1]
        });

        try {
            recommendationsList.innerHTML = '';

            recommendations.forEach((video, index) => {
                try {
                    const videoElement = document.createElement('div');
                    videoElement.className = 'video-item';
                    videoElement.innerHTML = `
                        <input type="checkbox" id="video-${video.id}" value="${video.id}" class="video-checkbox">
                        <label for="video-${video.id}">
                            <img src="${video.thumbnail}" alt="${video.title}" style="width: 100%">
                            <p>${video.title}</p>
                            <small>${video.channel}</small>
                        </label>
                    `;
                    recommendationsList.appendChild(videoElement);

                    // Add change event listener to checkbox
                    const checkbox = videoElement.querySelector('.video-checkbox');
                    checkbox.addEventListener('change', () => {
                        console.log('[RecFix] Checkbox changed:', {
                            videoId: video.id,
                            checked: checkbox.checked
                        });
                        updateButtonStates();
                    });
                } catch (error) {
                    console.error('[RecFix] Error creating video element:', {
                        error: error.message,
                        video,
                        index
                    });
                }
            });

            // Initialize button states
            updateButtonStates();
            console.log('[RecFix] Successfully displayed recommendations');
        } catch (error) {
            console.error('[RecFix] Error displaying recommendations:', {
                error: error.message,
                stack: error.stack
            });
            showStatus('Error displaying recommendations', 'error');
        }
    }

    function getSelectedVideos() {
        const checkboxes = recommendationsList.querySelectorAll('input[type="checkbox"]:checked');
        const selectedVideos = Array.from(checkboxes).map(checkbox => checkbox.value);
        
        console.log('[RecFix] Getting selected videos:', {
            total: checkboxes.length,
            selected: selectedVideos.length,
            videos: selectedVideos.slice(0, 3) // Log first 3 selections
        });

        return selectedVideos;
    }
}); 