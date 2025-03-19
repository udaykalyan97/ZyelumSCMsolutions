import React from "react";
import { motion } from "framer-motion";

const MainContent = () => {
  const partners = [
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/goingnuts.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/gvr.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/koeleman.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/laxmifoils.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/mayurank.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/omat.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/smeassist.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/tangerine.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/accord.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/bidassist.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/wonderblues.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/candorfoodsbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/emoxbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/gujaratfoilsbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/saivanabrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/samruddhifarm.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/dharabrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/grontecbrand.png",
  ];

  const testimonials = [
    {
      name: "Mr. Sajal Gupta",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/sajal.png",
      feedback:
        "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs. OfBusiness streamlined procurement, reduced working capital cycles, and helped us cut interest costs significantly.",
    },
    {
      name: "Mr. Rahul Bansal",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/rahul.png",
      feedback:
        "In our mission to deliver distinctive design capabilities for commercial spaces, our interior design company often grapples with the challenges of volatile raw material prices and extended lead times. OfBusiness has been a transformative partner, introducing transparency to our procurement process and consistently providing raw materials at competitive rates.",
    },
    {
      name: "Mr. Ankit Garg",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/ankit.png",
      feedback:
        "We aim to electrify India with cost-effective Solar Power solutions, but working capital shortages can impede growth. OfBusiness emerged as a crucial ally, offering invaluable support in addressing our working capital concerns.",
    },
    {
      name: "Mr. Masood Ahmed Ishkay",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/masood.png",
      feedback:
        "Navigating through the complexities of the manufacturing sector, we often encounter the daunting challenge of securing cost-effective raw materials. OfBusiness has been our trusted partner, significantly easing the strain of high input costs.",
    },
    {
      name: "Mr. Obulampalli Shiv Shankar Venkat",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/Obulampalli.png",
      feedback:
        "As industrial electric component manufacturers, we grappled with raw material price volatility and lead time challenges. OfBusiness provided cost-effective procurement solutions and optimized our purchases with their tech innovations.",
    },
    {
      name: "Mr. Jagdeep Bansal",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/Jagdeep.png",
      feedback:
        "The persistent challenges of high input costs and the scarcity of construction materials have consistently posed major obstacles for infrastructure development firms like ours. OfBusiness played a pivotal role in optimizing our procurement processes, enabling us to address these concerns effectively.",
    },
  ];
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <section
      className="relative bg-cover h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/main_banner.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
        <h1 className="text-4xl font-bold">
          India's Largest B2B Raw Materials Procurement & Credit Platform
        </h1>
        <p className="mt-3 text-lg">
          Get the best prices for your raw material requirements.
        </p>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Search for raw materials..."
            className="w-full px-4 py-2 rounded-md text-gray-900"
          />
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
            Search
          </button>
        </div>
      </div>
    </section>

      {/* Explore Our Categories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Chemicals",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/chemicals.png",
            },
            {
              name: "Energy & Petroleum",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/energy_petroleum.png",
            },
            {
              name: "Stainless Steel",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/stainlesssteel.png",
            },
            {
              name: "Pipes",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/pipes.png",
            },
            {
              name: "Construction Materials",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/construction_materials.png",
            },
            {
              name: "Industrial Equipment",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/industrial_equipment.png",
            },
            {
              name: "Agro Products",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/agro_products.png",
            },
            {
              name: "Automotive Parts",
              img: "https://ofbpublic.s3.ap-southeast-1.amazonaws.com/bapp/category/automotive_parts.png",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-16 h-16"
              />
              <span className="mt-2 font-medium">{category.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Animated Logos Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Partners
        </h2>
        <div className="overflow-hidden space-y-6">
          {/* Row 1: Moves Left */}
          <motion.div
            className="flex space-x-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {partners
              .slice(0, Math.ceil(partners.length / 2))
              .map((logo, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-3 bg-white shadow-md flex items-center justify-center w-36 h-24"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                    className="w-32 h-20 object-contain"
                  />
                </div>
              ))}
          </motion.div>

          {/* Row 2: Moves Right */}
          <motion.div
            className="flex space-x-6"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {partners
              .slice(Math.ceil(partners.length / 2))
              .map((logo, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-3 bg-white shadow-md flex items-center justify-center w-36 h-24"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                    className="w-32 h-20 object-contain"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Hear from our valued clients about their experiences with us.
          </p>

          {/* Testimonials Carousel */}
          <div className="mt-8 overflow-hidden">
            <motion.div
              className="flex space-x-6"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div
                  key={index}
                  className="w-80 bg-white p-6 rounded-lg shadow-md flex-shrink-0"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 mx-auto rounded-full"
                  />
                  <p className="mt-4 text-gray-700 italic">
                    "{testimonial.feedback}"
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 rounded-lg shadow-md"
      >
        <div>
          <h3 className="text-xl font-semibold">
            OFB: B2B Raw Materials Prices
          </h3>
          <p>Unlock a Whole New World of Raw Materials</p>
          <ul className="mt-2 list-disc pl-4">
            <li>✅ View Live Prices and Instant News</li>
            <li>✅ Get Quotations For Your Products</li>
            <li>✅ Manage All Your Orders from One Place</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://apps.apple.com/us/app/ofbusiness-sme-loan-material/id1527965724"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/AppStoreImage.png"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ofbusiness.app.buyer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/PlayStoreImage.png"
                alt="Download on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
        <img
          src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/mobilePhoto.png"
          alt="Mobile App"
          className="w-48 mt-4 md:mt-0"
        />
      </motion.section>
    </main>
  );
};

export default MainContent;
