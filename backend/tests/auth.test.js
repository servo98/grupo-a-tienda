import request from "./supertest.js";
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
} from "@jest/globals";
import { connectDB, disconnectDB, dropDatabase } from "./database.js";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

beforeEach(async () => {
  await dropDatabase();
});

describe("TEST /api/auth", () => {
  test("/api/auth/register Register user", async () => {
    const response = await request.post("/api/auth/register").send({
      firstName: "Test name",
      lastName: "Test last name",
      email: "test@test.test",
      password: "testpassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User registered");
    expect(response.body.user._id).toBeDefined();
    expect(response.body.user.password).toBeUndefined();
  });

  test("/api/auth/register Register duplicated user", async () => {
    const response = await request.post("/api/auth/register").send({
      firstName: "Test name",
      lastName: "Test last name",
      email: "test@test.test",
      password: "testpassword",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User registered");
    expect(response.body.user._id).toBeDefined();
    expect(response.body.user.password).toBeUndefined();

    const response2 = await request.post("/api/auth/register").send({
      firstName: "Test name",
      lastName: "Test last name",
      email: "test@test.test",
      password: "testpassword",
    });

    expect(response2.statusCode).toBe(400);
    expect(response2.body.message).toBe("Error registering user");
  });
});
