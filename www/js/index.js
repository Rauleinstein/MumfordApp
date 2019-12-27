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
		var player = document.getElementById("player");
		setTimeout(function() {
			app.beginIntro();
			// $('#page0').hide();
			// $('#logo').hide();
			// $('#personajes').hide();
			// $('#page9').show('fast');
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
	play: function() {
		$('#play').addClass('pressed');
		$('#page1').fadeOut('slow', function() {
			$('#page2').fadeIn('slow');
			$('#logo').fadeOut('slow');
			$('#personajes').fadeOut('slow');
			$('.title').addClass('top');
			$('.title2').addClass('top');
			$('.button').on('click', function() {
				event.preventDefault();
				$(this).addClass('pressed');
				var notClicked =  $('.button').not(this);
				notClicked.removeClass('pressed');
			});
		});
	},

	playIntro: function () {
		$('#player').fadeIn('fast');
		player.play();
		player.onended = function() {
			$('#page2 > .botonera').css("display", "flex").hide().fadeIn('slow');
			$('#b0').hide();
		};
	},

	playAudio: function (numberAudio) {
		console.log("Loading "+'audio/audio'+numberAudio+'.ogg');
		player.src = 'audio/audio'+numberAudio+'.ogg';
		player.load();
		player.play();
		player.onended = function() {
		};
	},

	resolution: function () {
		$('#page2').fadeOut('slow', function() {
			$('#page3').removeClass('opacity0');
			$('.suspect:not(.susbig)').removeClass('opacity0');
		});
	},

	check_suspect: function (suspect) {
		$('.susbig').attr('id', 'suspect'+suspect);
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

	remove_suspect: function () {
		$('.susbig').addClass('opacity0');
		$('#confirmation').addClass('opacity0');
		confetti.stop();
	},

	helper: function (helper) {
		$('#helper'+helper).addClass('frame');
		$('#page4').fadeOut('slow', function() {
			$('#page5').fadeIn('slow');
		});
		localStorage.setItem('helper', helper);
	},

	key: function (key) {
		$('#key'+key).addClass('pressed');
		$('#page5').fadeOut('slow', function() {
			$('#page6').fadeIn('slow');
		});
		localStorage.setItem('key', key);
	},

	motive: function (motive) {
		$('#motive'+motive).addClass('pressed');
		$('#page6').fadeOut('slow', function() {
			$('#page7').fadeIn('slow');
		});
		localStorage.setItem('motive', motive);
	},

	thanks: function () {
		$('#page7').fadeOut('slow', function() {
			$('#page8').fadeIn('slow');
		});
	},

	aboutUs: function () {
		$('#page8').fadeOut('slow', function() {
			$('#page9').fadeIn('slow');
		});
	}

};