import express from "express";
const router = express.Router();
import usersController from "../controllers/users_controller";

router.get("/", usersController.getAllUsers);

router.post("/", usersController.createUser);

router.get("/:id", usersController.getUserById);

router.put("/:id", (req,res) => {
    usersController.updatePasswordById(req,res); 
});

router.put("/:id", (req,res) => {
    usersController.updateFavPatById(req,res);
});

router.delete("/:id", (req,res) => {
    usersController.deleteUserById(req,res);
});

export default router;