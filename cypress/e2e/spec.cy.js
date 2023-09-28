describe('testar funcionalidades basicas do petflix', () => {
  
  it('acessar player de video pelo botao da hero section', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.hero-botao').click()
    cy.url().should('include', '/videoPlayer/1')
    cy.url().should('eq', 'http://localhost:5173/videoPlayer/1') 
  })

  it('acessar player de video pelo segundo video disponivel na lista de videos', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(2) > a > .thumbnail').click()
    cy.url().should('include', '/videoPlayer/2')
    cy.url().should('eq', 'http://localhost:5173/videoPlayer/2') 
  })

  it('verificar se o botão home funciona apos selecionar o terceiro video', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(3) > a > .thumbnail').click()
    cy.url().should('include', '/videoPlayer/3')
    cy.url().should('eq', 'http://localhost:5173/videoPlayer/3') 
    cy.get('.home-icon').click()
    cy.url().should('eq', 'http://localhost:5173/') 
  })

  it('verificar se o player de video', function () {
    cy.visit('http://localhost:5173/')
    cy.get('.hero-botao').click()
    cy.url().should('include', '/videoPlayer/1')
    cy.url().should('eq', 'http://localhost:5173/videoPlayer/1') 
    cy.wait(5000)
    cy.get('.video-player')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .then(function ($video) {
        $video[0].play()
      })
  })
})