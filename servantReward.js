var rewardAmount=0.01
for(var num=1; num<31;num++){
  console.log(rewardAmount);
  rewardAmount=rewardAmount * 2
}
// He ends up with $5,368,709.12

var rewardAmount=0.01
var day=1
while(rewardAmount<10001){
console.log("day" + day+ "$"+ rewardAmount)
day++;
rewardAmount=rewardAmount*2
}
// He gets past the $10,000 mark on day 21.
var rewardAmount=0.01
var day=1
while(rewardAmount<Infinity){
console.log("day" + day+ "$"+ rewardAmount)
day++;
rewardAmount=rewardAmount*2
}
// it stops at day 475 with $4.877732109868738e+140 so I am assuming he hits infinity on day 476
