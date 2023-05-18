//תרגיל 1 //
// const Number = Number (prompt("please type a number"))
// if (Number % 2 == 0) {
//  console.log("זה מספר זוגי")
// }
// else {
//  console.log ("זה מספר אי זוגי")
// }



//תרגיל 2//

//function everhighnumber(Number1,Number2,Number3) {
//return ((Number1 + Number2 +Number3) /3)}
//console.log (everhighnumber (4,4,8))

//תרגיל 3 //

//player1_name ='shlomi'
//player2_name ='david'
//player1_score = 60
//player2_score = 70

//if (player1_score > player2_score) {
  //console.log( player1_name + "wins with" + player1_score + "points")
  //} else console.log(player2_name + "wins with" + player2_score +"points")



//תרגיל 4//

//let time = prompt("What is the time  ?( from 5 until 23)")
//if (time == 5){
//      console.log("good Morning")
// }

// if (time > 5 && time <= 11.59){
//     console.log("good morning")
//}
//if (time >= 12 && time <= 17){
//    console.log("good afternone")
// }
// if (time >=18 && time <= 23){
//   console.log("good evning")
// }


//תרגיל 5 //

//const time = prompt("enter only: morning, afternoon or night")
//const passengers = Number(prompt("enter number of passengers"))
//const salary = Number(prompt("enter drivers salary"))

//function profitCalculator(timeOfDay, numberOfPassengers, driverSalary) {
//if(timeOfDay === "morning"){
//    return ((numberOfPassengers * 6.60 ) / 1.17 - driverSalary)
//} else if (timeOfDay === "afternoon") {
//    return ((numberOfPassengers * 6.60 * 0.9 ) / 1.17 - driverSalary)
//}  else if (timeOfDay === "night") {
//    return ((numberOfPassengers * 6.60 * 0.7) / 1.17 - driverSalary)
//}  else (console.log("Please enter a valid data"))
//}

//console.log(profitCalculator(time,passengers,salary))


//תרגיל 6//

//const carPrice = Number(prompt("PLEASE ENTER CAR PRICE:"))
//const numberOfPayments= Number(prompt("please enter number of paymennt"))
//function carDiscountCalc (CarPrice, numberOfPayments){
//   const afterDiscount = CarPrice/100 *95
//   const paymennts = Math.ceil (afterDiscount/numberOfPayments)
//   return "the price of the car after discount is:" + afterDiscount +"in" + numberOfPayments + "payments of:" +paymennts }
// console.log (carDiscountCalc(carPrice, numberOfPayments));

 
//תרגיל 7 //
  
//let people = Number (prompt ( "כמה אנשים יש בתחנה" ))
// if (people <12) 
// {console.log ("אין מספיק אנשים בשביל שהמונית תצא. ")}
// if (people == 12 ) 
// {console.log ("המונית יכולה לצא לדרך, לא נשארו אנשים בתחנה")}

 //function caont (people) {
 // if (people>12) 
 // return people-12;
// }
//{console.log (caont(people))} 
 

//תרגיל 8 //
// const numberOfStudents = Number(prompt("Please enter number of students:"));

// function fieldTrip(numberOfStudents) { 
//     const guardAndMedic = Math.ceil(numberOfStudents / 30);
//     const medicKit = Math.ceil(numberOfStudents / 50);
    
//     if (numberOfStudents >= 50 ) { 
//     return (
//         "For the trip we need: " +
//         guardAndMedic +
//         " Guards and medics, and " +
//         medicKit +
//         " Medic kits"
//     )} else return "For the trip we need: " +
//     guardAndMedic +
//     " Guards and medics"
//     }
// console.log(fieldTrip(numberOfStudents));

//תרגיל 9//

//const foo = prompt("Please enter Thursday, thursday or 5");

//if (foo === "Thursday" || foo === "thursday" || foo === "5") {
//    console.log("!Thursday! Yay")
//} else console.log("its not Thursday")

//console.log(foo)

//תרגיל 10 //

// const bmi = Number( prompt ("please enter BMI  Number:"))
// function bmiChecker (bmi){
//   if ( bmi <= 18){
//     return "BMI is too low";
//   }
//   else if (bmi >= 18 && bmi <= 25) {
//     return "BMI is too high";
//   }
//   else return "BMI is okay :)"}

//   console.log (bmiChecker(bmi))


//תרגיל 11 //

// let foo = ""
// if (foo === "corect am i") {console.log ("he is correct")}
// else{ console.log ("he is not correct")}

 //תרגיל 12 //
//  const rootNumber = 200
//  console.log (Math.sqrt (rootNumber))

 //תרגיל 13//

//תרגיל 14 //

//תרגיל 15 //

const now = new Date ();


//תרגיל 16 //

// const number = Number (prompt ("please enter a number: "))
// function printNum (number) {
//   for (let i = 1; i <= number; i ++){
//     console.log ("hello")
//   }
// }

// //תרגיל 17 //

// const data = prompt("Please enter data: ")

// function printData(data) {
//     for (let i = 0; i <= 9; i++) {
//         console.log(data)
// }}
// console.log(printData(data))

//תרגיל 18 //

// const Number1 = Number (prompt("please enter a first number"))
// const number2 = Number (prompt("please enter a second number"))
// function returnBiggerNumber(a,b) {
//   if (a < b) {
//     return b + "second number is bigger"
//   }
//   else (a > b) 
//   return a + "first number is bigger"}
//   console.log (returnBiggerNumber (Number1, number2))


//תרגיל 19 //
// const price = Number (prompt ("please enter a price"))
// const tipPrecent = Number (prompt("put tip in percentage"))
// function tipCalculator (price, tipPrecent){
//   const tipPrice = (price/100) * tipPrecent 
//   const totalPrice = price + tipPrice
//   return ("tip is"+ tipPrice + "total price is:" +totalPrice)

// }
// console.log (tipCalculator(price,tipPrecent))

//תרגיל 20 //

//תרגיל 21 //

//תרגיל 22 //

// const namesArray = ["or", "talya","bar", "dan ,bob"]
// console.log (namesArray);

//תרגיל 23//

// let books = [];
// const piska = document.querySelector ("#book_p")
// function btn_books1 (){
//   const addBoxs = document.querySelector("#books_input").value;
//   if (addBoxs == "") {
//     piska.innerHTML = 'please enter a name of a book';
//     return
//   }
//   else{
//     piska.innerHTML ="";
//   }

//   books.push(addBoxs);
// }

// function btn_books2 (){
//   for (let i = 0; i<books.length; i ++)
//   piska.innerHTML+= books [i] + "<br>"
// }



//תרגיל 24 //
//const foo = prompt("Please enter Thursday, thursday or 5");

//if (foo === "Thursday" || foo === "thursday" || foo === "5") {
//    console.log("!Thursday! Yay")
//} else console.log("its not Thursday")

//console.log(foo)

