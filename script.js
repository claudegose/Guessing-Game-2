let computer = Math.floor(Math.random() * 15 + 1);

document.getElementById("btn").addEventListener("click", () => {
    let user = document.getElementById("userNumber").value;

    if (computer == user ){
        alert(`Awesome! You number ${user} was correct. You can be named many things, hungry not being one of them.`);

    } else if(computer - user == 1) {
        alert('Try a higher number')
    } else if ( user - computer == 1){
        alert('Try a lower number')
    }
    else {
        alert(`Bummer... You guessed ${user} and the secret number was ${computer}.`)
    }
})

