// src/components/Contact.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        alert(result.error || 'Failed to send message');
      }
    } catch (err) {
      setStatus('error');
      alert('Network error. Please email me directly: tusharcdry@gmail.com');
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Currently open for full-time roles, freelance projects, or collaboration on AI & full-stack products.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 slide-in-left">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-lg shadow-xl border border-indigo-700">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4 text-indigo-300" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:tusharcdry@gmail.com" className="text-gray-300 hover:text-white">tusharcdry@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-indigo-300" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919821985448" className="text-gray-300 hover:text-white">+91 98219 85448</a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-indigo-300" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
              <a href="https://linkedin.com/in/tushar-chaudhary-4a49621a3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-indigo-800/50 rounded-full flex items-center justify-center hover:bg-indigo-700 transition hover:scale-110">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/tushar12357" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-indigo-800/50 rounded-full flex items-center justify-center hover:bg-indigo-700 transition hover:scale-110">
                <Github size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 slide-in-right">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md mb-6 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" />
            <textarea name="message" rows={6} placeholder="Your Message" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md mb-6 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"></textarea>

            {/* Success/Error Feedback */}
            {status === 'success' && (
              <p className="text-green-400 font-medium mb-4 text-center">Message sent successfully! I'll reply soon</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-medium mb-4 text-center">Failed to send. Please email me directly.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} 
              {status !== 'sending' && <Send className="ml-3" size={20} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;