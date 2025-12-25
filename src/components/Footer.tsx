import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-rose-500" size={24} />
              <span className="text-xl font-bold">Rosa Parks</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Relationship Advisor & Coach helping individuals and couples build deeper
              connections and lasting love.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">SyncWithLove</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://syncwithlove.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Main Platform
                </a>
              </li>
              <li>
                <a
                  href="https://syncwithlove.com/sync/romantic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Romantic Quiz
                </a>
              </li>
              <li>
                <a
                  href="https://syncwithlove.com/sync/fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Fun Quiz
                </a>
              </li>
              <li>
                <a
                  href="https://syncwithlove.com/challenge/romantic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Romantic Challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} Rosa Parks - Relationship Advisor & Coach. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Built with love and dedication to helping relationships thrive.
          </p>
        </div>
      </div>
    </footer>
  );
}
