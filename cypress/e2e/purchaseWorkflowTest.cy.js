import LoginPage       from '../pages/loginPage'
import homePage from '../pages/homePage'
import CartPage        from '../pages/cartPage'
import CheckoutPage    from '../pages/checkoutPage'
import FinishOrderPage from '../pages/finishOrderPage'
import loginUsers from '../testData/credentials'
import customerInfo    from '../testData/customerInfo'
import url from '../testData/urls'

describe('End-to-End Purchase Flow', () => {

  const loginPage = new LoginPage()
  before(() => {
    // 1. Login
    loginPage.goTo(url.url)
    loginPage.login(loginUsers.valid.username, loginUsers.valid.password)
    cy.url().should('include', '/inventory.html')
  })

  it('realiza toda la compra de un producto', () => {
    // 2. add two products
    homePage.addItemToCartByIndex(0)
    homePage.addItemToCartByIndex(3)

    // 3. go to cart and verify
    homePage.goToCart()

    // 4. start checkout
    CartPage.verifyCartPageisLoaded('Your Cart')
    CartPage.proceedToCheckout()
    cy.url().should('include', '/checkout-step-one.html')

    // 5. fill in customer data and continue
    CheckoutPage.fillCustomerData(customerInfo)
    cy.url().should('include', '/checkout-step-two.html')

    // 6. Verify total
    FinishOrderPage.shouldShowTotal('Total:')
    FinishOrderPage.finishOrder()

    // 7. Verify thank you badge
    FinishOrderPage.shouldShowCompleteHeader('Thank you for your order!')

    FinishOrderPage.backHome();
    cy.url().should('include', '/inventory.html');
  })
})
