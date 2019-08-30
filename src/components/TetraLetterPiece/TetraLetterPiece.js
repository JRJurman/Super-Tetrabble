import { registerHtml } from 'tram-one'
import './TetraLetterPiece.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="TetraLetterPiece">
    </div>
  `
}
