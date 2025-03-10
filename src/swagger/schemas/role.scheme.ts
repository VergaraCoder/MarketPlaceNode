export default {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      description: 'The role name',
      example: 'admin',
    },
  },
};
