// Gete the remove-paywall button
let removePaywallBtn = document.getElementById( 'remove-paywall' );

// When the button is clicked, inject removePaywall into current page
removePaywallBtn.addEventListener( 'click', async () => {
  let [tab] = await chrome.tabs.query( { active: true, currentWindow: true } );

  chrome.scripting.executeScript( {
    target: { tabId: tab.id },
    function: removePaywall,
  } );
} );

// The body of this function will be execueted as a content script inside the current page
function removePaywall() {
  let screenOverlay = document.querySelector( '.tp-backdrop' );
  screenOverlay.parentNode.removeChild( screenOverlay );

  let screenOverlayContainer = document.querySelector( '.tp-modal' );
  screenOverlayContainer.parentNode.removeChild( screenOverlayContainer );

  let stickyAd = document.querySelector( '#sticky-anchor' );
  stickyAd.parentNode.removeChild( stickyAd );

  let mainAd = document.querySelector( '#x-reveal-ad' );
  if ( null !== mainAd ) {
    mainAd.parentNode.removeChild( mainAd );
  }

  const body = document.querySelector( 'body' );
  body.classList.remove( 'tp-modal-open' );

  document.querySelectorAll( '.share-container, .sticky-anchor, .tncms-block, .tncms-region' ).forEach( function( blockToRemove ) {
    blockToRemove.remove();
  } );
}
