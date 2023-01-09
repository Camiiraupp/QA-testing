
import { element } from './elements'

class Toast {
    shouldHaveText(expectText) {
        cy.get(element.TOAST_BY_CLASS)
            .find(element.CHILDREN_BY_CLASS)
            .should('be.visible')
            .should('have.text', expectText)
    }
}

export default new Toast()