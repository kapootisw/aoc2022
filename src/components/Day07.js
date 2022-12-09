import { Day } from './Day'

export const Day07 = () => {
  const getDirectorySumsMax100000 = (directory, sums) => {
    if (directory.sum <= 100000) {
      sums.push(directory.sum)
    }

    const directoryContentKeys = Object.keys(directory)
    directoryContentKeys.forEach(key => {
      const currContent = directory[key]
      if (currContent instanceof Object) {
        getDirectorySumsMax100000(currContent, sums)
      }
    })
  }

  const getDirectorySums = (directory, sums) => {
    const directoryContentKeys = Object.keys(directory)
    directoryContentKeys.forEach(key => {
      const currContent = directory[key]
      if (currContent instanceof Object) {
        getDirectorySums(currContent, sums)
      }
    })
    sums.push(directory.sum)
  }

  const getDirectoryStructure = (lines) => {
    const { directory, currentDirectoryPath } = lines.reduce((acc, line) => {
      const content = line.split(' ')
      const start = content[0]
      const second = content[1]
      if (start === '$') {
        if (second === 'cd') {
          const newDir = content[2]
          if (newDir === '..') {
            acc.currentDirectoryPath.pop()
            const oldDirectorySum = acc.currentDirectory.sum
            let newCurrentDir = acc.directory
            acc.currentDirectoryPath.forEach(dir => {
              newCurrentDir = newCurrentDir[dir]
            })
            newCurrentDir.sum = (newCurrentDir.sum ?? 0) + oldDirectorySum
            acc.currentDirectory = newCurrentDir
          } else {
            if (newDir === '/') {
              acc.directory[newDir] = {}
              acc.currentDirectory = acc.directory[newDir]
            } else {
              acc.currentDirectory[newDir] = {}
              acc.currentDirectory = acc.currentDirectory[newDir]
            }
            acc.currentDirectoryPath.push(newDir)
            acc.currentDirectory.sum = 0
          }
        }
      } else if (+start) {
        acc.currentDirectory[second] = Number(start)
        acc.currentDirectory.sum = acc.currentDirectory.sum + Number(start)
      }
      return acc
    }, { directory: {}, currentDirectoryPath: [], currentDirectory: null })

    let totalSum = 0
    let newCurrentDir = directory
    currentDirectoryPath.forEach(dir => {
      totalSum = totalSum + newCurrentDir[dir].sum
      newCurrentDir = newCurrentDir[dir]
    })

    directory['/'].sum = totalSum

    return { directory }
  }

  const calculatePart1 = (input) => {
    const lines = input.split("\n")
    const { directory } = getDirectoryStructure(lines)

    const mainDirectory = directory['/']
    const sums = []
    getDirectorySumsMax100000(mainDirectory, sums)

    return sums.reduce((acc, sum) => {
      return acc + sum
    }, 0)
  }

  const calculatePart2 = (input) => {
    const lines = input.split('\n')
    const { directory } = getDirectoryStructure(lines)

    const mainDirectory = directory['/']
    const sums = []
    getDirectorySums(mainDirectory, sums)
    const totalUsedSpace = mainDirectory.sum
    const totalFreeSpace = 70000000 - totalUsedSpace
    const spaceNeededForUpdate = 30000000 - totalFreeSpace

    const possibleDeletionSums = sums.filter(sum => sum > spaceNeededForUpdate)

    return Math.min(...possibleDeletionSums)
  }

  return (
    <Day
      label={'Day 07'}
      calculatePart1={calculatePart1}
      calculatePart2={calculatePart2}
    />
  )
}