import * as UserRepository from "../data-access/repositories/user.repository.js";
import { NotFoundError } from "../utils/errors.js";

async function getById(id) {
  const user = await UserRepository.getById(id);
  if (!user) throw new NotFoundError(`User with id ${id} not found`);

  return user;
}

async function getByEmail(email) {
  const formattedEmail = email.replace(/\s+/g, "").toLowerCase();
  const user = await UserRepository.getByEmail(formattedEmail);
  if (!user) return null;

  return user;
}

export { getById, getByEmail };
