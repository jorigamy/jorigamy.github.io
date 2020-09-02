/*!
 * Panda Lockers - v2.1.0, 2016-06-23 
 * for jQuery: http://onepress-media.com/plugin/social-locker-for-jquery/get 
 * for Wordpress: http://onepress-media.com/plugin/social-locker-for-wordpress/get 
 * 
 * Copyright 2016, OnePress, http://byonepress.com 
 * Help Desk: http://support.onepress-media.com/ 
*/

/*!
 * Localization
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {

    /**
    * Text resources.
    */
   
    if ( !$.pandalocker ) $.pandalocker = {};
    
    if (!$.pandalocker.lang) $.pandalocker.lang = {};
    if (!$.pandalocker.lang.defaults ) $.pandalocker.lang.defaults = {};  
    
    $.pandalocker.lang.defaults = {
        
        // - translatable text
        
        // the Screen "Please Confirm Your Email"
        
        confirm_screen_title:           'Please Confirm Your Email',
        confirm_screen_instructiont:    'We have sent a confirmation email to {email}. Please click on the confirmation link in the email to reveal the content.',
        confirm_screen_note1:           'The content will be unlocked automatically within 10 seconds after confirmation.',    
        confirm_screen_note2:           'Note delivering the email may take several minutes.',

        confirm_screen_cancel:          '(cancel)',
        confirm_screen_open:            'Open my inbox on {service}',
        
        // the Screen "One Step To Complete"
        
        onestep_screen_title:           'One Step To Complete',
        onestep_screen_instructiont:    'Please enter your email below to continue.',
        onestep_screen_button:          'OK, complete',
        
        // the sign-in buttons
        
        signin_long:                    'Sign in via {name}',
        signin_short:                   'via {name}',
        signin_facebook_name:           'Facebook',
        signin_twitter_name:            'Twitter',
        signin_google_name:             'Google',
        signin_linkedin_name:           'LinkedIn',
        
        // miscellaneous
        
        misc_data_processing:           'Processing data, please wait...',
        misc_or_enter_email:            'or enter your email manually to sign in', 
        
        misc_enter_your_name:           'enter your name',
        misc_enter_your_email:          'enter your email address',
        
        misc_your_agree_with:           'By clicking on the button(s), you agree with {links}',
        misc_terms_of_use:              'Terms of Use',
        misc_privacy_policy:            'Privacy Policy',
        
        misc_or_wait:                   'or wait {timer}s',
        misc_close:                     'Close',
        misc_or:                        'OR',
        
        // errors & notices
            
        errors_empty_email:             "Please enter your email address.",
        errors_inorrect_email:          "It seems you entered an incorrect email address. Please check it.",
        errors_empty_name:              "Please enter your name.",  
        errors_empty_field:             "Please fill this field.",
        errors_invalid_value:           "Invalid value. Please check the value you entered.",
        errors_invalid_date:            "Please enter a valid date.",  
        errors_invalid_month:           "Please enter a valid month number (between 01 and 12).",        
        
        errors_subscription_canceled:   "You have canceled your subscription.", 
        errors_not_signed_in:           "Sorry, but you have not signed in. Please try again.",
        res_errors_not_granted:         "Sorry, but you have not granted all the required permissions ({permissions}). Please try again.",
        
        // - default text & internal errors
        
        // common resources
        
        error:                              'error',
        noSpam:                             'Your email address is 100% safe from spam!',
        
        errors: {
            ajaxError:                      'Unexpected ajax error. Please check the console log to get more details.',
            unableToLoadSDK:                'Unable to load SDK script for "{0}" due to the error "{1}". Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) or usage of private tabs in FireFox may cause this issue. Turn them off and try again.',     
            unableToCreateControl:          'Unable to create ({0}). Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) can cause this issue. Turn them off and try again.',     
            invlidFacebookAppId:            'Invalid App ID or given URL is not allowed by the Application configuration: One or more of the given URLs is not allowed by the App\'s settings.  It must match the Website URL or Canvas URL, or the domain must be a subdomain of one of the App\'s domains.',
            emptyFBAppIdError:              'Please set your Facebook App ID.',
            emptyTwitterFollowUrlError:     'Please set an URL of your Twitter profile.',
            tweetNotFound:                  'Please make sure that you have posted the tweet. Unfortunately we have not manage to find the tweet in your account.',
            followingNotFound:              'Please make sure that you have followed us. Unfortunately we have not manage to find you in the list of followers.',
            unsupportedTwitterTweetLayout:  'The Twitter Tweet Button doesn\'t support the vertical layout. Please remove the Tweet button or select another theme.',            
            unsupportedTwitterFollowLayout: 'The Twitter Follow Button doesn\'t support the vertical layout. Please remove the Follow button or select another theme.',
            emptyYoutubeChannelId:          'Please set your Youtube Channel ID.',
            emptyGoogleClientId:            'Please set your Google Client ID.',      
            unsupportedYoutubeSubscribeLayout: 'The Youtube Subscribe Button doesn\'t support the vertical layout. Please remove the Subscribe button or select another theme.'
        },
        
        // locker type-dependent resources
        
        scopes: {
            
            // when the Connect Buttons is the primary group
            
            signinLocker: {
                defaultHeader:      "Sing In To Unlock This Content",
                defaultMessage:     "Please sign in. Just click one of the buttons below to get instant access.",
                
                btnSubscribe:       "sign in to unlock",
                
                viaSignInLong:      "{long}",
                viaSignInShort:     "{short}"
            },
            
            // when the Subscription is the primary group
            
            emailLocker: {
                defaultHeader:      "This Content Is Only For Subscribers",
                defaultMessage:     "Please subscribe to unlock this content. Just enter your email.",
                
                btnSubscribe:       "subscribe to unlock",
                
                viaSignInLong:      "{short}",
                viaSignInShort:     "{name}"
            },
            
            // when the Social Buttons is the primary group
            
            socialLocker: {
                defaultHeader:      "This content is locked",
                defaultMessage:     "Please support us, use one of the buttons below to unlock the content."
            }
        },
        
        // text resources for the group 'connect-buttons'
        
        connectButtons: {

            defaultMessage: "subscribe via your social profile by one click",

            facebook: {},
            
            google: {
                clientIdMissed: "The Google Client ID is not set. You need to generate a client ID before using the button.",
                unexpectedError: 'Unable to sign in. Unexpected error occurred: {0}'
            },
            
            twitter: {
                proxyEmpty: "The proxy URL is empty. The proxy is used to call Twitter API."
            },
            
            linkedin: {
                clientIdMissed: "The LinkedIn Client ID or Client Secret is not set. You need to set these settings before using the button."
            },
            
            defaultSeparator: "or",

            errorYouTubeChannelMissed: "Please set an ID of your Youtube channel to subscribe.",
            errorLinkedInCompanyNotFound: "The LinkedIn company '{0}' not found.",
            errorLinkedInCompanyMissed: "Please specify the LinkedIn company ID or name to follow.",
            errorTwitterUserMissed: "Please specify the Twitter user name to follow.",
            errorTwitterMessageMissed: "Please specify the message to tweet.",            
        },
        
        // text resources for the group 'subscription'
        
        subscription: {

            defaultText: 'Cannot sign in via social networks? Enter your email manually.',
            defaultButtonText: 'done, sign in to unlock',
        },
        
        // text resources for the group 'social-buttons'
        
        socialButtons: {
            
            // default labels for the buttons covers
            facebookLike:       'like us',
            facebookShare:      'share',
            twitterTweet:       'tweet',  
            twitterFollow:      'follow us',  
            googlePlus:         '+1 us', 
            googleShare:        'share',
            youtubeSubscribe:   'subscribe',
            linkedinShare:      'share'
        }
    };  
    
    $.pandalocker.lang = $.pandalocker.lang.defaults;  
    
    if ( window.__pandalockers && window.__pandalockers.lang ) {
        $.pandalocker.lang = $.extend( $.pandalocker.lang, window.__pandalockers.lang );  
        window.__pandalockers.lang = null;
    }
 
})(jQuery);;
/*!
 * Themes Presets
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {

    if (!$.pandalocker.themes) $.pandalocker.themes = {};
    
    // Theme: Great Attractor
    
    $.pandalocker.themes['great-attractor'] = {};
    
    // Theme: Friendly Giant
    
    $.pandalocker.themes['friendly-giant'] = {
        
        theme: {
            fonts: [{
                name: 'Open Sans',
                styles: ['400', '700']
            }]
        }
    };
    
    // Theme: Dark Force
    
    $.pandalocker.themes['dark-force'] = {
        
        theme: {
            fonts: [{
                name: 'Montserrat',
                styles: ['400', '700']
            }]
        }
    };
    
    // Theme: Starter

    $.pandalocker.themes['starter'] = {
        
        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: false
        }
    };
    
    // Theme: Secrets
    
    $.pandalocker.themes['secrets'] = {
        
        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: true
        }
    };
    
    // Theme: Dandyish
    
    $.pandalocker.themes['dandyish'] = {

        socialButtons: {
            unsupported: ['twitter-follow'],
            layout: 'vertical',
            counter: true,
            flip: false
        }
    };
    
    // Theme: Glass
    
    $.pandalocker.themes['glass'] = {

        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: false
        }
    };

    // Theme: Flat
    
    $.pandalocker.themes['flat'] = {

        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: true
        }
    };

})(jQuery);;
/*!
 * Variables
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge includes
*/
(function($){
    'use strict';
    
    if ( !$.pandalocker ) $.pandalocker = {};

    if ( !$.pandalocker.data ) $.pandalocker.data = {};
    if ( !$.pandalocker.entity ) $.pandalocker.entity = {};
    if ( !$.pandalocker.groups ) $.pandalocker.groups = {};
    if ( !$.pandalocker.controls ) $.pandalocker.controls = {};
    if ( !$.pandalocker.tools ) $.pandalocker.tools = {};
    if ( !$.pandalocker.storages ) $.pandalocker.storages = {};
    if ( !$.pandalocker.services ) $.pandalocker.services = {};
    if ( !$.pandalocker.extras ) $.pandalocker.extras = {};

    if ( !$.pandalocker.controls["social-buttons"] ) $.pandalocker.controls["social-buttons"] = {};
    if ( !$.pandalocker.controls["connect-buttons"] ) $.pandalocker.controls["connect-buttons"] = {};
    if ( !$.pandalocker.controls["subscription"] ) $.pandalocker.controls["subscription"] = {};

})(jQuery);;
/*!
 * Filers & Hooks API
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {
    'use strict';
    
    if ( !$.pandalocker ) $.pandalocker = {};
    $.pandalocker.filters = $.pandalocker.filters || {

        /**
         * A set of registered filters.
         */
        _items: {},

        /**
         * A set of priorities of registered filters.
         */
        _priorities: {},

        /**
         * Applies filters to a given input value.
         */
        run: function( filterName, args ) {              
            var input = args && args.length > 0 ? args[0] : null;
            if ( !this._items[filterName] ) return input;
                      
            for ( var i in this._priorities[filterName] ) {
                if ( !this._priorities[filterName].hasOwnProperty(i) ) continue;
                
                var priority = this._priorities[filterName][i];

                for ( var k = 0; k < this._items[filterName][priority].length; k++ ) {
                    var f = this._items[filterName][priority][k];  
                    input = f.apply(f, args);                    
                }
            }

            return input;
        },

        /**
         * Registers a new filter.
         */
        add: function( filterName, callback, priority ) {
            
            if ( !priority ) priority = 10;

            if ( !this._items[filterName] ) this._items[filterName] = {};
            if ( !this._items[filterName][priority] ) this._items[filterName][priority] = [];
            this._items[filterName][priority].push( callback );

            if ( !this._priorities[filterName] ) this._priorities[filterName] = [];
            if ( $.inArray( priority, this._priorities[filterName]) === -1 ) this._priorities[filterName].push( priority );

            this._priorities[filterName].sort(function(a,b){return a-b;});
        }
    };
    
    $.pandalocker.hooks = $.pandalocker.hooks || {

        /**
         * Applies filters to a given input value.
         */
        run: function( filterName, args ) {
            $.pandalocker.filters.run( filterName, args );
        },

        /**
         * Registers a new filter.
         */
        add: function( filterName, callback, priority ) {
            $.pandalocker.filters.add( filterName, callback, priority );
        }
    };

})(jQuery);;
(function(window, document, $) {
    'use strict';
    
    if ( !$.pandalocker ) $.pandalocker = {};
    $.pandalocker.deferred = $.Deferred || function() {
        var self = this;

        var events = { done: [], fail: [], always: [] };
        
        this.resolved = false;
        this.rejected = false;
        
        this.arg1 = null;
        this.arg2 = null;      
        
        this.resolve = function( arg1, arg2 ){
            if ( this.resolved || this.rejected ) return this;
            this.resolved = true;
            
            this.arg1 = arg1;
            this.arg2 = arg2;        
            
            for (var i = 0; i < events.done.length; i++ ) events.done[i]( arg1, arg2 );
            for (var i = 0; i < events.always.length; i++ ) events.always[i]( arg1, arg2 );
            
            return this;
        };
        
        this.reject = function( arg1, arg2 ) {
            if ( this.resolved || this.rejected ) return this;
            this.rejected = true;
            
            this.arg1 = arg1;
            this.arg2 = arg2;        
            
            for (var i = 0; i < events.fail.length; i++ ) events.fail[i]( arg1, arg2 );
            for (var i = 0; i < events.always.length; i++ ) events.always[i]( arg1, arg2 );
            
            return this;
        };
        
        this.done = this.success = function( callback ) {
            if ( this.resolved ) callback && callback( this.arg1, this.arg2 );
            else events.done.push( callback );

            return this; 
        };
        
        this.fail = this.error = function( callback ) { 
            if ( this.rejected ) callback && callback( this.arg1, this.arg2 );
            else events.fail.push( callback );
            
            return this; 
        };
        
        this.always = function( callback ) { 
            if (  this.resolved || this.rejected ) callback && callback( this.arg1, this.arg2 );
            else events.always.push( callback );
            
            return this; 
        };
        
        this.promise = function() { return this; };
    };

}(window, document, jQuery));;
/*!
 * Helper Tools
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {
    'use strict';

    if (!$.pandalocker.tools) $.pandalocker.tools = {};
    
    /**
     * Implements the inheritance.
     */
    $.pandalocker.tools.extend = function(o) {
        function F() {}
        F.prototype = $.extend( true, {}, o );
        return new F();
    };
    
    /**
     * A plugin exception. 
     */
    $.pandalocker.error = function( message ) {
        this.onpsl = true;
        this.message = message;
    };
    

    /**
     * Normalizes the option which should setup some html content (etc. header, message)
     */
    $.pandalocker.tools.normilizeHtmlOption = function( value ){
        if ( !value ) return value;

        if ( typeof value === "function" ) return value(this);
        if ( typeof value === "string" ) return $("<div>" + value + "</div>");
        if ( typeof value === "object" ) return value.clone();
        return value;
    };
    
    /**
     * Comapres two arrays and return differents.
     */
    $.pandalocker.tools.diffArrays = function( arr1, arr2 ) {
        return $.grep(arr1, function(el) { return $.inArray(el, arr2) == -1; });
    };
    
    /**
     * Comapres two arrays and the common elemtnts.
     */
    $.pandalocker.tools.unionArrays = function( arr1, arr2 ) {
        return $.grep(arr1, function(element) { return $.inArray(element, arr2 ) !== -1; });
    };    

    /*
    * Cookie's function.
    * Allows to set or get cookie.
    *
    * Based on the plugin jQuery Cookie Plugin
    * https://github.com/carhartl/jquery-cookie
    *
    * Copyright 2011, Klaus Hartl
    * Dual licensed under the MIT or GPL Version 2 licenses.
    * http://www.opensource.org/licenses/mit-license.php
    * http://www.opensource.org/licenses/GPL-2.0
    */
    $.pandalocker.tools.cookie = $.pandalocker.tools.cookie || function (key, value, options) {

        // Sets cookie
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Gets cookie.
        options = value || {};
        var decode = options.raw ? function (s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || '');
        }
        return null;
    };

    /*
    * jQuery MD5 Plugin 1.2.1
    * https://github.com/blueimp/jQuery-MD5
    *
    * Copyright 2010, Sebastian Tschan
    * https://blueimp.net
    *
    * Licensed under the MIT license:
    * http://creativecommons.org/licenses/MIT/
    * 
    * Based on
    * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
    * Digest Algorithm, as defined in RFC 1321.
    * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
    * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
    * Distributed under the BSD License
    * See http://pajhome.org.uk/crypt/md5 for more info.
    */
    $.pandalocker.tools.hash = $.pandalocker.tools.hash || function (str) {

        var hash = 0;
        if (!str || str.length === 0) return hash;
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + charCode;
            hash = hash & hash;
        }
        hash = hash.toString(16);
        hash = hash.replace("-", "0");

        return hash;
    };

    /**
    * Checks does a browers support 3D transitions:
    * https://gist.github.com/3794226
    */
    $.pandalocker.tools.has3d = $.pandalocker.tools.has3d || function () {

        var el = document.createElement('p'),
            has3d,
            transforms = {
                'WebkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'MSTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'Transform': 'transform'
            };
            
        el.className = 'onp-sl-always-visible';
                
        // Add it to the body to get the computed style
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = 'translate3d(1px,1px,1px)';
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);
        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    };
    

    /**
    * Checks does a brower support Blur filter.
    */
    $.pandalocker.tools.canBlur = $.pandalocker.tools.canBlur || function () {
        
        var el = document.createElement('div');
        el.style.cssText = _browserPrefixes.join('filter' + ':blur(2px); ');
        var result = !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
        if ( result ) return true;
        
        try {
          result = typeof SVGFEColorMatrixElement !== undefined &&
            SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
        } catch (e) {}
        
        return result;
    };

    /**
    * Returns true if a current user use a touch device
    * http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
    */
    $.pandalocker.isTouch = $.pandalocker.isTouch || function () {

        return !!('ontouchstart' in window) // works on most browsers 
            || !!('onmsgesturechange' in window); // works on ie10
    };

    /**
    * OnePress Widget Factory.
    * Supports:
    * - creating a jquery widget via the standart jquery way
    * - call of public methods.
    */
    $.pandalocker.widget = function (pluginName, pluginObject) {

        var factory = {

            createWidget: function (element, options) {
                var widget = $.extend(true, {}, pluginObject);

                widget.element = $(element);
                widget.options = $.extend(true, widget.options, options);

                if (widget._init) widget._init();
                if (widget._create) widget._create();

                $.data(element, 'plugin_' + pluginName, widget);
            },

            callMethod: function (widget, methodName) {
                return widget[methodName] && widget[methodName]();
            }
        };

        $.fn[pluginName] = function () {
            var args = arguments;
            var argsCount = arguments.length;

            var toReturn = this;

            this.each(function () {

                var widget = $.data(this, 'plugin_' + pluginName);

                // a widget is not created yet
                if (!widget && argsCount <= 1) {
                    factory.createWidget(this, argsCount ? args[0] : false);

                    // a widget is created, the public method with no args is being called
                } else if (argsCount == 1) {
                    toReturn = factory.callMethod(widget, args[0]);
                }
            });
            
            return toReturn;
        };
    };
    
    $.pandalocker.detectBrowser = $.pandalocker.detectBrowser || function(){
        
        var uaMatch = jQuery.uaMatch || function( ua ) {
            ua = ua.toLowerCase();

            var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                    /(msie) ([\w.]+)/.exec( ua ) ||
                    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                    [];

            return {
                    browser: match[ 1 ] || "",
                    version: match[ 2 ] || "0"
            };
        };

	var matched = uaMatch( navigator.userAgent );
	$.pandalocker.browser = {};
        
 	if ( matched.browser ) {
            $.pandalocker.browser[ matched.browser ] = true;
            $.pandalocker.browser.version = matched.version;
	}
        
        function getInternetExplorerVersion()
        {
            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer')
            {
                var ua = navigator.userAgent;
                var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
            }
            else if (navigator.appName == 'Netscape')
            {
                var ua = navigator.userAgent;
                var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
            }
            return rv;
        }
        
        var ieVersion = getInternetExplorerVersion();
        if ( ieVersion > 0 ) {
            $.pandalocker.browser.msie = true;
            $.pandalocker.browser.version = ieVersion;
        }

	// Chrome is Webkit, but Webkit is also Safari.
	if ( $.pandalocker.browser.chrome ) {
            $.pandalocker.browser.webkit = true;
	} else if ( $.pandalocker.browser.webkit ) {
            $.pandalocker.browser.safari = true;
	}
    };
    
    $.pandalocker.detectBrowser();
    
    /**
     * Converts string of the view 'foo-bar' to 'fooBar'.
     * http://stackoverflow.com/questions/10425287/convert-string-to-camelcase-with-regular-expression
     */
    $.pandalocker.tools.camelCase = function(input) { 
        return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    };
    
    $.pandalocker.tools.capitaliseFirstLetter = function(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };

     /**
     * Returns true if a current user uses a mobile device, else false.
     */
    $.pandalocker.tools.isMobile = function() { 
        if ((/webOS|iPhone|iPod|BlackBerry/i).test(navigator.userAgent)) return true;
        if ((/Android/i).test(navigator.userAgent) && (/Mobile/i).test(navigator.userAgent)) return true;
        return false;
    };   
    
        
    /**
    * Returns true if a current user uses a mobile device or tablet device, else false.
    */
    $.pandalocker.tools.isTabletOrMobile = function() { 
        if ((/webOS|iPhone|iPad|Android|iPod|BlackBerry/i).test(navigator.userAgent)) return true;
        return false;
    };
    
    /**
    * Updates the query string parameter in the given url.
    * http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
    */
    $.pandalocker.tools.updateQueryStringParameter = function(uri, key, value) { 
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        
        if (uri.match(re)) { return uri.replace(re, '$1' + key + "=" + value + '$2'); }
        else { return uri + separator + key + "=" + value; }
    };
    
    $.pandalocker.tools.isValidEmailAddress = function (emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    
    $.pandalocker.tools.isValidUrl = function (emailAddress) {
        var pattern = new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
        return pattern.test(emailAddress);
    };
    
    // Find Left Boundry of current Window
    $.pandalocker.tools.findLeftWindowBoundry = function()
    {
        // In Internet Explorer window.screenLeft is the window's left boundry
        if (window.screenLeft)
            return window.screenLeft;

        // In Firefox window.screenX is the window's left boundry
        if (window.screenX)
            return window.screenX;

        return 0;
    };
    
    // Find Left Boundry of current Window
    $.pandalocker.tools.findTopWindowBoundry = function()
    {
        // In Internet Explorer window.screenLeft is the window's left boundry
        if (window.screenTop)
            return window.screenTop;

        // In Firefox window.screenY is the window's left boundry
        if (window.screenY)
            return window.screenY;

        return 0;
    };
    
    // Finds JSON object inside text
    $.pandalocker.tools.extractJSON = function(str) {
        var firstOpen, firstClose, candidate;
        firstOpen = str.indexOf('{', firstOpen + 1);
        do {
            firstClose = str.lastIndexOf('}');
            if(firstClose <= firstOpen) {
                return null;
            }
            do {
                candidate = str.substring(firstOpen, firstClose + 1);
                try {
                    var res = $.parseJSON(candidate);
                    if ( res ) return res;
                }
                catch(e) {}
                firstClose = str.substr(0, firstClose).lastIndexOf('}');
            } while(firstClose > firstOpen);
            firstOpen = str.indexOf('{', firstOpen + 1);
        } while(firstOpen != -1);
        
        return false;
    };
    
    $.pandalocker.tools.saveValue = function( name, value, expires ) {
        
        if ( localStorage && localStorage.setItem ) {
            try {
                localStorage.setItem( name, value );             
            } catch(e) {
                $.pandalocker.tools.cookie( name, value, { expires: expires, path: "/" });
            }
        } else {
            $.pandalocker.tools.cookie( name, value, { expires: expires, path: "/" });
        }
    };
    
    $.pandalocker.tools.getValue = function( name, defaultValue ) {
        
        var result = localStorage && localStorage.getItem && localStorage.getItem( name );
        if ( !result ) result = $.pandalocker.tools.cookie( name );
        if ( !result ) return defaultValue;
        return result;
    };
    
    $.pandalocker.tools.guid = function() {

        var s4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        };
        
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };   
    
})(jQuery);;
/*!
 * SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {
    'use strict';

    $.pandalocker.sdk = $.pandalocker.sdk || {

        /**
         * Contains dictionary sdk_name => is_sdk_ready (bool)
         * 
         * @since 1.0.0
         * @return object
         */
         _ready: {},

        /**
         * Contains dictionaty sdk_name => is_sdk_connected (bool)
         * 
         * @since 1.0.0
         * @return object
         */
         _connected: {},
         
        /**
         * Contains dictionaty sdk_name => is_sdk_fired_error (bool)
         * 
         * @since 1.0.0
         * @return object
         */
         _error: {},

        /**
         * Get a SDK object by its name.
         * 
         * @since 1.0.0
         * @return object
         */
         getSDK: function (name) {
             name = $.pandalocker.tools.camelCase(name);
             if ( $.pandalocker.sdk[name] ) return $.pandalocker.sdk[name];
             return null;
         },

        /**
         * Checks whether a specified SDK is connected (sdk script is included into a page).
         * 
         * @since 1.0.0
         * @return object
         */
         isConnected: function (sdk) {
             if ( $("#" + sdk.scriptId).length > 0 ) return true;

             var found = false;
             $("script").each(function(){
                 var src = $(this).attr('src');
                 if ( !src ) return true;

                 found = src.indexOf(sdk.url) !== -1;
                 if ( found ) { 
                     $(this).attr('id', sdk.scriptId);
                     return false;
                 }
             });
             return found;
         },

        /**
         * Gets loading SDK script on a page.
         * 
         * @since 1.0.0
         * @return object
         */
         getLoadingScript: function (sdk) {

             var byId = $("#" + sdk.scriptId);
             var byScr = $("script[src='*" + sdk.url + "']");
             return (byId.length > 0) ? byId : byScr;
         },

        /**
         * Checks whether a specified SQK is loaded and ready to use.
         * 
         * @since 1.0.0
         * @return object
         */
         isLoaded: function (sdk) {
            return this.isConnected(sdk) && sdk.isLoaded && sdk.isLoaded();
         },

         /**
         * Connects SKD if it's needed then calls callback.
         */
         connect: function (name, options, timeout) {
            var self = this;
            var sdk = this.getSDK(name);
            
            var result = new $.pandalocker.deferred();
            
            if (!sdk) {
               console && console.log('Invalide SDK name: ' + name);
               result.reject('invalide-sdk');
               return result.promise();
            }
            
            sdk.options = options;
            
            // an error if the timeout reached
            setTimeout(function(){
                var loaded = sdk.isLoaded();
                
                if ( !loaded ) {
                    self._connected[name] = false;             
                    result.reject('timeout');
                } else {
                    self.setup && self.setup();
                }
            }, timeout);

            // if aready loaded and ready
            if ( this._ready[name] ) {
                
                result.resolve();
                return result.promise();
            
            // if not, waits until it's ready
            } else {
                $(document).bind(name + "-init", function () { result.resolve(); });
                $(document).bind(name + "-error", function ( e, error ) { 
                    self._error[name] = true;          
                    result.reject(error);
                });      
            }
            
            // if already connected, waits result from the previos caller
            if (this._connected[name] && !self._error[name]) return result.promise();

            // sets the default method if it's not specified
            if (!sdk.createEvents) {

                sdk.createEvents = function () {
                    var isLoaded = sdk.isLoaded();

                    var load = function () {
                        $(document).trigger(sdk.name + '-init');
                    };

                    if (isLoaded) { load(); return; }

                    $(document).bind(sdk.name + "-script-loaded", function () {
                        load();
                    });
                };
            }

            if (sdk.prepare) sdk.prepare();

            var loaded = sdk.isLoaded();
            var connected = this.isConnected(sdk);
            
            // subscribes to events
            $(document).bind(name + "-init", function () { self._ready[name] = true; });
            if ( !this._connected[name] ) sdk.createEvents();
            
            // connects sdk
            if (!connected || self._error[name]) {
                
                // removes the previos script
                if ( self._error[name] ) {
                    var loadingScript = this.getLoadingScript(sdk);
                    if ( loadingScript ) loadingScript.remove();
                }
                
                var scriptConnection = function () {

                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.id = sdk.scriptId;
                    script.src = sdk.url;

                    var scriptContent = ( sdk.getScriptBody ) ? sdk.getScriptBody() : null;
                    if ( scriptContent ) script.innerHtml = scriptContent;

                    var bodyElement = document.getElementsByTagName('body')[0];
                    bodyElement.appendChild(script);
                };

                scriptConnection();
            }

            // subsribes to onload event
            if (!loaded) {

               var loadingScript = this.getLoadingScript(sdk)[0];

                loadingScript.onerror = function(data) {
                    console && console.log('Failed to load SDK script:');
                    console && console.log(data);              
                    
                    $(document).trigger(sdk.name + '-error', ['blocked']);
                };

                loadingScript.onreadystatechange = loadingScript.onload = function () {

                    var state = loadingScript.readyState;                  
                    if ((!state || /loaded|complete/.test(state))) {
                        $(document).trigger(sdk.name + '-script-loaded');
                        $(document).unbind(sdk.name + '-script-loaded');
                    }
                };
            }
            
            // an error if the timeout reached
            setTimeout(function(){
                var loaded = sdk.isLoaded();
                if ( !loaded ) $(document).trigger(sdk.name + '-error', ['timeout']);
            }, timeout);

            this._connected[name] = true;
            return result.promise();
        }
    };

})(jQuery);;
/*!
 * Functions to work with URLs
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/

/*!
 * URL.js
 * Copyright 2011 Eric Ferraiuolo
 * https://github.com/ericf/urljs
 */

