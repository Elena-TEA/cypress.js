describe('Тестирование формы логина', function () {
    it('Ввожу верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible');
     })
 })
 

 describe('Проверка восстановления пароля', function () {
    it('Нажимаю забыли пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('tratata@mail.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })



 describe('Тестирование формы логина', function () {
    it('Ввожу верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('wrong');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })



 describe('Тестирование формы логина', function () {
    it('Валидация логина логин без собаки', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })


 describe('Тестирование формы логина', function () {
    it('Ввожу верный логин строчными и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })

 describe('Тестирование HuntingPony', function () {
    it('Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.wait(2000);
         cy.get('.header__cart > .icon').click();
         cy.wait(1000);
         cy.get('.is-count-up').click();
         cy.contains('Оформить заказ')
     })
 })