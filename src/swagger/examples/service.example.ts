export default {
  ServiceExample: {
    // EXAMPLE WHEN CREATE SERVICE
    summary: 'Example of a Service',
    value: {
      id: 1,
      name: 'Plomery',
      description:
        'I offer my plumbing service, I fix everything from pipes to bathrooms.',
      pricePerDuration: 'Diosesmitdo96/',
      rangeOfHoursToWork: '10,16',
      idPriceMode: 3,
      idUser: 2,
    },
  },

  AllServices: {
    summary: 'Example return all services',
    value: [
      {
        id: 1,
        name: 'Plomery',
        description:
          'I offer my plumbing service, I fix everything from pipes to bathrooms.',
        pricePerDuration: 2000,
        rangeOfHoursToWork: '10,16',
        idPriceMode: 2,
        idUser: 2,
      },
      {
        id: 2,
        name: 'mechanic',
        description: 'offer mechanic service ,repair from tires to engines',
        pricePerDuration: 4000,
        rangeOfHoursToWork: '11,14',
        idPriceMode: 2,
        idUser: 5,
      },
    ],
  },

  ServiceExample404All: {
    summary: 'Example error service not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THERE ARE NOT SERVICES RECORDS',
    },
  },

  ServiceExample404One: {
    summary: 'Example error service not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'SERVICE NOT FOUND',
    },
  },

  ServiceExample400: {
    summary: 'Example error service not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      method: 'post',
      message: [
        'THE IDPRICEMODE MUST BE NUMBER',
        'THE NAME MUST BE STRING',
        'THE PRICEPERDURATION MUST BE NUMBER',
        'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
        'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
        'THE rangeOfHoursToWork MUST BE STRING',
        'THE IDUSER MUST BE NUMBER',
      ],
    },
  },
}
