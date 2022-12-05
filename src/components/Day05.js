import { Day } from './Day'

export const Day05 = () => {
  const calculatePart1 = (input) => {
    const lines = input.split('\n')

    const { stacks, instructions } = lines.reduce((acc, line) => {
      if (line === '') {
        acc.doneWithStacks = true
      } else if (acc.doneWithStacks) {
        acc.instructions.push(line.match(/[\d]{1,2}/g))
      } else {
        if (line.includes('[')) {
          const crates = line.match(/\[[A-Z]\]|[\s]{4}/g)
          crates.forEach((crate, index) => {
            if (crate.trim() !== '') {
              const stack = acc.stacks[index]
              if (stack === null || stack === undefined) {
                acc.stacks[index] = [crate.trim()]
              } else {
                stack.unshift(crate.trim())
              }
            }
          })
        }
      }
      return acc
    }, { stacks: [], instructions: [], doneWithStacks: false })
    console.log(stacks)
    console.log(instructions)

    const rearrangedStacks = instructions.reduce((acc, instruction) => {
      const moveCount = Number(instruction[0])
      const from = Number(instruction[1]) - 1
      const to = Number(instruction[2]) - 1
      console.log(moveCount, from, to)
      console.log(acc[from])
      console.log(acc[to])

      for(let i = 1; i <= moveCount; i++) {
        const topFrom = acc[from].pop()
        if (topFrom) {
          console.log(topFrom)
          console.log(acc[from])
          acc[to].push(topFrom)
          console.log(acc[to])
        }
      }

      return acc
    }, JSON.parse(JSON.stringify(stacks)))
    console.log(rearrangedStacks)

    return rearrangedStacks.reduce((acc, stack) => {
      if (stack.length === 0) {
        return acc
      }

      const top = stack.pop().substring(1, 2)
      console.log(top)
      return acc + top
    }, '')
  }

  return (
    <Day
      label={"Day 05"}
      calculatePart1={calculatePart1}
    />
  )
}