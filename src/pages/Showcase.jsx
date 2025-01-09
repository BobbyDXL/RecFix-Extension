import { motion } from 'framer-motion'
import { FiYoutube, FiShield, FiSettings } from 'react-icons/fi'
import { BiAnalyse, BiFilterAlt } from 'react-icons/bi'
import { HiOutlineLightningBolt } from 'react-icons/hi'

// Showcase 0: Header Image
const HeaderShowcase = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 flex items-center justify-center overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.25),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 inline-block">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl p-4">
              <FiYoutube className="text-7xl text-white" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl font-bold text-white mb-6 font-clash"
        >
          RecFix
        </motion.h1>

        {/* Motto */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-indigo-200 mb-8 font-cabinet max-w-2xl mx-auto"
        >
          Take Control of Your YouTube Feed with AI-Powered Recommendation Enhancement
        </motion.p>

        {/* Feature Pills */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-indigo-200 flex items-center gap-2">
            <BiAnalyse />
            Smart Analysis
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-indigo-200 flex items-center gap-2">
            <BiFilterAlt />
            Custom Filters
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-indigo-200 flex items-center gap-2">
            <FiShield />
            Privacy First
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 right-1/4 text-indigo-500/20 text-[200px]"
      >
        <FiYoutube />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 left-1/4 text-purple-500/20 text-[150px]"
      >
        <BiAnalyse />
      </motion.div>
    </div>
  )
}

// Showcase 1: Main Feature Highlight
const FeatureShowcase = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-white p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FiYoutube className="text-4xl text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold">RecFix for YouTube</h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left: Feature Description */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Take Control of Your YouTube Feed
              </h2>
              <p className="text-xl text-gray-600">
                Analyze, filter, and improve your recommendations with powerful AI-driven insights.
              </p>
              <div className="flex gap-4">
                <div className="bg-indigo-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">10,547+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">156,832+</div>
                  <div className="text-gray-600">Recommendations Fixed</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-3">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                      <FiYoutube className="text-2xl text-gray-400" />
                    </div>
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Analyzing feed...</span>
                  <span>67%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Showcase 2: Features Grid
const FeaturesShowcase = () => {
  const features = [
    {
      icon: <BiAnalyse />,
      title: "Smart Analysis",
      description: "AI-powered analysis of your YouTube recommendations"
    },
    {
      icon: <BiFilterAlt />,
      title: "Custom Filters",
      description: "Filter out unwanted content and boost what you love"
    },
    {
      icon: <FiSettings />,
      title: "Easy Setup",
      description: "Simple one-click installation and configuration"
    },
    {
      icon: <FiShield />,
      title: "Privacy First",
      description: "Your data never leaves your browser"
    }
  ]

  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-white p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Better Recommendations
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 flex gap-4">
              <div className="bg-indigo-100 p-3 rounded-full h-fit">
                <div className="text-2xl text-indigo-600">{feature.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Showcase 3: Privacy Focus
const PrivacyShowcase = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-indigo-900 p-8 flex items-center justify-center text-white">
      <div className="max-w-6xl w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <div className="text-center mb-12">
          <div className="bg-indigo-500/20 p-4 rounded-full w-fit mx-auto mb-6">
            <FiShield className="text-4xl text-indigo-400" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Your Privacy Matters</h2>
          <p className="text-xl text-indigo-200">
            All data processing happens locally in your browser
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="bg-indigo-500/20 p-3 rounded-full w-fit mb-4">
              <HiOutlineLightningBolt className="text-2xl text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Processing</h3>
            <p className="text-gray-300">
              All recommendation analysis happens right in your browser
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="bg-indigo-500/20 p-3 rounded-full w-fit mb-4">
              <FiShield className="text-2xl text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Data Collection</h3>
            <p className="text-gray-300">
              We never store or transmit your personal data
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="bg-indigo-500/20 p-3 rounded-full w-fit mb-4">
              <FiSettings className="text-2xl text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-gray-300">
              Your preferences are stored securely on your device
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Showcase Component
const Showcase = () => {
  return (
    <div>
      <HeaderShowcase />
      <FeatureShowcase />
      <FeaturesShowcase />
      <PrivacyShowcase />
    </div>
  )
}

export default Showcase 