module('data_graphic');

QUnit.done( ( { total, failed, passed, runtime } ) => {
  console.log("mg_sort_through_data_type_and_set_x_min_max_accordingly: " + count(__COVERAGE__['mg_sort_through_data_type_and_set_x_min_max_accordingly']));

  console.log(__COVERAGE__['mg_sort_through_data_type_and_set_x_min_max_accordingly']);

  console.log("table_this_display: " + count(__COVERAGE__['table_this_display']));
  console.log(__COVERAGE__['table_this_display']);

  console.log("point_this_init: " + count(__COVERAGE__['point_this_init']));
  console.log(__COVERAGE__['point_this_init']);

  console.log('mg_min_max_numerical: ' + count(__COVERAGE__['mg_min_max_numerical']));
  console.log(__COVERAGE__['mg_min_max_numerical']);

  console.log('mg_add_legend_element: ' + count(__COVERAGE__['mg_add_legend_element']));
  console.log(__COVERAGE__['mg_add_legend_element']);

  console.log('line_this_rollOverOn: ' + count(__COVERAGE__['line_this_rollOverOn']));
  console.log(__COVERAGE__['line_this_rollOverOn']);

  console.log('button_this_display: ' + count(__COVERAGE__['button_this_display']) );
  console.log(__COVERAGE__['button_this_display']);

  console.log('chart_title: ' + count(__COVERAGE__['chart_title']));
  console.log(__COVERAGE__['chart_title']);
});

function count(arr) {
  let true_arr = arr.filter(entry => entry === true);
  return true_arr.length + "/" + arr.length
}
