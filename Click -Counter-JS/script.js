let countNum = document.getElementById('countNum');
let dec = document.getElementById('decrease');
let res = document.getElementById('reset');
let inc = document.getElementById('increase');
let bgcon = document.getElementById('bgContainer')

let count = 0;

dec.onclick = function(){
    count--;
    countNum.textContent = count;
    bgcon.style.backgroundColor = "#ff000050";
    setTimeout(() => {
        bgcon.style.backgroundColor = 'white';
      }, 500);
   
}

res.onclick = function(){
    count = 0;
    countNum.textContent = count;
    bgcon.style.backgroundColor = "#ffea0080";
    setTimeout(() => {
        bgcon.style.backgroundColor = 'white';
      }, 500);
}
inc.onclick = function(){
    count++;
    countNum.textContent = count;
    bgcon.style.backgroundColor = "#00ff085f";
    setTimeout(() => {
        bgcon.style.backgroundColor = 'white';
      }, 500);
}

