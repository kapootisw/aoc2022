import { Day } from './Day'

export const Day03 = () => {
  const possibleItems = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  const calculatePart1 = (input) => {
    const lines = input.split('\n')
    console.log(input)
    console.log(lines.join(','))

    const result = lines.reduce((sum, line) => {
      const length = line.length
      const half = length / 2
      const comp1 = line.substring(0, half)
      const comp2 = line.substring(half, length)
      console.log(line, length, half)
      console.log(comp1, comp1.length, comp2, comp2.length)

      const commonItem = comp1.split("").find(item => comp2.includes(item))
      console.log(commonItem)
      let commonItemPriority = possibleItems.findIndex(item => item === commonItem) + 1
      console.log(commonItemPriority)

      return sum + commonItemPriority
    }, 0)
    return result
  }

  const calculatePart2 = (input) => {
    const lines = input.split('\n')
    console.log(input)
    console.log(lines.join(','))

    const result = lines.reduce((sum, line) => {
      const length = line.length
      const half = length / 2
      const comp1 = line.substring(0, half)
      const comp2 = line.substring(half, length)
      console.log(line, length, half)
      console.log(comp1, comp1.length, comp2, comp2.length)

      const commonItem = comp1.split("").find(item => comp2.includes(item))
      console.log(commonItem)
      let commonItemPriority = possibleItems.findIndex(item => item === commonItem) + 1
      console.log(commonItemPriority)

      return sum + commonItemPriority
    }, 0)
    return result
  }

  return (
    <>
      <Day
        label={"Day 03"}
        calculatePart1={calculatePart1}
        calculatePart2={calculatePart2}
      />
    </>
  )
}