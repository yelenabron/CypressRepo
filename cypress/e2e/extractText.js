
/// <reference types="cypress" />

describe('thirdTest', () => {

        

})



it('thirdTest', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    
    //1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    //2

    cy.get('[for="exampleInputEmail1"]').then(label => {
        const labelText = label.text()
        expect(labelText).to.equal('Email address')
    cy.wrap(labelText).should('contain', 'Email address')
    }

    )

    //3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then ( text => {

        expect(text).to.equal('Email address')
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')

    }

    )

    //4

cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {

    expect(classValue).to.equal('label')
}
    
    )

    //5 invoke property

cy.get('#exampleInputEmail1').type("test@test.com")

cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then(property => {
    expect(property).to.equal('test@test.com')

})





 




})