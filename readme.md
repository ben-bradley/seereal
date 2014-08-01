# Seereal

I like `async`, but I don't like putting dependencies in my code so I figured out how to use just the parts I wanted.

There are a lot of other projects that do the exact same thing and a whole lot more, but this one is mine.

And I think it's pretty.

### Example

```
var serial = require('ceereal');

serial([
  function(next) {
    // do stuff
    next(err, resultA);
  },
  function(next) {
    // do more stuff
    next(err, resultB);
  }
], functions(err, results) {
  // do something with the serialized results
  console.log(results); // => [ resultA, resultB ]
});
```

### Other Projects
- `async` https://www.npmjs.org/package/async
- `run-series` https://github.com/feross/run-series
- `series` https://www.npmjs.org/package/series
- `serial` https://www.npmjs.org/package/serial
