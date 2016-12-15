(function () {
    'use strict';
	/**
	 * @ngdoc filter
	 * @name fs.filters:fsString
	 * @param {integer} count The number of objects
	 * @param {string} plural The word used when there are zero or multiple objects
	 */
    angular.module('fs-angular-string',[])
     .filter('fsStringPlural', function(fsString) {
		return function(singular,count,plural) {
			return fsString.plural(count,singular,plural);
		};
	})

})();