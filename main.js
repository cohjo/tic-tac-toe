const square = document.querySelectorAll('.square');
const filler = document.querySelector('.filler')

filler.style.background = 'red';
for (let i = 0; i < square.length; i++) {

    if(filler.style.background === 'red') {
        filler.style.background = 'blue';
        
        square[i].addEventListener('click', function(e) {
            e.preventDefault();

            square[i].classList.toggle("filler"); 
            check();
        })
    } else if(filler.style.background === 'blue') {
        filler.style.background = 'red'
        
        square[i].addEventListener('click', function(e) {
            e.preventDefault();

            
            square[i].classList.toggle("filler");
            check();
        })
    }
}

function check() {
    if (square[0].style.background === square[3].style.bakground &&
        square[3].style.background === square[6].style.background) {
            console.log("Winner!");
    } else if (square[1].style.background === square[4].style.bakground &&
        square[4].style.background === square[7].style.background) {
            console.log("Winner!");
    } else if (square[2].style.background === square[5].style.bakground &&
        square[5].style.background === square[8].style.background) {
            console.log("Winner!");
    } else if (square[0].style.background === square[1].style.bakground &&
        square[1].style.background === square[2].style.background) {
            console.log("Winner");
    } else if (square[3].style.background === square[4].style.bakground &&
        square[4].style.background === square[5].style.background) {
            console.log("Winner!");
    } else if (square[6].style.background === square[7].style.bakground &&
        square[7].style.background === square[8].style.background) {
            console.log("Winner!");
    } else if (square[0].style.background === square[4].style.bakground &&
        square[4].style.background === square[8].style.background) {
            console.log("Winner!");
    } else if (square[2].style.background === square[4].style.bakground &&
        square[4].style.background === square[5].style.background) {
            console.log("Winner!");
    }
}