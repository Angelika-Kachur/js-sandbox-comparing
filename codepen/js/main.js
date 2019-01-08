var data = {
    title              : "",
    description        : "",
    html               : "<h1>Hi There</h1>",
    html_pre_processor : "",
    css                : "h1{color:red;}",
    css_pre_processor  : "",
    css_starter        : "",
    css_prefix         : "",
    js                 : "alert('sorry about the alert');",
    js_pre_processor   : "",
    js_modernizr       : "",
    js_library         : "",
    html_classes       : "",
    css_external       : "",
    js_external        : ""
  };
var dataString = JSON.stringify(data);
  
// Get Input and Append
var data_input = document.getElementById('data-input');
data_input.value = dataString;