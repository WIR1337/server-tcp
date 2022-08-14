const net = require('net');

let socketsArr = []
const server = net.createServer( socket => {
    socketsArr.push(socket)

    socket.write('Hello im server')
    socket.on('connection', () => {
        console.log('New user join server')
    })
    socket.on('data', (data, info) => {
        socketsArr.forEach((user, i) => {
            user.write(`User: ${data}`)
        })
    })
})
server.listen(6000)


