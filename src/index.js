const defaultColors = ['23AC69', '91C132', 'F19726', 'E8552D', '1AAB8E', 'E1147F', '2980C1', '1BA1E6', '9FA0A0', 'F19726', 'E30B20', 'E30B20', 'A3338B']

export default function (input, {
  colors = defaultColors
} = {}) {
  let index = 0
  const cache = {}
  return input
  .replace(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+|</g, m => {
    if (m === '<') {
      return '&lt;'
    }
    let color
    if (cache[m]) {
      color = cache[m]
    } else {
      color = colors[index]
      cache[m] = color
    }
    const out = `<span style="color: #${color}">${m}</span>`
    index = ++index % colors.length
    return out
  })
}
