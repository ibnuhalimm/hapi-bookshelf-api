const { nanoid } = require('nanoid');
const bookSchema = require('./book-schema');
const books = require('./books');

const createBook = (request, h) => {
    const { error, value } = bookSchema.validate(request.payload, { allowUnknown: true });
    if (error) {
        const errorDetails = error.details[0];
        const { key: fieldName } = errorDetails.context;

        let responseMessage = error.message;
        if (fieldName === 'name') {
            responseMessage = 'Gagal menambahkan buku. Mohon isi nama buku';
        }

        if (fieldName === 'readPage') {
            responseMessage = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
        }

        const response = h.response({
            status: 'fail',
            message: responseMessage,
        });
        response.code(400);

        return response;
    }

    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    let finished = false;
    if (pageCount === readPage) {
        finished = true;
    }

    books.push({
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    });

    const bookIdExists = books.findIndex((book) => book.id === id);

    if (bookIdExists !== -1) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);

        return response;
    }

    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);

    return response;
};

module.exports = createBook;
