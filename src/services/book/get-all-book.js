const books = require('./books');

const getAllBook = (request, h) => {
    const { reading } = request.query;

    let filteredBooks = books;
    if (reading == 1) {
        filteredBooks = books.filter((book) => book.reading === true);
    }

    const bookData = filteredBooks.map((book) => {
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
