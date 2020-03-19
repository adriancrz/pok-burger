
var orm = require("../config/orm.js");

var pokeburger = {
  all: function(cb) {
    orm.all("pokeburgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("pokeburgers", [
      "pokeburger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("pokeburgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = pokeburger;