import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';

const roles = {
  'event-steward': {
    title: 'Event Steward',
    description: 'Support the smooth running of the games by guiding attendees and ensuring safety.',
    responsibilities: [
      'Monitor crowd flow and entry points',
      'Assist with emergency protocols',
      'Provide directions and event info',
    ],
    image: '/images/dancing.png',
  },
  'registration-assistant': {
    title: 'Registration Assistant',
    description: 'Welcome participants and help them sign up for events.',
    responsibilities: [
      'Check registration lists',
      'Distribute wristbands and materials',
      'Answer questions at the welcome desk',
    ],
    image: '/images/hammer.png',
  },
  'scorekeeper': {
    title: 'Scorekeeper',
    description: 'Record and publish competition results in real time.',
    responsibilities: [
      'Track scores for each event',
      'Update leaderboards',
      'Verify results with judges',
    ],
    image: '/images/log2.png',
  },
  'media-coordinator': {
    title: 'Media Coordinator',
    description: 'Capture the energy of the games through photos and social media.',
    responsibilities: [
      'Take photos and short videos',
      'Post updates on social platforms',
      'Interview participants and guests',
    ],
    image: '/images/rope.png',
  },
};


function formatRole(role) {
  return role
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function ApplyRole() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSelect = (roleKey) => {
    navigate(`/apply/${roleKey}`);
  };

  const roleData = roles[role];

  return (
    <Layout>
      <HeroBanner
        image="/images/hammer.png"
        title={role ? `Apply for: ${formatRole(role)}` : 'Apply for a Role'}
        subtitle={role ? 'Join the team and make a difference' : 'Choose a role to begin your application'}
      />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          {!role ? (
            <>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Choose a Role to Apply</h2>
            <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(roles).map(([key, data]) => (
                <div
                key={key}
                className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer flex flex-col"
                onClick={() => handleSelect(key)}
                >
                <img src={data.image} alt={data.title} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{data.title}</h3>
                <p className="text-gray-700 mb-3">{data.description}</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                    {data.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                <span className="text-green-700 font-semibold text-sm mb-2">Applications open</span>
                <button className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm">
                    Apply Now
                </button>
                </div>
            ))}
            </div>

            </>
          ) : !submitted ? (
            <>
              <Link to="/apply" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
                ← Change Role
              </Link>
              <h1 className="text-2xl font-bold text-blue-800 mb-4">
                Apply for: {formatRole(role)}
              </h1>
              <p className="mb-6 text-gray-700">{roleData?.description}</p>
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
                  <label className="block font-semibold mb-1">Why are you interested?</label>
                  <textarea className="w-full border p-2 rounded" rows="4" required></textarea>
                </div>
                <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                  Submit Application
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Application Submitted!</h2>
              <p className="text-gray-700">Thank you for applying. Redirecting you back to the homepage…</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ApplyRole;