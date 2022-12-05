import { Day } from './Day'

export const Day01 = () => {

  function findMost (totals) {
    const most = Math.max(...totals)
    const mostIndex = totals.indexOf(most)
    return { most, mostIndex }
  }

  const calculatePart1 = (input) => {
    const lines = input.split("\n")
    let currentIndex = 0
    const totals = lines.reduce((acc, curr, index) => {
      if (curr === '' && index < lines.length - 1 ) {
        currentIndex += 1
        return acc.concat([0])
      } else {
        acc[currentIndex] = acc[currentIndex] + Number(curr)
        return acc
      }
    }, [0])

    const { most, mostIndex } = findMost(totals)

    totals.splice(mostIndex, 1)
    const { most: secondMost, mostIndex: secondMostIndex } = findMost(totals)

    totals.splice(secondMostIndex, 1)
    const { most: thirdMost } = findMost(totals)

    return most + secondMost + thirdMost
  }

  return (
    <Day
      label={"Day 01"}
      calculatePart1={calculatePart1}
    />
  )
}