// const db = require("../data/northwind.db3")

const db = require("../data/db-config.js")
module.exports = {
    find,
    findById,
    findSteps,
    add,
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

function add(){
    return db('schemes')
}

function update(){
    return db('schemes')
}

function remove(){
    return db('schemes')
}