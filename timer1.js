
const timer = function() {

let delay;

 const args =(process.argv.slice(2));
for(let i  of args)
{
delay=Number(i);
//console.log(delay);
if (!isNaN(delay) && delay > 0) {

   setTimeout(() => {
    process.stdout.write('.\n');

  }, delay*1000);
    
}
}
}


timer();