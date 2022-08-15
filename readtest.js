const readline = require('readline').createInterface({
    input: process.stdin,
})

readline.on('line', (input) => {
    console.log(`Received: ${input}`);
});