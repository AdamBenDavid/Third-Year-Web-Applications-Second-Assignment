import request from "supertest";
import initApp from "../server";
import mongoose from "mongoose";
import postModel from "../modules/user_modules";
import { Express } from "express";
import testUsers from "./test_users.json";

var app: Express;

beforeAll(async () => {
    console.log("beforeAll");
    app = await initApp();
    await postModel.deleteMany();
});
  
afterAll((done) => {
    console.log("afterAll");
    mongoose.connection.close();
    done();
});

let userId = "";

describe("Posts Tests", () => {
    test("Posts test get all", async () => {
      const response = await request(app).get("/posts");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
    }); 

    // create a user
    test("Test Create User", async () => {
        const response = await request(app).post("/users").send(testUsers[0]);
        expect(response.statusCode).toBe(200);
        expect(response.body.email).toBe(testUsers[0].email);
        expect(response.body.favPat).toBe(testUsers[0].favPat);
        expect(response.body._id).toBe(testUsers[0]._id);
        expect(response.body.password).toBe(testUsers[0].password);
        userId = response.body._id;
    });

    // get user by email
    test("Test Get User", async () => {
        const response = await request(app).get(`/users/${userId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.email).toBe(testUsers[0].email);
        expect(response.body.favPat).toBe(testUsers[0].favPat);
        expect(response.body._id).toBe(testUsers[0]._id);
        expect(response.body.password).toBe(testUsers[0].password);
    });

    // update password by email
    test("Test Update Password", async () => {
        const response = await request(app).put(`/users/${userId}`).send({password: "Updated Password"});
        expect(response.statusCode).toBe(200);
        expect(response.body.password).toBe("Updated Password");
    });

    // update fav' pat by email
    test("Test Update Fav' Pat", async () => {
        const response = await request(app).put(`/users/${userId}`).send({favPat: "Updated Fav' Pat"});
        expect(response.statusCode).toBe(200);
        expect(response.body.favPat).toBe("Updated Fav' Pat");
    });

    // delete user by email
    test("Test Delete User", async () => {
        const response = await request(app).delete(`/users/${userId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.email).toBe(testUsers[0].email);
        expect(response.body.favPat).toBe(testUsers[0].favPat);
        expect(response.body._id).toBe(testUsers[0]._id);
        expect(response.body.password).toBe(testUsers[0].password);
    });
});