module('data_graphic');

QUnit.done( ( { total, failed, passed, runtime } ) => {
  console.log("mg_sort_through_data_type_and_set_x_min_max_accordingly: " + count(__COVERAGE__['mg_sort_through_data_type_and_set_x_min_max_accordingly']));

  console.log(__COVERAGE__['mg_sort_through_data_type_and_set_x_min_max_accordingly']);

  console.log("table_this_display: " + count(__COVERAGE__['table_this_display']));
  console.log(__COVERAGE__['table_this_display']);

  console.log("point_this_init: " + count(__COVERAGE__['point_this_init']));
  console.log(__COVERAGE__['point_this_init']);
  console.log( `Total: ${total}, Failed: ${failed}, Passed: ${passed}, Runtime: ${runtime}` );
});


function count(arr) {
  let true_arr = arr.filter(entry => entry === true);
  return true_arr.length + "/" + arr.length
}
