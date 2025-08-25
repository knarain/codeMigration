import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (Not Really!)",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            I'd love to hear about your story. For inquiries about weddings, portraits, or collaborations, please fill out the form below.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 focus:border-gray-800 text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 focus:border-gray-800 text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300"
              placeholder="Your Email"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 focus:border-gray-800 text-gray-800 placeholder-gray-400 focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Tell me your story..."
          />

          <div className="text-center">
            <Button
              type="submit"
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-none px-12 py-6 text-sm uppercase tracking-widest group"
            >
              Send Message
              <Send className="h-4 w-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;