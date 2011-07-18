define(["dojo"], function(dojo){
	setTimeout(function(){
		var helloDiv = dojo.create("div", {
			innerHTML: "Hello World"
		}, document.body);
	}, 500);
});