import usePlayerData from './usePlayerData'

// mock and spy on tram-one hooks
jest.mock('tram-one', () => ({
  ...(jest.requireActual('tram-one')),
  useState: () => []
}));

describe('usePlayerData', () => {
})
