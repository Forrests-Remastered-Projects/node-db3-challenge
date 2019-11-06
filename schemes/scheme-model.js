const db = require("../data/db");
module.exports = { find, findById, findSteps, add, update, remove };
function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select(
      "schemes.id, schemes.scheme_name, steps.step_number, steps.instructions"
    )
    .where({ id });
}
function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => {
      return findById(id);
    });
}
function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
    .then(updated => {
      console.log(id);
      updated ? findById(id) : null;
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
