function sumSalary(salaries) {
 /*  let result = 0;
  for (let i in salaries) {
    typeof salaries[i] !== 'number' ? result : result += salaries[i]
  } 
  return result */

  return Object.values(salaries).reduce((acc,i) => {
    typeof i === 'number' && isFinite(i) && !isNaN(i) ? acc += i : acc
    return acc
  },0)
}
