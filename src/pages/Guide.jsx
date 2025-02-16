import { motion } from 'framer-motion'
import { FiDownload, FiYoutube, FiSettings, FiCheck, FiAlertTriangle, FiChevronDown, FiChevronUp, FiChrome } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { SiFirefox } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Guide = () => {
  const [showOptionalSteps, setShowOptionalSteps] = useState(false)
  const [selectedBrowser, setSelectedBrowser] = useState('chrome') // 'chrome' or 'firefox'

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Installation Guide</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Follow these steps to install RecFix and start improving your YouTube recommendations
        </p>

        {/* Browser Selection */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedBrowser('chrome')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
              selectedBrowser === 'chrome'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FiChrome className="text-xl" />
            Chrome
          </button>
          <button
            onClick={() => setSelectedBrowser('firefox')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
              selectedBrowser === 'firefox'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <SiFirefox className="text-xl" />
            Firefox
          </button>
        </div>

        <div className="space-y-8">
          {/* Essential Steps */}
          <div className="space-y-8">
            {/* Step 1: Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 rounded-full p-3">
                  <FiDownload className="text-2xl text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">1. Download RecFix</h2>
                  <p className="text-gray-600 mb-6">
                    Click the download button below or visit our {" "}
                    <a 
                      href={selectedBrowser === 'chrome' 
                        ? "https://github.com/BobbyDXL/RecFix-Extension-Chrome"
                        : "https://github.com/BobbyDXL/RecFix-Extension-Firefox"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      {selectedBrowser === 'chrome' ? "Chrome" : "Firefox"} repository
                    </a>
                    {" "}to get the latest version. After downloading, extract the ZIP file to a location you'll remember.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedBrowser === 'chrome' ? (
                      <motion.a
                        href="https://github.com/BobbyDXL/RecFix-Extension-Chrome/archive/refs/heads/main.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2 rounded-full inline-flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                      >
                        <FiChrome className="text-xl" />
                        Download for Chrome
                      </motion.a>
                    ) : (
                      <motion.a
                        href="https://github.com/BobbyDXL/RecFix-Extension-Firefox/archive/refs/heads/main.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2 rounded-full inline-flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                      >
                        <SiFirefox className="text-xl" />
                        Download for Firefox
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Browser Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 rounded-full p-3">
                  <HiOutlineLightningBolt className="text-2xl text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">2. Enable Developer Mode</h2>
                  {selectedBrowser === 'chrome' ? (
                    <ol className="list-decimal list-inside space-y-3 text-gray-600">
                      <li>Open Google Chrome</li>
                      <li>Type <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions/</code> in the address bar</li>
                      <li>Enable "Developer mode" in the top-right corner</li>
                      <li>Click "Load unpacked" button</li>
                      <li>Select the extracted RecFix folder</li>
                    </ol>
                  ) : (
                    <ol className="list-decimal list-inside space-y-3 text-gray-600">
                      <li>Open Firefox</li>
                      <li>Type <code className="bg-gray-100 px-2 py-1 rounded">about:debugging#/runtime/this-firefox</code> in the address bar</li>
                      <li>Click "Load Temporary Add-on"</li>
                      <li>Navigate to the extracted RecFix folder and select the manifest.json file</li>
                    </ol>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Optional Steps Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={() => setShowOptionalSteps(!showOptionalSteps)}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              {showOptionalSteps ? (
                <>
                  Hide Optional Steps <FiChevronUp className="text-xl" />
                </>
              ) : (
                <>
                  Show Optional Steps (Recommended for Updates) <FiChevronDown className="text-xl" />
                </>
              )}
            </button>
          </motion.div>

          {/* Optional Steps */}
          {showOptionalSteps && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-8"
            >
              {/* Step 3: API Setup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-full p-3">
                    <FiYoutube className="text-2xl text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">3. Get YouTube API Key (Optional)</h2>
                    <p className="text-gray-600 mb-4">For enhanced features and updates:</p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600">
                      <li>Go to the <a href="https://console.cloud.google.com/" className="text-indigo-600 hover:text-indigo-500">Google Cloud Console</a></li>
                      <li>Create a new project or select an existing one</li>
                      <li>Enable the YouTube Data API v3</li>
                      <li>Create credentials (API key)</li>
                      <li>Copy your API key</li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Configuration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-full p-3">
                    <FiSettings className="text-2xl text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">4. Configure RecFix (Optional)</h2>
                    <p className="text-gray-600 mb-4">To enable additional features:</p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600">
                      <li>Click the puzzle piece icon in your browser's toolbar</li>
                      <li>Find and pin RecFix</li>
                      <li>Click the RecFix icon</li>
                      <li>Open settings (gear icon)</li>
                      <li>Paste your YouTube API key</li>
                      <li>Save settings</li>
                    </ol>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-xl p-6 border border-green-100"
          >
            <div className="flex items-center gap-3 text-green-700">
              <FiCheck className="text-2xl" />
              <h2 className="text-xl font-semibold">You're All Set!</h2>
            </div>
            <p className="text-green-600 mt-2 ml-9">
              RecFix is now ready to help you improve your YouTube recommendations.
            </p>
          </motion.div>

          {/* Troubleshooting */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <div className="flex items-start gap-3">
                <FiAlertTriangle className="text-2xl text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Common Issues</h3>
                  <ul className="list-disc list-inside space-y-2 text-orange-700">
                    <li>If the extension doesn't load, try disabling and re-enabling Developer mode</li>
                    <li>Make sure all required files are present in the directory</li>
                    <li>Check for error messages in your browser's Developer Tools console (F12)</li>
                    <li>Verify your API key is correctly entered in the settings (if using optional features)</li>
                    <li>For Firefox users, you may need to reload the extension after browser restart</li>
                  </ul>
                  <div className="mt-4">
                    <Link to="/feedback" className="text-orange-800 hover:text-orange-900 underline">
                      Still having issues? Contact support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide