
$(document).ready(function() {
    $('body .section').eq(0).addClass("active").fadeIn(1000); // Показываем первый блок, можно и не первый, если прописать нужную цифру в eq()
    setInterval('blockAnimate();', 12000);// Вызываем функцию для смены блока каждые 20 секунд
});

// Функция для смены блоков, показывает блоки по очереди, начальный блок задаётся выше
function blockAnimate() {
    var length = $('body .section').length - 1;
    $('body .section').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass("active").fadeOut(1000).next('.section').addClass("active").delay(1000).fadeIn(1000);
            return false;

        } 
        
        else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('body .section').eq(0).addClass("active").delay(1000).fadeIn(1000);
            return false;
        }
    });
};

$(document).ready(function(){
  $(".menu-btn").click(function() {
    $(".menu-desktop").fadeToggle(300);
    $('.menu-close').addClass('change');
  });
  $(".menu-close").click(function() {
    $(".menu-desktop").fadeToggle(300);
    $('.menu-close').removeClass('change');
  });
});

$(document).ready(function(){
  $(".arrowDown").click(function() {
    $('.redForm').toggleClass("show"); 
    $('.redForm form').fadeToggle(200); 
    $(this).toggleClass("rotated");
    $(".bottom-part").toggleClass("long");
  });
});


$(document).ready(function(){

	if(window.innerWidth > 500){
		$(".close-cookies").click(function() {
			$('.cookie-branch').hide();
			$('.section').css("height", "100vh");
			$('#top-part').css("height", "50vh");
            $('.hover-block').css("height", "100vh");
		});
	}
	else {
		$(".close-cookies").click(function() {
			$('.cookie-branch').hide();
			$('.section').css("height", "100vh");
			$('#top-part').css("height", "65vh");
            $('.hover-block').css("height", "100vh");
		});
	}
	
	if(window.innerWidth > 500){
		if ($(".cookie-branch").length) {
			$('.section').css("height", "calc(100vh - 40px)");
			$('#top-part').css("height", "calc(50vh - 40px)");
            $('.hover-block').css("height", "calc(100vh - 40px)")
		
		}
		else {
			$('.section').css("height", "100vh");
			$('#top-part').css("height", "50vh");
            $('.hover-block').css("height", "100vh");
		}
	}
	
    if(window.innerWidth < 500){
	    if ($(".cookie-branch").length) {
			$('.section').css("height", "calc(100vh - 40px)");
			$('#top-part').css("height", "calc(65vh - 40px)");
	    }
	    else { 
			$('.section').css("height", "100vh");
			$('#top-part').css("height", "65vh");
    	}
    }
});


$(document).on('click', 'button.order', function(event) {
	
	$('#win').css('display', 'block');
});

$(document).on('click', 'a.call-order', function(event) {
	
	$('#win1').css('display', 'block');
});

$(document).on('click', '#win button.close-window', function(event) {
	
	$('#win').css('display', 'none');
});

$(document).on('click', '#win1 button.close-window', function(event) {
	
	$('#win1').css('display', 'none');
});

$(document).on('click', '#win .submit-button-form', function(event) {
	
	$('#win').css('display', 'none');
	window.open($('#popup-select').val(), '_blank');
});

$(document).on('click', '.block-color button', function(event) {
	
	window.open('https://www.behance.net/mvacorp', '_blank');
});

$(document).on('click', '.buttonSubmit', function(event) {

    var captcha = grecaptcha.getResponse();

    if ($('.redForm input[name="skype"]').val() == '') {

        return false;
    }

    if ($('.redForm input[name="email"]').val() == '') {

        return false;
    }

    if ($('.redForm textarea').val() == '') {

        return false;
    }

    if ($('.redForm input[type="checkbox"]').prop('checked') == false) {

        return false;
    }

    if (captcha.length) {

        var params = {
            recaptcha: captcha,
            name: $('.redForm input[name="name"]').val(),
            email: $('.redForm input[name="email"]').val(),
            skype: $('.redForm input[name="skype"]').val(),
            text: $('.redForm textarea').val()
        };

        ajax('/?task=sendMessage', params, function (response) {

            if (response.status == 'Ok') {
	
			    $('.redForm').toggleClass("show"); 
			    $('.redForm form').fadeToggle(200); 
			    $('.arrowDown').toggleClass("rotated");
			    $('.bottom-part').toggleClass("long");
			    $('.redForm input[name="name"]').val('');
			    $('.redForm input[name="email"]').val('');
			    $('.redForm input[name="skype"]').val('');
			    $('.redForm textarea').val('');
            }
        });

        grecaptcha.reset();
    }
});

$(document).on('click', '#win1 .submit-button-form', function(event) {

    if ($('#win1 input[name="name"]').val() == '') {

        return false;
    }

    if ($('#win1 input[name="phone"]').val() == '') {

        return false;
    }
    
    if ($('#win1 input[type="checkbox"]').prop('checked') == false) {

        return false;
    }

    var params = {
        name: $('#win1 input[name="name"]').val(),
        phone: $('#win1 input[name="phone"]').val()
    };

    ajax('/?task=sendCallback', params, function (response) {

        if (response.status == 'Ok') {
	        
		    $('#win1 input[name="name"]').val('');
		    $('#win1 input[name="phone"]').val('');
			$('#win1').css('display', 'none');
        }
    });
});


// обёртка для ajax-запроса
function ajax(url, params, callback) {

    if (callback && (typeof(callback) === 'function')) {

        $.ajax({
            url: url,
            type: 'post',
            data: params,
            async: false,
            success: callback,
            error: function (jqxhr, status, message) {
            }
        });
    }
}

//активация маски ввода Номер телефона
jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");
   $("#phone1").mask("+7 (999) 999-9999");
});

// Маска заполнения формы НОМЕР ТЕЛЕФОНА
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), 
                range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
                range.select());
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, 
            firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), 
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), 
                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), 
                        end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), 
                        e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), 
                        input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), 
                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1), 
                        tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), 
                    clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), 
                    partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), 
                checkVal();
            });
        }
    });
});


