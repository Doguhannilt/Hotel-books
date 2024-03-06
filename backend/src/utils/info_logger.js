const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({
            level: 'info',
            filename: 'loggers/logger.log',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.simple()
            )
        }),
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
                format.simple()
            )
        }),
    ]
});
 
module.exports = logger;
