import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import logo from '../logo.svg'

export const Day = (props) => {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input, 350)
  const [output, setOutput] = useState('')
  const [calculating, setCalculating] = useState(false)
  const { label, calculate } = props

  const updateInput = ({ target: { value: newInput }}) => {
    setInput(newInput)
  }

  const onSubmit = () => {
    setCalculating(true)
    const result = calculate(debouncedInput)
    setOutput(result)
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
          <p>
            {output}
          </p>
        </>
      }
    </div>

      )
}