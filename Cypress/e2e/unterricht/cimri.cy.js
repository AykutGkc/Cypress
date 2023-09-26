describe("Cimri Website Test",()=>{

beforeEach(()=>{

 cy.visit("http://www.cimri.com");

});

afterEach(()=>{ 

//Nachladen die Webseite nach Test
cy.reload();

});

it('Verifizieren, die Startseite wird geöffnet ', () => {
    
    cy.url().should('eq',"https://www.cimri.com/")

    cy.title().should('include','cimri');

});

it('Suchen eine Produkt und Verifizieren Ergebnisse', () => {

    const expectedText='Asus rog zephyrus'

    cy.get('.s17vz787-1').click();
    cy.contains('.s17vz787-4').type('expectedText');
    cy.wait(2000)
    cy.contains('asus rog zephyrus g14').click({force:true})


});

})