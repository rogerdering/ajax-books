var express = require ( 'express')
var app = express ( )

app.set('view engine', 'jade');
app.set('views', 'src/views');

app.get ('/', ( req, res ) => { 
	res.render ( 'index )
})

app.listen ( 3000 )