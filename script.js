let ludzik = document.querySelector('.ludzik');
let moveBy = 10;
let circle = document.querySelector('.circle')
// let osa = document.querySelector('.osa')


// window.addEventListener('load', () => {
//     ludzik.style.position = 'absolute';
//     ludzik.style.left = 0;
//     ludzik.style.top = 0;
// }) 


//
    ludzik.style.position = 'absolute';
    ludzik.style.left = 0;
    ludzik.style.top = 0;
//





//
    circle.style.position ="absolute";
    circle.style.left = "800px";
    circle.style.top = "300px";
//



//
    // osa.style.position ="absolute";
    // osa.style.left = "200px";
    // osa.style.top = "180px";
//



let marginesBleduPoziomBaza = parseInt(circle.style.left.replace(/px/,""));
let marginesBleduPionBaza = parseInt(circle.style.top.replace(/px/,""));
// let marginesBleduPoziomOsa = parseInt(osa.style.left.replace(/px/,""));
// let marginesBleduPionOsa = parseInt(osa.style.top.replace(/px/,""));








window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            ludzik.style.left = parseInt(ludzik.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            ludzik.style.left = parseInt(ludzik.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            ludzik.style.top = parseInt(ludzik.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            ludzik.style.top = parseInt(ludzik.style.top) + moveBy + 'px';
            break;
    }


if (
    ludzik.style.left >= (marginesBleduPoziomBaza - 80) +'px' 
    && 
    ludzik.style.left <= (marginesBleduPoziomBaza + 80) + 'px' 
    && 
    ludzik.style.top >= (marginesBleduPionBaza - 80) + 'px' 
    && 
    ludzik.style.top <= (marginesBleduPionBaza + 80) + 'px'
    )
     {
    alert('WYGRANKO, GRATULACJE. KLIKNIJ OK JAK CHCESZ NAGRODE');
    ludzik.style.position = 'absolute';
    ludzik.style.left = 0;
    ludzik.style.top = 0;
    window.location = "./WYGRANKO.html"
    }

// else if (
//     ludzik.style.left >= (marginesBleduPoziomOsa - 110) +'px' 
//     && 
//     ludzik.style.left <= (marginesBleduPoziomOsa + 110) + 'px' 
//     && 
//     ludzik.style.top >= (marginesBleduPionOsa - 110) + 'px' 
//     &&
//     ludzik.style.top <= (marginesBleduPionOsa + 110) + 'px'
//     )
//      {
//     alert('PRZEGRANKO');
    // ludzik.style.position = 'absolute';
    // ludzik.style.left = 0;
    // ludzik.style.top = 0;
    // }


    
});

