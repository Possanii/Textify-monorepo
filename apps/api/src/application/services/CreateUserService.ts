import { userModel } from "../../../schemas/userSchema";
import { EmailAlreadyExists, PasswordNotEquals } from "../exceptions/UserExceptions";

import { IUser } from "../interfaces/IUser";
import { bcrypt, jsonwebtoken } from "../utils/jsonWebToken";

export class CreateUserService {
  async execute(data: IUser): Promise<{ user: IUser, token: string}> {
    const secret = process.env.SECRET
    console.log("Rota foi chamada!")

    const findEmail = await userModel.findOne({
      email: data.email
    })
   
    if(findEmail){
      throw new EmailAlreadyExists();
    }
   
    if(data.password !== data.confirmPassword){
      throw new PasswordNotEquals();
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(data.password, salt);
     
    const user = await userModel.create({
        name: data.name,
        email: data.email,
        password: passwordHash,
      })

      const token = jsonwebtoken.sign(
        { 
            id: user.id,
         },
         secret,
    )

      await user.save();

      return {
        user,
        token
      };
    }
}

