// https://qiita.com/soarflat/items/28bf799f7e0335b68186
//
import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

// どっちかでよさそう
require('jquery-ui-bundle');
//require('jquery-ui/ui/widgets/datepicker');

require('jquery-ui-bundle/jquery-ui.css');

var item1Price = 400;
var item2Price = 600;
var totalPrice = additionCalculator(item1Price, item2Price);
var tax = 1.08;
var priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncludeTax);

$(function() {

  var ele = $('#datepicker');
  ele.datepicker({
    dateFormat: 'yy/mm/dd',
    monthNames: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
    ],
    dayNames: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
  });
  ele.datepicker('setDate', '2020/1/20');

  $('#message').text(priceIncludeTax + ' : hello');


});


window.hello = function() {
  alert('hello');
};
