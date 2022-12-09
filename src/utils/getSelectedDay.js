import { Day01 } from '../components/Day01'
import { Day02 } from '../components/Day02'
import { Day03 } from '../components/Day03'
import { Day04 } from '../components/Day04'
import { Day05 } from '../components/Day05'
import { Day06 } from '../components/Day06'
import { Day07 } from '../components/Day07'
import { Day08 } from '../components/Day08'
import { Day09 } from '../components/Day09'
import { Day10 } from '../components/Day10'
import { Day11 } from '../components/Day11'
import { Day12 } from '../components/Day12'
import { Day13 } from '../components/Day13'
import { Day14 } from '../components/Day14'
import { Day15 } from '../components/Day15'
import { Day16 } from '../components/Day16'
import { Day17 } from '../components/Day17'
import { Day18 } from '../components/Day18'
import { Day19 } from '../components/Day19'
import { Day20 } from '../components/Day20'
import { Day21 } from '../components/Day21'
import { Day22 } from '../components/Day22'
import { Day23 } from '../components/Day23'
import { Day24 } from '../components/Day24'
import { Day25 } from '../components/Day25'

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
    case 'Day05':
      return <Day05/>
    case 'Day06':
      return <Day06/>
    case 'Day07':
      return <Day07/>
    case 'Day08':
      return <Day08/>
    case 'Day09':
      return <Day09/>
    case 'Day10':
      return <Day10/>
    case 'Day11':
      return <Day11/>
    case 'Day12':
      return <Day12/>
    case 'Day13':
      return <Day13/>
    case 'Day14':
      return <Day14/>
    case 'Day15':
      return <Day15/>
    case 'Day16':
      return <Day16/>
    case 'Day17':
      return <Day17/>
    case 'Day18':
      return <Day18/>
    case 'Day19':
      return <Day19/>
    case 'Day20':
      return <Day20/>
    case 'Day21':
      return <Day21/>
    case 'Day22':
      return <Day22/>
    case 'Day23':
      return <Day23/>
    case 'Day24':
      return <Day24/>
    case 'Day25':
      return <Day25/>
    default:
      return <div>No Such Day</div>
  }
}