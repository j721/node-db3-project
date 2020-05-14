// const db = require("../data/northwind.db3")

const db = require("../data/db-config.js")
module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update, 
    remove,
};

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({ id }).first();
}

function findSteps(id){
    return db('schemes')
    .join("steps", "steps.scheme_id", "schemes.id"  )
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where("schemes.id", id)
    .orderBy("steps.step_number")

}


// function findSteps(id){
//     return db('schemes as sc')
//     .join("steps as a s", "sc.id", "s.scheme_id" )
//     .where("s.scheme_id",id)
    
// }

function add(scheme){
    return db('schemes')
    .insert(scheme)
}


// function addStep(step, schemeId){
//     return db('steps')
//     .insert({...step, scheme_id: schemeId})
//     .then(ids=>{
//         const id = ids[0]
//         return db('steps')
//         .where({id})
//     })
// }

function addStep(step, scheme_id){
    const obj ={...step, scheme_id}
    return db("steps").insert(obj, "id")
}

function update(change, id){
    return db('schemes')
    .where({ id })
    .update(change)
}

function remove(id){
    return db('schemes')
    .where({id})
    .del();
}