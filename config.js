'use strict';

exports.PORT = process.env.PORT || 8080;

//exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/noteful-app';
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://dev:dev@ds119449.mlab.com:19449/noteful';


exports.TEST_MONGODB_URI = process.env.TEST_MONGODB_URI || 'mongodb://localhost/noteful-app-test';