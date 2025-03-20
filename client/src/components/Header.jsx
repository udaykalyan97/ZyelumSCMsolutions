import React from "react";
import HeaderLogo from "../componentUtils/HeaderLogo.jsx";
import HeaderNavigation from "../componentUtils/HeaderNavigation.jsx";
import HeaderLoginButton from "../componentUtils/HeaderLoginButton.jsx";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-green-200 to-cyan-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <HeaderLogo />
        <div className="flex items-center gap-6">
          <HeaderNavigation />
          <HeaderLoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
