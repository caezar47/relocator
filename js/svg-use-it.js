var parser=document.createElement("a");function sortItems(e,t){var n=t.getAttribute("xlink:href");if("#"===n[0])return e;parser.href=n;var r=parser.hash,o=parser.href.split(r)[0];e[o]||(e[o]={nodes:[],fragments:[]});var i=e[o];return i.nodes.push({element:t,fragment:r}),-1===i.fragments.indexOf(r)&&i.fragments.push(r),e}function getSymbols(e,t){return Array.prototype.slice.call(e.querySelectorAll(t.join(","))).reduce(function(e,t){return e[["#",t.id].join("")]=t,e},{})}function embed(e,t){var n=e.parentNode;if(n&&t){n.getAttribute("viewBox")||n.setAttribute("viewBox",t.getAttribute("viewBox"));for(var r=document.createDocumentFragment(),o=t.cloneNode(!0);o.childNodes.length;)r.appendChild(o.firstChild);n.replaceChild(r,e)}}function fileLoaded(e,t){var n=e.response;if(4===e.readyState&&n&&Boolean(n.documentElement)){var r=getSymbols(n.documentElement,t.fragments);t.nodes.forEach(function(e){embed(e.element,r[e.fragment])})}}function fetchFile(e,t){var n=new XMLHttpRequest;n.addEventListener("load",t),n.addEventListener("error",console.error),n.open("GET",e),n.responseType="document",n.send()}function init(e,t,n){var r=t.map(function(e){return[":not(",e,")"].join("")}).join(""),o=r?[e,">",r,n].join(" "):[e,n].join(" "),i=document.querySelector(e).querySelectorAll(o),a=Array.prototype.slice.call(i).reduce(sortItems,{});Object.keys(a).forEach(function(e){var t=a[e];fetchFile(e,function(){fileLoaded(this,t)})})}function notSupportsExternalFragments(){return Boolean(document.documentMode)}function svgUseIt(e,t){notSupportsExternalFragments()&&init(e=e||"body",t=t||[],"use")}