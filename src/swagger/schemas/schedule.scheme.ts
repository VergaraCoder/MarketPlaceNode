export default {
  type: 'object',
  required: ['date', 'idService', 'idCustomer'],
  properties: {
    name: {
      type: 'string',
      description: 'Date on which the service will be performed ',
      example: '2025-02-19T19:00:00',
    },
    idService: {
      type: 'number',
      description: 'The service referenced',
      example: 2,
    },
    idCustomer: {
      type: 'number',
      description: 'The user to whom the service will be performed.',
      example: 1,
    },
  },
}
