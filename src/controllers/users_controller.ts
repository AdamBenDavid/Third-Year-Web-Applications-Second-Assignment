import userModel,{ User }  from "../modules/user_modules";
import { Request, Response } from "express";

// Create user
const createUser = async (req:Request, res:Response) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
        
// Read user by email
const getUserByEmail = async (req:Request, res:Response) => {
    const email = req.params.email;
    try {
        const user = await userModel
            .findOne({ email: email });
        if (user != null) res.send(user);
        else res.status(400).send("user not found");
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update Password by email
const updatePasswordByEmail = async (req:Request, res:Response) => {
    const email = req.params.email;
    const updatedData = req.body;

    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { email: email },
            updatedData,
            {
                new: true,
            }
        );
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update fav' pat by email
const updateFavPatByEmail = async (req:Request, res:Response) => {
    const email = req.params.email;
    const updatedData = req.body;

    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { email: email },
            updatedData,
            {
                new: true,
            }
        );
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Delete user by email
const deleteUserByEmail = async (req:Request, res:Response) => {
    const email = req.params.email;

    try {
        const user = await userModel.findOneAndDelete({ email: email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

export default { createUser, getUserByEmail, updatePasswordByEmail, updateFavPatByEmail, deleteUserByEmail };