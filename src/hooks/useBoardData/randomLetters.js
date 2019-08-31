/**
 * leftRightShuffle
 * Function to lazily shuffle letters, either before or after the existing list
 *
 * This shuffle has a tendency to keep elements at the beginning in the center, and elements at the end towards the end.
 * It is for this reason that we call it several times instead of just once.
 * @param {*} finalShuffle existing list of letters
 * @param {*} letter new letter to be added to the beginning or end
 *
 * @returns existing shuffle with the new letter at the beginning or end of the list
 */
const leftRightShuffle = (finalShuffle, letter) => Math.random() > 0.5 ? [].concat(letter, finalShuffle) : [].concat(finalShuffle, letter)

/**
 * randomeLetters
 * Function to return an entire list of letters (lazily) shuffled
 *
 * @returns lazily shuffled list of letters
 */
export default () => [...Array(26)]
  .map((_, index) => String.fromCharCode(index+97))
  .reduce(leftRightShuffle)
  .reduce(leftRightShuffle)
  .reduce(leftRightShuffle)
  .reduce(leftRightShuffle)
