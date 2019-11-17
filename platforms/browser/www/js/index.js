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
		$('.intro').addClass('show');
		$('#start').addClass('show');
	},
	start: function() {
		$('#page0').fadeOut('slow', function() {
			$('#page1').fadeIn('slow');
		});
	},
	play: function() {
		$('#page1').fadeOut('slow', function() {
			$('#page2').fadeIn('slow');
			$('#logo').fadeOut('slow');
			$('#personajes').fadeOut('slow');
			$('.title').addClass('top');
			$('.title2').addClass('top');
			// console.log(Media);
			// var url = 'file://' + getPhoneGapPath() + 'ambiente.mp3';
			// var my_media = new Media(url,
			// 	// success callback
			// 	function() {
			// 		console.log("playAudio():Audio Success");
			// 	},
			// 	// error callback
			// 	function(err) {
			// 		console.log("playAudio():Audio Error: " + err);
			// 	}
			// );
			// Play audio
			// my_media.play();
			// var dur = -1;
			// // Update media position every second
			// var mediaTimer = setInterval(function() {
			// 	// get media position
			// 	if (dur < 0) {
			// 		dur = my_media.getDuration();
			// 	}
			// 	console.log(dur+" seg");
			// 	my_media.getCurrentPosition(
			// 		// success callback
			// 		function(position) {
			// 			if (position > -1) {
			// 				console.log((position/dur*100) + " %");
			// 			}
			// 		},
			// 		// error callbackss
			// 		function(e) {
			// 			console.log("Error getting pos=" + e);
			// 		}
			// 	);
			// }, 1000);
		});
	}

};

function getPhoneGapPath() {
	var path = window.location.pathname;
	var sizefilename = path.length - (path.lastIndexOf("/") + 1);
	path = path.substr(path, path.length - sizefilename);
	return path;
};
