// const string = 'aabbaaabbbccc'
// const string = 'aabbaaabbbccc'
const string = 'caaappkkkk'

function transformStringQueue(string) {
  const queue = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (i === 0) {
      queue.push([char])
      continue
    }

    if (queue[queue.length - 1][0] === char) {
      queue[queue.length - 1].push(char)
    } else {
      queue.push([char])
    }
  }

  let resultString = ''
  for (const queueMembers of queue) {
    if (queueMembers.length === 1) {
      resultString += queueMembers[0]
    } else {
      resultString += queueMembers[0] + queueMembers.length
    }
  }

  return resultString
}

function transformStringNaive(string) {
  let resultString = ''

  let increment = 1
  for (const char of string) {
    const prevChar = resultString.slice(-1)
    if (prevChar === char) {
      increment++
      continue
    }

    if (increment > 1) {
      resultString += increment
      increment = 1
    }

    resultString += char
  }
  
  resultString += increment

  return resultString
}

console.log(transformStringQueue(string))