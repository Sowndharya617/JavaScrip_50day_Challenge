let start = 0;
let elapsed =0;
let interval;
let isRunning =false;

const display =document.querySelector('.display');
const startstopbutton =document.getElementById('startstop');
const restbutton = document.getElementById('reset');
const lapbutton = document.getElementById('lap');
const laplist = document.getElementById('laps');

function formatTime(ms){
    const hr = Math.floor(ms/3600000);
    const min = Math.floor((ms%3600000)/60000);
    const sec = Math.floor((ms%60000)/1000);
    const milsec = Math.floor((ms%1000)/10);

    return(
        String(min).padStart(2,'0')+":"+
        String(sec).padStart(2,'0')+":"+
        String(milsec).padStart(2,'0')
    );
}

function updisplay(){
    display.textContent=formatTime(elapsed);
}

function startstop(){
    isRunning =! isRunning;
    if(isRunning){
        start = Date.now()-elapsed;
        interval = setInterval(()=>{
            elapsed =Date.now()-start;
            updisplay();
        },10);
        startstopbutton.textContent='Stop';
    }else{
        clearInterval(interval);
        startstopbutton.textContent = 'Start';
    }
}

function reset(){
    clearInterval(interval);
    elapsed=0;
    updisplay();
    startstopbutton.textContent='Start';
    isRunning=false;
    laplist.innerHTML="";

}

function lap(){
    if (isRunning){
        const laptime = document.createElement('li');
        laptime.textContent=formatTime(elapsed);
        laplist.appendChild(laptime);
    }
}

startstopbutton.addEventListener('click',startstop);
restbutton.addEventListener('click',reset);
lapbutton.addEventListener('click',lap);
