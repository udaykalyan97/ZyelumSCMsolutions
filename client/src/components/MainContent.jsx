import React from "react";
import MainContentMobileAppPromotion from "../componentUtils/MainContentMobileAppPromotion.jsx";
import MainContentTestimonials from "../componentUtils/MainContentTestimonials.jsx";
import MainContentOurBrands from "../componentUtils/MainContentOurBrands.jsx";
import MainContentCategories from "../componentUtils/MainContentCategories.jsx";
import MainContentBrandHeader from "../componentUtils/MainContentBrandHeader.jsx";

const MainContent = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <MainContentBrandHeader />
      <MainContentCategories />
      <MainContentOurBrands />
      <MainContentTestimonials />
      <MainContentMobileAppPromotion />
    </main>
  );
};

export default MainContent;
