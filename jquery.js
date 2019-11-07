	var count = 0
$('#create').on('click',function(){
	
	
	if($("#id1").prop('checked')){
		count += 1;
	}
	if($("#id2").prop('checked')){
		count += 1;
	}
	if($("#id3").prop('checked')){
		count += 1;
	}
	if(count === 3 ) {
		$('ul').append('<li classe="black">black</li>')
	}
	if(count === 2) {
		$('ul').append('<li>purple = blue + red</li>')
		$('ul').append('<li>green = blue + yellow</li>')
		$('ul').append('<li>orange = red + yellow</li>')
	}
	if(count === 1) {
		$('ul').append('<li classe="yellow">yellow</li>')
	}
})

$('#delete').on('click', function(){
	if(count === 3) {
		$('ul').first().remove()
	}
	if(count === 2) {
		$('ul').removeChild('li')
	}
	if(count === 1 ) {
		$('ul').first().remove()
	}
})