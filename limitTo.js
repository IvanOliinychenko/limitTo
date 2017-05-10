//usage <input type="number" name="age" limit-to="2" prevent-e="true" prevent-plus="true" prevent-minus="true"/>

angular.module('app').directive('limitTo', function () {
    return {
        restrict: "A",
        scope: {
            preventE: '=preventE',
            preventPlus: '=preventPlus',
            preventMinus: '=preventMinus'
        },
        link: function (scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            var restrictions = [];
            if (attrs.preventE) restrictions.push('e');
            if (attrs.preventPlus) restrictions.push('+');
            if (attrs.preventMinus) restrictions.push('-');

            angular.element(elem).on("keypress", function (e) {
                for (var i = 0; i < restrictions.length; i++) if (String.fromCharCode(event.which) == restrictions[i]) e.preventDefault();
                if (elem[0].value.length >= limit && /^[0-9]*$/.test(String.fromCharCode(event.which))) e.preventDefault();
            });
            angular.element(elem).on("paste", function (e) {
                e.preventDefault();
                var text = e.originalEvent.clipboardData.getData('Text');
                for (var i = 0; i < restrictions.length; i++) text = text.replace(restrictions[i], "");
                if (text.length >= limit) elem[0].value = text.slice(0, limit);
            });
        }
    };
});