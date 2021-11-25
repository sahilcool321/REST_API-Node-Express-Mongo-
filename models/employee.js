const mongoose = require("mongoose");

// Employee Schema

const Employee = mongoose.model("Employee", {
  name: {
    type: String,
    required: true,
  },
  children: {
    type: Array,
    required: true,
  },
});

module.exports = { Employee };
