const books = require('./books');

const getAllBook = (request, h) => {
    const { reading, finished } = request.query;

    let filteredBooks = books;

    if (reading && reading == 1) {
        filteredBooks = books.filter((book) => book.reading === true);
    }

    if (reading && reading == 0) {
        filteredBooks = books.filter((book) => book.reading === false);
    }

    if (finished && finished == 1) {
        filteredBooks = books.filter((book) => book.finished === true);
    }

    if (finished && finished == 0) {
        filteredBooks = books.filter((book) => book.finished === false);
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
