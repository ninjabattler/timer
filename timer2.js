

const setTimer = (time) =>{

  if(Number(time) > 0){

    setTimeout(() => {

      process.stdout.write('\x07');

    }, 1000 * Number(time))

  }

}

process.stdin.on('data', (key) => {

  if (key === '\u0003') {
    process.exit();
    console.log("Thanks for using me, ciao!");
  }

  if("" + key === 'b\n'){

    setTimer(0.1);

  }else {
    setTimer(key);
    console.log('Setting timer for '+ key +' seconds');
  }
});