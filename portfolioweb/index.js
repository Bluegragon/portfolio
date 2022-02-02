const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
// const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contacts.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/home'){
        res.end(home);
       
    }
    else if(url == '/about'){
        res.end(about);
    }
//     else if(url == '/services'){
//         res.end(services);cs
//     }
    else if(url == '/contacts'){
        res.end(contact);
    }
    else{
        res.statusCode = 200;
        res.end(home);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

 


