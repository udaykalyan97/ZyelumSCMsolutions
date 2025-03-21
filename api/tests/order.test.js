import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Order from "../models/Order.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

let mongoServer;
let authToken;
let userId;

beforeAll(async () => {
  // Start in-memory MongoDB
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Create a test user
  const user = await User.create({ name: "Test User", email: "test@example.com", password: "password123" });
  userId = user._id;

  // Generate a JWT token for authentication
  authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Order.deleteMany();
});

describe("Order API", () => {
  test("Should create a new order", async () => {
    const res = await request(app)
      .post("/api/orders")
      .set("Cookie", `token=${authToken}`)
      .send({
        product: "Steel Sheets",
        quantity: 10,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Order placed successfully");
    expect(res.body.order).toHaveProperty("product", "Steel Sheets");
  });

  test("Should fetch user orders", async () => {
    await Order.create({ userId, product: "Copper Wires", quantity: 5 });

    const res = await request(app)
      .get("/api/orders")
      .set("Cookie", `token=${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("product", "Copper Wires");
  });

  test("Should not create an order without authentication", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        product: "Aluminum Rods",
        quantity: 20,
      });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error", "Unauthorized");
  });

  test("Should not fetch orders without authentication", async () => {
    const res = await request(app).get("/api/orders");

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error", "Unauthorized");
  });
});
