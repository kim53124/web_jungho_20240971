let number = 5;
let str = '문자열 입력';
let prime = 1.5123;
let is_ok = true;
let is_not = false;
let undefi;
let empty = null;

console.log(undefi, empty);

const sym1 = Symbol('test');;
let SymbolVar1 = sym1;

const airline = ["비행기", 320, "aribus", ["V1", true]];
//다양한 데이터 배열

//빈 객체 생성
const obj1 = {};

//속성을 추가하여 객체 생성
const obj2 = {
    name: '홍길동',
    age: 20,
    isMale: true,
};

console.log(SymbolVar1.toString()); // 문자열 변환 출력
console.log(obj1, obj2, airline);

const users = new Map();
users.set("user1", {id: 1, password: "123",});
users.set("user2", {id: 2, password: "456",});

//Map 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
    console.log('사용자 이름: ${username}', 'ID: ${user.id}');
    console.log('비밀번호: ${user.password}');
}

// Set 객체의 활용 (예), 이름만 저장할 Set 객체 생성
const usernames = new Set();

usernames.add("user1");
usernames.add("user2");

// Set 객체의 모든 사용자 이름 반복 출력
for (const username of uesenames) {
    console.log('사용자 이름: ${username}');
}