/**
 * URL constructor and utility.
 * Provides support for validating whether something is a URL,
 * formats and cleans up URL-like inputs into something nice and pretty,
 * ability to resolve one URL against another and returned the formatted result,
 * and is a convenient API for working with URL Objects and the various parts of URLs.
 *
 * @constructor URL
 * @param       {String | URL}  url - the URL String to parse or URL instance to copy
 * @return      {URL}           url - instance of a URL all nice and parsed
 */

(function($){
    
    var URL = function () {

        var u = this;

        if ( ! (u && u.hasOwnProperty && (u instanceof URL))) {
            u = new URL();
        }

        return u._init.apply(u, arguments);
    };

    (function(){

    var ABSOLUTE            = 'absolute',
        RELATIVE            = 'relative',

        HTTP                = 'http',
        HTTPS               = 'https',
        COLON               = ':',
        SLASH_SLASH         = '//',
        AT                  = '@',
        DOT                 = '.',
        SLASH               = '/',
        DOT_DOT             = '..',
        DOT_DOT_SLASH       = '../',
        QUESTION            = '?',
        EQUALS              = '=',
        AMP                 = '&',
        HASH                = '#',
        EMPTY_STRING        = '',

        TYPE                = 'type',
        SCHEME              = 'scheme',
        USER_INFO           = 'userInfo',
        HOST                = 'host',
        PORT                = 'port',
        PATH                = 'path',
        QUERY               = 'query',
        FRAGMENT            = 'fragment',

        URL_TYPE_REGEX      = /^(?:(https?:\/\/|\/\/)|(\/|\?|#)|[^;:@=\.\s])/i,
        URL_ABSOLUTE_REGEX  = /^(?:(https?):\/\/|\/\/)(?:([^:@\s]+:?[^:@\s]+?)@)?((?:[^;:@=\/\?\.\s]+\.)+[A-Za-z0-9\-]{2,})(?::(\d+))?(?=\/|\?|#|$)([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,
        URL_RELATIVE_REGEX  = /^([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,

        OBJECT              = 'object',
        STRING              = 'string',
        TRIM_REGEX          = /^\s+|\s+$/g,

        trim, isObject, isString;


    // *** Utilities *** //

    trim = String.prototype.trim ? function (s) {
        return ( s && s.trim ? s.trim() : s );
    } : function (s) {
        try {
            return s.replace(TRIM_REGEX, EMPTY_STRING);
        } catch (e) { return s; }
    };

    isObject = function (o) {
        return ( o && typeof o === OBJECT );
    };

    isString = function (o) {
        return typeof o === STRING;
    };


    // *** Static *** //

    /**
     *
     */
    URL.ABSOLUTE = ABSOLUTE;

    /**
     *
     */
    URL.RELATIVE = RELATIVE;

    /**
     *
     */
    URL.normalize = function (url) {
        return new URL(url).toString();
    };

    /**
     * Returns a resolved URL String using the baseUrl to resolve the url against.
     * This attempts to resolve URLs like a browser would on a web page.
     *
     * @static
     * @method  resolve
     * @param   {String | URL}  baseUrl     - the URL String, or URL instance as the resolving base
     * @param   {String | URL}  url         - the URL String, or URL instance to resolve
     * @return  {String}        resolvedUrl - a resolved URL String
     */
    URL.resolve = function (baseUrl, url) {
        return new URL(baseUrl).resolve(url).toString();
    };


    // *** Prototype *** //

    URL.prototype = {

        // *** Lifecycle Methods *** //

        /**
         * Initializes a new URL instance, or re-initializes an existing one.
         * The URL constructor delegates to this method to do the initializing,
         * and the mutator instance methods call this to re-initialize when something changes.
         *
         * @protected
         * @method  _init
         * @param   {String | URL}  url - the URL String, or URL instance
         * @return  {URL}           url - instance of a URL all nice and parsed/re-parsed
         */
        _init : function (url) {

            this.constructor = URL;

            url = isString(url) ? url : url instanceof URL ? url.toString() : null;

            this._original  = url;
            this._url       = {};
            this._isValid   = this._parse(url);

            return this;
        },

        // *** Object Methods *** //

        /**
         * Returns the formatted URL String.
         * Overridden Object toString method to do something useful.
         *
         * @public
         * @method  toString
         * @return  {String}    url - formatted URL string
         */
        toString : function () {

            var url         = this._url,
                urlParts    = [],
                type        = url[TYPE],
                scheme      = url[SCHEME],
                path        = url[PATH],
                query       = url[QUERY],
                fragment    = url[FRAGMENT];

            if (type === ABSOLUTE) {
                urlParts.push(
                    scheme ? (scheme + COLON + SLASH_SLASH) : SLASH_SLASH,
                    this.authority()
                );
                if (path && path.indexOf(SLASH) !== 0) {    // this should maybe go in _set
                    path = SLASH + path;
                }
            }

            urlParts.push(
                path,
                query ? (QUESTION + this.queryString()) : EMPTY_STRING,
                fragment ? (HASH + fragment) : EMPTY_STRING
            );

            return urlParts.join(EMPTY_STRING);
        },

        // *** Accessor/Mutator Methods *** //

        original : function () {
            return this._original;
        },

        /**
         * Whether parsing from initialization or re-initialization produced something valid.
         *
         * @public
         * @method  isValid
         * @return  {Boolean}   valid   - whether the URL is valid
         */
        isValid : function () {
            return this._isValid;
        },

        /**
         * URL is absolute if it has a scheme or is scheme-relative (//).
         *
         * @public
         * @method  isAbsolute
         * @return  {Boolean}   absolute    - whether the URL is absolute
         */
        isAbsolute : function () {
            return this._url[TYPE] === ABSOLUTE;
        },

        /**
         * URL is relative if it host or path relative, i.e. doesn't contain a host.
         *
         * @public
         * @method  isRelative
         * @return  {Boolean}   relative    - whether the URL is relative
         */
        isRelative : function () {
            return this._url[TYPE] === RELATIVE;
        },

        /**
         * URL is host relative if it's relative and the path begins with '/'.
         *
         * @public
         * @method  isHostRelative
         * @return  {Boolean}   hostRelative    - whether the URL is host-relative
         */
         isHostRelative : function () {
            var path = this._url[PATH];
            return ( this.isRelative() && path && path.indexOf(SLASH) === 0 );
         },

        /**
         * Returns the type of the URL, either: URL.ABSOLUTE or URL.RELATIVE.
         *
         * @public
         * @method  type
         * @return  {String}    type    - the type of the URL: URL.ABSOLUTE or URL.RELATIVE
         */
        type : function () {
            return this._url[TYPE];
        },

        /**
         * Returns or sets the scheme of the URL.
         * If URL is determined to be absolute (i.e. contains a host) and no scheme is provided,
         * the scheme will default to http.
         *
         * @public
         * @method  scheme
         * @param   {String}        scheme  - Optional scheme to set on the URL
         * @return  {String | URL}  the URL scheme or the URL instance
         */
        scheme : function (scheme) {
            return ( arguments.length ? this._set(SCHEME, scheme) : this._url[SCHEME] );
        },

        /**
         * Returns or set the user info of the URL.
         * The user info can optionally contain a password and is only valid for absolute URLs.
         *
         * @public
         * @method  userInfo
         * @param   {String}        userInfo    - Optional userInfo to set on the URL
         * @return  {String | URL}  the URL userInfo or the URL instance
         */
        userInfo : function (userInfo) {
            return ( arguments.length ? this._set(USER_INFO, userInfo) : this._url[USER_INFO] );
        },

        /**
         * Returns or sets the host of the URL.
         * The host name, if set, must be something valid otherwise the URL will become invalid.
         *
         * @public
         * @method  host
         * @param   {String}        host    - Optional host to set on the URL
         * @return  {String | URL}  the URL host or the URL instance
         */
        host : function (host) {
            return ( arguments.length ? this._set(HOST, host) : this._url[HOST] );
        },

        /**
         * Returns the URL's domain, where the domain is the TLD and SLD of the host.
         * e.g. foo.example.com -> example.com
         *
         * @public
         * @method  domain
         * @return  {String}    domain  - the URL domain
         */
        domain : function () {
            var host = this._url[HOST];
            return ( host ? host.split(DOT).slice(-2).join(DOT) : undefined );
        },

        /**
         * Returns or sets the port of the URL.
         *
         * @public
         * @method  port
         * @param   {Number}        port    - Optional port to set on the URL
         * @return  {Number | URL}  the URL port or the URL instance
         */
        port : function (port) {
            return ( arguments.length ? this._set(PORT, port) : this._url[PORT] );
        },

        /**
         * Returns the URL's authority which is the userInfo, host, and port combined.
         * This only makes sense for absolute URLs
         *
         * @public
         * @method  authority
         * @return  {String}    authority   - the URL's authority (userInfo, host, and port)
         */
        authority : function () {

            var url         = this._url,
                userInfo    = url[USER_INFO],
                host        = url[HOST],
                port        = url[PORT];

            return [

                userInfo ? (userInfo + AT) : EMPTY_STRING,
                host,
                port ? (COLON + port) : EMPTY_STRING,

            ].join(EMPTY_STRING);
        },

        /**
         * Returns or sets the path of the URL.
         *
         * @public
         * @method  path
         * @param   {String}        path    - Optional path to set on the URL
         * @return  {String | URL}  the URL path or the URL instance
         */
        path : function (path) {
            return ( arguments.length ? this._set(PATH, path) : this._url[PATH] );
        },

        /**
         * Returns or sets the query of the URL.
         * This takes or returns the parsed query as an Array of Arrays.
         *
         * @public
         * @method  query
         * @param   {Array}         query   - Optional query to set on the URL
         * @return  {Array | URL}   the URL query or the URL instance
         */
        query : function (query) {
            return ( arguments.length ? this._set(QUERY, query) : this._url[QUERY] );
        },

        /**
         * Returns or sets the query of the URL.
         * This takes or returns the query as a String; doesn't include the '?'
         *
         * @public
         * @method  queryString
         * @param   {String}        queryString - Optional queryString to set on the URL
         * @return  {String | URL}  the URL queryString or the URL instance
         */
        queryString : function (queryString) {

            // parse and set queryString
            if (arguments.length) {
                return this._set(QUERY, this._parseQuery(queryString));
            }

            queryString = EMPTY_STRING;

            var query = this._url[QUERY],
                i, len;

            if (query) {
                for (i = 0, len = query.length; i < len; i++) {
                    queryString += query[i].join(EQUALS);
                    if (i < len - 1) {
                        queryString += AMP;
                    }
                }
            }

            return queryString;
        },

        /**
         * Returns or sets the fragment on the URL.
         * The fragment does not contain the '#'.
         *
         * @public
         * @method  fragment
         * @param   {String}        fragment    - Optional fragment to set on the URL
         * @return  {String | URL}  the URL fragment or the URL instance
         */
        fragment : function (fragment) {
            return ( arguments.length ? this._set(FRAGMENT, fragment) : this._url[FRAGMENT] );
        },

        /**
         * Returns a new, resolved URL instance using this as the baseUrl.
         * The URL passed in will be resolved against the baseUrl.
         *
         * @public
         * @method  resolve
         * @param   {String | URL}  url - the URL String, or URL instance to resolve
         * @return  {URL}           url - a resolved URL instance
         */
        resolve : function (url) {

            url = (url instanceof URL) ? url : new URL(url);

            var resolved, path;

            if ( ! (this.isValid() && url.isValid())) { return this; } // not sure what to do???

            // the easy way
            if (url.isAbsolute()) {
                return ( this.isAbsolute() ? url.scheme() ? url : new URL(url).scheme(this.scheme()) : url );
            }

            // the hard way
            resolved = new URL(this.isAbsolute() ? this : null);

            if (url.path()) {

                if (url.isHostRelative() || ! this.path()) {
                    path = url.path();
                } else {
                    path = this.path().substring(0, this.path().lastIndexOf(SLASH) + 1) + url.path();
                }

                resolved.path(this._normalizePath(path)).query(url.query()).fragment(url.fragment());

            } else if (url.query()) {
                resolved.query(url.query()).fragment(url.fragment());
            } else if (url.fragment()) {
                resolved.fragment(url.fragment());
            }

            return resolved;
        },

        /**
         * Returns a new, reduced relative URL instance using this as the baseUrl.
         * The URL passed in will be compared to the baseUrl with the goal of
         * returning a reduced-down URL to one that’s relative to the base (this).
         * This method is basically the opposite of resolve.
         *
         * @public
         * @method  reduce
         * @param   {String | URL}  url - the URL String, or URL instance to resolve
         * @return  {URL}           url - the reduced URL instance
         */
        reduce : function (url) {

            url = (url instanceof URL) ? url : new URL(url);

            var reduced = this.resolve(url);

            if (this.isAbsolute() && reduced.isAbsolute()) {
                if (reduced.scheme() === this.scheme() && reduced.authority() === this.authority()) {
                    reduced.scheme(null).userInfo(null).host(null).port(null);
                }
            }

            return reduced;
        },

        // *** Private Methods *** //

        /**
         * Parses a URL into usable parts.
         * Reasonable defaults are applied to parts of the URL which weren't present in the input,
         * e.g. 'http://example.com' -> { type: 'absolute', scheme: 'http', host: 'example.com', path: '/' }
         * If nothing or a falsy value is returned, the URL wasn't something valid.
         *
         * @private
         * @method  _parse
         * @param   {String}    url     - the URL string to parse
         * @param   {String}    type    - Optional type to seed parsing: URL.ABSOLUTE or URL.RELATIVE
         * @return  {Boolean}   parsed  - whether or not the URL string was parsed
         */
        _parse : function (url, type) {

            // make sure we have a good string
            url = trim(url);
            if ( ! (isString(url) && url.length > 0)) {
                return false;
            }

            var urlParts, parsed;

            // figure out type, absolute or relative, or quit
            if ( ! type) {
                type = url.match(URL_TYPE_REGEX);
                type = type ? type[1] ? ABSOLUTE : type[2] ? RELATIVE : null : null;
            }

            switch (type) {

                case ABSOLUTE:
                    urlParts = url.match(URL_ABSOLUTE_REGEX);
                    if (urlParts) {
                        parsed              = {};
                        parsed[TYPE]        = ABSOLUTE;
                        parsed[SCHEME]      = urlParts[1] ? urlParts[1].toLowerCase() : undefined;
                        parsed[USER_INFO]   = urlParts[2];
                        parsed[HOST]        = urlParts[3].toLowerCase();
                        parsed[PORT]        = urlParts[4] ? parseInt(urlParts[4], 10) : undefined;
                        parsed[PATH]        = urlParts[5] || SLASH;
                        parsed[QUERY]       = this._parseQuery(urlParts[6]);
                        parsed[FRAGMENT]    = urlParts[7];
                    }
                    break;

                case RELATIVE:
                    urlParts = url.match(URL_RELATIVE_REGEX);
                    if (urlParts) {
                        parsed              = {};
                        parsed[TYPE]        = RELATIVE;
                        parsed[PATH]        = urlParts[1];
                        parsed[QUERY]       = this._parseQuery(urlParts[2]);
                        parsed[FRAGMENT]    = urlParts[3];
                    }
                    break;

                // try to parse as absolute, if that fails then as relative
                default:
                    return ( this._parse(url, ABSOLUTE) || this._parse(url, RELATIVE) );
                    break;

            }

            if (parsed) {
                this._url = parsed;
                return true;
            } else {
                return false;
            }
        },

        /**
         * Helper to parse a URL query string into an array of arrays.
         * Order of the query paramerters is maintained, an example structure would be:
         * queryString: 'foo=bar&baz' -> [['foo', 'bar'], ['baz']]
         *
         * @private
         * @method  _parseQuery
         * @param   {String}    queryString - the query string to parse, should not include '?'
         * @return  {Array}     parsedQuery - array of arrays representing the query parameters and values
         */
        _parseQuery : function (queryString) {

            if ( ! isString(queryString)) { return; }

            queryString = trim(queryString);

            var query       = [],
                queryParts  = queryString.split(AMP),
                queryPart, i, len;

            for (i = 0, len = queryParts.length; i < len; i++) {
                if (queryParts[i]) {
                    queryPart = queryParts[i].split(EQUALS);
                    query.push(queryPart[1] ? queryPart : [queryPart[0]]);
                }
            }

            return query;
        },

        /**
         * Helper for mutators to set a new URL-part value.
         * After the URL-part is updated, the URL will be toString'd and re-parsed.
         * This is a brute, but will make sure the URL stays in sync and is re-validated.
         *
         * @private
         * @method  _set
         * @param   {String}    urlPart - the _url Object member String name
         * @param   {Object}    val     - the new value for the URL-part, mixed type
         * @return  {URL}       this    - returns this URL instance, chainable
         */
        _set : function (urlPart, val) {

            this._url[urlPart] = val;

            if (val                     && (
                urlPart === SCHEME      ||
                urlPart === USER_INFO   ||
                urlPart === HOST        ||
                urlPart === PORT        )){
                this._url[TYPE] = ABSOLUTE; // temp, set this to help clue parsing
            }
            if ( ! val && urlPart === HOST) {
                this._url[TYPE] = RELATIVE; // temp, no host means relative
            }

            this._isValid = this._parse(this.toString());

            return this;
        },

        /**
         * Returns a normalized path String, by removing ../'s.
         *
         * @private
         * @method  _normalizePath
         * @param   {String}    path            — the path String to normalize
         * @return  {String}    normalizedPath  — the normalized path String
         */
        _normalizePath : function (path) {

            var pathParts, pathPart, pathStack, normalizedPath, i, len;

            if (path.indexOf(DOT_DOT_SLASH) > -1) {

                pathParts = path.split(SLASH);
                pathStack = [];

                for ( i = 0, len = pathParts.length; i < len; i++ ) {
                    pathPart = pathParts[i];
                    if (pathPart === DOT_DOT) {
                        pathStack.pop();
                    } else if (pathPart) {
                        pathStack.push(pathPart);
                    }
                }

                normalizedPath = pathStack.join(SLASH);

                // prepend slash if needed
                if (path[0] === SLASH) {
                    normalizedPath = SLASH + normalizedPath;
                }

                // append slash if needed
                if (path[path.length - 1] === SLASH && normalizedPath.length > 1) {
                    normalizedPath += SLASH;
                }

            } else {

                normalizedPath = path;

            }

            return normalizedPath;
        }

    };

    }());
    
    if (!$.pandalocker) $.pandalocker = {};
    if (!$.pandalocker.tools) $.pandalocker.tools = {};
    $.pandalocker.tools.URL = URL;

})(jQuery);;
/*!
 * Blurring
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/

/*!
 *
 * Version: 0.0.5
 * Author: Gianluca Guarini
 * Website: http://www.gianlucaguarini.com/
*/

/**
 * Copyright (c) Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/


(function(window, document, $) {
  'use strict';

  // Plugin private cache
  // static vars
  var cache = {
    filterId: 0
  };
  
  var _browserPrefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  
  var cssfilters = function() {
          var el = document.createElement('div');
          el.style.cssText = _browserPrefixes.join('filter' + ':blur(2px); ');
          return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
        };

        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg-filters.js
  var svgfilters = function() {
          var result = false;
          try {
            result = typeof SVGFEColorMatrixElement !== undefined &&
              SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
          } catch (e) {}
          return result;
        };

  var Vague = function(elm, customOptions) {
    // Default options
    var defaultOptions = {
      intensity: 5,
      forceSVGUrl: false,
      animationOptions: {
        duration: 1000,
        easing: 'linear'
      }
    },
      // extend the default options with the ones passed to the plugin
      options = $.extend(defaultOptions, customOptions),

      

      /*
       *
       * Helpers
       *
       */

      
      _cssPrefixString = {},
      _cssPrefix = function(property) {
        if (_cssPrefixString[property] || _cssPrefixString[property] === '') return _cssPrefixString[property] + property;
        var e = document.createElement('div');
        var prefixes = ['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml']; // Various supports...
        for (var i = 0; i < prefixes.length; i++ ) {
          if (typeof e.style[prefixes[i] + property] !== 'undefined') {
            _cssPrefixString[property] = prefixes[i];
            return prefixes[i] + property;
          }
        }
        return property.toLowerCase();
      },
      // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-filters.js
      _support = {
        cssfilters: cssfilters(),

        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg-filters.js
        svgfilters: svgfilters()
      },

      /*
       *
       * PRIVATE VARS
       *
       */

      _blurred = false,
      // cache the right prefixed css filter property
      _cssFilterProp = _cssPrefix('Filter'),
      _svgGaussianFilter,
      _filterId,
      // to cache the jquery animation instance
      _animation,

      /*
       *
       * PRIVATE METHODS
       *
       */

      /**
       * Create any svg element
       * @param  { String } tagName: svg tag name
       * @return { SVG Node }
       */

      _createSvgElement = function(tagName) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
      },

      /**
       *
       * Inject the svg tag into the DOM
       * we will use it only if the css filters are not supported
       *
       */

      _appendSVGFilter = function() {
        // create the svg and the filter tags
        var svg = _createSvgElement('svg'),
          filter = _createSvgElement('filter');

        // cache the feGaussianBlur tag and make it available
        // outside of this function to easily update the blur intensity
        _svgGaussianFilter = _createSvgElement('feGaussianBlur');

        // hide the svg tag
        // we don't want to see it into the DOM!
        svg.setAttribute('style', 'position:absolute');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        // set the id that will be used as link between the DOM element to blur and the svg just created
        filter.setAttribute('id', 'blur-effect-id-' + cache.filterId);

        filter.appendChild(_svgGaussianFilter);
        svg.appendChild(filter);
        // append the svg into the body
        $('body').append(svg);

      };

    /*
     *
     * PUBLIC VARS
     *
     */

    // cache the DOM element to blur
    this.$elm = elm instanceof $ ? elm : $(elm);


    /*
     *
     * PUBLIC METHODS
     *
     */

    /**
     *
     * Initialize the plugin creating a new svg if necessary
     *
     */

    this.init = function() {
      // checking the css filter feature
      if (_support.svgfilters) {
        _appendSVGFilter();
      }
      // cache the filter id
      _filterId = cache.filterId;
      // increment the filter id static var
      cache.filterId++;

      return this;

    };

    /**
     *
     * Blur the DOM element selected
     *
     */

    this.blur = function() {

      var cssFilterValue,
        // variables needed to force the svg filter URL
        loc = window.location,
        svgUrl = options.forceSVGUrl ? loc.protocol + '//' + loc.host + loc.pathname : '';

      // use the css filters if supported
      if (_support.cssfilters) {
        cssFilterValue = 'blur(' + options.intensity + 'px)';
        // .. or use the svg filters
      } else if (_support.svgfilters) {
        // update the svg stdDeviation tag to set up the blur intensity
        _svgGaussianFilter.setAttribute('stdDeviation', options.intensity);
        cssFilterValue = 'url(' + svgUrl + '#blur-effect-id-' + _filterId + ')';
      } else {
        // .. use the IE css filters
        cssFilterValue = 'progid:DXImageTransform.Microsoft.Blur(pixelradius=' + options.intensity + ')';
      }

      // update the DOM element css
      this.$elm[0].style[_cssFilterProp] = cssFilterValue;
      // set the _blurred internal var to true to cache the element current status
      _blurred = true;

      return this;
    };


    /**
     * Animate the blur intensity
     * @param  { Int } newIntensity: new blur intensity value
     * @param  { Object } customAnimationOptions: default jQuery animate options
     */

    this.animate = function(newIntensity, customAnimationOptions) {
      // control the new blur intensity checking if it's a valid value
      if (typeof newIntensity !== 'number') {
        throw (typeof newIntensity + ' is not a valid number to animate the blur');
      } else if (newIntensity < 0) {
        throw ('I can animate only positive numbers');
      }
      // create a new jQuery deferred instance
      var dfr = new $.Deferred();

      // kill the previous animation
      if (_animation) {
        _animation.stop(true, true);
      }

      // trigger the animation using the jQuery Animation class
      _animation = new $.Animation(options, {
        intensity: newIntensity
      }, $.extend(options.animationOptions, customAnimationOptions))
        .progress($.proxy(this.blur, this))
        .done(dfr.resolve);

      // return the animation deferred promise
      return dfr.promise();
    };

    /**
     *
     * Unblur the DOM element
     *
     */
    this.unblur = function() {
      // set the DOM filter property to none
      this.$elm.css(_cssFilterProp, 'none');
      this.$elm[0].style[_cssFilterProp] = 'none';
      _blurred = false;
      return this;
    };

    /**
     *
     * Trigger alternatively the @blur and @unblur methods
     *
     */

    this.toggleblur = function() {
      if (_blurred) {
        this.unblur();
      } else {
        this.blur();
      }
      return this;
    };
    /**
     * Destroy the Vague.js instance removing also the svg filter injected into the DOM
     */
    this.destroy = function() {
      // do we need to remove the svg filter?
      if (_support.svgfilters) {
        $('filter#blur-effect-id-' + _filterId).parent().remove();
      }

      this.unblur();

      // clear all the property stored into this Vague.js instance
      for (var prop in this) {
        delete this[prop];
      }

      return this;
    };
    // init the plugin
    return this.init();
  };

  // export the plugin as a jQuery function
  $.fn.Vague = function(options) {
    return new Vague(this, options);
  };
  
    $.pandalocker.tools.supportBlurring = function(){
        if ( $.pandalocker.browser.msie && $.pandalocker.browser.version > 9 && $.pandalocker.browser.msie < 12 ) return false;
        if ( !cssfilters() && !svgfilters() ) return false;
        return true;
    };

}(window, document, jQuery));;
/*!
 * OnePress Default State Storage
 * Copyright 2014, OnePress, http://byonepress.com
*/

(function ($) {
    'use strict';

    /**
    * Returns a state provide for the Strict Mode.
    */
    $.pandalocker.storages.defaultStateStorage = function( locker ){
        
        var options = locker.options;

        this.demo = options.demo;
        this.useCookies = options.locker.useCookies;
        this.expires = options.locker.expires;

        /**
        * Does the provider contain an unlocked state?
        */
        this.isUnlocked = function ( identity ) {
            if (this.demo) return false;
            return this._getValue( identity ) ? true : false;
        };

        /**
        * Does the provider contain a locked state?
        */
        this.isLocked = function ( identity ) {
            return !this.isUnlocked( identity );
        };

        /**
        * Gets a state and calls the callback with the one.
        */
        this.requestState = function ( identity, callback ) {
            if (this.demo) return callback("locked");
            callback( this.isUnlocked( identity ) ? "unlocked" : "locked" );
        };

        /**
        * Sets state of a locker to provider.
        */
        this.setState = function ( identity, value) {
            if (this.demo) return true;            
            try {
                return value === "unlocked" 
                    ? this._setValue( identity )
                    : this._removeValue( identity );
                    
            } catch (e) {
                console && console.log(e);
            }
        };
        
        /**
         * Sets a value to a provider.
         */
        this._setValue = function ( identity ) {
            if ( !identity ) return false;
                     
            var itemValue = true;
            var itemExpires = 10000;
            
            // if the option "expires" is set, then we need to save the time
            // when unlocked content will be locked again

            if ( this.expires ) {
                
                var today = new Date();
                var todayMs = today.getTime();
                
                var expires = todayMs + this.expires * 1000;
                
                itemExpires = Math.ceil(this.expires / 86400); // in days
                itemValue = JSON.stringify({expires: expires} );
                
            }
            
            // issue #SLJQ-44
            // for catching QUOTA_EXCEEDED_ERR

            var tryCookies = true;
            if ( localStorage && !this.useCookies ) {
                tryCookies = false;
                try {
                    localStorage.setItem( identity, itemValue );
                } catch(e) {
                    console && console.log(e);
                    tryCookies = true;
                }
            }

            if ( tryCookies ) {
                $.pandalocker.tools.cookie( identity, itemValue, { expires: itemExpires, path: "/" });
            }
            
            return true;
        };

        /**
         * Gets a value from a provider.
         */
        this._getValue = function ( identity ) {
            if ( !identity ) return false;
            
            // at first, trying to get a value from local storage
            // if there's not a situable value, then trying to get a value from cookies
            
            var value = localStorage && !this.useCookies && localStorage.getItem(identity);
            if ( !value ) value = $.pandalocker.tools.cookie(identity);
            
            if (value) {
                
                // if the got value is an object, then check the "expires" property
                
                try {
                    var valueObj = JSON.parse(value);
                    if ( valueObj && valueObj.expires ) {
                        var today = new Date();
                        return valueObj.expires > today;
                    }
                    return true;
                } catch (e) {
                    return true;
                }
            }
        };

        this._removeValue = function ( identity ) {
            if ( !identity ) return false;
                        
            if (localStorage) localStorage.removeItem(identity);
            $.pandalocker.tools.cookie(identity, null);
        };
    };

})(jQuery);;
/*!
 * OnePress Visibility Checker Service
 * Copyright 2015, OnePress, http://byonepress.com
*/

(function ($) {
    'use strict';

    $.pandalocker.services.visibility = function(){

        this.canLock = function( filters ) {

            if ( !filters ) return true;

            for ( var i in filters ) {
                var filter = filters[i];

                var passed = this.isVisible( filter );
                if ( !passed ) return false;
            }
            
            return true;
        };

        this.isVisible = function( filter ) {
            if ( !filter.conditions ) return true;
            
            var matched = this.matchFilter( filter );
            var type = filter.type || 'showif';

            if ( 'showif' === type ) return matched;
            if ( 'hideif' === type ) return !matched;
        }
        
        this.matchFilter = function( filter ) {

            // AND condition
            var all = true;
            
            for ( var i in filter.conditions ) {
                var scope = filter.conditions[i];
                var result = this.matchScope( scope );
                if ( !result ) all = false;
            }

            return all;
        };
        
        /**
         * Returns true if a specified scope is matched the current state.
         */
        this.matchScope = function( scope ) {
            
            // OR condition
            var any = false;
            
            if ( !scope.conditions ) return true;
            for ( var i in scope.conditions ) {
                var condition = scope.conditions[i];
                var result = this.matchCondition( condition );
                if ( result ) any = true;
            }
            
            return any;
        };
        
        /**
         * Returns true if a specified condition is matched the current state.
         */
        this.matchCondition = function( condition ) {
            
            var parameter = condition.param;
            var operator = condition.operator;
            var modelValue = condition.value;     
            var type = condition.type || 'text';  
            
            var provider = this.getValueProvider( parameter );
            
            if ( !provider ) {
                console && console.log('[visibility]: the value provider "%s" not found.'.replace('%s', parameter));
                return true;
            }
            
            var currentValue = provider.getValue();
            if ( currentValue === null ) {
                console && console.log('[visibility]: the value returned from the provider "%s" equals to null.'.replace('%s', parameter));
                return true;
            }
            
            if ( provider.compare ) {
                return provider.compare( operator, modelValue, currentValue, type );
            } else {
                return this.compare( operator, modelValue, currentValue, type );
            }
        };
        
        this.getValueProvider = function( parameter ) {
            var provider = $.pandalocker.services.visibilityProviders[parameter];
            provider = $.pandalocker.filters.run('visibility-value-provider', [provider, parameter]);
            return provider;
        };
        
        this.compare = function( operator, modelValue, currentValue, type ) {
            var converToRange = (type === 'date' && (operator === 'equals' || operator === 'notequal'));
            
            modelValue = this.castValue( modelValue, type, converToRange  ? 'range' : null );
            currentValue = this.castValue( currentValue, type );

            switch( operator ) {
                case 'equals':

                    if ( $.isArray( currentValue ) ) 
                        return $.inArray( modelValue, currentValue ) > -1;
                    
                    if ( modelValue.range ) {
                        return currentValue > modelValue.start && currentValue < modelValue.end;
                    }
                    
                    return modelValue === currentValue;
                    
                break;
                case 'notequal':
                    
                    if ( $.isArray( currentValue ) ) 
                        return $.inArray( modelValue, currentValue ) === -1;
                    
                    if ( modelValue.range ) {
                        return !(currentValue > modelValue.start && currentValue < modelValue.end);
                    }
                    
                    return modelValue !== currentValue;
                    
                break;
                case 'less':
                case 'older':
                    return currentValue < modelValue;
                    break;
                case 'greater':
                case 'younger':
                    return currentValue > modelValue;
                    break;
                case 'contains':
                    return currentValue.indexOf(modelValue) > -1;
                break;
                case 'notcontain':
                    return currentValue.indexOf(modelValue) === -1;
                break;
                case 'between':
                    return currentValue >= modelValue.start && currentValue <= modelValue.end; 
                break;
            }
            
            return true;
        };
        
        this.castValue = function( value, type, label ) {
            if ( value === null ) return value;
            
            if ( $.isArray( value ) ) {

                for( var i = 0 ; i < value.length; i++ ) {
                    value[i] = this.castValue( value[i], type );
                }
                
                return value;
            }

            if ( typeof value.start !== "undefined" ) {
                
                var start = this.castValue( value.start, type, 'start' );
                var end = this.castValue( value.end, type, 'end' ); 
                
                if ( value.start.type === 'relative') {
                    value.end = start;
                    value.start = end;               
                } else {
                    value.end = end;
                    value.start = start;       
                }

                return value;
            }
            
            switch(type) {
                case 'text':
                case 'select':
                    return '' + value;
                    break;
                case 'integer':
                    return parseInt(value);
                    break;
                case 'date':
                    return this.castToDate( value, label ); 
                    break;
            }
        };
        
        this.castToDate = function( value, label ) {

            var current = new Date().getTime();
            
            if ( 'relative' === value.type ) {
                var unitsCount = parseInt(value.unitsCount);
                
                switch (value.units) {
                    case 'seconds':
                        var point = current - unitsCount * 1000;
                        break;
                    case 'minutes':
                        var point = current - unitsCount * 60 * 1000;
                        break;
                    case 'hours':
                        var point = current - unitsCount * 60 * 60 * 1000;   
                        break;
                    case 'days':
                        var point = current - unitsCount * 60 * 60 * 24 * 1000;  
                        break;
                    case 'weeks':
                        var point = current - unitsCount * 60 * 60 * 24 * 7 * 1000;  
                        break;
                    case 'months':
                        var point = current - unitsCount * 60 * 60 * 24 * 30 * 1000;  
                        break;
                    case 'years':
                        var point = current - unitsCount * 60 * 60 * 24 * 365 * 1000;  
                        break;
                }
                
                if ( 'range' !== label) return point;        
                
                var result = {range: true, end: point, start: 0};
                
                switch (value.units) {
                    case 'seconds':
                        result.start = result.end - 1000;
                        break;
                    case 'minutes':
                        result.start = result.end - 60 * 1000;
                        break;
                    case 'hours':
                        result.start = result.end - 60 * 60 * 1000;
                        break;
                    case 'days':
                        result.start = result.end - 60 * 60 * 24 * 1000;
                        break;
                    case 'weeks':
                        result.start = result.end - 60 * 60 * 24 * 7 * 1000;
                        break;
                    case 'months':
                        result.start = result.end - 60 * 60 * 24 * 30 * 1000;
                        break;
                    case 'years':
                        result.start = result.end - 60 * 60 * 24 * 365 * 1000;
                        break;
                }
                
                return result;

            } else {
                
                if ( 'range' === label) {
                    
                    var date = new Date(value);
                    
                    var day = date.getUTCDate();
                    var month = date.getUTCMonth();
                    var year = date.getUTCFullYear();
                    
                    return {
                        range: true,
                        start: Date.UTC(year, month, day),
                        end: Date.UTC(year, month, day, 23, 59, 59, 999)
                    };
                    
                } else {
                    return value;
                }
            }
        };
    };
    
    $.pandalocker.services.visibilityProviders = {};

    $.pandalocker.services.visibilityProviders['user-mobile'] = {
        getValue: function() {
            return $.pandalocker.tools.isMobile() ? 'yes' : 'no';
        }
    };
    
    $.pandalocker.services.visibilityProviders['location-page'] = {
        getValue: function() {
            return window.location.href;
        }
    };    
    
    $.pandalocker.services.visibilityProviders['location-referrer'] = {
        getValue: function() {
            return document.referrer;
        }
    };

})(jQuery);;
/*!
 * OnePress Default Subscription Service
 * Copyright 2014, OnePress, http://byonepress.com
*/

(function ($) {
    'use strict';
        
    $.pandalocker.services.subscription = function( serviceOptions ){
        
        this.id = serviceOptions.id;
        this.serviceOptions = serviceOptions;
        
        this.cookieName = 'opanda_' + serviceOptions.name + "_" + serviceOptions.service + '_' + serviceOptions.listId;
        this.checkingInterval = serviceOptions.checkingInterval || 10000;
        
        /**
         * Makes the ajax call with a given request type.
         */
        this._call = function( requestType, identityData, serviceData ) {
            var self = this;

            var dataToPass = {};
            
            dataToPass.opandaIdentityData = identityData;
            dataToPass.opandaServiceData = serviceData;
            
            dataToPass.opandaHandler = 'subscription';
            dataToPass.opandaRequestType = requestType;
            
            dataToPass.opandaService = this.serviceOptions.service;
            dataToPass.opandaListId = this.serviceOptions.listId; 
            dataToPass.opandaDoubleOptin = this.serviceOptions.doubleOptin; 
            dataToPass.opandaConfirm = this.serviceOptions.confirm;
            dataToPass.opandaRequireName = this.serviceOptions.requireName;
            
            dataToPass = $.pandalocker.filters.run(this.id + '.ajax-data', [dataToPass]);   
            dataToPass = $.pandalocker.filters.run(this.id + '.subscribe.ajax-data', [dataToPass]);
            
            if ( this.serviceOptions.parentId )
                dataToPass = $.pandalocker.filters.apply('subscription-data-' + this.serviceOptions.parentId, dataToPass);
            
            var result = new $.pandalocker.deferred();
            
            var onError = function( response ){
                if ( response && response.readyState < 4 ) return;

                if ( !console || !console.log ) return;
                console.log('Invalide ajax response:');
                console.log(response.responseText);

                result.reject(response);  
            };
            
            var request = $.ajax({
                type: "POST",
                dataType: "text",
                url: self.serviceOptions.proxy,
                data: dataToPass,
                error: function(response) {
                    onError( request );
                },
                success: function(response) {
                    var data = $.pandalocker.tools.extractJSON( response );
                    if ( !data ) return onError( request );
                    result.resolve(data);
                }
            });

            return result.promise();
        };
  
        /**
        * Subscribes the given user.
        * 
        * @since 1.0.0
        * @param {object} identityData An identity data of a person to subscribe
        * @return {$.Deferred} The deferred object to track the state.
        */
        this.subscribe = function ( identityData, serviceData ) {
            var self = this;
            var result = new $.Deferred();

            // makes ajax call to subscribe the user
            this._call('subscribe', identityData, serviceData)
                .done( function( response ){
                    
                    console.log(response);
                    
                    // checks if the error occured
                    if ( response && response.error ) {
                        result.reject( response );
                        return;
                    }

                    if( response && 'subscribed' === response.status ) { 
                        result.resolve( response );
                        return;
                    }

                    // if the confirmation is not required
                    if( !self.serviceOptions.doubleOptin || !self.serviceOptions.confirm ) {
                        result.resolve( response );
                        return;
                    }

                    // adds the local storage item or the cookies 
                    // pointing that we're waiting subscription
                    self._setWaitingStatus( identityData );
                    
                    // notify the method caller that we're waiting the subcription,
                    // the caller should show the email-confirmation screen
                    result.notify('waiting-confirmation');
                    
                    // if we need to wait for the confirmation, runs the checking loop
                    self.waitSubscription( identityData )
                        .done(function( response ){
                            result.resolve( response );
                        })
                        .fail(function( response ){
                            result.reject( response );
                        })
                        .always(function(){
                           self._removeWaitingStatus();
                        });
                        
                })
                .fail( function( data ){
                    if ( data && data.readyState < 4 ) return;
                    result.reject({ error: $.pandalocker.lang.errors.ajaxError });
                });
            
            return result.promise();
        };
        
        /**
        * Waits for the subscription.
        * 
        * @since 1.0.0
        * @param {object} identityData An identity data of a person to wait subscription.
        * @return {$.Deferred} The deferred object to track the state.
        */
        this.waitSubscription = function( identityData ) {
            var self = this;
            var result = new $.Deferred();
            
            this._waitingConfirmationResult = result;
            if ( self._isCanceled ) { self._isCanceled = false; return; }

            // checks the subscription
            this.check(identityData)
                .done(function( response ){
                    
                    if ( self._isCanceled ) { self._isCanceled = false; return; }

                    // don't remove, not for debug
                    console && console.log && console.log( 'waiting subscription...' );
                    console && console.log && console.log( response );
                   
                    // if not subscribed, then checks the sunbscription again
                    if( !response || response.status !== 'subscribed' ) { 
                        
                        // waits some time to send the checking request again
                        setTimeout(function(){
                            
                            var localResult = self.waitSubscription( identityData );
                            if ( !localResult ) return;
                            
                            localResult.done(function( response ){ 
                                result.resolve( response );
                            });

                            localResult.fail(function( response ){ 
                                result.reject( response );
                            });
                            
                        }, self.checkingInterval );
                        
                        return;
                    }
                    
                    result.resolve( response );
                })
                .fail(function( response ){
                    if ( self._isCanceled ) { self._isCanceled = false; return; }
                    result.reject( response );
                });
                
            return result.promise();
        };
        
        /**
        * Check whether the use is a subscriber.
        * 
        * @since 1.0.0
        * @param {object} identityData An identity data of a person to check subscription.
        * @return {$.Deferred} The deferred object to track the state.
        */      
        this.check = function( identityData ) {   
            var result = new $.Deferred();
            
            // makes ajax call to check if the user subscribed
            this._call('check', identityData)
                .done( function( response ){

                    // checks if the error occured
                    if ( response.error ) {
                        result.reject( response );
                        return;
                    }
                    
                    result.resolve( response );
                })
                .fail( function( data ){
                    if ( data && data.readyState < 4 ) return;
                    result.reject({ error: $.pandalocker.lang.errors.ajaxError });
                });
            
            return result.promise();
        };
        
        /**
         * Cancels waiting confirmation of subscription.
         */
        this.cancel = function() {
            this._isCanceled = true;
            this._removeWaitingStatus();
            
            if ( this._waitingConfirmationResult ) {
                this._waitingConfirmationResult.reject({
                    error: $.pandalocker.lang.errors_subscription_canceled
                });
                this._waitingConfirmationResult = null;
            }
        };
        
        /**
         * Sets the local storage item or the cookies to memorize the waiting status.
         */
        this._setWaitingStatus = function( identityData ) {
            var dataToSave = JSON.stringify( identityData );

            if ( localStorage && localStorage.setItem ) {
                try {
                    localStorage.setItem( this.cookieName, dataToSave );             
                } catch(e) {
                    $.pandalocker.tools.cookie( this.cookieName, dataToSave, { expires: 365, path: "/" });
                }
            } else {
                $.pandalocker.tools.cookie( this.cookieName, dataToSave, { expires: 365, path: "/" });
            }
        };
        
        /**
         * Removes the waiting status.
         */
        
        this._removeWaitingStatus = function( identityData ) {
            localStorage && localStorage.removeItem  && localStorage.removeItem( this.cookieName );  
            $.pandalocker.tools.cookie( this.cookieName, false, { expires: 0, path: "/" } );
        };
        
        /**
        * Returns try if we're waiting when the user confirm his subscription.
        */ 
        this.isWaitingSubscription = function() {
            var result = this.getWaitingIdentityData();
            return result ? true : false;
        };
        
        this.getWaitingIdentityData = function() {
            var result = localStorage && localStorage.getItem && localStorage.getItem( this.cookieName );
            if ( !result ) result = $.pandalocker.tools.cookie( this.cookieName );
            if ( result ) return JSON.parse( result );
            return result;
        }
    };

})(jQuery);;
/*!
 * Interrelation
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
(function($){
    'use strict';
    
    if ( !$.pandalocker.extras ) $.pandalocker.extras = {};
    
    $.pandalocker.extras.interrelation = {
        
        init: function() {
            var scope = this.options.locker && this.options.locker.scope;
            if ( !scope ) return;
                        
            var self = this;

            // fires when the state changed, to save the scope
            // identity in the state storage
            
            this.addHook('state-changed', function( locker, state, senderType, senderName ){
                if ( state !== 'unlocked' ) return;

                var storage = self._getStateStorage();
                var identity = "scope_" + scope;
                storage.setState( identity, 'unlocked' );
            });          
            
            this.addFilter('functions-requesting-state', function( checkFunctions ){

                checkFunctions.push(function( callback ){

                    var storage = self._getStateStorage();
                    var identity = "scope_" + scope;
                    
                    storage.requestState( identity, function( state ){
                        callback( state );
                    });
                });
                
                return checkFunctions;
            });
            
            // fires when the current locker was unlocked 
            // to notify other lockers on the same page
            
            this.addHook('unlocked', function( locker, sender ){
                if ( "button" !== sender ) return;
                self.runHook('unlocked-by-scope-' + scope, [], true );
            });
            
            // fires when any interrelated locker 
            // was unlocked on the same page
            
            this.addHook('unlocked-by-scope-' + scope, function( locker ){
                if ( locker === self ) return;
                self.unlock('scope');
            }, 10, true );   
        }
    };

})(jQuery);;
/*!
 * Google Analytics
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
(function($){
    'use strict';
    
    if ( !$.pandalocker.extras ) $.pandalocker.extras = {};
    
    $.pandalocker.extras.googleAnalytics = {
        
        init: function() {
            if ( !this.options.googleAnalytics ) return;
            
            var self = this;

            this.addHook('unlocked', function( locker, sender, senderName, url ){

                if ( !window._gaq && !window.ga ) return;
                if ( !url ) url = window.location.href;

                if ( 'button' === sender ) {
                    
                    var buttonName = null;
                    
                    if ( senderName === 'facebook-like' ) { buttonName = 'Facebook Like'; }
                    else if ( senderName === 'facebook-share' ) { buttonName = 'Facebook Share'; }
                    else if ( senderName === 'twitter-tweet' ) { buttonName = 'Twitter Tweet';  }
                    else if ( senderName === 'twitter-follow' ) { buttonName = 'Twitter Follow'; }
                    else if ( senderName === 'google-plus' ) { buttonName = 'Google Plus'; }
                    else if ( senderName === 'google-share' ) { buttonName = 'Google Share'; } 
                    else if ( senderName === 'linkedin-share' ) { buttonName = 'LinkedIn Share'; } 
                    else if ( senderName === 'google-youtube' ) { buttonName = 'Google Youtube'; }  
                    
                    else if ( senderName === 'facebook' ) { buttonName = 'Facebook Sign-In'; } 
                    else if ( senderName === 'twitter' ) { buttonName = 'Twitter Sign-In'; } 
                    else if ( senderName === 'google' ) { buttonName = 'Google Sign-In'; }  
                    else if ( senderName === 'linkedin' ) { buttonName = 'LinkedIn Sign-In'; }  
                    else if ( senderName === 'form' ) { buttonName = 'Opt-In Form'; }  
                    
                    else { buttonName = senderName.substr(0,1).toUpperCase() + senderName.substr(1); }

                    trackEvent( 'Lockers', 'Unlocked (Total)', url);
                    trackEvent( 'Lockers ', 'Unlocked via ' + buttonName, url);
                    
                } else if ( 'timer' === sender ) {
                    
                    trackEvent( 'Lockers', 'Skipped (Total)', url);
                    trackEvent( 'Lockers ', 'Skipped via Timer', url);
                    
                } else if ( 'cross' === sender ) {
                    
                    trackEvent( 'Lockers', 'Skipped (Total)', url);
                    trackEvent( 'Lockers ', 'Skipped via Cross', url);
                    
                }
            });
            
            var trackEvent = function( category, action, value ) {
            
                if ( window.ga ) window.ga('send', 'event', category, action, value);
                else window._gaq.push(['_trackEvent',category, action, value]);
            };
        }
    };

})(jQuery);;
/*!
 * Not Available
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
(function($){
    'use strict';
    
    if ( !$.pandalocker.extras ) $.pandalocker.extras = {};
    
    $.pandalocker.extras.na = {
        
        init: function() {
            var self = this;
            
            var controlsCount = 0;
            var controlsLeft = 0;
            var controlsHavingErrors = {};
            
            var calculateControls = function() {
                var count = 0;

                for( var i = 0; i < self._groups.length; i++  ) {
                    for ( var k = 0; k < self._groups[i].controls.length; k++ ) {
                        count++;
                    }
                }

                return count;
            };
            
            this.addHook('control-error', function( locker, controlName, groupName ){
                
                if ( !controlsCount ) { 
                    controlsCount = calculateControls();
                    controlsLeft = controlsCount;
                }
                
                var identity = groupName + '-' + controlName;
                if ( controlsHavingErrors[identity] ) return;
                
                controlsHavingErrors[identity] = true;
                controlsLeft--;
                
                if ( controlsLeft > 0 ) return;
                
                self.runHook('na');

                if ( self.options.locker.naMode === 'show-content' ) {
                    self.unlock('na');
                }
            });
        }
    };

})(jQuery);;
(function($){
    'use strict';
    
    var control = {};

    control.init = function( group, options ) {
        
        var temp = $.extend(true, {}, this._defaults);
        this.options = $.extend(true, temp, options); 
        
        this.groupOptions = group.options;
        this.lockerOptions = group.locker.options;
        
        // stores the lang resources for the current lang scope
        this.lang = group.lang;
        
        this.group = group;
        this.locker = group.locker;

        // when we use Twitter to sign in, it redirects to the simple sign in form,
        // but we need to keep the original  sender name to track the stats
        if ( this.groupOptions.senderName ) 
            this.senderName = this.groupOptions.senderName;

        if ( !this.name ) throw new Error('The property "name" cannot be empty for the control.');
        
        this.options.proxy = this.options.proxy || this.groupOptions.proxy || this.lockerOptions.proxy;
        
        if ( this.setup ) this.setup();
        if ( this.setupHooks ) this.setupHooks();
        if ( this.prepareOptions ) this.prepareOptions();
    };
    
    /**
     * Default options.
     */
    control._defaults = {};
    
    // ----------------------------------------------------------------
    // Basic public methods
    // ----------------------------------------------------------------
    
    /**
     * Shows the control in the specified holder.
     */
    control.renderControl = function( $holder ) {
        
        this.control = $(this.tag || '<div>')
                       .addClass('onp-sl-control')
                       .addClass('onp-sl-' + this.name )
                       .appendTo( $holder );
        
        this.innerWrap = $("<div></div>")
                         .addClass('onp-sl-control-inner-wrap')
                         .appendTo( this.control ); 
                 
        this._isRendered = true;
        
        if ( this._hasError() ) this.showError();
        this.render( this.innerWrap );
    };
    
    /**
     * The child method which should be overwritten.
     */
    control.render = function() {
        throw new Error("The control should implement the method 'render'"); 
    };
    
    /**
     * Sends a signal to the group that the content should be unlocked.
     */
    control.unlock = function( sender, senderName, value ) {
        this.setState( 'unlocked' );
        this.group.unlock( sender || 'button', senderName || this.senderName || this.name, value );
    };

    /**
     * Adds a CSS class to locker.
     * @returns {undefined}
     */
    control.addClassToLocker = function( className ) {
        this.group.addClassToLocker( className );
    };

    control._trackWindow = function( urlPart, onCloseCallback ) {
        
        var funcOpen = window.open;
        window.open = function(url,name,params){

            var winref = funcOpen(url,name,params);

            if ( !url ) return winref;
            if ( url.indexOf( urlPart ) === -1 ) return winref;
            
            var pollTimer = setInterval(function() {
                if ( !winref || winref.closed !== false ) {
                    clearInterval(pollTimer);
                    onCloseCallback && onCloseCallback();
                }
            }, 300);
            
            return winref;
        };
    };
    
    
    // ----------------------------------------------------------------
    // State storage methods
    // ----------------------------------------------------------------
    
    /**
     * Requests the state of a locker.
     */
    control.requestState = function( callback ){
        var storage = this._getStateStorage();
        storage.requestState( this._getStorageIdentity(), callback );
    };
    
    /**
     * Sets a new state for a given control.
     */
    control.setState = function( state, callback ) {
        var storage = this._getStateStorage();
        storage.setState( this._getStorageIdentity(), state, callback );
        
        this.group.setState( state, 'button', this.name );
    };
    
    /**
     * Returns an identity of a given control in a used state storage.
     */
    control._getStorageIdentity = function() {
        return 'control_' + this.name;
    };
    
    /**
     * Returns a state storage to set/get a state of a given control.
     */
    control._getStateStorage = function() {
        return this.locker._getStateStorage();
    };
    
    // ----------------------------------------------------------------
    // Handling loading
    // ----------------------------------------------------------------     
    
    control._setLoadingState = function( sender ) {
        if ( this._stateSender ) return;
        this._stateSender = sender;

        this.control.addClass('onp-sl-state-loading');
        this._isLoadingState = true;
    },
    
    control._removeLoadingState = function( sender ) {

        if ( this._stateSender && this._stateSender !== sender ) return;
        this._stateSender = null;
        
        this.control.removeClass('onp-sl-state-loading');
        this._isLoadingState = false;
    },
    
    control._isLoading = function() {
        return this._isLoadingState;
    },
    
    // ----------------------------------------------------------------
    // Handling errors
    // ----------------------------------------------------------------    
    
    control._setError = function ( message ) {
        if ( this._error ) return;
        this._error = message;
    };
    
    control._hasError = function() {
        return this._error ? true : false;
    };
    
    control.showError = function( message, $holder ) {
        var self = this;
        
        this.runHook('control-error', [self.name, self.group.name]);
        
        if ( !this._isRendered ) {
            this._setError( message );
            return;
        }
        
        var $holder = $holder || this.innerWrap;
        var message = message || this._error;

        if ( this.control.hasClass('onp-sl-state-error') ) return;
        this.control.removeClass('onp-sl-state-loading').addClass('onp-sl-state-error');
        
        var $error = this.createErrorMarkup( message ).appendTo( $holder );
        $error.find(".onp-sl-error-title").click(function(){
            self.group.showError( self.name, message );
            return false;
        });
    };
    
    /**
     * Creats the markup for the error.
     */
    control.createErrorMarkup = function( text ) {
        return $("<div class='onp-sl-error-body'><a href='#' class='onp-sl-error-title'>" + $.pandalocker.lang.error + "</a></div>");
    };
    
    // --------------------------------------------------------------
    // Notices
    // --------------------------------------------------------------   
    
    control.showNotice = function( message, callback ){
        this.group.showNotice( message, null, callback );
    };
    
    // --------------------------------------------------------------
    // Events
    // --------------------------------------------------------------
        
    /**
    * Subscribes to the specified hook.
    */
    control.addHook = function( eventName, callback, priority ) {
        return this.group.addHook( eventName, callback, priority );
    };

    /**
    * Runs the specified hook.
    */
    control.runHook = function( eventName, args ) {
        return this.group.runHook( eventName, args );
    };

    /**
    * Subscribes to the specified hook.
    */
    control.addFilter = function( eventName, callback, priority ) {
        return this.group.addFilter( eventName, callback, priority );
    };

    /**
    * Runs the specified hook.
    */
    control.applyFilters = function( eventName, input, args ) {
        return this.group.applyFilters( eventName, input, args );
    };

    // --------------------------------------------------------------
    // Working with SDK
    // --------------------------------------------------------------    
    
    /**
     * Preloads the SDK script for the control.
     */
    control.requireSdk = function( sdkName, sdkOptions ) {
        var self = this;
        var result = new $.pandalocker.deferred();
        
        if ( !sdkName ) {
            result.resolve();
            return result.promise();
        }

        var timeout = this.group.options.loadingTimeout || this.lockerOptions.locker.loadingTimeout || 20000;
        var sdkResult = self.attemptToLoad(sdkName, sdkOptions || {}, 5, timeout);
        
        // the sdk script is loaded and ready to use
        sdkResult.done(function(){
            result.resolve();
        });

        // failed with error
        sdkResult.fail(function( error ){
            var errorText = $.pandalocker.lang.errors.unableToLoadSDK
                .replace('{0}', sdkName)
                .replace('{1}', error);

            result.reject(errorText);
        });
        
        return result.promise();
    };
    
    control.attemptToLoad = function( sdkName, sdkOptions, attemptMax, timeout ) {
        var self = this;
        
        // 5 attempts to load a script
        if ( !attemptMax ) attemptMax = 5;
        var attemptResult = new $.pandalocker.deferred();
 
        var sdkResult = $.pandalocker.sdk.connect(sdkName, sdkOptions || {}, timeout);
        
        // the sdk script is loaded and ready to use
        sdkResult.done(function(){
            attemptResult.resolve();
        });

        // failed with error
        sdkResult.fail(function( error ){
            console.log('Failed to load SDK script "' + sdkName + '" due to the error "' + error + '". ' + attemptMax + ' attempts left.');
            if ( error !== 'timeout' && error !== 'blocked' ) attemptResult.reject(error);
            
            if ( attemptMax - 1 <= 0 ) {
                attemptResult.reject( error );
            } else {

                self.attemptToLoad( sdkName, sdkOptions, attemptMax - 1, timeout )
                    .done(function(){ attemptResult.resolve(); })
                    .fail(function(){ attemptResult.reject(error); });
            }
        });
        
        return attemptResult.promise();
    };
    
    control.verifyButton = function() {
        var self = this; 
        var result = new $.pandalocker.deferred();
        
        var buttonTimeout = self.verification.timeout;

        var verificationFunction = function() {

            if ( self.control.find( self.verification.container ).length === 0 && buttonTimeout >= 0) {
                setTimeout(function () {
                    verificationFunction();
                }, 500);

                buttonTimeout = buttonTimeout - 500;
                return;
            };

            if ( buttonTimeout <= 0 ) {
                var errorText = $.pandalocker.lang.errors.unableToCreateControl.replace('{0}', self.networkName );
                return result.reject( errorText );
            }

            result.resolve();
        };

        verificationFunction();
        
        return result.promise();  
    };
    
    // --------------------------------------------------------------
    // Screens
    // --------------------------------------------------------------   

    control.showScreen = function( screenName, options ) {
        this.group.showScreen( screenName, options );
    };

    // --------------------------------------------------------------
    // Making the control public
    // --------------------------------------------------------------   
    
    $.pandalocker.entity.control = control;
    
})(jQuery);


