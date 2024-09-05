import { postLogin } from "../controllers/auth.controller.js";
import { UserResponse } from "../schemas/response.js";
import { LoginBody } from "../schemas/body.js";

const postAuthLoginOpts = {
  schema: {
    summary: "Login",
    description: "Login endpoint",
    tags: ["Auth"],
    response: {
      200: UserResponse,
    },
    body: LoginBody,
  },
  handler: postLogin,
};

export default async function helloWorldRoutes(fastify) {
  fastify.post("/login", postAuthLoginOpts);
}
