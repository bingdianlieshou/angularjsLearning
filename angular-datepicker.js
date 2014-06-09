angular.module('$datePicker', []).directive('datePicker', function() {
	return {
        restrict: "A",
        require: "?ngModel",
		link: function(scope, element, attrs, ngModel) {
			element.bind('blur keyup change', function(){
                scope.$apply(function() {
                    ngModel.$setViewValue(element.val());
                });
			});
			element.bind('click', function(){
                if (element.attr("datePicker-inited") != 'true') {
        			element.datepicker({
                        format: "yyyy-mm-dd",
                        endDate: "today",
                        todayBtn: "linked",
                        language: "zh-CN",
                        multidate: false,
                        autoclose: true,
                        keyboardNavigation: false,
                        todayHighlight: true
        			});
        			element.attr("datePicker-inited", 'true');
        			element.datepicker('show');
                }
			});

			scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                if (newValue) {
                    element.val(newValue);
                }
            }, true);
		}
	};
});