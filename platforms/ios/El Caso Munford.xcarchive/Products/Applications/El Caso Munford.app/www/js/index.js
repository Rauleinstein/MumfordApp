! function(a) {
	function f(a, b) {
		if (!(a.originalEvent.touches.length > 1)) {
			a.preventDefault();
			var c = a.originalEvent.changedTouches[0],
				d = document.createEvent("MouseEvents");
			d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
		}
	}
	if (a.support.touch = "ontouchend" in document, a.support.touch) {
		var e, b = a.ui.mouse.prototype,
			c = b._mouseInit,
			d = b._mouseDestroy;
		b._touchStart = function(a) { var b = this;!e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown")) }, b._touchMove = function(a) { e && (this._touchMoved = !0, f(a, "mousemove")) }, b._touchEnd = function(a) { e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1) }, b._mouseInit = function() {
			var b = this;
			b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b)
		}, b._mouseDestroy = function() {
			var b = this;
			b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b)
		}
	}
}(jQuery);
$(function() {
	FastClick.attach(document.body);
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
		$('#page0').load('p0.html');
		$('#page1').load('p1.html');
		$('#page2').load('p2.html');
		$('#page3').load('p3.html');
		$('#page4').load('p4.html');
		$('#page5').load('p5.html');
		$('#page6').load('p6.html');
		$('#page7').load('p7.html');
		$('#page8').load('p8.html');
		$('#page9').load('p9.html');
		$('#page10').load('p10.html');
		var player = document.getElementById("player");
		setTimeout(function() {
			app.beginIntro();
			// $('#page0').hide();
			// $('#logo').hide();
			// $('#personajes').hide();
			// $('#page10').show('fast');
			// $('#page3').removeClass('opacity0');
			// $('.suspect:not(.susbig)').removeClass('opacity0');
		}, 2000);
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener('backbutton', this.onBackButton, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		// app.receivedEvent('deviceready');
	},
	onBackButton: function() {
		// app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {},
	beginIntro: function() {
		$('#logo').addClass('small');
		$('.intro').fadeIn(2000);
		$('#start').fadeIn(2000);
	},
	start: function() {
		$('#start').addClass('pressed');
		$('#page0').fadeOut('slow', function() {
			$('#page1').fadeIn('slow');
		});
	},
	play: function(mode) {
		modo = mode;
		$('#'+mode).addClass('pressed');
		$('#page1').fadeOut('slow', function() {
			$('#page2').fadeIn('slow');
			$('#logo').fadeOut('slow');
			$('#personajes').fadeOut('slow');
			$('.title').addClass('top');
			$('.title2').addClass('top');
			$('.button').on('click', function() {
				event.preventDefault();
				$(this).addClass('pressed');
				var notClicked = $('.button').not(this);
				notClicked.removeClass('pressed');
			});
		});
	},

	playIntro: function() {
		$('#player').fadeIn('fast');
		console.log(modo);
		player.src = 'audio/' + modo + '0.mp3';
		player.load();
		player.play();
		player.onended = function() {
			$('#page2 > .botonera').css("display", "flex").hide().fadeIn('slow');
			$('#b0').hide();
		};
	},

	playAudio: function(numberAudio) {
		console.log("Loading " + 'audio/'+ modo + numberAudio + '.mp3');
		player.src = 'audio/'+ modo + numberAudio + '.mp3';
		player.load();
		player.play();
		player.onended = function() {};
		if (numberAudio == 6 && modo == 'game') {
			app.startPuzzle(3);
			$('#page2').fadeOut('slow', function() {
				$('#page10').removeClass('opacity0');
			});
		}
	},

	resolution: function() {
		$('#page2').fadeOut('slow', function() {
			$('#page3').removeClass('opacity0');
			$('.suspect:not(.susbig)').removeClass('opacity0');
		});
	},

	check_suspect: function(suspect) {
		$('.susbig').attr('id', 'suspect' + suspect);
		setTimeout(function() {
			$('.susbig').removeClass('opacity0');
			$('#confirmation').removeClass('opacity0');
		}, 150);
		if (suspect == 6) {
			$('.susbig').prop("onclick", null).off("click");
			$('#confirmation').html('ES EL ASESINO');
			$('.botonera').removeClass('hidden');
			confetti.start();
			setTimeout(function() {
				confetti.stop();
				$('#page3').fadeOut('slow', function() {
					$('#page4').fadeIn('slow');
					$('.suspect').fadeIn('slow');
				});
			}, 2000);
		}
	},

	remove_suspect: function() {
		$('.susbig').addClass('opacity0');
		$('#confirmation').addClass('opacity0');
		confetti.stop();
	},

	helper: function(helper) {
		$('#helper' + helper).addClass('frame');
		$('#page4').fadeOut('slow', function() {
			$('#page5').fadeIn('slow');
		});
		localStorage.setItem('helper', helper);
	},

	key: function(key) {
		$('#key' + key).addClass('pressed');
		$('#page5').fadeOut('slow', function() {
			$('#page6').fadeIn('slow');
		});
		localStorage.setItem('key', key);
	},

	motive: function(motive) {
		$('#motive' + motive).addClass('pressed');
		$('#page6').fadeOut('slow', function() {
			$('#page7').fadeIn('slow');
		});
		localStorage.setItem('motive', motive);
	},

	thanks: function() {
		$('#page7').fadeOut('slow', function() {
			$('#page8').fadeIn('slow');
		});
	},

	aboutUs: function() {
		$('#page8').fadeOut('slow', function() {
			$('#page9').fadeIn('slow');
		});
	},

	backToCredits: function() {
		$('#page9').fadeOut('slow', function() {
			$('#page8').fadeIn('slow');
		});
	},

	backToAudio: function() {
		$('#page10').addClass('opacity0');
		$('#page2').fadeIn('slow');
	},

	startPuzzle: function(x) {
		console.log("puzzle started");
		$('#pile').height($('#source_image').height());
		$('#puzzle_solved').hide();
		$('#source_image').snapPuzzle({
			rows: x,
			columns: x,
			pile: '#puzzle-containment',
			containment: '#puzzle-containment',
			onComplete: function() {
				$('#source_image').fadeOut(150).fadeIn();
				$('#puzzle_solved').show();
			}
		});
		$(window).resize(function() {
			$('#pile').height($('#source_image').height());
			$('#source_image').snapPuzzle('refresh');
		});
	}

};
