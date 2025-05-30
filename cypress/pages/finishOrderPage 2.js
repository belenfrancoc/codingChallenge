import finishOrderPageSelectors from "../selectors/finishOrderPageSelectors";

class FinishOrderPage {
    constructor(){
        this.totalLabel = finishOrderPageSelectors.total_order_text
        this.finishButton   = finishOrderPageSelectors.finish_button
        this.completeHeader = finishOrderPageSelectors.complete_order_text
        this.backHomeButton = finishOrderPageSelectors.back_home_button
    }

  shouldShowTotal(expectedText) {
    cy.get(this.totalLabel).should('contain.text', expectedText);
  }


  finishOrder() {
    cy.get(this.finishButton).click();
  }

  shouldShowCompleteHeader(expectedHeader) {
    cy.get(this.completeHeader).should('have.text', expectedHeader);
  }

  backHome() {
    cy.get(this.backHomeButton).click();
  }
}

export default new FinishOrderPage();


