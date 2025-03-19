describe("Handle Frame", ()=>{

    it("1st approach", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getiframe('//*[@id="mce_0_ifr"]').clear().type("welcome {cmd+a}");
        cy.xpath('//*[@id="content"]/div/div/div[1]/div[1]/div[2]/div/div[3]/button[1]/span/svg/path').click();
        

    })
})