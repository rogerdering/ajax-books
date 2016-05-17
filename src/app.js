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
	}) 

})

app.listen ( 3000 )