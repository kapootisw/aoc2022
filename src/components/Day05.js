import { Day } from './Day'

export const Day05 = () => {
  function getStacksAndInstructions (lines) {
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
    return { stacks, instructions }
  }

  const calculatePart1 = (input) => {
    const lines = input.split('\n')

    const { stacks, instructions } = getStacksAndInstructions(lines)

    const rearrangedStacks = instructions.reduce((acc, instruction) => {
      const moveCount = Number(instruction[0])
      const from = Number(instruction[1]) - 1
      const to = Number(instruction[2]) - 1

      for(let i = 1; i <= moveCount; i++) {
        const topFrom = acc[from].pop()
        if (topFrom) {
          acc[to].push(topFrom)
        }
      }

      return acc
    }, JSON.parse(JSON.stringify(stacks)))

    return rearrangedStacks.reduce((acc, stack) => {
      if (stack.length === 0) {
        return acc
      }

      const top = stack.pop().substring(1, 2)
      return acc + top
    }, '')
  }

  const calculatePart2 = (input) => {
    const lines = input.split('\n')

    const { stacks, instructions } = getStacksAndInstructions(lines)

    const rearrangedStacks = instructions.reduce((acc, instruction) => {
      const moveCount = Number(instruction[0])
      const from = Number(instruction[1]) - 1
      const to = Number(instruction[2]) - 1

      const indexToMoveFrom = moveCount > acc[from].length? 0 : acc[from].length - moveCount
      const topFrom = acc[from].splice(indexToMoveFrom, acc[from].length)
      if (topFrom) {
        acc[to] = acc[to].concat(...topFrom)
      }

      return acc
    }, JSON.parse(JSON.stringify(stacks)))

    return rearrangedStacks.reduce((acc, stack) => {
      if (stack.length === 0) {
        return acc
      }

      const top = stack.pop().substring(1, 2)
      return acc + top
    }, '')
  }

  return (
    <Day
      label={"Day 05"}
      calculatePart1={calculatePart1}
      calculatePart2={calculatePart2}
    />
  )
}