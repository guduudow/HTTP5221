describe('Lab 5: Testing Lab 2 with Cypress', () => {

  //GLOBAL VARIABLES (input values)
  let path = './lab5.html';
  let username = 'ederes';
  let password = 'gure';

  //TEST TO PASS 
  describe('Test to Pass', () => {
    it('When initalized, the User should see the login application.', () => {
      cy.visit(path);
    })
    it('The User should be able to enter a username and password.', () => {
      cy.get('.login__user').type(username).should('have.value', "ederes");
      cy.get('.login__pass').type(password).should('have.value', "gure");
    })
    it('Clicking on "log in" should submit the form.', () => {
      cy.get('.login__button').click();
    })
    it('When the form submits, the hidden output div appears, and the User should see the values entered for username & password in the output div.', () => {
      cy.get('.output').should("be.visible");
      cy.get('.output__user').should('contain', username);
      cy.get('.output__pass').should('contain', password);
    })
  })

  //TEST TO FAIL
  describe('Test to Fail', () => {
    it('If the username box is empty when the form submits, the User should see the username background turn red and that the focus is set there.', () => {
      cy.visit(path);
      cy.get('.login__user').should('have.value', "");
      cy.get('.login__button').click();
      cy.get('.login__user').should('have.focus');
      cy.get('.login__user').should('have.class', 'login__txtbox_error');
    })
    it('If the password box is empty when the form submits, the User should see the password background turn red and that the focus is set there.', () => {
      cy.visit(path);
      cy.get('.login__user').type(username).should('have.value', "ederes");
      cy.get('.login__pass').should('have.value', "");
      cy.get('.login__button').click();
      cy.get('.login__pass').should('have.focus');
      cy.get('.login__pass').should('have.class', 'login__txtbox_error');
    })
  })
})