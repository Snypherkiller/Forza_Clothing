const pino = require("pino");
const elasticFormat = require("@elastic/ecs-pino-format");

const LOG = pino(elasticFormat());

module.exports = LOG;
