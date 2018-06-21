var url = window.location.pathname;
var res = url.replace(/-/g," ").substring(1);
document.getElementById('titlePage').innerHTML = res;

window.addEventListener("DOMContentLoaded", function(){
    var e = document.querySelector('.item-calc [data-crm-widget="simplePriceCalc"]');
    e.addEventListener('ready',function () {
        $('#calculator-type_of_work > option').each(function () {
            var url = window.location.pathname;
            var totalWord = url.replace(/-/g," ").substring(1);
            var firstWord = totalWord.replace(/ .*/,'');
            var test2 = $(this).text().toLowerCase();
            if(test2 === firstWord){
                $(this).prop('selected','selected');
                return false;
            }
        });
        $('#calculator-number_page').val(1);
        $('.field-btn button').text('Make your order');
    })
});
