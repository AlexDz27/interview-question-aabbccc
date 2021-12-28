function buildString(string) {
  let resultStr = ''

  let lastMemorizedLetter = string[0]
  let lastMemorizedLetterCount = 1

  for (let i = 1; i < string.length; i++) {
    const letter = string[i]

    if (lastMemorizedLetter === letter) {
      lastMemorizedLetterCount++
    } else {
      resultStr += lastMemorizedLetter
      resultStr += lastMemorizedLetterCount

      lastMemorizedLetter = letter
      lastMemorizedLetterCount = 1
    }
  }

  resultStr += lastMemorizedLetter
  resultStr += lastMemorizedLetterCount

  return resultStr
}

let str = 'aabbaaabbbccc'
console.log(buildString(str))

let str1 = 'aaaccccccccc'
console.log(buildString(str1))
