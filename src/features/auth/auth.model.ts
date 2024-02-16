import {Document,Schema,Types, model} from "mongoose";
export type TUser = {
    email:String,
    password:String
}
export interface IUser extends TUser, Document{}

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
export default model<IUser>('Users', UserSchema)