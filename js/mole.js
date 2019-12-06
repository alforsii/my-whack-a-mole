const mole = { name: 'Mole', src: './img/mole2.png' };
const moleImg = new Image();
moleImg.src = mole.src;
moleImg.style.width = '130px';
moleImg.style.height = '100px';

// const aMole = { name: 'Mole', src: './img/mole2.png' };

// class Mole {
//   constructor(game) {
//     this.game = game;
//     this.box = document.getElementsByClassName('col');
//     this.moleImg = document.createElement('img');
//     this.moleImg.src = './img/mole2.png';
//     this.moleImg.style.width = '130px';
//     this.moleImg.style.height = '100px';
//   }

//   getMole() {
//     this.moleImg = document.createElement('img');
//     this.moleImg.src = './img/mole2.png';
//     this.moleImg.style.width = '130px';
//     this.moleImg.style.height = '100px';
//     let index = Math.floor(Math.random() * this.box.length);
//     this.box[index].appendChild(this.moleImg);
//   }
// }
