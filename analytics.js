
function LogAnalytics(){
console.log("push event");
window.dataLayer.push({
  event: "checkout_button",
 'ecommerce': {
  'promoView': {
   'promotions': [
    {
     'id': 'test_id_123', // ID or Name is required.
     'name': 'June Sale',
     'creative': 'banner1',
     'position': 'slot1'
    },
    {
     'id': 'FREE_SHIP13',
     'name': 'Free Shipping Promo',
     'creative': 'skyscraper1',
     'position': 'slot2'
   }]
  }
 }
});
}

function LogConsent(pref, stats, marketing){
document.cookie = "consentcookie=" + JSON.stringify({stats: stats, pref: pref, marketing: marketing});
window.dataLayer.push({
  event: "consent",
   'consent_options':
    {
     'pref': pref,
     'stats': stats,
     'marketing': marketing
    }
  });
}
