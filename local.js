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
	const regex = /!\[(.*?)\]\((.*?)\)/g;
	var m;
	var printResult = ( array) => {
    	var url = array[2];
    	var splited = url.split(".");
		console.log("local file: " + array[1] + "." + splited[splited.length-1]);
		console.log("url: " + url);
	};
	req.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                request.connection.destroy();
        });

    req.on('end', function () {
            var post = qs.parse(body);
            res.send("your request is: " + post.markdown_source);
            while ((m = regex.exec(post.markdown_source)) !== null) {
    			if (m.index === regex.lastIndex) {
        		regex.lastIndex++;
    		}
    		printResult(m);
    	}
    	
    });
});
app.listen(process.env.PORT || 3000, function(){
     console.log("Example app listens on port 3000.");
});