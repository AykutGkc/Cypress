describe("Cimri.com Website Test",()=>{

beforeEach(()=>{

cy.visit("https://www.cimri.com/")

});

afterEach(()=>{ 

//Nachladen die Webseite nach Test
cy.reload();

});

it('Verifizieren, die Startseite wird geöffnet ', () => {
    
    cy.url().should('eq',"https://www.cimri.com/")

});











})