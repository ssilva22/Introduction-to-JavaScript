/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
let votingAge;
let name= "John";
if (votingAge >=18){
  console.log(`${name} is eligible to vote`);
}
else{
  console.log(`${name} is not eleigible to vote`);
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let value1;
let value2=1;

if (value2===1){
  value1=10;
  console.log(`${value1}`);
}
else{
  console.log("That's it");
}





/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
let x="1999";
console.log(Number(x));



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(x,y){
   let result=x*y;
   return result;
  }

console.log(multiply(2,2));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(humanYears){
    let result=humanYears*7;
    return result;
}
console.log(dogYears(5));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(age,weight){
   if(weight <= 5 && age >=1){
     result=weight*0.05;
    console.log(`Your dog should eat ${result} pounds of food`);
   }
   else if(weight >5 && weight <=10 && age>=1){
     result=weight*0.04;
     console.log(`Your dog should eat ${result} pounds of food`);
   }
   else if(weight >10 && weight <=15 && age>=1){
    result=weight*0.03;
    console.log(`Your dog should eat ${result} pounds of food`);
  }
  else if(weight >15 && age>=1){
    result=weight*0.02;
    console.log(`Your dog should eat ${result} pounds of food`);
  }
  else if(age < 1 && age <=.33 && age >=0.16){
    result=weight *0.1;
    console.log(`Your puppy should eat ${result} pounds of food`);
  }
  else if(age < 1 && age <=.33 && age <=0.58){
    result=weight *0.05;
    console.log(`Your puppy should eat ${result} pounds of food`);
  }
  else if(age <= 1 && age >=.58 ){
    result=weight *0.4;
    console.log(`Your puppy should eat ${result} pounds of food`);
  }
  }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer){
    const computer=Math.random(0,1);
    let computerChoice= function cpu(){
      if (computerChoice <= .34){
        return computerChoice="Rock";
      }
      else if(computerChoice <= .67 && computerChoice >=35){
        return computerChoice="Paper";
      }
      else if(computerChoice >=.68){
        return computerChoice="Scissors";
      }
    }
    let computerChoice=choice2
    let user=choice1;
    const compare=function (choice1,choice2){
      if (choice1==="Rock"||"Paper" ||Scissors){
        if(choice1===choice2){
          console.log(`The result is a tie`);
        }
        else if (choice1 === "Rock")
        {
            if (choice2 === "Scissors")
            {
                return alert("Rock crushes Scissors!");
            }
            else if (choice2 === "Paper")
            {
                return alert("Paper covers Rock!");
            }
        }
        if (choice1 === "Scissors")
        {
            if (choice2 === "Rock")
            {
                return alert("Rock crushes Scissors!");
            }
            else if (choice2 === "Paper")
            {
                return alert("Scissors cuts Paper!");
            }
        }
        else if (choice1 === "Paper")
        {
            if (choice2 === "Rock")
            {
                return alert("Paper covers Rock!");
            }
            else if (choice2 === "Scissors")
            {
                return alert("Scissors cuts Paper!");
            }
        }
    }
    else 
    {
        return alert("Please type Rock, Paper, or Scissors next time");
    }

      }
      computerChoice();
      compare(choice1,choice2);
    }

  

  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(km){
    result= km*.6;
   return result;
  }
console.log(`The equivalent of ${km} in miles is equal to ${miles()} miles`);


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){
    result=cm/30.48;
    return result;
  }
  console.log(`The equivalent of ${cm} in feet is equal to ${feet()} feet`);
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(){
        const cans;
        for (i=99; i >=1 ; i=i-1){
          if(i==1){
            cans="can";
          }
          else{
            cans="can";
          }
          console.log(`${i}+ ${cans} of Mountain Dew On the Wall`);
          if(i<99){
            console.log(``);
            console.log(`${i}+ ${cans} of Mountain Dew On the Wall`);
          }
          console.log(`${i}+ ${cans} of Mountain Dew `);
          console.log(`Sip it Down!!`);
          console.log(`Sharing is Caring`);
          if(i == 1){
            console.log(`No Mountain Dew Cans on the Wall`);
          }
        }
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(grade){
  if(grade >= 90 && grade <=100){
    console.log(`You Got An A`);
  }
  else if(grade >=80 && grade < 90){
    console.log(`You Got A B`);
  }
  else if(grade >=70 && grade <80){
    console.log(`You Got A C`);
  }
  else if(grade >=60 && grade <70){
    console.log(`You Got A D`);
  }
  else if(grade <0 || grade >100){
    console.log(`Please try A valid score ranging from 0 to 100`);
  }
  else{
    console.log(`You Got An F`);
  }
  }
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/

const vowels =["a","e","i","o","u"];
function vowelCounter(string) {
    let vowelCount = 0;
   
     for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
          count++;
      }
  }
  return vowelCount;
}

console.log(vowelCounter());



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
