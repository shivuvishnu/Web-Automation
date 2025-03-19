   /// <reference types="Cypress" />
   /// <referece types="cypress-xpath" />

   Cypress.Commands.add('getiframe', (iframe)=>{
      return cy.xpath(iframe)
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);



   })