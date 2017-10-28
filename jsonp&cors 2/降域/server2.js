var http = require('http')
var fs = require('fs')
var url= require('url')
var path = require('path')
// http.createServer(function(req,res){
//     switch(req.url){
//         case '/getWeather':
//         res.end(JSON.stringify({a:1,b:2}))
//         break;
//         case '/user':
//         res.end(fs.readFileSync(__dirname + '/static/index.html'))
//         break;
//         default:
//         res.end(fs.readFileSync(__dirname + '/static'+req.url))
//     }
// }).listen(8080)


http.createServer(function(req,res){
    var pathObj = url.parse(req.url,true)
    console.log('11')
    console.log(pathObj)
    console.log('12')
    console.log(req.url)

    switch(pathObj.pathname){
        
        case '/getWeather':
            // res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
            res.setHeader('Access-Control-Allow-Origin','*')//允许任何人
            console.log('get weather')
            res.end(JSON.stringify({bejing:'sun'}))
            break;
    // default:
    //         res.end(fs.readFileSync(__dirname + '/static' + pathObj.pathname))
        default:
            // res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
            fs.readFile(path.join(__dirname,pathObj.pathname), function (err, fileContent) {
                if (err) {
                    console.log('404')
                    res.writeHead(404, 'not found')
                    res.end('<h1>404 not found</h1>')
                } else {
                    console.log('ok')
                    res.writeHead(200, 'ok')
           
                    res.end(fileContent)
                }
            })

    }
}).listen(8080)