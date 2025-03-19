describe("Automating dropdown using each ", ()=>{

    it("automate",()=>{
        cy.get('').each(($el, index, $list) => {
            if($el.text()=='cypress documentation')
            {
            cy.wrap($el).click();
            }
          });






    })






})