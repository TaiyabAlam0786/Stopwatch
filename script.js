let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
  
startbtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
  
stopbtn.addEventListener('click', function () {
    timer = false;
});
  
resetbtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
  
function stopWatch() {
    if (timer) {
        count++;
  
        if (count == 100) {
            second++;
            count = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hr = hour;
        let min = minute;
        let sec = second;
        let Count = count;
  
        if (hour < 10) {
            hr = "0" + hr;
        }
  
        if (minute < 10) {
            min = "0" + min;
        }
  
        if (second < 10) {
            sec = "0" + sec;
        }
  
        if (count < 10) {
            Count= "0" + Count;
        }
  
        document.getElementById('hr').innerHTML = hr;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        document.getElementById('count').innerHTML = Count;
        setTimeout(stopWatch, 10);
    }
}