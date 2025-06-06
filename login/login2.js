
import { session_set, session_get, session_check } from './session.js';
import { encrypt_text, decrypt_text } from './crypto.js';
import { generateJWT, checkAuth } from './jwt_token.js';

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) return value;
    }
    return null;
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function login_count() {
    let loginCnt = parseInt(getCookie("login_cnt")) || 0;
    loginCnt += 1;
    setCookie("login_cnt", loginCnt, 7);
    console.log("로그인 횟수:", loginCnt);
}

function logout_count() {
    let logoutCnt = parseInt(getCookie("logout_cnt")) || 0;
    logoutCnt += 1;
    setCookie("logout_cnt", logoutCnt, 7);
    console.log("로그아웃 횟수:", logoutCnt);
}


const check_input = () => { 

    const idsave_check = document.getElementById('idsave_check');
    const payload = {
        id : emailValue,
        exp: Math.floor(Date.now() / 1000) + 3600
    };
    const jwtToken = generateJWT(payload);

    const c = '아이디, 패스워드를 체크합니다.';
    alert(c);

    const emailValue = eamilInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // if (emailValue === '') {
    //     alert('이메일을 입력해주세요.');
    //     return false;
    // }

    // if (passwordValue === '') {
    //     alert('비밀번호를 입력해주세요.');
    //     return false;
    // }

    if (emailValue.length > 10) {
        alert('이메일은 최소 10글자 이하이어야 합니다.');
        login_failed();
        return false;
    }

    if (passwordValue.length <= 15) {
        alert('비밀번호는 최소 15글자 이상이어야 합니다.');
        login_failed();
        return false;
    }

    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=/[/]{};':"\\|,.<>\/?]+/) !== null;
    if (hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    const hasUpperCase = passwordValue.match(/[A-Z]/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    const repeatedPatternMatch = emailValue.match(/(.{3,})\1+/) || passwordValue.match(/(.{3,})\1+/);
    if (repeatedPatternMatch) {
        alert('3글자 이상의 문자열을 반복해서 사용할 수 없습니다.');
        return false;
    }

    const repeatedNumberMatch = emailValue.match(/(\d{2})\1+/) || passwordValue.match(/(\d{2})\1+/);
    if (repeatedNumberMatch) {
        alert('2자리 숫자를 반복해서 사용할 수 없습니다.');
        return false;
    }


    console.log('이메일:', emailValue);
    console.log('비밀번호: ', passwordValue);
    session_set();
    localStorage.setItem("jwt_token", jwtToken);
    loginForm.submit();

    if (idsave_check.check == true) {
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1);
        alert("쿠키 값: " + emailValue);
    }

    else{
        setCookie("id", emailValue, 0);
    }

    login_count();

    const sanitizedPassword = check_xss(passwordInput);
    const sanitizedEmail = check_xss(emailInput);

    if (!sanitizedEmail) {
        return false;
    }

    if (!sanitizedPassword) {
        return false;
    }
};

document.getElementById("login_btn").addEventListener('click', check_input);

const check_xss = (input) => {
    //DOMPurify 라리브러리 로드(CDN 사용)
    const DOMPurify = window.DOMPurify;

    //입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);

    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
        alert('xss 공격 가능성이 있는 입력값을 발견했습니다.');
        return false;
    }

    //Sanitized된 값을 반환
    return sanitizedInput;
}

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        checkAuth();
        init_logined();
    });
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");

    if (get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }
    session_check();
}

const failCnt = parseInt(getCookie("fail_cnt")) || 0;
    if (failCnt >= 3) {
        alert("현재 로그인 제한 상태입니다.");
        document.getElementById("login_btn").disabled = true;
    }

    session_check();

function session_del() {
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_test");
        alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function logout() {
    session_del();
    location.href='../index.html';
}

function login_failed() {
    let failCnt = parseInt(getCookie("fail_cnt")) || 0;
    failCnt += 1;
    setCookie("fail_cnt", failCnt, 1);

    if (failCnt >= 3) {
        alert("로그인 시도 3회 이상 실패. 로그인이 제한됩니다.");
        document.getElementById("login_btn").disabled = true;
    } else {
        alert(`로그인 실패 (${failCnt}회). 3회 이상 실패 시 로그인 제한됩니다.`);
    }

    console.log("로그인 실패 횟수:", failCnt);
}

function init_logined() {
    if (sessionStorage) {
        decrypt_text();
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}