function ImageCard({ title, description, image, alt }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;