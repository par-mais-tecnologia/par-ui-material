
export function getMask (typeMask, value) {
  switch (typeMask) {
    case 'people':
      return peopleMask(value)
    case 'years':
      return yearsMask(value)
  }
}

function peopleMask (value) {
  return value > 1 ? 'pessoas' : 'pessoa'
}

function yearsMask (value) {
  return value > 1 ? 'anos' : 'ano'
}
