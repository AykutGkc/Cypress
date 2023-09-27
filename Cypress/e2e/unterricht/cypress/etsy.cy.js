describe("Nach Produkten suchen, nach Preis sortieren, in den Warenkorb legen",function(){


    before(()=>{

     cy.visit("https://etsy.com")  
     cy.contains("Akzeptieren").click() 
     cy.url().should("include","etsy")
     

     })


    it('Gehen am ende Seite und Verfizieren Über Etsy', () => {
    
    cy.scrollTo("bottom")
    
    cy.get(':nth-child(3) > .wt-hide-xs').should('contain','Über Etsy');
    
    cy.contains('Über Etsy').should('be.visible');
    
    });

    it('Suchen Produkte', () => {
   
    cy.scrollTo("top");
    cy.get('#global-enhancements-search-query').type('bracelet{enter}')
    
    });
   
    it('Verifizieren Filter Optionen', () => {
   
        cy.get('#sortby > .wt-menu_trigger').click()
        cy.wait(2000)

        const sortOptionen = ['Preis aufsteigend','Preis absteigend','Top-Kundenbewertungen','Neueste']

        sortOptionen.forEach((option)=> {

            cy.get('#sortby > .wt-menu__body')
            .contains(option)
            .should('be.visible')
            .then(() => {
                cy.log('Sortieroptionen werden angezeigt');
            });
        });
            


    
    });







})