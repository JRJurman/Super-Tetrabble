import { registerHtml } from 'tram-one'
import './PieceTable.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="PieceTable">
    </div>
  `
}
