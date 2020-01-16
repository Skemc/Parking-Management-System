import Joi from '@hapi/joi';

class UserValidation {
  static validateLogin(req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'string.email': '{{#label}} must be valid email',
          'any.required': '{{#label}} is required',
        }),

      password: Joi.string()
        .required()
        .messages({
          'string.base': '{{#label}} must be a string',
          'any.required': '{{#label}} is required',
        }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(401).json({
        status: 401,
        error: error.message,
      });
    }

    next();
  }
}

export default UserValidation;