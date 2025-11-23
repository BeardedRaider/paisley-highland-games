import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Footer: renders copyright, contact email, and social icons.
function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center text-sm">
      <p>&copy; 2025 Paisley Highland Games Committee</p>
      <p className="mt-2">Contact: info@paisleygames.org</p>

      {/* Social links: open in new tab; rel for security; aria-label for accessibility */}
      <div className="mt-4 flex justify-center space-x-4 text-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="hover:text-blue-300 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="hover:text-blue-300 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-blue-300 transition" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;