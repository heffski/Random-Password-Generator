// - Create array for all possible characters in the passwords.
// - loop through the array to grab all possible combos
// - set password length
// - Button to render 4 different password options to the divs
// *** Stretch Goals: The ability to st the password length. Add a one click copy password tto the clipboard. ***

let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~", "\\"];
let passFill = document.querySelectorAll('.pass')
let newPassArray = []

let password1 = document.getElementById('pass1')
let password2 = document.getElementById('pass2')
let password3 = document.getElementById('pass3')
let password4 = document.getElementById('pass4')
let passwordsArray = [password1, password2, password3, password4]

// function randomCharacter() {
//     for (let i = 0; i < chars.length; i++) {
//         let randomChar = Math.floor(Math.random() * chars.length)
//         return chars[randomChar]
//     }
// }


function getMultipleRandom(chars, num) {
    const shuffled = [...chars].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num)
}

newPassArray.push(getMultipleRandom(chars, 10));

function returnPassword() {
    for (let i = 0; i < newPassArray.length; i++) {
        for (let i = 0; i < passFill.length; i++) {
            passFill[i].innerHTML = newPassArray.join('')
        }
    }
}



