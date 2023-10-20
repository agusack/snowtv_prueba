// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var iframes = document.querySelectorAll("iframe");
  
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].addEventListener("load", function() {
        var iframe = this;
  
        // Verificar si el contenido dentro del iframe ha cargado completamente
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        var isContentLoaded = iframeDoc.readyState === "complete" && !iframeDoc.querySelector("img[src][loading]");
        
        if (isContentLoaded) {
          resizeIframe(iframe);
        }
      });
    }
  });
  

function resizeIframe(obj) {

    setTimeout(() => {

        obj.style.height=(obj.contentWindow.document.body.scrollHeight+20)+'px';

    }, 500)
}

function get_parameter(param) {

    var vars = {};

    window.location.href.replace( location.hash, '' ).replace(/[?&]+([^=&]+)=?([^&]*)?/gi,
        function( m, key, value ) {

            vars[key] = value !==  undefined  ? value :  '';
        }
    );

    if ( param ) {

        return vars[param] ? vars[param] :  null;
    }
    return vars;
}