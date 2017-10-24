// For sticky hover fix dropdown functionality in Safari iOS
(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document);

//Dropdown menu for Expand
var dropdownMenuController = dropdownMenuController || (function() { 

	function init() {
		showMenu();
	}

	function showMenu() {

		var dropdownMenu = ".header--menu-extended";

		$(".header--menu-dropdown a").click(function(){
			if( $(dropdownMenu).is(':hidden') ) {
				$(dropdownMenu).show();
				$("head, body").addClass("no-scroll");
				$("header").addClass("fixed-position-desktop");
				$(".content--container").addClass("content--container-defer");
			} else {
				$(dropdownMenu).hide();
				$("head, body").removeClass("no-scroll");
				$("header").removeClass("fixed-position-desktop");
				$(".content--container").removeClass("content--container-defer");
 			}
		});
	}

	return {
        init: init
    }

})(jQuery);

$(function() {
    dropdownMenuController.init();
});

