function winMoney(start){
  for(var quarters=start; quarters>0; quarters--)
  {
    var win=Math.floor(Math.random()*101);
    console.log("did I get a one?" + win);
    if(win!==1)
    {
    continue;
    }
    var money=(Math.floor(Math.random()*51)+50);
    console.log("i won" + money)
    quarters=(quarters-1) + money;
    console.log("quarters left" + quarters)
  }
}
