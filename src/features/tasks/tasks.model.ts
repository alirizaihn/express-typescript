import {Schema, Types, model,Document} from "mongoose";

export type TTask = {
title:String,
description:String,
completed:Boolean,
list_id:String
}
export interface ITask extends TTask, Document{
}

const TaskSchema  = new Schema({
title:{
    type:String,
    required:true,
},
description: {
    type:String,
},
completed: {
    type:Boolean,
    required:true,
},
list_id: {
    type:Types.ObjectId,
    ref:"Lists"
}
})

export default model('Tasks', TaskSchema);