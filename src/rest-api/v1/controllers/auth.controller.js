import * as AuthService from "../../../services/auth.service.js";

import { accessTokenBody, refreshTokenBody } from "../../../config.js";

export async function postLogin(req, rep) {
  const { email, password } = req.body;
  const user = await AuthService.login(email, password);
  const cookies = await AuthService.createCookieTokens(user);
  rep.setCookie("access-token", cookies.accessToken, accessTokenBody);
  rep.setCookie("refresh-token", cookies.refreshToken, refreshTokenBody);
  return user;
}
