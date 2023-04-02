const joi = require('joi');

const formSchema =
    joi.object({

        governer: joi.string().min(20).required(),

        gridLevel: joi.number().required().max(10),

        phoneNumber: joi.number().required().phoneNumber(),

        specialist: joi.string().min(20).required(),

        userName: joi.string().min(20).required(),


    })