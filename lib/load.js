/**
 * Created by i068959 on 15/11/23.
 */
require.config({
	baseUrl:'lib',
	paths: {
		jquery: 'jquery',
		jqueryprivate:'jquery-private'
	},
	//paths: {
	//	myjquery: 'jquery'
	//},
	//shim:{
	//	myjquery:{
	//		init:function(){
	//			return jQuery.noConflict(true);
	//		}
	//	}
	//}
	map: {
		'*': { 'jquery': 'jqueryprivate'},
		'jqueryprivate': { 'jquery': 'jquery'}
	}
});

require(['jqueryprivate'], function(a) {
	console.log(a.aa);
	//console.log(jQuery);
	//console.log(jquery);
});
require(['jquery'], function(a) {
	console.log(a.aa);
	//console.log(jQuery);
	//console.log(jquery);
});
