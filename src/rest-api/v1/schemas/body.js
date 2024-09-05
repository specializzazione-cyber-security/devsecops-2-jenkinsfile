export const LoginBody = {
  type: "object",
  properties: {
    email: { type: "string", nullable: false },
    password: { type: "string", nullable: false },
  },
};

export const TodoBody = {
  type: "object",
  properties: {
    name: { type: "string", nullable: false },
    description: { type: "string", nullable: true },
  },
};
