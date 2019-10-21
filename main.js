const square = document.querySelectorAll('.square');
const filler = document.querySelector('.filler');
var count = true;
// console.log(getComputedStyle(filler).backgroundColor);
for (let i = 0; i < square.length; i++) {
        
        square[i].addEventListener('click', function(e) {
            e.preventDefault();

            if(count === true) {

                square[i].classList.add("red");
                check("red");
            } else if (count === false) {

                square[i].classList.add("blue");
                check("blue");
            }
            count = !count;
        })
    }

function check(color) {
    
    if (square[0].classList.contains(color) === square[3].classList.contains(color) &&
        square[3].classList.contains(color) === square[6].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[1].classList.contains(color) === square[4].classList.contains(color) &&
        square[4].classList.contains(color) === square[7].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[2].classList.contains(color) === square[5].classList.contains(color) &&
        square[5].classList.contains(color) === square[8].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[0].classList.contains(color) === square[1].classList.contains(color) &&
        square[1].classList.contains(color) === square[2].classList.contains(color)) {
            console.log("Winner");
    } else if (square[3].classList.contains(color) === square[4].classList.contains(color) &&
        square[4].classList.contains(color) === square[5].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[6].classList.contains(color) === square[7].classList.contains(color) &&
        square[7].classList.contains(color) === square[8].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[0].classList.contains(color) === square[4].classList.contains(color) &&
        square[4].classList.contains(color) === square[8].classList.contains(color)) {
            console.log("Winner!");
    } else if (square[2].classList.contains(color) === square[4].classList.contains(color) &&
        square[4].classList.contains(color) === square[5].classList.contains(color)) {
            console.log("Winner!");
    }
}