import request from 'supertest';
import app from '../index';

describe('Sample test', () => {
  it("should create a new bug", async () => {
    jest.setTimeout(10000);
    const res = await request(app).post("/api/bugs").send({
      title: "Sample bug",
      description: "These are some bug details",
    })
    expect(res.statusCode).toBe(201);
  });
});
