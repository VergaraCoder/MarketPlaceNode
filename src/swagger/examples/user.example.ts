export default {
  UserExample: {
    summary: 'Example of a user',
    value: {
      id: 1,
      name: 'Jhonatan Vergara',
      email: 'jhonatan@example.com',
      password: 'Diosesmitdo96/',
      idRole: 1,
    },
  },

  UsersExample: {
    summary: 'Example of a return all users',
    value: [
      {
        id: 1,
        name: 'Jhonatan Vergara',
        email: 'jhonatan@example.com',
        password: 'Diosesmitdo96/',
        idRole: 1,
      },
      {
        id: 2,
        name: 'Juan rodriguez',
        email: 'juan@example.com',
        password: 'Diosesmitdo96/',
        idRole: 2,
      },
    ],
  },

  UserExample400: {
    summary: 'Example when response is 400',
    value: {
      status: 400,
      timeStamp: new Date(),
      method: 'post',
      message: [
        'THE idRole MUST BE NUMBER',
        'THE NAME MUST BE STRING',
        'THE EMAIL IS NOT VALID',
        'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
        'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
        'THE PASSWORD IS NOT VALID',
        'THE PASSWORD MUST BE STRING',
      ],
    },
  },
  UserExample404All: {
    summary: 'Example error users not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THERE ARE NOT USER RECORDS',
    },
  },
  UserExample404One: {
    summary: 'Example error users not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THE USER NOT FOUND',
    },
  },
  UserExample409Role: {
    summary: 'Example error for reference role',
    value: {
      status: 409,
      timeStamp: new Date(),
      message: 'EL ID ROLE INGRESADO NO CORRESPONSE A NINGUN ROL',
    },
  },
  UserExample409Email: {
    summary: 'Example error for duplicate email ',
    value: {
      status: 409,
      timeStamp: new Date(),
      message: 'EL EMAIL INGRESADO YA ESTA REGISTRADO',
    },
  },
}
