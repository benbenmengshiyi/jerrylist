var path = require('path'), express = require('express');
var qs = require('querystring');
var app = express();
app.use('/ui5', express.static(path.join(__dirname, 'webapp')));
app.get('/', function(req, res){
	console.log("method: " + req.method);
   res.send("Hello World");
});

app.post("/", function(req, res){
	var body = '';
	/*console.log("method: " + req.method);
    res.send("Hello World post");
    req.on('data', function(data) {
        console.log("request data: " + data);
    });*/
	req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

    req.on('end', function () {
            var post = qs.parse(body);
            res.send("your request is: " + post.markdown_source);
    });
});
app.listen(process.env.PORT || 3000, function(){
     console.log("Example app listens on port 3000.");
});