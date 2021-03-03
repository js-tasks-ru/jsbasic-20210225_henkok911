function factorial(n) {
  let total = 1;
  if (n!=0 || n!=1){
    for(let i=0;i<n;i++){
    
      total = total*(n-i);
    }
    return total;
  } return total;
}
