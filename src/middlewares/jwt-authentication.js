import {
  accessTokenBody,
  accessTokenSecret,
  refreshTokenBody,
  refreshTokenSecret,
  renewRefreshTokens,
} from "../config.js";

import { createCookieTokens } from "../services/auth.service.js";
import * as UserService from "../services/user.service.js";
import * as jose from "jose";

const authMiddleware = async (req, res) => {
  const accessToken = req.cookies["access-token"];
  const refreshToken = req.cookies["refresh-token"];

  if (!refreshToken && !accessToken) {
    return;
  }

  let data;

  try {
    data = await jose.jwtVerify(accessToken, accessTokenSecret);
    req.cookies.userId = data.payload.userId;
    req.cookies.userRole = data.payload.userRole;
    removeTokensFromReq(req);
    return;
  } catch {
    // accessToken is not valid
  }

  if (!refreshToken) {
    return;
  }

  try {
    data = await jose.jwtVerify(refreshToken, refreshTokenSecret);
  } catch {
    // refreshToken is also not valid
    return;
  }

  const user = await UserService.getById(data.payload.userId).catch((_) => {
    return null;
  });

  if (!user) return;

  // refreshToken valid
  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    createCookieTokens(user);
  res.setCookie("access-token", newAccessToken, accessTokenBody);

  if (renewRefreshTokens) {
    res.setCookie("refresh-token", newRefreshToken, refreshTokenBody);
  }

  req.cookies.userId = user.id;
  req.cookies.userRole = user.role;
  removeTokensFromReq(req);
};

function removeTokensFromReq(req) {
  delete req.cookies["refresh-token"];
  delete req.cookies["access-token"];
}

export default authMiddleware;
