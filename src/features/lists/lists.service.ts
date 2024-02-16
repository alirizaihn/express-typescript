import Lists, { TList,IList }  from './lists.model';

 function getAll() {
    return Lists.find();
}
 async function get(id: String) {
    return await Lists.findOne({_id:id})
}
 async function create(data : TList) {
    return  new Lists(data).save();
}
 async function update(id: String, data: TList) {
    return Lists.findByIdAndDelete({_id:id}, data)
}
 async function remove(id:String) {
    return Lists.findByIdAndDelete(id)
    
}
 export default {get,getAll,create,remove,update} ;