/*
let day = 5;
let dayName;
switch (day){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesdsy";
        break;
    case 5:
        dayName = "Thursday";
        break;
}
console.log(dayName);
*/

/*
let i;
for (i = 0; i <= 5;i++){
    console.log("hello world");
}
*/
/*
let i;
for (i=0; i<=4; i++){
    console.log(i);
*/

/*
let i;
for (i = 100; i >=1; i--){
    console.log(i);
}
*/
// infinite loop
/*
let i;
for (i=0; i >=0; i++ ){
    console.log(i);
}
*/
/*
let i;
for (i = 0; i >= 0; i++){
    console.log(i * 10);
}
    */ 

/*
let i;
for (i = 0;i <=10; i++){
    console.log(i);
   
}
*/





//--------- sum of n numbers
/*
let sum = 0 ;
for (let i = 1; i <=10; i++){
    sum = sum + i;
}
console.log(sum);
*/




//--------- average of n numbers
/*
let start = 1, end = 10 , sum = 0;
for (i = start; i<= end; i++){
    sum += i;

}
let count = end - start +1;
let avg = sum/count;
console.log(avg);
*/




//------- displaying n numbers
/*
let i =1 ;
while(i <= 100){
    console.log(i);
    i++;
}
*/



//-------sum of n numbers
/*
let i = 1;
let sum = 0;
while (i <= 10){
    sum += i;
    i++;
  
}
console.log(sum);
*/



// ------displaying odd and even number of n numbers
/*
for (let i =1; i <= 100; i+=2){
    console.log(i);
}
for (let i = 0; i <= 100; i+=2){
    console.log(i);
 */

    //-------even or odd displaying
/*
for (let i =1; i<= 10; i++){
    let result = (i%2==0)?"even":"odd";
    console.log(`${i} is ${result}`);
}




*/
// -----sum of digits in a number
/*
let i = 234;
let sum=0;
while(i > 0){
    let lastnum = i%10;
    sum = sum + lastnum;
    i = Math.floor(i/10);

}
console.log(sum);
*/
/*
console.log(Math.floor(12.9));
console.log(Math.ceil(12.9));
*/

/*
for (let i = 1; i<= 100; i++){
  
    if (i%3 == 0 && i%5== 0){
        console.log("FizzBuzz");
    }
    else if (i%5 == 0){
        console.log("Buzz");
    }
    else if (i%3 == 0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }

}
*/

/*
count of digits in a number

let i = 1234534534;
let count = 0;
if (i == 0){
    count = 1;
}
else{
    while(i != 0){
        count = count+1;
        i = Math.floor(i/10);
    }
}
console.log(`the number of digits is ${count}`);
*/

/*
let friends = ["Athul","Ajin","Allu","Shafeek","Shan"];
    console.log(friends[10]);
*/


/*
let numbers = [1,5,7,9];
console.log(numbers[1+2]);
console.log(numbers[3]);
console.log(numbers[1]+numbers[2])
*/

//sum and avg using array

/*
let marks = [44,67,88,38];
let sum = 0;
let avg;
for (i = 0;i < marks.length;i++){
    sum = sum + marks[i];
    avg = sum/marks.length;
}
console.log(sum);
console.log(avg);
console.log(marks.length);
*/



/*
sum of odd and even numbers in an array

let nums =[1,2,3,4,5,6,7,8,9];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        evenSum = evenSum + nums[i];
    }
    else{
        oddSum= oddSum+nums[i];
    }
   
}
console.log(evenSum);
console.log(oddSum);

/*

/*print all numbers greater than 50 from an array--------*/
/*
let numbers = [22,32,55,43,66,77,23,87,78];
for (i=0; i < numbers.length; i++){
    if(numbers[i] > 50){
        console.log(numbers[i]);
    }
}
*/


/* count how many even numbers are in the array*/
/*
let numbers = [2,3,4,6,7,8,88,44,24,33,54,66];
let count = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 == 0){
        count = count+1;
    }
}
console.log(count);
*/

/*largest number in an array*/
/*
let numbers = [22,43,55,33,22,67,98];
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log(largest);
*/

/*smallest number in an array */
/*
let numbers = [22,55,43,52,67,2,1];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i]<smallest){
        smallest = numbers[i];
    }
}
console.log(smallest);
*/

/*array methids */
/*
let fruits = ["mango","peach","kiwi"];
fruits.push("orange");
console.log(fruits);
*/


/*
let colors = ["red","blue"];
colors.push("green");
console.log(colors);
colors.unshift("yellow");
console.log(colors);

colors.pop();
console.log(colors);
let count = 0;
for (let i = 0; i < colors.length;i++){
    count = count+1;
    
}
console.log(count);
*/
