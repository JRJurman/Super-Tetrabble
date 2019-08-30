import { registerHtml } from 'tram-one'
import TetraLetter from '../TetraLetter'
import useBoardData from '../../hooks/useBoardData'
import './TetrabbleBoard.scss'

const html = registerHtml({
  'tetra-letter': TetraLetter
})

export default (props, children) => {
  const { board } = useBoardData()
  const tetraLetters = board.map(() => html`<tetra-letter>i</tetra-letter>`)
  return html`
    <div class="TetrabbleBoard">
      ${tetraLetters}
    </div>
  `
}
