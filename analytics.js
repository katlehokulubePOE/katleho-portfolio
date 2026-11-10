/* Consent controls for the Google Tag Manager container.
   GTM is installed in index.html. Configure and publish the GA4 Google tag
   inside the GTM container (GTM-5KRP4GRZ) to begin collecting analytics. */
(function () {
  'use strict';
  var banner = document.getElementById('analytics-consent');
  var accept = document.getElementById('analytics-accept');
  var reject = document.getElementById('analytics-reject');
  if (!banner || !accept || !reject) return;

  function updateConsent(accepted) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', {
      analytics_storage: accepted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }
  function readChoice() {
    try { return window.localStorage.getItem('katleho-analytics-consent'); }
    catch (error) { return null; }
  }
  function saveChoice(value) {
    try { window.localStorage.setItem('katleho-analytics-consent', value); }
    catch (error) { /* The choice still applies to this page view. */ }
  }

  var choice = readChoice();
  if (choice === 'accepted') updateConsent(true);
  else if (choice === 'rejected') updateConsent(false);
  else banner.hidden = false;

  accept.addEventListener('click', function () {
    saveChoice('accepted');
    banner.hidden = true;
    updateConsent(true);
  });
  reject.addEventListener('click', function () {
    saveChoice('rejected');
    banner.hidden = true;
    updateConsent(false);
  });
}());
