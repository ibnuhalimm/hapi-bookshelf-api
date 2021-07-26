const books = require('./books');

const getAllBook = (request, h) => {
    const bookData = books.map((book) => {
        return {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        };
    });

    const response = h.response({
        status: 'success',
        data: {
            books: bookData,
        },
    });
    response.code(200);

    return response;
};

module.exports = getAllBook;
