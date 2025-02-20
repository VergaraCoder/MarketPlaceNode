export default {
  type: 'object',
  required: ['name', 'email', 'password', 'idRole'],
  properties: {
    name: {
      type: 'string',
      description: "The user's name.",
      example: 'Jhonatan Vergara',
    },
    email: {
      type: 'string',
      format: 'email',
      description: "The user's email.",
      example: 'jhonatan@example.com',
    },
    password: {
      type: 'string',
      description: 'The user password.',
      example: 'Diosesmitodo96/',
      pattern: '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',
    },
    idRole: {
      type: 'number',
      description: 'The user role.',
      example: 1,
    },
  },
}
