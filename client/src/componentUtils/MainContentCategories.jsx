import { motion } from "framer-motion";
import { categories } from "../Utils/Categories.js";

const MainContentCategories = () => {
    return (
        <>
         <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
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
      </>
    )
}

export default MainContentCategories;