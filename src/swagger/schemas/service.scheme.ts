export default {
  type: 'object',
  required: [
    'name',
    'description',
    'rangeOfHoursToWork',
    'idPriceMode',
    'pricePerDuration',
    'idUser',
  ],
  properties: {
    name: {
      type: 'string',
      description: 'The service name',
      example: 'Plomery',
    },
    description: {
      type: 'string',
      description: 'The service description.',
      example:
        'I offer my plumbing service, I fix everything from pipes to bathrooms.',
    },
    rangeOfHoursToWork: {
      type: 'string',
      description: 'The range of hour that the service can be performed.',
      example: '10,19',
    },
    idPriceMode: {
      type: 'number',
      description:
        'The id that referenece a priceMode entity like priceForHour or priceForDay.',
      example: 1,
    },
    pricePerDuration: {
      type: 'number',
      description: 'The price for the price mode worked.',
      example: 3000,
    },
    idUser: {
      type: 'number',
      description: 'The user that offer the service',
      example: 1,
    },
  },
};
