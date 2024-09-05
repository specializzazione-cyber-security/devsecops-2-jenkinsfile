import * as TodoService from "../../../services/todo.service.js";
import { AuthenticationError } from "../../../utils/errors.js";

export async function getByUserId(req) {
  if (!req.cookies.userId) throw new AuthenticationError("User not logged");
  return await TodoService.getByUserId(req.cookies.userId);
}

export async function getById(req, reply) {
  const { id } = req.params;
  return await TodoService.getById(id);
}

export async function create(req) {
  if (!req.cookies.userId) throw new AuthenticationError("User not logged");
  const { body } = req;
  return await TodoService.create(body, req.cookies.userId);
}

export async function deleteById(req) {
  if (!req.cookies.userId) throw new AuthenticationError("User not logged");
  const { id } = req.params;
  return await TodoService.deleteById(id);
}

export async function update(req) {
  if (!req.cookies.userId) throw new AuthenticationError("User not logged");
  const { id } = req.params;
  const { body } = req;

  return await TodoService.update(id, body);
}
