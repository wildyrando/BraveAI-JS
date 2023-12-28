/*

    BraveAI-JS is a unofficial library written in Javascript

    Author: Wildy Sheverando [ hai@wildyrando.com ]
    Repo:   https://github.com/wildyrando/BraveAI-JS

    This Project Licensed Under the MIT License.

*/

const BraveAI = require('./braveai');

// exporting modules with init.
module.exports = {
    init: (apiKey) => new BraveAI(apiKey)
};
