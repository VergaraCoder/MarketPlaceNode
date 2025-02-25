export default {
  type: 'object',
  required: ['name', 'description', 'price'],
  properties: {
    name: {
      type: 'string',
      description: 'The product name',
      example: 'apple',
    },
    description: {
      type: 'string',
      description: 'The product description.',
      example: 'Delicius apple 100% natural, 100% healthy.',
    },
    price: {
      type: 'number',
      description: 'price of the product',
      example: 300,
    },
  },
};
