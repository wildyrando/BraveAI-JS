// index.js
const BraveAI = require('./braveai');

module.exports = {
  apikey: (apiKey) => new BraveAI(apiKey)
};
