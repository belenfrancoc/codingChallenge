import checkoutPageSelectors from "../selectors/checkoutPageSelectors";


class CheckoutPage {
    constructor(){
        this.firstNameInput = checkoutPageSelectors.first_name_input;
        this.lastNameInput = checkoutPageSelectors.last_name_input;
        this.postalCode = checkoutPageSelectors.postal_code;
        this.continueBtn = checkoutPageSelectors.continue_button;
    }

    fillCustomerData({ firstName, lastName, postalCode }) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.postalCode).type(postalCode);
    cy.get(this.continueBtn).click();
  }
}


export default new CheckoutPage();


