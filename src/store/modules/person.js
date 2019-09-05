const person = {
  state: {
    code: 'Person',
    attributes: [
      {
        title: "Ім'я",
        code: 'firstName',
        validation: {
          required: true
        }
      },
      {
        title: 'Прізвище',
        code: 'lastName',
        validation: {
          required: true
        }
      },
      {
        title: 'Вік',
        code: 'age',
        type: 'int'
      },
      {
        title: 'Email',
        code: 'email',
        validation: {
          email: true
        }
      },
      {
        title: 'Важливість',
        code: 'importance',
        type: 'enum',
        enumType: 'ImportanceValue'
      },
      {
        title: 'Посада',
        code: 'jobPosition',
        type: 'enum',
        enumType: 'JobPositionValue'
      },
      {
        title: 'Дата виходу на роботу',
        code: 'startJobAt',
        type: 'date'
      },
      {
        title: 'Телефон',
        code: 'phone',
        multiple: true,
        validation: {
          pattern: '^\\+38 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$'
        }
      }
    ]
  },

  mutations: {}
};

export default person;
