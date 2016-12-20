function printRange(min,max,jump)
{
  for(var i=min; i<max; i+=jump)
  {
    console.log(i);
  }
}
printRange(2,10,2);

// if they dont give me a skip or jump amount:
function printRange(min,max,jump)
{
  for(var i=min; i<max; i+=jump ||1)
  {
    console.log(i);
  }
}
printRange(2,10);
