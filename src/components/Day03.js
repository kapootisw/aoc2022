import { Day } from './Day'

export const Day03 = () => {
  const possibleItems = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  const calculatePart1 = (input) => {
    const lines = input.split('\n')

    return lines.reduce((sum, line) => {
      const length = line.length
      const half = length / 2
      const comp1 = line.substring(0, half)
      const comp2 = line.substring(half, length)

      const commonItem = comp1.split('').find(item => comp2.includes(item))
      let commonItemPriority = possibleItems.findIndex(item => item === commonItem) + 1

      return sum + commonItemPriority
    }, 0)
  }

  const calculatePart2 = (input) => {
    const lines = input.split('\n')

    let result = 0
    for (let i = 0; i < lines.length; i = i + 3) {
      const elf1 = lines[i]
      const elf2 = lines[i + 1]
      const elf3 = lines[i + 2]

      const badge = elf1.split('').find(item => elf2.includes(item) && elf3.includes(item))
      const badgePriority = possibleItems.findIndex(item => item === badge) + 1
      result += badgePriority
    }
    return result
  }

  return (
    <>
      <Day
        label={'Day 03'}
        calculatePart1={calculatePart1}
        calculatePart2={calculatePart2}
      />
    </>
  )
}