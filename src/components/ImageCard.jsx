// ImageCard: simple card that shows an image, title and description.
// Props:
// - title: card heading
// - description: short body text
// - image: image URL
// - alt: alt text for the image (important for accessibility)
function ImageCard({ title, description, image, alt }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image at the top */}
      <img src={image} alt={alt} className="w-full h-48 object-cover" />

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;