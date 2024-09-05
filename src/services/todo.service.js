import * as TodoRepository from "../data-access/repositories/todo.repository.js";
import { NotFoundError } from "../utils/errors.js";

async function getById(id) {
  const user = await TodoRepository.getById(id);
  if (!user) throw new NotFoundError(`Todo with id ${id} not found`);

  return user;
}

async function getByUserId(userId) {
  return await TodoRepository.getByUserId(userId);
}

async function create(todo, userId) {
  const id = await TodoRepository.create(todo, userId);
  return await TodoRepository.getById(id);
}

async function update(id, todo) {
  await TodoRepository.update(id, todo);
  return await TodoRepository.getById(id);
}

async function deleteById(id) {
  return await TodoRepository.deleteById(id);
}

export { getById, getByUserId, create, update, deleteById };
