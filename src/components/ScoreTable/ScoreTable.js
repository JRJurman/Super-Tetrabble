import { registerHtml } from 'tram-one'
import './ScoreTable.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="ScoreTable">
    </div>
  `
}
