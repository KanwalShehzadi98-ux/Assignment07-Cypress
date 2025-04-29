//--------------------- Used in PART 7 -------------------------

class LoginPage {
    enterUsername(username) {
      cy.get('#user-name').type(username)
    }
  
    enterPassword(password) {
      cy.get('#password').type(password)
    }
  
    clickLogin() {
      cy.get('#login-button').click()
    }
  
    login(username, password) {
      this.enterUsername(username)
      this.enterPassword(password)
      this.clickLogin()
    }
  }
  
  export default LoginPage
  