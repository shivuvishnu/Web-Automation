describe("Assertion", ()=>{

    it("impact assertion", ()=> {
        cy.visit("https://www.saucedemo.com/")
        cy.url().should('include','demo').and('eq','https://www.saucedemo.com/').and('contain','sauce').and('not.contain','demoio')
        cy.title().should('contain','Swag')
        cy.title().should('include','Swag')
        cy.title().should('eq','Swag Labs')
        cy.xpath("//input").should('have.length',3)
        cy.get(".login_logo").should('be.visible')


    })

})

    



