var express = require ( 'express)
var app = express ( )

app.get ('/', ( req, res ) => { 
	res.send ( 'I\'m on' )
})

app.listen ( 3000 )