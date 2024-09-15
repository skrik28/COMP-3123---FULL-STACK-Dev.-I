// Exercise 04
// Write a JavaScript program to find the types of a given angle.
//
// Types of Angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

const prompt=require("prompt-sync")({sigint:true});

var angle = prompt("Please input an angle : ");

angle = parseInt(angle);


if(angle>=0 && angle<=180)
{
   if(angle<90)
    {console.log("Acute angle");} 
   else if(angle==90)
   {console.log("Right angle");}
   else if(angle==180)
   {console.log("Straight angle");}
   else
   {
    console.log("Obtuse angle")
   }
   
}
else
{
    console.log("Invalid input");
}