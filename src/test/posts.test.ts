import request from "supertest";
import initApp from "../server";
import mongoose from "mongoose";
import postModel from "../modules/post_modules";
import { Express } from "express";
import testposts from "./test_posts.json";
//import userModel, { IUser } from "../models/users_model";

var app: Express;

beforeAll(async () => {
    console.log("beforeAll");
    app = await initApp();
    await postModel.deleteMany();

    const posts = await postModel.find(); // שליפת כל הפוסטים
    console.log("Posts in DB before tests:", posts);
});
  
afterAll((done) => {
    console.log("afterAll");
    mongoose.connection.close();
    done();
});

let postId = "";

describe("Posts Tests", () => {
    test("Posts test get all", async () => {
      const response = await request(app).get("/posts");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
    }); 

    // add a post
    test("Test Create Post", async () => {
        const response = await request(app).post("/posts").send(testposts[0]);
        expect(response.statusCode).toBe(200);
        expect(response.body.postData).toBe(testposts[0].postData);
        expect(response.body.senderId).toBe(testposts[0].senderId);
        postId = response.body._id;
    });

    // get all posts
    test("Test Get All Posts", async () => {
        const response = await request(app).get("/posts");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    // get a post by senderId
    test("Test get post by senderId", async () => {
        const response = await request(app).get(`/posts/filter?senderId=${testposts[0].senderId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].senderId).toBe(testposts[0].senderId);
        expect(response.body[0].postData).toBe(testposts[0].postData);
    });

    // get post by id
    test("Test Get Post", async () => {
        const response = await request(app).get(`/posts/${postId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.postData).toBe(testposts[0].postData);
        expect(response.body.senderId).toBe(testposts[0].senderId);
    });

    // update post by id
    test("Test Update Post", async () => {
        const response = await request(app).put(`/posts/${postId}`).send({postData: "Updated Post"});
        console.log("response.body.postData: " + response.body.postData);
        expect(response.statusCode).toBe(200);
        expect(response.body.postData).toBe("Updated Post");
    });

    // delete posts
    test("Test Delete Posts", async () => {
        const response = await request(app).delete("/posts");
        expect(response.statusCode).toBe(200);
    });
});