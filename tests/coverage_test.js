module('data_graphic');

QUnit.done( ( { total, failed, passed, runtime } ) => {
  console.log('mg_min_max_numerical');
  console.log(__COVERAGE__['mg_min_max_numerical']);
  console.log('mg_add_legend_element');
  console.log(__COVERAGE__['mg_add_legend_element']);
  console.log('line_this_rollOverOn');
  console.log(__COVERAGE__['line_this_rollOverOn']);
  console.log('button_this_display');
  console.log(__COVERAGE__['button_this_display']);
  console.log('chart_title');
  console.log(__COVERAGE__['chart_title']);
  console.log( `Total: ${total}, Failed: ${failed}, Passed: ${passed}, Runtime: ${runtime}` );
});


