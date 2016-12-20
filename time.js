var HOUR=8;
var MINUTE=50;
var PERIOD="AM";

if(PERIOD=="PM"){
  if( MINUTE>=30){
    console.log("it's almost" + (HOUR + 1) + PERIOD + "in the evening")
  }
  else{
    console.log("it's just past" + HOUR + PERIOD + "in the evening")
  }
}
else{
  if(MINUTE>=30){
  console.log("it's almost" + (HOUR + 1) + PERIOD + "in the morning")
  }
  else{
    console.log("it's just past" + HOUR + PERIOD + "in the morning")
  }
}
