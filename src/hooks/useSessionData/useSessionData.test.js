import useSessionData from './useSessionData'

// mock and spy on tram-one hooks
jest.mock('tram-one', () => ({
  ...(jest.requireActual('tram-one')),
  useState: () => []
}));

describe('useSessionData', () => {
})
