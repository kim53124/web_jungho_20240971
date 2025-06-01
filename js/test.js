var jb = 'hi';
var a = 1;
var b;
b = 2;

/*
여러줄 주석: 여러 줄에 걸쳐 주석을 처리합니다.
*/

if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
}

//console.log(c); // ReferenceError: c is not defined
console.log(c_1); // var 접근은 가능

let d = 5;
// let d = '값 재할당';
console.log(d);

const e = '상수1 접근';
//e = 5
//const f // error
console.log(e);
