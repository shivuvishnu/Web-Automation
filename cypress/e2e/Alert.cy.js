describe('Alert popup', ()=>{



    it.skip(' how to handle alert messages',()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[.="Click for JS Alert"]').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        //alert window automatically closed by cypress
        cy.xpath('//p[.="You successfully clicked an alert"]').should('have.text','You successfully clicked an alert');
          
    })


    it.skip('Confirmation alert',()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[.="Click for JS Confirm"]').click();

        //verfiy message in alert window
        cy.on('window:confirm', (t1) => {
            expect(t1).to.contains('I am a JS Confirm');

        })

        cy.on('window:confirm', (t1)=> false); //cypress closes alert window using cancel button 
        //Cypress click on cancel button 
        cy.xpath('//p[.="You clicked: Cancel"]').should('have.text','You clicked: Cancel');
          
    })
     //3) Javascript prompt alert: it will have some text with a text box for user input along with 'ok'
    it.only('Js prompt alert',()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');

    })        

            cy.xpath("//button[.='Click for JS Prompt']").click();
            //in cypress if you want to cancel the popup use below code 
            cy.on('window:prompt', (message)=> {
                console.log(message);
                return null;
            })
            //by default in cypress it accepts 'ok' button in alerts
            cy.xpath('/html/body/div[2]/div/div/p[2]').should('contain','You entered: null');

            
        
    })

    it.skip('Autenticated Alert',()=>{


        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{ username: "admin",password: "admin"}});
        cy.xpath('//h3[.="Basic Auth"]/following-sibling::p').should('contain','Congratulations! You must have the proper credentials')
        
          
    })
})