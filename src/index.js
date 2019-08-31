import "babel-polyfill";
import { registerHtml, start } from "tram-one"
import ColorHeader from "./components/ColorHeader"
import TetrabbleBoard from "./components/TetrabbleBoard"
import "./styles.scss"

const html = registerHtml({
  ColorHeader,
  TetrabbleBoard
})

const home = () => {
  return html`
    <div>
      <ColorHeader />
      <TetrabbleBoard />
    </div>
  `
}

start("#app", home)
