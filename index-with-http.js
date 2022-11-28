import http from 'http'

http.createServer((request, response) => {
    const value = 10;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`Hello World!: ${value}`);
    response.end();
}).listen(3000); 