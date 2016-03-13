# promise-temporal-delay

[![NPM](https://nodei.co/npm/promise-temporal-delay.png?compact=true)](https://nodei.co/npm/promise-temporal-delay/)

A promise based delay that does NOT use `setTimeout` or `setInterval`

## Getting Started

Install in your project folder with:

```bash
npm install temporal --save
```

## Example

```javascript
var delay = require('promise-temporal-delay');

console.log('Do something now...')

delay(500).then(function() {

    console.log("500ms later...");

});
```

## License
See LICENSE file.
