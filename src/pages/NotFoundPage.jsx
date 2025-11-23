// NotFoundPage: simple 404 page shown when a route isn't matched.
import React from 'react';
import Layout from '../components/Layout';

function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
        <h1 className="text-5xl font-bold text-red-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist. It may have been moved or deleted.
        </p>
        <a href="/" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Return to Homepage
        </a>
      </div>
    </Layout>
  );
}

export default NotFoundPage;