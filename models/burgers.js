// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

 
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb 
    )
  },
  
  update: function(id, cb) {
    let condition = "id=" + id;
    orm.update("burgers", {devoured: true}, condition, cb)
  }
};

module.exports = burger;
