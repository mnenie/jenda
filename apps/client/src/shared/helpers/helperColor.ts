export function formatLabelColor(hex: string, amount: number): string {
  let color = hex.replace('#', '')
  if (color.length === 3) {
    color = color.split('').map(c => c + c).join('')
  }
  const r = Math.max(0, Math.min(255, Number.parseInt(color.slice(0, 2), 16) - amount))
  const g = Math.max(0, Math.min(255, Number.parseInt(color.slice(2, 4), 16) - amount))
  const b = Math.max(0, Math.min(255, Number.parseInt(color.slice(4, 6), 16) - amount))

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}
