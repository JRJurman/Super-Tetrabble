import useGameData from './useGameData'

// mock and spy on tram-one hooks
jest.mock('tram-one', () => ({
  ...(jest.requireActual('tram-one')),
  useState: () => []
}));

describe('useGameData', () => {
})
