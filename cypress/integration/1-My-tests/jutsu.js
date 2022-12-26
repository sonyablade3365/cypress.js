describe('Проверка авторизации', function () {
    it('Наличие кнопки "Войти" на всех страницах', function () {
        //На главной
        cy.visit ('https://jut.su/');
        //Найти элемент
        cy.get('.login_btn');
        //Проверить его видимость
        cy.should('be.visible');
        //Проверить текст в элементе
        cy.contains('Войти');

        //На Аниме
        cy.visit ('https://jut.su/anime/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Смотреть Наруто
        cy.visit ('https://jut.su/naruuto/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Манга Наруто
        cy.visit ('https://jut.su/manga/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Новеллы Наруто
        cy.visit ('https://jut.su/novels/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Видео-Истории
        cy.visit ('https://jut.su/stories/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Видео-Обзоры
        cy.visit ('https://jut.su/reviews/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Все Герои
        cy.visit ('https://jut.su/ninja/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Список техник
        cy.visit ('https://jut.su/by-episodes/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Список Вакансии
        cy.visit ('https://jut.su/jobs/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Список Оповещения
        cy.visit ('https://jut.su/subscription/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

        //На Аниме-почта
        cy.visit ('https://jut.su/mail/');
        cy.get('.login_btn');
        cy.should('be.visible');
        cy.contains('Войти');

         //На Наши Контакты
         cy.visit ('https://jut.su/feedback.html');
         cy.get('.login_btn');
         cy.should('be.visible');
         cy.contains('Войти');
})
it('Наличие элементов в форме авторзации', function () {
    //На главной
    cy.visit ('https://jut.su/');
    cy.get('.login_btn').click();
    cy.get('#login_panel');
    //Проверка текста плейсхолдера в поля логина
    cy.get('#login_input1');
    cy.get("input[placeholder=\"Логин или e-mail\"]");
    //Проверка текста плейсхолдера в поля пароля
    cy.get('#login_input2');
    cy.get("input[placeholder=\"Пароль\"]");
    //Кнопка видимости пароля
    cy.get('#show_the_pass').should('contain', 'показать');
    
    
    //Cypress тут получает странный текст на ссылке
    //Пока не понимаю как иправить
    //cy.get('#show_the_pass').click();
    //cy.should('be.visible');
    //cy.contains('скрыть^');

    //Кнопка Войти
    cy.get('#login_submit').should('contain', 'Войти');
    //Кнопка Напомнить пароль
    cy.get('[href="/lostpassword.html"]').should('contain', 'Напомнить пароль');
    //Кнопка Регистрация
    cy.get('[href="/register.html"]').should('contain', 'Регистрация');
    //Кнопка Войти через ВКонтакте
    cy.get('#auth_via_vk').should('contain', 'Войти через ВКонтакте');
    
  })
  it('Авторизация по логину', function () {

    cy.visit ('https://jut.su/');
    cy.get('.login_btn').click();
    cy.get('#login_input1').click().type('test_cypress');
    cy.get('#login_input2').click().type('Eger33Lev');
    cy.get('#login_submit').click();
    cy.get('[href="https://jut.su/user/test_cypress/"]').should('contain','Профиль');
    cy.contains('Профиль');
  })

it('Авторизация по почте', function () {  
  cy.visit ('https://jut.su/');
  cy.get('.login_btn').click();
  cy.get('#login_input1').click().type('test.link01@yandex.ru');
  cy.get('#login_input2').click().type('Eger33Lev');
  cy.get('#login_submit').click();
  cy.get('[href="https://jut.su/user/test_cypress/"]').should('contain','Профиль');
  cy.contains('Профиль');
})
    })