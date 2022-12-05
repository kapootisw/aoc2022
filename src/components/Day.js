import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import logo from '../logo.svg'

export const Day = (props) => {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 350)
  const [output1, setOutput1] = useState('')
  const [output2, setOutput2] = useState('')
  const [calculating, setCalculating] = useState(false)
  const { label, calculatePart1, calculatePart2 } = props

  const updateInput = ({ target: { value: newInput }}) => {
    setInput(newInput)
  }

  const onSubmit = () => {
    setCalculating(true)
    const result1 = calculatePart1(debouncedInput)
    setOutput1(result1)
    if (calculatePart2) {
      const result2 = calculatePart2(debouncedInput)
      setOutput2(result2)
    }
    setCalculating(false)
  }

  return (
    <div>
      <h2>{label}</h2>
      { calculating
        ?
        <img src={logo} className="App-logo" alt="logo" />
        :
        <>
          <textarea
            name={"input"}
            onChange={updateInput}
            style={{
              width: '100%',
              height: '300px'
            }}
          />
          <button
            type={"submit"}
            name={"submit"}
            onClick={onSubmit}
          >
            Submit
          </button>
          <div>
            {
              output1 !== '' &&
              <p>
                Result 1 = {output1}
              </p>
            }
            {
              output2 !== '' &&
              <p>
                Result 2 = {output2}
              </p>
            }
          </div>
        </>
      }
    </div>

      )
}