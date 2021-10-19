//In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

//The program will determine the actual and ideal hours of sleep for each night of the last week.

//Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

//a week that gets number of hours of sleep each day in week. it takes day as a parameter
const getSleepHours = (day) =>
{
 //since we get different hours on different days, so we can use conditional statement to get daily hours based on the given argument passed by user. 
 switch (day){
case 'monday':
return 6;
break;
case 'tuesday':
return 5;
break;
case 'wednesday':
return 5;
break;
case 'thursday':
return 7;
break;
case 'friday':
return 4;
break;
case 'saturday':
return 7;
break;
case 'sunday':
return 5;
break;
}
};

//total sum of the sleep hours
const getTotalSleep= ()=> getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')

 
  { 
        //call the getSleepHours() function for each day of the week. 
  //Add the results together and return the sum using an implicit return.

  /* we can also use this method 
  const mon = getSleepHours('monday');
  const tue= getSleepHours('tuesday');
  const wed= getSleepHours('wednesday');
  const thur= getSleepHours('thursday');
  const fri= getSleepHours('friday');
  const sat= getSleepHours('saturday');
  const sun= getSleepHours('sunday');

const sum=  mon+tue+wed+thur+fri+sat+sun;
return sum;
*/

}
const getIdealSleep = () =>
{
 const idealHours = 8*7;
 return idealHours;
}
const calculateDebt = () => getIdealSleep() - getTotalSleep();

console.log('your total sleep debt is , '+ calculateDebt() + 'hours');
