const createBook = require('../services/book/create-book');
const deleteBookById = require('../services/book/delete-book-by-id');
const getAllBook = require('../services/book/get-all-book');
const getDetailBook = require('../services/book/get-detail-book');
const updateBookById = require('../services/book/update-book-by-id');

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
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBookById,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookById,
    },
];

module.exports = routes;
