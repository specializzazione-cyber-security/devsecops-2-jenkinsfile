export const swagger = {
  swagger: {
    info: {
      title: "Test",
      description: "Test API Swagger",
      version: "0.0.1",
    },
  },
};

export const swaggerUI = {
  routePrefix: "/api/swagger",
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};
