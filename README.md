# Memories

**Memories - это клиент-серверное приложение для создания индивидуального воспоминания, его отображения с возможностью добавления/удаления.

## Стек технологий используемых в проекте
- React
- Redux (thunk)
- Node.JS
- Express JS
- Material-UI
- MongoDB
- Mongoose

## Установка и запуск проекта
1. Перейти в папку server
2. Установить все зависимости командой командой "npm install"
3. Набрать в терминале команду "npm run server", которая запустит сервер на localhost 4000
4. Перейти в папку client
5. Установить все зависимости командой командой "npm install"
4. Запустить приложение командой "npm start"
5. Страница с приложением откроется автоматически

## Пара слов о проекте
После успешной установки всех зависимостей, страница с приложением открывается автоматически. Существует возможность регистрации и входа. После авторизации, создается сессия (а также cookies на клиентской части) и сохраняется до момента выхода пользователя из системы (Выйти). **Функция создания нового воспоминания при заполнении полей и нажатии на кнопку (Отправить), создается новое воспоминание. **Функция изменения полей доступна при нажатии на три точки в правом верхнем углу воспоминания. **Функция удаления при нажатии на кнопку (Delete) выбранная задача будет удалена. **Функция добавления лайка при нажатии на кнопку (Like) выбранное воспоминание будет отмечено как понравившееся.

## Главная страница

(client/public/images/MainPage.png)

## Страница регистрации

(client/public/images/RegistrationPage.png)

## Страница авторизации

(client/public/images/AuthorizationPage.png)

## Главная страница после авторизации/регистрации пользователя

(client/public/images/MainPageAfterRegOrAuth.png)
