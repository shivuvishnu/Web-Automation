describe("checkUielements", ()=>{

    it("checkui elements", ()=>{

    
    cy.visit("https://testautomationpractice.blogspot.com/")


    // cy.xpath("//label[.='Tuesday']/preceding-sibling::input").should('be.visible');


    // cy.xpath("//label[.='Tuesday']/preceding-sibling::input").check().should('be.checked');


    // cy.xpath("//label[.='Tuesday']/preceding-sibling::input").uncheck().should('not.be.checked');


    // cy.xpath("//label[.='Monday']/preceding-sibling::input").should('not.be.checked');

    //selects the all the checkboxes
    // cy.xpath("//label[.='Days:']/following-sibling::div/input").check().should('be.checked');
    // cy.xpath("//label[.='Days:']/following-sibling::div/input").uncheck().should('not.be.checked');

    //selects first and last checkbox
    cy.xpath("//label[.='Days:']/following-sibling::div/input").first().check();
    cy.xpath("//label[.='Days:']/following-sibling::div/input").last().check();


    
      })

})
