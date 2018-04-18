var slideshow = 0;
	carousel();

	//Deze functie zorgt ervoor dat de slider automatisch naar de volgende gaat elke 5 seconden
	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("slideimg");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";  
	    }
	    slideshow++;
	    if (slideshow > x.length) {slideshow = 1}    
	    x[slideshow-1].style.display = "block";  
	    setTimeout(carousel, 5000); // Elke 5 seconden
	}