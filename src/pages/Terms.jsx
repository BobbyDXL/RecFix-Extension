import { motion } from 'framer-motion'
import { FiShield, FiFileText } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const Terms = () => {
  console.log('Terms of Service Page Rendered')

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
          <FiFileText className="text-4xl text-indigo-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">Last updated: February 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiShield className="text-indigo-600" />
            Agreement to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            By installing and using the RecFix Chrome extension, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our extension.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">License and Usage</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-xl mb-3">Grant of License</h3>
            <p className="text-gray-600 mb-4">
              We grant you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Install and use the RecFix extension for personal use</li>
              <li>Use features within the specified rate limits</li>
              <li>Access and analyze your YouTube recommendations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage Restrictions</h2>
          <p className="text-gray-600 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Modify, reverse engineer, or decompile the extension</li>
            <li>Use the extension for any illegal purposes</li>
            <li>Attempt to bypass rate limits or security measures</li>
            <li>Distribute or share your API credentials</li>
          </ul>
          <div className="bg-indigo-50 rounded-xl p-6">
            <p className="text-gray-700 font-semibold flex items-center gap-2">
              <HiOutlineLightningBolt className="text-indigo-600" />
              Rate Limit: 2 recommendation fixes per day
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">YouTube API Services</h2>
          <p className="text-gray-600 mb-4">
            RecFix uses YouTube API Services and requires you to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provide your own YouTube API key</li>
            <li>Comply with YouTube's Terms of Service</li>
            <li>Manage your own API quota usage</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600">
              RecFix is provided "as is" without any warranties. We do not guarantee that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>The extension will always function error-free</li>
              <li>Recommendations will improve to your satisfaction</li>
              <li>YouTube's API services will always be available</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the extension.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. Continued use of the extension after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-600 mb-4">
            We may terminate or suspend your access to RecFix immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            For any questions about these Terms, please contact us:
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

export default Terms 