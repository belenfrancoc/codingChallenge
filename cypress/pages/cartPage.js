import cartPageSelectors from "../selectors/cartPageSelector";

class CartPage {
    constructor(){
        this.removeItemBtn = cartPageSelectors.remove_item_button;
        this.checkoutBtn = cartPageSelectors.checkout_button;
        this.cartItem = cartPageSelectors.cart_item;
        this.titlePage = cartPageSelectors.cart_page_title;
    }

    verifyCartPageisLoaded(title){
        cy.url().should('include', '/cart.html')
        cy.get(this.titlePage).should('have.text', title)
    }

    removeItemByIndex(index) {
        cy.get(this.removeButtons).eq(index).click();
    }   

    proceedToCheckout() {
        cy.get(this.checkoutBtn).click();
    }
}

export default new CartPage();