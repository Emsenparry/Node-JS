import http from 'http'

http.createServer((request, response) => { //CreateServer tager en request og en response
    const value = 10;
    response.writeHead(200, {'Content-Type': 'text/html'}); //200 er vores HTTP status code. 
    response.write(`Hello World!: ${value}`); //Skriver hello world!:10 ud 
    response.end();
}).listen(3000); //Kører på port 3000.