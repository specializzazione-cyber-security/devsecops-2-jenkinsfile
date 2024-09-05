import { environment, logger, api } from "../config.js";
import Fastify from "fastify";
import { swagger, swaggerUI } from "./swagger.js";
import { readdir } from "fs/promises";
import path from "path";
import errorHandler from "./error-handler.js";
import authentication from "../middlewares/jwt-authentication.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
  logger: logger[environment],
  forceCloseConnections: true,
});

export const start = async () => {
  try {
    fastify.register(import("@fastify/cors"), {
      credentials: true,
    });

    await fastify.register(import("@fastify/cookie"));
    await fastify.register(import("@fastify/compress"));
    await fastify.register(import("@fastify/swagger"), swagger);
    await fastify.register(import("@fastify/swagger-ui"), swaggerUI);

    fastify.setErrorHandler(errorHandler);

    fastify.addHook("onRequest", (req, res) => authentication(req, res));

    for (const route of await readdir(
      path.resolve(__dirname, "./v1/routes/")
    )) {
      await fastify.register(import(`./v1/routes/${route}`), {
        prefix: `api/v1/${route.replace(".route.js", "")}`,
      });
    }

    await fastify.listen({ port: api.port, host: api.host });
    await fastify.ready();
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export const stop = async () => {
  try {
    await fastify.close();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
