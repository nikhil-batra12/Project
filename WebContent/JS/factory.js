var app=angular.module('MyFactory',[]);

app.factory('templateCacheFactory', function ( DSCacheFactory){
	DSCacheFactory('templateCache', {
	        maxAge: 3600000, // Items added to this cache expire after 1 minute.
	        cacheFlushInterval: 3600000, // This cache will clear itself every hour.
	        deleteOnExpire: 'aggressive', // Items will be deleted from this cache right when they expire.
	        storageMode : 'localStorage'
	       
	        
	    });

});

app.factory('templateFactory', ['DSCacheFactory', '$http','templateCacheFactory', function (DSCacheFactory, $http, templateCacheService) {
	
	var hotelTemplateCache = DSCacheFactory.get('templateCache');
	var generateTemplateKey = function(templateName) {
    	if(typeof(Storage)!== "undefined") {
	        return templateName;
    	} else {
    		return "";
    	}
    	
    };
	
	var factory = {};
	
    factory.getTemplate = function(templateName) {
	var templateKey = generateTemplateKey(templateName);
	var template = hotelTemplateCache.get(templateKey);
    if(template === undefined) {
    	template = $http({
    			url:'Partials/'+ templateName,
                method: 'GET',
                dataType: "html",
				cache: false
				
            })
            .then(function(response) { 
            	hotelTemplateCache.put(templateKey, response.data);
            	return response.data; 
            });
    }
    return template;
}; 
/*factory.getDirectiveTemplate = function(templateName, module, element, $compile) {
	var templateKey = generateTemplateKey(templateName);
	var template = yahooTemplateCache.get(templateKey);
	var templateLoader;
    if(template === undefined) {
    	templateLoader = $http({
    			url: templateName,
                method: 'GET',
                dataType: "html",
				cache: false,
                params: {
                	path: "/stu-rsp/angular-templates/" + module + "/" + templateName + ".jsp",
                    module: module
                }
            })
            .then(function(response) { 
            	yahooTemplateCache.put(templateKey, response.data);
            	element.html(response.data);
            });
    }
    
    return function (scope, element) {
    	if(template == undefined) {
    		templateLoader.then(function () {
	          //element.html($compile(element.html())(scope));
	          $compile(element.contents())(scope);
	        });
    	} else {
    		//element.html($compile(template)(scope));
    		element.html(template);
    		$compile(element.contents())(scope);
    	}
    };
	
};*/
return factory;
}]);