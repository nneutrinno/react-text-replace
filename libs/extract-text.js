/* eslint-disable */
import getType from './get-type'


const extractText = source => {
  switch(getType(source)){
    case 'component': return extractText(source.props.children)
    case 'array': return [].concat(...source.map( item => extractText(item) )).join('')

    default: return source
  }
}



export default extractText