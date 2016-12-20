function numOnlyArr(arr){
  var newArr=[];
  for(var i=0; i<arr.length;i++){
    if(typeof arr[i]==="number"){
      newArr.push(arr[i]);
    }
    continue;
  }
  console.log(newArr);
}
