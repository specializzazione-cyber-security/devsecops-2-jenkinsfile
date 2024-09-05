import * as Errors from "../utils/errors.js";

export default function errorHandler(error, request, reply) {
  if (error instanceof Errors.AuthenticationError) {
    reply.status(401);
  } else if (error instanceof Errors.ForbiddenError) {
    reply.status(403);
  } else if (error instanceof Errors.NotFoundError) {
    reply.status(404);
  } else if (error instanceof Errors.BadRequestError) {
    reply.status(400);
  } else if (error instanceof Errors.InvalidUserInputError) {
    reply.status(400);
  } else if (error instanceof Errors.InternalServerError) {
    reply.status(500);
  } else {
    reply.status(500);
    reply.send(error);
    return;
  }

  reply.send({
    message: error.message,
    redirectUrl: error.extensions?.redirectUrl,
    code: error.extensions?.code,
    apiCode: error.extensions?.apiCode,
  });
}
