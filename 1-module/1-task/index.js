function factorial(n) {
  
  if (n == 0 || n == 1){
    return 1;
  } 
  let total = 1;
  for(let i=0;i<n;i++){
    
    total = total*(n-i);
  }
  
  return total;
}
