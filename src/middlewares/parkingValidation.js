import Joi from '@hapi/joi';

class ParkingValidation {
  static validateParking(req, res, next) {
    const schema = Joi.object({
      name: Joi.string()
        .strict()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.strict': '{{#label}} must not contains white spaces',
          'string.min': '{{#label}} length must be at least {{#limit}} characters long',
          'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
          'any.required': '{{#label}} is required',
        }),

      location: Joi.string()
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