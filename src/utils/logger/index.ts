import { createLogger, format, transport, transports } from 'winston';
import 'winston-daily-rotate-file';
import { DailyRotateFileTransportOptions } from 'winston-daily-rotate-file';
const { combine, json, timestamp, prettyPrint } = format;

const defaultTransport: DailyRotateFileTransportOptions = {
  utc: true,
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '500M',
};

const infoTransport: transport = new transports.DailyRotateFile({
  ...defaultTransport,
  dirname: 'logs/info',
  level: 'info',
});

const errorTransport: transport = new transports.DailyRotateFile({
  ...defaultTransport,
  dirname: 'logs/error',
  level: 'error',
});

const winstonLogger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSSZZ' }),
    json(),
    prettyPrint(),
  ),
  transports: [infoTransport, errorTransport],
});

if (process.env.NODE_ENV !== 'production') {
  // winstonLogger.add(new transports.Console());
}

export default winstonLogger;
