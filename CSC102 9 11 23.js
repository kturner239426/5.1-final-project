/* Kayla Turner functions for wk 2*/
function funcAlert()
{
    alert("you pushed the button on 9 11 23");
    var die1 = Math.ceil(Math.random()*6)
    var die2 = Math.ceil(Math.random()*6)
    var sum = die1+die2;

    alert("First num = " + die1 + " Second num" + die2);

    if (die1 % 2 == 0)
    {
    alert("die1 = " + die1 + " you lose!");
    }

   else if (sum ==7)
    {
        alert("YOU LOSE!")
    }

    else if (sum ==11)
    {
        alert("YOU LOSE!")
    }

    else
    {
        alert("die1 = " + die1 + " you won!"); 
    }
} 