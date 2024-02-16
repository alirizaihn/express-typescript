import Tasks, {TTask, ITask} from './tasks.model';

async function getAll() {
    return Tasks.find();
}
async function get(id:String) {
    return Tasks.findOne({_id: id});
}
async function create(data : TTask) {
    return  new Tasks(data).save();
}
async function update(id:String, data:TTask) {
    return Tasks.findByIdAndUpdate({_id:id}, data)
}
async function remove(id:String) {
    return Tasks.findByIdAndDelete(id)
}
export default {get,getAll,create,remove,update};