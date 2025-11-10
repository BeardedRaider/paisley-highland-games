function HeroBanner({ image, title, subtitle }) {
  return (
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}

export default HeroBanner;