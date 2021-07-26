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
  document.body.style.overflowY = 'visible';

  var screenOverlay = document.querySelector( '#syncronexOverlay' );
  screenOverlay.parentNode.removeChild( screenOverlay );

  var screenOverlayContainer = document.querySelector( '#syncronexOverlayContainer' );
  screenOverlayContainer.parentNode.removeChild( screenOverlayContainer );

  var screenOverlayContainer = document.querySelector( '#sticky-anchor' );
  screenOverlayContainer.parentNode.removeChild( screenOverlayContainer );

  document.querySelectorAll( '.share-container, .tncms-block' ).forEach( function( blockToRemove ) {
    blockToRemove.remove();
  } );
}
