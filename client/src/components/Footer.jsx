import React from "react";
import FooterBottom from "../componentUtils/FooterBottom.jsx";
import FooterSupport from "../componentUtils/FooterSupport.jsx";
import FooterResources from "../componentUtils/FooterResources.jsx";
import FooterCompanyLinks from "../componentUtils/FooterCompanyLinks.jsx";
import FooterCompanyInfo from "../componentUtils/FooterCompanyInfo.jsx";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FooterCompanyInfo />
          <FooterCompanyLinks />
          <FooterResources />
          <FooterSupport />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
