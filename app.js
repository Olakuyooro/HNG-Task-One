const time = new Date();
let miliseconds = time.getUTCMilliseconds();

console.log(miliseconds);

document.getElementById("time").innerHTML = (`Time: ${miliseconds}`) ;
