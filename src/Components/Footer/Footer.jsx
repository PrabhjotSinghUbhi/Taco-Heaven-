import React from "react";

function Footer() {
  return (
    <footer className="bg-green-700 w-full text-white py-6 mt-10 fixed bottom-0 left-0 z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-2 md:space-y-0">
        <span className="font-fugaz text-lg">Little Taco Shop 🌮</span>
        <span className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-yellow-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="mailto:info@littletacoshop.com"
            aria-label="Email"
            className="hover:text-yellow-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 13.065l-11.99-7.99v15.925c0 .553.447 1 1 1h21.98c.553 0 1-.447 1-1V5.075l-11.99 7.99zm11.99-9.065c0-.553-.447-1-1-1H1.01c-.553 0-1 .447-1 1v.217l12 8 12-8V4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
