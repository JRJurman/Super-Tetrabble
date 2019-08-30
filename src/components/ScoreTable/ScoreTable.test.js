import ScoreTable from './ScoreTable'

describe('ScoreTable', () => {
  describe('with default props', () => {
    const wrapper = ScoreTable()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
