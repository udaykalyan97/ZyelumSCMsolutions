import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  feedback: { type: String, required: true },
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
export default Testimonial;
