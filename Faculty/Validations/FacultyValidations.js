const Joi = require("joi");

// Faculty validation schema
const FacultySchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(5).max(100).required(),
  email: Joi.string().email().required()
});

module.exports = FacultySchema;
