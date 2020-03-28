const tally = (array, item) =>
  array.reduce((totalCount, element) => {
    if (element === item) return totalCount + 1
    else return totalCount
  }, 0)

export default tally
