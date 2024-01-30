/// <reference types="cypress" />

describe('First test suite', () => {

        

    })

    it('First test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        //by tag name
        cy.get('input')

        //by id
       cy.get('#inputEmail1')

        //by Class value
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')

        //by entire Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')


        //how to find by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag, attribute, id and class
       cy.get('input[placeholder="Email"].input-full-width')

        //by Cypress ID
        cy.get('[data-cy="imputEmail1"]')

    })

    it('Second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Theory
        //get() - find elements on the page by locator globally
        //find() - find child elements by locator
        //contains() - find HTML text and by text and locator


        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button') //will find all elements (buttons) on the page

        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()


    })

    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

      
      //Can't do thing like this

        //const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
       // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
       // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

       //1 Cypress Alias

    cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
     cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
     cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

     //2 Cypress then() methods

     cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {

        cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
        cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
     })

     it('extract text values', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        
        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')



     })


    })



 


