
const appearModule = {
	    addToAllClasses: function() {
	        Array.from(document.getElementsByClassName('slide_up_text')).forEach(function(el) {
	            (appearModule.isScrolledIntoView(el)) && el.classList.add('slide_up_text--active') // toggle: || $(this).removeClass('slide_up_text--active');
	        })
	    },
	    isScrolledIntoView: function(elem) {
	        var viewTop = window.pageYOffset || document.documentElement.scrollTop;
	        var viewBottom = viewTop + window.innerHeight;

	        var elemTop = elem.offsetTop;

	        var elemBottom = elemTop + elem.getBoundingClientRect().height;

	        if (window.innerWidth < 400) {
	            return true
	        }
	        return ((elemBottom <= viewBottom) && (elemTop >= viewTop))
	    }
	};
	

//Console log title
console.log("%cGuardsman Limited", "font: 2.2rem 'Work Sans', 'sans-serif'; color: #FFF; background-color: #1b1b1b; text-decoration: underline #ff002e");

//magic appear//////////
window.onload = function() {
	(document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 500);
};

("focus resize scroll click mousemove keydown".split(" ")).forEach(function(e){
   window.addEventListener(e,appearModule.addToAllClasses,false);
});
////////////////////////