(function () {
    'use strict';

    angular.module('fs-angular-string',[])
     .filter('fsStringPlural', function(fsString) {
		return function(singular,count,plural) {
			return fsString.plural(count,singular,plural);
		};
	})

})();