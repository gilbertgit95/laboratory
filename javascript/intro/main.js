const utils = require('./utils');

(async () => {
    console.log('proceess has started')
    await utils.waitFor(2)
    console.log('finish waiting.')
})();