// ==UserScript==
// @name         Seriesfeed Season Separator
// @namespace    http://www.seriesfeed.com
// @version      1.0.1
// @description  Shows a thick line between seasons at the episode view.
// @match        http://*.seriesfeed.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @require      http://code.jquery.com/jquery-1.12.2.min.js
// @author       Tom
// @copyright    2016+, Tom
// ==/UserScript==
/* jshint -W097 */
/*global $, console */
'use strict';

$(function() {
	if (window.location.href.indexOf("afleveringen") > -1) {
		var episodes = $('#afleveringen').find('tr');
		
		var current = "00";
		
		for (var i = 1; i < episodes.length; i++) {
			var row    = $(episodes[i]);
			var name   = row.find('td:eq(0)').text().trim();
			var tag    = name.substr(0, name.indexOf(' '));
			var season = /S(.*)E/.exec(tag)[1];
			
			if (current !== season) {
				row.css('border-top', '3px solid #DDD');
				current = season;
			}
		}
	}
});
