

function showCookieBanner() {
}

function acceptAll() {
    document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = true;
    document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = true;
    document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = true;
    LogConsent(true, true, true);
}

function hideCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    cookiebanner.style.display = "none";
}

function showCookieSettings() {
      document.getElementById('cookiebanner').className += "settings-open";
      document.getElementById('cookies-content').style.display = 'none';
      document.getElementById('cookieBannerLink').style.display = 'none';
      document.getElementById('settings-content').style.display = 'block';
}

function acceptCustom() {
    pref = document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked;
    stats = document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked;
    marketing = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked;
    LogConsent(pref, stats, marketing);
}
