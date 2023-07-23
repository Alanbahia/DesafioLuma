import cliente from '../fixtures/cliente.json'
beforeEach(() => {
  cy.viewport(1920, 1080)
  cy.visit('https://magento.softwaretestingboard.com/')
  cy.get('a[class="logo"]').should('be.visible');
  cy.get('a[class="block-promo home-main"]').should('be.visible');
});
  it('pesquisa de item', () => {
    cy.get('input[id="search"]').type('shirt')
    cy.get('button[title="Search"]').click();
});
  it('Validar carregamento da pagina da busca', () => {
    cy.get('input[id="search"]').type('shirt')
    cy.get('button[title="Search"]').click();
    cy.contains('Proteus Fitness Jackshirt').click()
  });
  it('Validar carregamento da pagina do produto', () => {
    cy.get('input[id="search"]').type('shirt')
    cy.get('button[title="Search"]').click();
    cy.contains('Proteus Fitness Jackshirt').click()
    cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible');
    cy.wait(1000)
    cy.get('div[id="option-label-size-143-item-166"]').click();
    cy.wait(1000)
    cy.get('div[id="option-label-color-93-item-49"]').click();
    cy.wait(1000)
    cy.get('input[id="qty"]').type('2')
    cy.wait(1000)
    cy.get('button[title="Add to Cart"]').click();
    cy.get('span[class="price"]').should('be.visible');
    cy.wait(3000)
    cy.get('a[class="action showcart"]').click();
      });
  it('Checkout', () => {
    cy.get('input[id="search"]').type('shirt')
    cy.get('button[title="Search"]').click();
    cy.contains('Proteus Fitness Jackshirt').click()
    cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible');
    cy.wait(1000)
    cy.get('div[id="option-label-size-143-item-166"]').click();
    cy.wait(1000)
    cy.get('div[id="option-label-color-93-item-49"]').click();
    cy.get('button[title="Add to Cart"]').click();
    cy.get('span[class="price"]').should('be.visible');
    cy.wait(3000)
    cy.get('a[class="action showcart"]').click();
    cy.wait(1000)
    cy.get('button[id="top-cart-btn-checkout"]').click();
    cy.get('strong[class="product-item-name"]').should('have.text','Proteus Fitness Jackshirt')
    cy.get('span[class="value"]').should('have.text','1');
    cy.wait(3000)
    cy.get('#customer-email-fieldset > .required').type(cliente.email);
    cy.wait(2000)
    cy.get('input[name="firstname"]').type(cliente.firstName);
    cy.get('input[name="lastname"]').type(cliente.lastName);
    cy.get('input[name="street[0]"]').type(cliente.Address)
    cy.get('input[name="city"]').type(cliente.City)
    cy.get('select[name = "country_id"]').select('BR')
    cy.wait(2000)
    cy.get('select[name="region_id"]').select('Bahia')
    cy.get('input[name="postcode"]').type(cliente.zipcode);
    cy.get('input[name="telephone"]').type(cliente.phone);
    cy.wait(2000)
    cy.get('button[data-role="opc-continue"]').click();
    cy.wait(5000)
    cy.get('div[class="shipping-information-content"]').contains(cliente.City);
    cy.get('div[class="shipping-information-content"]').contains(cliente.firstName);
    cy.get('div[class="shipping-information-content"]').contains(cliente.lastName);
    cy.get('div[class="shipping-information-content"]').contains(cliente.Address);
    cy.wait(2000)
    cy.get('button[class="action primary checkout"]').click();
    cy.get('input[name="billing-address-same-as-shipping"]').check().should('be.checked')
    cy.wait(4000)
    cy.get('span[class="base"]').should('have.text','Thank you for your purchase!')
    cy.get('div[class="checkout-success"]')
    .invoke('text')
    .then((text) => {
      cy.log(text)
    })
    });