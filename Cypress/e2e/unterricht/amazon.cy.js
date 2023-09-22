describe("Amazon ",()=>{


it("Beginnen Browser und Gehen Amazon Website",()=>{

cy.visit("/")
cy.wait(2000)

})

it('Akzeptieren Cookies', () => {
    
    cy.xpath("//input[@id='sp-cc-accept']").click();

});

it('URL und Title assertion', () => {

    cy.url().should('include','amazon');
    cy.title().should('include','Amazon');
    
});

it('Screiben eine Dinge auf Search Box', () => {

    cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{enter}');
    cy.xpath("//input[@id='sp-cc-accept']").click();
});

it('Zurück zur Startseite.', () => {

    cy.go('back');  

    //Noch ein Schritt nach vorne Gehen
    //  cy.go('forward');
    
});

it('Wählen Sie im Kategorieauswahlfeld „Elektronik“ aus', () => {
    
    cy.get('#searchDropdownBox').select('Elektronik') 
    cy.xpath("//input[@id='sp-cc-accept']").click();//Akzeptieren Cookies

});

it('Erstellen Eine Konto“.', () => {
    cy.get('#nav-link-accountList').click();
    cy.contains(" Amazon hesabınızı oluşturun").click();
    
    cy.get(':nth-child(1) > :nth-child(2) > .a-form-label').should("contain","Ad - Soyad")
    cy.get('[for="ap_email"]').should("be.visible","Cep telefonu numarası veya e-posta")
    cy.contains("Cep telefonu numarası veya e-posta").should("be.visible")
});

})


describe.only("Suchen Eine Dinge in Amazon",function() {

it('Besuchen HomePage', () => {
    cy.visit("/")
    cy.url().should('include','amazon')
    cy.xpath("//input[@id='sp-cc-accept']").click();

});

it('Finden SearchBox und Eingabe eine Dinge', () => {

    const produktName="alcatel 2019G";

    cy.get('#twotabsearchtextbox').type(produktName).type('{enter}')
    cy.xpath("//input[@id='sp-cc-accept']").click();

});

it('Prüfen das Ergebnis von produktName', () => {
    cy.get(' .sg-col-inner').should("have.length",35)
});

    
})


