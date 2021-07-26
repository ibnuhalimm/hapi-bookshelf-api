const Hapi = require('@hapi/hapi');
const routes = require('./config/routes');

const init = async () => {
    const server = Hapi.server({
        host: process.env.NODE_END !== 'production' ? 'localhost' : '0.0.0.0',
        port: 5000,
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
