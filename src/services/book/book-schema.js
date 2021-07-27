const Joi = require('joi');

const bookSchema = Joi.object({
    name: Joi.string().required(),
    pageCount: Joi.number().integer().min(1),
    readPage: Joi.number().integer().min(0).max(Joi.ref('pageCount')),
});

module.exports = bookSchema;
