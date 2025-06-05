

const JWT_SCERET = "your_secrey_key_here";

function generateJWT(payload) {
    // 1. 헤더 생성 및 Base64 인코딩
    const header = {
        alg: "HS256",
        typ: "JWT"
    };
    // 2. 페이로드 Base64 인코딩
    const base64Header = btoa(JSON.stringify(header));
    // 3. 서명 생성 (HMAC - SHA256 알고리즘 사용)
    const siganatur = CryptoJS.HmasSHA256('${encodedHeader}.${encodedPayload}', JWT_SCERET);
    const encodedSignature = CryptoJS.enc.Base64.stringify(signature);
    // 4. 최종 토큰 조합
    return `${base64Header}.${encodedPayload}.${encodedSignature}`;
}

function verifyJWT(token) {
    try {
        // 토큰을 헤더, 페이로드, 서명으로 분할
        const parts = token.split('.');
        if (parts.length !== 3) return null;

        const [encodedHeader, encodedPayload, encodedSignature] = parts;
        // 서명 재계산 및 비교
        const signature = CryptoJS.HmacSHA256('${encodedHeader}.${encodedPayload}', JWT_SCERET);
        if (encodedSignature !== CryptoJS.enc.Base64.stringify(signature)) {
            return null;
        }
        const payload = JSON.parse(atob(encodedPayload));
        if (payload.exp < Math.floor(Date.now() / 1000)) {
            console.log("토큰이 만료되었습니다.");
            return null;
        }
        return payload;
    
    }catch (error) {
        return null;
    }
}

function isAuthenticated() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return false;
    }
    const payload = verifyJWT(token);
    console.log(payload);
    return !!payload
}

function checkAuth() {
    const authenticated = isAuthenticated();

    if (authenticated) {
        alert('정상적으로 토큰이 검증되었습니다.');
    }else {
        alert('토큰 검증 에러!! 인증되지 않은 접근입니다.');
        window.location.href = "../login.html";
    }
}

function logout() {
    localStorage.removeItem('jwtToken');

    document.cookie.split(";").forEach((c) => {
        document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    sessionStorage.clear();

    window.location.href = "../login.html";
}