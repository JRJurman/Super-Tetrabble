import boardWidth from './boardWidth'
import randomLetters from './randomLetters'

const randomLettersForMap = randomLetters()
  .map(letter => ({letter, player: 'board'}))

/**
 * maps
 * A set of functions to generate unique maps for the Tetrabble Board
 */
export default {
  river: () => Array(boardWidth*boardWidth)
    .fill('')
    .map((value, index) => {
      const half = (boardWidth*boardWidth)/2
      const halfToTheRow = Math.floor((half-1)/boardWidth)*boardWidth
      if (index < halfToTheRow) { return '' }
      if (index > halfToTheRow+(boardWidth*2) - 1) { return '' }
      return randomLettersForMap[index % 26]
    }),
}
