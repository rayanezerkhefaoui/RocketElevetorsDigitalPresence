(function ($) {
	$.fn.simpleMoneyFormat = function() {
		this.each(function(index, el) {		
			var elType = null; // input or other
			var value = null;
			var arr={};
			var deci="";
			// get value
			if($(el).is('input') || $(el).is('textarea')){
				value = $(el).val().replace(/,/g, '');
				elType = 'input';
			} else {
				value = $(el).text().replace(/,/g, '');
				elType = 'other';
				arr=value.split(".");
				if(arr.length>1)
				{
					value=arr[0];
					deci="."+arr[1];
				}
			}
			// if value changes
			$(el).on('paste keyup', function(){
				value = $(el).val().replace(/,/g, '');
				formatElement(el, elType, value,deci); // format element
			});
			formatElement(el, elType, value,deci); // format element
		});
		function formatElement(el, elType, value,deci){
			var result = '';
			var valueArray = value.split('');
			var resultArray = [];
			var counter = 0;
			var temp = '';
			for (var i = valueArray.length - 1; i >= 0; i--) {
				temp += valueArray[i];
				counter++
				if(counter == 3){
					resultArray.push(temp);
					counter = 0;
					temp = '';
				}
			};
			if(counter > 0){
				resultArray.push(temp);				
			}
			for (var i = resultArray.length - 1; i >= 0; i--) {
				var resTemp = resultArray[i].split('');
				for (var j = resTemp.length - 1; j >= 0; j--) {
					result += resTemp[j];
				};
				if(i > 0){
					result += ','
				}
			};
			if(elType == 'input'){
				$(el).val(result+deci);
			} else {
				$(el).empty().text(result+deci);
			}
		}
	};
}(jQuery));