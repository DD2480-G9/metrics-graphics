module('data_graphic');

QUnit.done( ( { total, failed, passed, runtime } ) => {
  console.log(__COVERAGE__['mg_min_max_numerical']);
  console.log( `Total: ${total}, Failed: ${failed}, Passed: ${passed}, Runtime: ${runtime}` );
});
