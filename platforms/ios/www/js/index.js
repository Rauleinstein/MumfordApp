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
		var player1 = document.getElementById("player1");
		check_times = 0;
		setTimeout(function() {
			app.beginIntro();
			// $('#page0').hide();
			// $('#logo').hide();
			// $('#personajes').hide();
			// $('#page8').show('fast');
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
			app.startPuzzle(3);
		});
	},
	play: function(mode) {
		modo = mode;
		$('#' + mode).addClass('pressed');
		if (modo == 'listen') {
			$('#text-intro').html('Esta exposición plantea un enigma. Has decidido seguir los pasos del detective Johnson para que él te desvele todos los secretos. Acompaña al detective a través de la exposición y descubre a través de sus testimonios cómo descubrió al culpable.');
		} else {
			$('#text-intro').html('Esta exposición plantea un enigma, un reto, convirtiendote en detective y las imágenes en las piezas del puzzle que debes resolver. Observa los detalles, sigue las pistas y testimonios, y ayuda al detective Johnson a resolver el crimen.');
		}
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

	backToSelect: function () {
		modo = '';
		$('#page2').fadeOut('slow', function() {
			$('#page1').fadeIn('slow');
			$('#logo').fadeIn('slow');
			$('#personajes').fadeIn('slow');
			$('#b0').show();
			$('#page2 > .botonera').css("display", "none").show().fadeOut('slow');
			$('#bIntro').show('fast');
			$('#player1').fadeOut('fast');
		});
	},

	playIntro: function() {
		$('#player1').fadeIn('fast');
		console.log(modo);
		player1.src = 'audio/' + modo + '0.mp3';
		player1.load();
		player1.play();
		player1.onended = function() {
			$('#page2 > .botonera').css("display", "flex").hide().fadeIn('slow');
			$('#b0').hide();
		};
	},

	playAudio: function(numberAudio) {
		console.log("Loading " + 'audio/' + modo + numberAudio + '.mp3');
		player1.src = 'audio/' + modo + numberAudio + '.mp3';
		player1.load();
		player1.play();
		player1.onended = function() {
			if (numberAudio == 9 && modo == 'game') {
				$('#page2').fadeOut('slow', function() {
					$('#page10').removeClass('opacity0');
				});
			}
		};
	},

	resolution: function() {
		if (modo == "game") {
			$('#page2').fadeOut('slow', function() {
				$('#page3').removeClass('opacity0');
				$('.suspect:not(.susbig)').removeClass('opacity0');
			});
		} else {
			$('#page2').fadeOut('slow', function() {
				$('.result-'+modo).removeClass('hidden');
				$('#page7').fadeIn('slow');
			});
		}

	},

	check_suspect: function(suspect) {
		check_times++;
		localStorage.setItem("check_times", check_times);
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
		localStorage.setItem('motive', motive);
		app.score();
		$('.result-'+modo).removeClass('hidden');
		$('#motive' + motive).addClass('pressed');
		$('#page6').fadeOut('slow', function() {
			$('#page7').fadeIn('slow');
		});
	},

	score: function() {
		check_times = localStorage.getItem('check_times');
		motivo = localStorage.getItem('motive');
		ayudante = localStorage.getItem('helper');
		llave = localStorage.getItem('key');
		correct = '&#10004;';
		wrong = '&#10008;';
		starFull = '&#10029;';
		starEmpty = '&#10025;';
		puntuacion = 1;
		if (check_times > 1) {
			$('#asesino').html('Noah Willcox &#10004; ('+check_times+' intentos)');
		} else {
			puntuacion += 1;
		}
		switch(ayudante) {
			case "1":
				$('#ayudante').html('Crystal Munford '+correct);
				puntuacion += 1;
				break;
			case "2":
				$('#ayudante').html('Sebastian Munford '+wrong);
				break;
			case "3":
				$('#ayudante').html('Allan Munford '+wrong);
				break;
			case "4":
				$('#ayudante').html('Samuel Oakes '+wrong);
				break;
		}
		switch(llave) {
			case "1":
				$('#llave').html('Habitación 227 '+wrong);
				break;
			case "2":
				$('#llave').html('Habitación 312 '+correct);
				puntuacion += 1;
				break;
			case "3":
				$('#llave').html('Habitación 317 '+wrong);
				break;
			case "4":
				$('#llave').html('Habitación 315 '+wrong);
				break;
		}
		switch(motivo) {
			case "1":
				$('#motivo').html('Celos '+wrong);
				break;
			case "2":
				$('#motivo').html('Económico '+correct);
				puntuacion += 1;
				break;
			case "3":
				$('#motivo').html('Envidia '+wrong);
				break;
			case "4":
				$('#motivo').html('Ajuste de cuentas '+wrong);
				break;
		}
		text_punt = "";
		for (var i = 1; i <= 5; i++) {
			if (i <= puntuacion) {
				text_punt += starFull;
			} else {
				text_punt += starEmpty;
			}
		}
		$('#puntuacion').html(text_punt);
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
		$('#page3').addClass('opacity0');
		$('#page10').addClass('opacity0');
		$('#page7').fadeOut('slow');
		$('.result-'+modo).addClass('hidden');
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
