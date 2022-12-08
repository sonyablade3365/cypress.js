describe('Проверка авторизации', function () {
    it('Верная почта + верный пароль', function () {
        cy.visit ('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ilchenkogr3865@gmail.com');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('cyTestn1');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
    })

    it('Верная почта + НЕверный пароль', function () {
        cy.visit ('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ilchenkogr3865@gmail.com');
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('cyTestn2');
        cy.get('.auth-form__submit').should('not.be.disabled');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.visit ('https://staya.dog/');
    })
})
