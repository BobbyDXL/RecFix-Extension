# RecFix - YouTube Recommendations Manager

RecFix is a Chrome extension that helps you take control of your YouTube recommendations. It allows you to analyze your current recommendations, filter out unwanted content, and guide YouTube's algorithm towards content you actually want to see.

## Features

- 📸 Take snapshots of your current YouTube recommendations
- 🔍 Analyze and filter recommendations
- ⭐ Mark videos you want to prioritize
- 🎯 Generate improved recommendation lists
- 💾 Save curated recommendations as playlists
- 🔄 Reset your recommendations feed

## Installation

### From Source
1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

### Required Setup
1. Get a YouTube Data API key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API key)
   - Copy your API key
2. Configure the extension:
   - Click the extension's options button (⚙️)
   - Paste your YouTube API key
   - Save the settings

## Usage

### Taking a Snapshot
1. Navigate to YouTube
2. Click the RecFix extension icon
3. Click "Scan Recommendations" to capture your current recommendations

### Manual Input
1. Open the RecFix popup
2. Switch to the "Manual Input" tab
3. Paste YouTube video URLs (one per line)
4. Click "Process URLs" to analyze them

### Fixing Recommendations
1. Review the captured recommendations
2. Check the videos you want to prioritize
3. Click "Fix My Feed" to generate improved recommendations
4. Optionally, save the curated list as a playlist

## Privacy

RecFix operates entirely in your browser and only communicates with YouTube's servers through the official API. Your data and preferences are stored locally and are never sent to third-party servers.

## Development

### Project Structure
```
├── manifest.json          # Extension configuration
├── popup.html            # Main extension interface
├── popup.js              # Popup functionality
├── content.js            # YouTube page interaction
├── background.js         # Background processes & API calls
├── options.html          # Settings page
└── options.js            # Settings management
```

### Building
The extension can be loaded directly from the source code. No build step is required.

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this code in your own projects.

## Support

If you encounter any issues or have suggestions for improvements, please open an issue on GitHub. 