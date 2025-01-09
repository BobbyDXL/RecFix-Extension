import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiMessageCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Feedback = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("TX8jnM_Ze4KbnxT2J")
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'bug',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })
    
    try {
      console.log('Sending feedback email...')
      await emailjs.send(
        'service_1ucp4gh',
        'template_gnuoh3b',
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          category: formData.category,
          message: formData.message,
          subject: `RecFix Feedback: ${formData.category} from ${formData.name}`,
          date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            category: formData.category,
            message: formData.message,
            date: new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
          }
        },
        'TX8jnM_Ze4KbnxT2J'
      )
      
      console.log('Feedback email sent successfully!')
      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({
        name: '',
        email: '',
        category: 'bug',
        message: ''
      })
    } catch (error) {
      console.error('Error sending feedback:', error)
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactOptions = [
    {
      icon: <FiGithub className="text-2xl text-indigo-600" />,
      title: "GitHub Issues",
      description: "Report bugs or request features through our GitHub repository",
      link: "https://github.com/BobbyDXL/RecFix-Extension/issues/new"
    },
    {
      icon: <FiMessageCircle className="text-2xl text-indigo-600" />,
      title: "Discord Community",
      description: "Join our Discord community for real-time support and discussions",
      link: "https://discord.com/invite/TQZauB99tD"
    },
    {
      icon: <FiSend className="text-2xl text-indigo-600" />,
      title: "Email Support",
      description: "Send us an email for direct support and inquiries",
      link: "mailto:recfixyt@gmail.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Feedback & Support</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're constantly working to improve RecFix. Your feedback helps us make it better for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {option.icon}
              </div>
              <h3 className="font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  required
                  disabled={status.submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                  required
                  disabled={status.submitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                disabled={status.submitting}
              >
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                required
                disabled={status.submitting}
              ></textarea>
            </div>

            {status.error && (
              <div className="text-red-500 text-sm">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div className="text-green-500 text-sm">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 ${
                status.submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={status.submitting}
            >
              <FiSend />
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        <div className="mt-12 text-center text-gray-600">
          <p>Response time: Usually within 24-48 hours</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback 