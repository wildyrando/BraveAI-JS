# BraveAI-JS
BraveAI-JS is a unofficial library written in Javascript

# Usage
```javascript
const braveai_js = require('braveai-js');
const braveAI = braveai_js.init('your api keys');

(async () => {
  const question = 'Halo, how are you ?';
  const result = await braveAI.call(question);

  console.log(result);
})();
```