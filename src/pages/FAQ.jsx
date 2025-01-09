import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
              initial={false}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="text-gray-500" />
                ) : (
                  <FiChevronDown className="text-gray-500" />
                )}
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? {" "}
            <a href="/feedback" className="text-indigo-600 hover:text-indigo-500">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "What is RecFix?",
    answer: "RecFix is a Chrome extension that helps you improve your YouTube recommendations by analyzing your current recommendations, filtering out unwanted content, and guiding YouTube's algorithm towards content you actually want to see."
  },
  {
    question: "How does RecFix work?",
    answer: "RecFix works by analyzing your YouTube recommendations, allowing you to mark videos you like, and using that information to help guide YouTube's algorithm. It operates entirely in your browser and uses the official YouTube API to make improvements to your recommendations."
  },
  {
    question: "Is RecFix free to use?",
    answer: "Yes, RecFix is free to use! However, due to YouTube API limitations, you are limited to 2 recommendation fixes per day to prevent excessive API usage."
  },
  {
    question: "Why do I need a YouTube API key?",
    answer: "A YouTube API key is required to interact with YouTube's services. This allows RecFix to analyze your recommendations and make improvements. Don't worry - we provide step-by-step instructions on how to get your API key."
  },
  {
    question: "Is my data safe?",
    answer: "Yes! RecFix operates entirely in your browser. Your data and preferences are stored locally and are never sent to third-party servers. Your API key is stored securely using encryption."
  },
  {
    question: "Why isn't RecFix on the Chrome Web Store?",
    answer: "RecFix is currently in development and testing phase. Once we've gathered sufficient feedback and ensured everything works perfectly, we plan to publish it on the Chrome Web Store."
  },
  {
    question: "How do I update RecFix?",
    answer: "To update RecFix, download the latest version from our GitHub repository and follow the same installation steps. Chrome will automatically update the existing installation."
  },
  {
    question: "What should I do if RecFix isn't working?",
    answer: "First, check if your API key is valid and properly configured. If issues persist, try disabling and re-enabling the extension, or check the console for error messages. You can also contact us through the feedback form for support."
  }
]

export default FAQ 