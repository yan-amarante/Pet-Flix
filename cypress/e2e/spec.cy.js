describe('acessar petflix', () => {
  it('achar titulo', () => {
    cy.visit('http://192.168.56.1:5173/')
    cy.get('h1') // Yield the <li>'s in .list
  })
})