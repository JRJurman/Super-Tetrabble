import TetraLetter from './TetraLetter'

describe('TetraLetter', () => {
  describe('with default props', () => {
    const wrapper = TetraLetter()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
