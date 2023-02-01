'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const fastifyStatic = require('@fastify/static');

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  fastify.register(fastifyStatic, {
    root: `${process.cwd()}/frontend/build`,
  });

  fastify.setNotFoundHandler((req, res) => {
    res.sendFile('index.html');
  });
}
