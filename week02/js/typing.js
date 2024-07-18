let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "안녕하세요",
    "저는 이현정입니다!",
    "좋은 하루 보내세요",
    "hello",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋 함수
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

// 한 글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift(); // shift 메서드를 이용해 split된 배열의 앞의 것부터 빼내어 출력!
    setTimeout(function () {
      dynamic(randomArr);
    }, 100); // 재귀함수 형식, 0.1초 간격으로 다시 불러오기
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString()); // 배열화된 값이 매개변수로 전달

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
