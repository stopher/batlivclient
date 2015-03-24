var Ads = (function() {

    var admobid = {};
    
    me = {};

    me.showBannerTop = function() {
        if(AdMob) AdMob.createBanner( admobid.banner );
    },
    me.showBannerBottom = function() {
        if(AdMob) AdMob.createBanner( {
            adId:admobid.banner, 
            position:AdMob.AD_POSITION.BOTTOM_CENTER, 
            autoShow:true} );
    },
    me.showInterstitial = function() {
        if(AdMob) AdMob.showInterstitial();
    },
    me.prepareInterstitial = function() {
         if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
    },
    me.init = function() {
    
        if( /(android)/i.test(navigator.userAgent) ) { 
            admobid = { // for Android
                banner: 'ca-app-pub-9885144648586728/9036175295',
                interstitial: 'ca-app-pub-9885144648586728/1512908490'
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-9885144648586728/1652509296',
                interstitial: 'ca-app-pub-9885144648586728/3129242494'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-9885144648586728/1443163295',
                interstitial: 'ca-app-pub-9885144648586728/2919896493'
            };
        }
    };
    return me;
}());