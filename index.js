var http = require('http');
var dispatch = require('dispatch');
var querystring = require('querystring');

//express

var express = require('express');
var app = express();

//express midlleware
var bodyparser = require('body-parser');

//include moongose

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/project-advark');



//create a schema
/*var pizaaSchema = mongoose.Schema({
	name: String,
	pirce: Number,
	created_at:{type: Date, default: Date.now()}
});

//compile our model
var Pizza = mongoose.model('pizza',pizaaSchema);
//using the model
var pizza = new Pizza({name: 'Vegetarian',price: 100});

// create the document
pizza.save(function(err, pizza){
	if(err){
		console.error('Your pizza was not saved: ', pizza);
	}
	console.log('your pizza was succesfully saved :)');

});



/*var server = http.createServer(function(request, response){
	            console.log('my node server works');
	            response.writeHead(200, {

	            });

	            response.end('Iam from the server.');


});
*/
//define our schema
var movieSchema = mongoose.Schema({
	title: String,

	year_of_release: Number
})

//compile our model
var Movie = mongoose.model('Movie',movieSchema);

app.use(bodyparser.urlencoded({extended: true}));


app.get('/movies',function(req, res){
	Movie.find(function(err,movies){
		if (err){

		console.log();
	}else{
		res.json(movies);
	
	}	
	}); 

	});
	//movies= [ 
												//{
													//title: 'The living legend',
													//category: ['Drama', 'Horror', 'Romance'],
													//main_actors: ['John Edmon', 'Brown Camel']
												//},
												{

													//title: 'The living Killer',
													//category: ['Drama', 'Horror', 'Romance'],
													//main_actors: ['Erick Richard', 'Campell cathrine']
												
												//},
												//{
//
													//title: 'Amazing Race',
													//category: ['Drama', 'Horror', 'Romance'],
													//main_actors: ['peter Greg', 'Peker Arison']

	
												//}
										//];
										

};

app.post('/movies/new', function(req, res){
	console.log(req.body);
	formData = req.body;
	

	//{

	//title: formData.title,
	//year_of_release: formData.year_of_release

	//}
//);	
	var movie = new Movie(formData);
	movie.save(function(err,movie) {
		if (err) {

	} else {
		console.log('succesfull saved the movie');
		res.redirect('/movies');
	}

	
	});

});

/*var server = http.createServer(
							dispatch({
								'/movies': {

									'GET /' :function(request, response, next){

											movies= [ 
												{
													title: 'The living legend',
													category: ['Drama', 'Horror', 'Romance'],
													main_actors: ['John Edmon', 'Brown Camel']
												},
												{

													title: 'The living Killer',
													category: ['Drama', 'Horror', 'Romance'],
													main_actors: ['Erick Richard', 'Campell cathrine']
												
												},
												{

													title: 'Amazing Race',
													category: ['Drama', 'Horror', 'Romance'],
													main_actors: ['peter Greg', 'Peker Arison']

												}
										];

										response.end(JSON.stringify(movies));

									},

									'POST/': function(request,response,next){
										var formData;
										request.on('data', function(chunk){
											formData = querystring.parse(chunk.toString())
										});
										//Create an instance of amovie
										//Save the movie instance
										//if succesfull respond with saved movies
										request.on('end',function(){
											console.log(formData);
										var movie = new Movie(

										{
											title: formData.title,

											year_of_release: formData.year_of_release

										}
										)

										response.end('movie was posted');
											
											
										})
										
										

									}
								}
							})
							);
*/												

								
								
						

app.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');


});