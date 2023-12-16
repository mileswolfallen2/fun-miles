// This is going to be some examples on nested loops since I may not have explained it well tonight.

// To start, this will concatenate two strings together. 

function nestedLoop1(){
    // This is the outer loop. It will run 1 times. This is going to act as our tens column.
    // ex. 04 has 0 as the tens column.
    for(var i = 0; i<1; i++){
        
        // This is the inner loop. This is going to be our ones column. 
        // ex. 04 has 4 as the ones column.
        // ex. 08 has the 8 as the ones column. 

        // Important: Because there are two loops, you need two different variable names for the internal loop counters.
        // since i is the default start, the next is usually j, then k, and so on, but as we've been told many times
        // you can always make them whatever you want, just not the same name 
        // (As an aside, there are times where you want them to be the same, but it's not often)

        // What happens now is that we start with i = 0, then we're going to concatenate it with the j value.
        // However, because this is an inner loop, the loop will keep running until it finishes, i.e. gets to 9.
        // So, we're going to get a console.log of 00 through 09.
        for(var j = 0; j<10; j++){
            // I do not want to do any arithmetic here so I am purpsefully making the integers into strings
            // so that it acts as "0"+"1" = "01" like we see with normal string contatenation.  
            console.log(i.toString()+j.toString());
        }
    }
}

// This is actually a nested for loop, but it doesn't look that way because the outer loop runs only once. Now let's have the outer loop run twice.
console.log("----------------\nExample One (String concatenation, only once)\n");
nestedLoop1();
console.log("----------------\nExample Two (String concatenation, but twice!)\n");
function nestedLoop2(){
    // This is the same example as above except I'm going to have the outer loop run twice. (i will be 0 the first time, 1 the second).
    for(var i = 0; i<2; i++){
        
        // The inner loop is the same, running 0 to 9.
        for(var j = 0; j<10; j++){
            // Same thing as before, just making them into strings so that the result makes sense.
            console.log(i.toString()+j.toString());
        }
    }
}

nestedLoop2();
// As you can see, it prints "00" all the way through "19". That is because of the nested loop. 0 acts as the first character in the string, and then 
// the inner for loop runs 0 through 9 until it finishes. Then, the outer loop increases and the process repeats.

console.log("----------------\nExample Three (Printing values in an object)\n");
// So, what about objects and arrays?

// Here's an array of two objects...

var countingArray = [
    {
        values: ["0","1","2","3","4","5","6","7","8","9"]
    },
    {
        values: ["10","11","12","13","14","15","16","17","18","19"]
    }
];

function nestedLoop3(){
    // Now, we're going to run as many times as we need to go through every object in the countingArray
    // and since there's tow objects, that means we're going to run it twice.
    for(var i = 0; i<countingArray.length; i++){
        
        // And here, we're going to run the length of the "values" array each number has.

        // To do this, we get the first object (remember, countingArray is just an array so we pluck out the starting one
        // and since i=0 at start, we're saying countingArray[0] at start.
        // Then, we're getting the key, "value", of that object, and since the key "value" for the object is an array:
        // ["0","1","2","3","4","5","6","7","8","9"] for the first one,
        // We use its length. (which in this specific case will be 10 times.)
        for(var j = 0; j<countingArray[i].values.length; j++){
            // Now, this is where it gets a bit different than the previous two examples. 
            // We're not concatenating strings this time. Because the first object has values 0-9, and the second 10-19
            // all we're doing is printing all the values in the first object (when i = 0 as defined in the outer loop)
            // and then we're going to go to the second object (when i = 1, because we printed all the values in the inner loop)
            // and then print through all the values in the second object.
            console.log(countingArray[i].values[j]);
        }
    }
}

nestedLoop3();
// the output is 0-19.

console.log("----------------\nExample Four (Printing values in an object of different sizes)\n");
var countingArray = [
    {
        values: ["0","1","2","3","4","5"]
    },
    {
        values: ["6","7","8","9","10","11","12","13","14","15"]
    }
];

// This is the same exact code as nestedLoop 3. But as you can see, because we used the length of the values and didn't predefine it as 10 or some
// specific answer, it's modular to the number of values that each object holds (the first one 6, the second one 10).
function nestedLoop4(){
    
    for(var i = 0; i<countingArray.length; i++){
        for(var j = 0; j<countingArray[i].values.length; j++){
            console.log(countingArray[i].values[j]);
        }
    }
}

nestedLoop4();
// the output is 0-15.

console.log("----------------\nExample Five (Printing the object closest to the average with a single interger supplied)\n");
var averageArray = [
    {
        values: [1,2,1,2,1,2]
    },
    {
        values: [4,4,4,4,4,4]
    }
];

// Now we can see work with doingn some summations. For the first object, the average of the values is 1.5. 
// The second object's average is 4.

// Important: Since we're going to be doing math, they are no longer strings, but integers!

