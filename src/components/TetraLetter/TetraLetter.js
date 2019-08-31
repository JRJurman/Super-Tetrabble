import { registerHtml } from 'tram-one'
import './TetraLetter.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <button class="TetraLetter">
      ${props.value}
    </button>
  `
}
