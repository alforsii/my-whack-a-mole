const box = document.getElementsByClassName('col');
class Game {
  constructor() {
    this.status = { whacked: true, noWhacked: false };
  }

  start() {
    // this.background();

    let randomTime = Math.floor(Math.random() * 3000);
    let index = Math.floor(Math.random() * box.length);
    box[index].appendChild(moleImg);

    setInterval(this.start, randomTime);
  }

  background() {
    for (let i = 0; i <= box.length; i++) {
      let bgImage = new Image();
      bgImage.src = './img/mole-dom2.gif';
      bgImage.style.width = '330px';
      bgImage.style.height = '200px';
      box[i].appendChild(bgImage);
    }
  }
}
