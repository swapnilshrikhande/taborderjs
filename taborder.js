(function( $ ) {
 
    $.fn.taborder = function(options) {
    
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            attribute 			: "taborder",
            nextIndexBuffer : 50
        }, options );
    		
        var selector =  '['+settings.attribute+']';
        
        var getNextElement = function(index){
						
            var nextElement;
            var bufferCount = settings.nextIndexBuffer;
						do{
            	nextElement = $(getSelector(index));
              ++index;
              --bufferCount;
              
            } while(nextElement.length == 0 && bufferCount > 0 )

						 return nextElement
        };
        
        var getSelector = function(index){
        		return '['+settings.attribute+'="'+index+'"]:first';
        }
    	
      	$(this).on('keydown', selector, function(e) { 
              var keyCode = e.keyCode || e.which; 
              var sourceElem = e.target || this;

              if (keyCode == 9) { 
                	var tabOrderIndexCur = $(sourceElem).attr(settings.attribute);
                  tabOrderIndexCur     = parseInt(tabOrderIndexCur,10);
                  var tabOrderIndexNext =  tabOrderIndexCur + 1;
                  var nextElem          = getNextElement(tabOrderIndexNext);
                  
                  if( nextElem && nextElem.length > 0 ){
                  		nextElem.focus();
                  		e.preventDefault();
                  }
              } 
        });
    		
        return this;
 
    };
 
}( jQuery ));



