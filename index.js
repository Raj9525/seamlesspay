document.addEventListener("contextmenu", (event) => event.preventDefault());
//error box toast appearance

setTimeout(() => {
  document.getElementById("visa_logo").style.visibility = "visible";
}, 600);
setTimeout(() => {
  document.getElementById("body").style.visibility = "visible";
}, 600);

function Err1440() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "100px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err1366() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "90px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "43px";
  }, 3000);
}

function Err700() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "75px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "33px";
  }, 3000);
}

function Err500() {
  document.getElementById("errorBox").style.visibility = "visible";
  document.getElementById("errorBox").style.opacity = "1";
  document.getElementById("errorBox").style.bottom = "200px";
  setTimeout(() => {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "0";
    document.getElementById("errorBox").style.bottom = "180px";
  }, 3000);

  document.getElementById("submitbtn").addEventListener("click", subm);
  document.getElementById("staticpin_tab").addEventListener("click", stat);

  function stat() {
    document.getElementById("errorBox").style.bottom = "80px";
  }

  function subm() {
    document.getElementById("errorBox").style.visibility = "visible";
    document.getElementById("errorBox").style.opacity = "1";
    document.getElementById("errorBox").style.bottom = "100px";
    setTimeout(() => {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "0";
      document.getElementById("errorBox").style.bottom = "80px";
    }, 3000);
  }
}

function box() {
  if (document.getElementById("preauth").checked) {
    if (window.screen.width >= 1440) {
      Err1440();
    } else if (window.screen.width <= 1439 && window.screen.width >= 1366) {
      Err1366();
    } else if (window.screen.width <= 1365 && window.screen.width >= 700) {
      Err700();
    } else if (window.screen.width <= 599 && window.screen.width >= 500) {
      Err500();
    } else {
      document.getElementById("errorBox").style.visibility = "visible";
      document.getElementById("errorBox").style.opacity = "1";
      document.getElementById("errorBox").style.bottom = "45px";
      setTimeout(() => {
        document.getElementById("errorBox").style.visibility = "visible";
        document.getElementById("errorBox").style.opacity = "0";
        document.getElementById("errorBox").style.bottom = "30px";
      }, 3000);
    }
  }
}
//close error
function clserr() {
  document.getElementById("errorBox").style.opacity = "0";
}

//page timer
window.onload = countdown2();
var mins2 = 0.15;
var secs2 = mins2 * 60;

function countdown2() {
  setTimeout("Decrement2()", 60);
  mins2 = 1;
  secs2 = mins2 * 60;
}

function Decrement2() {
  if (document.getElementById) {
    minutes2 = document.getElementById("minutes2");
    seconds2 = document.getElementById("seconds2");
    if (seconds2 < 59) {
      seconds2.innerHTML = secs2;
    } else {
      minutes2.innerHTML = getminutes2();
      seconds2.innerHTML = getseconds2();
    }

    if (mins2 < 0) {
      minutes2.innerHTML = 0;
      seconds2.innerHTML = 0;
    } else {
      secs2--;
      setTimeout("Decrement2()", 1000);
    }
  }
}

function getminutes2() {
  mins2 = Math.floor(secs2 / 60);
  return mins2;
}

function getseconds2() {
  return secs2 - Math.round(mins2 * 60);
}
