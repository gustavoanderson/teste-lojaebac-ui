/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
       produtosPage.visitarURL()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

it('Deve buscar um produto com sucesso', () => {
    let produto = 'Ariel Roll Sleeve Sweatshirt'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain', produto)
});

it('Deve visitar a página do produto', () => {
    
    produtosPage.visitarProduto('Atlas Fitness Tank')
    cy.get('.product_title').should('contain', 'Atlas Fitness Tank')

});

it('Deve adicionar o produto ao carrinho', () => {
    
    produtosPage.buscarProduto('Abominable Hoodie')
    produtosPage.addProdutoCarrinho('M', 'Green', 5 )
    cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')

});

it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
    
    cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    })

});

});