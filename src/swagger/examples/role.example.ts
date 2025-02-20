export default {
  RoleExample: {
    summary: 'The response schedule created',
    value: {
      id: 1,
      name: 'admin',
    },
  },

  RoleExampleAll: {
    summary: 'The all roles',
    value: [
      {
        id: 1,
        name: 'admin',
      },
      {
        id: 2,
        name: 'employee',
      },
    ],
  },

  RoleExample400: {
    summary: 'Example error role for created',
    value: {
      status: 404,
      timeStamp: new Date(),
      method: 'post',
      message: ['THE NAME IS REQUIRED', 'THE NAME MUST BE STRING'],
    },
  },

  RoleExample404All: {
    summary: 'Example error role not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THERE ARE NOT ROLES RECORDS',
    },
  },

  RoleExample404One: {
    summary: 'Example error role not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'ROLE NOT FOUND',
    },
  },
}
