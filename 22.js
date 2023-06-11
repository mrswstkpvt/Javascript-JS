// const prompt =require('prompt-sync')();
alert("Welcome to the Snake Water and Gun Game")
const ran = (a) => {
    if (a < 33) {
        return "s"
    }
    else if (a >= 33 && a < 66) {
        return "w"
    }
    else {
        return "g"
    }

}

let n = 3
let x = 1
while (x > 0) {
    let cp = 0
    let u = 0
    while (n > 0) {
        let user = prompt("Enter S for Snake W for Water and G for Gun ")
        user = user.toLowerCase()
        let a = Math.floor(Math.random() * 100)
        let comp = ran(a)
        // console.log(a)

        if (comp == user) {
            alert("Draw")
            // u
            // cp
        }
        else if (comp == "s" && user == "w") {
            alert("computer wins")
            cp =cp+ 1
        }
        else if (comp == "s" && user == "g") {
            alert("you win")
            u = u + 1
        }
        else if (comp == "w" && user == "g") {
            alert("computer wins")
            cp =cp+ 1
        }
        else if (comp == "w" && user == "s") {
            alert("you win")
            u = u + 1
        }
        else if (comp == "g" && user == "w") {
            alert("you win")
            u = u + 1
        }
        else if (comp == "g" && user == "s") {
            alert("computer wins")
            cp =cp+ 1
        }
        n -= 1
    }
document.write("Computer Points " + cp + " User points " + u)
    x -= 1
}