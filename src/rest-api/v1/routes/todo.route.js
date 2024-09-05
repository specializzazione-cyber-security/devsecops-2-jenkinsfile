import * as TodoController from "../controllers/todo.controller.js";
import { TodoResponse } from "../schemas/response.js";
import { TodoBody } from "../schemas/body.js";

const getUserTodosOpts = {
  schema: {
    summary: "Get Logged User Todos",
    tags: ["Todo"],
    response: {
      200: {
        type: "array",
        items: TodoResponse,
      },
    },
  },
  handler: TodoController.getByUserId,
};

const getTodoOpts = {
  schema: {
    summary: "Get Todo by Id",
    tags: ["Todo"],
    response: {
      200: TodoResponse,
    },
  },
  handler: TodoController.getById,
};

const postTodoOpts = {
  schema: {
    summary: "Create Todo",
    tags: ["Todo"],
    response: {
      200: TodoResponse,
    },
    body: TodoBody,
  },
  handler: TodoController.create,
};

const putTodoOpts = {
  schema: {
    summary: "Update Todo",
    tags: ["Todo"],
    response: {
      200: TodoResponse,
    },
  },
  handler: TodoController.update,
};

const deleteTodoOpts = {
  schema: {
    summary: "Delete Todo",
    tags: ["Todo"],
    response: {
      200: {
        type: "boolean",
      },
    },
  },
  handler: TodoController.deleteById,
};

export default async function getMetricRoutes(fastify) {
  fastify.get("", getUserTodosOpts);
  fastify.get("/:id", getTodoOpts);
  fastify.post("", postTodoOpts);
  fastify.delete("/:id", deleteTodoOpts);
  fastify.put("/:id", putTodoOpts);
}
