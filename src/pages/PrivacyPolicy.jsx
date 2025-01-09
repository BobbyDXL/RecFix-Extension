import { motion } from 'framer-motion'
import { FiShield } from 'react-icons/fi'
import { MdOutlinePrivacyTip } from 'react-icons/md'

const PrivacyPolicy = () => {
  console.log('Privacy Policy Page Rendered')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-block p-3 bg-indigo-100 rounded-full mb-4"
        >
          <MdOutlinePrivacyTip className="text-4xl text-indigo-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">Last updated: February 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiShield className="text-indigo-600" />
            Introduction
          </h2>
          <p className="text-gray-600 mb-4">
            At RecFix, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Chrome extension.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-xl mb-3">YouTube Data</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your YouTube recommendations data for analysis</li>
              <li>Watch history patterns (only when explicitly requested)</li>
              <li>Interaction data with recommended videos</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-xl mb-3">Technical Data</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Browser type and version</li>
              <li>Extension settings and preferences</li>
              <li>Error logs for troubleshooting</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the collected information solely for:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Analyzing and improving your YouTube recommendations</li>
            <li>Providing personalized filtering options</li>
            <li>Improving the RecFix extension functionality</li>
            <li>Technical troubleshooting</li>
          </ul>
          <div className="bg-indigo-50 rounded-xl p-6">
            <p className="text-gray-700 font-semibold">
              Important: All data processing happens locally in your browser. We do not store or transmit your personal data to our servers.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
          <p className="text-gray-600 mb-4">
            Your data is stored locally on your device and is protected through:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Local browser storage encryption</li>
            <li>Secure handling of YouTube API credentials</li>
            <li>Regular security updates</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Access your stored data</li>
            <li>Delete your data</li>
            <li>Opt-out of data collection</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="text-gray-600 space-y-2">
              <li>Email: do941567@gmail.com</li>
              <li>GitHub: github.com/BobbyDXL</li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy 