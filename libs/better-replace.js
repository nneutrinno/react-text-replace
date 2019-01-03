/* eslint-disable */
import betterSplit from './better-split'
import getType from './get-type'


const betterReplace = ({ source, toFindRegex, call }) => {
  const sources = betterSplit(source, toFindRegex)

  return sources.map(item => {
    if(getType(item) === 'array') return call(...item)
    return item
  })
}


export default betterReplace