import logger from "../config/logger.js";
import { STATUS_CODES } from "../utils/constants.js";

export const errMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || STATUS_CODES.SERVER_ERROR;
  const message = err.message || "Internal server error";

  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
  });

  res.status(statusCode).json({
    success: false,
    message: message,
  });
  next();
};
