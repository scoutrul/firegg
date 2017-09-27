import $ from 'jquery'

const appearModule = {
	    addToAllClasses: function() {
	        $('.slide_up_text').each(function(i, el) {
	            (appearModule.isScrolledIntoView(el)) && $(this).addClass('slide_up_text--active') // toggle: || $(this).removeClass('slide_up_text--active');
	        })
	    },
	    isScrolledIntoView: function(elem) {
	        var viewTop = $(window).scrollTop();
	        var viewBottom = viewTop + $(window).height();
	        var elemTop = $(elem).offset().top;
	        var elemBottom = elemTop + $(elem).height();
	        if (window.innerWidth < 400) {
	            return true
	            // mobile width detect
	        }
	        return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
	    }
	};
	
export default appearModule 