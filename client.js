const readline = require('readline').createInterface({
    input: process.stdin,
})
const net = require('net');

const socket = new net.Socket();


socket.on('data', (data) => {
  console.log('📨:', data.toString());
});
readline.on('line', (input) => {
    socket.write(input);
});

socket.connect({
  port: 6000,
  host: '135.181.94.174',
}, () => {
  socket.write('💋');
});

