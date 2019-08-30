import PieceTable from './PieceTable'

describe('PieceTable', () => {
  describe('with default props', () => {
    const wrapper = PieceTable()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
