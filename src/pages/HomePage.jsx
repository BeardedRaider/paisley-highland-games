import React from 'react';
import HeroBanner from '../components/HeroBanner';
import RoleCard from '../components/RoleCard';
import ImageCard from '../components/ImageCard';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>

      {/* Hero Image */}
    <HeroBanner
    image="/images/marchband.png"
    title="Paisley Highland Games"
    subtitle="Tradition, strength, and celebration"
    />



      {/* Introduction */}
      <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Welcome to the Games</h2>
          <p className="mb-4">
            The Paisley Highland Games revive centuries-old traditions through athletic competitions,
            music, and community spirit. Join us in celebrating Scottish heritage.
          </p>
        </div>
        <img src="/images/logtoss.png" alt="Caber Toss" className="rounded shadow-md" />
      </section>

      {/* What Are the Highland Games? */}
      <section className="bg-white p-6 max-w-5xl mx-auto rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">What Are the Highland Games?</h2>
        <p className="mb-4">
          The Highland Games are a celebration of Scottish culture, featuring traditional athletic events
          such as caber tossing, tug-of-war, and hammer throwing. They also include music, dance, and
          community festivities, making them a vibrant part of Scotland’s summer calendar.
        </p>
        <p className="mb-4">
          The Paisley Highland Games will be held at <strong>Barshaw Park, Paisley</strong> on
          <strong>Saturday, 14th June 2025</strong>. The event is open to the public and welcomes
          volunteers, competitors, and spectators alike.
        </p>
      </section>

      {/* Highland Games Visual Highlights */}
      <section className="p-6 max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Highland Games in Action</h2>
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

      {/* Upcoming Events */}
      <section className="bg-white p-6 max-w-5xl mx-auto rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">About the Highland Games</h2>
        <p className="mb-4">
          The Paisley Highland Games will be held at <strong>Barshaw Park</strong> on
          <strong>Saturday, 14th June 2025</strong>. Expect caber tossing, pipe bands, Highland dancing,
          and more.
        </p>
        <img src="/images/rope.png" alt="Tug of War" className="rounded shadow-md mb-4" />
        <h3 className="text-xl font-bold text-blue-800 mb-2">Upcoming Games Across Scotland</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Gourock Highland Games</strong> – 11 May 2025</li>
          <li><strong>Atholl Gathering</strong> – 25 May 2025</li>
          <li><strong>Markinch Highland Games</strong> – 1 June 2025</li>
          <li><strong>Helensburgh & Lomond Games</strong> – 7 June 2025</li>
          <li><strong>Drumtochty Highland Games</strong> – 28 June 2025</li>
        </ul>
      </section>

      {/* Available Roles */}
      <section className="bg-white p-6 max-w-5xl mx-auto rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Available Roles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <RoleCard
  title="Event Steward"
  description="Support the smooth running of the games by guiding attendees and ensuring safety."
  responsibilities={[
    "Monitor crowd flow and entry points",
    "Assist with emergency protocols",
    "Provide directions and event info",
    "Report incidents to security",
  ]}
  status="Applications open"
  link="/apply/event-steward"
/>

<RoleCard
  title="Registration Assistant"
  description="Welcome participants and help them sign up for events."
  responsibilities={[
    "Check registration lists",
    "Distribute wristbands and materials",
    "Answer questions at the welcome desk",
    "Coordinate with event leads",
  ]}
  status="Applications open"
  link="/apply/registration-assistant"
/>

<RoleCard
  title="Scorekeeper"
  description="Record and publish competition results in real time."
  responsibilities={[
    "Track scores for each event",
    "Update leaderboards",
    "Verify results with judges",
    "Assist with awards ceremony",
  ]}
  status="Applications open"
  link="/apply/scorekeeper"
/>

<RoleCard
  title="Media Coordinator"
  description="Capture the energy of the games through photos and social media."
  responsibilities={[
    "Take photos and short videos",
    "Post updates on social platforms",
    "Interview participants and guests",
    "Coordinate with press and sponsors",
  ]}
  status="Applications open"
  link="/apply/media-coordinator"
/>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;