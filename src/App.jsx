import ImageCard from './components/ImageCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Paisley Highland Games</h1>
        <p className="mt-2 text-center text-lg">
          Discover roles, register for events, and celebrate Scottish tradition
        </p>
        <nav className="mt-4 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="relative">
        <img src="/images/marchband.png" alt="Highland Games Parade" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">Paisley Highland Games</h1>
          <p className="mt-2 text-lg">Tradition, strength, and celebration</p>
        </div>
      </div>


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
        <img src="/images/dancing.png" alt="Highland Dancing" className="rounded shadow-md mb-4" />
        <h3 className="text-xl font-bold text-blue-800 mb-2">Upcoming Games Across Scotland</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Gourock Highland Games</strong> – 11 May 2025</li>
          <li><strong>Atholl Gathering</strong> – 25 May 2025</li>
          <li><strong>Markinch Highland Games</strong> – 1 June 2025</li>
          <li><strong>Helensburgh & Lomond Games</strong> – 7 June 2025</li>
          <li><strong>Drumtochty Highland Games</strong> – 28 June 2025</li>
        </ul>
      </section>

      {/* Job Listings */}
      <section className="bg-white p-6 max-w-4xl mx-auto rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Available Roles</h2>
        <ul className="space-y-6">
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Event Steward</h3>
            <p>Help manage crowd flow and safety during the games.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Registration Assistant</h3>
            <p>Assist participants with signing up for events.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
          <li className="border-l-4 border-green-700 p-4 bg-gray-50 rounded">
            <h3 className="text-xl font-bold">Scorekeeper</h3>
            <p>Record and publish competition results.</p>
            <span className="text-yellow-500 font-semibold">Applications open</span>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center text-sm">
        <p>&copy; 2025 Paisley Highland Games Committee</p>
        <p className="mt-2">Contact: info@paisleygames.org | Follow us on social media</p>
      </footer>
    </div>
  );
}

export default App;