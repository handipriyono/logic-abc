function patternCount(text, pattern) {
  let match = 0
  for (let i = 0; i < text.length; i++) {
    let strTemp = ''
    if (text[i] === pattern[0]) {
      for (let x = 0; x < pattern.length; x++) {
        strTemp += text[i + x]
        if (strTemp === pattern) {
          match += 1
        }
      }
    }
  }
  return match
}

console.log(patternCount('palindrom', 'ind')) //1
console.log(patternCount('abakadabra', 'ab')) //2
console.log(patternCount('aaaaaa', 'aa')) //5
console.log(patternCount('hell', 'hello')) //0
