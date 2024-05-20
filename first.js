// const http = requir('')


const http = require('http')
const server = http.createServer(function (req, res) {
    const { url, method } = req;
    
    if (url === '/') {
        res.write("<html><head><title> Home Page</title></head>")
        res.write('<body><h1> Welcome to the Main Servers</h1>')
       return  res.end('</body></html>')
    }

    res.write("<h1>Server is up and running ... </h1>")
    res.end()
})

server.listen(4000)