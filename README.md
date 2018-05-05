# gfs-example-loader

## Usage
```bash
$ npm install gfs-example-loader --save-dev
```

```javascript
{
    test: /\.(es6|js)$/,
    loaders: ['babel','gfs-example-loader' ]
}
```
```javascript
//js file
/*@title 描述*/
/*@description 第一个示例演示*/
/*@class ExampleDemo*/

//demo start
import React,{Component} from 'react'
class ExampleDemo extends Component{
    render(){
        return (
            <div>test demo</div>
        )
    }
}
//demo end

module.exports.demo =ExampleDemo
```