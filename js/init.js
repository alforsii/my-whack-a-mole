window.addEventListener('load', () => {
  start();

  moleImg.onclick = () => {
    moleImg.remove();
    randomBox.appendChild(explosionImg);
  };

  // let html = '';
  // for (let i = 1; i < 201; i++) {
  //   html += `<div class="blue"></div>`;
  //   if (i % 20 === 0) {
  //     continue;
  //   }
  //   if (i % 10 === 0) {
  //     html += `<div class="dark-blue"></div>`;
  //   }
  //   html += `<div class="dark-blue"></div>`;
  // }
  // document.querySelector('#canvas').innerHTML = html;

  // const ctx = document.getElementById('my-canvas').getContext('2d');
});
