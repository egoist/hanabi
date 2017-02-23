const defaultColors = ['23AC69','91C132','F19726','E8552D','1AAB8E','E1147F','2980C1','1BA1E6','9FA0A0','F19726','E30B20','E30B20','A3338B']

export default function (input, {
  colors = defaultColors
} = {}) {
  let index = 0
  return input.replace(/./g, m => {
    index = ++index % colors.length
    return `<span style="color: #${colors[index]}">${m}</span>`
  })
}
