import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('events');

    const events = [
    { id: 1, name: "Gourock Highland Games", date: "11 May 2025", location: "Gourock", region: "South West" },
    { id: 2, name: "Atholl Gathering", date: "25 May 2025", location: "Blair Castle", region: "West Midlands" },
    { id: 3, name: "Peebles Highland Games", date: "17 August 2025", location: "Peebles", region: "South East" },
    { id: 4, name: "Aberdeen Highland Games", date: "1 June 2025", location: "Aberdeen", region: "Aberdeenshire" },
    { id: 5, name: "Stirling Highland Games", date: "24 August 2025", location: "Stirling", region: "East Midlands" },
    { id: 6, name: "Inverness Highland Games", date: "13 July 2025", location: "Inverness", region: "West Midlands" },
    ];


    const results = [
    { id: 1, event: "Caber Toss", winner: "Angus MacLeod", region: "West Midlands" },
    { id: 2, event: "Hammer Throw", winner: "Fiona Stewart", region: "South West" },
    { id: 3, event: "Highland Dancing", winner: "Isla MacRae", region: "South East" },
    { id: 4, event: "Tug of War", winner: "Team Inverclyde", region: "South West" },
    { id: 5, event: "Pipe Band Parade", winner: "Blair Castle Pipes", region: "Aberdeenshire" },
    { id: 6, event: "Stone Put", winner: "Gregor MacNeil", region: "East Midlands" },
    ];


    const applications = [
    { id: 1, name: "Eilidh Fraser", role: "Steward", status: "Pending" },
    { id: 2, name: "Jamie MacDonald", role: "First Aid", status: "Reviewed" },
    { id: 3, name: "Callum Boyd", role: "Event Setup", status: "Pending" },
    { id: 4, name: "Mairi Sinclair", role: "Registration Desk", status: "Approved" },
    { id: 5, name: "Robbie Kerr", role: "Security", status: "Rejected" },
    ];


  const renderTab = () => {
    switch (activeTab) {
      case 'events':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Manage Events</h3>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Event</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Region</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id} className="border-t">
                    <td className="p-2">{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.region}</td>
                    <td>
                      <button className="text-blue-600 hover:underline mr-2">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'results':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Manage Results</h3>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Event</th>
                  <th>Winner</th>
                  <th>Region</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map(result => (
                  <tr key={result.id} className="border-t">
                    <td className="p-2">{result.event}</td>
                    <td>{result.winner}</td>
                    <td>{result.region}</td>
                    <td>
                      <button className="text-blue-600 hover:underline mr-2">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'applications':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">View Applications</h3>
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id} className="border-t">
                    <td className="p-2">{app.name}</td>
                    <td>{app.role}</td>
                    <td>{app.status}</td>
                    <td>
                      <button className="text-green-700 hover:underline mr-2">Approve</button>
                      <button className="text-red-600 hover:underline">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <HeroBanner
        image="/images/tartan.svg"
        title="Admin Dashboard"
        subtitle="Manage events, results, and applications"
      />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded ${activeTab === 'events' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 rounded ${activeTab === 'results' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
            >
              Results
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 rounded ${activeTab === 'applications' ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
            >
              Applications
            </button>
          </div>

          {renderTab()}
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;