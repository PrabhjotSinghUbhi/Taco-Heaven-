import React from "react";
import { Header, Footer } from "./Components";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <div className=" min-h-screen bg-gradient-to-b from-amber-500 via-amber-400 to-amber-200 relative">
        {/* Removed pattern overlay */}
        <div className="w-full bg-white lg:w-1/2  lg:mx-auto min-h-screen border shadow-2xl  z-10 relative overflow-hidden backdrop-blur-md">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
