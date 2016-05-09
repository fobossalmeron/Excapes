var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var ui = document.createElement('script');
ui.src = "https://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.js";
document.getElementsByTagName('head')[0].appendChild(ui);
// ... give time for script to load, then type.
jQuery.noConflict();
