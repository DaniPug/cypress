describe('Автотесты_формы_логина', function () {

    it('Позитивный_кейс_авторизации', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })

     it('Логика_восстановления_пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#forgotEmailButton').click(); // нажал "забыл пароль"
        cy.get('#mailForgot').type('borods@gustaiy.ru'); // ввели верный логин
        cy.get('#restoreEmailButton').click(); // нажал "отправить код"
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что после восстановления вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    
    it('Негативный_кейс_авторизации_ПАРОЛЬ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio54'); // ввели НЕверный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после неверного пароля вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('Негативный_кейс_авторизации_ЛОГИН', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('Germn@dolnikov.ru'); // ввели НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после неверного логина вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('Негативный_кейс_авторизации_ВАЛИДАЦИЯ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без "@"
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что демонстрируется текст ошибки валидации
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('Приведение_к_строчным_буквам_в_логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "забыл пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
 })  