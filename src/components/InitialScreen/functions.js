export const convertHexToRGB = (hex, opacity) => {
  if (hex.length === 4) {
    hex = hex + hex.substring(1, 4)
  }
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
