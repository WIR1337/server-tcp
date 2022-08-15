const net = require('net');

let socketsArr = []
const server = net.createServer(socket => {
    socketsArr.push(socket)

    socket.write('Hello im server')
    socket.on('connection', () => {
        console.log('New user join server')
    })
    socket.on('data', (data) => {
        socketsArr.forEach((user) => {
            user.write(`User: ${data.toString()}`)
        })
    })
})
server.listen(6000)


