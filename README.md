# React Text Replace

A package that makes replace jsx components content easier.

## Install

### [NPM](http://npmjs.org/)
- Use: `require('react-text-replace')`
- Install: `npm install --save react-text-source`

### [YARN](https://yarnpkg.com/)
- Use: `require('react-text-replace')`
- Install: `yarn add react-text-replace`

## Usage

### Basic Example

``` javascript
import React from "react"
import { textReplace } from "react-text-replace"
import uuidv1 from "uuid/v1"

const App = props =>
  textReplace({
    source: ">> Hello >> world >> !!",
    find: />>(.*)/,
    call(match, $1) {
      return <h1 key={uuidv1()}>{$1}</h1>
    }
  })
```
#### First Result

```html
<h1> Hello >> world >> !!</h1>
```

### Multiple Replaces Example

``` javascript
import React from "react"
import { textReplace } from "react-text-replace"
import uuidv1 from "uuid/v1"

const source = ">> Hello >> world >> !!"

const options = [
  {
    find: />>(.*)/,
    call(match, $1) {
      return (
        <span style={{ fontSize: "2em" }} key={uuidv1()}>
          {$1}
        </span>
      )
    }
  },
  {
    find: /!!/,
    call(match) {
      return <i key={uuidv1()}>{match}</i>
    }
  }
]

var App = props =>
  textReplace(source, options) || textReplace(source, ...options)
```

#### The Result Will Be

``` html
<span style="font-size: 2em">
  Hello >> world >> <i>!!</i>
</span>
```


### Recursive Example With Caching

``` javascript
import React from "react"
import { TextReplace } from "react-text-replace"
import uuidv1 from "uuid/v1"

// Creates a cache that lasts until close the page

const App = props => (
  <TextReplace
    source={">> Hello >> world >> !!"}
    pipe={[
      {
        find: />>(.*)/,
        call(match, $1) {
          return (
            <span style={{ fontSize: "2em" }} key={uuidv1()}>
              {$1}
            </span>
          )
        },
        isRecursive: true
      },
      {
        find: /!!/,
        call(match) {
          return <i key={uuidv1()}>{match}</i>
        }
      }
    ]}
  />
)
```

#### Will Result In

``` html
<span style="font-size: 2em"> Hello 
  <span style="font-size: 2em"> world 
    <span style="font-size: 2em">
      <i>!!</i>
    </span>
  </span>
</span>
```

## License

Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)

