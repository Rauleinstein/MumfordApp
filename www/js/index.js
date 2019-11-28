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
		var player = document.getElementById("player");
		setTimeout(function() {
			app.beginIntro();
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
	}

};

function getPhoneGapPath() {
	var path = window.location.pathname;
	var sizefilename = path.length - (path.lastIndexOf("/") + 1);
	path = path.substr(path, path.length - sizefilename);
	return path;
};
