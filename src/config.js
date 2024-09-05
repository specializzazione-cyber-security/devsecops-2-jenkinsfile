import dotenv from "dotenv";
dotenv.config();

export const jest = {
  jestWorkerId: process.env.JEST_WORKER_ID,
};

export const environment = process.env.NODE_ENV || "production";

export const accessTokenSecret = new TextEncoder().encode(
  process.env.ACCESS_TOKEN_SECRET
);
export const accessTokenBody = {
  httpOnly: false,
  sameSite: "none",
  secure: true,
  path: "/",
  maxAge: 900000, // 15 minutes
};

export const renewRefreshTokens = true;
export const refreshTokenSecret = new TextEncoder().encode(
  process.env.REFRESH_TOKEN_SECRET
);
export const refreshTokenBody = {
  httpOnly: true,
  sameSite: "none",
  secure: true,
  path: "/",
  maxAge: 15 * 86400000, // 15 days
};

export const database = {
  url: process.env.DB_URL,
  name: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export const logger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};

export const api = {
  port: process.env.API_PORT ? parseInt(process.env.API_PORT) : 4001,
  host: process.env.API_HOST ? process.env.API_HOST : "127.0.0.1",
};
