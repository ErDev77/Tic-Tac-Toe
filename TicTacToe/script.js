let userBox = document.querySelectorAll('.box');
let winX = document.querySelector('.winX')
let winO = document.querySelector('.winO')
let used = document.querySelector('.used')
let scoreX = document.querySelector('.countX')
let scoreO = document.querySelector('.countO')
console.log(userBox)

let current = 0;
let countX = 0;
let countO = 0;


for (let i = 0; i < userBox.length; i++) {
    userBox[i].onclick = function sty() {
        current++;
        console.log(current)
        if(userBox[i].innerHTML == 'X') {
            for(let j = 0; j < userBox.length; j++) {
                userBox[j].innerHTML = ''
            }
            used.style.left = '9.5%'
            current = 0
        }
        if(userBox[i].innerHTML == 'O') {
            for(let j = 0; j < userBox.length; j++) {
                userBox[j].innerHTML = ''
            }
            used.style.left = '9.5%'
            current = 0
        }
        if(current == 1) {
            userBox[i].innerHTML = 'X'
            winX.style.left = '-100%'
            winO.style.right = '-100%'
            used.style.left = '-100%'
        }
        if(current == 2) {
            userBox[i].innerHTML = 'O'
        }
        if(current == 3) {
            userBox[i].innerHTML = 'X'
        }
        if(current == 4) {
            userBox[i].innerHTML = 'O'
        }
        if(current == 5) {
            userBox[i].innerHTML = 'X'
        }
        if(current == 6) {
            userBox[i].innerHTML = 'O'
        }
        if(current == 7) {
            userBox[i].innerHTML = 'X'
        }
        if(current == 8) {
            userBox[i].innerHTML = 'O'
        }
        if(current == 9) {
            userBox[i].innerHTML = 'X'
        }
        if(userBox[0].innerHTML == 'X' && userBox[1].innerHTML == 'X' && userBox[2].innerHTML == 'X' || userBox[3].innerHTML == 'X' && userBox[4].innerHTML == 'X' && userBox[5].innerHTML == 'X' || userBox[6].innerHTML == 'X' && userBox[7].innerHTML == 'X' && userBox[8].innerHTML == 'X' || userBox[0].innerHTML == 'X' && userBox[4].innerHTML == 'X' && userBox[8].innerHTML == 'X' || userBox[2].innerHTML == 'X' && userBox[4].innerHTML == 'X' && userBox[6].innerHTML == 'X' || userBox[0].innerHTML == 'X' && userBox[3].innerHTML == 'X' && userBox[6].innerHTML == 'X' || userBox[1].innerHTML == 'X' && userBox[4].innerHTML == 'X' && userBox[7].innerHTML == 'X' || userBox[2].innerHTML == 'X' && userBox[5].innerHTML == 'X' && userBox[8].innerHTML == 'X' ) {
            console.log('X WIN!')
            for(let j = 0; j < userBox.length; j++) {
                userBox[j].innerHTML = ''
            }
            current = 0
            winX.style.left = '9.5%'
            countX++
            scoreX.innerHTML = countX
        } else if(userBox[0].innerHTML == 'O' && userBox[1].innerHTML == 'O' && userBox[2].innerHTML == 'O' || userBox[3].innerHTML == 'O' && userBox[4].innerHTML == 'O' && userBox[5].innerHTML == 'O' || userBox[6].innerHTML == 'O' && userBox[7].innerHTML == 'O' && userBox[8].innerHTML == 'O' || userBox[0].innerHTML == 'O' && userBox[4].innerHTML == 'O' && userBox[8].innerHTML == 'O' || userBox[2].innerHTML == 'O' && userBox[4].innerHTML == 'O' && userBox[6].innerHTML == 'O' || userBox[0].innerHTML == 'O' && userBox[3].innerHTML == 'O' && userBox[6].innerHTML == 'O' || userBox[1].innerHTML == 'O' && userBox[4].innerHTML == 'O' && userBox[7].innerHTML == 'O' || userBox[2].innerHTML == 'O' && userBox[5].innerHTML == 'O' && userBox[8].innerHTML == 'O' ) {
            console.log('O WIN!')
            for(let j = 0; j < userBox.length; j++) {
                userBox[j].innerHTML = ''
            }
            current = 0
            winO.style.right = '9.5%'
            countO++
            scoreO.innerHTML = countO;
    } else if(current == 9) {
        current = 0;
        for(let j = 0; j < userBox.length; j++) {
            userBox[j].innerHTML = ''
        }
    }
   }
}