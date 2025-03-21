import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../models/User.js";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Auth API", () => {
  test("Should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ name: "Test User", email: "test@example.com", password: "password123" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered successfully");
  });

  test("Should log in an existing user", async () => {
    await User.create({ name: "Test User", email: "test@example.com", password: "password123" });

    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "password123" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("Should log out a user", async () => {
    const res = await request(app).get("/api/auth/logout");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Logout successful");
  });
});
