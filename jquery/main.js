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

//Show/Hide for Search Overlay

var searchController = searchController || (function() { 

	function init() {
		searchOverlay();
	}

	function searchOverlay() {

		var searchOverlay = ".search--container";

		$(".header--menu-search a").click(function(){
			if( $(searchOverlay).is(':hidden') ) {
				$(searchOverlay).show();
				// $("head, body").addClass("no-scroll");
				// $("header").addClass("fixed-position-desktop");
			} else {
				$(searchOverlay).hide();
				$("head, body").removeClass("no-scroll");
				$("header").removeClass("fixed-position-desktop");
 			}
		});
	}

	return {
        init: init
    }

})(jQuery);

// Search autocomplete
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _renderMenu: function( ul, items ) {
            var self = this,
                currentCategory = "";
            $.each( items, function( index, item ) {
                if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                self._renderItem( ul, item );
            });
        }
    });
    $(function() {
        var data = [
            { label: "iPhone SE", id: "1", category: "Products" },
            { label: "Apple iPhone", id: "2", category: "" },
            { label: "iPhone X", id: "3", category: "Products" },
            { label: "iPhone 8", id: "4", category: "Products" },
            { label: "iPhone 7", id: "5", category: "Products" },
            { label: "iPhone 7 Plus", id: "6", category: "Products" },
            { label: "iPhone 7 Plus with Maxis Zerolution", id: "7", category: "Products" },
        ];
        
        $( "#search" ).catcomplete({
            delay: 0,
            source: data,
            select: function(event, ui) {
                // processing done here
            }
        
        });
    });

// Infinite Scrolling for Search Results
// $('.search--results-container').infiniteScroll({
// 	path: '.pagination__next',
// 	append: '.search--results-listing',
// 	status: '.page-load-status'
// });

var infScroll = new InfiniteScroll( '.search--results-container', {
  path: function() {
    return 'includes/search/results-' + ( ( this.loadCount + 1 ) ) + '.php';
  },
  append: '.search--results-listing',
  // checkLastPage: true,
  prefill: false,
  // responseType: 'document',
  // outlayer: false,
  // scrollThreshold: 400,
  elementScroll: '.search--container',
  // loadOnScroll: true,
  // history: 'push',
  // historyTitle: false,
  // hideNav: '.pagination',
  debug: true,
 	// path: '.pagination__next',
	append: '.search--results-listing',
	status: '.page-load-status'
})

$(function() {
    dropdownMenuController.init();
    searchController.init();
});
