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
