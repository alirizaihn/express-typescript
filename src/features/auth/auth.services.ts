
import User, {TUser, IUser} from './auth.model'
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { sign} = jwt;
async function login(data:TUser) {
    if(data?.email && data?.password){
        const findUser: IUser = await User.findOne({ email: data.email });
        if (!findUser) throw new Error(`This email ${data.email} was not found`);
        const isPasswordValid = await bcrypt.compare(data?.password, findUser.password);
        if (!isPasswordValid) {
            throw new Error ("Invalid username or password");
          }
          const token = sign({
            email: data.email,
        }, process.env.JWT_SECRET, {
          expiresIn: parseInt(process.env.JWT_TIME, 10),
        });        
        return token;
    } else {
        throw new Error("userData is empty");
    }
}
  
async function create(data:TUser){
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return new User({...data,password:hashedPassword}).save();
}
export default {login,create};