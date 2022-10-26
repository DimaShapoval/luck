const tryButton = document.getElementById('try-button')
const tryButton1 = document.getElementById('try-button1')
const ulCasino = document.getElementById('casino-ul')
const firstUl = document.getElementById('first-ul')
const vidos = document.getElementById('video1')
const thirdButton = document.getElementById('try-button2')
let iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i)

for (let i = 0; i < 30; i++) {
  const random = (Math.random() * (10 - 0.1) + 0.1).toFixed(2) + "ETH";
  document.querySelector('.try-of-numbers > ul').innerHTML += `
  <li class="li-cas">${random} </li>`
}
function start() {
  $('#first-ul').animate({
    left: -2070
  });
  vidos.play();
  setTimeout(() => {
    document.querySelector("#try-button").innerHTML = "Claim";
  }, 5500);


}
for (let i = 0; i < 30; i++) {
  const random = (Math.random() * (10 - 0.1) + 0.1).toFixed(2) + "ETH";
  document.querySelector('.try-of-numbers1 > ul').innerHTML += `
  <li class="HUY">${random} </li>`
}
function start1() {
  const move = -2070;
  ulCasino.style.left = move + "px"
  setTimeout(() => {
    document.querySelector("#try-button1").innerHTML = "Claim";
  }, 5500);


}
tryButton1.addEventListener('click', start1)









