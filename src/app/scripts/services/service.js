(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name fs.services:fsString
	 * @description An service for string related methods
	 */
	 angular.module('fs-angular-string')
	.factory('fsString', function() {

		return {
			plural: plural
		};



		/**
		 * @ngdoc method
		 * @name plural
		 * @methodOf fs.services:fsString
		 * @param {integer} count The number of objects
		 * @param {string} singlar The word used when there is one object
		 * @param {string} plural The word used when there are zero or multiple objects
		 */
        function plural(count,singular,plural) {

            if(count==1) {
                return singular;
            }

            return plural || singular + 's';
        }


	});

})();
