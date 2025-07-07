import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-8xl font-bold m-0">404</h1>
    <h2 className="my-4 text-2xl font-semibold">Page Not Found</h2>
    <p className="text-lg">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="mt-6 px-6 py-3 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition"
    >
      Go to Homepage
    </Link>
  </div>
);

export default NotFound;
