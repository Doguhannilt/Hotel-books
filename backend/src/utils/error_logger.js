const { createLogger, transports, format } = require('winston');

const e_logger = createLogger({
    transports: [
        new transports.File({
            level: 'error',
            filename: 'loggers/e_logger.log',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.json()
            ),
            silent:true
        }),
        new transports.Console({
            level: 'error',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.json(),
                format.simple()
            ),
            silent:true
        }),
    ]
});
 
module.exports = e_logger;
