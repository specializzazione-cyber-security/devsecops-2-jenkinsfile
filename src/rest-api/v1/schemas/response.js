export const UserResponse = {
  type: "object",
  properties: {
    id: { type: "string", nullable: false },
    firstName: { type: "string", nullable: false },
    lastName: { type: "string", nullable: false },
    email: { type: "string", nullable: false },
  },
};

export const TodoResponse = {
  type: "object",
  properties: {
    id: { type: "string", nullable: false },
    name: { type: "string", nullable: false },
    description: { type: "string", nullable: true },
  },
};
