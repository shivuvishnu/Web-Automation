describe("handlingdropdowns",()=>{

    // it("dropdown elements using select tag",()=>{


    //     cy.visit("https://www.zoho.com/commerce/free-demo.html");
    //     cy.xpath("//select[@id='zcf_address_country']").select('Argentina').should('have.value','Argentina');
        
    
    
    // })


    // it("dropdown elements using without select tag",()=>{


    // cy.visit("https://toponwardticket.com/dummy-ticket/?gad_source=1&gclid=Cj0KCQiA8q--BhDiARIsAP9tKI36KXlHo1DIxwnMz2c0wA63jOdRAqA__4lkdfRFnOiJksS4RPttgIsaAgAEEALw_wcB");
    // cy.xpath("(//span[@class='selection'])[1]").click();
    // cy.xpath("//input[@class='select2-search__field']").type('Akita	-	Japan	(	AXT	)').type('{enter}')
    // cy.xpath("(//span[@class='selection'])[1]").should('have.text','Akita	-	Japan	(	AXT	)')

    

// })
    it("Auto sugested dropdown",()=>{


        cy.visit("https://www.wikipedia.org/");
        cy.xpath("//input[@id='searchInput']").type("Delhi")
        cy.xpath("//h3[@class='suggestion-title']").contains('Delhi University').click();
        
    
    })

})

