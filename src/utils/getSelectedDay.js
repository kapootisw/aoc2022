import { Day01 } from '../components/Day01'
import { Day02 } from '../components/Day02'
import { Day03 } from '../components/Day03'
import { Day04 } from '../components/Day04'

export const getSelectedDay = (selectedDay) => {
  switch (selectedDay) {
    case 'Day01':
      return <Day01/>
    case 'Day02':
      return <Day02/>
    case 'Day03':
      return <Day03/>
    case 'Day04':
      return <Day04/>
    default:
      return <div>No Such Day</div>
  }
}