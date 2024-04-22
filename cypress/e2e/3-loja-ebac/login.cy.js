/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('dt_guu@hotmail.com')
    cy.get('#password').type('Gustavo@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, dt_guu (não é dt_guu? Sair)')

})

})