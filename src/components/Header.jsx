import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-800 text-white p-6 shadow-md">
      <h1 className="text-4xl font-bold text-center">Paisley Highland Games</h1>
      <p className="mt-2 text-center text-lg">
        Discover roles, register for events, and celebrate Scottish tradition
      </p>
      <nav className="mt-4 flex justify-center space-x-6 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/apply/event-steward" className="hover:underline">Apply</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;