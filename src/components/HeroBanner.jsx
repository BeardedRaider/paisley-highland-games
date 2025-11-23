// HeroBanner component
// Props:
// - image: URL for the background image
// - title: main heading text (used also as img alt text)
// - subtitle: optional subheading shown under the title
function HeroBanner({ image, title, subtitle }) {
  return (
    <div className="relative">
      {/* Background image */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* Overlay with semi-transparent background and centered text */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {/* Render subtitle only if provided */}
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}

export default HeroBanner;