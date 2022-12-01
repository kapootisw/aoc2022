import { useState, useEffect } from 'react'

/**
 * Debounce the input value.
 *
 * @example
 * function Input ({ onChange }) {
 *    const [inputText, setInputText] = useState('')
 *    const debouncedInputText = useDebounce(inputText, 200)
 *
 *    function onInputChange (event) {
 *      setInputText(event.currentTarget.value)
 *    }
 *
 *    useEffect(() => {
 *      onChange(debouncedInputText)
 *    }, [debouncedInputText])
 *
 *    return <input type="text" onChange={onInputChange} value={inputText} />
 * }
 *
 * @see https://usehooks.com/useDebounce/
 */
export default function useDebounce (value, delayInMilliSeconds) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delayInMilliSeconds)

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delayInMilliSeconds] // Only re-call effect if value or delay changes
  )

  return debouncedValue
}
