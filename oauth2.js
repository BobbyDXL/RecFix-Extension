window.onload = () => {
    console.log('[RecFix] OAuth2 callback page loaded');
    
    // Get the auth code from the URL
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    
    if (code) {
        console.log('[RecFix] Received authorization code');
        // Send the code to the background script
        chrome.runtime.sendMessage({ 
            action: 'handleOAuthCode', 
            code: code 
        }, response => {
            console.log('[RecFix] OAuth code processing complete:', response);
            // Close the window after successful authentication
            window.close();
        });
    } else {
        console.error('[RecFix] No authorization code found in URL');
        document.body.innerHTML = '<p>Authentication failed. Please try again.</p>';
    }
}; 