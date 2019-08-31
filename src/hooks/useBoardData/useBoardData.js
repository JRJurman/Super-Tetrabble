import { useState } from 'tram-one'
import buildBoard from './buildBoard'

export default () => {
  const [board, updateBoard] = useState(buildBoard('river'))
  return { board }
}
