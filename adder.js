var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var a = 0

rl.on('line', function(line){
    a = a + parseInt(line)
    console.log(a)
})
