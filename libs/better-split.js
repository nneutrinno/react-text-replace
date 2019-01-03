/* eslint-disable */
import getAmountGroups from './amount-groups'

const betterSplit = (source, toFindRegex) => {

  const amountGroups = getAmountGroups(toFindRegex)
  const splittedSource = source.split(toFindRegex)
  
  return splittedSource.reduce((acc, item, index) => {
    const location = index % (amountGroups + 1)
    const isGroup = (location > 1) && (location <= amountGroups)
    const isMatch = location === 1

    if(isMatch) return [...acc, [item] ]
    if(isGroup) return [...acc.slice(0,-1), [...acc.slice(-1)[0], item] ]
    return [...acc, item]
  }, [])
}
export default betterSplit