function RoleCard({ title, description, status, link }) {
  return (
    <div className="border-l-4 border-green-700 p-4 bg-gray-50 rounded shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
      <span className="text-yellow-500 font-semibold block mb-2">{status}</span>
      <a href={link} className="text-blue-600 hover:underline text-sm">Apply Now</a>
    </div>
  );
}

export default RoleCard;