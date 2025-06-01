function pop_up() {
  window.open("../web_20240971/popup/popup.html", "팝업테스트", "width=400,height=300,left=10");
}

function show_clock(){
    let currentDate = new Date();
    let divClock = document.getElementById("divClock");
    let msg = "현재 시간: ";
    if (currentDate.getHours() > 12) {
        msg += "오후";
        msg += currentDate.getHours()-12 + "시 ";
    }
    else {
        msg += "오전";
        msg += currentDate.getHours() + "시 ";
    }

    msg += currentDate.getMinutes() + "분 ";
    msg += currentDate.getSeconds() + "초";
    divClock.innerHTML = msg;

    if (currentDate.getMinutes() > 58) {
        divClock.style.color = "red";
    }
    setTimeout(show_clock, 1000);
}

// function over(obj) {
//     obj.src="../web_20240971/image/LOGO.png";
// }

// function out(obj) {
//     obj.src="../web_20240971/image/LOGO2.png";
// }

const over = (obj) => {
    obj.src="image/LOGO.png";
};

const out = (obj) => {
    obj.src="image/LOGO2.png";
};