import { Link } from 'react-router-dom';

// RoleCard: displays a role with title, description, optional responsibilities,
// a status label, and an 'Apply Now' link.
// Props:
// - title: role title
// - description: short description
// - responsibilities: array of short responsibility strings (optional)
// - status: string describing application status (used to change color)
// - link: route to the role's application page
function RoleCard({ title, description, responsibilities = [], status, link }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Show responsibilities list if any items are provided */}
        {responsibilities.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Status text; color depends on whether applications are open */}
        <p className={`text-sm font-semibold mb-4 ${status === 'Applications open' ? 'text-green-700' : 'text-red-600'}`}>
          {status}
        </p>
      </div>

      {/* Link to the application page */}
      <Link
        to={link}
        className="mt-auto inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800"
      >
        Apply Now
      </Link>
    </div>
  );
}

export default RoleCard;