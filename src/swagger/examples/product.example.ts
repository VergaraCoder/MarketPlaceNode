export default {
  ProductExample: {
    summary: 'The response product created',
    value: {
      id: 1,
      name: 'phone3',
      description: 'The best phone above all',
      price: 300,
    },
  },

  ProductExampleAll: {
    summary: 'The all products',
    value: [
      {
        id: 1,
        name: 'phone3',
        description: 'The best phone above all',
        price: 300,
      },
      {
        id: 2,
        name: 'closet',
        description: 'The best closet above all',
        price: 300,
      },
    ],
  },

  ProductExample400: {
    summary: 'Example error product for created',
    value: {
      status: 404,
      timeStamp: new Date(),
      method: 'post',
      message: [
        'THE NAME IS REQUIRED',
        'THE NAME MUST BE STRING',
        'THE DESCRIPTION MUST BE STRING',
        'THE DESCRIPTION IS REQUIRED',
        'THE PRICE MUST BE NUMBER',
        'THE PRICE IS REQUIRED',
      ],
    },
  },

  ProductExample404All: {
    summary: 'Example error product not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THERE ARE NOT PRODUCTS RECORDS',
    },
  },

  ProductExample404One: {
    summary: 'Example error product not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'PRODUCT NOT FOUND',
    },
  },
};
