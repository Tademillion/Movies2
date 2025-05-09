import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CineVerse </h3>
            <p className="text-white/80">
              Your ultimate destination for movies, TV shows, and entertainment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://t.me/AsresuM"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.341c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.72 5.56-5.023c.232-.209-.05-.325-.358-.117l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.535-.197 1.004.128.832.953z" />
                </svg>
              </a>

              <a
                href="https://et.linkedin.com/in/tade-million-60735a344"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://portfolios-benoveefy-tades-projects-8633c2e4.vercel.app/about"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-white/80">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/20 backdrop-blur-sm text-white rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70"
              />
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-600/50 bg-gradient-to-t from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-center text-white">
          <p className="text-xl font-medium tracking-tight glow-text">
            © {new Date().getFullYear()} CineVerse . All rights reserved.
          </p>
          <p className="mt-4 text-lg">
            Powered by{" "}
            <a
              href="https://github.com/Tademillion"
              target="_blank"
              className="relative text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300 group"
            >
              Tade Million
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
