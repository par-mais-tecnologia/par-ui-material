export const isMobile = () => window.innerWidth < 769

export const getCurrencyFormat = (number, prefix = '', defaultValue, separator) => {
  if (isNaN(number) || number === null) {
    return defaultValue
  }

  const value = prefix + number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  if (separator) {
    return value.replace(/\./g, separator)
  }

  return value
}
