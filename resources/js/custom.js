$ ( document ) .ready ( function ( ) {
	console.log ( "DOM is ready" )
	$ ( '.thumb' ).on ( 'click', function ( ) {
		var clickedbook = $ ( this ) .attr ( 'title' )
		console.log ( "you sir clicked " + clickedbook)
		var ajaxdata = {
			title: clickedbook
		}
		$.get ( '/api', ajaxdata, function ( data ) {
			console.log ( data )
			$ ( '#title' ).text ( data.title )
			$ ( '#author' ).text ( data.author)
			$ ( '#description' ).text ( data.desc )
			$ ( '#cover' ).attr ( { "src": "/images/" + data.cover} )
		} )
	} )
} )