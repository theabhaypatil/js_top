console.log("Hello World!")
console.log("We're in basic.js")

//FIZZBUZZ program

let answer =parseInt(prompt("Please enter the number you would like FIZZBUZZ upto: "));

for (let i=1; i<=answer; i++){
    if(i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz")
    }else if (i%3 === 0) {
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}