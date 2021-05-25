var min = +prompt("Please Enter Timer Starting Minutes.?")

window.onload = function() {
    var minute = min;
    var sec = 60;
    minute = minute-1;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      
      if (sec == 00) {
        minute --;
        //  minute = minute-1;
        sec = 60;
        if (minute == 0) {
          document.write("Time is up!");
        }
      }
    }, 1000);
  }