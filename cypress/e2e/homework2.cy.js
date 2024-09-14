describe('Длинный_кейс_для_покемонов', function () {

    it('Покупка_нового_аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // перешли на сайт покемонов
         cy.get('.login__content').should('be.visible'); // блок формы виден пользователю
         cy.wait(1000);

         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели верный логин
         cy.get('#password').type('USER_PASSWORD'); // ввели верный пароль
         cy.get('.auth__button').click(); // нажал войти
         cy.wait(1500);

         cy.get('.header__container > .header__id').click({ force: true }); // переходим в ЛК тренера
         cy.wait(1500);

         cy.get('[href="/shop"]').click(); // нажимаем "Сменить аватар"
         cy.wait(1500);

         cy.get('.available > button').first().click({ force: true });  // нажали "Купить" на доступном аватаре
         cy.wait(500);

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим дату
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvc код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // вводим имя
         cy.get('.pay-btn').click();  // нажимаем "оплатить"
         cy.wait(500);

         cy.get('#cardnumber').type('56456'); // вводим код из смс
         cy.get('.payment__submit-button').click();  // нажимаем "оплатить"
         cy.wait(500);
         
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверяю что покупка прошла успешно вижу текст
         cy.get('.payment__font-for-success').should('be.visible');// текст виден пользователю



        })    
 }) 