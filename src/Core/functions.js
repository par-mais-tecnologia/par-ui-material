export const isMobile = () => window.innerWidth < 769

export const importAllImages = (r) => {
  let images = {}
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item).replace(/"/g, '')
  })
  return images
}
