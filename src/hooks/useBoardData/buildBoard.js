import boardWidth from './boardWidth'
import maps from './maps'

export default (map) => {
  if (map) return maps[map]()
  return [...Array(boardWidth*boardWidth)]
}
