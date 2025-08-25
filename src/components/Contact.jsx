import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const { toast } = useToast();

  // ✅ Date generator (moved above)
  function dateFunction() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  }

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      date: dateFunction(), // now works
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          'https://rashmiphotography.com/backend/client_api.php',
          values
        );

        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. We’ll get back to you soon!',
        });
        resetForm();
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Failed to Send',
          description: 'Something went wrong. Please try again later.',
        });
      }
    },
  });

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
            I'd love to hear about your story. For inquiries about weddings,
            portraits, or collaborations, please fill out the form below.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={formik.handleSubmit}
          className="space-y-6"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 bg-gray-50 border-b-2 ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Your Name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 bg-gray-50 border-b-2 ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Your Email"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border-b-2 ${
                formik.touched.phone && formik.errors.phone
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="Your Phone Number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.phone}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows={5}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border-b-2 ${
                formik.touched.message && formik.errors.message
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="Tell me your story..."
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-12 py-6"
            >
              Send Message
              <Send className="h-4 w-4 ml-3" />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
