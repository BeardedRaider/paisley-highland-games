// EventsPage: shows an events calendar and a region map to help users find games.
import React from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const events = [
  { name: "Gourock Highland Games", 
    date: "11 May 2025", 
    location: "Gourock, Inverclyde", 
    region: "South West" },
  { name: "Atholl Gathering", 
    date: "25 May 2025", 
    location: "Blair Castle, Perthshire", 
    region: "West Midlands" },
  { name: "Markinch Highland Games", 
    date: "1 June 2025", 
    location: "Markinch, Fife", 
    region: "East Midlands" },
  { name: "Helensburgh & Lomond Games", 
    date: "7 June 2025", 
    location: "Helensburgh, Argyll", 
    region: "South West" },
  { name: "Drumtochty Highland Games", 
    date: "28 June 2025", 
    location: "Auchenblae, Aberdeenshire", 
    region: "Aberdeenshire" },
  { name: "Peebles Highland Games", 
    date: "5 July 2025", 
    location: "Peebles, Scottish Borders", 
    region: "South East" },
];

const regionColors = {
  "North East": "bg-red-700",
  "North West": "bg-yellow-500",
  "West Midlands": "bg-purple-700",
  "East Midlands": "bg-blue-700",
  "Aberdeenshire": "bg-amber-700",
  "South West": "bg-orange-600",
  "South East": "bg-pink-500",
  "Edinburgh": "bg-green-700",
  "East of Scotland": "bg-yellow-300",
};

const borderColors = {
  "North East": "#b91c1c",
  "North West": "#eab308",
  "West Midlands": "#7e22ce",
  "East Midlands": "#1d4ed8",
  "Aberdeenshire": "#92400e",
  "South West": "#ea580c",
  "South East": "#ec4899",
  "Edinburgh": "#15803d",
  "East of Scotland": "#facc15",
};

function EventsPage() {
  return (
    <Layout>
      <HeroBanner
        image="/images/rope.png"
        title="Upcoming Highland Games"
        subtitle="Explore events across Scotland"
      />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-6xl mx-auto">

          {/* Intro */}
          <section className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Highland Games Calendar</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover upcoming Highland Games across Scotland — from coastal towns to castle grounds.
              Each event celebrates tradition, strength, and community. Plan your summer adventure below.
            </p>
          </section>

          {/* Region Map Section */}
          <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center mb-10 bg-white rounded-lg shadow">
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Scotland’s Highland Regions</h2>
              <p className="mb-4">
                Each Highland Games event belongs to a region of Scotland. Use the map to explore where each event takes place.
                The colors shown here match the event cards below, helping you plan your journey across the country.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                {Object.entries(regionColors).map(([region, color]) => (
                  <div key={region} className="flex items-center">
                    <span className={`inline-block w-3 h-3 mr-2 rounded-sm ${color}`}></span>
                    {region}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/regionMap.jpeg"
              alt="Map of Scotland with regions"
              className="rounded shadow-md w-full h-auto max-h-96 object-contain"
            />
          </section>

          {/* Events Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-t-4"
                style={{ borderTopColor: borderColors[event.region] || '#1f2937' }}
              >
                <span className={`inline-block px-3 py-1 text-xs text-white rounded-full mb-2 ${regionColors[event.region]}`}>
                  {event.region} Scotland
                </span>
                <h2 className="text-xl font-semibold text-green-800 mb-2">{event.name}</h2>
                <p className="flex items-center text-sm text-gray-600 mb-1">
                  <FaCalendarAlt className="mr-2 text-green-600" /> {event.date}
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" /> {event.location}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default EventsPage;