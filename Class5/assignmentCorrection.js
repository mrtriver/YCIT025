let sum = 0;
let avrg = 0;
let highestNumber = Number.MIN_SAFE_INTEGER;
let lowestNumber = Number.MAX_SAFE_INTEGER;
let countEven =0;
let countOdd =0;




function randomArray(min, max) {
    const array = [];
    for (let i=0; i<100; i++) 
    {      
   array[i] = Math.floor(Math.random()*(max - min)+1)+min; 
   sum = sum + array[i];
                //Avarage calculated here in the function
   
   if(array[i] > highestNumber)   // For Highest Number 
   {
    highestNumber = array[i];
   }

   if(array[i]< lowestNumber)      // For the Lowest Number
   {
    lowestNumber = array[i];
   }

   if(array[i]%2 == 0)            //For the Even numbers
   {
    countEven++;
   } 

   countOdd = Math.abs(countEven-array.length);

  
   
    }

    avrg = sum / max;   //PUT AVARAGE HERE TO AVOID EXTRA JOB
    console.log(array);
    console.log("1-)Populating a random array above with selected min and max values")
    console.log("2-) The avarage of the whole group  =\t"+avrg);
    console.log("3a-)The Highest Number of the array =\t"+highestNumber);
    console.log("3b-)The lowest number of the array  =\t"+lowestNumber);
    console.log("4-)The number of even values        =\t"+countEven);
    console.log("5-)The number of odd values         =\t"+countOdd);

    return array;
}

randomArray(1,100);               //Input the range of the array (from-to)