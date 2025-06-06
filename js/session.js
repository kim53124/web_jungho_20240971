import { encrypt_text, decrypt_text } from './crypto.js';

export async function session_set() {
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date();

    const obj = {
        id : id.value,
        otp : random
    }
    if (sessionStorage) {
        const objString = JSON.stringify(obj);
        let en_text = await encrypt_text(objString);

        sessionStorage.setItem("Session_Storage_id", id.value);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("세선 스토리지 지원 x");
    }
}

// function session_set() {
//     let session_id = document.querySelector("#typeEmailX");
//     let session_pass = document.querySelector("#typePasswordX");
//     if (sessionStorage) {
//         let en_text = encrypt_text(session_pass.value);
//         sessionStorage.setItem("Session_Storage_test_id", session_id.value);
//         sessionStorage.setItem("Session_Storage_test_pass", en_text);
//     } else {
//         alert("로컬 스토리지 지원 x");
//     }
// }

function session_get() {
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() {
    if (sessionStorage.getItemq("Session_Storage_test") === null) {
        alert("이미 로그인되어 있습니다.");
        location.href = "../index_login.html";
    }
}


