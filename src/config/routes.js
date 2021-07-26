const createBook = require('../services/book/create-book');
const getAllBook = require('../services/book/get-all-book');
const getDetailBook = require('../services/book/get-detail-book');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => 'Dicoding - Bookself API',
    },
    {
        method: 'POST',
        path: '/books',
        handler: createBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBook,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getDetailBook,
    },
];

module.exports = routes;
