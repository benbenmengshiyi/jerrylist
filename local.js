var path = require('path'), express = require('express');
var app = express();
app.use('/ui5', express.static(path.join(__dirname, 'webapp')));
app.get('/', function(req, res){
	console.log("method: " + req.method);
   res.send("Hello World");
});

app.post("/", function(req, res){
	console.log("method: " + req.method);
    res.send("Hello World post");
    req.on('data', function(data) {
        console.log("request data: " + data);
    });
});
app.listen(process.env.PORT || 3000, function(){
     console.log("Example app listens on port 3000.");
});