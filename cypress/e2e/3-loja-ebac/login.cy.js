/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso', () => {
    
    cy.get('#username').type('dt_guu@hotmail.com')
    cy.get('#password').type('Gustavo@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, dt_guu (não é dt_guu? Sair)')

})


it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
   
    cy.get('#username').type('dt_gu@hotmail.com')
    cy.get('#password').type('Gustavo@123')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')

});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    
    cy.get('#username').type('dt_guu@hotmail.com')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocommerce-error').should('contain' , 'Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')

});

})