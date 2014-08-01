/* Code, inspired by:
 * - https://github.com/feross/run-series/blob/master/index.js
 * - http://book.mixu.net/node/ch7.html
 */
module.exports = function (fns, callback) {
  var results = [];
  // callback for when a fn is next
  function next(err, result) {
    if (err)
      return callback(err, results);
    results.push(result);
    if (fns.length)
      run(fns.shift());
    else
      callback(null, results);
  }
  // call the next fn
  function run(fn) {
    if (fn)
      fn(next);
    else
      callback(null, results);
  }
  // oink
  run(fns.shift());
}
