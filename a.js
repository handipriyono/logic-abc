function sortingData(params) {
  let alfabetList = params.filter((x) => typeof x === 'string').sort()
  let numberList = params
    .filter((x) => typeof x == 'number')
    .sort((a, b) => a - b)

  return [...alfabetList, ...numberList]
}

console.log(sortingData([12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B'])) //['A', 'B', 'J', 'M', 'N', 9,   12,  30,  82,  99]
