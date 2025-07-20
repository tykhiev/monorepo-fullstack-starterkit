import { type PinoLogger, pinoLogger as logger } from "hono-pino";
import pretty from "pino-pretty";

export type LoggerBindings = {
  Variables: { logger: PinoLogger };
};

export const pinoLogger = () => {
  return logger({
    pino: pretty({
      colorize: true,
      levelFirst: true,
      translateTime: "yyyy-mm-dd HH:MM:ss",
      messageFormat: (log, messageKey) => {
        const message = log[messageKey] as string;
        // @ts-ignore not typed
        const status = log.res.status;
        // @ts-ignore not typed
        const userAgent = log?.req?.headers?.["user-agent"] || "unknown";

        // Colorize status based on type
        let statusColor = "\x1b[34m"; // Default cyan
        if (status >= 400 && status < 500) {
          statusColor = "\x1b[33m"; // Yellow for client errors
          log.level = 40;
        } else if (status >= 500) {
          statusColor = "\x1b[31m"; // Red for server errors
          log.level = 50;
        } else {
          log.level = 30;
        }

        if (log.reqId) {
          // @ts-ignore
          return `${statusColor}[${log.reqId}] 📨 ${log.req.method} ${log.req.url} | ⚡ ${status}\x1b[0m | ⏱️ ${log.responseTime}ms | ${userAgent}`;
        }
        return message;
      },
      customColors: "error:red,warn:yellow,info:blue,debug:green",
      ignore: "pid,hostname,res,req,reqId,responseTime",
      minimumLevel: "trace",
    }),
  });
};
