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
		var player = document.getElementById("player");
		setTimeout(function() {
			app.beginIntro();
			// $('#page0').hide();
			// $('#logo').hide();
			// $('#personajes').hide();
			// $('#page3').removeClass('hidden');
		}, 2000);
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
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
		player.play();
		player.onended = function() {
			$('.botonera').toggleClass('hidden');
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
			$('#page3').fadeIn('slow');
		});
	},

	resolution_second: function () {
		$('#page3').fadeOut('slow', function() {
			$('#page4').fadeIn('slow');
		});
	},

	check_suspect: function (suspect) {
		$('.susbig').attr('id', 'suspect'+suspect);
		setTimeout(function() {
			$('.susbig').css('opacity', '100');
			$('.susbig').css('z-index', '10');
			$('#confirmation').css('opacity', '100');
		}, 150);
		if (suspect == 6) {
			$('#confirmation').html('ES EL ASESINO');
			$('.botonera').removeClass('hidden');
			confetti.start();
		}
	},

	remove_suspect: function () {
		$('.susbig').css('opacity', '0');
		$('.susbig').css('z-index', '-1');
		$('#confirmation').css('opacity', '0');
		$('#confirmation').html('NO ES EL ASESINO');
		confetti.stop();
	},

	helper: function (helper) {
		console.log($('.helper'));
		$('.helper').removeClass('frame');
		$('#helper'+helper).addClass('frame');
	}

};