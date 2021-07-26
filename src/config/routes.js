const createBookHandler = require('../services/book/createBookHandler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => 'Dicoding - Bookself API',
    },
    {
        method: 'POST',
        path: '/books',
        handler: createBookHandler,
    },
];

module.exports = routes;
