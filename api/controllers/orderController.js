import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const order = await Order.create({ userId: req.user.userId, product, quantity });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
