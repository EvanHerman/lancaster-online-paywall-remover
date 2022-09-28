Feature('Lancaster Online - Remove Paywall Tests');

const crimeURLs = [
  'https://lancasteronline.com/news/local/man-shot-by-police-in-east-earl-township-had-warrants-for-stalking-woman-other-incidents/article_3861de9e-839a-11ec-8302-2f2bc23dcb6b.html',
  'https://lancasteronline.com/news/local/manor-township-man-traded-child-porn-online-stored-images-on-school-issued-laptop-police/article_ece883da-83a0-11ec-94c4-339c8533d749.html',
  'https://lancasteronline.com/news/local/driver-with-suspended-license-charged-in-pediatricians-november-death-update/article_e6b1e420-836e-11ec-b1df-f3431aaa276d.html',
  'https://lancasteronline.com/news/local/man-fought-staff-customers-at-millersville-concert-venue-attempted-to-gouge-out-bouncers-eye-police/article_e97993bc-82cc-11ec-b9de-cfbf0df94d5b.html',
  'https://lancasteronline.com/news/local/conestoga-valleys-new-middle-school-opens-to-students-after-multiple-construction-delays/article_c70af842-3dda-11ed-b36b-d301391b0d7e.html',
];

Scenario( 'Hides the paywall.', ({ I }) => {
  for (let i = 0; i < crimeURLs.length; i++) {
    I.amOnPage(crimeURLs[i]);
    I.wait(2);
    I.dontSeeElement('.tp-modal');
  }
} );
