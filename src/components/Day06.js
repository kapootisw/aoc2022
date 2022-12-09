import { Day } from './Day'

export const Day06 = () => {
  const calculatePart1 = (input) => {
    let startOfPacket = -1
    for (let i = 4; i < input.length; i++) {
      const lastFourChars = input.substring(i - 4, i)
      const hasMatchingChars = lastFourChars.split('').some((char, index) => lastFourChars.lastIndexOf(char) !== index)
      if (!hasMatchingChars) {
        startOfPacket = i
        break
      }
    }
    return startOfPacket
  }

  const calculatePart2 = (input) => {
    let startOfPacket = -1
    for (let i = 14; i < input.length; i++) {
      const lastFourteenChars = input.substring(i - 14, i)
      const hasMatchingChars = lastFourteenChars.split('').some((char, index) => lastFourteenChars.lastIndexOf(char) !== index)
      if (!hasMatchingChars) {
        startOfPacket = i
        break
      }
    }
    return startOfPacket
  }

  return (
    <Day
      label={"Day 06"}
      calculatePart1={calculatePart1}
      calculatePart2={calculatePart2}
    />
  )
}