import  { Document, Schema, Types, model } from 'mongoose';

export type TList = {
    title: String;
    description?: String;
}
export interface IList extends TList, Document{

}

const ListsSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String }
})


export default model<IList>('List', ListsSchema)