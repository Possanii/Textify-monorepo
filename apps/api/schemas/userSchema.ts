import { model, Schema } from "mongoose";
import { date } from "zod";
import { IUser } from "../src/application/interfaces/IUser";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})

export const userModel = model<IUser>('Users', userSchema);