;
(function($){
    'use strict';
    
    var control = $.pandalocker.tools.extend( $.pandalocker.entity.control );
    
    /**
     * Builds the array of actions and their options.
     */
    control.setup = function() {
        var self = this;

        this.options.actions = this.options.actions || [];
        
        // move the subscribe action to the end
        
        var subscribeActionExists = false;
        
        for( var index in this.options.actions ) {
            if( 'subscribe' !== this.options.actions[index] ) continue;
            this.options.actions.splice(index, 1);
            subscribeActionExists = true;
        }
        
        if ( subscribeActionExists ) 
            this.options.actions.push('subscribe');        
        
        if ( this.groupOptions.actions ) this.options.actions = $.extend( this.options.actions, this.groupOptions.actions );

        for ( var i = 0; i < this.options.actions.length; i++ ) {
            
            var actionName = $.pandalocker.tools.camelCase( this.options.actions[i] );
            this.options[actionName] = this.options[actionName] || {};
            
            var groupOptionsName = actionName + 'Options';
            
            if ( this.groupOptions[groupOptionsName] ) 
                this.options[actionName] = $.extend(true, this.options[actionName], this.groupOptions[groupOptionsName] );
            
            var lockerOptionsName = actionName + 'ActionOptions';
            
            if ( this.lockerOptions[lockerOptionsName] ) 
                this.options[actionName] = $.extend(true, this.options[actionName], this.lockerOptions[lockerOptionsName] ); 
        }
        
        this.options.proxy = this.options.proxy || this.groupOptions.proxy || this.lockerOptions.proxy;
        this.options.lazy = this.options.lazy || this.groupOptions.lazy || this.lockerOptions.lazy;

        // creating the subscription service

        if ( subscribeActionExists ) {
                
            var serviceOptions = {
                id: self.locker.id,
                proxy: self.lockerOptions.proxy,
                name: self.name,
                listId: self.options[actionName].listId,
                service: self.options[actionName].service,
                doubleOptin: self.options[actionName].doubleOptin,
                confirm: self.options[actionName].confirm,
                requireName: self.options[actionName].requireName || false
            };
            
            var service = new $.pandalocker.services.subscription( serviceOptions );
            this.subscriptionService = self.applyFilters('get-default-subscription-service', service );
        }
    };
    
    /**
     * Runs coherently each action 
     * which should be executed when the user is connected.
     */
    control.runActions = function( identityData, serviceData, changeScreen ) {
        var deferred = new $.Deferred();
        var self = this;     

        // in order to execute the actions only once
        if ( this._actionsDone ) return;
        this._actionsDone = true;
        
        var actions = this.options.actions.slice();
        
        if ( changeScreen ) this.showScreen('data-processing');

        // this function takes the next action from the queue and executes it, 
        // when the action is completed, takes the next one
        
        var runNextAction = function() {           
            var actionName = actions.shift();
            
            if ( !actionName ) { 
                deferred.resolve();
                self.unlock(); 
                return; 
            }

            var actionOptions = self.options[$.pandalocker.tools.camelCase( actionName )];

            var methodName = $.pandalocker.tools.camelCase( 'run-' + actionName + "-action" );
            if ( !self[methodName] ) { 
                deferred.reject();
                self._actionsDone = false;
                throw new Error("The action '" + methodName + "' not found.");
            }

            self[methodName]( identityData, serviceData, actionOptions, changeScreen, function( result ){

                if ( 'error' === result  ) { 
                    self.runHook('raw-error');
                    deferred.reject( result );
                    self._actionsDone = false;
                    return self.showScreen('default');
                }
                runNextAction();
            });
        };
        
        runNextAction();
        return deferred.promise();
    };

    /**
     * Runs the action to subscribe the user.
     */
    control.runSubscribeAction = function( identityData, serviceData, actionOptions, changeScreen, callback ) {
        var self = this;
        
        console.log('serviceData = '); 
        console.log(serviceData);
        
        var subscribe = function() {
            
            if ( changeScreen ) self.showScreen('data-processing');   

            var result = self.subscriptionService.subscribe( identityData, serviceData );
            self._setupSubscriptionHooks( result, identityData );
            
            result.fail(function(){
                callback('error');
            });
        };
        
        if ( !identityData.email ) {
            
            return this.showScreen('enter-email', {
                header: $.pandalocker.lang.onestep_screen_title,
                message: $.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: $.pandalocker.lang.onestep_screen_button,
                note: $.pandalocker.tools.normilizeHtmlOption( self.options.noSpamText || self.groupOptions.text.noSpamText || $.pandalocker.lang.noSpam ),
                callback: function( email ){
                    identityData.email = email;
                    subscribe();
                }
            });
        };

        subscribe();
    };
    
    /**
     * Runs the action to sign up the user.
     */
    control.runSignupAction = function( identityData, serviceData, actionOptions, changeScreen, callback ) {
        var self = this;
        
        var signup = function() {
            
            if ( changeScreen ) self.showScreen('data-processing');   
            
            var dataToPass = {};
            dataToPass.opandaIdentityData = identityData;
            dataToPass.opandaHandler = 'signup';
            
            dataToPass = $.pandalocker.filters.run(self.locker.id + '.ajax-data', [dataToPass]);       
            dataToPass = $.pandalocker.filters.run(self.locker.id + '.signup.ajax-data', [dataToPass]);

            return $.ajax({
                type: "POST",
                dataType: "json",
                url: self.lockerOptions.proxy,
                data: dataToPass,
                success: function() {
                    callback();
                },
                error: function(response, type, errorThrown) {
                    if ( response && response.readyState < 4 ) return;

                    self.showScreen('default'); 
                    self.showError('Unable to sign in, the ajax error occurred.');
                    callback('error');

                    if ( !console || !console.log ) return;
                    console.log('Invalide ajax response:');
                    console.log(response.responseText);
                }
            });
        };
        
        if ( !identityData.email ) {
            
            return this.showScreen('enter-email', {
                header: $.pandalocker.lang.onestep_screen_title,
                message: $.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: $.pandalocker.lang.onestep_screen_button,
                note: $.pandalocker.tools.normilizeHtmlOption( self.options.noSpamText || self.groupOptions.text.noSpamText || $.pandalocker.lang.noSpam ),
                callback: function( email ){
                    identityData.email = email;
                    signup();
                }
            });
        };
        
        signup();
    };
    
    /**
     * Runs the action to catch the lead.
     */
    control.runLeadAction = function( identityData, serviceData, actionOptions, changeScreen, callback ) {
        var self = this;
        
        var catchLead = function() {
            
            if ( changeScreen ) self.showScreen('data-processing');  
            
            var dataToPass = {};
            dataToPass.opandaIdentityData = identityData;
            dataToPass.opandaHandler = 'lead';
            
            dataToPass = $.pandalocker.filters.run(self.locker.id + '.ajax-data', [dataToPass]);       
            dataToPass = $.pandalocker.filters.run(self.locker.id + '.lead.ajax-data', [dataToPass]);

            return $.ajax({
                type: "POST",
                dataType: "json",
                url: self.lockerOptions.proxy,
                data: dataToPass,
                success: function() {
                    callback();
                },
                error: function(response, type, errorThrown) {
                    if ( response && response.readyState < 4 ) return;

                    self.showScreen('default'); 
                    self.showError('Unable to sign in, the ajax error occurred.');
                    callback('error');

                    if ( !console || !console.log ) return;
                    console.log('Invalide ajax response:');
                    console.log(response.responseText);
                }
            });
        };
        
        if ( !identityData.email ) {
            
            return this.showScreen('enter-email', {
                header: $.pandalocker.lang.onestep_screen_title,
                message: $.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: $.pandalocker.lang.onestep_screen_button,
                note: $.pandalocker.tools.normilizeHtmlOption( self.options.noSpamText || self.groupOptions.text.noSpamText || $.pandalocker.lang.noSpam ),
                callback: function( email ){
                    identityData.email = email;
                    catchLead();
                }
            });
        };
        
        catchLead();
    };
    
    // ----------------------------------------------------------------
    // Subscription
    // ----------------------------------------------------------------

    control._checkWaitingSubscription = function() {
        if ( !this.subscriptionService || !this.subscriptionService.isWaitingSubscription() ) return;
        
        var identityData = this.subscriptionService.getWaitingIdentityData();

        var result = this.subscriptionService.waitSubscription( identityData );
        this._setupSubscriptionHooks( result, identityData );
        
        var self = this;
        this.showScreen('email-confirmation', {
            service: self.subscriptionService,
            email: identityData.email
        });
    };
    
    control._setupSubscriptionHooks = function( result, identityData ) {
        var self = this;
        
        result.done(function(){ self.unlock(); });

        result.fail(function( data ){
            
            self.runHook('raw-error');
   
            self.showNotice( data.error );
            self.showScreen('default');
            
            if ( data.detailed && console && console.log ) {
                console.log( data.detailed );
            }
        });
        
        result.always(function( data, ok ){
            self.subscriptionService._removeWaitingStatus();
        });
        
        result.progress( function( status ){
            if ( 'waiting-confirmation' === status ){}
            self.showScreen('email-confirmation', {
                service: self.subscriptionService,
                email: identityData.email
            });
        });
        
        return result;
    };

    // --------------------------------------------------------------
    // Making the control public
    // --------------------------------------------------------------   
    
    $.pandalocker.entity.actionControl = control;
    
})(jQuery);


