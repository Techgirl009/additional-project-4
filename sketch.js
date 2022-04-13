var peter_pan = "";
var frozen = "";
var disney = "";

function preload()
{
	peter_pan = loadSound("peter_pan.mp3");
	disney = loadSound("Disney_music.mp3");
	frozen = loadSound("frozen.mp3");
  
}
   function play()
{
  var name = document.getElementById("name").value;
  if(name == "peter_pan"){
    //write code to stop songs loaded in "frozen" and "disney" varaibles from playing
    frozen.stop();
    disney.stop();
     peter_pan.play();
     }
   if(name == "frozen"){
     // write code to stop songs loaded in "peter_pan" and "disney" varaibles from playing
     disney.stop();
     peter_pan.stop();
     frozen.play();
     
     }
   if(name == "disney"){
     // write code to stop songs loaded in "peter_pan" and "frozen" varaibles from playing
    frozen.stop();
     peter_pan.stop();
     disney.play();
     }
	
}

function stop_music()
{
     peter_pan.stop();
     frozen.stop();
     disney.stop();
}


function setup(){
}