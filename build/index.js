const { debuglog } = require('util');

const LOG = debuglog('@demimonde/research')

/**
 * An overview of the current players in the market.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function research(config) {
  const {
    type,
  } = config
  LOG('@demimonde/research called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = research
//# sourceMappingURL=index.js.map