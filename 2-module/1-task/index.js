function sumSalary(salaries) {
  return Object.values(salaries).reduce((total,money) => {
    typeof money === 'number' && isFinite(money) ? total += money : total
    return total
  },0)
}