;
(function($){
    'use strict';
    
    var group = {};
    
    /**
     * Default options.
     */
    group._defaults = {};
    
    /**
     * Inits the group.
     */
    group.init = function( locker, options ) {
        var self = this;
        
        this.locker = locker;
        this.lockerOptions = locker.options;  
        
        // stores the lang resources for the current lang scope
        this.lang = locker.lang;

        if ( !options ) options = {};

        var temp = $.extend(true, {}, this._defaults);
        this.options = $.extend(true, temp, options); 
 
        for (var prop in options) {
            if ( !options.hasOwnProperty(prop) ) continue;
            if ( !$.isArray(options[prop])) continue;
            this.options[prop] = options[prop];
        }

        this.isFirst = options.index === 1;
        this.isLast = options.index === this.lockerOptions.groups.order.length;
        this.isSingle = this.lockerOptions.groups.order.length === 1;
        
        if (typeof this.options.text !== "object") {
            this.options.text = { message: self.options.text };
        }

        if ( this.isFirst ) {
            if ( '' === this.options.text.header ) this.options.text.header = '';
            else this.options.text.header = this.options.text.header || this.lang.defaultHeader;
            
            if ( '' === this.options.text.message ) this.options.text.message = '';
            else this.options.text.message = this.options.text.message || this.lang.defaultMessage;
        }

        this.options.text.header = $.pandalocker.tools.normilizeHtmlOption ( this.options.text.header );
        this.options.text.message = $.pandalocker.tools.normilizeHtmlOption ( this.options.text.message );
        this.options.text.footer = $.pandalocker.tools.normilizeHtmlOption ( this.options.text.footer );

        // prepares separator options
        
        if ( false !== this.options.separator ) {
            
            var separator = $.isPlainObject( this.options.separator )
                ? this.options.separator
                : { type: 'line', 'title': self.options.separator };

            separator.type = separator.type || 'line';
            this.options.separator = separator;  
        }
        
        // continues processing with child methods

        if ( this.childInit ) this.childInit();
        if ( this.setup ) this.setup();
        if ( this.setupHooks ) this.setupHooks();
        if ( this.prepareOptions ) this.prepareOptions();
        
        try { 
            this.createControls();
        } catch(e) {
            if ( e.onpsl ) this.showError( this.name, e.message );
            else throw e;
        }
    };

    /**
     * Creates controls for the group.
     */
    group.createControls = function() {
        
        this.controls = [];

        for( var i = 0; i < this.options.order.length; i++ ) {  

            var controlName = this.options.order[i];
            if ( typeof controlName !== 'string' ) continue;
            
            if ( !$.pandalocker.controls[this.name][controlName] ) {
                throw new $.pandalocker.error('Control "' + controlName + '" not found in the group "' + this.name + '"');
            }
            
            var control = this.createControl(controlName);
            this.controls.push( control );
        }
    };
    
    /**
     * Creates a specified control.
     */
    group.createControl = function( controlName ) {
        var control = $.pandalocker.tools.extend( $.pandalocker.controls[this.name][controlName] );
        
        var optionsName = $.pandalocker.tools.camelCase( controlName );
        var controlOptions = this.options[optionsName] || {};
        
        control.init( this, controlOptions );
        return control;
    };
    
    /**
     * Requests the state of a locker.
     */
    group.requestState = function( callback ){
        
        var controlsCount = this.controls.length;
        var currentState = 'locked';

        for( var i = 0; i < this.controls.length; i++ ) {  
            this.controls[i].requestState(function( state ){
                controlsCount--;
                if ( 'unlocked' === state ) currentState = state;
                if ( controlsCount <= 0 ) callback( currentState );
            });
        }
    };
    
    /**
     * Checks wheither this group is ready for work.
     * For examplle, has any buttons available for the user to click.
     */
    group.canLock = function() {
        return true;
    };
    
    /**
     * Renders a group.
     */
    group.renderGroup = function( $holder ) {
        
        var $group = $("<div class='onp-sl-group onp-sl-" + this.name + "'></div>");
        $group.appendTo( $holder );
        
        var $innerWrap = $("<div class='onp-sl-group-inner-wrap'></div>");
        $innerWrap.appendTo( $group );
        
        if ( this.isFirst ) $group.addClass( 'onp-sl-first-group' );
        else if ( this.isLast ) $group.addClass( 'onp-sl-last-group' );
        else $group.addClass( 'onp-sl-middle-group' );
        
        $group.addClass( this.isSingle ? 'onp-sl-single-group' : 'onp-sl-not-single-group' );
        
        $group.addClass( 'onp-sl-group-index-' + this.options.index ); 

        this.element = $group;
        this.innerWrap = $innerWrap;
        
        this.renderSeparator();

        if ( this.options.text.header || this.options.text.message ) {
            var resultText = $("<div class='onp-sl-text'></div>").appendTo(this.innerWrap);
            
            if (this.options.text.header) 
                resultText.append(this.options.text.header.addClass('onp-sl-header onp-sl-strong').clone());
            
            if (this.options.text.message)
                resultText.append(this.options.text.message.addClass('onp-sl-message').clone()); 
                
        }

        this._isRendered = true;
        this.render( this.innerWrap );
    };

    /**
     * The child method which should be overwritten.
     */
    group.render = function(){
        this.renderControls( this.innerWrap  ); 
    };
    
    /**
     * Sends a signal to the locker that the content should be unlocked.
     */
    group.unlock = function( sender, sernderName, value ) {
        this.locker.unlock( sender, sernderName, value );
    };
    
    /**
     * Sets a new state for a given group control.
     */
    group.setState = function( state, senderType, sernderName ) {
        this.locker.setState( state, senderType || 'group', sernderName || this.name );
    }; 
    
    /**
     * Renders the group controls.
     */
    group.renderControls = function( $innerWrap ) {
        
        for( var i = 0; i < this.controls.length; i++ ) {  
            this.controls[i].renderControl( $innerWrap );
        }
    };
    
    group.showError = function( name, text ) {
        
        // if the group has been not yet rendered, 
        // then pass processing of the error to the locker
        
        if ( !this._isRendered ) {
            
            this.locker._showError( name, text );
        
        // if the group has been rendered,
        // then shows the error as a part of the group html
        
        } else {
            
            this.element.find('.onp-sl-group-error').remove();

            if ( this._currentErrorFor === name ) {

                this.element.find('.onp-sl-group-error').remove();
                this._currentErrorFor = null;

            } else {

                var $error = $("<div class='onp-sl-group-error'>" + text + "</div>");
                this.innerWrap.append( $error ); 

                this._currentErrorFor = name;    
            }
            
            this.runHook('size-changed');
        }
    };
    
    /**
     * Adds a CSS class to locker.
     * @returns {undefined}
     */
    group.addClassToLocker = function( className ) {
        this.locker._addClass( className );
    };
    
    // --------------------------------------------------------------
    // Notices
    // --------------------------------------------------------------   
    
    /**
     * Shows a notice.
     */
    group.showNotice = function( text, expires, callback ){
        
        this.element.find('.onp-sl-group-notice').remove();
        
        var $notice = $("<div class='onp-sl-group-notice'>" + text + "</div>").hide();
        this.innerWrap.append( $notice ); 
        $notice.fadeIn(500);
        
        if ( !expires ) expires = 7000;
        setTimeout(function(){
            if ( !$notice.length ) return;
            $notice.fadeOut( 800, function(){
                $notice.remove();
                callback && callback();
            } );
        }, expires);
    };
    
    // --------------------------------------------------------------
    // Separators
    // --------------------------------------------------------------
    
    /**
     * Renders a separator if needed.
     */
    group.renderSeparator = function() {
        
        // there's not any meaning to show the separator before first group
        if ( this.isFirst ) return;
        if ( this.options.separator === false ) return;
       
        var self = this;
        
        var options = this.options.separator;
        var type = options.type;
        
        this.element
            .addClass('onp-sl-has-separator')
            .addClass('onp-sl-has-' + type + '-separator');
        
        var $separator = $("<div class='onp-sl-group-separator onp-sl-" + type + "-separator'></div>");
        
        var titleTag = ( 'hiding-link' === type ) ? "<a href='#'></a>" : "<span></span>";
        var $text = $(titleTag).addClass('onp-sl-title').appendTo( $separator );
        
        $text.html( options.title || $.pandalocker.lang.misc_or );
        
        $separator.appendTo( this.innerWrap );
        
        if ( 'hiding-link' === type ) {
            this.element.addClass('onp-sl-separator-hides');
            
            var $container = $("<div class='onp-sl-hiding-link-container' style='display: none;'></div>");
            $container.appendTo( this.innerWrap );
            this.innerWrap = $container;
            
            $text.click(function(){
                self.element.removeClass('onp-sl-separator-hides');
                self.element.addClass('onp-sl-separator-shows');
                
                $separator.hide();
                $container.fadeIn(500);
                
                self.runHook('size-changed');
                return false;
            });
        }
    };
    
    // --------------------------------------------------------------
    // Events
    // --------------------------------------------------------------

    /**
    * Subscribes to the specified hook.
    */
    group.addHook = function( eventName, callback, priority ) {
        return this.locker.addHook( eventName, callback, priority );
    };

    /**
    * Runs the specified hook.
    */
    group.runHook = function( eventName, args ) {
        return this.locker.runHook( eventName, args );
    };

    /**
    * Subscribes to the specified hook.
    */
    group.addFilter = function( eventName, callback, priority ) {
        return this.locker.addFilter( eventName, callback, priority );
    };

    /**
    * Runs the specified hook.
    */
    group.applyFilters = function( eventName, input, args ) {
        return this.locker.applyFilters( eventName, input, args );
    };
    
    // --------------------------------------------------------------
    // Screens
    // --------------------------------------------------------------   

    group.showScreen = function( screenName, options ) {
        this.locker._showScreen( screenName, options );
    };
    
    group.registerScreen = function( screenName, factory ) {
        this.locker._registerScreen( screenName, factory );
    };
    
    $.pandalocker.entity.group = group;

})(jQuery);


