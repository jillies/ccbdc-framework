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
			$(searchOverlay).show();
			$("head, body").addClass("no-scroll");
			$("header").addClass("fixed-position-desktop");
		});

        $(".search--close a").click(function(){
            $(searchOverlay).hide();
            $("head, body").removeClass("no-scroll");
            $("header").removeClass("fixed-position-desktop");
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
            { label: "Apple iPhone", id: "2", category: "" },
            { label: "iPhone SE", id: "1", category: "Products" },
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

var infScroll = new InfiniteScroll( '.search--results-container', {
  	path: function() {
        if ( this.loadCount < 3 ) {
    	   return 'includes/search/results-' + ( ( this.loadCount + 1 ) ) + '.php';
        }
  	},
  	append: '.search--results-listing',
  	checkLastPage: true,
  	prefill: false,
  	elementScroll: '.search--container',
  	history: false,
  	historyTitle: false,
  	debug: true,
	status: '.search--results-status'
})

$(function() {
    dropdownMenuController.init();
    searchController.init();
});

$(".infinite-scroll-last a").click(function() {
    $(".search--container").animate({scrollTop: 0 });
});


$(".feedback--close a").click(function(){
    $(this).parent().parent().hide("fast");
});

