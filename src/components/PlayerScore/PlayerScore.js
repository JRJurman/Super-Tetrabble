import { registerHtml } from 'tram-one'
import './PlayerScore.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="PlayerScore">
    </div>
  `
}
