const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const bullet = document.querySelector('.bullet');
const startGame = document.querySelector('.start-game');
var cont = document.querySelector('.score-amount');

var soma = Number(cont.textContent)

//funcao de evento do pulo
const jump = () => {
  mario.classList.add('jump');

  soma += 1
  cont.textContent = soma

  document.getElementById('theme').play();
  document.getElementById('jump').play();
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}


//funcao do evento dos obstaculos
const loop = setInterval(() => {

  //condicao da variavel do cano  
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const bulletPosition = bullet.offsetLeft;
  const pipePosition = pipe.offsetLeft;


  // verifica a condicao do jogo se o mario encostou no cano
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    bullet.style.left = `${bulletPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    document.getElementById('theme').pause();
    document.getElementById('gameOver').play();
    mario.src = '/imagens/marioGameOver.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '80px';

    startGame.src = '/imagens/Over.png';

    clearInterval(loop); //para o loop

    document.addEventListener('keydown', () => {
      location.reload();
    });

    if (bulletPosition <= 120 && bulletPosition > 0 && marioPosition < 80) {

      //remove a animacao da bala de canhao
      bullet.style.animation = 'none';
      //mantem a posicao da bala de canhao
      bullet.style.left = `${bulletPosition}px`;
      pipe.style.left = `${pipePosition}px`;
      //remove a animacao do mario
      mario.style.animation = `none`;
      //mantem a animacao do mario;
      mario.style.bottom = `${marioPosition}px`;

      document.getElementById('theme').pause();
      document.getElementById('gameOver').play();
      mario.src = '/imagens/marioGameOver.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '80px';

      startGame.src = './imagens/Over.png';

      clearInterval(loop);

      document.addEventListener('keydown',()=> {
        location.reload();
      })};





    }
  }, 10);


document.addEventListener('keydown', jump);