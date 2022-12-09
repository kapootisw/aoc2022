import { Day } from './Day'

export const Day06 = () => {
  const calculatePart1 = (input) => {
    console.log(input)
    let startOfPacket = -1
    for (let i = 4; i < input.length; i++) {
      const lastFourChars = input.substring(i - 4, i)
      const hasMatchingChars = lastFourChars.split('').some((char, index) => lastFourChars.lastIndexOf(char) !== index)
      console.log(lastFourChars, hasMatchingChars)
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
    />
  )
}