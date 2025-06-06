function join() {
    let form = document.querySelector("#join_form");
    let name = document.querySelector("#form3Example1c");
    let email = document.querySelector("#form3Example3c");
    let password = document.querySelector("#form3Example4c");
    let re_password = document.querySelector("#form3Example4cd");
    let agree = document.querySelector("#form2Example3c");

    form.action = "../index.html";
    form.method = "get";

    if (name.value.length === 0 || email.value.length === 0 || password.value.length === 0 || re_password.value.length === 0) {
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
    } else{
        const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value);
        session_set2(newSignUp);
        form.submit();
    }
    const nameRegex = /^[가-힣]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!nameRegex.test(name.value)) {
        alert("이름은 한글로만 입력해주세요.");
        name.focus();
        return;
    }

    if (!emailRegex.test(email.value)) {
        alert("이메일 형식이 올바르지 않습니다.");
        email.focus();
        return;
    }

    
}
document.getElementById("join_btn").addEventListener("click", join);

class SignUp {
    constructor(name, email, password, re_password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.re_password = re_password;
    }
    setUserInfo(name, email, password, re_password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.re_password = re_password;
    }

    getUserInfo() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            re_password: this.re_password
        };
    }
}

import { session_set2 } from './session.js';