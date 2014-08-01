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
