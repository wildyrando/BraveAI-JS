# BraveAI-JS
BraveAI-JS is a unofficial library written in Javascript

# Usage
```bash
npm install braveai-js
```

# Code Examples
```javascript
const braveai_js = require('braveai-js');
const braveAI = braveai_js.init('your api keys');

(async () => {
  const question = 'Halo, how are you ?';
  const result = await braveAI.call(question);

  console.log(result);
})();
```

# License
This Project Licensed under the MIT License