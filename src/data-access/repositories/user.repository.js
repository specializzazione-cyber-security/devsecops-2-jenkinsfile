import db from "../index.js";

export async function getById(id) {
  return db
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((result) =>
      result.rows.length > 0 ? mapUser(result.rows[0]) : null
    );
}

export async function getByEmail(email) {
  return db
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((result) =>
      result.rows.length > 0 ? mapUser(result.rows[0]) : null
    );
}

function mapUser(user) {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    firstName: user.first_name,
    lastName: user.last_name,
  };
}
