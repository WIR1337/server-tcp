const net = require('net');

const server = net.createServer(Socket => {
    Socket.write('Hello World !')
})

server.listen(6000)