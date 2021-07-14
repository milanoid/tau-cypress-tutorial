/// <reference types="cypress" />


it('should be able to add a new todo to the list', () => {
    // actions
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000')
    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    
    // validations
    cy.get('label').should('have.text', 'Clean room')
    cy.get('.toggle').should('not.be.checked')

    // action
    cy.get('.toggle').click()

    // validations
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
})