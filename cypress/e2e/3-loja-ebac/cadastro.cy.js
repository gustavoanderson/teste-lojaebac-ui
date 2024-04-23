/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {

        var fakename = faker.person.firstName()
        var fakemail = faker.internet.email(fakename)
        var fakelastname = faker.person.lastName()

        cy.get('#reg_email').type(fakemail)
        cy.get('#reg_password').type('Teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakename)
        cy.get('#account_last_name').type(fakelastname)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    

});