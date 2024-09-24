import http from 'node:http';

const users = [];

let nextId = 1;

const server = http.createServer((req, res) => {

    const {method, url} = req;

    if(method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users));
    }
    
    if(method == 'POST' && url == '/users'){

        users.push({
            id: nextId,
            name: 'Jhon Doe',
            email: 'jhondoe@example.com'
        })

        nextId++;

        return res.writeHead(201).end();
    }


    return res.writeHead(404).end();
});


server.listen(3333);

