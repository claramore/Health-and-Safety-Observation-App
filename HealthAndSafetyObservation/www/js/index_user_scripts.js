/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Login */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        /* your code goes here */ 
        
        window.location.href = "observationMain.html";
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
