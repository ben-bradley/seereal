# Seereal

I like `async`, but I don't like putting dependencies in my code so I figured out how to use just the parts I wanted.

There are a lot of other projects that do the exact same thing and a whole lot more, but this one is mine.

And I think it's pretty.

### Example

```
var serial = require('./');

function a(next) {
  setTimeout(function () {
    console.log('A');
    next(null, 'A');
  }, 1000);
}

function b(next) {
  setTimeout(function () {
    console.log('B');
    next(null, 'B');
  }, 100);
}

function e(next) {
  setTimeout(function () {
    console.log('making an error');
    next(new Error('fake error'));
  }, 500);
}

serial([a, b], function (err, results) {
  console.log(results); // => [ 'A', 'B' ]
});

serial([b, a], function (err, results) {
  console.log(results); // => [ 'B', 'A' ]
});

serial([a, e, b], function (err, results) {
  console.log(results); // => [ 'A' ]
  console.log(err.message); // => 'fake error'
});

```

### Other Projects
- `async` https://www.npmjs.org/package/async
- `run-series` https://github.com/feross/run-series
- `series` https://www.npmjs.org/package/series
- `serial` https://www.npmjs.org/package/serial
