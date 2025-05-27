import homePageLocators from "../selectors/homePageSelectors";

class HomePage {

    constructor(){
        this.item = homePageLocators.inventory_item;
        this.addToCartBtn= homePageLocators.add_to_cart_button;
        this.sortDropdownBtn = homePageLocators.sort_dropdown;
        this.cartBtn = homePageLocators.cart_button
    }

    addItemToCartByIndex(index) {
        cy.get(this.addToCartBtn).eq(index).click();
    }

    sortBy(optionLabel) {
        cy.get(this.sortDropdownBtn).select(optionLabel);
    }

    goToCart() {
        cy.get(this.cartBtn).click();
    }
}

export default new HomePage();