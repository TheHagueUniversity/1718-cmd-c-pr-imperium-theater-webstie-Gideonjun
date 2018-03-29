//console.log('test!');
var timeout;

window.onload = function(){
	var slideshow = new Siema({
		selector: '.siema',
		duration: 200,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 20,
		loop: true,
		rtl: false,
		onInit: () => {},
		onChange: () => {},
	});	

	document.getElementsByClassName('links')[0].onclick = function(){
		slideshow.prev(1);
		clearTimeout(timeout);
		loop();
	};

	document.getElementsByClassName('rechts')[0].onclick = function(){
		slideshow.next(1);
		clearTimeout(timeout);
		loop();
	};

	function loop (){
		timeout = setTimeout(function(){
			slideshow.next(1);
			loop();
		}, 4000);
	};	

	loop();
};
