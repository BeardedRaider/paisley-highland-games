import React from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';


function EventsPage() {
  const events = [
    { name: "Gourock Highland Games", date: "11 May 2025", location: "Gourock, Inverclyde" },
    { name: "Atholl Gathering", date: "25 May 2025", location: "Blair Castle, Perthshire" },
    { name: "Markinch Highland Games", date: "1 June 2025", location: "Markinch, Fife" },
    { name: "Helensburgh & Lomond Games", date: "7 June 2025", location: "Helensburgh, Argyll" },
    { name: "Drumtochty Highland Games", date: "28 June 2025", location: "Auchenblae, Aberdeenshire" },
  ];

  return (
    <Layout>
        <HeroBanner
  image="/images/rope.png"
  title="Upcoming Highland Games"
  subtitle="Explore events across Scotland"
        />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Upcoming Highland Games</h1>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="border-l-4 border-green-700 p-4 bg-gray-50 rounded shadow-sm">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-sm text-gray-600">{event.date} — {event.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default EventsPage;