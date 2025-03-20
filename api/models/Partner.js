import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema({
  name: String,
  logo: String,
}, { timestamps: true });

const Partner = mongoose.model("Partner", PartnerSchema);
export default Partner;
