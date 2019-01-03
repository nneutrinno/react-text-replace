/* eslint-disable */
import getType from './get-type'
const shouldReplace = options => {

  const { source, toFindRegex } = options
  
  switch(getType(source)){
    case 'component': return shouldReplace({ ...options, source: source.props.children })

    case 'array': return source.some( item => shouldReplace({ ...options, source: item }) )

    case 'string': return toFindRegex.test(source)

    default: return false
  }
}

export default shouldReplace