import { Link } from 'react-router-dom';

function RoleCard({ title, description, responsibilities = [], status, link }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {responsibilities.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <p className={`text-sm font-semibold mb-4 ${status === 'Applications open' ? 'text-green-700' : 'text-red-600'}`}>
          {status}
        </p>
      </div>
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