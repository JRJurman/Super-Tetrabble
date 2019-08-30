import PlayerScore from './PlayerScore'

describe('PlayerScore', () => {
  describe('with default props', () => {
    const wrapper = PlayerScore()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
