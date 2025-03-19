describe("Handle Tab operation", ()=>{

    it.skip("1st approach", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.xpath('//a[.="Click Here"]').invoke('removeAttr','target').click();//it opens new tab on same tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        cy.go('back'); //this is to perform back operation

    })

    it("2nd approach", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.xpath('//a[.="Click Here"]').then((e)=>{ //we are getting element and passing it to function

            let url=e.prop('href'); //from 'e' element we are exctracting href attribute value
            cy.visit(url);
        })
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
            cy.wait(4000);
            cy.go('back');


        

        })

})