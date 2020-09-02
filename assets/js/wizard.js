(function ($) {

    window.optGenerator = window.optGenerator || {};

    window.optGenerator = {

        _options: {},
        _buttonsOrder: [],
        _local: false,

        init: function () {
            this.refresh();
            this.setupEvents();
        },
        
        /**
         * Recreates the locker.
         */
        refresh: function () {
            var newContent = window.toLockContent.clone();
            var oldContent = $("#default-usage");

            oldContent.after(newContent);
            oldContent.remove();

            if (!this._local && this.getStorage('slg_option_generator')) {
                this._options = JSON.parse(this.getStorage('slg_option_generator'));

                this.updateFilds(this._options);
                this.printLockerOptions();
                this._local = true;
            } else {
                this.setLockerOption();
            }
            
            var optionsToPass = $.extend(true, {}, this._options);
            optionsToPass.demo = true;
            
            newContent.find(".to-lock").pandalocker(optionsToPass);
        },
        
        /**
         * Binds events.
         */
        setupEvents: function () {
            var self = this;

            $('.slg-show-locked-content-box').click(function(){
                $('.slg-locked-content-box').fadeIn(500);
            });

            $('.slg-show-code-box').click(function () {
                $('#slg-code-box-2, .slg-dark-layer').fadeIn(200);
            });

            $('.slg-code-box-button-close').click(function () {
                $('#slg-code-box-2, .slg-dark-layer').fadeOut(300);
            });

            $('.slg-btn-edit').click(function () {
                self.btnSlider($(this).closest('li'));
            });

            $('.slg-setting-panel input, .slg-setting-panel textarea, .slg-setting-panel select, .slg-locked-content-box textarea').change(function () {
                self.refresh();
            });
            
            $('.slg-btn-ckeckbox').change(function(){
                if ( !$(this).is(":checked") ) return;
                $(this).parent().parent().find(".slg-btn-edit").click();
            });

            $(".slg-setting-panel-button-segment ul").sortable({
                handle: '.slg-btn-move'
            }).bind('sortupdate', function (e) {
                self.refresh();
            });

            $('#slg-overlap-mode').change(function () {
                if ($(this).val() == "transparence" || $(this).val() == "blurring") {
                    $('#slg-overlap-position, label[for="slg-overlap-position"]').fadeIn(200);
                } else {
                    $('#slg-overlap-position, label[for="slg-overlap-position"]').fadeOut(200);
                }

                if ($(this).val() == "blurring")
                    $('#slg-overlap-intensity, label[for="slg-overlap-intensity"]').fadeIn(200);
                else
                    $('#slg-overlap-intensity, label[for="slg-overlap-intensity"]').fadeOut(200);
            });
            
            $('#slg-overlap-mode').change();
            
            $('.slg-icon-help').click(
                function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    var position = $(this).position();
                    var el = $(this).next();

                    if (!el.hasClass('show')) {
                        if ($(this).closest('.slg-setting-panel').hasClass('slg-setting-panel-right'))
                            position.left -= 270;
                        else
                            position.left -= 25;

                        el.fadeIn(300, function () {
                            $(this).addClass('show');
                        }).css({
                            top: position.top + 30,
                            left: position.left
                        });
                    } else {
                        el.fadeOut(300, function () {
                            $(this).removeClass('show');
                        });
                    }
                }
            );

            $(document).click(function (e) {
                $('.slg-field-hint').fadeOut(300, function () {
                    $(this).removeClass('show');
                });
            });
        },

        getStorage: function (storageName) {
            var storageValue = '';
            var tryCookies = true;
            if (localStorage) {
                tryCookies = false;
                try {
                    if (!localStorage.getItem(storageName)) return false;
                    storageValue = localStorage.getItem(storageName);
                } catch (e) {
                    console && console.log(e);
                    tryCookies = true;
                }
            }

            if (tryCookies) {
                if (!$.onepress.tools.cookie(storageName)) return false;
                storageValue = $.onepress.tools.cookie(storageName);
            }
            return storageValue;
        },

        setStorage: function (storageName, value) {
            var tryCookies = true;
            if (localStorage) {
                tryCookies = false;
                try {
                    var storageValue = localStorage.getItem(storageName);
                    if (storageValue) localStorage.removeItem(storageName);
                    localStorage.setItem(storageName, value);
                } catch (e) {
                    console && console.log(e);
                    tryCookies = true;
                }
            }

            if (tryCookies) {
                $.onepress.tools.cookie(storageName, value, {expires: 86400, path: "/"});
            }
        },

        updateFilds: function () {
            var fildData = this.convetOptionsToArrayPair(this._options);

            for( d in fildData ) {
                if( d == 'slg-content' ) {
                    $('#' + d).val(this.strDecode(fildData[d]));
                } else {
                    if( $('#' + d).attr('type') == 'checkbox' ) {
                        $('#' + d).attr('checked', fildData[d]);
                    } else {
                        $('#' + d).val(fildData[d]);
                    }
                }
            }

            $('.slg-btn-ckeckbox').attr('checked', false);
            if ( this._options.buttons ) {
                for( b in this._options.buttons.order ) {
                    $('#slg-btn-' + this._options.buttons.order[b]).attr('checked', true);

                }
            }
        },

        convetOptionsToArrayPair: function (options, alias) {
            var arr = [];
            for( var i in options ) {
                if( i !== 'buttons' ) {
                    if ( typeof options[i] !== 'object' ) {
                        var k = ((alias) ?  alias + '-' + i : i);
                        var selector = '';

                        if( $('#slg-btn-' + k).length )
                            selector = 'slg-btn-' + k;
                        else
                            selector = 'slg-' + k;

                        arr[selector] = options[i];
                    } else {
                        var recRes = this.convetOptionsToArrayPair( options[i], (alias) ?  alias + '-' + i : i );
                        for( k in  recRes) {
                            arr[k] = recRes[k];
                        }
                    }
                } else {

                    if ( typeof options[i]['counters'] !== 'undefined' ) arr['slg-buttons-counter'] = options[i]['counters'];
                    if ( typeof options[i]['lazy'] !== 'undefined' ) arr['slg-buttons-lazy'] = options[i]['lazy'];            
                }
            }
            return arr;
        },

        setLockerOption: function () {
            this.updateLockerOptions();
            this.printLockerOptions();
        },

        updateOrderButton: function () {
            var self = this;
            self._buttonsOrder = [];

            $(".slg-setting-panel-button-segment ul").find('li').each(function () {
                var buttonId = $(this).find('.slg-btn-ckeckbox:checked').attr('id');

                if (buttonId) {
                    self._buttonsOrder.push(buttonId.replace('slg-btn-', ''));
                }
            });
            
            if ( !self._buttonsOrder.length )
                self._buttonsOrder = ["facebook-like", "twitter-tweet", "google-plus"];
        },

        updateLockerOptions: function () {
            var self = this;

            self._options = {};

            $('.slg-setting-panel-left, .slg-locked-content-box').find('input, select, textarea')
                .add($('.slg-btn-ckeckbox:checked').parent().next().find('input, select, textarea'))
                .not('#slg-selector')
                .each(function (i, el) {
                    var checkPoint = $(this).attr('type') == 'checkbox' ? Number($(this).is(':checked')) : $(this).val();

                    if (checkPoint != $(this).data('default')) {
                        self.converteFildIdToLockerOption($(this).attr('id'));
                    }
            });
            
            self.updateOrderButton();
            
            if (self._buttonsOrder && self._buttonsOrder.length) {
                if (!self._options.buttons) self._options.buttons = {};
                self._options.buttons.order = self._buttonsOrder;
                self._options.buttons.counters = $("#slg-buttons-counter").is(':checked');
                self._options.buttons.lazy = $("#slg-buttons-lazy").is(':checked');            
            }

            if (self._options.content) {
                self._options.content = self.strEncode(self._options.content);
                self._options.contentEncode = true;
            }
            
            var lang = $("#slg-lang").val();
            if ( lang !== 'en_US') {
                self._options.lang = lang;

                if ( $.inArray( "twitter-tweet", self._buttonsOrder ) || $.inArray( "twitter-follow", self._buttonsOrder ) ) {
                    if ( !self._options.twitter ) self._options.twitter = {};
                    self._options.twitter.lang = lang.split('_')[0];
                }

                if ( $.inArray( "facebook-like", self._buttonsOrder ) || $.inArray( "facebook-share", self._buttonsOrder ) ) {
                    if ( !self._options.facebook ) self._options.facebook = {};
                    self._options.facebook.lang = lang;
                }

                if ( $.inArray( "google-plus", self._buttonsOrder ) || $.inArray( "google-share", self._buttonsOrder ) ) {
                    if ( !self._options.google ) self._options.google = {};
                    self._options.google.lang = lang.split('_')[0];
                }  
            }

            self.setStorage('slg_option_generator', JSON.stringify(this._options));
        },

        converteFildIdToLockerOption: function (fildId) {
            var self = this;
            var elements = fildId.replace(/(slg-btn-|slg-)/i, '').split("-");

            var base = self._options;
            var itemValue = $("#" + fildId).attr('type') == 'checkbox' ? $("#" + fildId).is(":checked") : $("#" + fildId).val();

            for (var i in elements) {
                var isLast = ( i == elements.length - 1);

                if (!base[elements[i]] || isLast) {
                    base[elements[i]] = isLast ? itemValue : {};
                }

                base = base[elements[i]];
            }
        },

        printLockerOptions: function () {
            var uniqueID = Math.floor((Math.random() * 999999) + 1);
            var selector = $('#slg-selector').val() || '.to-lock';
            var advancedTags = "";

            if (this._options.content) {
                selector = '.to-lock-' + uniqueID;
                advancedTags = "\n<div class=\"to-lock-" + uniqueID + "\"></div>";
            }

            $('#slg-code-box-2 textarea').text(
                "<script>\njQuery(document).ready(function ($) {\n   " +
                "$('" + selector + "').sociallocker({\n" + this.convertObjectOptionsToString(this._options) + "   });\n" +
                "});\n</script>" + advancedTags
            );
        },

        convertObjectOptionsToString: function (options, deph) {
            var str = '';
            var deph = deph ? deph : 0;
            var t = this.getTabByDeph(deph);
            var i = 1;

            for (var p in options) {
                str += t;

                if (typeof options[p] == 'string' || typeof options[p] == "number" || typeof options[p] == "boolean" || Array.isArray(options[p])) {
                    var option;

                    if (typeof options[p] == "boolean" || typeof options[p] == "number" )
                        option = options[p];
                    else if (Array.isArray(options[p]))
                        option = "[" + this.arrayToStr(options[p]) + "]";
                    else
                        option = "'" + options[p] + "'";

                    str += p + ": " + option;
                } else {
                    str += p + ":{\n" + this.convertObjectOptionsToString(options[p], deph + 1) + "}";
                }

                if (this.countProperties(options) != i)
                    str += ",\n";
                else
                    str += "\n" + ( deph ? this.getTabByDeph(deph - 1) : '');
                i++;
            }
            return str;
        },

        getTabByDeph: function (deph) {
            var t = "\t";
            for (k = 0; k < deph; k++) {
                t += "   ";
            }
            return t;
        },

        arrayToStr: function (arr) {
            var str = [];
            for (i in arr) {
                str.push('"' + arr[i] + '"');
            }
            return str.join();
        },

        countProperties: function (obj) {
            var count = 0;

            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    ++count;
            }

            return count;
        },

        strEncode: function (str) {
            var n = '';
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (i = 0; i < str.length; i++) {
                n += str.charCodeAt(i) + possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return n;
        },

        strDecode: function(str) {
            var res = '';
            var separateSymbols = str.split(/[a-z]{1}/i);
            for(i=0; i<separateSymbols.length; i++) {
                res += String.fromCharCode(separateSymbols[i]);
            }
            return res;
        },

        btnSlider: function (self) {
            if (!self.hasClass('active')) {
                var elements = $('.slg-setting-panel-button-segment ul li');

                elements.find('.slg-sub-button-setting').slideUp(200, function () {
                    elements.removeClass('active');
                });

                self.addClass('active');
                self.find('.slg-sub-button-setting').slideDown(200, function () {

                });
            } else
                self.find('.slg-sub-button-setting').slideUp(200, function () {
                    self.removeClass('active');
                });

        }
    };

    $(function () {
        window.toLockContent = $("#default-usage").clone();
        window.optGenerator.init();
    });
})(jQuery);