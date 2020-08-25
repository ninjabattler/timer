const times = process.argv.slice(2);

for(let time of times){

  if(Number(time) > 0){

    setTimeout(() => {

      process.stdout.write('\x07');

    }, 1000 * Number(time))

  }

}