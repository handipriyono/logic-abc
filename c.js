function alfabetCount(text) {
  let tempObj = {}
  let tempArr = []

  for (let i = 0; i < text.length; i++) {
    if (tempObj[text[i]] !== undefined) {
      tempObj[text[i]] = tempObj[text[i]] + 1
    } else {
      if (text[i] !== ' ') {
        tempObj[text[i]] = 1
      }
    }
  }

  let keys = Object.keys(tempObj).map((x) => {
    return x
  })

  let sortKeys = keys.sort((a, b) =>
    a.localeCompare(b, 'en-US', { caseFirst: 'upper' }),
  )

  for (let i = 0; i < sortKeys.length; i++) {
    if (tempObj[sortKeys[i]] !== undefined) {
      tempArr.push({
        [sortKeys[i]]: tempObj[sortKeys[i]],
      })
    }
  }
  return tempArr
}

console.log(alfabetCount('MasyaAllah')) //[ { A: 1 }, { a: 3 },{ h: 1 }, { l: 2 },{ M: 1 }, { s: 1 },{ y: 1 }]
console.log(alfabetCount('Hello World')) //[{ d: 1 }, { e: 1 },{ H: 1 }, { l: 3 }, { o: 2 }, { r: 1 },{ W: 1 }]
