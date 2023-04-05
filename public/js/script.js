/*
Author       : Dreamguys
Template Name: Doccure - Bootstrap Admin Template
Version      : 1.0
*/

(function($) {
    "use strict";

	$(document).ready(function(){
		if(window.location.hash == "#DarkMode"){
			document.body.classList.add('darkmode');
			localStorage.setItem('darkMode', 'enabled');
		}
		// DarkMode with LocalStorage
		if($('#dark-mode-toggle').length > 0) {
			$("#dark-mode-toggle").children("i:first").addClass("active");
			let darkMode = localStorage.getItem('darkMode');

			const darkModeToggle = document.querySelector('#dark-mode-toggle');

			const enableDarkMode = () => {
				document.body.classList.add('darkmode');
				$("#dark-mode-toggle").children("i:last").addClass("active");
				$("#dark-mode-toggle").children("i:first").removeClass("active");
				localStorage.setItem('darkMode', 'enabled');
			}

			const disableDarkMode = () => {
				document.body.classList.remove('darkmode');
				$("#dark-mode-toggle").children("i:last").removeClass("active");
				$("#dark-mode-toggle").children("i:first").addClass("active");
				localStorage.setItem('darkMode', null);
			}

			if (darkMode === 'enabled') {
				enableDarkMode();
			}

			darkModeToggle.addEventListener('click', () => {
				darkMode = localStorage.getItem('darkMode');
				console.log('fire')

				if (darkMode !== 'enabled') {
					enableDarkMode();
				} else {
					disableDarkMode();
				}
			});
		}
	});
	
})(jQuery);