const { EventEmitter } = require('events');
const { readFile, readFileSync } = require('fs');
const eventEmitter = new EventEmitter();

//const txt = readFileSync('./hello.txt','utf-8');

readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt);
});


eventEmitter.on ('lunch', () =>{
    console.log('yum 🍣')
})

eventEmitter.emit('lunch');

console.log('Hello world! ');
process.on('exit',function(){
    console.log('Calling')
})