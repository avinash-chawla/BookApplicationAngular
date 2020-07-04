const Joi = require('@hapi/joi');

const bookValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        price: Joi.number().required()
    });
    return schema.validate(data);
}

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};


module.exports.bookValidation = bookValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;