import Joi from '@hapi/joi';

class BookingValidation {
  static validateBooking(req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .strict()
        .trim()
        .min(3)
        .email()
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.strict': '{{#label}} must not contains white spaces',
          'string.min': '{{#label}} length must be at least {{#limit}} characters long',
          'any.required': '{{#label}} is required',
        }),

      username: Joi.string()
        .strict()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.min': '{{#label}} length must be at least {{#limit}} characters long',
          'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
          'any.required': '{{#label}} is required',
        }),
        arrival_time: Joi.string()
        .strict()
        .trim()
        .min(3)
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.min': '{{#label}} length must be at least {{#limit}} characters long',
          'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
          'any.required': '{{#label}} is required',
        }),
        departure_time: Joi.string()
        .strict()
        .trim()
        .min(3)
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.min': '{{#label}} length must be at least {{#limit}} characters long',
          'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
          'any.required': '{{#label}} is required',
        }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error)
      return res.status(401).json({
        status: 401,
        error: error.message,
      });
    }

    next();
  }
}

export default ParkingValidation;