import TetrabbleBoard from './TetrabbleBoard'

describe('TetrabbleBoard', () => {
  describe('with default props', () => {
    const wrapper = TetrabbleBoard()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
