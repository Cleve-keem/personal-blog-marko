const Joi = require("joi");

const adminSignupSchema = Joi.object({
  firstname: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Firstname is required!",
    "string.min": "Firstname must be at latest 3 characters long!",
    "string.max": "Firstname must not exceed 50 characters!",
  }),
  lastname: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Lastname is required!",
    "string.min": "Lastname must be at latest 3 characters long!",
    "string.max": "Lastname must not exceed 50 characters!",
  }),
  username: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Username is required!",
    "string.min": "Username must be at latest 3 characters long!",
    "string.max": "Username must not exceed 50 characters!",
  }),
  password: Joi.string().min(6).max(128).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password must not exceed 128 characters",
  }),
});

const adminSininSchema = Joi.object({
  username: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Username is required!",
  }),
  password: Joi.string().min(6).max(128).required().messages({
    "string.empty": "Password is required",
  }),
});

module.exports = {
  adminSignupSchema,
  adminSininSchema,
};
