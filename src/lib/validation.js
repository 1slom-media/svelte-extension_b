import Joi from "joi";

export const LoginSchema=Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required()
})

export const RegisterSchema=Joi.object({
    username:Joi.string().max(32).required(),
    password:Joi.string().min(8).max(64).required(),
    repeat_password:Joi.ref('password'),
    email: Joi.string().required(),
})


