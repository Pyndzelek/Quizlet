export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© 2024 Kamil Maślanka. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-indigo-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
