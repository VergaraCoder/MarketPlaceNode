export default {
  SchedulesExample: {
    summary: 'The response schedule created',
    value: {
      id: 1,
      date: '2025-02-19T19:00:00',
      idService: 1,
      idCustomer: 2,
    },
  },

  ScheduleExampleAll: {
    summary: 'The all schedules',
    value: [
      {
        id: 1,
        date: '2025-02-19T19:00:00',
        idService: 1,
        idCustomer: 2,
      },
      {
        id: 2,
        date: '2025-02-16T19:00:00',
        idService: 1,
        idCustomer: 4,
      },
    ],
  },

  ScheduleExample404All: {
    summary: 'Example error schedule not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'THERE ARE NOT SCHEDULES RECORDS',
    },
  },

  ScheduleExample404One: {
    summary: 'Example error schedule not found ',
    value: {
      status: 404,
      timeStamp: new Date(),
      message: 'SCHEDULE NOT FOUND',
    },
  },
}
