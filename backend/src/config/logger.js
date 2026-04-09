import winston, { error } from "winston";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendTelegramAlert = async (info) => {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const message = `ERROR_ALERT
  
                  Message : ${info.message},
                  URL : ${info.url || "N/A"},
                  Stack : ${info.stack}
                  Method : ${info.method || "N/A"} ,
                  IP : ${info.ip || "N/A"}                     `;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });
  } catch (err) {
    console.error("Telegram Log Error");
  }
};

const logger = winston.createLogger({
  level: error,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),

  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: error }),
    new winston.transports.Console(),
    new winston.transports.Http({
      log: (info, callback) => {
        (sendTelegramAlert(info), callback());
      },
    }),
  ],
});

export default logger;
