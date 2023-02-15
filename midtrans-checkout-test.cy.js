describe('Checkout Test', () => {
    before(() => {
        cy.visit('https://demo.midtrans.com/', {timeout: 100000})
        cy.get('[data-reactid=".0.0.0.2.0.0.5"]').click()
        cy.wait

    });

    context('Verify if the amount field work properly', () => {
        it("Check if the amount field doesn't allow alphabets and special characters", () => {
        cy.get('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]').should('have.value', '20000')
        parseSpecialCharSequences: false
        cy.wait
        })

        it("Check if the amount field that type is number", () => {
            cy.get('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]').invoke('text').should('match', /^[0-9]*$/)
            cy.wait
        })
    })

    context('Verify if the name field work properly', () => {
        it('Input sample email on the name field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').type('maulana.ibrahim045@gmail.com')
        });
    })

    context('Verify if the email field work properly', () => {
        it('Input sample email on the email field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]').type('maulana.ibrahim045@gmail.com')
        });
    })

    context('Verify if the phone field work properly', () => {
        it('Input sample phone number on the phone field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]').type('08123456789')
        });
    })

    context('Verify if the City field work properly', () => {
        it('Input sample city name on the city field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]').type('Jakarta')
        });
    })

    context('Verify if the address field work properly', () => {
        it('Input sample on the address field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').type('MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11')
        });
    })

    context('Verify if the postal code field work properly', () => {
        it('Input sample on the postal code field', () => {
            cy.get('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').clear()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').type('10220')
        });
    })

    context('Check if the user redirect to payment method after click button checkout', () => {
        it('Click button Checkout', () => {
            cy.get('[data-reactid=".0.0.1.1.0"]').click()
            cy.wait
        });

        it('Verify if the user already on payment method page', () => {
        
            
        });
    })
})