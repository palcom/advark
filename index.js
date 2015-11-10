var http = require('http');
var dispach = require('dispach');



/*var server = http.createServer(function(request, response){
	            console.log('my node server works');
	            response.writeHead(200, {

	            });

	            response.end('Iam from the server.');


});
*/

var server = http.createServer(
			dispach({
				'/' :function(request,response){
					console.log('visiting %s', request.url);
					response.end('This is the root');
				}

				'/movies' : function(request, response){
					console.log('visiting %s', request.url);
					response.end('This is the movies path');
				}

				'/actors' : function(request, response){
					console.log('visiting %s', request.url);
					response.end('This is the actors path');

				}

server.listen(8081, function(){
	console.log('server running on 127.0.0.1:8081');

});