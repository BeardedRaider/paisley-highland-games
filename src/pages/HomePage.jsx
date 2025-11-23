// HomePage: landing page with hero, intro, highlights and available roles.
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
  <h2 className="text-3xl font-bold text-blue-800 mb-4">What Are the Highland Games?</h2>
  <p className="mb-4 text-lg text-gray-800">
    The Highland Games are a centuries-old celebration of Scottish culture, combining athleticism, music, and tradition.
    Originating in the 11th century under King Malcolm III, they were used to select the strongest warriors and messengers.
    Today, they showcase iconic events like caber tossing, hammer throwing, and tug-of-war, alongside Highland dancing and pipe band competitions.
  </p>
  <p className="mb-4 text-gray-700">
    These games are more than sport — they’re a vibrant expression of clan identity, community pride, and national heritage.
    Held across Scotland each summer, they attract thousands of visitors eager to experience the spectacle and spirit of the Highlands.
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
      <section className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center mb-10 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">About the Paisley Highland Games</h2>
          <p className="mb-4">
            The Paisley Highland Games are a modern revival of Scotland’s proud tradition, bringing together athletes,
            musicians, dancers, and families for a day of celebration. Held at <strong>Barshaw Park</strong> on
            <strong> Saturday, 14th June 2025</strong>, the event features iconic competitions like caber tossing,
            tug-of-war, and stone put — alongside pipe bands, Highland dancing, and local food vendors.
          </p>
          <p className="text-gray-700">
            Whether you're competing, volunteering, or spectating, the Games offer a chance to connect with Scottish heritage
            in a vibrant, inclusive setting. The event is open to all and welcomes visitors from across Renfrewshire and beyond.
          </p>
        </div>
        <img
          src="/images/rope.png"
          alt="Tug of War"
          className="rounded shadow-md w-full h-auto max-h-64 object-cover"
        />
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