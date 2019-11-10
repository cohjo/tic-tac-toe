const square = document.querySelectorAll('.square');
const filler = document.querySelector('.filler');
const reset = document.querySelector('#reset');
var count = true;
var winner = false;

for(let i = 0; i < square.length; i++) {
    square[i].classList.add("white");
}

// reset.addEventListener('click', function(e) {
//     e.preventDefault;

// })

for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('click', function(e) {
            e.preventDefault();

            if(count === true) {

                square[i].classList.add("red");
                square[i].classList.remove("white");
        
                check("red");

            } else if (count === false) {

                square[i].classList.add("blue");
                square[i].classList.remove("white");
                
                check("blue");
            }
            count = !count;
        })
    }

function check(color) {
    if(square[0].classList.contains(color)) {
        if(square[3].classList.contains(color)) {
            if(square[6].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[1].classList.contains(color)) {
        if(square[4].classList.contains(color)) {
            if(square[7].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[2].classList.contains(color)) {
        if(square[5].classList.contains(color)) {
            if(square[8].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[0].classList.contains(color)) {
        if(square[1].classList.contains(color)) {
            if(square[2].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[3].classList.contains(color)) {
        if(square[4].classList.contains(color)) {
            if(square[5].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[6].classList.contains(color)) {
        if(square[7].classList.contains(color)) {
            if(square[8].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[0].classList.contains(color)) {
        if(square[4].classList.contains(color)) {
            if(square[8].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    if(square[2].classList.contains(color)) {
        if(square[4].classList.contains(color)) {
            if(square[6].classList.contains(color)) {
                if(color === "red") {
                    alert("Player 1 Wins!");
                    winner = true;
                } else {
                    alert("Player 2 Wins!");
                    winner = true;
                }
            }
        }
    }
    
    let counter = 0;
    for(let i = 0; i < square.length; i++) {
        if (square[i].classList.contains(color)) {
            if(color != "white") {
                counter++;
                console.log(counter);
            }
        }
    }
    if(counter === 5) {
        alert("It's a tie!");
    }
}