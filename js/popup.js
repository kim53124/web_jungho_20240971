function pop_up() {
    var cookieCheck = getCookie("id");
    if (cookieCheck != "N") {
        window.open("../web_20240971/popup/popup.html", "팝업테스트", "width=400,height=300,left=10");
    }
  
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

function setCookie(name, value, expiredays) {
    var cookie = new Date();
    DataTransfer.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";
}

function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");

            if (cookie_name[0] == "id") {
                return cookie_name[1];
            }
        }
    }
    return ;
}

function closePopup() {
    if (document.getElementById('check_popup').value) {
        setCookie("id", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
    }
}