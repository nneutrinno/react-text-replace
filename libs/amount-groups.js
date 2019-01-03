/* eslint-disable */
const getAmountGroups = regex => {
  const toTest = new RegExp(regex.source + '?')
  
  const amount = toTest.exec('').length - 1
  
  return amount
}


export default getAmountGroups