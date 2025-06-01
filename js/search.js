const search_message = () => {
    const c = '검색을 수행합니다.';
    alert(c);
}

document.getElementById("search_button_msg").addEventListener('click', search_message);

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value;

    if (searchTerm.length === 0) {
        return false;
    }

    const bannedWords = ["시발", "ㅅㅂ", "개새끼"];
    for (let i = 0; i < bannedWords.length; i++) {
        if (searchTerm.includes(bannedWords[i])) {
            alert("부적절한 검색어입니다.");
            return false;
        }
    }

    
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");
    return false;
}