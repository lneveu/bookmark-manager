'use strict';

require('dotenv').config();
const pino = require('pino');
const Fastify = require('fastify');
const mongoose = require('mongoose');

async function main() {
  let logger;
  try {
    logger = pino({ prettyPrint: { colorize: true } });
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const fastify = Fastify({ logger });

    fastify.register(require('fastify-cors'), { origin: true });

    // serve client app (see Dockerfile)
    fastify.register(require('fastify-static'), {
      root: '/client-dist'
    });

    fastify.setNotFoundHandler((req, res) => {
      res.sendFile('index.html');
    });

    // register routes
    fastify.register(require('./routes'));

    await fastify.listen(process.env.PORT || 80, process.env.HOSTNAME || '0.0.0.0');
  } catch (error) {
    logger ? logger.error(error) : console.error(error);
    process.exit(1);
  }
}

main();
