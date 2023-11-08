import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
const { combine, json } = format;
const winstonLogger = createLogger({
  format: combine(json()),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.DailyRotateFile({
      dirname: 'logs',
      filename: '%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '500M',
      level: 'info',
    }),
  ],
});

export default winstonLogger;
