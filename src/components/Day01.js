import { Day } from './Day'

export const Day01 = () => {

  function findMost (totals) {
    const most = Math.max(...totals)
    const mostIndex = totals.indexOf(most)
    return { most, mostIndex }
  }

  const calculate = (input) => {
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
    // console.log(totals.join(","))
    // console.log(most)
    // console.log(mostIndex)

    totals.splice(mostIndex, 1)
    const { most: secondMost, mostIndex: secondMostIndex } = findMost(totals)
    // console.log(totals.join(","))
    // console.log(secondMost)
    // console.log(secondMostIndex)

    totals.splice(secondMostIndex, 1)
    const { most: thirdMost, mostIndex: thirdMostIndex } = findMost(totals)
    // console.log(totals.join(","))
    // console.log(thirdMost)
    // console.log(thirdMostIndex)

    return most + secondMost + thirdMost
  }

  return (
    <Day
      label={"Day 01"}
      calculate={calculate}
    />
  )
}