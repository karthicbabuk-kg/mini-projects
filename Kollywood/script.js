const answers = document.getElementsByClassName("answers")

// const heroname = prompt("Enter hero name")
// const heroinename = prompt("Enter heroine name")
// const moviename = prompt("Enter movie name")
// const songname = prompt("Enter song name")
// const hint1 = prompt("Give First Hint")
// const hint2 = prompt("Give Second Hint")


const boxname = document.getElementsByClassName("names")
boxname[0].innerHTML = heroname[0]
boxname[1].innerHTML = heroinename[0]
boxname[2].innerHTML = moviename[0]
boxname[3].innerHTML = songname[0]


const kollywood = document.getElementById("kolly")

if (heroname == "") {
    boxname[0].innerHTML = "x"
}
if (heroinename == "") {
    boxname[1].innerHTML = "x"
}
if (moviename == "") {
    boxname[2].innerHTML = "x"
}
if (songname == "") {
    boxname[3].innerHTML = "x"
}
const arrkolly = kollywood.innerHTML.split("")
for (let i = 0; i <= arrkolly.length - 1; i++) {
    function myFunction1() {

        if (heroname !== answers[0].value) {
            arrkolly.shift()
            kollywood.innerHTML = arrkolly.join("")
            boxname[0].style.backgroundColor = "red"
            if (arrkolly.length == 3) {
                alert(hint2)
            }
            else if (arrkolly.length == 5) {
                alert(hint1)
            }

        }
        else {
            boxname[0].style.backgroundColor = "green"

        }
    }
    function myFunction2() {
        if (heroinename !== answers[1].value) {
            arrkolly.shift()
            kollywood.innerHTML = arrkolly.join("")
            boxname[1].style.backgroundColor = "red"
            if (arrkolly.length == 3) {
                alert(hint2)
            }
            else if (arrkolly.length == 5) {
                alert(hint1)
            }

        }
        else {
            boxname[1].style.backgroundColor = "green"

        }
    }
    function myFunction3() {
        if (moviename !== answers[2].value) {
            arrkolly.shift()
            kollywood.innerHTML = arrkolly.join("")
            boxname[2].style.backgroundColor = "red"
            if (arrkolly.length == 3) {
                alert(hint2)
            }
            else if (arrkolly.length == 5) {
                alert(hint1)
            }
        }
        else {
            boxname[2].style.backgroundColor = "green"

        }
    }
    function myFunction4() {
        if (songname !== answers[3].value) {
            arrkolly.shift()
            kollywood.innerHTML = arrkolly.join("")
            boxname[3].style.backgroundColor = "red"
            if (arrkolly.length == 3) {
                alert(hint2)
            }
            else if (arrkolly.length == 5) {
                alert(hint1)
            }
        }
        else {
            boxname[3].style.backgroundColor = "green"

        }
    }

}
