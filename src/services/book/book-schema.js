const Joi = require('joi');

const bookSchema = Joi.object({
    name: Joi.string().required(),
    pageCount: Joi.number().integer().min(1),
    readPage: Joi.number().integer().less(Joi.ref('pageCount')),
});

module.exports = bookSchema;
