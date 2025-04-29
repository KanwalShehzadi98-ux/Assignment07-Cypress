/// <reference types="cypress"/>

//--------------------- PART 2 -------------------------
//const { it } = require("cypress/types/lodash");

// it('should open the application under test', () => {
//     cy.visit('https://www.saucedemo.com')
// })

//--------------------- PART 3 -------------------------
// it('should not login to the website', () => {
//     cy.visit('https://www.saucedemo.com')
//     cy.get('#user-name').type('standard_users')
//     cy.get('#password').type('secret_sauces')
//     cy.get('#login-button').click()
//     cy.get('[data-test=title]').contains('Products')
//     cy.contains('Invalid credentials').should('exist')
//     cy.url().should('eq',"https://www.saucedemo.com/inventory.html")
// })

//--------------------- PART 5 -------------------------
// it('should login and navigate to product details page', () => {
//         cy.visit('https://www.saucedemo.com')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()
//         cy.get('#item_4_img_link').click()
//         cy.get('[data-test=back-to-products]').should('be.visible')
//         cy.url().should('eq',"https://www.saucedemo.com/inventory-item.html?id=4")
//     })

//--------------------- PART 4 & 6 -------------------------
// import './commands'

// // Command 4: visit site before each test
// beforeEach(function () {
//     cy.fixture('example').then(function (data) {
//         this.data = data
//     })
//     cy.visit('https://www.saucedemo.com')
// })

// it('should login to the website', function () {
//     // Command 1: using login command
//     cy.login(this.data.username, this.data.password)

//     cy.get('[data-test=title]').contains('Products')
//     cy.contains('Invalid credentials').should('not.exist')
//     cy.url().should('eq', "https://www.saucedemo.com/inventory.html")
// })

// // Command 5: logout after each test (optional)
// afterEach(() => {
//     // Command 2: logout command
//     cy.logout()
// })

//--------------------- PART 7 -------------------------
import LoginPage from '../support/pageObjects/loginPage'
import InventoryPage from '../support/pageObjects/inventoryPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

it('Q7: should login and navigate to product details page using POM', () => {
    cy.visit('https://www.saucedemo.com')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.clickProductImage()
    inventoryPage.verifyProductPage()
})
