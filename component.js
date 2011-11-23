// Define the module with AMD with dependencies. Always try to use the smallest/most granular 
// dependencies possible
define(["dojo/_base/declare", "dojo/on", "dijit/_Widget"],  
		function(declare, on, Widget){ // dependency variables

	// modules have their own closure'd scope, we can create functions that are 
	// private to the module 
	function myPrivateFunction(){
		// Use private functions when you do not want the function accessible outside
		// the component. This is particularly valuable to utilize because it ensures that you can
		// alter your component's implementation, including how this function is used (or not used)
		// without breaking user code when they upgrade.
	}
	
	// return the component class we are creating, use anonymous declare (don't
	//	specify the class name)
	return declare([Widget /*any base classes*/], {
		content: 'content',
		postCreate: function(){
			// a normal public function, this one is overriding a function from the base class
			this.domNode.innerHTML = this.content;
			on(this.domNode, 'click', function(){
				// For event listeners, you should normally use an inlined anonymous function
				// to maximize the clarity of your code (those that review your don't need
				// to track down the event listener, it is immediately present in the event
				// registration call). However, if a single function will be used for separate
				// events, you can use a private function, or a bound method (bound method 
				// only if the event handler really exactly matches the functionality provided by
				// an existing method, or needs to be shared with other modules).
				
				// For best performance and size characteristics, use direct DOM manipulation
				// for simple tasks to avoid pulling in unnecessary dependencies. Use libraries
				// for more complex DOM manipulation
				// Note that we namespace DOM classes.
				this.domNode.className = 'template-clicked';
			});
		},
		_protectedFunction: function(){
			// We use an underscore to mark methods and properties that should not be used by users.
			// These may be used for methods that other modules in your package will 
			// be using. This also allows users to override the method.
			//	However, be aware that even with an underscore, users may utilize these
			// methods, and changing the signature in future versions could break user 
			// code, so use with caution as it may not achieve the internalization of
			// implementation effect desired.
			
			// For events originating from this component, we can use on's emit function.
			// Note that we namespace our events
			if(on.emit(this.domNode, "template-something", {
						bubbles: true,
						cancelable: true,
						foo: "bar"
					})){
				// You may emit events that can be cancelled. If they aren't cancelled, a 
				// default action can be performed.
				myPrivateFunction();
			}
		}
		
	});
});