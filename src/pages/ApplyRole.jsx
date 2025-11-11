import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';

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

  return (
    <Layout>
        <HeroBanner
  image="/images/hammer.png"
  title={`Apply for: ${formatRole(role)}`}
  subtitle="Join the team and make a difference"
/>
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <Link to="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Available Roles
          </Link>

          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-blue-800 mb-4">
                Apply for: {formatRole(role)}
              </h1>
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