//--------------------- Used in PART 7 -------------------------
class InventoryPage {
    clickProductImage() {
      cy.get('#item_4_img_link').click()
    }
  
    verifyProductPage() {
      cy.get('[data-test=back-to-products]').should('be.visible')
      cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')
    }
  }
  
  export default InventoryPage
  