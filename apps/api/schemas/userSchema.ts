import { model, Schema } from "mongoose";
import { IUser } from "../src/application/interfaces/IUser";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true}
})

export const userModel = model<IUser>('Users', userSchema);