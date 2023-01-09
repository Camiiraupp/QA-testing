
import { element } from './elements'

class Alert {
    haveText(expectedText) {
        cy.contains(element.ERROR_BY_CLASS, expectedText)
            .should('be.visible')
    }
}

export default new Alert()