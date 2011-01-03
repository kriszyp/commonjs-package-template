define(["dojo"], function(dojo){
	dojo.ready(function(){
		var helloDiv = dojo.create("div", {
			innerHTML: "Hello World"
		}, document.body);
		dojo.fadeIn(helloDiv);
	});
});