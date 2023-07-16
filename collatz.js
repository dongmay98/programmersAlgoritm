function solution(num) {

  for(var i =0; num !==1 && i < 500; i++){
      if(num%2===0){
          num = num / 2 ;
      }else{
          num = (num  * 3)+1;
      }
  }
  
  if(i === 500){
      return -1;
  }else{
      return i;    
  }
  
}