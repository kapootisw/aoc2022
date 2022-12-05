import { Day } from './Day'

export const Day04 = () => {
  const calculatePart1 = (input) => {
    const lines = input.split('\n')
    console.log(lines)
    const fullyContains = lines.filter(line => {
      if (line === '') {
        return false
      }

      const assignments = line.split(',')
      const elf1 = assignments[0].split('-')
      const elf2 = assignments[1].split('-')

      const elf1Start = Number(elf1[0])
      const elf1End = Number(elf1[1])
      const elf2Start = Number(elf2[0])
      const elf2End = Number(elf2[1])

      const elf1StartIncludesElf2Start = elf1Start <= elf2Start
      const elf2StartIncludesElf1Start = elf2Start <= elf1Start

      const elf1EndIncludesElf2End = elf1End >= elf2End
      const elf2EndIncludesElf1End = elf2End >= elf1End

      const elf1FullyContainsElf2 = elf1StartIncludesElf2Start && elf1EndIncludesElf2End
      const elf2FullyContainsElf1 = elf2StartIncludesElf1Start && elf2EndIncludesElf1End

      return elf1FullyContainsElf2 || elf2FullyContainsElf1
    })
    console.log(fullyContains)

    return fullyContains.length
  }

  return (
    <Day
      label={"Day 04"}
      calculatePart1={calculatePart1}
    />
  )
}