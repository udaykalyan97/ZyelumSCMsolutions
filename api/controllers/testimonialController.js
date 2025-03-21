import Testimonial from "../models/Testimonial.js";

// Fetch all testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
