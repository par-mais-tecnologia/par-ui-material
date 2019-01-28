import { formatDecAsPercent } from '../Core/masks'

export function getWalletComposition (arr) {
  var a = []; var b = []; var prev

  let funds = []
  arr.forEach(item => {
    funds.push(item.fundName)
  })

  let funds2 = funds.sort()
  for (var i = 0; i < funds2.length; i++) {
    if (funds2[i] !== prev) {
      a.push(funds2[i])
      b.push(1)
    } else {
      b[b.length - 1]++
    }
    prev = funds2[i]
  }

  let result = [a, b]
  let total = 0
  let percentages = []

  result[1].forEach((item, i) => {
    total += item
  })

  result[1].forEach((item, i) => {
    let itemPercent = formatDecAsPercent((item / total))
    percentages.push(itemPercent)
  })

  let objRes = []
  for (i = 0; i < result[0].length; i++) {
    objRes.push({
      fundName: a[i],
      percentage: percentages[i]
    })
  }

  return objRes
}
