import LoginPage from "../pages/loginPage" 
import loginUsers from "../testData/credentials"
import url from "../testData/urls"

describe('Login Page Tests', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.goTo(url.url)
  })
it('Login with valid credentials', () => {

    loginPage.login(loginUsers.valid.username, loginUsers.valid.password)

})

it('Login fails with invalid credentials', () => {

    loginPage.invalidLogin(loginUsers.invalid.username, loginUsers.invalid.password)

  
})
})
