import db from "../index.js";

export async function getById(id) {
  return db
    .query(`SELECT * FROM todos WHERE id = ${id}`, [])
    .then((result) => result.rows?.[0]);
}

export async function getByUserId(userId) {
  return db
    .query(`SELECT * FROM todos WHERE user_id = ${userId}`, [])
    .then((result) => result.rows);
}

export async function create(todo, userId) {
  return db
    .query(
      `INSERT INTO todos (name, description, user_id) VALUES ($1, $2, $3) RETURNING id`,
      [todo.name, todo.description, userId]
    )
    .then((result) => result.rows?.[0]?.id);
}

export async function update(id, todo) {
  return db
    .query(`UPDATE todos SET name = $2, description = $3 WHERE id = $1`, [
      id,
      todo.name,
      todo.description,
    ])
    .then((result) => result.rowCount > 0);
}

export async function deleteById(id) {
  return db
    .query(`DELETE FROM todos WHERE id = ${id}`, [])
    .then((result) => result.rowCount > 0);
}
