/*

let temperature = 12;
if(temperature >= 35){
    console.log("The sun is clearly angry today");
}
else if (temperature >=25){
    console.log("Hot, but survivable");
}
else if (temperature >= 15){
    console.log("Nice Weather, go for a walk");
}
else if (temperature >= 5){
    console.log("Grab a hoodie");
}
else if (temperature >= -10){
    console.log("Nope.Not going outside today");
}
else if (temperature <-10){
    console.log("Nope.Not going outside today");
}

*/
/* array methods*/
/*
let guests =[];
guests.push("jane");
guests.push("john");
console.log(guests);
guests.unshift("alice");
console.log(guests);
let index = guests.indexOf("john");
if (index !== -1){
    guests.splice(index,1);
    
}
console.log(guests);

guests.unshift("bob");
console.log(guests);

let no_OfGuests = 0;
for (let i = 0; i < guests.length;i++){
    no_OfGuests = no_OfGuests+1;
}
console.log(`no of guests are ${no_OfGuests}`);

if (no_OfGuests > 3){
    console.log("Big Cart");
    
}
else{
    console.log("Small Cart");
    
}
guests.splice(1,0,"amy");
console.log(guests);
*/

/* fruits  array*/

let fruits = ["apple","banana","mango","banana","orange"];
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
//let index = fruits.indexOf("banana",);
//console.log(index);
fruits.unshift("grapes")
console.log(fruits);
fruits.push("grapes")
console.log(fruits);





/*pet array*/
/*
let pets = ["cat","dog"];
let index = pets.indexOf("rabbit");
if (index === -1){
    pets.unshift("rabbit");
}
console.log(pets);
let index1 = pets.indexOf("dog");
if(index1 !== -1){
    pets.splice(index1,1);
}
console.log(pets);
*/





/*shop array*/ 
/*
let shop = ["pen","pencil","eraser","scale"];
console.log(shop);
shop.shift();
console.log(shop);
shop.push("sharpner","marker");
console.log(shop);
let index = shop.indexOf("eraser");
if (index !== -1){
    shop.splice(index,1);
}
console.log(shop);
let index1 = shop.indexOf("scale");
if (index1 !== -1){
    shop.splice(index1,0,"ruler")
}
console.log(shop);
let index2 = shop.indexOf("highlighter");
if (index2 === -1){
    shop.unshift("highlighter")
}
console.log(shop);
shop.pop();
console.log(shop);
*/