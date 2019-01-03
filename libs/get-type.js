/* eslint-disable */
const getType = source => {
  if (Array.isArray(source)) return "array"
  if (typeof source === "object") {
    if (!source) return "null"
    if (source.props) return "component"
    else return "object"
  }
  return typeof source
}



export default getType