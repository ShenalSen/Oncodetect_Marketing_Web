import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Linkedin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team for
              support, demos, or partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 mb-16">
            {/* Primary Contact Methods */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: 'Phone',
                  info: '+94 11 3456789',
                  description: 'Monday to Friday, 9am to 6pm EST'
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: 'Email',
                  info: 'oncodetect@gmail.com',
                  description: "We'll respond within 24 hours"
                },
                {
                  icon: <Linkedin className="h-6 w-6" />,
                  title: 'LinkedIn',
                  info: '@oncodetect',
                  description: 'Connect with us professionally',
                  link: 'https://linkedin.com/company/oncodetect'
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="inline-block p-3 bg-[#7032eb] bg-opacity-10 rounded-full text-[#7032eb] mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7032eb] font-medium mb-2 hover:underline block"
                    >
                      {contact.info}
                    </a>
                  ) : (
                    <p className="text-[#7032eb] font-medium mb-2">{contact.info}</p>
                  )}
                  <p className="text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                {
                  icon: <Instagram className="h-6 w-6" />,
                  title: 'Instagram',
                  info: '@oncodetect',
                  description: 'Follow our latest updates',
                  link: 'https://www.instagram.com/oncodetect?igsh=MXU2amRjazA3NTdhOA=='
                },
                {
                  icon: <Facebook className="h-6 w-6" />,
                  title: 'Facebook',
                  info: '@oncodetect',
                  description: 'Join our community',
                  link: 'https://www.facebook.com/share/19tKtkPkGH/'
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="inline-block p-3 bg-[#7032eb] bg-opacity-10 rounded-full text-[#7032eb] mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7032eb] font-medium mb-2 hover:underline block"
                  >
                    {contact.info}
                  </a>
                  <p className="text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7032eb]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7032eb]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7032eb]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7032eb]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Contact Support"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about Oncodetect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How can I request a demo?',
                answer:
                  'You can request a demo by filling out the contact form above or calling our sales team directly.'
              },
              {
                question: 'What support options are available?',
                answer:
                  'We offer 24/7 technical support, training sessions, and detailed documentation.'
              },
              {
                question: 'How do I get started with Oncodetect?',
                answer:
                  'Our team will guide you through the implementation process, including installation and training.'
              },
              {
                question: 'Is Oncodetect HIPAA compliant?',
                answer:
                  'Yes, Oncodetect is fully HIPAA compliant and maintains strict security standards.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#7032eb] bg-opacity-10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-[#7032eb]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;