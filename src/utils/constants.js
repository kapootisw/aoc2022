export const DAYS = () => {
  const days = []
  for (let i = 1; i <= 25; i++) {
    days.push(`${i < 10 ? '0' : ''}${i}`)
  }
  return days
}