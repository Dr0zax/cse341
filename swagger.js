import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API Documentation',
        description: 'This is the API documentation for my application.',
    },
    host: 'cse341jeppesen.onrender.com',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);