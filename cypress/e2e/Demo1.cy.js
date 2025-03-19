describe('Xpath', () => {

    it("xpath1", () => {
        
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("(//a[.='Dresses'])[2]").click()
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',5) 


    })

    it("xpath2", () => {
        
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("(//a[.='Dresses'])[2]").click()
        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length',5) 


    })

})
