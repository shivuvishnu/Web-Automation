describe("Handle Tab operation", ()=>{

    it("1st approach", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('/html/body/div/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a').invoke('removeAttr','target').click();
        cy.url().should('include','https://www.orangehrm.com');
        

    })
})