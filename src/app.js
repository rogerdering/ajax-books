var express = require ( 'express')
var fs = require ('fs' )
var app = express ( )

app.use(express.static ( './resources/'))

app.set('view engine', 'jade');
app.set('views', 'src/views');

app.get ('/', ( req, res ) => {

	fs.readFile('./resources/books.json', function(error, data) {
		if (error) {
			throw error
		} else {
			var parsedBooks = JSON.parse ( data )
			console.log ( parsedBooks )
			res.render ( 'index', {  books: parsedBooks } )
		}
	} ) 

})

app.get ( '/api', ( req, res ) => { 
	var booktitle = req.query.title
	var bookmatch = {}
	fs.readFile('./resources/books.json', function(error, data) {
		if (error) {
			throw error
		} else {
			var parsedBooks = JSON.parse ( data )
			console.log ( parsedBooks )
			for ( var i = 0; i < parsedBooks.length; i ++ ) {
				if ( parsedBooks[i].title == booktitle ) { 
					bookmatch = parsedBooks[i]
				}
			}
			res.send ( bookmatch )
		}
	} ) 
} )

app.listen ( 3000 )