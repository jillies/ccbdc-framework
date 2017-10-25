// For sticky hover fix dropdown functionality in Safari iOS
(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document);

//Dropdown menu for Expand
var dropdownMenuController = dropdownMenuController || (function() { 

	function init() {
		showMenu();
	}

	function showMenu() {

		var dropdownMenu = ".header--menu-fullextend";

		$(".header--menu-fulldropdown a").click(function(){
			if( $(dropdownMenu).is(':hidden') ) {
				$(this).find("i").html("keyboard_arrow_up");
				$(dropdownMenu).show();
				$("head, body").addClass("no-scroll");
				$("header").addClass("fixed-position-desktop");
				$(".content--container").addClass("content--container-defer");
			} else {
				$(this).find("i").html("keyboard_arrow_down");
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

