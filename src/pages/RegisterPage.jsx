// RegisterPage: competitor registration form for events and visual highlights.
import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import ImageCard from '../components/ImageCard';

const competitions = [
  { id: 'caber', name: 'Caber Toss' },
  { id: 'hammer', name: 'Hammer Throw' },
  { id: 'tug', name: 'Tug of War' },
  { id: 'dance', name: 'Highland Dancing' },
  { id: 'pipes', name: 'Pipe Band Parade' },
];

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCheckboxChange = (eventId) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <HeroBanner
        image="/images/hammer.png"
        title="Register for Competitions"
        subtitle="Sign up to take part in the Highland Games"
      />

      {/* Intro Section */}
      <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Join the Competition</h2>
          <p className="mb-4">
            Whether you're tossing cabers, dancing in Highland dress, or leading a pipe band, the Paisley Highland Games
            offer a chance to showcase your skills and celebrate Scottish tradition. Use the form below to register for
            your chosen events.
          </p>
          <p className="text-gray-700">
            All competitors must register in advance. You’ll receive a confirmation email with your schedule and check-in
            details closer to the event.
          </p>
        </div>
        <img src="/images/kettle.png" alt="Highland Dancing" className="rounded shadow-md w-full h-auto max-h-64 object-cover" />
      </section>

      {/* Registration Form */}
      <section className="fade-in bg-gray-100 text-gray-800 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Competition Registration</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-semibold mb-1">Full Name</label>
                  <input type="text" className="w-full border p-2 rounded" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email Address</label>
                  <input type="email" className="w-full border p-2 rounded" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Select Events</label>
                  <div className="space-y-2">
                    {competitions.map((comp) => (
                      <label key={comp.id} className="block">
                        <input
                          type="checkbox"
                          value={comp.id}
                          checked={selectedEvents.includes(comp.id)}
                          onChange={() => handleCheckboxChange(comp.id)}
                          className="mr-2"
                        />
                        {comp.name}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                  Submit Registration
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-4">
                Please arrive at least 30 minutes before your event. Registration closes on 10th June 2025.
              </p>
            </>
          ) : (
            <div className="text-center fade-in">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Registration Submitted!</h2>
              <p className="text-gray-700">Thank you for signing up. We’ll be in touch with event details soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Visual Highlights */}
      <section className="p-6 max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Competition Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImageCard
            title="Caber Toss"
            description="A test of strength and balance, where athletes flip a massive log end over end."
            image="/images/logtoss.png"
            alt="Caber Toss"
          />
          <ImageCard
            title="Highland Dancing"
            description="Traditional Scottish dance performed in full Highland dress."
            image="/images/dancing.png"
            alt="Highland Dancing"
          />
          <ImageCard
            title="Pipe Band Parade"
            description="Marching bands in tartan performing iconic Scottish tunes."
            image="/images/marchband.png"
            alt="Pipe Band Parade"
          />
        </div>
      </section>
    </Layout>
  );
}

export default RegisterPage;