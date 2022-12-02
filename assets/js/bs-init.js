if (window.innerWidth < 768) {
	$('[data-bss-disabled-mobile]').removeClass('animated').removeAttr('data-aos data-bss-hover-animate data-bss-parallax-bg data-bss-scroll-zoom');
}

$(document).ready(function(){

	$('[data-bss-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bss-chart'));
	});

});