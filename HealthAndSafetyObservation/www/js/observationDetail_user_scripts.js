/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_25 */
    $(document).on("click", ".uib_w_25", function(evt)
    {
        /* your code goes here */ 
        
        window.location.href = "companyLookup.html";
         return false;
    });
    
        /* button  .uib_w_24 */
    $(document).on("click", ".uib_w_24", function(evt)
    {
        /* your code goes here */ 
        
        window.location.href = "establishmentLookup.html";
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
        /* your code goes here */ 
        
        window.location.href = "personLookup.html";
        
         return false;
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
