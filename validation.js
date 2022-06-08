const Joi = require("joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        image:Joi.object(),
        name: Joi.string().alphanum().min(3).max(25).trim(true).required(),
        age: Joi.number().min(1).max(150).required(),
        mobileNo: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        email: Joi.array().items(Joi.string().email().max(256).required()).single().required(),
        photo: Joi.string().required(),
        flag: Joi.string().required(),
        isAdmin: Joi.string().required()
    }).unknown();

    return schema.validate(data,{ abortEarly: false });


}

const loginValidation = (data) => {
    const schema = Joi.object({

        email: Joi.array().items(Joi.string().email().max(256).required()).single().required(),
        mobileNo: Joi.string().length(10).pattern(/^[0-9]+$/).required(),

    }).unknown();

    return schema.validate(data);
}


const flagValidation = (data) => {

    const schema = Joi.object({

        flag: Joi.string().required(),

    }).unknown();

    return schema.validate(data);


}

const editValidation = (data) => {

    const schema = Joi.object({
        image:Joi.object(),
        mobileNum: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        name: Joi.string().alphanum().min(3).max(25).trim(true).required(),
        age: Joi.number().min(1).max(150).required(),
        mobileNo: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        email: Joi.array().items(Joi.string().email().max(256).required()).single().required(),
        photo: Joi.string().required(),


    }).unknown();

    return schema.validate(data);

}


const deleteValidation = (data) => {
    const schema = Joi.object({

        mobileNo: Joi.string().min(10).max(10).required(),
        email:Joi.array().items(Joi.string().email().max(256).required()).single().required()

    }).unknown();

    return schema.validate(data);


}


module.exports.Validation = { registerValidation, flagValidation, editValidation, deleteValidation, loginValidation }