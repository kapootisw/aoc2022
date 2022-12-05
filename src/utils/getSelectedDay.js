import { Day01 } from '../components/Day01'
import { Day02 } from '../components/Day02'
import { Day03 } from '../components/Day03'

export const getSelectedDay = (selectedDay) => {
  switch (selectedDay) {
    case 'Day01':
      return <Day01/>
    case 'Day02':
      return <Day02/>
    case 'Day03':
      return <Day03/>
    default:
      return <div>No Such Day</div>
  }
}