// This function takes in a number "theValue" and is going to compare it against the average of the two objects in the averageArray
// and determine which is the one closest to the supplied number.
function recursiveAverages(theValue){

    // These are the initializers. We can assume that the first object in the array is going to act as the default match because 
    // it is the first thing being tested. Think of it in terms of dating. You're first partner is the best because you have
    // nothing to compare to, and your second might be better, or worse. (but because it's an array, we start at 0).
    var indexOfArrayAverage = 0;
    // Difference from the average is going to be our comparison number that we'll use to compare as we go. Again, if your first partner 
    // was a solid 7, compare your second partner to them. If they are an 8, they're your new best. If they're a 2, then they're not!
    // (I should have picked a better analogy than dating since it's kind of strange making these comparisons but I'm not going back to change this. lol)
    
    // I'm going to declare it as 100 because there's no way to get an average of 100 from six single-digit numbers. This is going
    // to kind of act as a default worst possible thing that is impossible. I'll explain at the if statement later.
    var differenceFromTheAverage = 100;

    // Same as before. We're going to go through both objects.
    for(var i = 0; i<averageArray.length; i++){
        // So let's start. We declare it as 0 just to make sure it gets treated as an integer.
        var theCurrentObjectAverage = 0;
        
        // Same as before. We're going to go through all the values in the object averageArray[i].
        for(var j = 0; j<averageArray[i].values.length; j++){
            // We're going to add up all the values in the array
            // Remember as before. The outer loop runs once while the inner loop runs through all the values of that one object
            // ex averageArray[0].values[0] = 1
            // ex averageArray[0].values[1] = 2
            // And so on.
            theCurrentObjectAverage = theCurrentObjectAverage + averageArray[i].values[j];
        }

        // So, now we have the all the values added into theCurrentObjectAverage. For the first object, it's going to be 9, and the second is 24.
        // To get the average, we divide them out by their length (i.e. 6)

        // And now it's at 1.5 and 4, respectively. 
        theCurrentObjectAverage = theCurrentObjectAverage / 6;

        // But now we have to do the actual logic. Notice that we're still in that outer for loop which means this is going to happen
        // after all the values are added for whichever object is being worked on.

        // Ok. There's a lot going on here. Let's start with the if statement. 

        // We get the absolute value of the theCurrentObjectAverage minus the number we're checking. 
        // For the first object, that value is going to be 1.5 (3-1.5)
        // For the second object, that value is going to be 1 (3-4)
        // Then, we compare that to our pie in the sky default of differenceFromTheAverage, which is why we set it so high
        // Because we want that first result to always be better than it.
        // Thus, for the first object, 1.5 is indeed less than 100. 
        if(Math.abs(theCurrentObjectAverage-theValue)<differenceFromTheAverage){
            // So now we change the differenceFromTheAverage to 1.5 and it is now the number to beat!
            // Which is what happens with the second average! 1 is less than 1.5, so the if statement happens
            // 1 is now the number to beat (in other words differenceFromTheAverage)
            differenceFromTheAverage = Math.abs(theCurrentObjectAverage-theValue);
            // And, while the index of the array was originally 0 at default, because 1 is less than 1.5
            // And this is happening in the second object (where i = 1 in the outer for loop)
            // indexOfArrayAverage is 1.
            indexOfArrayAverage = i;
        }
        
    }

    // So now we're out of the for loops. Hooray!
    // But, we decared our value indexOfArrayAverage outside of it, so it's still 1.
    // So, let's just console.log the object at index 1 in averageArray, which is the closest to our supplied number of 3.
    console.log(averageArray[indexOfArrayAverage]);

}


recursiveAverages(3);

console.log("----------------\nExample Six\n");// Same exact code as above, but now we're going to use the number 1, which means we're going to get the first object returned.
recursiveAverages(1);
console.log("----------------\nExample Seven (Printing the object closest to the average with an array of values supplied)\n");

// Last one. 
// What if I want to not have a single number be the comparison, but an array of values just like the objects above?

// This is the same code as above. I'll mark where I made changes

var averageArray = [
    {
        values: [1,2,1,2,1,2]
    },
    {
        values: [4,4,4,4,4,4]
    }
];

function recursiveAveragesWithArray(theArray){

    var indexOfArrayAverage = 0;
    var differenceFromTheAverage = 100;
    for(var i = 0; i<averageArray.length; i++){
       
        var theCurrentObjectAverage = 0;
        
        for(var j = 0; j<averageArray[i].values.length; j++){
            
            // This is where things change a lot.
            // What we're doing now is getting the difference between the two scores as they happen in real time.
            // So, in the array I'm using [1,3,4,2,4,5] it goes as such for the first object
            // theCurrentObjectAverage = theCurrentObjectAverage + (1-1)
            // theCurrentObjectAverage = theCurrentObjectAverage + (3-1)
            // theCurrentObjectAverage = theCurrentObjectAverage + (4-1)
            // theCurrentObjectAverage = theCurrentObjectAverage + (2-1)
            // And so on.
            // So, at the end of it all, the difference between my submitted array and the array of values in object one is: 10
            // And for the second object, it's 7.
            theCurrentObjectAverage = theCurrentObjectAverage + Math.abs(theArray[j]-averageArray[i].values[j]);
        }
        // So now we're doing something similar to what we did before. The first time out, 10 is less than 100, so it's the best!
        // But, the second time out, 7 is less than the previous best, 10, and is now the new best.
        if(theCurrentObjectAverage<differenceFromTheAverage){
            differenceFromTheAverage = theCurrentObjectAverage;
            indexOfArrayAverage = i;
        }
        
        
    }
    console.log(averageArray[indexOfArrayAverage]);
}
// As a result, the second object is printed. 
recursiveAveragesWithArray([1,3,4,2,4,5]);
console.log("----------------\nExample Eight`\n");
// And this time with an array with answers closer to the first object's values, the first object is returned.
// For it, the first theCurrentObjectAverage is 8, the second time it's 13, which is why the first object is printed. 
recursiveAveragesWithArray([1,2,5,1,3,1]);
console.log("----------------");