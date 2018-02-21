var http=require("http");

var server=http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"});
res.end(`
<!DOCTYPE html>
<html>
<head>
Hey YOU!!
</head>
<body>
<h1>Serving html</h1>
<p>${req.url}</p>
<p>${req.method}</p>

</body>
</html>`);
});

server.listen(3000);
console.log("Server is listening on port 3000");


