const check_input = () => { 

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
        return false;
    }

    if (passwordValue.length <= 15) {
        alert('비밀번호는 최소 15글자 이상이어야 합니다.');
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
    loginForm.submit();

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