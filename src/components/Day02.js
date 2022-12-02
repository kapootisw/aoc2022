import { Day } from './Day'

export const Day02 = () => {
  const playScores = {
    rock: 1,
    paper: 2,
    scissors: 3
  }
  const playTypes = {
    A: "rock",
    B: "paper",
    C: "scissors",
  }
  const opponentWins = {
    A: "C",
    B: "A",
    C: "B"
  }
  const opponentLoses = {
    A: "B",
    B: "C",
    C: "A"
  }
  const draws = {
    A: "A",
    B: "B",
    C: "C"
  }

  const playResult = (myOutcome, opponentPlay) => {
    if (myOutcome === "Z") {
      const myPlay = playTypes[opponentLoses[opponentPlay]]
      console.log(myPlay)
      return 6 + playScores[myPlay]
    } else if (myOutcome === "Y") {
      const myPlay = playTypes[draws[opponentPlay]]
      console.log(myPlay)
      return 3 + playScores[myPlay]
    } else {
      const myPlay = playTypes[opponentWins[opponentPlay]]
      console.log(myPlay)
      return playScores[myPlay]
    }
  }

  const calculate = (input) => {
    const lines = input.split("\n")
    const scores = lines.map(line => {
      const plays = line.split(" ")
      if (line === "") {
        return 0
      }
      const opponentPlay = plays[0]
      const myOutcome = plays[1]
      let result = playResult(myOutcome, opponentPlay)
      if (result === undefined) {
        console.log(line)
      }
      return result
    })
    console.log(scores)
    return scores.reduce((totalScore, score) => {
      return totalScore + score
    }, 0)
  }

  return (
    <Day
      label={"Day 02"}
      calculate={calculate}
    />
  )
}