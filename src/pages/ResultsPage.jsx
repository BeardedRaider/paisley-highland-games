// ResultsPage: lists winners and top performers from events, grouped by region.
import React from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';

const results = [
  {
    event: "Caber Toss",
    winner: "Angus MacLeod",
    second: "Callum Fraser",
    third: "Ewan MacDonald",
    score: "1st Place",
    region: "West Midlands"
  },
  {
    event: "Hammer Throw",
    winner: "Fiona Stewart",
    second: "Mairi Sinclair",
    third: "Robbie Kerr",
    score: "1st Place",
    region: "South West"
  },
  {
    event: "Highland Dancing",
    winner: "Isla MacRae",
    second: "Skye MacKenzie",
    third: "Ailsa Grant",
    score: "Gold Medal",
    region: "South East"
  },
  {
    event: "Tug of War",
    winner: "Team Inverclyde",
    second: "Team Fife",
    third: "Team Perth",
    score: "Champions",
    region: "South West"
  },
  {
    event: "Pipe Band Parade",
    winner: "Blair Castle Pipes",
    second: "Paisley Pipers",
    third: "Dundee Marchers",
    score: "Best Performance",
    region: "Aberdeenshire"
  },
  {
    event: "Stone Put",
    winner: "Gregor MacNeil",
    second: "Jamie Boyd",
    third: "Alasdair Ross",
    score: "1st Place",
    region: "East Midlands"
  },
];

const regionColors = {
  "South West": "bg-orange-600",
  "West Midlands": "bg-purple-700",
  "East Midlands": "bg-blue-700",
  "Aberdeenshire": "bg-amber-700",
  "South East": "bg-pink-500",
};

const borderColors = {
  "South West": "#ea580c",
  "West Midlands": "#7e22ce",
  "East Midlands": "#1d4ed8",
  "Aberdeenshire": "#92400e",
  "South East": "#ec4899",
};

function ResultsPage() {
  return (
    <Layout>
      <HeroBanner
        image="/images/fireWorks.png"
        title="Highland Games Results"
        subtitle="Celebrating the champions of tradition and strength"
      />

      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-6xl mx-auto">

          {/* Intro */}
            <section className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-blue-800 mb-2">2025 Winners & Results</h1>
                <p className="text-gray-700 max-w-3xl mx-auto">
                The Highland Games bring together athletes, dancers, and musicians from across Scotland.
                Below are the top performers from this year’s events, organized by competition and region.
                </p>
            </section>

          {/* Results Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-t-4"
                    style={{ borderTopColor: borderColors[result.region] || '#1f2937' }}
                >
                    <span className={`inline-block px-3 py-1 text-xs text-white rounded-full mb-2 ${regionColors[result.region]}`}>
                    {result.region} Scotland
                    </span>
                    <h2 className="text-xl font-semibold text-green-800 mb-2">{result.event}</h2>
                    <p className="text-sm text-gray-700"><strong>Winner:</strong> {result.winner}</p>
                    <p className="text-sm text-gray-700"><strong>2nd Place:</strong> {result.second}</p>
                    <p className="text-sm text-gray-700"><strong>3rd Place:</strong> {result.third}</p>
                    <p className="text-sm text-gray-700"><strong>Result:</strong> {result.score}</p>
                </div>
                ))}
            </section>

          {/* Closing Celebration Section */}
            <section className="mt-12 bg-white rounded-lg shadow p-6 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">A Celebration of Community and Tradition</h2>
            <p className="text-gray-700 mb-4">
                The 2025 Highland Games were a true celebration of Scottish heritage, athleticism, and spirit. From the thunderous caber tosses to the graceful Highland dancing, every event showcased the passion and pride of our competitors.
            </p>
            <p className="text-gray-700 mb-4">
                We extend heartfelt congratulations to all participants — whether you took home a medal or simply gave it your all. Your energy and enthusiasm made this year unforgettable.
            </p>
            <p className="text-gray-700">
                A massive thank you to our volunteers, judges, stewards, and organizers who worked tirelessly behind the scenes. Your dedication brought the Games to life and ensured every moment ran smoothly.
            </p>
            </section>
        </div>
      </div>
    </Layout>
  );
}

export default ResultsPage;