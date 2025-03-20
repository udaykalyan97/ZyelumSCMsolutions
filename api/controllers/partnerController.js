import Partner from "../models/Partner.js";

export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
