import TetraLetterPiece from './TetraLetterPiece'

describe('TetraLetterPiece', () => {
  describe('with default props', () => {
    const wrapper = TetraLetterPiece()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
