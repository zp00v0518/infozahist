# infozahist

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# Frontend Тестове Завдання

Написати компонент, що може створювати форму з динамічними правилами валідації на базі заданого конфігураційного об’єкта.
Об’єкт має наступний вигляд:
  
```js
{
  code: 'Person',
  attributes: [
    {
      title: 'Ім\'я',
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
      type: 'int',
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
      enumType: 'ImpotanceValue',
    },
    {
      title: 'Посада',
      code: 'jobPosition',
      type: 'enum',
      enumType: 'JobPositionValue',
    },
    {
      title: 'Дата виходу на роботу',
      code: 'startJobAt',
      type: 'date',
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
}
```

Можливі типи атрибутів:
* int
* float
* string (використовується як тип по замовчуванню)
* date (відображається як календар)
* boolean (відображається як checkbox)
* enum (список або ієрархічний список, має відображатись як select або як автокомліт)

Можливі типи валідації:
* required (`true/false`)
* pattern (регулярний вираз строкою)
* email (`true/false`)
* min/max для типу float, int та date
* minlength/maxlength для типу строка

Список `ImportanceValue` (та інші) можна отримати з іншого конфігураційного об'єкта:

```js
const enumTypes = {
  ImportanceValue: [
    { id: 1, title: 'Важливо' },
    { id: 2, title: 'Нормально' },
    { id: 3, title: 'Дуже важливо' },
  ],
  JobPositionValue: [ // ієрархічний список
    { id: 1, title: 'Аграрний сектор' },
    { id: 2, title: 'Тракторист', parentId: 1 },
    { id: 7, title: 'Проджект менеджер', parentId: 6 },
    { id: 5, title: 'Програміст', parentId: 4 },
    { id: 8, title: 'Офіс менеджер', parentId: 6 },    
    { id: 3, title: 'Фермер', parentId: 1 },
    { id: 4, title: 'IT' },
    { id: 6, title: 'Менеджмент', parentId: 4 },
  ]
}
```

Форма повинна мати вкінці кнопку "Зберегти", по кліку на кнопку в консоль має виводитись JSON об'єкт, в якому знаходяться поля вказані у формі. Для списків виводяться id.
Якщо введені дані не задовільняють правилам валідації, об'єкт не виводиться а користувачу підсвічуються всі неправильно введені поля.

Приклад результату в консолі для наведеної вище конфігурації:

```js
{
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  email: 'john.doe@example.com',
  importance: 1, // Важливо
  jobPosition:  8, // Офіс менеджер
  startJobAt: '2018-01-01T10:00:00.000Z', // ISO-8601 format
  phone: [
    '+38 (096) 111-22-33',
    '+38 (095) 333-22-11'
  ]
}
```

## Основні вимоги

1. Використовуй довільний фреймворк, окрім jQuery (ми використовуємо Vue)
2. Використовуй UI library для компонентів (ми використовуємо element-ui)
3. Код має бути чітко розбитий на компоненти
4. Можна легко додати новий тип атрибута
5. Можна легко додати новий вид валідації
5. Використовуй принципи програмування і Clean Code
6. Логіка в коді має бути зрозуміла
7. Якщо змінити конфігураційний об'єкт, то не треба перероблювати логіку компонентів (поміняти поля місцями, додати нове поле/валідацію, тощо)
8. Ієрархічні списки можуть бути довільної вкладеності і в інтерфейсі виводити їх у виді дерева в `<select>`-i (з відступами) або у випадку автокомпліта відображати повний шлях при пошуці
9. `multiple` поля повинні бути зроблені кожен в окремому `input` (не можна використовувати textarea). Під всіма полями кнопка "Додати", при натисканні додається новий компонент з таким самим типом. Разом з кожним input-ом також є кнопка "Видалити", натиснувши на яку видаляється компонент

## Окремо зверну увагу на

1. Чи використовується ES6 і build tools (webpack, vue/cli, etc)
2. Виконані основні вимоги повністю
3. Назва змінних, props, events
4. Логіка в коді
5. SOLID
6. Охайність роботи (нема файлів що не використовуються, структурований JS/CSS, оптимізація, тощо)
