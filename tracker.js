//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
function numOfSeeds(list){
  let found = 0;
  for(let i=0; i<list.length; i++){
    if(list[i] !== null){
      found++;
    }
  }
}
function addSeed(s){
  list.push(s);
  return list;
}
function removeSeed(list, name){
    for(let i=0; i<list.length; i++){
      if(list[i]===name){
        return null
      }
    }
  }
function reportHealth(list){
    let sum=0;
    for(let i=0; i<list.length; i++){
      if(list[i]!=0){
      sum=sum+list[i];
      }
    }
    return sum/list.length;
    
  }
}
function update(){
  Math.random(0, 1);
  for(let i=0; i<list.length; i++){
  
  
}