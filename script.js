let ralf = document.querySelector('.ralf');
let target = document.querySelector('.target')
let body = document.querySelector('body')
let obs1 = document.querySelector('.obs1')
let gameArea = document.querySelector('.gameArea')
let applause = document.querySelector('.applause')
let bo = document.querySelector('.bo')
let happy = document.querySelector('.happy')



//
    ralf.style.position = 'absolute';
    ralf.style.left = '0px';
    ralf.style.top = '0px';



    target.style.position ='absolute';
    target.style.left = '800px';
    target.style.top = '300px';




    obs1.style.position ='absolute';
    obs1.style.left = '300px';
    obs1.style.top = '180px';











let moveBy = 10;



window.addEventListener('keydown', (e) => {

  happy.play();

    switch (e.key) {

        case 'ArrowLeft':
          if (ralf.style.left === '-50px')
            {}
          else {
            ralf.style.left = parseInt(ralf.style.left) - moveBy + 'px';
          }
            break;

        case 'ArrowRight':
          if (ralf.style.left === '900px')
            {}
          else {
            ralf.style.left = parseInt(ralf.style.left) + moveBy + 'px';
          }
            break;

        case 'ArrowUp':
          if (ralf.style.top === '-50px')
            {}
          else {
            ralf.style.top = parseInt(ralf.style.top) - moveBy + 'px';
          }
            break;

        case 'ArrowDown':
          if (ralf.style.top === '450px')
            {}
          else {
            ralf.style.top = parseInt(ralf.style.top) + moveBy + 'px';
          }
            break;
    }


    let ralfPositionHorizon = parseInt(ralf.style.left);
    let ralfPositionVertical = parseInt(ralf.style.top);

    let targetPositionHorizon = parseInt(target.style.left);
    let targetPositionVertical = parseInt(target.style.top);

    let obs1PositionHorizon = parseInt(obs1.style.left);
    let obs1PositionVertical = parseInt(obs1.style.top);


    if (
        ralfPositionHorizon > targetPositionHorizon - 60
        &&
        ralfPositionHorizon < targetPositionHorizon + 60
        &&
        ralfPositionVertical > targetPositionVertical - 60
        &&
        ralfPositionVertical < targetPositionVertical + 60
        )
         {

        happy.pause();

        gameArea.innerHTML =
        `
        <div class='endOfGame animate__animated animate__fadeInDown'>
        <h1>WYGRANKO</h1>
        <img class="nagroda" src="donut.gif">
        </div>
        `;
        applause.play();
         }

     else if (
       ralfPositionHorizon > obs1PositionHorizon - 60
       &&
       ralfPositionHorizon < obs1PositionHorizon + 60
       &&
       ralfPositionVertical > obs1PositionVertical - 60
       &&
       ralfPositionVertical < obs1PositionVertical + 60
       )
            {
           happy.pause();

           gameArea.innerHTML =
           `
           <div class='endOfGame animate__animated animate__fadeInDown'>
           <h1>PRZEGRANKO</h1>
           <img class="nagroda" src="kupka.gif">
           </div>
           `;
           bo.play();
            };


  });
