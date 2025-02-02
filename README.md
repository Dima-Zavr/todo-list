# T0d0 L1st

---

### ```npm run dev``` Запустить проект 
### ```npm run test``` Запустить модульное тестирование (unit-тесты)

Проект реализует web-приложение для создания и отслеживания задач, в рамках проекта создана авторизованная зона. На главной странице отображаются задачи, в приложении можно создать новую задачу, добавить или убрать задачи из избранного, отредактировать любую задачу, а также удалить задачу. Тажке для удобства реализована возможность фильтрации задач, по таким критериям как "Не выполненные", "В процессе", "Выполненные", "Избранные".

---

### Основной стек технологий:

- Фреймворк (библиотека) - [React](https://react.dev/) + TypeScript 
- Сборщик приложения - [Vite](https://vitejs.dev/)
- Чистота кода - [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Husky](https://www.npmjs.com/package/husky) + [Lint Staged](https://www.npmjs.com/package/lint-staged)
- Стилизация - [Styled components](https://styled-components.com/) 
- Маршрутизация - [React Router Dom](https://reactrouter.com/en/main)
- Бесконечная прокрутка (добавление задач по мере пролистывания страницы) - [React-Infinite-Scroller](https://www.npmjs.com/package/react-infinite-scroller)
- Получение данных с сервера - [Fetch](https://learn.javascript.ru/fetch) 
- State-manager - [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- Модульное тестирование (unit-тесты) - [Vitest](https://vitest.dev/)

---

### На данный момент реализовано:

- Добавление задачи
- Удаление задачи
- Получение списка всех задач
- Редактирование задачи (изменение названия, описания, или статуса задачи)
- Infinite Scroll (бесконечная прокрутка страницы)
- Возможность добавить задачу в избранное, избранные задачи отображаются даже после обновления страницы
- Фильтрация задач по “Все”, “Выполненные”, "В процессе", “Не выполненные”, “Избранное”
- Вход в аккаунт / Регистрация в аккаунте с помощью имени, email и пароля