import { useEffect, useState } from "react";
import { motion } from "framer-motion";
//import { partners } from "../Utils/Partners.js";
import axios from "axios";

const MainContentOurBrands = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("/api/partners")
      .then((response) => setPartners(response.data))
      .catch((error) => console.error("Error fetching partners:", error));
  }, []);

  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Partners
        </h2>
        <div className="overflow-hidden space-y-6">
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
    </>
  );
};

export default MainContentOurBrands;
