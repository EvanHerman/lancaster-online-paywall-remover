/**
 * Remove the paywall.
 *
 * @return {null}
 */
function removePaywall() {
  // Set a cookie to never show the paywall
  setCookie( 'xbc', '', 30 );
  removeAds();
}

/**
 * Remove the ads on the page.
 *
 * @return {null}
 */
function removeAds() {
  // Subscriber modal.
  hideElement( '.tp-modal' );
  hideElement( '.tp-backdrop' );

  document.body.classList.remove( 'tp-modal-open' );

  // Ads below content.
  hideElement( '#tncms-region-article_instory_bottom' );

  // Donation.
  hideElement( '#tncms-region-article_container_bottom' );

  // Hide unwanted elements on the page
  // ie: share buttons, sidebar ads, in-content ads etc.
  hideAllElements( '#tncms-region-article_top, .share-container, .tnt-ads-container, #footer-sub' );
}

function setCookie( cName, cValue, expDays ) {
  let date = new Date();
  date.setTime( date.getTime() + ( expDays * 24 * 60 * 60 * 1000 ) );
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; domain=.lancasteronline.com; path=/";
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