;
(function($){
    'use strict';
    
    var group = $.pandalocker.tools.extend( $.pandalocker.entity.group );

    /**
     * Default options.
     */
    group._defaults = {
        
        // common url to like/share
        url: null,

        // horizontal or vertical
        layout: 'horizontal',
        
        // adds the covers of the buttons
        flip: false,

        // an order of the buttons, available buttons:
        // -
        // twitter: twitter-tweet, twitter-follow
        // facebook: facebook-like, facebook-share
        // google: google-plus, google-share
        // -
        order: [
            "twitter-tweet", 
            "facebook-like",
            "google-plus"
        ],

        // hide or show counters for the buttons
        counters: true,

        // Facebook Options
        facebook: {

            // sdk version to load (v1.0, v2.0)
            version: 'v2.5',

            like: {
                title: $.pandalocker.lang.socialButtons.facebookLike
            },
            share: {
                title: $.pandalocker.lang.socialButtons.facebookShare
            }
        },

        // Twitter Options
        twitter: {

            tweet: {
                title: $.pandalocker.lang.socialButtons.twitterTweet
            },
            follow: {
                title: $.pandalocker.lang.socialButtons.twitterFollow
            }
        },

        // Google Options
        google: {

            plus: {
                title: $.pandalocker.lang.socialButtons.googlePlus
            },
            share: {
                title: $.pandalocker.lang.socialButtons.googleShare
            }
        }, 
        
        // Youtube Options
        youtube: {
            title: $.pandalocker.lang.socialButtons.youtubeSubscribe
        },
        
        // --
        // LinkedIn Options
        linkedin: {

            // - Separeted options for each buttons.

            share: {
                title: $.pandalocker.lang.socialButtons.linkedinShare 
            }
        }
    };

    /**
     * The name of the group.
     */
    group.name = "social-buttons";
    
    /**
     * Prepares the group options.
     */
    group.prepareOptions = function() {
        
        this.options.lang = this.locker.options.lang;

        if ( 'horizontal' !== this.options.layout && 'vertical' !== this.options.layout ) {
            this.options.layout = 'horizontal';
        }
        
        // remove a google share button for mobile devices
        /**
        if ( $.pandalocker.tools.isTabletOrMobile() ) {
            var googleIndex = $.inArray("google-share", this.options.order);   
            if (googleIndex >= 0) this.options.order.splice(googleIndex, 1);
        }
        */
       
        this.options.url = this.options.url || this.locker.options.url;

        // adapter for the old version of the social locker

        // for social buttons
        if ( this.locker.options.buttons ) {
            if ( this.locker.options.buttons.order ) this.options.order = this.locker.options.buttons.order;
            if ( typeof this.locker.options.buttons.counters !== "undefined" ) this.options.counters = this.locker.options.buttons.counters;
        }

        // for social keys
        if ( this.locker.options.facebook ) this.options.facebook = $.extend(  true, this.options.facebook, this.locker.options.facebook );
        if ( this.locker.options.twitter ) this.options.twitter = $.extend(  true, this.options.twitter, this.locker.options.twitter );
        if ( this.locker.options.google ) this.options.google = $.extend(  true, this.options.google, this.locker.options.google );
        if ( this.locker.options.linkedin ) this.options.linkedin = $.extend(  true, this.options.linkedin, this.locker.options.linkedin );
        if ( this.locker.options.youtube ) this.options.youtube =  $.extend(  true, this.options.youtube, this.locker.options.youtube );
    };
    
    /**
     * Renders the group.
     * @returns {undefined}
     */
    group.render = function() {

        this.element.addClass( this.options.counters  ? 'onp-sl-has-counters' : 'onp-sl-no-counters');
        this.element.addClass( 'onp-sl-' + this.options.layout );
        this.element.addClass( 'onp-sl-lang-' + this.options.lang );

        this.renderControls( this.innerWrap  ); 
    };
    
    /**
     * Creates a specified control.
     */
    group.createControl = function( controlName ) {
        
        var control = $.pandalocker.tools.extend( $.pandalocker.controls[this.name][controlName] );
        
        var parts = controlName.split('-');
        var networkName = parts.length === 2 ? parts[0] : null;
        var buttonName = parts.length === 2 ? parts[1] : parts[0];
        
        var controlOptions = {};

        if ( networkName  ) {
            if ( this.options[networkName] ) controlOptions = $.extend({}, this.options[networkName]);
            if ( this.options[networkName][buttonName] ) controlOptions = $.extend(controlOptions, this.options[networkName][buttonName] );
        } else {
            if ( this.options[buttonName] ) controlOptions = $.extend(controlOptions, this.options[buttonName] );                    
        }
        
        var networkOptions = networkName ? this.options[networkName] : {};

        networkOptions.lang = this.options.lang;
        networkOptions.counters = this.options.counters;
        networkOptions.url = networkOptions.url || this.options.url;
  
        control.init( this, controlOptions, networkOptions );
        return control;
    },
    
    /**
     * Checks wheither this group is ready for work.
     */
    group.canLock = function() {

        // unlock the locker if no buttons are defined
        if (this.options.order.length === 0) {
            return false;
        }
        
        return true;
    };

    $.pandalocker.groups["social-buttons"] = group;
    
})(jQuery);;
(function($){
    'use strict';

    var socialButton = $.pandalocker.tools.extend( $.pandalocker.entity.control );
    
    /**
     * The social buttons additionally have to get the networks option.
     * So we overwrite the original init method.
     */
    socialButton.init = function( group, options, networkOptions ) {
        this.networkOptions = networkOptions;

        var parts = this.name.split('-');

        this.networkName = this.sdk ? this.sdk : parts.length === 2 ? parts[0] : null;
        this.buttonName = parts.length === 2 ? parts[1] : parts[0];

        $.pandalocker.entity.control.init.call( this, group, options );
        
        if ( this.networkName ) {
            this._ssIdentity = "page_" + $.pandalocker.tools.hash(this.url) + "_hash_" + this.networkName + "-" + this.buttonName;   
        } else {
            this._ssIdentity = "page_" + $.pandalocker.tools.hash(this.url) + "_hash_" + this.buttonName; 
        }
    },
    
    /**
     * The funtions which returns an URL to like/share for the button.
     * Uses the options and a current location to determine the URL.
     */
    socialButton._extractUrl = function() {
        return $.pandalocker.tools.URL.normalize( this.options.url || this.networkOptions.url || window.location.href );
    };
    
    /**
     * Shows the control in the specified holder.
     */
    socialButton.render = function( $holder ) {
        var self = this;

        if ( this.networkName )
            this.control.addClass('onp-sl-' + this.networkName );
        
        this.container = $("<div class='onp-sl-social-button onp-sl-social-button-" + this.name + "'></div>");
        this.container.appendTo( $holder );

        if ( !this._hasError() ) {
            
            this._setLoadingState();
            
            var render = function(){
                var sdkResult = self.requireSdk( self.networkName, self.networkOptions );

                // error fired
                sdkResult.fail(function( error ){
                    self._removeLoadingState();
                    self.showError( error );
                });

                // loaded successfully
                sdkResult.done(function(){

                    self.setupEvents();
                    self.renderButton( self.container );

                    // waiting creating a button   
                    self.verifyButton()
                        .always(function(){ self._removeLoadingState(); })
                        .fail(function( error ){ self.showError( error ); });      
                });
            };

            if ( this.locker.options.lazy ) {

                this.addHook('raw-impress', function(){
                    
                    if ( self._rendered ) return;
                    self._rendered = true;
                    render();
                })
            } else {
                render();
            }
        }

        // adds support for the flip effect if it's needed
        this._addFlipEffect();
    };

    
    /**
     * Adds the Flip Effect.
     */
    socialButton._addFlipEffect = function() {
        var $control = this.control;
        var $innerWrap = this.innerWrap;
        
        var flipEffect = this.group.options.flip;
        var flipSupport = $.pandalocker.tools.has3d();

        // addes the flip effect
        (flipEffect && flipSupport && $control.addClass("onp-sl-flip")) || $control.addClass("onp-sl-no-flip");
        if (!flipEffect) return true;

        var title = this.options.title || (this.networkName 
            ? $.pandalocker.lang[this.networkName + "_" + this.buttonName]
            : $.pandalocker.lang[this.networkName]);

        var overlay = $("<a href='#'></a>")
              .addClass("onp-sl-button-overlay") 

              .append($("<div class='onp-sl-overlay-back'></div>"))
              .append(
               $("<div class='onp-sl-overlay-front'></div>")
                    .append($("<div class='onp-sl-overlay-icon'></div>"))
                    .append($("<div class='onp-sl-overlay-line'></div>"))               
                    .append($("<div class='onp-sl-overlay-text'>" + title + "</div>"))
               )
              .append($("<div class='onp-sl-overlay-header'></div>"));

        overlay.prependTo($innerWrap);
        
        if ( !flipSupport ) { 
            $control.hover(
                function () {
                    var overlay = $(this).find(".onp-sl-button-overlay");
                    overlay.stop().animate({ opacity: 0 }, 200, function () {
                        overlay.hide();
                    });
                },
                function () {
                    var overlay = $(this).find(".onp-sl-button-overlay").show();
                    overlay.stop().animate({ opacity: 1 }, 200);
                }
            );
        }

        // if it's a touch device
        if ($.pandalocker.isTouch()) {

            // if it's a touch device and flip effect enabled.
            if (flipSupport) {

                overlay.click(function () {
  
                    if ($control.hasClass('onp-sl-flip-hover')) {
                        $control.removeClass('onp-sl-flip-hover');
                    } else {
                        $('.onp-sl-flip-hover').removeClass('onp-sl-flip-hover');
                        $control.addClass('onp-sl-flip-hover');
                    }

                    return false;
                });

            // if it's a touch device and flip effect is not enabled.
            } else {

                overlay.click(function () {
                    var overlay = $(this);
                    overlay.stop().animate({ opacity: 0 }, 200, function () {
                        overlay.hide();
                    });

                    return false;
                });
            }
        } 

        // every next button has the zindex less a previos button
        
        if ( !this.group._buttonsZIndex ) this.group._buttonsZIndex = 54;
        this.group._buttonsZIndex = this.group._buttonsZIndex - 4;
        var zIndex = this.group._buttonsZIndex;
        
        $control.css('z-index', zIndex);
        
        if ( overlay ) {
            overlay.css('z-index', zIndex);
            overlay.find('.onp-sl-overlay-front').css('z-index', 1);
            overlay.find('.onp-sl-overlay-back').css('z-index', -1);  
            overlay.find('.onp-sl-overlay-header').css('z-index', 1 );                  
        }
    };

    
    /**
     * Returns an indentity for the state storage.
     */
    socialButton._getStorageIdentity = function() {
        return this._ssIdentity; 
    };
    
    /**
     * Options to verify that the button has been rendered.
     */
    socialButton.verification = {
        container: 'iframe',
        timeout: 5000
    };

    $.pandalocker.entity.socialButton = socialButton;
    
})(jQuery);;
/*!
 * Facebook SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    if (!$.onepress) $.onepress = {};
    if (!$.pandalocker.sdk) $.pandalocker.sdk = {};

    $.pandalocker.sdk.facebook = $.pandalocker.sdk.facebook || {
        
        // a name of a social network
        name: 'facebook',
        
        // a script to load (v1.0)
        url1: '//connect.facebook.net/{lang}/all.js',
        
        // a script to load (v2.0)
        url2: '//connect.facebook.net/{lang}/sdk.js',    
        
        // a script id to set
        scriptId: 'facebook-jssdk',

        // a timeout to load
        timeout: 10000,
        
        /**
         * Returns true if an sdk is currently loaded.
         * 
         * @since 1.5.5
         * @returns boolean
         */
        isLoaded: function () {
            return (typeof (window.FB) === "object");
        },
        
        /**
         * Creates fb-root element before calling a Facebook sdk.
         * 
         * @since 1.5.5
         * @returns void
         */
        prepare: function () {

            // root for facebook sdk
            $("#fb-root").length === 0 && $("<div id='fb-root'></div>").appendTo($("body"));

            // sets sdk language
            var lang = (this.options && this.options.lang) || "en_US";

            this.url1 = this.url1.replace("{lang}", lang);
            this.url2 = this.url2.replace("{lang}", lang);
            
            this.url = this.options.version === 'v1.0' ? this.url1 : this.url2;
            
            /**
            var checker = function(e){

                console.log(e);  
                console.log(e.data);    
            };
            console.log('ff');
            window.addEventListener 
                ? window.addEventListener("message", checker, false) 
                : window.attachEvent("onmessage", checker);
            */
        },
        
        _setup: false,
        
        /**
         * Executed when SDK is loaded.
         */
        setup: function() {
            if ( this._setup ) return;
            var self = this;
            
            window.FB.init({
                appId: (self.options && self.options.appId) || null,
                status: true,
                cookie: true,
                xfbml: true,
                version: self.options.version
            });

            window.FB.Event.subscribe('edge.create', function (url) {
                $(document).trigger('onp-sl-facebook-like', [url]);
            });

            // the initialization is executed only one time.
            // any others attempts will call an empty function.
            window.FB.init = function () { };
            $(document).trigger(self.name + '-init');
            
            this._setup = true;
        },
        
        /**
         * Creates subscribers for Facebook evetns.
         * 
         * @returns void
         */
        createEvents: function () {
            var self = this;
            var isLoaded = this.isLoaded();

            if (isLoaded) {
                self.setup();
            } else {
                if (window.fbAsyncInit) var predefined = window.fbAsyncInit;
                window.fbAsyncInit = function () {
                    self.setup(); predefined && predefined();
                    window.fbAsyncInit = function () { };
                };
            }
        }
    };

})(jQuery);;
/*!
 * Twitter SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    if (!$.onepress) $.onepress = {};
    if (!$.pandalocker.sdk) $.pandalocker.sdk = {};

    $.pandalocker.sdk.twitter = $.pandalocker.sdk.twitter || {
        
        // a name of a social network
        name: 'twitter',
        // a script to load
        url: '//platform.twitter.com/widgets.js',
        // a script id to set
        scriptId: 'twitter-wjs',
        // a timeout to load
        timeout: 10000,
        
        /**
         * Returns true if an sdk is currently loaded.
         * 
         * @since 1.5.5
         * @returns boolean
         */
        isLoaded: function () {
            return (typeof (window.__twttrlr) !== "undefined");
        },

        /**
         * Creates subscribers for Twitter events.
         * 
         * @returns void
         */
        createEvents: function () {
            var self = this;
            var isLoaded = this.isLoaded();
            
            
            var load = function () {
                
                /*
                if ( $.pandalocker.browser.msie && ( $.pandalocker.browser.version >= 8 ) ) { 
                    window.twttr.events.bind('click', function (event) {
                        
                        setTimeout(function(){
                            $(document).trigger('onp-sl-twitter-tweet', [event]);
                        }, 6000);
                        
                        setTimeout(function(){
                            $(document).trigger('onp-sl-twitter-follow', [event]);
                        }, 3000);
                    });  
                }

                window.twttr.events.bind('tweet', function (event) {
                    $(document).trigger('onp-sl-twitter-tweet', [event]);
                });
                window.twttr.events.bind('follow', function (event) {
                    $(document).trigger('onp-sl-twitter-follow', [event]);
                });
                 */
                
                $(document).trigger(self.name + '-init');
            };

            if (isLoaded) { load(); return; }

            if (!window.twttr) window.twttr = {};
            if (!window.twttr.ready) window.twttr = $.extend(window.twttr, { _e: [], ready: function (f) { this._e.push(f); } });
            
            twttr.ready(function (twttr) { load(); });
        },

        prepare: function() {

            var checker = function(e){

                if ( !e && !e.data ) return;
                if (typeof e.data !== 'string') return;            

                if ( e.data.indexOf(':["tweet"') !== -1 ) return $(document).trigger('onp-sl-twitter-tweet');
                if ( e.data.indexOf(':["follow"') !== -1 ) return $(document).trigger('onp-sl-twitter-follow');                
            };

            window.addEventListener 
                ? window.addEventListener("message", checker, false) 
                : window.attachEvent("onmessage", checker);

        }
    };

})(jQuery);;
/*!
 * Google SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    if (!$.onepress) $.onepress = {};
    if (!$.pandalocker.sdk) $.pandalocker.sdk = {};

    $.pandalocker.sdk.google = $.pandalocker.sdk.google || {
        
        // a name of a social network
        name: 'google',
        // a script to load
        url: '//apis.google.com/js/plusone.js',
        // a script id to set
        scriptId: 'google-jssdk',
        // a timeout to load
        timeout: 10000,
        
        /**
         * Returns true if an sdk is currently loaded.
         * 
         * @since 1.5.5
         * @returns boolean
         */
        isLoaded: function () {
            return (typeof (window.gapi) === "object");
        },

        /**
         * Creates a function for Google callbacks.
         * 
         * @since 1.5.5
         * @returns void
         */
        prepare: function () {
            var self = this;
            self.notAuthed = false;
            
            // sets sdk language
            var lang = (this.options && this.options.lang) || "en";
            window.___gcfg = window.___gcfg || { lang: lang };

            window.OPanda_GooglePlusOne_Callback = function (data) {
                if (data.state === "on") $(document).trigger('onp-sl-google-plus', [data.href]);
            };
            
            window.OPanda_GoogleShare_StartInteraction = function (data) {
                $.pandalocker.data.__googleShareUrl = data.id;
            };    
            
            if ( !$.pandalocker.tools.isTabletOrMobile() ) {
                
                var checker = function(e){
                    if ( !e && !e.data ) return;

                    if (typeof e.data !== 'string') return;            
                    if ( e.data.indexOf('oauth2relay') !== -1 ) return;

                    if ( e.data.indexOf('::drefresh') !== -1 ) {
                        self.notAuthed = true;
                        return;
                    }

                    if ( e.data.indexOf('::_g_wasClosed') !== -1 || e.data.indexOf('::_g_closeMe') !== -1 ) {
                        if ( self.notAuthed ) { self.notAuthed = false; return; }
                        $(document).trigger('onp-sl-google-share');
                    }           
                };

                window.addEventListener 
                    ? window.addEventListener("message", checker, false) 
                    : window.attachEvent("onmessage", checker); 
            }
        }
    };

})(jQuery);;
/*!
 * Google Client SDK
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    if (!$.onepress) $.onepress = {};
    if (!$.pandalocker.sdk) $.pandalocker.sdk = {};

    $.pandalocker.sdk.googleClient = $.pandalocker.sdk.googleClient || {
        
        // a name of a social network
        name: 'google-client',
        // a script to load
        url: '//apis.google.com/js/client:platform.js?onload=OPanda_GoogleClient_Callback',
        // a script id to set
        scriptId: 'google-client-jssdk',
        // a timeout to load
        timeout: 10000,
        
        /**
         * Returns true if an sdk is currently loaded.
         * 
         * @since 1.5.5
         * @returns boolean
         */
        isLoaded: function () {
            return ( window.gapi && typeof (window.gapi.auth) === "object");
        },

        /**
         * Creates a function for Google callbacks.
         */
        prepare: function () {
            var self = this;
            window.OPanda_GoogleClient_Callback = function(){
                $(document).trigger(self.name + "-script-loaded");
            };
        }
    };   
})(jQuery);;
/*!
 * LinkedIn SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    if (!$.onepress) $.onepress = {};
    if (!$.pandalocker.sdk) $.pandalocker.sdk = {};

    $.pandalocker.sdk.linkedin = $.pandalocker.sdk.linkedin || {
        
        // a name of a social network
        name: 'linkedin',
        // a script to load
        url: '//platform.linkedin.com/in.js',
        // a script id to set
        scriptId: 'linkedin-jssdk',
        // a timeout to load
        timeout: 10000,
        
        /**
         * Returns true if an sdk is currently loaded.
         * 
         * @since 1.5.5
         * @returns boolean
         */
        isLoaded: function () {
            return (typeof (window.IN) === "object");
        },

        /**
         * Creates callback for linkedin.
         * 
         * @since 1.5.5
         * @returns void
         */
        prepare: function () {

            window.OPanda_LinkedinShare_Callback = function (data) {
                $(document).trigger('onp-sl-linkedin-share', [data]);
            };

            // #SLJQ-26: A fix for the LinkedIn button.
            // Saves a link to the current share windlow.
            
            var funcOpen = window.open;
            window.open = function(url,name,params){

                var winref = funcOpen(url,name,params);
                if ( !winref ) return winref;
                
                var windowName = name || winref.name;
                if ( !windowName ) return winref;
                if ( windowName.substring(0,10) !== "easyXDM_IN" ) return winref;
                
                $.pandalocker.sdk.linkedin._activePopup = winref;
            };
        }
    };

})(jQuery);;
/*!
 * Facebook Like Button
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "facebook-like";

    button._defaults = {

        // URL to like/share
        url: null,

        // Button layout, available: standart, button_count, box_count. 
        // By default 'standard'.
        layout: 'button_count',
        // Button container width in px, by default 450.
        width: null,
        // The verb to display in the button. Only 'like' and 'recommend' are supported. By default 'like'.
        verbToDisplay: "like",
        // The color scheme of the plugin. By default 'light'.
        colorScheme: "light",
        // The font of the button. By default 'tahoma'.
        font: 'tahoma',
        // A label for tracking referrals.
        ref: null,

        // #SLJQ-29: turn on this option if you see the 
        // "confim link" after click the Like button.
        theConfirmIssue: false
    };

    button.prepareOptions = function() {
        this.url = this._extractUrl();

        if ( "vertical" === this.groupOptions.layout ) {
            this.options.layout = 'box_count';
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.layout = 'button';
            }
        }        
    };
    
    /**
     * Setups hooks.
     */
    button.setupHooks = function() {
        var self = this;
        
        this.addHook('markup-created', function(){
            self._startTrackIFrameSizes();
        });
        
        this.addHook('before-show-content', function(){
            self._stopTrackIFrameSizes();
        });
    };
        
    /**
     * Setups events.
     */
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-facebook-like', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;
            self.unlock("button", self.name, self.url );
        });
    };
        
    /**
     * Renders the button.
     */
    button.renderButton = function( $holder ) {

        this.button = $("<div></div>").appendTo( $holder );

        this.button.attr("data-show-faces", false);
        this.button.attr("data-send", false); 

        this.button.attr("data-href", this.url);
        if (this.options.font) this.button.attr("data-font", this.options.font);
        if (this.options.colorScheme) this.button.attr("data-colorscheme", this.options.colorScheme);
        if (this.options.ref) this.button.attr("data-ref", this.options.ref);
        if (this.options.width) this.button.attr("data-width", this.options.width);
        if (this.options.layout) this.button.attr("data-layout", this.options.layout);
        if (this.options.verbToDisplay) this.button.attr("data-action", this.options.verbToDisplay);

        this.button.addClass('fb-like');  
        window.FB.XFBML.parse( $holder[0] );
    };
    
    // --------------------------------------------------------------
    // Tracking changes the iframe size for more quickly unlocking
    // --------------------------------------------------------------

    button._startTrackIFrameSizes = function () {
        
        // #SLJQ-29: don't use the way based on measuring the frame size 
        // to check whether the user clicked the button
        if ( this.options.theConfirmIssue ) return;

        var self = this;
        this._trackIFrameTimer = null;

        this.locker.locker.hover(
            function(){

                var $iframe = self.control.find("iframe");
                if ( !$iframe.length ) return;

                self._trackIFrameTimer = setInterval(function(){
                   var cssHeight = parseInt( $iframe[0].style.height );
                   if ( !cssHeight ) cssHeight = $iframe.height();

                   if ( cssHeight > 200 ) {
                        self._stopTrackIFrameSizes();
                        $(document).trigger('onp-sl-facebook-like', [self.url]);
                   }
                }, 500);
            },
            function(){
                self._stopTrackIFrameSizes();
            }
        );
    },

    button._stopTrackIFrameSizes = function() {
        if ( this._trackIFrameTimer ) clearInterval( this._trackIFrameTimer ); 
    };
    
    $.pandalocker.controls["social-buttons"]["facebook-like"] = button;
    
})(jQuery);;
/*!
 * Facebook Share Button
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "facebook-share";

    button._defaults = {

        // URL to share
        url: null,
             
        // button_count, button, box_count
        layout: 'button_count',
        // set to 'none' to hide the count box
        count: 'standard',
        // Language of the button labels. By default en_US.
        lang: 'en_US',
        // Button container width in px, by default 450.
        width: null,
        
        // if set, then use the Share Dialog
        shareDialog: false,
        
        // data to share
        name: null,
        caption: null,
        description: null,
        image: null,

        // unlock event
        unlock: null
    };

    button.prepareOptions = function() {
        this.url = this._extractUrl();
        
        if( !this.options.appId || this.options.appId == "117100935120196" ) {
            this.showError( $.pandalocker.lang.errors.emptyFBAppIdError );
            return false;
        }

        if ( "vertical" === this.groupOptions.layout ) {
            this.options.layout = 'box_count';
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.layout = 'button';
            }
        }
    };
        
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-facebook-share', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;
            self.unlock("button", self.name, self.url );
        });
    };
        
    button.renderButton = function( $holder ) {
        
        var self = this;

        this.button = $("<div></div>").appendTo( $holder );

        this.button.attr("data-href", this.url);
        if (this.options.width) this.button.attr("data-width", this.options.width);
        if (this.options.layout) { 
            this.button.attr("data-layout", this.options.layout); 
            this.button.attr("data-type", this.options.layout); 
        }

        var overlay = $("<div class='onp-sl-facebook-share-overlay'></div>").appendTo( $holder );

        if ( self.options.shareDialog ) {

            overlay.click(function(){
                FB.ui(
                    {
                        method: 'share',
                        href: self.url,
                        display: 'popup'
                    },
                    function(response) {
                        console && console.log && console.log('AX12:');
                        console && console.log && console.log(response);
                        
                        if ( $.pandalocker.tools.isTabletOrMobile() && typeof response === "undefined" || response === null  ) {
                            $(document).trigger('onp-sl-facebook-share', [self.url]);
                            return;
                        }
                        
                        if ( typeof response === "undefined" || response === null ) return;
                        if ( typeof response === "object" && response.error_code && response.error_code > 0 ) return; 
                    
                        $(document).trigger('onp-sl-facebook-share', [self.url]);
                    }
                );                
                return false;
            }); 
            
        } else {

            overlay.click(function(){
                FB.ui(
                {
                     method: 'feed',
                     name: self.options.name,
                     link: self.url,
                     picture: self.options.image,
                     caption: self.options.caption,
                     description: self.options.description
                },
                function(response) {
                    console && console.log && console.log('AX12:');
                    console && console.log && console.log(response);
                    
                    if ( $.pandalocker.tools.isTabletOrMobile() && typeof response === "undefined" || response === null  ) {
                        $(document).trigger('onp-sl-facebook-share', [self.url]);
                        return;
                    }
                        
                    if ( typeof response === "undefined" || response === null )return;
                    if ( typeof response === "object" && response.error_code && response.error_code > 0 ) return;       
                    
                    $(document).trigger('onp-sl-facebook-share', [self.url]);
                }
                );                
                return false;
            });
        }

        this.button.addClass('fb-share-button');  
        window.FB.XFBML.parse($holder[0]);
    };
    
    $.pandalocker.controls["social-buttons"]["facebook-share"] = button;
    
})(jQuery);;
/*!
 * Twitter Tweet
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';
    
    if ( !$.pandalocker.data ) $.pandalocker.data = {};
    
    $.pandalocker.data.__tweetedUrl = null;
    $.pandalocker.data.__tweetWindow = null;
    
    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "twitter-tweet";

    button.verification = {
        container: 'iframe',
        timeout: 600000
    };
    
    button._defaults = {
        
        // if true, checks wheither the user tweeted
        doubleCheck: false,
        
        // URL of the page to share.
        url: null,

        // Default Tweet text
        text: null,
        // Screen name of the user to attribute the Tweet to
        via: null,
        // Related accounts
        related: null,
        // Count box position (none, horizontal, vertical)
        count: 'horizontal',
        // The language for the Tweet Button
        lang: 'en',
        // URL to which your shared URL resolves
        counturl: null,
        // The size of the rendered button (medium, large)
        size: 'medium'
    };

    button.prepareOptions = function() {

        if (!this.options.url && !this.networkOptions.url && $("link[rel='canonical']").length > 0)
            this.options.url = $("link[rel='canonical']").attr('href');

        this.url = this._extractUrl();
        
        if ( "vertical" === this.groupOptions.layout ) {
            this.showError( $.pandalocker.lang.errors.unsupportedTwitterTweetLayout );
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.count = 'none';
            }
        }
        
        if ( this.groupOptions.lang ) {
            var langParts = this.groupOptions.lang.split('_');
            this.options.lang = langParts[0];
        }
        
        if ( !this.options.text ) {
            var $title = $("title");
            
            if ( $title.length > 0 ) {
                this.options.text = $($title[0]).text();
            } else {
                this.options.text = "";
            }
        }
    };
        
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-twitter-tweet', function () {
            if ( self.url !== $.pandalocker.data.__tweetedUrl ) return;
            
            if ( $.pandalocker.data.__tweetWindow && $.pandalocker.data.__tweetWindow.close ) $.pandalocker.data.__tweetWindow.close();
            $.pandalocker.data.__tweetWindow = null;
            
            self.unlock("button", self.name, self.url );
        });
    };
 
    button.renderButton = function( $holder ) {
        var self = this;

        this.button = $('<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>').appendTo( $holder );
        this.button.attr("data-url", this.url);

        this.button.attr("data-show-count", this.options.showCount);
        if (this.options.via) this.button.attr("data-via", this.options.via);
        if (this.options.text) this.button.attr("data-text", this.options.text);
        if (this.options.lang) this.button.attr("data-lang", this.options.lang);
        if (this.options.hashtags) this.button.attr("data-hashtags", this.options.hashtags);
        if (this.options.size) this.button.attr("data-size", this.options.size);
        if (this.options.dnt) this.button.attr("data-dnt", this.options.dnt);
        
        var overlay = $("<div class='onp-sl-feature-overlay'></div>").appendTo( $holder );
        
        overlay.click(function(){
            var result = self.tweet( self.options.doubleCheck );
            result.done(function(){
                $(document).trigger('onp-sl-twitter-tweet', [self.url]);
            });
        });
            
        // our original markup will be fully replaced with the iframe created 
        // by Twitter, so we cannot to bind the data required to verify 
        // tweeting on the button, we need to bind this data on the parent element
        
        $holder.data('url-to-verify', self.url);

        var attemptCounter = 5;

        // Chrome fix
        // If there is SDK script on the same page that is loading now when a tweet button will not appear.
        // Setup special timeout function what will check 5 times when we can render the twitter button.
        var timoutFunction = function () {
            if ($holder.find('iframe').length > 0) return;

            if (window.twttr.widgets && window.twttr.widgets.load) {
                window.twttr.widgets.load($holder[0]);
            } else {
                if (attemptCounter <= 0) return;
                attemptCounter--;

                setTimeout(function () {
                    timoutFunction();
                }, 1000);
            }
        };

        timoutFunction();
    };
    
    button.tweet = function( doubleCheck ) {
        
        var self = this;
        var def = $.Deferred();
        
        // tweet through oauth
        
        if ( doubleCheck ) {
            
            this.connect( function( data ){

                var tweetResult = self.tweet( false );
                
                tweetResult.done( function() {
                    var checkResult = self.checkTweet( self.url );
                    
                    checkResult.done( function(){
                        def.resolve();
                    });
                    
                    checkResult.fail(function(){
                        self.showNotice( $.pandalocker.lang.errors.tweetNotFound );
                    });
                });
            });
 
            return def;
        }
        
        // tweet through popup

        var args = [];

        if ( self.options.text ) {
            var safeText = encodeURI( self.options.text );
            safeText = safeText.replace(/#/g, '%23');
            safeText = safeText.replace(/\|/g, "-");
            safeText = safeText.replace(/\&/g, "%26");
            args.push(['text', safeText]);
        }

        if ( self.options.hashtags ) args.push(['hashtags', self.options.hashtags]);
        if ( self.options.via ) args.push(['via', self.options.via]);
        if ( self.options.related ) args.push(['via', self.options.related]);

        args.push(['url', self.url]);
        $.pandalocker.data.__tweetedUrl = self.url;

        var intentUrl = $.pandalocker.tools.URL()
            .scheme('http')
            .host('twitter.com')
            .path('/intent/tweet')
            .query(args)
            .toString();
    
        var width = 550;
        var height = 420;

        var x = screen.width ? (screen.width/2 - width/2 + $.pandalocker.tools.findLeftWindowBoundry()) : 0;
        var y = screen.height ? (screen.height/2 - height/2 + $.pandalocker.tools.findTopWindowBoundry()) : 0;

        if ( $.pandalocker.data.__twitterAuth && $.pandalocker.data.__twitterAuth.closed === false ) {
            $.pandalocker.data.__twitterAuth.updateState( intentUrl, width, height, x, y );
           
            $.pandalocker.data.__tweetWindow = $.pandalocker.data.__twitterAuth;
            $.pandalocker.data.__twitterAuth = null;
            
        } else {
            $.pandalocker.data.__tweetWindow = window.open(intentUrl, "TwitterTweetWindow", "width=" + width + ",height=" + height + ",left="+x+",top="+y);
        }

        setTimeout(function(){

            var pollTimer = setInterval(function() {
                if ( !$.pandalocker.data.__tweetWindow || $.pandalocker.data.__tweetWindow.closed !== false ) {
                    clearInterval(pollTimer);
                    def.resolve();
                }
            }, 200);
        }, 200);

        return def.promise();
    };
    
    /**
     * Connects the user via Faceboook.
     */
    button.connect = function( callback ) {
        var self = this;
        
        if ( $.pandalocker.data.twitterOAuthReady ) {
            
            if ( $.pandalocker.data.__twitterAuthIdentityData ) {
                callback( $.pandalocker.data.__twitterAuthIdentityData, self._getServiceData() );
            } else {
                
                this._identify( function( identityData ){
                    callback( identityData, self._getServiceData() );
                });     
            }
            
        } else {
            
            // The fix for the issue #BIZ-41:
            // removes the proxy URL from the options because it fires the errors on some website

            var dataToSend = {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'init',
                'opandaKeepOpen': true,
                'opandaReadOnly': true
            };

            var visitorId = $.pandalocker.tools.cookie( 'opanda_twid' );
            if ( visitorId && visitorId !== 'null' ) dataToSend['opandaVisitorId'] = visitorId;
            
            var url = self.options.proxy;
            
            for ( var prop in dataToSend ) {
                if ( !dataToSend.hasOwnProperty(prop) ) continue;
                url = $.pandalocker.tools.updateQueryStringParameter( url, prop, dataToSend[prop] );
            }

            self._trackWindow('opandaHandler=twitter', function(){

                setTimeout( function(){
                    if ( $.pandalocker.data.twitterOAuthReady ) return;

                    self.runHook('raw-social-app-declined');
                    self.showNotice( $.pandalocker.lang.errors_not_signed_in );
                }, 500);
            });
            
            var width = 500;
            var height = 610;

            var x = screen.width ? (screen.width/2 - width/2 + $.pandalocker.tools.findLeftWindowBoundry()) : 0;
            var y = screen.height ? (screen.height/2 - height/2 + $.pandalocker.tools.findTopWindowBoundry()) : 0;
            
            $.pandalocker.data.__twitterAuth = window.open( url,
                "Twitter Tweet",
                "width=" + width + ",height=" + height + ",left="+x+",top="+y+",resizable=yes,scrollbars=yes,status=yes"
            );

            window.OPanda_TwitterOAuthCompleted = function( visitorId ){

                $.pandalocker.data.twitterOAuthReady = true;
                self._saveVisitorId( visitorId );
                self.connect( callback );
            };
            
             window.OPanda_TwitterOAuthDenied = function( visitorId ){

                self.runHook('raw-social-app-declined');
                self.showNotice( $.pandalocker.lang.errors_not_signed_in );
                self._saveVisitorId( visitorId );
            };       
        }
    };
    
    /**
     * Saves a visitor ID.
     */
    button._saveVisitorId = function( visitorId ) {
        
        this._visitorId = visitorId;
        $.pandalocker.data.__twitterVisitorId = visitorId; 
        $.pandalocker.tools.cookie( 'opanda_twid', visitorId, { expires: 1000, path: "/" } );
    };
    
    /**
     * Puts together service data required for the future requests.
     */
    button._getServiceData = function() {
        var self = this;
        return { visitorId: $.pandalocker.data.__twitterVisitorId };
    };
    
    /**
     * Identify the user.
     */
    button._identify = function( callback ) {
        var self = this;
        
        var req = $.ajax({
            type: "POST",
            dataType: "json",
            url: self.options.proxy,
            data: {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'user_info',
                'opandaVisitorId': $.pandalocker.data.__twitterVisitorId,
                'opandaReadOnly': true
            },
            success: function(data){
                
                console.log(data);
                
                if ( ( !data || data.error || data.errors ) && console && console.log ) {
                    console.log( 'Unable to get the user data: ' + req.responseText );   
                }
                
                var identity = {};
                identity.displayName = data.screen_name;
                identity.twitterUrl = 'https://twitter.com/' + data.screen_name;
                
                if ( data.profile_image_url ) {
                    identity.image = data.profile_image_url.replace('_normal', '');
                }
                
                $.pandalocker.data.__twitterAuthIdentityData = identity;                
                callback( identity );
            },
            error: function() {
                console && console.log && console.log( 'Unable to get the user data: ' + req.responseText );
                callback( {} );
            }
        });
    };
    
    button.checkTweet = function() {
        
        var self = this;
        var def = $.Deferred();
        
        var req = $.ajax({
            type: "POST",
            dataType: "json",
            url: self.options.proxy,
            data: {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'get_tweets',
                'opandaVisitorId': $.pandalocker.data.__twitterVisitorId,
                'opandaReadOnly': true
            },
            success: function(data){
                
                if ( ( !data || data.error || data.errors ) && console && console.log ) {
                    console.log( 'Unable to get the user data: ' + req.responseText );   
                }
                
                for (var i = 0; i < data.length; i++) {
                    if ( !data[i].entities ) continue;
                    
                    for (var n = 0; n < data[i].entities.urls.length ; n++) {
                        if ( !data[i].entities.urls[n] ) continue;
                        
                        if ( data[i].entities.urls[n].expanded_url === self.url ) {
                            def.resolve();
                            return;
                        }
                    }
                    
                }
                
                def.reject();
            },
            error: function() {
                console && console.log && console.log( 'Unable to get the user data: ' + req.responseText );
                callback( {} );
            }
        });
        
        return def.promise();
    };
    
    $.pandalocker.controls["social-buttons"]["twitter-tweet"] = button;
    
})(jQuery);;
/*!
 * Twitter Follow
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';
    
    if ( !$.pandalocker.data ) $.pandalocker.data = {};
    $.pandalocker.data.__followedUrl = null;
    $.pandalocker.data.__followWindow = null;
    
    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "twitter-follow";
    
    button.verification = {
        container: 'iframe',
        timeout: 600000
    };
    
    button._defaults = {
        
        // if true, checks wheither the user tweeted
        doubleCheck: false,
        
        // URL of the page to share.
        url: null,
        
        // The user's screen name shows up by default, but you can opt not to 
        // show the screen name in the button. 
        hideScreenName: false,
        // Followers count display
        showCount: true,
        // The language for the Tweet Button
        lang: 'en',
        // The size of the rendered button (medium, large)
        size: 'medium'
    };

    button.prepareOptions = function() {

        if ( !this.options.url || this.options.url.indexOf("twitter") === -1 ) {
            this.showError( $.pandalocker.lang.errors.emptyTwitterFollowUrlError );
            return false;
        }
        
        this.url = this._extractUrl();
        
        if ( "vertical" === this.groupOptions.layout ) {
            this.showError( $.pandalocker.lang.errors.unsupportedTwitterFollowLayout );
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.showCount = false;
            }
        }
        
        if ( this.groupOptions.lang ) {
            var langParts = this.groupOptions.lang.split('_');
            this.options.lang = langParts[0];
        }
    };
        
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-twitter-follow', function (e, url) {
            if ( self.url !== $.pandalocker.data.__followedUrl ) return;
            
            if ( $.pandalocker.data.__followWindow && $.pandalocker.data.__followWindow.close ) $.pandalocker.data.__followWindow.close();
            $.pandalocker.data.__followWindow = null;
            
            self.unlock("button", self.name, self.url );
        });
    };
        
    button.renderButton = function( $holder ) {
        var self = this;

        this.button = $('<a href="https://twitter.com/share" class="twitter-follow-button">Follow</a>').appendTo( $holder );
        this.button.attr('href', this.url);
        
        this.button.attr("data-show-count", this.options.showCount);
        if (this.options.showCount) this.button.attr("data-show-count", this.options.showCount); 
        if (this.options.lang) this.button.attr("data-lang", this.options.lang);
        if (this.options.alignment) this.button.attr("data-alignment", this.options.alignment);
        if (this.options.size) this.button.attr("data-size", this.options.size);
        if (this.options.dnt) this.button.attr("data-dnt", this.options.dnt);
        if (this.options.hideScreenName) this.button.attr("data-show-screen-name", false);

        var overlay = $("<div class='onp-sl-feature-overlay'></div>").appendTo( $holder );
        
        overlay.click(function(){
            
            var result = self.follow( self.options.doubleCheck );
            result.done(function(){
                $(document).trigger('onp-sl-twitter-follow', [self.url]);
            });

            return false;
        }); 

        // our original markup will be fully replaced with the iframe created 
        // by Twitter, so we cannot to bind the data required to verify 
        // tweeting on the button, we need to bind this data on the parent element
        
        $holder.data('url-to-verify', self.url);

        var attemptCounter = 5;

        // Chrome fix
        // If there is SDK script on the same page that is loading now when a tweet button will not appear.
        // Setup special timeout function what will check 5 times when we can render the twitter button.
        var timoutFunction = function () {
            if ($holder.find('iframe').length > 0) return;

            if (window.twttr.widgets && window.twttr.widgets.load) {
                window.twttr.widgets.load($holder[0]);
            } else {
                if (attemptCounter <= 0) return;
                attemptCounter--;

                setTimeout(function () {
                    timoutFunction();
                }, 1000);
            }
        };

        timoutFunction();
    };
    
    button.follow = function( doubleCheck ) {
        
        var self = this;
        var def = $.Deferred();
        
        // follow through oauth
        
        if ( doubleCheck ) {
            
            this.connect( function( data ){

                var followResult = self.follow( false );
                
                followResult.done( function() {
                    var checkResult = self.checkFollower( self.url );
                    
                    checkResult.done( function(){
                        def.resolve();
                    });
                    
                    checkResult.fail(function(){
                        self.showNotice( $.pandalocker.lang.errors.followingNotFound );
                    });
                });
            });
 
            return def;
        }
        
        // follow through popup

        var args = [];
                
        $.pandalocker.data.__followedUrl = self.url;
        
        var parts = self.url.split('/');
        self.screenName = parts[parts.length-1];
                
        args.push(['screen_name', self.screenName]);

        var intentUrl = $.pandalocker.tools.URL()
            .scheme('http')
            .host('twitter.com')
            .path('/intent/follow')
            .query(args)
            .toString();
    
        var width = 550;
        var height = 530;

        var x = screen.width ? (screen.width/2 - width/2 + $.pandalocker.tools.findLeftWindowBoundry()) : 0;
        var y = screen.height ? (screen.height/2 - height/2 + $.pandalocker.tools.findTopWindowBoundry()) : 0;

        if ( $.pandalocker.data.__twitterAuth && $.pandalocker.data.__twitterAuth.closed === false ) {
            $.pandalocker.data.__twitterAuth.updateState( intentUrl, width, height, x, y );
           
            $.pandalocker.data.__followWindow = $.pandalocker.data.__twitterAuth;
            $.pandalocker.data.__twitterAuth = null;
            
        } else {
            $.pandalocker.data.__followWindow = window.open(intentUrl, "TwitterFollowWindow", "width=" + width + ",height=" + height + ",left="+x+",top="+y);
        }

        setTimeout(function(){

            var pollTimer = setInterval(function() {
                if ( !$.pandalocker.data.__followWindow || $.pandalocker.data.__followWindow.closed !== false ) {
                    clearInterval(pollTimer);
                    def.resolve();
                }
            }, 200);
        }, 200);

        return def.promise();
    };
    
    /**
     * Connects the user via Faceboook.
     */
    button.connect = function( callback ) {
        var self = this;
        
        if ( $.pandalocker.data.twitterOAuthReady ) {
            
            if ( $.pandalocker.data.__twitterAuthIdentityData ) {
                callback( $.pandalocker.data.__twitterAuthIdentityData, self._getServiceData() );
            } else {
                
                this._identify( function( identityData ){
                    callback( identityData, self._getServiceData() );
                });     
            }
            
        } else {
            
            // The fix for the issue #BIZ-41:
            // removes the proxy URL from the options because it fires the errors on some website

            var dataToSend = {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'init',
                'opandaKeepOpen': true,
                'opandaReadOnly': true
            };

            var visitorId = $.pandalocker.tools.cookie( 'opanda_twid' );
            if ( visitorId && visitorId !== 'null' ) dataToSend['opandaVisitorId'] = visitorId;
            
            var url = self.options.proxy;
            
            for ( var prop in dataToSend ) {
                if ( !dataToSend.hasOwnProperty(prop) ) continue;
                url = $.pandalocker.tools.updateQueryStringParameter( url, prop, dataToSend[prop] );
            }

            self._trackWindow('opandaHandler=twitter', function(){

                setTimeout( function(){
                    if ( $.pandalocker.data.twitterOAuthReady ) return;

                    self.runHook('raw-social-app-declined');
                    self.showNotice( $.pandalocker.lang.errors_not_signed_in );
                }, 500);
            });

            var width = 500;
            var height = 610;

            var x = screen.width ? (screen.width/2 - width/2 + $.pandalocker.tools.findLeftWindowBoundry()) : 0;
            var y = screen.height ? (screen.height/2 - height/2 + $.pandalocker.tools.findTopWindowBoundry()) : 0;
            
            $.pandalocker.data.__twitterAuth = window.open( url,
                "Twitter Follow",
                "width=" + width + ",height=" + height + ",left="+x+",top="+y+",resizable=yes,scrollbars=yes,status=yes"
            );

            window.OPanda_TwitterOAuthCompleted = function( visitorId ){

                $.pandalocker.data.twitterOAuthReady = true;
                self._saveVisitorId( visitorId );
                self.connect( callback );
            };
            
             window.OPanda_TwitterOAuthDenied = function( visitorId ){

                self.runHook('raw-social-app-declined');
                self.showNotice( $.pandalocker.lang.errors_not_signed_in );
                self._saveVisitorId( visitorId );
            };       
        }
    };
    
    /**
     * Saves a visitor ID.
     */
    button._saveVisitorId = function( visitorId ) {
        
        this._visitorId = visitorId;
        $.pandalocker.data.__twitterVisitorId = visitorId;
        $.pandalocker.tools.cookie( 'opanda_twid', visitorId, { expires: 1000, path: "/" } );
    };
    
    /**
     * Puts together service data required for the future requests.
     */
    button._getServiceData = function() {
        var self = this;
        return { visitorId: $.pandalocker.data.__twitterVisitorId };
    };
    
    /**
     * Identify the user.
     */
    button._identify = function( callback ) {
        var self = this;
        
        var req = $.ajax({
            type: "POST",
            dataType: "json",
            url: self.options.proxy,
            data: {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'user_info',
                'opandaVisitorId': $.pandalocker.data.__twitterVisitorId,
                'opandaReadOnly': true
            },
            success: function(data){
                
                console.log(data);
                
                if ( ( !data || data.error || data.errors ) && console && console.log ) {
                    console.log( 'Unable to get the user data: ' + req.responseText );   
                }
                
                var identity = {};
                identity.displayName = data.screen_name;
                identity.twitterUrl = 'https://twitter.com/' + data.screen_name;
                
                if ( data.profile_image_url ) {
                    identity.image = data.profile_image_url.replace('_normal', '');
                }
                
                $.pandalocker.data.__twitterAuthIdentityData = identity;                
                callback( identity );
            },
            error: function() {
                console && console.log && console.log( 'Unable to get the user data: ' + req.responseText );
                callback( {} );
            }
        });
    };
    
    button.checkFollower = function() {
        
        var self = this;
        var def = $.Deferred();
        
        var req = $.ajax({
            type: "POST",
            dataType: "json",
            url: self.options.proxy,
            data: {
                'opandaHandler': 'twitter',
                'opandaRequestType': 'get_followers',
                'opandaSceenName': self.screenName,
                'opandaVisitorId': $.pandalocker.data.__twitterVisitorId,
                'opandaReadOnly': true
            },
            success: function(data){
                
                if ( ( !data || data.error || data.errors ) && console && console.log ) {
                    console.log( 'Unable to get the user data: ' + req.responseText );   
                }
                if ( data[0] ) {
                    for ( var i = 0; i < data[0].connections.length; i++ ) {
                    
                        if ( data[0].connections[i] === 'following' ) {
                            def.resolve();
                            return;
                        }
                    }
                } 
                
                def.reject();
            },
            error: function() {
                console && console.log && console.log( 'Unable to get the user data: ' + req.responseText );
                callback( {} );
            }
        });
        
        return def.promise();
    };
    
    $.pandalocker.controls["social-buttons"]["twitter-follow"] = button;
    
})(jQuery);;
/*!
 * Google +1
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "google-plus";

    button._defaults = {

        // URL to plus one
        url: null,

        // Language of the button labels. By default en-US.
        // https://developers.google.com/+/plugins/+1button/#available-languages
        lang: 'en-US',
        // small, medium, standard, tall (https://developers.google.com/+/plugins/+1button/#button-sizes)
        size: 'medium',
        // Sets the annotation to display next to the button.
        annotation: null,
        // Button container width in px, by default 450.
        width: null,
        // Sets the horizontal alignment of the button assets within its frame.
        align: "left",
        // Sets the preferred positions to display hover and confirmation bubbles, which are relative to the button.
        // comma-separated list of top, right, bottom, left
        expandTo: "",
        // To disable showing recommendations within the +1 hover bubble, set recommendations to false.    
        recommendations: true
    };

    button.prepareOptions = function() {
        this.url = this._extractUrl();

        if ( "vertical" === this.groupOptions.layout ) {
            this.options.size = 'tall';
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.annotation = 'none';
            }
        } 
    };
        
    button.setupEvents = function () {
        var self = this;
        
        $(document).bind('onp-sl-google-plus', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;
            self.unlock("button", self.name, self.url );
        });
    };
        
    button.renderButton = function( $holder ) {
        var self = this;
        
        this.button = $("<div></div>").appendTo( $holder );

        this.button.attr("data-href", this.url);
        if (this.options.size) this.button.attr("data-size", this.options.size);
        if (this.options.annotation) this.button.attr("data-annotation", this.options.annotation);
        if (this.options.align) this.button.attr("data-align", this.options.align);
        if (this.options.expandTo) this.button.attr("data-expandTo", this.options.expandTo);
        if (this.options.recommendations) this.button.attr("data-recommendations", this.options.recommendations);

        this.button.attr("data-callback", "OPanda_GooglePlusOne_Callback");
        this.button.addClass('g-plusone');
        
        setTimeout(function () {
            window.gapi.plusone.go( $holder[0] );
        }, 100);
    };
    
    $.pandalocker.controls["social-buttons"]["google-plus"] = button;
    
})(jQuery);;
/*!
 * Google Share
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';
    
    if ( !$.pandalocker.data ) $.pandalocker.data = {};
    $.pandalocker.data.__googleShareUrl = null;
    
    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "google-share";

    button._defaults = {

        // URL to plus one
        url: null,

        // Language of the button labels. By default en-US.
        // https://developers.google.com/+/plugins/+1button/#available-languages
        lang: 'en-US',
        // small, medium, standard, tall (https://developers.google.com/+/plugins/+1button/#button-sizes)
        size: null,
        // Sets the annotation to display next to the button.
        annotation: 'bubble',
        // Button container width in px, by default 450.
        width: null,
        // Sets the horizontal alignment of the button assets within its frame.
        align: "left",
        // Sets the preferred positions to display hover and confirmation bubbles, which are relative to the button.
        // comma-separated list of top, right, bottom, left
        expandTo: "",
        // To disable showing recommendations within the +1 hover bubble, set recommendations to false.    
        recommendations: true
    };

    button.prepareOptions = function() {
        this.url = this._extractUrl();
        
        if ( "vertical" === this.groupOptions.layout ) {
            this.options.annotation = 'vertical-bubble';
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.annotation = 'none';
            }
        }
    };
        
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-google-share', function (e, url) {
            var urlToCompore = url || $.pandalocker.data.__googleShareUrl;
            if ( self.url !== $.pandalocker.tools.URL.normalize( urlToCompore ) ) return;
            self.unlock("button", self.name, self.url );
        });          

        /**
        $(document).bind('onp-sl-google-share-opened', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;

            self._maxPopupHeight = 0;
            self._heightChecker = setInterval(function(){
                var height = $(".goog-bubble-content").height();
                if ( height > self._maxPopupHeight ) self._maxPopupHeight = height;
            }, 300);
        });        

        $(document).bind('onp-sl-google-share-closed', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;

            if ( self._maxPopupHeight > 250 ) self.unlock("button", self.name, self.url );
            if ( self._heightChecker ) clearInterval( self._heightChecker );
            self._heightChecker = null;
        });  
        */
    };
        
    button.renderButton = function( $holder ) {
        var self = this;
        
        this.button = $("<div></div>").appendTo( $holder );

        this.button.attr("data-href", this.url);
        if (this.options.size) this.button.attr("data-size", this.options.size);
        if (this.options.annotation) this.button.attr("data-annotation", this.options.annotation);
        if (this.options.align) this.button.attr("data-align", this.options.align);
        if (this.options.expandTo) this.button.attr("data-expandTo", this.options.expandTo);
        if (this.options.recommendations) this.button.attr("data-recommendations", this.options.recommendations);

        this.button.attr("data-onstartinteraction", "OPanda_GoogleShare_StartInteraction");
        this.button.attr("data-onendinteraction", "OPanda_GoogleShare_EndInteraction");
        
        this.button.addClass('g-plus').attr('data-action', 'share');
            
        setTimeout(function () {
            window.gapi.plus.go( $holder[0] );
        }, 100);

        // for mobile devices
        if ( $.pandalocker.tools.isTabletOrMobile() ) {
               
            var overlay = $("<div class='onp-sl-feature-overlay'></div>").appendTo( $holder );

            overlay.click(function(){

                var args = [];

                args.push(['url', self.url]);

                var intentUrl = $.pandalocker.tools.URL()
                    .scheme('https')
                    .host('plus.google.com')
                    .path('/share')
                    .query(args);

                var width = 550;
                var height = 420;

                var x = screen.width ? (screen.width/2 - 700/2 + $.pandalocker.tools.findLeftWindowBoundry()) : 0;
                var y = screen.height ? (screen.height/2 - 450/2 + $.pandalocker.tools.findTopWindowBoundry()) : 0;

                var winref = window.open(intentUrl, "GoogleShareWindow", "width=" + width + ",height=" + height + ",left="+x+",top="+y);

                setTimeout(function(){

                    // waiting until the window is closed
                    var pollTimer = setInterval(function() {
                        if ( !winref || winref.closed !== false ) {
                            clearInterval(pollTimer);
                            $(document).trigger('onp-sl-google-share', [self.url]);
                        }
                    }, 200);
                }, 200);

                return false;
            });
        }
    };
    
    $.pandalocker.controls["social-buttons"]["google-share"] = button;
    
})(jQuery);;
/*!
 * Youtube Subscribe
 * Copyright 2013, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';
    
    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );

    button.name = "youtube-subscribe";
    button.sdk = 'google-client';

    button._defaults = {  
        clientId: null,
        channelId: null,
        layout: 'default',                    
        count: 'default'
    };
    
    /**
     * The funtions which returns an URL to like/share for the button.
     * Uses the options and a current location to determine the URL.
     */
    button._extractUrl = function() {
        return this.options.channelId;
    };
    
    button.prepareOptions = function() {
        var self = this;
        this.url = this._extractUrl();
        
        if ( !this.options.channelId ) {
            this.showError( $.pandalocker.lang.errors.emptyYoutubeChannelId );
        }
        
        if ( !this.options.clientId ) {
            this.showError( $.pandalocker.lang.errors.emptyGoogleClientId );
        }   
        
        if ( "vertical" === this.groupOptions.layout ) {
            this.showError( $.pandalocker.lang.errors.unsupportedYoutubeSubscribeLayout );
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.count = 'hidden';
            }
        }
    };
    
    button.setupEvents = function () {
        var self = this;

        $(document).bind('onp-sl-youtube-subscribe', function (e, url) {
            self.unlock("button", self.name, self.url );
        });
    };
    
    /**
     * Renders the button.
     */  
    button.renderButton = function( $holder ){
        var self = this;

        this.button = $("<div></div>").appendTo( $holder );

        this.button.attr("data-channelid", this.options.channelId);
        this.button.attr("data-layout", this.options.layout);  
        this.button.attr("data-count", this.options.count); 

        this.button.addClass('g-ytsubscribe');  
        
        setTimeout(function () {
            window.gapi.ytsubscribe.go( $holder[0] );
        }, 100);
        
        var overlay = $("<div class='onp-sl-youtube-subscribe-overlay'></div>").appendTo( $holder );

        overlay.click(function(){
            
            self.authorize(false, function( response ){
                if ( 'immediate_failed' === response.error ) return;

                if ( !response || !response['status']['signed_in'] ) {
                    self.showNotice($.pandalocker.lang.errors_not_signed_in);
                    return;
                }
                
                self.subscribe();
            });
            
            return false;
        });
    };

    button.authorize = function (immediate, callback){
        var self = this;
        var requestOptions = {};

        requestOptions.client_id = self.options.clientId;
        requestOptions.immediate = immediate;
        requestOptions.scope = "https://www.googleapis.com/auth/youtube";

        gapi.auth.authorize(requestOptions, callback);
    };

    button.subscribe = function () {
        var self = this;

        gapi.client.load('youtube', 'v3', function() {
            
            var request = gapi.client.youtube.subscriptions.insert({
                part: 'snippet',
                resource: {
                    snippet: {
                        resourceId: {
                            kind: 'youtube#channel',
                            channelId: self.options.channelId
                        }
                    }
                }
            });	
            
            request.execute(function(response) {
                
                if( response.error && 'subscriptionDuplicate' != response.error.data[0].reason )
                    return self.showNotice( response.error.data[0].message );

                $(document).trigger('onp-sl-youtube-subscribe');
            });
        });
    }
    
    $.pandalocker.controls["social-buttons"]["youtube-subscribe"] = button;
      
})(jQuery);;
/*!
 * LinkedIn Share
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function ($) {
    'use strict';

    var button = $.pandalocker.tools.extend( $.pandalocker.entity.socialButton );
    
    button.name = "linkedin-share";
    
    button.verification.container = '.IN-widget';
    button.verification.timeout = 5000;

    button._defaults = {

        // URL of the page to share.
        url: null,

        // Count box position (none, horizontal, vertical)
        counter: 'right'
    };

    button.prepareOptions = function() {
        this.url = this._extractUrl();
        
        if ( "vertical" === this.groupOptions.layout ) {
            this.options.counter = 'top';
        } else {
            if ( !this.groupOptions.counters ) {
                this.options.counter = 'none';
            }
        }
    };
        
    button.setupEvents = function () {
        var self = this;
       
        $(document).bind('onp-sl-linkedin-share', function (e, url) {
            if ( self.url !== $.pandalocker.tools.URL.normalize( url ) ) return;
            self.unlock("button", self.name, self.url );
        });
    };
        
    button.renderButton = function( $holder ) {
        var self = this;
        
        this.button = $('<script type="IN/Share" data-onsuccess="OPanda_LinkedinShare_Callback" data-success="OPanda_LinkedinShare_Callback" data-onSuccess="OPanda_LinkedinShare_Callback"></script>');
        if (this.options.counter) this.button.attr("data-counter", this.options.counter);
        this.button.attr("data-url", this.url);

        this.button.appendTo( $holder );

        IN.init();
        if ( IN.parse ) IN.parse( this.button[0] );
        
        // #SLJQ-26: A fix for the LinkedIn button.
        // We unlock content after closing the share dialog.
        
        $holder.click(function(){
            setTimeout(function(){

                if ( !$.pandalocker.sdk.linkedin._activePopup ) return;
                var winref = $.pandalocker.sdk.linkedin._activePopup;
                $.pandalocker.sdk.linkedin._activePopup = false;

                // waiting until the window is closed
                var pollTimer = setInterval(function() {
                    if ( !winref || winref.closed !== false ) {
                        clearInterval(pollTimer);
                        $(document).trigger('onp-sl-linkedin-share', [self.url]);
                    }
                }, 200);
            }, 200);
        });
    };

    $.pandalocker.controls["social-buttons"]["linkedin-share"] = button;
    
})(jQuery);;
/*!
 * Panda Lockers
 * Copyright 2016, OnePress, http://byonepress.com
*/

