Feature('Lancaster Online - Remove Paywall Tests');

const crimeURLs = [
  'https://lancasteronline.com/news/local/man-shot-by-police-in-east-earl-township-had-warrants-for-stalking-woman-other-incidents/article_3861de9e-839a-11ec-8302-2f2bc23dcb6b.html',
  'https://lancasteronline.com/news/local/manor-township-man-traded-child-porn-online-stored-images-on-school-issued-laptop-police/article_ece883da-83a0-11ec-94c4-339c8533d749.html',
  'https://lancasteronline.com/news/local/driver-with-suspended-license-charged-in-pediatricians-november-death-update/article_e6b1e420-836e-11ec-b1df-f3431aaa276d.html',
  'https://lancasteronline.com/news/local/man-fought-staff-customers-at-millersville-concert-venue-attempted-to-gouge-out-bouncers-eye-police/article_e97993bc-82cc-11ec-b9de-cfbf0df94d5b.html',
  'https://lancasteronline.com/news/local/reward-offered-for-info-on-man-who-tried-to-rob-weis-market-pharmacy-in-willow/article_3b232354-7ec2-11ec-b67a-fbf59b0bea2f.html',
  'https://lancasteronline.com/news/local/former-teacher-on-probation-for-child-pornography-charged-again-after-hes-found-with-nearly-100/article_2b8859ec-7eb7-11ec-ac6d-93c0a4df124b.html',
  'https://lancasteronline.com/news/local/straight-out-of-a-horror-film-jury-convicts-quarryville-man-of-shooting-man-on-two/article_2df8bffc-7eb0-11ec-9940-d372e9fc2d49.html',
  'https://lancasteronline.com/news/local/here-s-what-we-know-don-t-know-about-the-york-county-man-charged-with/article_3a10fc12-7e44-11ec-80aa-9781e3120b33.html',
  'https://lancasteronline.com/news/local/gap-man-charged-after-firing-gun-in-air-during-roadside-confrontation-in-berks-county-report/article_1cadd030-7e37-11ec-9b6b-c71a70de5a6a.html',
  'https://lancasteronline.com/news/local/lancaster-woman-shoots-man-in-city-early-sunday-police-update/article_107e0cf6-7e25-11ec-ba72-430667b31629.html'
];

Scenario( 'Hides the paywall.', ({ I }) => {
  for (let i = 0; i < crimeURLs.length; i++) {
    I.amOnPage(crimeURLs[i]);
    I.wait(2);
    I.dontSeeElement('.tp-modal');
  }
} );
