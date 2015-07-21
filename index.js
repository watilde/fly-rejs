const rejs = require('rejs');
module.exports = function () {
  this.filter("transformerName", (source, options) => {
    const resolver = new rejs.Resolver(options || {});
    try {
      return source
     } catch (e) { throw e }
  })
}
