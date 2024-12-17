import request from "supertest";
import initApp from "../server";
import mongoose from "mongoose";
import commentsModel from "../modules/comments_modules";
import { Express } from "express";
import testComments from "./test_comments.json";

var app: Express;

beforeAll(async () => {
  console.log("beforeAll");
  app = await initApp();
  await commentsModel.deleteMany();
});

afterAll((done) => {
  console.log("afterAll");
  mongoose.connection.close();
  done();
});

let commentId = "";

describe("Comments Tests", () => {
  test("Comments test get all", async () => {
    const response = await request(app).get("/comments");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(0);
  });

  // add a comment
  test("Test Create Comment", async () => {
    const response = await request(app).post("/comments").send(testComments[0]);
    expect(response.statusCode).toBe(200);
    expect(response.body.userId).toBe(testComments[0].userId);
    expect(response.body.postId).toBe(testComments[0].postId);
    expect(response.body.commentData).toBe(testComments[0].commentData);
    commentId = response.body._id;
  });

  // get comment by id
    test("Test Get Comment", async () => {
        const response = await request(app).get(`/comments/${commentId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.userId).toBe(testComments[0].userId);
        expect(response.body.postId).toBe(testComments[0].postId);
        expect(response.body.commentData).toBe(testComments[0].commentData);
    });

    // get all comments
    test("Test Get All Comments", async () => {
        const response = await request(app).get("/comments");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    // update comment by id
    test("Test Update Comment", async () => {
        const response = await request(app).put(`/comments/${commentId}`).send({commentData: "Updated Comment"});
        expect(response.statusCode).toBe(200);
        expect(response.body.commentData).toBe("Updated Comment");
    });

    // delete comment by id
    test("Test Delete Comment", async () => {
        const response = await request(app).delete(`/comments/${commentId}`);
        expect(response.statusCode).toBe(200);
    });
});