const mathHelpers = {
  double: function(n) {
    return n * 2
  },
  square: function(n) {
    return n * n
  },
  isEven: function(n) {
    return n % 2 === 0
  },
  average: function(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i = i + 1) {
      total = total + numbers[i]
    }
    return total / numbers.length
  }
}