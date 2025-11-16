import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <Layout>
      <HeroBanner
        image="/images/marchband.png"
        title="Get in Touch"
        subtitle="We’d love to hear from you"
      />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact the Organizers</h2>
            <p className="mb-4">
              Whether you have questions about the events, want to volunteer, or just want to share feedback —
              we’re here to help. Reach out using the form or contact details below.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Email:</strong> info@highlandgames.scot</li>
              <li><strong>Phone:</strong> +44 141 123 4567</li>
              <li><strong>Address:</strong> Highland Games Office, Paisley Town Hall, PA1 1JF</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Office hours: Monday to Friday, 9am–5pm
            </p>
          </div>

          {/* Contact Form */}
          <div>
            {!submitted ? (
              <>
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="block font-semibold mb-1">Name</label>
                    <input type="text" className="w-full border p-2 rounded" required />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input type="email" className="w-full border p-2 rounded" required />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Message</label>
                    <textarea className="w-full border p-2 rounded h-32" required />
                  </div>
                  <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h2>
                <p className="text-gray-700">Thanks for reaching out. We’ll get back to you as soon as we can.</p>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Map */}
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Find Us</h2>
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Highland Games Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.979751027303!2d-4.424385684009204!3d55.84563498057756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845e2b6e1d3f1%3A0x2c3e2f3f6f5e3f5d!2sPaisley%20Town%20Hall!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-5xl mx-auto mt-12 bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Join Our Newsletter</h2>
          <p className="text-gray-700 mb-4">
            Stay up to date with the latest news, event announcements, and behind-the-scenes stories from the Highland Games.
          </p>
          {!newsletterSubmitted ? (
            <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                className="border p-2 rounded w-full sm:w-2/3"
                required
              />
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-semibold">Thanks for subscribing! You’ll hear from us soon.</p>
          )}
        </div>



      </div>
    </Layout>
  );
}

export default ContactPage;