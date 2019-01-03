/* eslint-disable */
import React from "react"
import textReplace from "./text-replace"

const cache = {}

class TextReplace extends React.Component {
  render() {
    const { source, pipe } = this.props

    const cached = cache[source]

    if (cached) return cached

    const caching = textReplace(source, pipe)

    cache[source] = caching

    return caching
  }
}

export default TextReplace
