const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("DevOps CI/CD Project");
});

server.listen(3000);
