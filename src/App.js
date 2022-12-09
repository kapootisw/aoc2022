import './App.css';
import { useState } from 'react'
import { DAYS } from './utils/constants'
import { getSelectedDay } from './utils/getSelectedDay'

function App() {
  const [selectedDay, setSelectedDay] = useState('Day07')

  const options = DAYS().map(day => ({ label: `Day ${day}`, value: `Day${day}`}))

  const onChangeDay = (e) => {
    setSelectedDay(e.target.value)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          This is my thing for trying the Advent of Code 2022
        </p>
        <select value={selectedDay} onChange={onChangeDay}>
          {
            options.map(({ label, value }, index) => <option key={index} value={value}>{label}</option>)
          }
        </select>
        {
          getSelectedDay(selectedDay)
        }
      </header>
    </div>
  );
}

export default App;
