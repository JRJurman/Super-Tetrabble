import "babel-polyfill";
import { registerHtml, start } from "tram-one"
import ColorHeader from "./components/ColorHeader"
import TetrabbleBoard from "./components/TetrabbleBoard"
import "./styles.scss"

const html = registerHtml({
  'color-header': ColorHeader,
  'tetrabble-board': TetrabbleBoard
})

const home = () => {
  return html`
    <div>
      <color-header />
      <tetrabble-board />
    </div>
  `
}

start("#app", home)
