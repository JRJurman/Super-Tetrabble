import { registerHtml } from 'tram-one'
import TetraLetter from '../TetraLetter'
import useBoardData from '../../hooks/useBoardData'
import './TetrabbleBoard.scss'

const html = registerHtml({
  TetraLetter
})

export default (props, children) => {
  const { board } = useBoardData()
  const tetraLetters = board.map(({letter}) => html`<TetraLetter value=${letter} />`)
  return html`
    <div class="TetrabbleBoard">
      ${tetraLetters}
    </div>
  `
}
