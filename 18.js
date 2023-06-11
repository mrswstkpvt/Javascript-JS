const prompt =require('prompt-sync')();
let x=Math.floor(Math.random()*100)
let a=prompt("Guess the number between 0 and 100 : ")
let chances=0
//console.log(x)


while(a!=x){
    console.log("Wrong Guess ! ")
    if(a<x){
        console.log("Your input is ",a,"which is smaller than the actual number ")
        a=prompt("Re-enter the number which is greater : ")
    }
    else{
        console.log("Your input is",a,"which is bigger than the actual number ")
        a=prompt("Re-enter the number which is smaller : ")
    }
    chances+=1
}
console.log("Congratulations you guessed it right, "," Your Score : ",100-chances)