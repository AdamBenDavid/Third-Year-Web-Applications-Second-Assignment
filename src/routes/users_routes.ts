import express from "express";
const router = express.Router();
import usersController from "../controllers/users_controller";

router.post("/", usersController.createUser);

router.get("/:email", usersController.getUserByEmail);

router.put("/:email", (req,res) => {
    usersController.updatePasswordByEmail(req,res); 
});

router.put("/:email", (req,res) => {
    usersController.updateFavPatByEmail(req,res);
});

router.delete("/:email", (req,res) => {
    usersController.deleteUserByEmail(req,res);
});

export default router;