(function ($) {
    'use strict';
    if ($.fn.pandalocker) return;

    $.pandalocker.widget("pandalocker", {

        options: {},

        // The variable stores a current locker state.
        _isLocked: false,
        
        // Defauls option's values.
        _defaults: {

            // Text above the locker buttons.
            text: {
                header: null,
                message: null
            },

            // Theme applied to the locker
            theme: {
                name: "starter"
            },
            
            // The language of the locker
            lang: 'en_US',
            
            // The groups of controls which will be available for the user.
            groups: {
                order: ['social-buttons'],
                union: 'or'
            },
            
            // shows the terms
            terms: false,
            privacyPolicy: false,
            termsPopup: false,        
            
            // The options of the Connect Buttons.
            connectButtons: {},
            
            // The options of the Social Buttons.
            socialButtons: {},
            
            // Sets overlap for the locked content.
            // false = mode:none
            overlap: {

                // Possible modes:
                // - full: hides the content, and show the locker instead (classic)
                // - transparence: transparent overlap
                // - blurring: to blur locked content
                mode: "full",
                
                // Using only if the mode is set to 'transparence' or 'blurring'
                // Defines the position of the locker. Possible values:
                // middle, top, scroll
                position: 'middle',
                
                // blur intensity (works only with the 'blue' mode)
                intensity: 5,
                
                // the alternative mode which will be applied if the browser doesn't support the blurring effect
                altMode: 'transparence'
            },

            // Extra class
            cssClass: null,

            // Sets whether the locker keep the state of always appears
            demo: false,
            
            // Turns on the highlight effect
            highlight: true,
            
            // Optional. If set true, the locker will generate events for the Google Analytics.
            googleAnalytics: false,
            
            // --
            // Locker functionality.
            locker: {
                // if true, the locker will work as classic social buttons
                off: false,
                
                // if true, the locker waits until the user click all the available buttons.
                stepByStep: false,

                // Sets whether a user may remove the locker by a cross placed at the top-right corner.
                close: false,
                // Sets a timer interval to unlock content when the zero is reached.
                // If the value is 0, the timer will not be created. 
                timer: 0,
                // Sets whether the locker appears for mobiles devides.
                mobile: true,

                // Optional. If false, the content will be unlocked forever, else will be 
                // unlocked for the given number of seconds.
                expires: false,
                // Optional. Forces to use cookies instead of a local storage
                useCookies: false,
                
                // Optional. Allows to bind lockers into one group.
                // If one of lockers in the given scope are unlocked, all others will be unlocked too.
                scope: false,
                
                // Optional. Timeout for loading of the social scripts.
                loadingTimeout: 1000,
                
                // Optional. If on, the locker will protect your content 
                // against browser extensions which remove the lock automatically.
                tumbler: true,
                // Optional. Check interval for the Tumbler, 500 is good.
                tumblerInterval: 500,
                
                // Options. Set what to do if the buttons are not available (blocked by Avast or AdBlock).
                naMode: 'show-error',
                
                // conditions that determine whether the locker has to be displayed
                visibility: []
            },
            
            subscribeActionOptions: {},

            // -
            // Content that will be showen after unlocking.
            content: null,
            
            // -
            // Default proxy
            proxy: null
        },
        
        getState: function() {
            return this._isLocked ? "locked" : "unlocked";
        },

        /**
        * Creates a new locker. 
        */
        _create: function () {
            var self = this;
            this.id = this.options.id || this._generteId();

            this._prepareOptions();
            this._setupVariables();
            
            this._initExtras();
            this._initHooks();
 
            this._initGroups();
            this._initScreens();
            
            this._setupVisitorId();
            
            this.runHook('init');
            
            if ( !this._canLock() ) return;

            this.requestState(function( state ){
                'locked' === state ? self._lock() : self._unlock("provider");
            });
        },
        
        /**
         * Generates an uniqure id for the locker.
         */
        _generteId: function()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        },
        
        /**
        * Prepares options before start.
        */
        _prepareOptions: function () {
            var self = this;
            
            var defaults = $.extend(true, {}, this._defaults);
            defaults = this.applyFilters('filter-default-options', defaults );
            
            if ( this.options.theme && !$.isPlainObject( this.options.theme ) ) {
                this.options.theme = { name: self.options.theme };
            }
            
            if ( typeof this.options.theme !== "object" ) {
                this.options.theme = {name: self.options.theme};
            }
            
            var theme = this.options.theme.name || this._defaults.theme;

            // some themes also have defaults options,
            // merging the global default option with the theme default options
            if ($.pandalocker.themes[theme]) {
                defaults = $.extend(true, {}, defaults, $.pandalocker.themes[theme]);
            }
  
            // now merges with the options specified by a user
            var options = $.extend(true, defaults, this.options);

            // normalizes options

            if ( $.isArray( options.groups ) ) {
                options.groups = $.extend(true, {}, defaults.groups, {order: options.groups});
            }

            options.locker.timer = parseInt(options.locker.timer);
            if (options.locker.timer === 0) options.locker.timer = null;

            this.options = this.applyFilters('filter-options', options );

            // ie 10-11 fix (they doesn't support the blur filter)
            if ( 'blurring' === this.options.overlap.mode && !$.pandalocker.tools.supportBlurring() ) {
                this.options.overlap.mode = this.options.overlap.altMode;
            }
        },
        
        /**
         * Sets variables used in various parts of the plugin code.
         */
        _setupVariables: function() {
            
            // the css class of the theme
            this.style = "onp-sl-" + this.options.theme.name;
            
            // should we use one of advanced overlay modes?
            this.overlap = ( this.options.overlap.mode === 'full' ) ? false : this.options.overlap.mode;
            
            // groups union
            this.groupUnion = this.options.groups.union;
            
            // the default namespace of language resources
            // detects which the group is primary and select situable lables
            
            if ( this.options.groups.order.length > 0 ) {
                
                switch ( this.options.groups.order[0] ) {
                    case 'connect-buttons':
                        this.lockerType = 'signin-locker';
                        this.langScope = 'signinLocker';
                    break;
                    case 'subscription':
                        this.lockerType = 'email-locker';
                        this.langScope = 'emailLocker';
                    break;
                    default:
                        this.lockerType = 'social-locker';
                        this.langScope = 'socialLocker';
                    break;
                }
            }
            
            // stores the lang resources for the current lang scope
            this.lang = $.pandalocker.lang.scopes[this.langScope];
        },
        
        /**
         * Inits extras.
         */
        _initExtras: function() {

            for ( var i in $.pandalocker.extras ) {
                if ( !$.pandalocker.extras.hasOwnProperty(i) ) continue;
                if ( !$.pandalocker.extras[i].init ) continue;
                
                $.pandalocker.extras[i].init.apply(this);
            }
        },
        
        /**
         * Inits extras.
         */
        _initHooks: function() {
            var self = this;
            
            var intercationAccounted = false;
            var errorAccounted = false;
            var socialAppDeclineAccounted = false;    
            var getImpress = false;
            
            this.addHook('raw-interaction', function(){
                if ( !getImpress ) return;
                
                if ( intercationAccounted ) return;
                intercationAccounted = true;
                self.runHook('interaction');
            });
            
            this.addHook('raw-error', function(){
                if ( !getImpress ) return;
                
                if ( errorAccounted ) return;
                errorAccounted = true;
                self.runHook('error');
            }); 
            
            this.addHook('raw-impress', function(){
                if ( self._currentScreenName !== 'default' ) return;
                getImpress = true;
                self.runHook('impress');
            });
            
            this.addHook('raw-social-app-declined', function(){
                if ( !getImpress ) return;

                if ( socialAppDeclineAccounted ) return;
                socialAppDeclineAccounted = true;
                self.runHook('social-app-declined');
            });
        },        
        
        /**
         * Inits control groups.
         */
        _initGroups: function() {
            this._groups = [];

            for( var i = 0; i < this.options.groups.order.length; i++ ) {
                var groupName = this.options.groups.order[i];
                
                var optionsName = $.pandalocker.tools.camelCase( groupName );
                var groupOptions = this.options[optionsName] || {};
     
                if ( i == 0 ) groupOptions.text = this.options.text;

                if ( !$.pandalocker.groups[groupName] ) {
                    this._showError( 'core', 'The control group "' + groupName + '" not found.');
                    return;
                }
                
                var group = $.pandalocker.tools.extend( $.pandalocker.groups[groupName] );
                
                groupOptions.index = parseInt(i) + 1;
                group.init( this, groupOptions );
                
                this._groups[i] = group;
            }
        },
        
        /**
         * Setups an unique visitor id.
         */
        _setupVisitorId: function() {
            
            this.vid = $.pandalocker.tools.getValue("opanda_vid");
            if ( !this.vid ) {
                this.vid = $.pandalocker.tools.guid();   
                $.pandalocker.tools.saveValue("opanda_vid", this.vid, 365);
            }
        },

        /**
         * Checks if the content should be locked or not. 
         * Some options can forbid to lock content for a given user.
         * 
         * @since 4.0.0
         */
        _canLock: function() {
            
            // don't show a locker in ie7
            if ($.pandalocker.browser.msie && parseInt($.pandalocker.browser.version, 10) === 7) {
                this._unlock("ie7"); return false;
            }
            
            // checks the visability options
            if ( this.options.locker.visibility ) {
                var checker = new $.pandalocker.services.visibility();
                if ( !checker.canLock( this.options.locker.visibility ) ) {
                    this._unlock("visibility"); 
                    return false;
                }
            }
            
            // check mobile devices
            if (!this.options.locker.mobile && $.pandalocker.tools.isMobile() ) {
                this._unlock("mobile"); return false;
            }
            
            // checks if the groups containing buttons can be used 
            // to lock, e.g. the group may have no buttons to use, 
            // then it's not possible to use this group
            
            var invalidGroups = 0;
            
            for( var i = 0; i < this._groups.length; i++ ) {
                if ( this._groups[i].canLock() ) continue;

                if ( 'or' === this.groupUnion ) { 
                    this._unlock("group"); 
                    return false; 
                } else {
                    invalidGroups++;
                }
            }

            if ( invalidGroups === this._groups.length ) {
                this._unlock("group");
                return false;
            }
            
            return true;
        },
        
        /**
         * Requests the state of a locker.
         */
        requestState: function( callback ) {
            var self = this;
            
            // the default state-checking function,
            // which is run always the last
            
            var defaultFunction = function( localCallback ){
                
                var groupsCount = self._groups.length;
                var currentState = 'locked';
                
                for ( var i = 0; i < self._groups.length; i++ ) {
                    self._groups[i].requestState(function( state ){
                        groupsCount--;
                        if ( 'unlocked' === state ) currentState = state;
                        if ( groupsCount <= 0 ) localCallback( currentState );
                    });
                } 
            };
            
            var checkFunctions = [];
            
            checkFunctions = this.applyFilters('functions-requesting-state', checkFunctions);
            checkFunctions.push( defaultFunction );

            var runNextCheckFunction = function() {      
                
                var check = checkFunctions.shift();
                if ( !check ) return callback('locked');
                
                check(function( state ){
                    
                    // if the function returned one of the states, breaks the loop
                    if ( state === 'unlocked' ) return callback( state );
                    
                    // else call the next check function
                    runNextCheckFunction();
                });
            };

            runNextCheckFunction(); 
        },
        
        /**
         * Seta a given state.
         * 
         * @argument {string} sate A state (locked, unlocked).
         * @argument {string} senderType A sender type (e.g. button, group).
         * @argument {string} senderName A sender name (e.g. facebook-like).
         */
        setState: function( state, senderType, senderName ) {
            
            // notifies about changing the state
            this.runHook('state-changed', [state, senderType, senderName]);
        },
        
        /**
         * Returns a state storge.
         */
        _getStateStorage: function() {
            if ( this._stateStorage ) return this._stateStorage;
            this._stateStorage = this.applyFilters('get-default-state-storage', new $.pandalocker.storages.defaultStateStorage( this ) );
            return this._stateStorage;
        },

        /**
        * Sets an error state.
        */
        _showError: function ( sender, text) {
            this._error = true;
            this._errorText = text;

            this.locker && this.locker.hide();

            this.element.html("<strong>[Error]: " + text + "</strong>");
            this.element.show().addClass("onp-sl-locker-error");
            
            this.runHook('size-changed');
        },
        
        // --------------------------------------------------------------------------------------
        // Hooks & Filters
        // --------------------------------------------------------------------------------------
        
        /**
        * Subscribes to the specified hook.
        */
        addHook: function( eventName, callback, priority, global ) {
            $.pandalocker.hooks.add( this.id + '.' + eventName, callback, priority );
            if ( global ) $.pandalocker.hooks.add( eventName, callback, priority );
        },
        
        /**
        * Runs the specified hook.
        */
        runHook: function( eventName, args, global ) {
            if ( !args ) args = [];
            args.unshift( this );
            
            // filters api
            $.pandalocker.hooks.run( this.id + '.' + eventName, args );
            if ( global ) $.pandalocker.hooks.run( eventName, args );
            
            // jquery api
            this.element.trigger('opanda-' + eventName, args);
            
            // global api
            var globalArgs = args.slice();
            
            var identity = {};
            identity.lockId = this.id;
            identity.visitorId = this.vid;       
            identity.locker = this.locker;
            identity.content = this.element;
            globalArgs.unshift( identity );

            $.pandalocker.hooks.run( 'opanda-' + eventName, globalArgs );
        },
        
        /**
        * Subscribes to the specified hook.
        */
        addFilter: function( eventName, callback, priority, global ) {
            $.pandalocker.filters.add( this.id + '.' + eventName, callback, priority );
        },
        
        /**
        * Runs the specified hook.
        */
        applyFilters: function( eventName, input, args, global ) {
            if ( !args ) args = [];
            if ( !$.isArray( args )) args = [args];

            args.unshift( this );
            args.unshift( input );
            
            // filters api
            var result = $.pandalocker.filters.run( this.id + '.' + eventName, args );
            args[0] = result;
            
            if ( global ) result = $.pandalocker.filters.run( eventName, args );
            return result;
        },
        
        // --------------------------------------------------------------
        // Screens
        // --------------------------------------------------------------   

        /**
         * Stores HTML markup of the screens.
         */
        screens: {},
        
        /**
         * Stores factories of the screens.
         */
        _screenFactory: {},

        /**
         * Shows the screen.
         */
        _showScreen:function( screenName, options ) {

            // if the screen has not been registered, fires an exception
            if ( !this._screenFactory[screenName] && !this.screens[screenName] )
                throw new $.pandalocker.error('The screen "' + screenName + '" not found in the group "' + this.name + '"');
            
            var self = this;
            this._currentScreenName = screenName;
            
            // shows a screen if it was already created
            this.innerWrap.find('.onp-sl-screen').hide();
            if ( this.screens[screenName] ) {
                
                this.screens[screenName].show();
                self.runHook('size-changed');
                return;
            }
            
            // if not, then creates via the screen factory
            var screen = $("<div class='onp-sl-screen onp-sl-non-default-screen onp-sl-screen-" + screenName + "'></div>").appendTo(this.innerWrap).hide();
            this.screens[screenName] = this._screenFactory[screenName]( screen, options );
            screen.fadeIn(300, function(){
                self.runHook('size-changed');
            });
        },
        
        /**
         * Registers a new screen.
         */
        _registerScreen: function( screenName, factory ) {
            this._screenFactory[screenName] = factory;
        },
        
        _initScreens: function() {
            var self = this;
            this._currentScreenName = 'default';
            
            // SCREEN: Enter Email
            
            this._registerScreen('enter-email',
                function( $holder, options ) {
                    
                    var $text = $('<div class="onp-sl-text"></div>');
                    $holder.append($text);
                    
                    if ( options.header ) {
                        var $header = $('<div class="onp-sl-header onp-sl-strong">' + options.header + '</div>');
                        $text.append($header);
                    }
                    
                    if ( options.message ) {
                        var $message = $('<div class="onp-sl-message">' + options.message + '</div>');
                        $text.append($message);
                    }
                    
                    var $controlWrap = $('<div class="onp-sl-control"></div>');
                    $holder.append( $controlWrap );
                    
                    var fields = {};
                    
                    fields['email'] = {name: 'email', type: 'text', placeholder: $.pandalocker.lang.misc_enter_your_email};
                    fields['submit'] = {name: 'submit', type: 'submit', title: options.buttonTitle };
        
                    for( var name in fields ) {
                        var type = fields[name].type;
                        var title = fields[name].title;

                        var value = fields[name].value || ( options.fields && options.fields[name] && options.fields[name].value );

                        var $wrap = $("<div></div>")
                                .addClass('onp-sl-field')
                                .addClass('onp-sl-field-' + name)
                                .addClass('onp-sl-field-type-' + type);

                        if ( 'text' === type || 'email' === type ) {

                            var $field = $("<input type='" + type + "' name='" + name + "' class='onp-sl-input' id='onp-sl-input-" + name + "' />");
                            if ( fields[name].placeholder) $field.attr('placeholder', fields[name].placeholder );
                            if ( value) $field.attr('value', value );

                            $field.appendTo($wrap);
                        }

                        if ( 'submit' === type ) {                
                            var $field = $("<button class='onp-sl-button onp-sl-form-button onp-sl-submit'>" + title + "</button>");
                            $field.addClass('onp-sl-button-primary');
                            $field.appendTo($wrap);
                        }

                        $wrap.appendTo($controlWrap);            
                    }   
                    
                    if ( options.note ) {
                        var $note = $("<div class='onp-sl-note onp-sl-nospam'></div>").html( options.note );
                        $note.appendTo( $wrap );   
                    }
                    
                    $holder.find('.onp-sl-submit').click(function(){
                        
                        var showNotice = function( text, expires ){

                            $holder.find('.onp-sl-group-notice').remove();

                            var $notice = $("<div class='onp-sl-group-notice'>" + text + "</div>").hide();
                            $holder.append( $notice ); 
                            $notice.fadeIn(500);

                            if ( !expires ) expires = 7000;
                            setTimeout(function(){
                                if ( !$notice.length ) return;
                                $notice.fadeOut( 800, function(){
                                    $notice.remove();
                                } );
                            }, expires);
                        };

                        var $button = $(this);
                        var email = $.trim( $holder.find('#onp-sl-input-email').val() );

                        if( !email || !email.length ) {
                            showNotice( $.pandalocker.lang.errors_empty_email );
                            return;
                        } else if( !$.pandalocker.tools.isValidEmailAddress( email ) ) {
                            showNotice( $.pandalocker.lang.errors_inorrect_email );
                            return;
                        }            

                        if ( options.callback ) options.callback( email );
                     });
                }
            );
    
            // SCREEN: Data Processing
            
            this._registerScreen('data-processing',
                function( $holder, options ) { 
                    
                    $holder.append( $("<div class='onp-sl-process-spin'></div>") );
                    $holder.append( $("<div class='onp-sl-processing-sreen-text'>" + $.pandalocker.lang.misc_data_processing + "</div>") );
                }
            );  
    
            // SCREEN: Email Confirmation
            
            this._registerScreen('email-confirmation', 
                function( $holder, options ) {                    
  
                    // shows the message
  
                    var $message = $('<div class="onp-sl-screen-message"></div>');
                    
                    var $strong = $("<div class='onp-sl-header'></div>").html( $.pandalocker.lang.confirm_screen_title );        
                    var $text = $("<div class='onp-sl-message'></div>");
                    
                    var $line1 = $('<p></p>').html($.pandalocker.lang.confirm_screen_instructiont.replace( '{email}', '<strong>' + options.email + '</strong>' + ' <a href="#" class="onp-sl-cancel">' + $.pandalocker.lang.confirm_screen_cancel + '</a>'  ));
                    var $line2 = $('<p class="onp-sl-highlight"></p>').html($.pandalocker.lang.confirm_screen_note1);
                    var $line3 = $('<p class="onp-sl-note"></p>').html($.pandalocker.lang.confirm_screen_note2 );                    
                    
                    var $cancel = $line1.find('.onp-sl-cancel');
                    $cancel.click(function(){
                         options.service.cancel();
                         self._showScreen('default');
                         return false;
                    }); 
                    
                    $text.append($line1);
                    $text.append($line2);
                    
                    $message.append( $strong );            
                    $message.append( $text );
                    
                    $holder.append( $message );
                    
                    // show the button 'Check Email Box'
                    
                    var emailParts = options.email.split('@');
                    var emailService = null;

                    if ( emailParts[1].indexOf("gmail") >= 0 ) {
                        emailService = {
                            url: 'https://mail.google.com/mail/?tab=wm',
                            icon: '0px 0px',
                            title: 'Gmail',
                        };
                    } else if ( emailParts[1].indexOf("yahoo") >= 0 ) {
                         emailService = {
                            url: 'https://mail.yahoo.com/',
                            icon: '0px -70px',
                            title: 'Yahoo!'
                        }; 
                    } else if ( emailParts[1].indexOf("hotmail") >= 0 ) {
                         emailService = {
                            url: 'https://hotmail.com/',
                            icon: ' 0px -140px',
                            title: 'Hotmail'
                        }; 
                    } else if ( emailParts[1].indexOf("outlook") >= 0 ) {
                         emailService = {
                            url: 'http://www.outlook.com/',
                            icon: ' 0px -140px',
                            title: 'Outlook'
                        }; 
                    }                    

                    if ( emailService ) {
                        var $checkEmail =  $('<a class="onp-sl-button onp-sl-form-button onp-sl-form-button-sm onp-sl-open"></a>').html( $.pandalocker.lang.confirm_screen_open.replace('{service}', emailService.title));
                        $checkEmail.attr('href', emailService.url);
                        $checkEmail.attr('target', '_blank');
                        
                        if ( emailService.icon ) {
                            $checkEmail.addClass('onp-sl-has-icon');
                            var $icon = $('<i class="onp-sl-icon"></i>').prependTo( $checkEmail );
                            $icon.css('background-position', emailService.icon);
                        }
                        
                        var $checkEmailWrap = $("<div class='onp-sl-open-button-wrap'></div>");
                        $checkEmailWrap.append($checkEmail);
                        
                        $holder.append( $checkEmailWrap );
                    }
                    
                    $holder.append($line3);
                }
            );
        },               
        
        // --------------------------------------------------------------------------------------
        // Lock/Unlock content.
        // --------------------------------------------------------------------------------------

        _lock: function ( sender ) {
            var self = this;
            
            if ( this._isLocked ) return;
            if ( !this._markupIsCreated ) this._createMarkup();

            if ( !this.overlap ) {
                
                this.element.hide();
                this.locker.fadeIn(1000);
                
            } else {

                this.overlapLockerBox.fadeIn(1000, function(){ self._updateLockerPosition(); });
                self._updateLockerPosition();
            }

            this._isLocked = true;
            
            this.runHook('lock');            
            this.runHook('locked');
            
            setTimeout(function(){            
                self._startTrackVisability();  
            }, 1500);
        },

        _unlock: function ( sender, sernderName, value ) {
            var self = this;

            // returns if we have turned off the locker
            if ( this.options.locker.off ) return;

            if (!this._isLocked) { 
                this.runHook('cancel', [sender]);  
                this._showContent( sender === "button" ); 
                return false; 
            }

            this._showContent(true);
            this._isLocked = false;
            
            this.runHook('unlock', [sender, sernderName, value]);  
            this.runHook('unlocked', [sender, sernderName, value]);
        },

        lock: function ( sender ) {
            this._lock( sender || "api" );
        },

        unlock: function ( sender, sernderName, value ) {
            this._unlock( sender || "api", sernderName, value );
        },

        // --------------------------------------------------------------------------------------
        // Markups and others.
        // --------------------------------------------------------------------------------------

        /**
        * Creates the plugin markup.
        */
        _createMarkup: function () {
            var self = this;
            
            this._loadFonts();
            
            var element = (this.element.parent().is('a')) ? this.element.parent() : this.element;
            element.addClass("onp-sl-content");

            var browser = ($.pandalocker.browser.mozilla && 'mozilla') ||
                          ($.pandalocker.browser.opera && 'opera') ||
                          ($.pandalocker.browser.webkit && 'webkit') || 'msie';

            this.locker = $("<div class='onp-sl onp-sl-" + browser + "'></div>");
            this.outerWrap = $("<div class='onp-sl-outer-wrap'></div>").appendTo(this.locker);
            this.innerWrap = $("<div class='onp-sl-inner-wrap'></div>").appendTo(this.outerWrap);
            
            var screen = $("<div class='onp-sl-screen onp-sl-screen-default'></div>").appendTo(this.innerWrap);
            this.screens['default'] = this.defaultScreen = screen;
            
            this.locker.addClass(this.style);         
            this.locker.addClass('onp-sl-' + this.lockerType);
            this.locker.addClass('onp-sl-' + this.options.groups.order[0] + '-frist');

            this.locker.addClass( this.options.groups.order.length === 1 ? 'onp-sl-contains-single-group' : 'onp-sl-contains-many-groups' );

            for ( var index = 0; index < this.options.groups.order.length; index++ ) {
                this.locker.addClass( 'onp-sl-' + this.options.groups.order[index] + '-enabled' );
            }

            $.pandalocker.isTouch()
                ? this.locker.addClass('onp-sl-touch')
                : this.locker.addClass('onp-sl-no-touch');

            if ( this.options.cssClass ) this.locker.addClass( this.options.cssClass );
            
            // - classic mode
            // when we use the classic mode, we just set the display property of the locked content
            // to "none", then add the locker after the locked content.
            if ( !this.overlap ) {
               
                this.locker.hide();
                this.locker.insertAfter( element ); 
                
            // - overlap mode  
            // when we use the overlap mode, we put the locker inside the locked content,
            // then set the locker position to "absolute" and postion to "0px 0px 0px 0px".
            } else {
                           
                element.addClass("onp-sl-overlap-mode");
                
                var displayProp = this.element.css("display");
                
                // creating content wrap if it's needed
                var $containerToTrackSize = element;
                if ( 
                    this.overlap === 'blurring' ||
                    element.is("img") || element.is("iframe") || element.is("object") || 
                    ( displayProp !== "block" && displayProp !== "inline-block" ) ) {
                
                    $containerToTrackSize = $('<div class="onp-sl-content-wrap"></div>')
                    $containerToTrackSize.insertAfter( element );
                    $containerToTrackSize.append( element );

                    var originalMargin = element.css('margin');
                    $containerToTrackSize.css({'margin': originalMargin});
                    element.css({'margin': '0'});
                    
                    self.addHook('unlock', function(){
                        $containerToTrackSize.css({'margin': originalMargin});
                    });
                }
                
                element.show();
                this.element.show();
                
                // creating another content which will be blurred
                if ( this.overlap === 'blurring' ) {  
                    this.blurArea = $("<div class='onp-sl-blur-area'></div>");
                    this.blurArea.insertAfter( element );
                    this.blurArea.append( element );
                    element = this.blurArea;
                }
                
                var positionProp = $containerToTrackSize.css("position");
                if ( positionProp === 'static' ) $containerToTrackSize.css("position", 'relative');
                
                var innerFrame = ( element.is("iframe") && element ) || element.find("iframe");
                if ( innerFrame.length === 1 && innerFrame.css('position') === 'absolute'  ){
                    
                    var skip = ( !element.is(innerFrame) && !innerFrame.parent().is(element) && innerFrame.parent().css('position') === 'relative' );
                    if ( !skip ) {
                        
                        $containerToTrackSize.css({
                            'position': 'absolute',
                            'width': '100%',
                            'height': '100%',
                            'top': innerFrame.css('top'),
                            'left': innerFrame.css('left'),
                            'right': innerFrame.css('right'),
                            'bottom': innerFrame.css('bottom'),
                            'margin': innerFrame.css('margin')
                        });

                        innerFrame.css({
                            'top': 0,
                            'left': 0,
                            'right': 0,
                            'bottom': 0,
                            'margin': 'auto'
                        });      
                    }
                }
				
                // creating other markup for the overlap
                this.overlapLockerBox = $("<div class='onp-sl-overlap-locker-box'></div>").hide();
                this.overlapLockerBox.addClass('onp-sl-position-' + this.options.overlap.position);
                this.overlapLockerBox.append( this.locker );

                this.overlapBox = $("<div class='onp-sl-overlap-box'></div>");
                this.overlapBox.append( this.overlapLockerBox ); 
                this.overlapBox.addClass("onp-sl-" + this.overlap + "-mode");
                this.overlapBox.addClass(this.style + "-theme");
                
                var $overlapBackground = $("<div class='onp-sl-overlap-background'></div>");
                this.overlapBox.append( $overlapBackground ); 
                
                $containerToTrackSize.append( this.overlapBox );
                this.containerToTrackSize = $containerToTrackSize;
                
                if ( this.overlap === 'blurring' ) {
                                    
                    var intensity = ( this.options.overlap && this.options.overlap.intensity ) || 5;
                    this.blurArea = this.blurArea.Vague({
                        intensity: intensity,
                        forceSVGUrl: false
                    });
                    this.blurArea.blur();
                }
                
                $(window).resize(function(){
                    self._updateLockerPosition();
                });
                
                this.addHook('size-changed', function(){
                    self._updateLockerPosition();
                });

                if ( this.options.overlap.position === 'scroll') {
                    $(window).scroll(function(){
                        self._updateLockerPositionOnScrolling();
                    });  
                }         
            }
            
            this._markupIsCreated = true;
            this.runHook('markup-created');
            
            // tracks interactions, we need these hooks to track how 
            // many users interacted with the locker any way
            
            this.locker.click(function(){
                self.runHook('raw-interaction');
            });
            
            this._isLockerVisible = this.locker.is(":visible");
            if ( !this._isLockerVisible ) {
                this.options.lazy = true;
            }
            
            // locked created here, now we can create other elements
            
            // creates markup for buttons
            for ( var i = 0; i < this._groups.length; i++ ) {
                this._groups[i].renderGroup( screen );
            }
            
            // Terms & Conditions and Privacy Policy
            if ( this.options.terms || this.options.privacyPolicy ) this._createTerms();

            // close button and timer if needed
            this.options.locker.close && this._createClosingCross();
            this.options.locker.timer && this._createTimer();
            
            /**
            var serviceOptions = {
                id: self.id,
                proxy: self.options.proxy,
                name: self.options.subscribeActionOptions.name,
                listId: self.options.subscribeActionOptions.listId,
                service: self.options.subscribeActionOptions.service,
                doubleOptin: self.options.subscribeActionOptions.doubleOptin,
                confirm: self.options.subscribeActionOptions.confirm,
                requireName: self.options.subscribeActionOptions.requireName
            };

            var service = new $.pandalocker.services.subscription( serviceOptions );
        
            this._showScreen('email-confirmation', {
                email: 'fff',
                service: service
            }); */
        },
        
        /**
         * Adds a CSS class.
         */
        _addClass: function( className ) {
            this.locker.addClass( className );
        },
        
        /**
         * Loads fonts if needed.
         */
        _loadFonts: function() {
            if ( !this.options.theme.fonts || !this.options.theme.fonts.length ) return;
            
            var protocol = (("https:" === document.location.protocol) ? "https" : "http");
            var base = protocol + '://fonts.googleapis.com/css';
            
            for( var i = 0; i < this.options.theme.fonts.length; i++ ) {    
                var fontData = this.options.theme.fonts[i];
                
                var family = fontData.name;
                if ( fontData.styles && fontData.styles.length ) {
                    family = family + ":" + fontData.styles.join(",");
                }
                
                var url = $.pandalocker.tools.updateQueryStringParameter(base, 'family', family);
                
                if ( fontData.subset && fontData.subset.length ) {
                    url = $.pandalocker.tools.updateQueryStringParameter(url, 'subset', fontData.subset.join(",") );  
                }
                
                var hash = $.pandalocker.tools.hash( url );
                if ( $("#onp-sl-font-" + hash ).length > 0 ) continue;
                    
                $('<link id="onp-sl-font-' + hash + '" rel="stylesheet" type="text/css" href="'+url+'" >').appendTo("head");
            }
        },

        /**
         * Updates the locker position for various overlap modes.
         */
        _updateLockerPosition: function() {
            if ( !this.overlap ) return;

            var self = this;
            
             
            // updates the content size if the locker is bigger then the content
            var contentHeight = this.containerToTrackSize.outerHeight();
            
            if ( typeof this.contentMinTopMargin == "undefined" ) {
                this.contentMinTopMargin = parseInt( this.containerToTrackSize.css('marginTop') );
            }
            
            if ( typeof this.contentMinBottomMargin == "undefined" ) {
                this.contentMinBottomMargin = parseInt( this.containerToTrackSize.css('marginBottom') );
            }
            
            var lockerHeight = this.locker.outerHeight();

            if ( contentHeight < lockerHeight ) {
   
                var value = parseInt( ( lockerHeight - contentHeight ) / 2 ) + 20;
                var topMargin =  this.contentMinTopMargin < value ? value : this.contentMinTopMargin;
                var bottomMargin =  this.contentMinBottomMargin < value ? value : this.contentMinBottomMargin;

                this.containerToTrackSize.css({
                    'marginTop': topMargin + "px",
                    'marginBottom': bottomMargin + "px"
                });
            }
            
            // updates the locker position
            
            if ( this.options.overlap.position === 'top' || this.options.overlap.position === 'scroll' ) {     
                
                var boxWidth = this.overlapBox.outerWidth();
                var lockerWidth = this.locker.outerWidth();
                
                var boxHeight = this.overlapBox.outerHeight();
                
                var offset = this.options.overlap.offset;
                
                if ( !offset ) {
                    var offset = Math.floor( ( boxWidth - lockerWidth ) / 2 );
                    if ( offset <= 10 ) offset = 10;
                }
            
                if ( offset * 2 + lockerHeight > boxHeight ) {
                    var offset = Math.floor( ( boxHeight - lockerHeight ) / 2 );
                }

                this.overlapLockerBox.css('marginTop', offset + 'px' ) ;
                
                if ( this.options.overlap.position === 'scroll' ) {
                    this._baseOffset = offset;
                    this._updateLockerPositionOnScrolling();
                }
            }
            
            if ( this.options.overlap.position === 'middle' ) {
                this.overlapLockerBox.css('marginTop', '-' + Math.floor( this.overlapLockerBox.innerHeight() / 2 ) + 'px' ) ;
                return;
            }
        },
        
        /**
         * Updates the locker position on scrolling.
         */
        _updateLockerPositionOnScrolling: function () {
            
            var boxOffset = this.overlapBox.offset();
            var contentTopBorder = boxOffset.top;
            var contentLeftBorder = boxOffset.left;
            var contentBottomBorder = boxOffset.top + this.overlapBox.outerHeight();
            
            var boxWidth = this.overlapBox.outerWidth();
                
            var boxHeight = this.overlapBox.outerHeight();
            var lockerHeight = this.locker.outerHeight();

            if ( this._baseBoxOffset * 2 + lockerHeight + 10 >= boxHeight ) return;
      
            var scrollTop = $(document).scrollTop();
            
            var shift = 20;
            
            if ( scrollTop + lockerHeight + this._baseOffset * 2 + shift > contentBottomBorder ) {
                
                this.overlapLockerBox
                    .css('position', 'absolute')
                    .css('top', 'auto')
                    .css('left', '0px')
                    .css('width', 'auto') 
                    .css('bottom', this._baseOffset + 'px')
                    .css('margin-top', '0px');
            
                return;
            }
            
            if ( scrollTop + shift > contentTopBorder ) {
                
                this.overlapLockerBox
                    .css('position', 'fixed')
                    .css('top', this._baseOffset + shift + 'px')
                    .css('left', contentLeftBorder + 'px')
                    .css('width', boxWidth + 'px')
                    .css('bottom', 'auto') 
                    .css('margin-top', '0px');
            
                return;
            } 

            this.overlapLockerBox
                .css('position', 'absolute')
                .css('top', '0px')
                .css('left', '0px')
                .css('bottom', 'auto')
                .css('width', 'auto') 
                .css('margin-top', this._baseOffset + 'px');
        },
        
        /**
         * Fires the hook when the locker gets visible in the current viewport.
         */
        _startTrackVisability: function() {
            var self = this;
            var el = this.locker[0];
            
            if ( !el.getBoundingClientRect ) {
                this.runHook('raw-impress');
            } 
            
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();

            var checkVisability = function(){
                
                if ( !el ) {
                    self._stopTrackVisability();
                    return;
                }

                var rect = el.getBoundingClientRect();

                var heightHalf = rect.height / 2;
                var windowHalf = rect.width / 2;      
                
                // if we can see a half of the locker in the current view post, notify about that
                if ( rect.top + heightHalf > 0 && rect.bottom - heightHalf <= windowHeight && 
                     rect.left + windowHalf && rect.right - windowHalf <= windowWidth ) {
                     
                    self.runHook('raw-impress');
                    self._stopTrackVisability();
                }
            };
            
            $(window).bind('resize.visability.opanda', function(){
                windowHeight = $(window).height();
                windowWidth = $(window).width();
            }); 
            
            $(window).bind('resize.visability.opanda scroll.visability.opanda', function(){
                checkVisability();
            });
            
            // if the locker is not visible, binds to click events to catch
            // the moment when it gets visible
            
            if ( !this._isLockerVisible ) {
                
                $("a, button").add($(document)).bind('click.visability.opanda', function(){
                    setTimeout(function(){ checkVisability(); }, 200);
                });  

                this.addHook('raw-impress', function(){
                    self._isLockerVisible = true;
                    $("a, button").add($(document)).unbind('click.visability.opanda');
                });
            }
            
            checkVisability();
        },
        
        _stopTrackVisability: function() {
            $(window).unbind('.visability.opanda');  
        },
        
        // --------------------------------------------------------------------------------------
        // Close Cross
        // --------------------------------------------------------------------------------------  
        
        /**
         * Creates the markup for the close icon.
         */
        _createClosingCross: function () {
            var self = this;

            $("<div class='onp-sl-cross' title='" + $.pandalocker.lang.misc_close + "' />")
                .prependTo(this.locker)
                .click(function () {
                    if (!self.close || !self.close(self)) self._unlock("cross", true);
                });
        },
        
        // --------------------------------------------------------------------------------------
        // Timer
        // --------------------------------------------------------------------------------------  
        
        /**
         * Creates the markup for the timer.
         */
        _createTimer: function () {

            this.timer = $("<span class='onp-sl-timer'></span>");
            var timerLabelText = $.pandalocker.lang.misc_or_wait;
            
            timerLabelText = timerLabelText.replace('{timer}', $("<span class='onp-sl-timer-counter'>" + this.options.locker.timer + "</span>")[0].outerHTML);
            
            this.timerLabel = $("<span class='onp-sl-timer-label'></span>").html(timerLabelText).appendTo(this.timer);
            this.timerCounter = this.timerLabel.find('.onp-sl-timer-counter');
                    
            this.timer.appendTo(this.locker);

            this.counter = this.options.locker.timer;
            this._kickTimer();
        },
        
        /**
         * Executes one timer step.
         */
        _kickTimer: function () {
            var self = this;

            setTimeout(function () {

                if (!self._isLocked) return;

                self.counter--;
                if (self.counter <= 0) {
                    self._unlock("timer");
                } else {
                    self.timerCounter.text(self.counter);

                    // Opera fix.
                    if ($.pandalocker.browser.opera) {
                        var box = self.timerCounter.clone();
                        box.insertAfter(self.timerCounter);
                        self.timerCounter.remove();
                        self.timerCounter = box;
                    }

                    self._kickTimer();
                }
            }, 1000);
        },
        
        // --------------------------------------------------------------------------------------
        // Terms & Conditions / Privacy Policy
        // -------------------------------------------------------------------------------------- 
        
        _createTerms: function() {
            this.locker.addClass('onp-sl-has-terms');
            
            this.terms = $("<div class='onp-sl-terms'></div>").appendTo( this.defaultScreen );
            this.termsInnerWrap = $("<div class='onp-sl-terms-inner-wrap'></div>").appendTo( this.terms  );
            
            var text = $.pandalocker.lang.misc_your_agree_with;
            var links = '';
            
            if ( this.options.terms ) {
                
                links = $("<a target='_black' class='onp-sl-link'>" + $.pandalocker.lang.misc_terms_of_use + "</a>")
                    .attr('href', this.options.terms)[0].outerHTML;
            }

            if ( this.options.privacyPolicy ) {
                
                if ( this.options.terms ) links = links + ", ";
                links = links + $("<a target='_black' class='onp-sl-link'>" + $.pandalocker.lang.misc_privacy_policy + "</a>")
                    .attr('href', this.options.privacyPolicy)[0].outerHTML;
            }
            
            if ( links ) text = text.replace('{links}', links);
            this.termsInnerWrap.html(text);
            
            if ( this.options.termsPopup ) {
                var popupWidth = this.options.termsPopup.width || 550;
                var popupHeight = this.options.termsPopup.height || 400;         
                        
                this.termsInnerWrap.find('.onp-sl-link').click(function(){
                    var url = $(this).attr('href');
                    window.open(url, 'bizpanda_policies', "width=" + popupWidth + ",height=" + popupHeight + ",resizable=yes,scrollbars=yes");
                    return false;
                });
            }
        },
        
        // --------------------------------------------------------------------------------------
        // Displaying content
        // --------------------------------------------------------------------------------------        
        
        _showContent: function (useEffects) {
            var self = this;
            
            this.runHook('before-show-content');
            
            var effectFunction = function () {
                
                if ( self.overlap ) {
                    if ( self.overlapBox ) self.overlapBox.hide();
                    if ( self.blurArea ) self.blurArea.unblur();
                } else {
                    if (self.locker) self.locker.hide();    
                }
                
                if (self.locker) self.locker.hide();
                
                if (!useEffects) { 
                    self.element.show();
                } else {
                    self.element.fadeIn(1000, function () {
                        self.options.highlight && self.element.effect && self.element.effect('highlight', { color: '#fffbcc' }, 800);
                    });
                }

                self.runHook('after-show-content');
            };

            if (!this.options.content) {
                effectFunction();

            } else if (typeof this.options.content === "string") {
                this.element.html(this.options.content);
                effectFunction();

            } else if (typeof this.options.content === "object" && !this.options.content.url) {
                this.element.append(this.options.content.clone().show());
                effectFunction();

            } else if (typeof this.options.content === "object" && this.options.content.url) {

                var ajaxOptions = $.extend(true, {}, this.options.content);

                var customSuccess = ajaxOptions.success;
                var customComplete = ajaxOptions.complete;
                var customError = ajaxOptions.error;

                ajaxOptions.success = function (data, textStatus, jqXHR) {

                    !customSuccess ? self.element.html(data) : customSuccess(self, data, textStatus, jqXHR);
                    effectFunction();
                };

                ajaxOptions.error = function (jqXHR, textStatus, errorThrown) {

                    self._showError( 'ajax', "An error is triggered during the ajax request! Text: " + textStatus + " " + errorThrown);
                    customError && customError(jqXHR, textStatus, errorThrown);
                };

                ajaxOptions.complete = function (jqXHR, textStatus) {

                    customComplete && customComplete(jqXHR, textStatus);
                };

                $.ajax(ajaxOptions);

            } else {
                effectFunction();
            }
        }
    });
    
    $.fn.sociallocker = function( options ) {
        return $(this).pandalocker(options);
    };

})(jQuery);