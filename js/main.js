const box = document.getElementsByClassName('col');
const status = { whacked: true, noWhacked: false };
const explosion = { name: 'ExplosionImg', src: './img/theExplosion.gif' };
const explosionImg = new Image();
explosionImg.src = explosion.src;
explosionImg.style.width = '120px';
explosionImg.style.height = '90px';
let randomBox;
const score = document.createElement('h2');
score.innerHTML = 'Score : 20';
const centerTag = document.querySelector('center');
centerTag.insertBefore(score, centerTag.firstChild);

function start() {
  let randomTime = Math.floor(Math.random() * 3000);
  if (randomTime > 2500 || randomTime < 250) {
    setTimeout(start, randomTime);
    return;
  }
  let index = Math.floor(Math.random() * box.length);
  randomBox = box[index];

  explosionImg.remove();
  randomBox.appendChild(moleImg);
  setTimeout(start, randomTime);
}
// // background added through CSS.
// function background() {
//   for (let i = 0; i <= box.length; i++) {
//     let bgImage = new Image();
//     bgImage.src = './img/mole-dom2.gif';
//     bgImage.style.width = '330px';
//     bgImage.style.height = '200px';
//     box[i].appendChild(bgImage);
//   }
// }
