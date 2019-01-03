/* eslint-disable */
import React from 'react'
import getType from './libs/get-type'
import betterReplace from './libs/better-replace'
import shouldReplace from './libs/should-replace'
import uuidv1 from 'uuid/v1'

const clone = source => children =>
  React.cloneElement(
    source,
    {},
    children
  )


let singleTextReplace = options => {
  let { source, find, call, toFindRegex, isRecursive = false, shouldInsertKey = true } = options
  
  options.toFindRegex =
    toFindRegex || new RegExp("(" + (find.source || find) + ")", find.flags)

  if (!shouldReplace(options)) return source

  switch (getType(source)) {
    case "component":
      return clone(source)(
        singleTextReplace({ ...options, source: source.props.children })
      )

    case "array":
      return [].concat(
        ...source.map(item => singleTextReplace({ ...options, source: item }))
      )

    case "string": {
      const result = betterReplace(options)

      if (isRecursive) return singleTextReplace({ ...options, source: result })

      return result
    }

    default:
      return source
  }
}


const textReplace = (...args) => {
  const [arg, secondArg] = args

  switch(args.length){
    case 0: return 'Insert your options!'
    case 1: return singleTextReplace(arg)
    
    case 2:{
      const pipe = secondArg

      return pipe.reduce(
        (source, options) => singleTextReplace({ ...options, source })
      , arg)
    }

    default: return textReplace(arg, args.slice(1))
  }
}


export default textReplace