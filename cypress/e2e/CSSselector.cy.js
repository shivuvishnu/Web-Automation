

describe('CSSlocaters', () => {

    it("csslocater", () => {
        
        cy.visit("https://www.saucedemo.com/")
        cy.xpath("(//input[@class='input_error form_input'])[1]").type("standard_user")
        cy.xpath("(//input[@class='input_error form_input'])[2]").type("secret_sauce")
        cy.xpath("//input[@class='submit-button btn_action']").click()
        
        
})

})



