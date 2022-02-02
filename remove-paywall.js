// The body of this function will be execueted as a content script inside the current page
function removePaywall() {
  // Add a 200ms timeout to wait for the DOM content to appear
  setTimeout(function() {
    removeAds();

    // Check if paywall exists befoore altering the DOM
    let element = document.querySelector( '.tp-modal' );
    if ( null === element ) {
      return;
    }

    // Screen Overlay
    hideElement( '.tp-backdrop' );

    // Paywall Modal
    hideElement( '.tp-modal' );

    // Sticky Footer Ad
    hideElement( '#sticky-anchor' );

    // Remove the body class preventing scrolling
    const body = document.querySelector( 'body' );
    body.classList.remove( 'tp-modal-open' );

    console.log( 'LancasterOnline paywall removed.' );
  }, 200 );
}

function removeAds() {
  // Main Ad
  hideElement( '#x-reveal-ad' );

  // revcontent
  hideElement( '.lnp-revcontent-wrapper' );

  // Hide unwanted elements on the page
  // ie: share buttons, sidebar ads, in-content ads etc.
  hideAllElements( '.share-container, .tnt-ads-container' );

  console.log( 'LancasterOnline ads removed.' );
}

/**
 * Hide a single element on the page
 *
 * @param  {string} elementSelector The element to remove.
 *
 * @return {null}
 */
function hideElement( elementSelector ) {
  let element = document.querySelector( elementSelector );
  if ( null !== element ) {
    element.parentNode.removeChild( element );
  }
}

/**
 * Hide multiple elements on the page.
 *
 * @param  {string} elementSelectors The elements to remove, separated by a comma.
 *
 * @return {null}
 */
function hideAllElements( elementSelectors ) {
  document.querySelectorAll( elementSelectors ).forEach( function( blockToRemove ) {
    if ( null !== blockToRemove ) {
      blockToRemove.remove();
    }
  } );
}

// Hide the ads and paywall after everything else loads.
if ( 'complete' == document.readyState ) {
  removePaywall();
} else {
  document.onreadystatechange = function () {
    if ( 'complete' == document.readyState ) {
      removePaywall();
    }
  }
}
