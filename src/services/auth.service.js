import { accessTokenSecret, refreshTokenSecret } from "../config.js";
import * as UserRepository from "../data-access/repositories/user.repository.js";

import bcryptjs from "bcryptjs";
const { compare } = bcryptjs;

import * as jose from "jose";
import { AuthenticationError } from "../utils/errors.js";

async function login(email, password) {
  const user = await UserRepository.getByEmail(email);
  if (!user) throw new AuthenticationError("Wrong credentials");
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) throw new AuthenticationError("Wrong credentials");
  return user;
}

async function createCookieTokens(user) {
  const alg = "HS256";
  const accessToken = await new jose.SignJWT({
    userId: user.id,
    userRole: user.role,
    userResetCount: user.resetCount,
  })
    .setProtectedHeader({ alg, typ: "JWT" })
    .setIssuedAt()
    .setIssuer("api")
    .setExpirationTime("1h")
    .sign(accessTokenSecret);

  const refreshToken = await new jose.SignJWT({
    userId: user.id,
    userRole: user.role,
    userResetCount: user.resetCount,
  })
    .setProtectedHeader({ alg, typ: "JWT" })
    .setIssuedAt()
    .setIssuer("api")
    .setExpirationTime("90d")
    .sign(refreshTokenSecret);

  return { accessToken, refreshToken };
}

export { login, createCookieTokens };
