describe('Feedback Test', () => { 
    it('Should submit feedback form', () => {
        cy.visitFeedbackpage()
        // cy.submitFeedback(
        // 'Peter',
        // 'test@email.com',
        // 'My Subject',
        // 'This is my awesome message!'
        // )
        cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
            cy.submitFeedback(name, email, subject, message)
        })
    })
 })