const bookSchema = require('./book-schema');
const books = require('./books');

const updateBookById = (request, h) => {
    const { error, value } = bookSchema.validate(request.payload, { allowUnknown: true });
    if (error) {
        const errorDetails = error.details[0];
        const { key: fieldName } = errorDetails.context;

        let responseMessage = error.message;
        if (fieldName === 'name') {
            responseMessage = 'Gagal memperbarui buku. Mohon isi nama buku';
        }

        if (fieldName === 'readPage') {
            responseMessage = 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
        }

        const response = h.response({
            status: 'fail',
            message: responseMessage,
        });
        response.code(400);

        return response;
    }

    const { id } = request.params;
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
    const updatedAt = new Date().toISOString();

    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
        books[bookIndex] = {
            ...books[bookIndex],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);

        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);

    return response;
};

module.exports = updateBookById;
