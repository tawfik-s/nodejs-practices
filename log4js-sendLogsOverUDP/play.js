const log4js = require("log4js");
console.log("1");

log4js.configure({
    appenders: {
        logstash: {
            type: '@log4js-node/logstashudp',
            host: '0.0.0.0',
            port: 12345
        }
    },
    categories: {
        default: { appenders: ['logstash'], level: 'info' }
    }
});
console.log("2");
const logger = log4js.getLogger();
console.log("3");
logger.info("important log message", { cheese: 'gouda', biscuits: 'hobnob' });
console.log("4");

