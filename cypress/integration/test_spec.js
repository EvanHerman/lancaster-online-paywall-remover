describe( 'Test the chrome extension', () => {
  // Paywall triggers on third article visit
  it( 'Hides LancasterOnline paywall', () => {
    cy.visit( 'https://lancasteronline.com/crime/' );
    cy.get( '.card-img-sm .tnt-asset-type-article:nth-child(1) .tnt-headline' ).click();

    cy.visit( 'https://lancasteronline.com/crime/' );
    cy.get( '.card-img-sm .tnt-asset-type-article:nth-child(2) .tnt-headline' ).click();

    cy.visit( 'https://lancasteronline.com/crime/' );
    cy.get( '.card-img-sm .tnt-asset-type-article:nth-child(3) .tnt-headline' ).click();
  } );
} );
