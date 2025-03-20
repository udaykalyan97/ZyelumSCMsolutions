import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: String,
  quantity: Number,
  status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);
export default Order;