import { motion } from "framer-motion";
import { testimonials } from "../Utils/Testimonials.js";

const MainContentTestimonials = () => {

    return (
        <>
        <section className="bg-gray-100 py-12 mt-8">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Hear from our valued clients about their experiences with us.
          </p>

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
      </>
    )
}

export default MainContentTestimonials;