import request from "supertest";
import app from "../server.js";
import Partner from "../models/Partner.js";
import mongoose from "mongoose";

beforeEach(async () => {
  await Partner.deleteMany();
});

describe("Partner API", () => {
  test("Should fetch all partners", async () => {
    await Partner.create({ name: "Test Partner", logo: "logo.png" });

    const res = await request(app).get("/api/partners");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name", "Test Partner");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
