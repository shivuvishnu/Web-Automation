describe('myfirttest', () => {

    it('verify title-positive', () => {
      cy.visit('https://payroll.razorpay.com/login?redirect=%2Fdashboard')
      cy.title().should('eq','Login | RazorpayX Payroll')
    })
  
    it('verify title-negative', () => {
      cy.visit('https://payroll.razorpay.com/login?redirect=%2Fdashboard')
      cy.title().should('eq','Login | RazorpayX Payroll123')
    })
  })