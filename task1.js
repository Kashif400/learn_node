//how to check two url
const http = require('http')

const server = http.createServer(function (req, res) {
    const { url, method } = req;

    if (url === '/') {
        res.write('<h1>Welcome in show Base url')
       return res.end()

    } else if (url === '/student') {
        
        res.write('<h1>Welcome in show Base Student')
       return res.end()
    }

    
        res.write('<h1>Server in running...')
       return res.end()
})

server.listen(4000)