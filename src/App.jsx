import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplyRole from './pages/ApplyRole';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply/:role" element={<ApplyRole />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
}

export default App;