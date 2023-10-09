
var intervalID = 0;
var change =50;

function intervalStart()
//function to start movement 
{
    var i = 0;
    var image = document.getElementById("imgMEME");
    intervalID = setInterval(function() 
    {
        image.style.right = change+"px"; //meme will start moving from the right of the screen 
        image.style.bottom = change+"px"; //meme will move from botton right of the screen to the top
       document.getElementById("msg").innerHTML = " X = " + image.style.botright+ " y = " + image.style.bottom;
      change +=4;  
    },120);
}
function intervalStop()
//function to stop movement
{
    clearInterval(intervalID);
}