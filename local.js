var path = require('path'), express = require('express');
var app = express();
app.use('/ui5', express.static(path.join(__dirname, 'webapp')));
app.get('/', function(req, res){
   res.send("Hello World");
});
app.listen(process.env.PORT || 3000, function(){
     console.log("Example app listens on port 3000.");
});