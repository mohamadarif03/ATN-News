/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
jQuery.noConflict();
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Sharect=t():e.Sharect=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(){return!!window.getSelection().toString()}function o(e){var t=(window.getSelection().baseNode||window.getSelection().anchorNode).parentNode;return e.some(function(e){return function(e,t){if(Element.prototype.closest)return e.closest(t);Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector);var r=e;do{if(r.matches(t))return r;r=r.parentNode}while(null!==r&&r.nodeType===Node.ELEMENT_NODE);return null}(t,e)})}function i(e){var t=e.iconSize,r=e.buttonMargin,n=e.arrowSize,o=e.icons,i=window.getSelection().getRangeAt(0).getBoundingClientRect(),c=t+r,u=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop;return{top:i.top+u-c-n,left:i.left+(i.width-c*o.length)/2}}r.r(t);var c=function(e){return""},u=function(e,t){return"position:absolute;border-radius:3px;top:"+e+"px;left:"+t+"px;"},l=function(e){var t=e.arrowSize;return"position:absolute;border-left:"+t+"px solid transparent;border-right:"+t+"px solid transparent;bottom:-"+(t-1)+"px;width:0;height:0;"};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=i(e),r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{top:t.top,left:t.left});document.body.appendChild(function(e){var t=e.top,r=e.left,n=e.iconSize,o=e.buttonMargin,i=e.backgroundColor,a=e.icons,s=e.arrowSize,f=document.createElement("div"),p=n+o;f.className="highlight-shares",f.style.cssText=c(i),f.style.cssText+=u(t,r),f.appendChild(a.icons);var b=function(e){var t=document.createElement("div");return t.style.cssText=l(e),t}({arrowSize:s,backgroundColor:i,buttonSize:p,icons:a});return f.appendChild(b),f}(r))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m,y,h,w,g,O,v="transition:all .25s;";function E(){this.style.transform="scale(1.2)"}function j(){this.style.transform="scale(1)"}function S(e,t,r){return function(e,t){var r=document.createElement("div");return r.style.cssText=v,r.innerHTML=e,r.onmousedown=t,r.onmouseover=E,r.onmouseout=j,r}(e,function(){var e=function(e,t){return e.replace(/PAGE_URL/,window.location.href).replace(/TEXT_SELECTION/,window.getSelection().toString()).replace(/USERNAME/,t)}(t,r);window.open(e,"Share","width=550, height=280")})}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){T(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=(m={facebook:{isActive:!0,url:"https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION",icon:'<i class="rbi rbi-facebook"></i>'},twitter:{isActive:!0,username:"",url:"https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL",icon:'<i class="rbi rbi-twitter"></i>'}},y={},h=["body"],w=[],g="#ffffff",O="#333333",5,14,24,{config:function(e){return void 0!==e.twitter&&(m.twitter.isActive=e.twitter),void 0!==e.facebook&&(m.facebook.isActive=e.facebook),e.twitterUsername&&(m.twitter.username=e.twitterUsername),e.backgroundColor&&(g=e.backgroundColor),e.iconColor&&(O=e.iconColor),e.selectableElements&&(h=e.selectableElements),this},appendCustomShareButtons:function(e){return w=e,this},init:function(){var e={backgroundColor:g,iconColor:O,arrowSize:5,buttonMargin:14,iconSize:24,selectableElements:h,networks:m,customShareButtons:w};return function(e){e.iconColor,document.createElement("style")}(x({},e)),y=function(e){var t=e.networks,r=e.customShareButtons,n=document.createElement("div"),o=0;for(var i in t)if(t[i]&&t[i].isActive){var c=t[i],u=c.icon,l=c.url,a=c.username;n.appendChild(S(u,l,a)),o++}return r.length>0&&r.forEach(function(e){n.appendChild(S(e.icon,e.url)),o++}),{icons:n,length:o}}(x({},e)),function(e){window.addEventListener("mouseup",function(){return function(e){setTimeout(function(){if(document.querySelector(".highlight-shares")){if(n()&&o(e.selectableElements))return void function(e){var t=i(e),r=t.top,n=t.left,o=document.querySelector(".highlight-shares");o.style.top="".concat(r,"px"),o.style.left="".concat(n,"px")}(b({},e));document.body.removeChild(document.querySelector(".highlight-shares"))}n()&&o(e.selectableElements)&&f(b({},e))},10)}(e)},!1)}(x({},e,{icons:y})),this}})}]).default});
function setDarkModeCookie(id,value){if(foxizCoreParams.darkCookieMode!==undefined){var date=new Date()
date.setTime(date.getTime()+5184000000);document.cookie=id+'= '+value+'; path=/; expires='+date.toGMTString()+';';}}
(function(){let currentPrivacy=false;let readingSize=false;if(navigator.cookieEnabled){currentPrivacy=localStorage.getItem('RubyPrivacyAllowed');readingSize=sessionStorage.getItem('rubyResizerStep');}
let privacyBox=document.getElementById('rb-privacy');if(!currentPrivacy&&privacyBox!==null){privacyBox.classList.add('activated');}
if(readingSize){let body=document.getElementsByTagName("BODY")[0];if(2==readingSize){body.classList.add('medium-entry-size');}else if(3==readingSize){body.classList.add('big-entry-size');}}})();var FOXIZ_CORE_SCRIPT=(function(Module,$){"use strict";Module.init=function(){this._body=$('body');this.switchDarkMode();this.notificationStatus();}
Module.switchDarkMode=function(){var self=this;let darkModeID='RubyDarkMode';if(foxizCoreParams.darkModeID){darkModeID=foxizCoreParams.darkModeID;}
$('.dark-mode-toggle').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();if(!$(this).hasClass('triggered')){$(this).addClass('triggered')}
let iconDefault=$('.mode-icon-default');let iconDark=$('.mode-icon-dark');let currentMode=null;if(navigator.cookieEnabled){currentMode=localStorage.getItem(darkModeID);}
if(null===currentMode){currentMode=document.body.getAttribute('data-theme');}
self._body.addClass('switch-smooth');if(null===currentMode||'default'===currentMode){if(navigator.cookieEnabled){localStorage.setItem(darkModeID,'dark');setDarkModeCookie(darkModeID,'dark');}
self._body.attr('data-theme','dark');iconDefault.removeClass('activated');iconDark.addClass('activated');}else{if(navigator.cookieEnabled){localStorage.setItem(darkModeID,'default');setDarkModeCookie(darkModeID,'default');}
self._body.attr('data-theme','default');iconDefault.addClass('activated');iconDark.removeClass('activated');}})}
Module.shareTrigger=function(){$('a.share-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();window.open($(this).attr('href'),'_blank','width=600, height=350');return false;});$('a.copy-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var link=target.data('link');var copied=target.data('copied');if(link){navigator.clipboard.writeText(link).then(function(){$('body').find('.tipsy-inner').html((copied));});}});};Module.notificationStatus=function(){let storageID='RubyNotification';let notification=$('.notification-icon');let statusID=notification.data('notification');if(statusID){let currentStatus=localStorage.getItem(storageID);if(!currentStatus||statusID!=currentStatus){notification.addClass('notification-activated');}}
notification.on('click',function(){$(this).removeClass('notification-activated');localStorage.setItem(storageID,statusID);});}
Module.loadGoogleAds=function(response){var googleAds=$(response).find('.adsbygoogle');if(typeof window.adsbygoogle!=='undefined'&&googleAds.length){var adsbygoogle;googleAds.each(function(){(adsbygoogle=window.adsbygoogle||[]).push({});});}}
Module.loadInstagram=function(response){var instEmbed=$(response).find('.instagram-media');if('undefined'!==typeof window.instgrm){window.instgrm.Embeds.process();}else if(instEmbed.length&&'undefined'===typeof window.instgrm){var embedJS=document.createElement('script');embedJS.src='//platform.instagram.com/en_US/embeds.js';embedJS.onload=function(){window.instgrm.Embeds.process();};this.$body.append(embedJS);}}
Module.updateGA=function(article){var gaURL=article.postURL.replace(/https?:\/\/[^\/]+/i,'');if(typeof _gaq!=='undefined'&&_gaq!==null){_gaq.push(['_trackPageview',gaURL]);}
if(typeof ga!=='undefined'&&ga!==null){ga('send','pageview',gaURL);}
if(typeof __gaTracker!=='undefined'&&__gaTracker!==null){__gaTracker('send','pageview',gaURL);}
if(window.googletag&&googletag.pubadsReady){googletag.pubads().refresh();}}
return Module;}(FOXIZ_CORE_SCRIPT||{},jQuery));jQuery(document).ready(function(){FOXIZ_CORE_SCRIPT.init();});jQuery(window).on('load',function(){FOXIZ_CORE_SCRIPT.shareTrigger();});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
( function( window, factory ) {
    /*jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
            return factory( window, jQuery );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            window,
            require('jquery')
        );
    } else {
        window.jQueryBridget = factory(
            window,
            window.jQuery
        );
    }
}( window, function factory( window, jQuery ) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} :
        function( message ) {
            console.error( message );
        };
    function jQueryBridget( namespace, PluginClass, $ ) {
        $ = $ || jQuery || window.jQuery;
        if ( !$ ) {
            return;
        }
        if ( !PluginClass.prototype.option ) {
            PluginClass.prototype.option = function( opts ) {
                if ( !$.isPlainObject( opts ) ){
                    return;
                }
                this.options = $.extend( true, this.options, opts );
            };
        }
        $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
            if ( typeof arg0 == 'string' ) {
                var args = arraySlice.call( arguments, 1 );
                return methodCall( this, arg0, args );
            }
            plainCall( this, arg0 );
            return this;
        };
        function methodCall( $elems, methodName, args ) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each( function( i, elem ) {
                var instance = $.data( elem, namespace );
                if ( !instance ) {
                    logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
                    pluginMethodStr );
                    return;
                }
                var method = instance[ methodName ];
                if ( !method || methodName.charAt(0) == '_' ) {
                    logError( pluginMethodStr + ' is not a valid method' );
                    return;
                }
                var value = method.apply( instance, args );
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }
        function plainCall( $elems, options ) {
            $elems.each( function( i, elem ) {
                var instance = $.data( elem, namespace );
                if ( instance ) {
                    instance.option( options );
                    instance._init();
                } else {
                    instance = new PluginClass( elem, options );
                    $.data( elem, namespace, instance );
                }
            });
        }
        updateJQuery( $ );
    }
    function updateJQuery( $ ) {
        if ( !$ || ( $ && $.bridget ) ) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery( jQuery || window.jQuery );
    return jQueryBridget;
}));
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */
( function( global, factory ) {
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
        define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}( typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[ eventName ] = events[ eventName ] || [];
        if ( listeners.indexOf( listener ) == -1 ) {
            listeners.push( listener );
        }
        return this;
    };
    proto.once = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        this.on( eventName, listener );
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
        onceListeners[ listener ] = true;
        return this;
    };
    proto.off = function( eventName, listener ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        var index = listeners.indexOf( listener );
        if ( index != -1 ) {
            listeners.splice( index, 1 );
        }
        return this;
    };
    proto.emitEvent = function( eventName, args ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
        for ( var i=0; i < listeners.length; i++ ) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[ listener ];
            if ( isOnce ) {
                this.off( eventName, listener );
                delete onceListeners[ listener ];
            }
            listener.apply( this, args );
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */
( function( window, factory ) {
    /* jshint strict: false */ /* globals define, module */
    if ( typeof define == 'function' && define.amd ) {
        define( 'get-size/get-size',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
})( window, function factory() {
    'use strict';
    function getStyleSize( value ) {
        var num = parseFloat( value );
        var isValid = value.indexOf('%') == -1 && !isNaN( num );
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == 'undefined' ? noop :
        function( message ) {
            console.error( message );
        };
    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            size[ measurement ] = 0;
        }
        return size;
    }
    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle( elem ) {
        var style = getComputedStyle( elem );
        if ( !style ) {
            logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See https://bit.ly/getsizebug1' );
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
        if ( isSetup ) {
            return;
        }
        isSetup = true;
        /**
         * Chrome & Safari measure the outer-width on style.width on border-box elems
         * IE11 & Firefox<29 measures the inner-width
         */
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild( div );
        var style = getStyle( div );
        isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild( div );
    }
    function getSize( elem ) {
        setup();
        if ( typeof elem == 'string' ) {
            elem = document.querySelector( elem );
        }
        if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
            return;
        }
        var style = getStyle( elem );
        if ( style.display == 'none' ) {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            var value = style[ measurement ];
            var num = parseFloat( value );
            size[ measurement ] = !isNaN( num ) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize( style.width );
        if ( styleWidth !== false ) {
            size.width = styleWidth +
            ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
        }
        var styleHeight = getStyleSize( style.height );
        if ( styleHeight !== false ) {
            size.height = styleHeight +
            ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
        }
        size.innerWidth = size.width - ( paddingWidth + borderWidth );
        size.innerHeight = size.height - ( paddingHeight + borderHeight );
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
( function( window, factory ) {
    /*global define: false, module: false */
    'use strict';
    if ( typeof define == 'function' && define.amd ) {
        define( 'desandro-matches-selector/matches-selector',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}( window, function factory() {
    'use strict';
    var matchesMethod = ( function() {
        var ElemProto = window.Element.prototype;
        if ( ElemProto.matches ) {
            return 'matches';
        }
        if ( ElemProto.matchesSelector ) {
            return 'matchesSelector';
        }
        var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
        for ( var i=0; i < prefixes.length; i++ ) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if ( ElemProto[ method ] ) {
                return method;
            }
        }
    })();
    return function matchesSelector( elem, selector ) {
        return elem[ matchesMethod ]( selector );
    };
}));
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
( function( window, factory ) {
    /*jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'fizzy-ui-utils/utils',[
            'desandro-matches-selector/matches-selector'
        ], function( matchesSelector ) {
            return factory( window, matchesSelector );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            window,
            require('desandro-matches-selector')
        );
    } else {
        window.fizzyUIUtils = factory(
            window,
            window.matchesSelector
        );
    }
}( window, function factory( window, matchesSelector ) {
    var utils = {};
    utils.extend = function( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    };
    utils.modulo = function( num, div ) {
        return ( ( num % div ) + div ) % div;
    };
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function( obj ) {
        if ( Array.isArray( obj ) ) {
            return obj;
        }
        if ( obj === null || obj === undefined ) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if ( isArrayLike ) {
            return arraySlice.call( obj );
        }
        return [ obj ];
    };
    utils.removeFrom = function( ary, obj ) {
        var index = ary.indexOf( obj );
        if ( index != -1 ) {
            ary.splice( index, 1 );
        }
    };
    utils.getParent = function( elem, selector ) {
        while ( elem.parentNode && elem != document.body ) {
            elem = elem.parentNode;
            if ( matchesSelector( elem, selector ) ) {
                return elem;
            }
        }
    };
    utils.getQueryElement = function( elem ) {
        if ( typeof elem == 'string' ) {
            return document.querySelector( elem );
        }
        return elem;
    };
    utils.handleEvent = function( event ) {
        var method = 'on' + event.type;
        if ( this[ method ] ) {
            this[ method ]( event );
        }
    };
    utils.filterFindElements = function( elems, selector ) {
        elems = utils.makeArray( elems );
        var ffElems = [];
        elems.forEach( function( elem ) {
            if ( !( elem instanceof HTMLElement ) ) {
                return;
            }
            if ( !selector ) {
                ffElems.push( elem );
                return;
            }
            if ( matchesSelector( elem, selector ) ) {
                ffElems.push( elem );
            }
            var childElems = elem.querySelectorAll( selector );
            for ( var i=0; i < childElems.length; i++ ) {
                ffElems.push( childElems[i] );
            }
        });
        return ffElems;
    };
    utils.debounceMethod = function( _class, methodName, threshold ) {
        threshold = threshold || 100;
        var method = _class.prototype[ methodName ];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[ methodName ] = function() {
            var timeout = this[ timeoutName ];
            clearTimeout( timeout );
            var args = arguments;
            var _this = this;
            this[ timeoutName ] = setTimeout( function() {
                method.apply( _this, args );
                delete _this[ timeoutName ];
            }, threshold );
        };
    };
    utils.docReady = function( callback ) {
        var readyState = document.readyState;
        if ( readyState == 'complete' || readyState == 'interactive' ) {
            setTimeout( callback );
        } else {
            document.addEventListener( 'DOMContentLoaded', callback );
        }
    };
    utils.toDashed = function( str ) {
        return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };
    var console = window.console;
    /**
     * allow user to initialize classes via [data-namespace] or .js-namespace class
     * htmlInit( Widget, 'widgetName' )
     * options are parsed from data-namespace-options
     */
    utils.htmlInit = function( WidgetClass, namespace ) {
        utils.docReady( function() {
            var dashedNamespace = utils.toDashed( namespace );
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
            var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
            var elems = utils.makeArray( dataAttrElems )
                .concat( utils.makeArray( jsDashElems ) );
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach( function( elem ) {
                var attr = elem.getAttribute( dataAttr ) ||
                    elem.getAttribute( dataOptionsAttr );
                var options;
                try {
                    options = attr && JSON.parse( attr );
                } catch ( error ) {
                    if ( console ) {
                        console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
                        ': ' + error );
                    }
                    return;
                }
                var instance = new WidgetClass( elem, options );
                if ( jQuery ) {
                    jQuery.data( elem, namespace, instance );
                }
            });
        });
    };
    return utils;
}));
/**
 * Outlayer Item
 */
( function( window, factory ) {
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'outlayer/item',[
                'ev-emitter/ev-emitter',
                'get-size/get-size'
            ],
            factory
        );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('ev-emitter'),
            require('get-size')
        );
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(
            window.EvEmitter,
            window.getSize
        );
    }
}( window, function factory( EvEmitter, getSize ) {
    'use strict';
    function isEmptyObj( obj ) {
        for ( var prop in obj ) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ?
        'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[ transitionProperty ];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };
    function Item( element, layout ) {
        if ( !element ) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create( EvEmitter.prototype );
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    };
    proto.handleEvent = function( event ) {
        var method = 'on' + event.type;
        if ( this[ method ] ) {
            this[ method ]( event );
        }
    };
    proto.getSize = function() {
        this.size = getSize( this.element );
    };
    /**
     * apply CSS styles to element
     * @param {Object} style
     */
    proto.css = function( style ) {
        var elemStyle = this.element.style;
        for ( var prop in style ) {
            var supportedProp = vendorProperties[ prop ] || prop;
            elemStyle[ supportedProp ] = style[ prop ];
        }
    };
    proto.getPosition = function() {
        var style = getComputedStyle( this.element );
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[ isOriginLeft ? 'left' : 'right' ];
        var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
        var x = parseFloat( xValue );
        var y = parseFloat( yValue );
        var layoutSize = this.layout.size;
        if ( xValue.indexOf('%') != -1 ) {
            x = ( x / 100 ) * layoutSize.width;
        }
        if ( yValue.indexOf('%') != -1 ) {
            y = ( y / 100 ) * layoutSize.height;
        }
        x = isNaN( x ) ? 0 : x;
        y = isNaN( y ) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[ xPadding ];
        style[ xProperty ] = this.getXValue( x );
        style[ xResetProperty ] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[ yPadding ];
        style[ yProperty ] = this.getYValue( y );
        style[ yResetProperty ] = '';
        this.css( style );
        this.emitEvent( 'layout', [ this ] );
    };
    proto.getXValue = function( x ) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ?
        ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
    };
    proto.getYValue = function( y ) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ?
        ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
    };
    proto._transitionTo = function( x, y ) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition( x, y );
        if ( didNotMove && !this.isTransitioning ) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate( transX, transY );
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function( x, y ) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };
    proto.goTo = function( x, y ) {
        this.setPosition( x, y );
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function( x, y ) {
        this.position.x = parseFloat( x );
        this.position.y = parseFloat( y );
    };
    /**
     * @param {Object} style - CSS
     * @param {Function} onTransitionEnd
     */
    proto._nonTransition = function( args ) {
        this.css( args.to );
        if ( args.isCleaning ) {
            this._removeStyles( args.to );
        }
        for ( var prop in args.onTransitionEnd ) {
            args.onTransitionEnd[ prop ].call( this );
        }
    };
    /**
     * proper transition
     * @param {Object} args - arguments
     *   @param {Object} to - style to transition to
     *   @param {Object} from - style to start transition from
     *   @param {Boolean} isCleaning - removes transition styles after transition
     *   @param {Function} onTransitionEnd - callback
     */
    proto.transition = function( args ) {
        if ( !parseFloat( this.layout.options.transitionDuration ) ) {
            this._nonTransition( args );
            return;
        }
        var _transition = this._transn;
        for ( var prop in args.onTransitionEnd ) {
            _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
        }
        for ( prop in args.to ) {
            _transition.ingProperties[ prop ] = true;
            if ( args.isCleaning ) {
                _transition.clean[ prop ] = true;
            }
        }
        if ( args.from ) {
            this.css( args.from );
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition( args.to );
        this.css( args.to );
        this.isTransitioning = true;
    };
    function toDashedAll( str ) {
        return str.replace( /([A-Z])/g, function( $1 ) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll( transformProperty );
    proto.enableTransition = function(/* style */) {
        if ( this.isTransitioning ) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener( transitionEndEvent, this, false );
    };
    proto.onwebkitTransitionEnd = function( event ) {
        this.ontransitionend( event );
    };
    proto.onotransitionend = function( event ) {
        this.ontransitionend( event );
    };
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function( event ) {
        if ( event.target !== this.element ) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
        delete _transition.ingProperties[ propertyName ];
        if ( isEmptyObj( _transition.ingProperties ) ) {
            this.disableTransition();
        }
        if ( propertyName in _transition.clean ) {
            this.element.style[ event.propertyName ] = '';
            delete _transition.clean[ propertyName ];
        }
        if ( propertyName in _transition.onEnd ) {
            var onTransitionEnd = _transition.onEnd[ propertyName ];
            onTransitionEnd.call( this );
            delete _transition.onEnd[ propertyName ];
        }
        this.emitEvent( 'transitionEnd', [ this ] );
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener( transitionEndEvent, this, false );
        this.isTransitioning = false;
    };
    /**
     * removes style property from element
     * @param {Object} style
     **/
    proto._removeStyles = function( style ) {
        var cleanStyle = {};
        for ( var prop in style ) {
            cleanStyle[ prop ] = '';
        }
        this.css( cleanStyle );
    };
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css( cleanTransitionStyle );
    };
    proto.stagger = function( delay ) {
        delay = isNaN( delay ) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };
    proto.removeElem = function() {
        this.element.parentNode.removeChild( this.element );
        this.css({ display: '' });
        this.emitEvent( 'remove', [ this ] );
    };
    proto.remove = function() {
        if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
            this.removeElem();
            return;
        }
        this.once( 'transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        this.css({ display: '' });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        if ( !this.isHidden ) {
            this.emitEvent('reveal');
        }
    };
    /**
     * get style property use for hide/reveal transition end
     * @param {String} styleProperty - hiddenStyle/visibleStyle
     * @returns {String}
     */
    proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
        var optionStyle = this.layout.options[ styleProperty ];
        if ( optionStyle.opacity ) {
            return 'opacity';
        }
        for ( var prop in optionStyle ) {
            return prop;
        }
    };
    proto.hide = function() {
        this.isHidden = true;
        this.css({ display: '' });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        if ( this.isHidden ) {
            this.css({ display: 'none' });
            this.emitEvent('hide');
        }
    };
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
( function( window, factory ) {
    'use strict';
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'outlayer/outlayer',[
                'ev-emitter/ev-emitter',
                'get-size/get-size',
                'fizzy-ui-utils/utils',
                './item'
            ],
            function( EvEmitter, getSize, utils, Item ) {
                return factory( window, EvEmitter, getSize, utils, Item);
            }
        );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            window,
            require('ev-emitter'),
            require('get-size'),
            require('fizzy-ui-utils'),
            require('./item')
        );
    } else {
        window.Outlayer = factory(
            window,
            window.EvEmitter,
            window.getSize,
            window.fizzyUIUtils,
            window.Outlayer.Item
        );
    }
}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};
    /**
     * @param {Element, String} element
     * @param {Object} options
     * @constructor
     */
    function Outlayer( element, options ) {
        var queryElement = utils.getQueryElement( element );
        if ( !queryElement ) {
            if ( console ) {
                console.error( 'Bad element for ' + this.constructor.namespace +
                ': ' + ( queryElement || element ) );
            }
            return;
        }
        this.element = queryElement;
        if ( jQuery ) {
            this.$element = jQuery( this.element );
        }
        this.options = utils.extend( {}, this.constructor.defaults );
        this.option( options );
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[ id ] = this; // associate via id
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if ( isInitLayout ) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend( proto, EvEmitter.prototype );
    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function( opts ) {
        utils.extend( this.options, opts );
    };
    /**
     * get backwards compatible option value, check old name
     */
    proto._getOption = function( option ) {
        var oldOption = this.constructor.compatOptions[ option ];
        return oldOption && this.options[ oldOption ] !== undefined ?
            this.options[ oldOption ] : this.options[ option ];
    };
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp( this.options.stamp );
        utils.extend( this.element.style, this.options.containerStyle );
        var canBindResize = this._getOption('resize');
        if ( canBindResize ) {
            this.bindResize();
        }
    };
    proto.reloadItems = function() {
        this.items = this._itemize( this.element.children );
    };
    /**
     * turn elements into Outlayer.Items to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - collection of new Outlayer Items
     */
    proto._itemize = function( elems ) {
        var itemElems = this._filterFindItemElements( elems );
        var Item = this.constructor.Item;
        var items = [];
        for ( var i=0; i < itemElems.length; i++ ) {
            var elem = itemElems[i];
            var item = new Item( elem, this );
            items.push( item );
        }
        return items;
    };
    /**
     * get item elements to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - item elements
     */
    proto._filterFindItemElements = function( elems ) {
        return utils.filterFindElements( elems, this.options.itemSelector );
    };
    /**
     * getter method for getting item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getItemElements = function() {
        return this.items.map( function( item ) {
            return item.element;
        });
    };
    /**
     * lays out all items
     */
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ?
            layoutInstant : !this._isLayoutInited;
        this.layoutItems( this.items, isInstant );
        this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    /**
     * logic before any new layout
     */
    proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize( this.element );
    };
    /**
     * get measurement from option, for columnWidth, rowHeight, gutter
     * if option is String -> get element from selector string, & get size of element
     * if option is Element -> get size of element
     * else use option as a number
     *
     * @param {String} measurement
     * @param {String} size - width or height
     * @private
     */
    proto._getMeasurement = function( measurement, size ) {
        var option = this.options[ measurement ];
        var elem;
        if ( !option ) {
            this[ measurement ] = 0;
        } else {
            if ( typeof option == 'string' ) {
                elem = this.element.querySelector( option );
            } else if ( option instanceof HTMLElement ) {
                elem = option;
            }
            this[ measurement ] = elem ? getSize( elem )[ size ] : option;
        }
    };
    /**
     * layout a collection of item elements
     * @api public
     */
    proto.layoutItems = function( items, isInstant ) {
        items = this._getItemsForLayout( items );
        this._layoutItems( items, isInstant );
        this._postLayout();
    };
    /**
     * get the items to be laid out
     * you may want to skip over some items
     * @param {Array} items
     * @returns {Array} items
     */
    proto._getItemsForLayout = function( items ) {
        return items.filter( function( item ) {
            return !item.isIgnored;
        });
    };
    /**
     * layout items
     * @param {Array} items
     * @param {Boolean} isInstant
     */
    proto._layoutItems = function( items, isInstant ) {
        this._emitCompleteOnItems( 'layout', items );
        if ( !items || !items.length ) {
            return;
        }
        var queue = [];
        items.forEach( function( item ) {
            var position = this._getItemLayoutPosition( item );
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push( position );
        }, this );
        this._processLayoutQueue( queue );
    };
    /**
     * get item layout position
     * @param {Outlayer.Item} item
     * @returns {Object} x and y position
     */
    proto._getItemLayoutPosition = function( /* item */ ) {
        return {
            x: 0,
            y: 0
        };
    };
    /**
     * iterate over array and position each item
     * Reason being - separating this logic prevents 'layout invalidation'
     * thx @paul_irish
     * @param {Array} queue
     */
    proto._processLayoutQueue = function( queue ) {
        this.updateStagger();
        queue.forEach( function( obj, i ) {
            this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
        }, this );
    };
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if ( stagger === null || stagger === undefined ) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds( stagger );
        return this.stagger;
    };
    /**
     * Sets position of item in DOM
     * @param {Outlayer.Item} item
     * @param {Number} x - horizontal position
     * @param {Number} y - vertical position
     * @param {Boolean} isInstant - disables transitions
     */
    proto._positionItem = function( item, x, y, isInstant, i ) {
        if ( isInstant ) {
            item.goTo( x, y );
        } else {
            item.stagger( i * this.stagger );
            item.moveTo( x, y );
        }
    };
    /**
     * Any logic you want to do after each layout,
     * i.e. size the container
     */
    proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if ( !isResizingContainer ) {
            return;
        }
        var size = this._getContainerSize();
        if ( size ) {
            this._setContainerMeasure( size.width, true );
            this._setContainerMeasure( size.height, false );
        }
    };
    /**
     * Sets width or height of container if returned
     * @returns {Object} size
     *   @param {Number} width
     *   @param {Number} height
     */
    proto._getContainerSize = noop;
    /**
     * @param {Number} measure - size of width or height
     * @param {Boolean} isWidth
     */
    proto._setContainerMeasure = function( measure, isWidth ) {
        if ( measure === undefined ) {
            return;
        }
        var elemSize = this.size;
        if ( elemSize.isBorderBox ) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
            elemSize.borderLeftWidth + elemSize.borderRightWidth :
            elemSize.paddingBottom + elemSize.paddingTop +
            elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max( measure, 0 );
        this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
    };
    /**
     * emit eventComplete on a collection of items events
     * @param {String} eventName
     * @param {Array} items - Outlayer.Items
     */
    proto._emitCompleteOnItems = function( eventName, items ) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
        }
        var count = items.length;
        if ( !items || !count ) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if ( doneCount == count ) {
                onComplete();
            }
        }
        items.forEach( function( item ) {
            item.once( eventName, tick );
        });
    };
    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function( type, event, args ) {
        var emitArgs = event ? [ event ].concat( args ) : args;
        this.emitEvent( type, emitArgs );
        if ( jQuery ) {
            this.$element = this.$element || jQuery( this.element );
            if ( event ) {
                var $event = jQuery.Event( event );
                $event.type = type;
                this.$element.trigger( $event, args );
            } else {
                this.$element.trigger( type, args );
            }
        }
    };
    /**
     * keep item in collection, but do not lay it out
     * ignored items do not get skipped in layout
     * @param {Element} elem
     */
    proto.ignore = function( elem ) {
        var item = this.getItem( elem );
        if ( item ) {
            item.isIgnored = true;
        }
    };
    /**
     * return item to layout collection
     * @param {Element} elem
     */
    proto.unignore = function( elem ) {
        var item = this.getItem( elem );
        if ( item ) {
            delete item.isIgnored;
        }
    };
    /**
     * adds elements to stamps
     * @param {NodeList, Array, Element, or String} elems
     */
    proto.stamp = function( elems ) {
        elems = this._find( elems );
        if ( !elems ) {
            return;
        }
        this.stamps = this.stamps.concat( elems );
        elems.forEach( this.ignore, this );
    };
    /**
     * removes elements to stamps
     * @param {NodeList, Array, or Element} elems
     */
    proto.unstamp = function( elems ) {
        elems = this._find( elems );
        if ( !elems ){
            return;
        }
        elems.forEach( function( elem ) {
            utils.removeFrom( this.stamps, elem );
            this.unignore( elem );
        }, this );
    };
    /**
     * finds child elements
     * @param {NodeList, Array, Element, or String} elems
     * @returns {Array} elems
     */
    proto._find = function( elems ) {
        if ( !elems ) {
            return;
        }
        if ( typeof elems == 'string' ) {
            elems = this.element.querySelectorAll( elems );
        }
        elems = utils.makeArray( elems );
        return elems;
    };
    proto._manageStamps = function() {
        if ( !this.stamps || !this.stamps.length ) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach( this._manageStamp, this );
    };
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
            bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
        };
    };
    /**
     * @param {Element} stamp
     **/
    proto._manageStamp = noop;
    /**
     * get x/y position of element relative to container element
     * @param {Element} elem
     * @returns {Object} offset - has left, top, right, bottom
     */
    proto._getElementOffset = function( elem ) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize( elem );
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    proto.handleEvent = utils.handleEvent;
    /**
     * Bind layout to window resizing
     */
    proto.bindResize = function() {
        window.addEventListener( 'resize', this );
        this.isResizeBound = true;
    };
    /**
     * Unbind layout to window resizing
     */
    proto.unbindResize = function() {
        window.removeEventListener( 'resize', this );
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod( Outlayer, 'onresize', 100 );
    proto.resize = function() {
        if ( !this.isResizeBound || !this.needsResizeLayout() ) {
            return;
        }
        this.layout();
    };
    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    proto.needsResizeLayout = function() {
        var size = getSize( this.element );
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    /**
     * add items to Outlayer instance
     * @param {Array or NodeList or Element} elems
     * @returns {Array} items - Outlayer.Items
     **/
    proto.addItems = function( elems ) {
        var items = this._itemize( elems );
        if ( items.length ) {
            this.items = this.items.concat( items );
        }
        return items;
    };
    /**
     * Layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.appended = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        this.layoutItems( items, true );
        this.reveal( items );
    };
    /**
     * Layout prepended elements
     * @param {Array or NodeList or Element} elems
     */
    proto.prepended = function( elems ) {
        var items = this._itemize( elems );
        if ( !items.length ) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat( previousItems );
        this._resetLayout();
        this._manageStamps();
        this.layoutItems( items, true );
        this.reveal( items );
        this.layoutItems( previousItems );
    };
    /**
     * reveal a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.reveal = function( items ) {
        this._emitCompleteOnItems( 'reveal', items );
        if ( !items || !items.length ) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach( function( item, i ) {
            item.stagger( i * stagger );
            item.reveal();
        });
    };
    /**
     * hide a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.hide = function( items ) {
        this._emitCompleteOnItems( 'hide', items );
        if ( !items || !items.length ) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach( function( item, i ) {
            item.stagger( i * stagger );
            item.hide();
        });
    };
    /**
     * reveal item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.revealItemElements = function( elems ) {
        var items = this.getItems( elems );
        this.reveal( items );
    };
    /**
     * hide item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.hideItemElements = function( elems ) {
        var items = this.getItems( elems );
        this.hide( items );
    };
    /**
     * get Outlayer.Item, given an Element
     * @param {Element} elem
     * @param {Function} callback
     * @returns {Outlayer.Item} item
     */
    proto.getItem = function( elem ) {
        for ( var i=0; i < this.items.length; i++ ) {
            var item = this.items[i];
            if ( item.element == elem ) {
                return item;
            }
        }
    };
    /**
     * get collection of Outlayer.Items, given Elements
     * @param {Array} elems
     * @returns {Array} items - Outlayer.Items
     */
    proto.getItems = function( elems ) {
        elems = utils.makeArray( elems );
        var items = [];
        elems.forEach( function( elem ) {
            var item = this.getItem( elem );
            if ( item ) {
                items.push( item );
            }
        }, this );
        return items;
    };
    /**
     * remove element(s) from instance and DOM
     * @param {Array or NodeList or Element} elems
     */
    proto.remove = function( elems ) {
        var removeItems = this.getItems( elems );
        this._emitCompleteOnItems( 'remove', removeItems );
        if ( !removeItems || !removeItems.length ) {
            return;
        }
        removeItems.forEach( function( item ) {
            item.remove();
            utils.removeFrom( this.items, item );
        }, this );
    };
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach( function( item ) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[ id ]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        if ( jQuery ) {
            jQuery.removeData( this.element, this.constructor.namespace );
        }
    };
    /**
     * get Outlayer instance from element
     * @param {Element} elem
     * @returns {Outlayer}
     */
    Outlayer.data = function( elem ) {
        elem = utils.getQueryElement( elem );
        var id = elem && elem.outlayerGUID;
        return id && instances[ id ];
    };
    /**
     * create a layout class
     * @param {String} namespace
     */
    Outlayer.create = function( namespace, options ) {
        var Layout = subclass( Outlayer );
        Layout.defaults = utils.extend( {}, Outlayer.defaults );
        utils.extend( Layout.defaults, options );
        Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass( Item );
        utils.htmlInit( Layout, namespace );
        if ( jQuery && jQuery.bridget ) {
            jQuery.bridget( namespace, Layout );
        }
        return Layout;
    };
    function subclass( Parent ) {
        function SubClass() {
            Parent.apply( this, arguments );
        }
        SubClass.prototype = Object.create( Parent.prototype );
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };
    function getMilliseconds( time ) {
        if ( typeof time == 'number' ) {
            return time;
        }
        var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if ( !num.length ) {
            return 0;
        }
        num = parseFloat( num );
        var mult = msUnits[ unit ] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
/**
 * Isotope Item
 **/
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'isotope-layout/js/item',[
                'outlayer/outlayer'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('outlayer')
        );
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(
            window.Outlayer
        );
    }
}( window, function factory( Outlayer ) {
    'use strict';
    function Item() {
        Outlayer.Item.apply( this, arguments );
    }
    var proto = Item.prototype = Object.create( Outlayer.Item.prototype );
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call( this );
        this.sortData = {};
    };
    proto.updateSortData = function() {
        if ( this.isIgnored ) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for ( var key in getSortData ) {
            var sorter = sorters[ key ];
            this.sortData[ key ] = sorter( this.element, this );
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply( this, arguments );
        this.css({
            display: ''
        });
    };
    return Item;
}));
/**
 * Isotope LayoutMode
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'isotope-layout/js/layout-mode',[
                'get-size/get-size',
                'outlayer/outlayer'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('get-size'),
            require('outlayer')
        );
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(
            window.getSize,
            window.Outlayer
        );
    }
}( window, function factory( getSize, Outlayer ) {
    'use strict';
    function LayoutMode( isotope ) {
        this.isotope = isotope;
        if ( isotope ) {
            this.options = isotope.options[ this.namespace ];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
     **/
    var facadeMethods = [
        '_resetLayout',
        '_getItemLayoutPosition',
        '_manageStamp',
        '_getContainerSize',
        '_getElementOffset',
        'needsResizeLayout',
        '_getOption'
    ];
    facadeMethods.forEach( function( methodName ) {
        proto[ methodName ] = function() {
            return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
        };
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize( this.isotope.element );
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply( this, arguments );
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize( 'column', 'Width' );
    };
    proto.getRowHeight = function() {
        this.getSegmentSize( 'row', 'Height' );
    };
    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
     **/
    proto.getSegmentSize = function( segment, size ) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement( segmentName, outerSize );
        if ( this[ segmentName ] ) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
        this.isotope.size[ 'inner' + size ];
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize( firstItem.element );
    };
    proto.layout = function() {
        this.isotope.layout.apply( this.isotope, arguments );
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };
    LayoutMode.modes = {};
    LayoutMode.create = function( namespace, options ) {
        function Mode() {
            LayoutMode.apply( this, arguments );
        }
        Mode.prototype = Object.create( proto );
        Mode.prototype.constructor = Mode;
        if ( options ) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[ namespace ] = Mode;
        return Mode;
    };
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'masonry-layout/masonry',[
                'outlayer/outlayer',
                'get-size/get-size'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('outlayer'),
            require('get-size')
        );
    } else {
        window.Masonry = factory(
            window.Outlayer,
            window.getSize
        );
    }
}( window, function factory( Outlayer, getSize ) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement( 'columnWidth', 'outerWidth' );
        this._getMeasurement( 'gutter', 'outerWidth' );
        this.measureColumns();
        this.colYs = [];
        for ( var i=0; i < this.cols; i++ ) {
            this.colYs.push( 0 );
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        if ( !this.columnWidth ) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
            this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[ mathMethod ]( cols );
        this.cols = Math.max( cols, 1 );
    };
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize( container );
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function( item ) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
        colSpan = Math.min( colSpan, this.cols );
        var colPosMethod = this.options.horizontalOrder ?
            '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[ colPosMethod ]( colSpan, item );
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for ( var i = colPosition.col; i < setMax; i++ ) {
            this.colYs[i] = setHeight;
        }
        return position;
    };
    proto._getTopColPosition = function( colSpan ) {
        var colGroup = this._getTopColGroup( colSpan );
        var minimumY = Math.min.apply( Math, colGroup );
        return {
            col: colGroup.indexOf( minimumY ),
            y: minimumY,
        };
    };
    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    proto._getTopColGroup = function( colSpan ) {
        if ( colSpan < 2 ) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for ( var i = 0; i < groupCount; i++ ) {
            colGroup[i] = this._getColGroupY( i, colSpan );
        }
        return colGroup;
    };
    proto._getColGroupY = function( col, colSpan ) {
        if ( colSpan < 2 ) {
            return this.colYs[ col ];
        }
        var groupColYs = this.colYs.slice( col, col + colSpan );
        return Math.max.apply( Math, groupColYs );
    };
    proto._getHorizontalColPosition = function( colSpan, item ) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY( col, colSpan ),
        };
    };
    proto._manageStamp = function( stamp ) {
        var stampSize = getSize( stamp );
        var offset = this._getElementOffset( stamp );
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor( firstX / this.columnWidth );
        firstCol = Math.max( 0, firstCol );
        var lastCol = Math.floor( lastX / this.columnWidth );
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min( this.cols - 1, lastCol );
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
            stampSize.outerHeight;
        for ( var i = firstCol; i <= lastCol; i++ ) {
            this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
        }
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply( Math, this.colYs );
        var size = {
            height: this.maxY
        };
        if ( this._getOption('fitWidth') ) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while ( --i ) {
            if ( this.colYs[i] !== 0 ) {
                break;
            }
            unusedCols++;
        }
        return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'isotope-layout/js/layout-modes/masonry',[
                '../layout-mode',
                'masonry-layout/masonry'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('../layout-mode'),
            require('masonry-layout')
        );
    } else {
        factory(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }
}( window, function factory( LayoutMode, Masonry ) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for ( var method in Masonry.prototype ) {
        if ( !keepModeMethods[ method ] ) {
            proto[ method ] = Masonry.prototype[ method ];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call( this );
    };
    var _getOption = proto._getOption;
    proto._getOption = function( option ) {
        if ( option == 'fitWidth' ) {
            return this.options.isFitWidth !== undefined ?
                this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply( this.isotope, arguments );
    };
    return MasonryMode;
}));
/**
 * fitRows layout mode
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'isotope-layout/js/layout-modes/fit-rows',[
                '../layout-mode'
            ],
            factory );
    } else if ( typeof exports == 'object' ) {
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        factory(
            window.Isotope.LayoutMode
        );
    }
}( window, function factory( LayoutMode ) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement( 'gutter', 'outerWidth' );
    };
    proto._getItemLayoutPosition = function( item ) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
        this.x += itemWidth;
        return position;
    };
    proto._getContainerSize = function() {
        return { height: this.maxY };
    };
    return FitRows;
}));
/**
 * vertical layout mode
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( 'isotope-layout/js/layout-modes/vertical',[
                '../layout-mode'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        factory(
            window.Isotope.LayoutMode
        );
    }
}( window, function factory( LayoutMode ) {
    'use strict';
    var Vertical = LayoutMode.create( 'vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    };
    proto._getItemLayoutPosition = function( item ) {
        item.getSize();
        var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
            this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return { x: x, y: y };
    };
    proto._getContainerSize = function() {
        return { height: this.y };
    };
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
( function( window, factory ) {
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        define( [
                'outlayer/outlayer',
                'get-size/get-size',
                'desandro-matches-selector/matches-selector',
                'fizzy-ui-utils/utils',
                'isotope-layout/js/item',
                'isotope-layout/js/layout-mode',
                'isotope-layout/js/layout-modes/masonry',
                'isotope-layout/js/layout-modes/fit-rows',
                'isotope-layout/js/layout-modes/vertical'
            ],
            function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
                return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
            });
    } else if ( typeof module == 'object' && module.exports ) {
        module.exports = factory(
            window,
            require('outlayer'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('fizzy-ui-utils'),
            require('isotope-layout/js/item'),
            require('isotope-layout/js/layout-mode'),
            require('isotope-layout/js/layout-modes/masonry'),
            require('isotope-layout/js/layout-modes/fit-rows'),
            require('isotope-layout/js/layout-modes/vertical')
        );
    } else {
        window.Isotope = factory(
            window,
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.fizzyUIUtils,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }
}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
                             Item, LayoutMode ) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ?
        function( str ) {
            return str.trim();
        } :
        function( str ) {
            return str.replace( /^\s+|\s+$/g, '' );
        };
    var Isotope = Outlayer.create( 'isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call( this );
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = [ 'original-order' ];
        for ( var name in LayoutMode.modes ) {
            this._initLayoutMode( name );
        }
    };
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call( this );
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply( this, arguments );
        for ( var i=0; i < items.length; i++ ) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData( items );
        return items;
    };
    proto._initLayoutMode = function( name ) {
        var Mode = LayoutMode.modes[ name ];
        var initialOpts = this.options[ name ] || {};
        this.options[ name ] = Mode.options ?
            utils.extend( Mode.options, initialOpts ) : initialOpts;
        this.modes[ name ] = new Mode( this );
    };
    proto.layout = function() {
        if ( !this._isLayoutInited && this._getOption('initLayout') ) {
            this.arrange();
            return;
        }
        this._layout();
    };
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems( this.filteredItems, isInstant );
        this._isLayoutInited = true;
    };
    proto.arrange = function( opts ) {
        this.option( opts );
        this._getIsInstant();
        var filtered = this._filter( this.items );
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if ( this._isInstant ) {
            this._noTransition( this._hideReveal, [ filtered ] );
        } else {
            this._hideReveal( filtered );
        }
        this._sort();
        this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function( filtered ) {
        this.reveal( filtered.needReveal );
        this.hide( filtered.needHide );
    };
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
            !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
            if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
                _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
            }
        }
        this.once( 'layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once( 'hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once( 'revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };
    proto._filter = function( items ) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest( filter );
        for ( var i=0; i < items.length; i++ ) {
            var item = items[i];
            if ( item.isIgnored ) {
                continue;
            }
            var isMatched = test( item );
            if ( isMatched ) {
                matches.push( item );
            }
            if ( isMatched && item.isHidden ) {
                hiddenMatched.push( item );
            } else if ( !isMatched && !item.isHidden ) {
                visibleUnmatched.push( item );
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };
    proto._getFilterTest = function( filter ) {
        if ( jQuery && this.options.isJQueryFiltering ) {
            return function( item ) {
                return jQuery( item.element ).is( filter );
            };
        }
        if ( typeof filter == 'function' ) {
            return function( item ) {
                return filter( item.element );
            };
        }
        return function( item ) {
            return matchesSelector( item.element, filter );
        };
    };
    /**
     * @params {Array} elems
     * @public
     */
    proto.updateSortData = function( elems ) {
        var items;
        if ( elems ) {
            elems = utils.makeArray( elems );
            items = this.getItems( elems );
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData( items );
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for ( var key in getSortData ) {
            var sorter = getSortData[ key ];
            this._sorters[ key ] = mungeSorter( sorter );
        }
    };
    /**
     * @params {Array} items - of Isotope.Items
     * @private
     */
    proto._updateItemsSortData = function( items ) {
        var len = items && items.length;
        for ( var i=0; len && i < len; i++ ) {
            var item = items[i];
            item.updateSortData();
        }
    };
    var mungeSorter = ( function() {
        function mungeSorter( sorter ) {
            if ( typeof sorter != 'string' ) {
                return sorter;
            }
            var args = trim( sorter ).split(' ');
            var query = args[0];
            var attrMatch = query.match( /^\[(.+)\]$/ );
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter( attr, query );
            var parser = Isotope.sortDataParsers[ args[1] ];
            sorter = parser ? function( elem ) {
                return elem && parser( getValue( elem ) );
            } :
                function( elem ) {
                    return elem && getValue( elem );
                };
            return sorter;
        }
        function getValueGetter( attr, query ) {
            if ( attr ) {
                return function getAttribute( elem ) {
                    return elem.getAttribute( attr );
                };
            }
            return function getChildText( elem ) {
                var child = elem.querySelector( query );
                return child && child.textContent;
            };
        }
        return mungeSorter;
    })();
    Isotope.sortDataParsers = {
        'parseInt': function( val ) {
            return parseInt( val, 10 );
        },
        'parseFloat': function( val ) {
            return parseFloat( val );
        }
    };
    proto._sort = function() {
        if ( !this.options.sortBy ) {
            return;
        }
        var sortBys = utils.makeArray( this.options.sortBy );
        if ( !this._getIsSameSortBy( sortBys ) ) {
            this.sortHistory = sortBys.concat( this.sortHistory );
        }
        var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
        this.filteredItems.sort( itemSorter );
    };
    proto._getIsSameSortBy = function( sortBys ) {
        for ( var i=0; i < sortBys.length; i++ ) {
            if ( sortBys[i] != this.sortHistory[i] ) {
                return false;
            }
        }
        return true;
    };
    function getItemSorter( sortBys, sortAsc ) {
        return function sorter( itemA, itemB ) {
            for ( var i = 0; i < sortBys.length; i++ ) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[ sortBy ];
                var b = itemB.sortData[ sortBy ];
                if ( a > b || a < b ) {
                    var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return ( a > b ? 1 : -1 ) * direction;
                }
            }
            return 0;
        };
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[ layoutMode ];
        if ( !mode ) {
            throw new Error( 'No layout mode: ' + layoutMode );
        }
        mode.options = this.options[ layoutMode ];
        return mode;
    };
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call( this );
        this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function( item  ) {
        return this._mode()._getItemLayoutPosition( item );
    };
    proto._manageStamp = function( stamp ) {
        this._mode()._manageStamp( stamp );
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };
    proto.appended = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        var filteredItems = this._filterRevealAdded( items );
        this.filteredItems = this.filteredItems.concat( filteredItems );
    };
    proto.prepended = function( elems ) {
        var items = this._itemize( elems );
        if ( !items.length ) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded( items );
        this.layoutItems( this.filteredItems );
        this.filteredItems = filteredItems.concat( this.filteredItems );
        this.items = items.concat( this.items );
    };
    proto._filterRevealAdded = function( items ) {
        var filtered = this._filter( items );
        this.hide( filtered.needHide );
        this.reveal( filtered.matches );
        this.layoutItems( filtered.matches, true );
        return filtered.matches;
    };
    /**
     * Filter, sort, and layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.insert = function( elems ) {
        var items = this.addItems( elems );
        if ( !items.length ) {
            return;
        }
        var i, item;
        var len = items.length;
        for ( i=0; i < len; i++ ) {
            item = items[i];
            this.element.appendChild( item.element );
        }
        var filteredInsertItems = this._filter( items ).matches;
        for ( i=0; i < len; i++ ) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for ( i=0; i < len; i++ ) {
            delete items[i].isLayoutInstant;
        }
        this.reveal( filteredInsertItems );
    };
    var _remove = proto.remove;
    proto.remove = function( elems ) {
        elems = utils.makeArray( elems );
        var removeItems = this.getItems( elems );
        _remove.call( this, elems );
        var len = removeItems && removeItems.length;
        for ( var i=0; len && i < len; i++ ) {
            var item = removeItems[i];
            utils.removeFrom( this.filteredItems, item );
        }
    };
    proto.shuffle = function() {
        for ( var i=0; i < this.items.length; i++ ) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };
    /**
     * trigger fn without transition
     * kind of hacky to have this in the first place
     * @param {Function} fn
     * @param {Array} args
     * @returns ret
     * @private
     */
    proto._noTransition = function( fn, args ) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply( this, args );
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };
    /**
     * getter method for getting filtered item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map( function( item ) {
            return item.element;
        });
    };
    return Isotope;
}));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RBSwiper=t()}(this,(function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:a(t[s])&&a(e[s])&&Object.keys(t[s]).length>0&&i(e[s],t[s])}))}var s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return i(e,s),e}var n={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function o(){var e="undefined"!=typeof window?window:{};return i(e,n),e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,a){return(c=p()?Reflect.construct:function(e,t,a){var i=[null];i.push.apply(i,t);var s=new(Function.bind.apply(e,i));return a&&d(s,a.prototype),s}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return c(e,arguments,l(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),d(i,e)})(e)}var h=function(e){var t,a;function i(t){var a,i,s;return a=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a),s=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return s},set:function(e){s.__proto__=e}}),a}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i}(u(Array));function v(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,v(e)):t.push(e)})),t}function f(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var a=o(),i=r(),s=[];if(!t&&e instanceof h)return e;if(!e)return new h(s);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var l="div";0===n.indexOf("<li")&&(l="ul"),0===n.indexOf("<tr")&&(l="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(l="tr"),0===n.indexOf("<tbody")&&(l="table"),0===n.indexOf("<option")&&(l="select");var d=i.createElement(l);d.innerHTML=n;for(var p=0;p<d.childNodes.length;p+=1)s.push(d.childNodes[p])}else s=function(e,t){if("string"!=typeof e)return[e];for(var a=[],i=t.querySelectorAll(e),s=0;s<i.length;s+=1)a.push(i[s]);return a}(e.trim(),t||i)}else if(e.nodeType||e===a||e===i)s.push(e);else if(Array.isArray(e)){if(e instanceof h)return e;s=e}return new h(function(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(s))}m.fn=h.prototype;var g,b,w,y={addClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return f(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a+=1)if(2===arguments.length)this[a].setAttribute(e,t);else for(var i in e)this[a][i]=e[i],this[a].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),m(t).is(s))r.apply(t,a);else for(var i=m(t).parents(),n=0;n<i.length;n+=1)m(i[n]).is(s)&&r.apply(i[n],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(s)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:r,proxyListener:o}),u.addEventListener(h,o,n)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:r,proxyListener:l}),u.addEventListener(v,l,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;h>=0;h-=1){var v=u[h];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=o(),t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(var s=a[0].split(" "),r=a[1],n=0;n<s.length;n+=1)for(var l=s[n],d=0;d<this.length;d+=1){var p=this[d];if(e.CustomEvent){var c=new e.CustomEvent(l,{detail:r,bubbles:!0,cancelable:!0});p.dom7EventData=a.filter((function(e,t){return t>0})),p.dispatchEvent(c),p.dom7EventData=[],delete p.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function a(i){i.target===this&&(e.call(this,i),t.off("transitionend",a))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=o();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=o(),t=r(),a=this[0],i=a.getBoundingClientRect(),s=t.body,n=a.clientTop||s.clientTop||0,l=a.clientLeft||s.clientLeft||0,d=a===e?e.scrollY:a.scrollTop,p=a===e?e.scrollX:a.scrollLeft;return{top:i.top+d-n,left:i.left+p-l}}return null},css:function(e,t){var a,i=o();if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)this[a].style[s]=e[s];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,a){e.apply(t,[t,a])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=o(),s=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}if(e===s)return n===s;if(e===i)return n===i;if(e.nodeType||e instanceof h){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var a=t+e;return m(a<0?[]:[this[a]])}return m([this[e]])},append:function(){for(var e,t=r(),a=0;a<arguments.length;a+=1){e=a<0||arguments.length<=a?void 0:arguments[a];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var s=t.createElement("div");for(s.innerHTML=e;s.firstChild;)this[i].appendChild(s.firstChild)}else if(e instanceof h)for(var n=0;n<e.length;n+=1)this[i].appendChild(e[n]);else this[i].appendChild(e)}return this},prepend:function(e){var t,a,i=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=i.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)this[t].insertBefore(s.childNodes[a],this[t].childNodes[0])}else if(e instanceof h)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?m(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return m(t)},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?m(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1){try{var i=this[a].querySelectorAll(e)}catch(t){console.log(e)}for(var s=0;s<i.length;s+=1)t.push(i[s])}return m(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].children,s=0;s<i.length;s+=1)e&&!m(i[s]).is(e)||t.push(i[s]);return m(t)},filter:function(e){return m(f(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var a,i,s,r=o(),n=function(e){var t,a=o();return a.getComputedStyle&&(t=a.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return r.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),s=new r.WebKitCSSMatrix("none"===i?"":i)):a=(s=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=r.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=r.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function S(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function C(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],a=1;a<arguments.length;a+=1){var i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i)for(var s=Object.keys(Object(i)).filter((function(e){return t.indexOf(e)<0})),r=0,n=s.length;r<n;r+=1){var o=s[r],l=Object.getOwnPropertyDescriptor(i,o);void 0!==l&&l.enumerable&&(S(e[o])&&S(i[o])?i[o].__swiper__?e[o]=i[o]:C(e[o],i[o]):!S(e[o])&&S(i[o])?(e[o]={},i[o].__swiper__?e[o]=i[o]:C(e[o],i[o])):e[o]=i[o])}}return e}function M(e,t){Object.keys(t).forEach((function(a){S(t[a])&&Object.keys(t[a]).forEach((function(i){"function"==typeof t[a][i]&&(t[a][i]=t[a][i].bind(e))})),e[a]=t[a]}))}function z(e){return void 0===e&&(e=""),"."+e.trim().replace(/([\.:\/])/g,"\\$1").replace(/ /g,".")}function P(){return g||(g=function(){var e=o(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var a=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,a)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function k(e){return void 0===e&&(e={}),b||(b=function(e){var t=(void 0===e?{}:e).userAgent,a=P(),i=o(),s=i.navigator.platform,r=t||i.navigator.userAgent,n={ios:!1,android:!1},l=i.screen.width,d=i.screen.height,p=r.match(/(Android);?[\s\/]+([\d.]+)?/),c=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v="Win32"===s,f="MacIntel"===s;return!c&&f&&a.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(l+"x"+d)>=0&&((c=r.match(/(Version)\/([\d.]+)/))||(c=[0,1,"13_0_0"]),f=!1),p&&!v&&(n.os="android",n.android=!0),(c||h||u)&&(n.os="ios",n.ios=!0),n}(e)),b}function L(){return w||(w=function(){var e,t=o();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),w}Object.keys(y).forEach((function(e){Object.defineProperty(m.fn,e,{value:y[e],writable:!0})}));var $={name:"resize",create:function(){var e=this;C(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var a=e.width,i=e.height,s=a,r=i;t.forEach((function(t){var a=t.contentBoxSize,i=t.contentRect,n=t.target;n&&n!==e.el||(s=i?i.width:(a[0]||a).inlineSize,r=i?i.height:(a[0]||a).blockSize)})),s===a&&r===i||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=o();e.params.resizeObserver&&void 0!==o().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=o();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},I={attach:function(e,t){void 0===t&&(t={});var a=o(),i=this,s=new(a.MutationObserver||a.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},O={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){M(this,{observer:t({},I,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function A(e){var t=this,a=r(),i=o(),s=t.touchEventsData,n=t.params,l=t.touches;if(!t.animating||!n.preventInteractionOnTransition){var d=e;d.originalEvent&&(d=d.originalEvent);var p=m(d.target);if("wrapper"!==n.touchEventsTarget||p.closest(t.wrapperEl).length)if(s.isTouchEvent="touchstart"===d.type,s.isTouchEvent||!("which"in d)||3!==d.which)if(!(!s.isTouchEvent&&"button"in d&&d.button>0))if(!s.isTouched||!s.isMoved)if(!!n.noSwipingClass&&""!==n.noSwipingClass&&d.target&&d.target.shadowRoot&&e.path&&e.path[0]&&(p=m(e.path[0])),n.noSwiping&&p.closest(n.noSwipingSelector?n.noSwipingSelector:"."+n.noSwipingClass)[0])t.allowClick=!0;else if(!n.swipeHandler||p.closest(n.swipeHandler)[0]){l.currentX="touchstart"===d.type?d.targetTouches[0].pageX:d.pageX,l.currentY="touchstart"===d.type?d.targetTouches[0].pageY:d.pageY;var c=l.currentX,u=l.currentY,h=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(h&&(c<=v||c>=i.innerWidth-v)){if("prevent"!==h)return;e.preventDefault()}if(C(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=c,l.startY=u,s.touchStartTime=x(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==d.type){var f=!0;p.is(s.formElements)&&(f=!1),a.activeElement&&m(a.activeElement).is(s.formElements)&&a.activeElement!==p[0]&&a.activeElement.blur();var g=f&&t.allowTouchMove&&n.touchStartPreventDefault;!n.touchStartForcePreventDefault&&!g||p[0].isContentEditable||d.preventDefault()}t.emit("touchStart",d)}}}function D(e){var t=r(),a=this,i=a.touchEventsData,s=a.params,n=a.touches,o=a.rtlTranslate,l=e;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),p="touchmove"===l.type?d.pageX:l.pageX,c="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return n.startX=p,void(n.startY=c);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(C(n,{startX:p,startY:c,currentX:p,currentY:c}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(c<n.startY&&a.translate<=a.maxTranslate()||c>n.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<n.startX&&a.translate<=a.maxTranslate()||p>n.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&m(l.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){n.currentX=p,n.currentY=c;var u=n.currentX-n.startX,h=n.currentY-n.startY;if(!(a.params.threshold&&Math.sqrt(Math.pow(u,2)+Math.pow(h,2))<a.params.threshold)){var v;if(void 0===i.isScrolling)a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:u*u+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle);if(i.isScrolling&&a.emit("touchMoveOpposite",l),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",l)),a.emit("sliderMove",l),i.isMoved=!0;var f=a.isHorizontal()?u:h;n.diff=f,f*=s.touchRatio,o&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,b=s.resistanceRatio;if(s.touchReleaseOnEdges&&(b=0),f>0&&i.currentTranslate>a.minTranslate()?(g=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,b))):f<0&&i.currentTranslate<a.maxTranslate()&&(g=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,b))),g&&(l.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.allowSlidePrev||a.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:n[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:n[a.isHorizontal()?"currentX":"currentY"],time:x()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",l)}function N(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=x(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),u<300&&c-a.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),a.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,!i.cssMode)if(i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-h.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,T,S=!1,C=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-C&&(w=t.maxTranslate()-C),y=t.maxTranslate(),S=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>C&&(w=t.minTranslate()+C),y=t.minTranslate(),S=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(i.freeModeSticky){for(var M,z=0;z<l.length;z+=1)if(l[z]>-w){M=z;break}w=-(w=Math.abs(l[M]-w)<Math.abs(l[M-1]-w)||"next"===t.swipeDirection?l[M]:l[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity),i.freeModeSticky){var P=Math.abs((r?-w:w)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?i.speed:P<2*k?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&S?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(y),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(w)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeModeSticky)return void t.slideToClosest();i.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var L=0,$=t.slidesSizesGrid[0],I=0;I<o.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var O=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==o[I+O]?p>=o[I]&&p<o[I+O]&&(L=I,$=o[I+O]-o[I]):p>=o[I]&&(L=I,$=o[o.length-1]-o[o.length-2])}var A=(p-o[L])/$,D=L<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=i.longSwipesRatio?t.slideTo(L+D):t.slideTo(L)),"prev"===t.swipeDirection&&(A>1-i.longSwipesRatio?t.slideTo(L+D):t.slideTo(L))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo(L+D):t.slideTo(L):("next"===t.swipeDirection&&t.slideTo(L+D),"prev"===t.swipeDirection&&t.slideTo(L))}}}function G(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}function B(e){var t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function H(){var e=this,t=e.wrapperEl,a=e.rtlTranslate;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=a?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}var X=!1;function Y(){}var R={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},V={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a];i.params&&C(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a],s=e[a]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(s)}))}},eventsEmitter:{on:function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once:function(e,t,a){var i=this;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,a)},onAny:function(e,t){var a=this;if("function"!=typeof e)return a;var i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off:function(e,t){var a=this;return a.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e]&&a.eventsListeners[e].forEach((function(i,s){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&a.eventsListeners[e].splice(s,1)}))})),a):a},emit:function(){var e,t,a,i=this;if(!i.eventsListeners)return i;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),a=i):(e=r[0].events,t=r[0].data,a=r[0].context||i),t.unshift(a);var o=Array.isArray(e)?e:e.split(" ");return o.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(a,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(a,t)}))})),i}},update:{updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width&&null!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height&&null!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),C(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=function(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]},a=function(e,a){return parseFloat(e.getPropertyValue(t(a))||0)},i=e.params,s=e.$wrapperEl,r=e.size,n=e.rtlTranslate,o=e.wrongRTL,l=e.virtual&&i.virtual.enabled,d=l?e.virtual.slides.length:e.slides.length,p=s.children("."+e.params.slideClass),c=l?e.virtual.slides.length:p.length,u=[],h=[],v=[],f=i.slidesOffsetBefore;"function"==typeof f&&(f=i.slidesOffsetBefore.call(e));var m=i.slidesOffsetAfter;"function"==typeof m&&(m=i.slidesOffsetAfter.call(e));var g=e.snapGrid.length,b=e.slidesGrid.length,w=i.spaceBetween,y=-f,E=0,x=0;if(void 0!==r){var T,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*r),e.virtualSize=-w,n?p.css({marginLeft:"",marginTop:""}):p.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(T=Math.floor(c/i.slidesPerColumn)===c/e.params.slidesPerColumn?c:Math.ceil(c/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(T=Math.max(T,i.slidesPerView*i.slidesPerColumn)));for(var M,z,P,k=i.slidesPerColumn,L=T/k,$=Math.floor(c/i.slidesPerColumn),I=0;I<c;I+=1){S=0;var O=p.eq(I);if(i.slidesPerColumn>1){var A=void 0,D=void 0,N=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var G=Math.floor(I/(i.slidesPerGroup*i.slidesPerColumn)),B=I-i.slidesPerColumn*i.slidesPerGroup*G,H=0===G?i.slidesPerGroup:Math.min(Math.ceil((c-G*k*i.slidesPerGroup)/k),i.slidesPerGroup);A=(D=B-(N=Math.floor(B/H))*H+G*i.slidesPerGroup)+N*T/k,O.css({"-webkit-box-ordinal-group":A,"-moz-box-ordinal-group":A,"-ms-flex-order":A,"-webkit-order":A,order:A})}else"column"===i.slidesPerColumnFill?(N=I-(D=Math.floor(I/k))*k,(D>$||D===$&&N===k-1)&&(N+=1)>=k&&(N=0,D+=1)):D=I-(N=Math.floor(I/L))*L;O.css(t("margin-top"),0!==N&&i.spaceBetween&&i.spaceBetween+"px")}if("none"!==O.css("display")){if("auto"===i.slidesPerView){var X=getComputedStyle(O[0]),Y=O[0].style.transform,R=O[0].style.webkitTransform;if(Y&&(O[0].style.transform="none"),R&&(O[0].style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?O.outerWidth(!0):O.outerHeight(!0);else{var V=a(X,"width"),W=a(X,"padding-left"),F=a(X,"padding-right"),_=a(X,"margin-left"),q=a(X,"margin-right"),j=X.getPropertyValue("box-sizing");if(j&&"border-box"===j)S=V+_+q;else{var U=O[0],K=U.clientWidth;S=V+W+F+_+q+(U.offsetWidth-K)}}Y&&(O[0].style.transform=Y),R&&(O[0].style.webkitTransform=R),i.roundLengths&&(S=Math.floor(S))}else S=(r-(i.slidesPerView-1)*w)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),p[I]&&(p[I].style[t("width")]=S+"px");p[I]&&(p[I].swiperSlideSize=S),v.push(S),i.centeredSlides?(y=y+S/2+E/2+w,0===E&&0!==I&&(y=y-r/2-w),0===I&&(y=y-r/2-w),Math.abs(y)<.001&&(y=0),i.roundLengths&&(y=Math.floor(y)),x%i.slidesPerGroup==0&&u.push(y),h.push(y)):(i.roundLengths&&(y=Math.floor(y)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+S+w),e.virtualSize+=S+w,E=S,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+m,n&&o&&("slide"===i.effect||"coverflow"===i.effect)&&s.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)s.css(((z={})[t("width")]=e.virtualSize+i.spaceBetween+"px",z));if(i.slidesPerColumn>1)if(e.virtualSize=(S+i.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,s.css(((P={})[t("width")]=e.virtualSize+i.spaceBetween+"px",P)),i.centeredSlides){M=[];for(var Z=0;Z<u.length;Z+=1){var J=u[Z];i.roundLengths&&(J=Math.floor(J)),u[Z]<e.virtualSize+u[0]&&M.push(J)}u=M}if(!i.centeredSlides){M=[];for(var Q=0;Q<u.length;Q+=1){var ee=u[Q];i.roundLengths&&(ee=Math.floor(ee)),u[Q]<=e.virtualSize-r&&M.push(ee)}u=M,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==i.spaceBetween){var te,ae=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter((function(e,t){return!i.cssMode||t!==p.length-1})).css(((te={})[ae]=w+"px",te))}if(i.centeredSlides&&i.centeredSlidesBounds){var ie=0;v.forEach((function(e){ie+=e+(i.spaceBetween?i.spaceBetween:0)}));var se=(ie-=i.spaceBetween)-r;u=u.map((function(e){return e<0?-f:e>se?se+m:e}))}if(i.centerInsufficientSlides){var re=0;if(v.forEach((function(e){re+=e+(i.spaceBetween?i.spaceBetween:0)})),(re-=i.spaceBetween)<r){var ne=(r-re)/2;u.forEach((function(e,t){u[t]=e-ne})),h.forEach((function(e,t){h[t]=e+ne}))}}C(e,{slides:p,snapGrid:u,slidesGrid:h,slidesSizesGrid:v}),c!==d&&e.emit("slidesLengthChange"),u.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&a.params.slidesPerView>1)if(a.params.centeredSlides)a.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=n>s?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility||a.centeredSlides&&a.autoHeight){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=m(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var a=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*a||0}var i=t.params,s=t.maxTranslate()-t.minTranslate(),r=t.progress,n=t.isBeginning,o=t.isEnd,l=n,d=o;0===s?(r=0,n=!0,o=!0):(n=(r=(e-t.minTranslate())/s)<=0,o=r>=1),C(t,{progress:r,isBeginning:n,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),n&&!l&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(l&&!n||d&&!o)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(r.indexOf(i)>=0)t=r.indexOf(i);else{var u=Math.min(n.slidesPerGroupSkip,p);t=u+Math.floor((p-u)/n.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),p!==o){var h=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);C(a,{snapIndex:t,realIndex:h,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==h&&a.emit("realIndexChange"),(a.initialized||a.params.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,a=this,i=a.params,s=m(e.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)if(a.slides[n]===s){r=!0,t=n;break}if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(m(s).attr("data-swiper-slide-index"),10):a.clickedIndex=t,i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtlTranslate,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;if(a.cssMode)return s;var n=T(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.wrapperEl,o=a.progress,l=0,d=0;a.isHorizontal()?l=i?-e:e:d=e,s.roundLengths&&(l=Math.floor(l),d=Math.floor(d)),s.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-l:-d:s.virtualTranslate||r.transform("translate3d("+l+"px, "+d+"px, 0px)"),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?l:d;var p=a.maxTranslate()-a.minTranslate();(0===p?0:(e-a.minTranslate())/p)!==o&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,a,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),void 0===i&&(i=!0);var r=this,n=r.params,o=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var l,d=r.minTranslate(),p=r.maxTranslate();if(l=i&&e>d?d:i&&e<p?p:e,r.updateProgress(l),n.cssMode){var c,u=r.isHorizontal();if(0===t)o[u?"scrollLeft":"scrollTop"]=-l;else if(o.scrollTo)o.scrollTo(((c={})[u?"left":"top"]=-l,c.behavior="smooth",c));else o[u?"scrollLeft":"scrollTop"]=-l;return!0}return 0===t?(r.setTransition(0),r.setTranslate(l),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(l),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,a&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){var a=this;a.params.cssMode||a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;if(!s.cssMode){s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=i>r?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex,r=a.params;if(a.animating=!1,!r.cssMode){a.setTransition(0);var n=t;if(n||(n=i>s?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===n)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===n?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var s=parseInt(e,10);if(!isFinite(s))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=s}var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,p=r.previousIndex,c=r.activeIndex,u=r.rtlTranslate,h=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(c||o.initialSlide||0)===(p||0)&&a&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1){var w=-Math.floor(100*g),y=Math.floor(100*d[b]),E=Math.floor(100*d[b+1]);void 0!==d[b+1]?w>=y&&w<E-(E-y)/2?n=b:w>=y&&w<E&&(n=b+1):w>=y&&(n=b)}if(r.initialized&&n!==c){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(c||0)!==n)return!1}if(m=n>c?"next":n<c?"prev":"reset",u&&-g===r.translate||!u&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(a,m),r.transitionEnd(a,m)),!1;if(o.cssMode){var x,T=r.isHorizontal(),S=-g;if(u&&(S=h.scrollWidth-h.offsetWidth-S),0===t)h[T?"scrollLeft":"scrollTop"]=S;else if(h.scrollTo)h.scrollTo(((x={})[T?"left":"top"]=S,x.behavior="smooth",x));else h[T?"scrollLeft":"scrollTop"]=S;return!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,m),r.transitionEnd(a,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(a,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;return s.params.loop&&(r+=s.loopedSlides),s.slideTo(r,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+n,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p=d(l?i.translate:-i.translate),c=n.map((function(e){return d(e)}));n[c.indexOf(p)];var u,h=n[c.indexOf(p)-1];return void 0===h&&s.cssMode&&n.forEach((function(e){!h&&p>=e&&(h=e)})),void 0!==h&&(u=o.indexOf(h))<0&&(u=i.activeIndex-1),i.slideTo(u,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var s=this,r=s.activeIndex,n=Math.min(s.params.slidesPerGroupSkip,r),o=n+Math.floor((r-n)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[o]){var d=s.snapGrid[o];l-d>(s.snapGrid[o+1]-d)*i&&(r+=s.params.slidesPerGroup)}else{var p=s.snapGrid[o-1];l-p<=(s.snapGrid[o]-p)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),a=e.params,i=e.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var n=a.slidesPerGroup-s.length%a.slidesPerGroup;if(n!==a.slidesPerGroup){for(var o=0;o<n;o+=1){var l=m(t.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(l)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(a.loopedSlides||a.slidesPerView,10)),e.loopedSlides+=a.loopAdditionalSlides,e.loopedSlides>s.length&&(e.loopedSlides=s.length);var d=[],p=[];s.each((function(t,a){var i=m(t);a<e.loopedSlides&&p.push(t),a<s.length&&a>=s.length-e.loopedSlides&&d.push(t),i.attr("data-swiper-slide-index",a)}));for(var c=0;c<p.length;c+=1)i.append(m(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var u=d.length-1;u>=0;u-=1)i.prepend(m(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,a=e.activeIndex,i=e.slides,s=e.loopedSlides,r=e.allowSlidePrev,n=e.allowSlideNext,o=e.snapGrid,l=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var d=-o[a]-e.getTranslate();if(a<s)t=i.length-3*s+a,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d);else if(a>=i.length-s){t=-i.length+a+s,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=r,e.allowSlideNext=n,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass+",."+a.slideClass+"."+a.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(e>=n)a.appendSlide(t);else{for(var o=r>e?r+1:r,l=[],d=n-1;d>=e;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=r>e?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&a.support.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,o=e.device,l=e.support;e.onTouchStart=A.bind(e),e.onTouchMove=D.bind(e),e.onTouchEnd=N.bind(e),a.cssMode&&(e.onScroll=H.bind(e)),e.onClick=B.bind(e);var d=!!a.nested;if(!l.touch&&l.pointerEvents)s.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,d),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(l.touch){var p=!("touchstart"!==i.start||!l.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,e.onTouchStart,p),s.addEventListener(i.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:d}:d),s.addEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.addEventListener(i.cancel,e.onTouchEnd,p),X||(t.addEventListener("touchstart",Y),X=!0)}(a.simulateTouch&&!o.ios&&!o.android||a.simulateTouch&&!l.touch&&o.ios)&&(s.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,d),t.addEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.addEventListener("click",e.onClick,!0),a.cssMode&&n.addEventListener("scroll",e.onScroll),a.updateOnWindowResize?e.on(o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):e.on("observerUpdate",G,!0)},detachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,o=e.device,l=e.support,d=!!a.nested;if(!l.touch&&l.pointerEvents)s.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,d),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(l.touch){var p=!("onTouchStart"!==i.start||!l.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,e.onTouchStart,p),s.removeEventListener(i.move,e.onTouchMove,d),s.removeEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.removeEventListener(i.cancel,e.onTouchEnd,p)}(a.simulateTouch&&!o.ios&&!o.android||a.simulateTouch&&!l.touch&&o.ios)&&(s.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,d),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.removeEventListener("click",e.onClick,!0),a.cssMode&&n.removeEventListener("scroll",e.onScroll),e.off(o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides,s=void 0===i?0:i,r=e.params,n=e.$el,o=r.breakpoints;if(o&&(!o||0!==Object.keys(o).length)){var l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(l&&e.currentBreakpoint!==l){var d=l in o?o[l]:void 0;d&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=d[e];void 0!==t&&(d[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var p=d||e.originalParams,c=r.slidesPerColumn>1,u=p.slidesPerColumn>1;c&&!u?(n.removeClass(r.containerModifierClass+"multirow "+r.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!c&&u&&(n.addClass(r.containerModifierClass+"multirow"),"column"===p.slidesPerColumnFill&&n.addClass(r.containerModifierClass+"multirow-column"),e.emitContainerClasses());var h=p.direction&&p.direction!==r.direction,v=r.loop&&(p.slidesPerView!==r.slidesPerView||h);h&&a&&e.changeDirection(),C(e.params,p),C(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",p),v&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-s+e.loopedSlides,0,!1)),e.emit("breakpoint",p)}}},getBreakpoint:function(e,t,a){if(void 0===t&&(t="window"),e&&("container"!==t||a)){var i=!1,s=o(),r="window"===t?s.innerWidth:a.clientWidth,n="window"===t?s.innerHeight:a.clientHeight,l=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var d=0;d<l.length;d+=1){var p=l[d],c=p.point;p.value<=r&&(i=c)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.params,a=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,a!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),a&&a!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:{addClasses:function(){var e,t,a,i=this,s=i.classNames,r=i.params,n=i.rtl,o=i.$el,l=i.device,d=i.support,p=(e=["initialized",r.direction,{"pointer-events":d.pointerEvents&&!d.touch},{"free-mode":r.freeMode},{autoheight:r.autoHeight},{rtl:n},{multirow:r.slidesPerColumn>1},{"multirow-column":r.slidesPerColumn>1&&"column"===r.slidesPerColumnFill},{android:l.android},{ios:l.ios},{"css-mode":r.cssMode}],t=r.containerModifierClass,a=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(i){e[i]&&a.push(t+i)})):"string"==typeof e&&a.push(t+e)})),a);s.push.apply(s,p),o.addClass([].concat(s).join(" ")),i.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" ")),e.emitContainerClasses()}},images:{loadImage:function(e,t,a,i,s,r){var n,l=o();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&s?d():t?((n=new l.Image).onload=d,n.onerror=d,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},W={},F=function(){function t(){for(var e,a,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];if(1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?a=s[0]:(e=s[0],a=s[1]),a||(a={}),a=C({},a),e&&!a.el&&(a.el=e),a.el&&m(a.el).length>1){var n=[];return m(a.el).each((function(e){var i=C({},a,{el:e});n.push(new t(i))})),n}var o=this;o.__swiper__=!0,o.support=P(),o.device=k({userAgent:a.userAgent}),o.browser=L(),o.eventsListeners={},o.eventsAnyListeners=[],void 0===o.modules&&(o.modules={}),Object.keys(o.modules).forEach((function(e){var t=o.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in a)||!("enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}}));var l,d,p=C({},R);return o.useParams(p),o.params=C({},p,W,a),o.originalParams=C({},o.params),o.passedParams=C({},a),o.params&&o.params.on&&Object.keys(o.params.on).forEach((function(e){o.on(e,o.params.on[e])})),o.params&&o.params.onAny&&o.onAny(o.params.onAny),o.$=m,C(o,{el:e,classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===o.params.direction},isVertical:function(){return"vertical"===o.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEvents:(l=["touchstart","touchmove","touchend","touchcancel"],d=["mousedown","mousemove","mouseup"],o.support.pointerEvents&&(d=["pointerdown","pointermove","pointerup"]),o.touchEventsTouch={start:l[0],move:l[1],end:l[2],cancel:l[3]},o.touchEventsDesktop={start:d[0],move:d[1],end:d[2]},o.support.touch||!o.params.simulateTouch?o.touchEventsTouch:o.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.useModules(),o.emit("_swiper"),o.params.init&&o.init(),o}var a,i,s,r=t.prototype;return r.setProgress=function(e,t){var a=this;e=Math.min(Math.max(e,0),1);var i=a.minTranslate(),s=(a.maxTranslate()-i)*e+i;a.translateTo(s,void 0===t?0:t),a.updateActiveIndex(),a.updateSlidesClasses()},r.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},r.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},r.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(a){var i=e.getSlideClasses(a);t.push({slideEl:a,classNames:i}),e.emit("_slideClass",a,i)})),e.emit("_slideClasses",t)}},r.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,(l+=a[d].swiperSlideSize)>s&&(o=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!o&&(n+=1,(l+=a[p].swiperSlideSize)>s&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},r.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,a=e.params;a.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),a.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,a=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}},r.changeDirection=function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(a.$el.removeClass(""+a.params.containerModifierClass+i).addClass(""+a.params.containerModifierClass+e),a.emitContainerClasses(),a.params.direction=e,a.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),a.emit("changeDirection"),t&&a.update()),a},r.mount=function(e){var t=this;if(t.mounted)return!0;var a,i=m(e||t.params.el);return!!(e=i[0])&&(e.swiper=t,e&&e.shadowRoot&&e.shadowRoot.querySelector?(a=m(e.shadowRoot.querySelector("."+t.params.wrapperClass))).children=function(e){return i.children(e)}:a=i.children("."+t.params.wrapperClass),C(t,{$el:i,el:e,$wrapperEl:a,wrapperEl:a[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===a.css("display")}),!0)},r.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},r.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a,i=this,s=i.params,r=i.$el,n=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,a=i,Object.keys(a).forEach((function(e){try{a[e]=null}catch(e){}try{delete a[e]}catch(e){}}))),i.destroyed=!0),null},t.extendDefaults=function(e){C(W,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var a=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[a]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},a=t,s=[{key:"extendedDefaults",get:function(){return W}},{key:"defaults",get:function(){return R}}],(i=null)&&e(a.prototype,i),s&&e(a,s),t}();Object.keys(V).forEach((function(e){Object.keys(V[e]).forEach((function(t){F.prototype[t]=V[e][t]}))})),F.use([$,O]);var _={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+l,b=Math.floor(i/2)+s+o):(g=i+(s-1)+l,b=s+o);var y=Math.max((w||0)-b,0),E=Math.min((w||0)+g,u.length-1),x=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(C(t.virtual,{from:y,to:E,offset:x,slidesGrid:t.slidesGrid}),p===y&&c===E&&!e)return t.slidesGrid!==h&&x!==f&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:y,to:E,slides:function(){for(var e=[],t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var S=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=p;z<=c;z+=1)(z<y||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<u.length;P+=1)P>=y&&P<=E&&(void 0===c||e?M.push(P):(P>c&&M.push(P),P<p&&S.push(P)));M.forEach((function(e){t.$wrapperEl.append(v(u[e],e))})),S.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(v(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(a,e,t)):m('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){var t=this;if("object"==typeof e&&"length"in e)for(var a=0;a<e.length;a+=1)e[a]&&t.virtual.slides.push(e[a]);else t.virtual.slides.push(e);t.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach((function(e){var t=n[e],a=t.attr("data-swiper-slide-index");a&&t.attr("data-swiper-slide-index",parseInt(a,10)+1),o[parseInt(e,10)+s]=t})),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},q={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){M(this,{virtual:t({},_,{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};C(e.params,t),C(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},j={handle:function(e){var t=this,a=o(),i=r(),s=t.rtlTranslate,n=e;n.originalEvent&&(n=n.originalEvent);var l=n.keyCode||n.charCode,d=t.params.keyboard.pageUpDown,p=d&&33===l,c=d&&34===l,u=37===l,h=39===l,v=38===l,f=40===l;if(!t.allowSlideNext&&(t.isHorizontal()&&h||t.isVertical()&&f||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&u||t.isVertical()&&v||p))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(p||c||u||h||v||f)){var m=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var g=t.$el,b=g[0].clientWidth,w=g[0].clientHeight,y=a.innerWidth,E=a.innerHeight,x=t.$el.offset();s&&(x.left-=t.$el[0].scrollLeft);for(var T=[[x.left,x.top],[x.left+b,x.top],[x.left,x.top+w],[x.left+b,x.top+w]],S=0;S<T.length;S+=1){var C=T[S];if(C[0]>=0&&C[0]<=y&&C[1]>=0&&C[1]<=E){if(0===C[0]&&0===C[1])continue;m=!0}}if(!m)return}t.isHorizontal()?((p||c||u||h)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((c||h)&&!s||(p||u)&&s)&&t.slideNext(),((p||u)&&!s||(c||h)&&s)&&t.slidePrev()):((p||c||v||f)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(c||f)&&t.slideNext(),(p||v)&&t.slidePrev()),t.emit("keyPress",l)}},enable:function(){var e=this,t=r();e.keyboard.enabled||(m(t).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,t=r();e.keyboard.enabled&&(m(t).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}},U={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){M(this,{keyboard:t({enabled:!1},j)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var K={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return o().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel",a=t in e;if(!a){var i=e.createElement("div");i.setAttribute(t,"return;"),a="function"==typeof i.onwheel}return!a&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(a=e.implementation.hasFeature("Events.wheel","3.0")),a}()?"wheel":"mousewheel"},normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),e.shiftKey&&!i&&(i=s,s=0),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;a.params.cssMode&&t.preventDefault();var s=a.$el;if("container"!==a.params.mousewheel.eventsTarget&&(s=m(a.params.mousewheel.eventsTarget)),!a.mouseEntered&&!s[0].contains(t.target)&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtlTranslate?-1:1,o=K.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=-o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=-o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;i.invert&&(r=-r);var l=a.getTranslate()+r*i.sensitivity;if(l>=a.minTranslate()&&(l=a.minTranslate()),l<=a.maxTranslate()&&(l=a.maxTranslate()),(!!a.params.loop||!(l===a.minTranslate()||l===a.maxTranslate()))&&a.params.nested&&t.stopPropagation(),a.params.freeMode){var d={time:x(),delta:Math.abs(r),direction:Math.sign(r)},p=a.mousewheel.lastEventBeforeSnap,c=p&&d.time<p.time+500&&d.delta<=p.delta&&d.direction===p.direction;if(!c){a.mousewheel.lastEventBeforeSnap=void 0,a.params.loop&&a.loopFix();var u=a.getTranslate()+r*i.sensitivity,h=a.isBeginning,v=a.isEnd;if(u>=a.minTranslate()&&(u=a.minTranslate()),u<=a.maxTranslate()&&(u=a.maxTranslate()),a.setTransition(0),a.setTranslate(u),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!h&&a.isBeginning||!v&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky){clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=void 0;var f=a.mousewheel.recentWheelEvents;f.length>=15&&f.shift();var g=f.length?f[f.length-1]:void 0,b=f[0];if(f.push(d),g&&(d.delta>g.delta||d.direction!==g.direction))f.splice(0);else if(f.length>=15&&d.time-b.time<500&&b.delta-d.delta>=1&&d.delta<=6){var w=r>0?.8:.2;a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.mousewheel.timeout=E((function(){a.slideToClosest(a.params.speed,!0,void 0,w)}),0)}a.mousewheel.timeout||(a.mousewheel.timeout=E((function(){a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.slideToClosest(a.params.speed,!0,void 0,.5)}),500))}if(c||a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),u===a.minTranslate()||u===a.maxTranslate())return!0}}else{var y={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},T=a.mousewheel.recentWheelEvents;T.length>=2&&T.shift();var S=T.length?T[T.length-1]:void 0;if(T.push(y),S?(y.direction!==S.direction||y.delta>S.delta||y.time>S.time+150)&&a.mousewheel.animateSlider(y):a.mousewheel.animateSlider(y),a.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){var t=this,a=o();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-t.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-t.mousewheel.lastScrollTime<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),t.emit("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),t.emit("scroll",e.raw)),t.mousewheel.lastScrollTime=(new a.Date).getTime(),!1)))},releaseScroll:function(e){var t=this,a=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&a.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&a.releaseOnEdges)return!0;return!1},enable:function(){var e=this,t=K.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.on("mouseenter",e.mousewheel.handleMouseEnter),a.on("mouseleave",e.mousewheel.handleMouseLeave),a.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,t=K.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(!e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},Z={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,a=e.navigation.toggleEl;if(!e.params.loop){var i=e.navigation,s=i.$nextEl,r=i.$prevEl;r&&r.length>0&&(e.isBeginning?a(r,!0):a(r,!1),r[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),s&&s.length>0&&(e.isEnd?a(s,!0):a(s,!1),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",a.navigation.onNextClick),t&&t.length>0&&t.on("click",a.navigation.onPrevClick),C(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},J={update:function(){var e=this,t=e.rtl,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,n=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(i-=s-2*e.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==e.params.paginationType&&(i=n+i)):i=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===a.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var o,l,d,p=e.pagination.bullets;if(a.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(a.dynamicMainBullets+4)+"px"),a.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>a.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=a.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=i-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,a.dynamicMainBullets)-1))+o)/2),p.removeClass(a.bulletActiveClass+" "+a.bulletActiveClass+"-next "+a.bulletActiveClass+"-next-next "+a.bulletActiveClass+"-prev "+a.bulletActiveClass+"-prev-prev "+a.bulletActiveClass+"-main"),r.length>1)p.each((function(e){var t=m(e),s=t.index();s===i&&t.addClass(a.bulletActiveClass),a.dynamicBullets&&(s>=o&&s<=l&&t.addClass(a.bulletActiveClass+"-main"),s===o&&t.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),s===l&&t.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next"))}));else{var c=p.eq(i),u=c.index();if(c.addClass(a.bulletActiveClass),a.dynamicBullets){for(var h=p.eq(o),v=p.eq(l),f=o;f<=l;f+=1)p.eq(f).addClass(a.bulletActiveClass+"-main");if(e.params.loop)if(u>=p.length-a.dynamicMainBullets){for(var g=a.dynamicMainBullets;g>=0;g-=1)p.eq(p.length-g).addClass(a.bulletActiveClass+"-main");p.eq(p.length-a.dynamicMainBullets-1).addClass(a.bulletActiveClass+"-prev")}else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next");else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next")}}if(a.dynamicBullets){var b=Math.min(p.length,a.dynamicMainBullets+4),w=(e.pagination.bulletSize*b-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,y=t?"right":"left";p.css(e.isHorizontal()?y:"top",w+"px")}}if("fraction"===a.type&&(r.find(z(a.currentClass)).text(a.formatFractionCurrent(i+1)),r.find(z(a.totalClass)).text(a.formatFractionTotal(n))),"progressbar"===a.type){var E;E=a.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,S=1;"horizontal"===E?T=x:S=x,r.find(z(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+S+")").transition(e.params.speed)}"custom"===a.type&&a.renderCustom?(r.html(a.renderCustom(e,i+1,n)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),r[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](a.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&r>a&&(r=a);for(var n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find(z(t.bulletClass))}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var a=m(t.el);0!==a.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&a.length>1&&(a=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&a.addClass(t.clickableClass),a.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(a.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&a.addClass(t.progressbarOppositeClass),t.clickable&&a.on("click",z(t.bulletClass),(function(t){t.preventDefault();var a=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(a+=e.loopedSlides),e.slideTo(a)})),C(e.pagination,{$el:a,el:a[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click",z(t.bulletClass))}}},Q={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?(p=-p)>0?(d=s-p,p=0):-p+s>r&&(d=r+p):p<0?(d=s+p,p=0):p+s>r&&(d=r-p),e.isHorizontal()?(n.transform("translate3d("+p+"px, 0, 0)"),n[0].style.width=d+"px"):(n.transform("translate3d(0px, "+p+"px, 0)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout((function(){o[0].style.opacity=0,o.transition(400)}),1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),C(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize,l=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==l?l:n/2))/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),s.transition("")),a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=E((function(){r.css("opacity",0),r.transition(400)}),1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,o=e.support,l=a.$el[0],d=!(!o.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!o.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};l&&(o.touch?(l.addEventListener(i.start,e.scrollbar.onDragStart,d),l.addEventListener(i.move,e.scrollbar.onDragMove,d),l.addEventListener(i.end,e.scrollbar.onDragEnd,p)):(l.addEventListener(s.start,e.scrollbar.onDragStart,d),t.addEventListener(s.move,e.scrollbar.onDragMove,d),t.addEventListener(s.end,e.scrollbar.onDragEnd,p)))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,o=e.support,l=a.$el[0],d=!(!o.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!o.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};l&&(o.touch?(l.removeEventListener(i.start,e.scrollbar.onDragStart,d),l.removeEventListener(i.move,e.scrollbar.onDragMove,d),l.removeEventListener(i.end,e.scrollbar.onDragEnd,p)):(l.removeEventListener(s.start,e.scrollbar.onDragStart,d),t.removeEventListener(s.move,e.scrollbar.onDragMove,d),t.removeEventListener(s.end,e.scrollbar.onDragEnd,p)))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=m(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=m('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),C(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ee={setTransform:function(e,t){var a=this.rtl,i=m(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*s+"%":n*t*s+"px",o=o.indexOf("%")>=0?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,a=e.slides,i=e.progress,s=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,i)})),a.each((function(t,a){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(a/2)-i*(s.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var a=m(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),a.transition(i)}))}},te={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!a.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=te.getDistanceBetweenTouches(e)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=m(e.target).closest("."+t.params.slideClass),0===r.$slideEl.length&&(r.$slideEl=t.slides.eq(t.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl&&r.$imageEl.transition(0),t.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(!a.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,r.scaleMove=te.getDistanceBetweenTouches(e)}r.$imageEl&&0!==r.$imageEl.length?(a.gestures?s.scale=e.scale*s.currentScale:s.scale=r.scaleMove/r.scaleStart*s.currentScale,s.scale>r.maxRatio&&(s.scale=r.maxRatio-1+Math.pow(s.scale-r.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),r.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this,a=t.device,i=t.support,s=t.params.zoom,r=t.zoom,n=r.gesture;if(!i.gestures){if(!r.fakeGestureTouched||!r.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!a.android)return;r.fakeGestureTouched=!1,r.fakeGestureMoved=!1}n.$imageEl&&0!==n.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,n.maxRatio),s.minRatio),n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+r.scale+")"),r.currentScale=r.scale,r.isScaling=!1,1===r.scale&&(n.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,a=this.zoom,i=a.gesture,s=a.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(t.android&&e.cancelable&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl&&a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl&&a.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,t.currentScale=1,a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,l,d,p,c,u,h,v,f,m,g,b=this,w=o(),y=b.zoom,E=b.params.zoom,x=y.gesture,T=y.image;(x.$slideEl||(b.params.virtual&&b.params.virtual.enabled&&b.virtual?x.$slideEl=b.$wrapperEl.children("."+b.params.slideActiveClass):x.$slideEl=b.slides.eq(b.activeIndex),x.$imageEl=x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),x.$imageWrapEl=x.$imageEl.parent("."+E.containerClass)),x.$imageEl&&0!==x.$imageEl.length)&&(x.$slideEl.addClass(""+E.zoomedSlideClass),void 0===T.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=T.touchesStart.x,a=T.touchesStart.y),y.scale=x.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,y.currentScale=x.$imageWrapEl.attr("data-swiper-zoom")||E.maxRatio,e?(m=x.$slideEl[0].offsetWidth,g=x.$slideEl[0].offsetHeight,i=x.$slideEl.offset().left+w.scrollX+m/2-t,s=x.$slideEl.offset().top+w.scrollY+g/2-a,l=x.$imageEl[0].offsetWidth,d=x.$imageEl[0].offsetHeight,p=l*y.scale,c=d*y.scale,v=-(u=Math.min(m/2-p/2,0)),f=-(h=Math.min(g/2-c/2,0)),(r=i*y.scale)<u&&(r=u),r>v&&(r=v),(n=s*y.scale)<h&&(n=h),n>f&&(n=f)):(r=0,n=0),x.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),x.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+y.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?i.$slideEl=e.$wrapperEl.children("."+e.params.slideActiveClass):i.$slideEl=e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this,a=t.zoom,i=a.slideSelector,s=a.passiveListener;t.$wrapperEl[e]("gesturestart",i,a.onGestureStart,s),t.$wrapperEl[e]("gesturechange",i,a.onGestureChange,s),t.$wrapperEl[e]("gestureend",i,a.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this,t=e.support,a=e.zoom;if(!a.enabled){a.enabled=!0;var i=!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;e.zoom.passiveListener=i,e.zoom.slideSelector=r,t.gestures?(e.$wrapperEl.on(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.on(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,a.onGestureStart,i),e.$wrapperEl.on(e.touchEvents.move,r,a.onGestureChange,s),e.$wrapperEl.on(e.touchEvents.end,r,a.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,a.onGestureEnd,i)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,a.onTouchMove,s)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){var a=e.support;e.zoom.enabled=!1;var i=!("touchstart"!==e.touchEvents.start||!a.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!a.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;a.gestures?(e.$wrapperEl.off(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.off(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,t.onGestureStart,i),e.$wrapperEl.off(e.touchEvents.move,r,t.onGestureChange,s),e.$wrapperEl.off(e.touchEvents.end,r,t.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,t.onGestureEnd,i)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove,s)}}},ae={loadInSlide:function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.lazy;if(void 0!==e&&0!==a.slides.length){var s=a.virtual&&a.params.virtual.enabled?a.$wrapperEl.children("."+a.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):a.slides.eq(e),r=s.find("."+i.elementClass+":not(."+i.loadedClass+"):not(."+i.loadingClass+")");!s.hasClass(i.elementClass)||s.hasClass(i.loadedClass)||s.hasClass(i.loadingClass)||r.push(s[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(i.loadingClass);var n=r.attr("data-background"),o=r.attr("data-src"),l=r.attr("data-srcset"),d=r.attr("data-sizes"),p=r.parent("picture");a.loadImage(r[0],o||n,l,d,!1,(function(){if(null!=a&&a&&(!a||a.params)&&!a.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(l&&(r.attr("srcset",l),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),p.length&&p.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),o&&(r.attr("src",o),r.removeAttr("data-src"))),r.addClass(i.loadedClass).removeClass(i.loadingClass),s.find("."+i.preloaderClass).remove(),a.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(a.params.slideDuplicateClass)){var c=a.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+a.params.slideDuplicateClass+")");a.lazy.loadInSlide(c.index(),!1)}else{var u=a.$wrapperEl.children("."+a.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');a.lazy.loadInSlide(u.index(),!1)}}a.emit("lazyImageReady",s[0],r[0]),a.params.autoHeight&&a.updateAutoHeight()}})),a.emit("lazyImageLoad",s[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides,s=e.activeIndex,r=e.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(i[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===o&&(o=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each((function(t){var a=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(a)}));else if(o>1)for(var p=s;p<s+o;p+=1)l(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(s);if(n.loadPrevNext)if(o>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(s+u+Math.max(c,u),i.length),v=Math.max(s-Math.max(u,c),0),f=s+o;f<h;f+=1)l(f)&&e.lazy.loadInSlide(f);for(var g=v;g<s;g+=1)l(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+a.slideNextClass);b.length>0&&e.lazy.loadInSlide(d(b));var w=t.children("."+a.slidePrevClass);w.length>0&&e.lazy.loadInSlide(d(w))}},checkInViewOnLoad:function(){var e=o(),t=this;if(t&&!t.destroyed){var a=t.params.lazy.scrollingElement?m(t.params.lazy.scrollingElement):m(e),i=a[0]===e,s=i?e.innerWidth:a[0].offsetWidth,r=i?e.innerHeight:a[0].offsetHeight,n=t.$el.offset(),l=!1;t.rtlTranslate&&(n.left-=t.$el[0].scrollLeft);for(var d=[[n.left,n.top],[n.left+t.width,n.top],[n.left,n.top+t.height],[n.left+t.width,n.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];if(c[0]>=0&&c[0]<=s&&c[1]>=0&&c[1]<=r){if(0===c[0]&&0===c[1])continue;l=!0}}l?(t.lazy.load(),a.off("scroll",t.lazy.checkInViewOnLoad)):t.lazy.scrollHandlerAttached||(t.lazy.scrollHandlerAttached=!0,a.on("scroll",t.lazy.checkInViewOnLoad))}}},ie={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;a-i>1;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new ie.LinearSpline(t.slidesGrid,e.slidesGrid):new ie.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control,n=s.constructor;function o(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var l=0;l<r.length;l+=1)r[l]!==t&&r[l]instanceof n&&o(r[l]);else r instanceof n&&t!==r&&o(r)},setTransition:function(e,t){var a,i=this,s=i.constructor,r=i.controller.control;function n(t){t.setTransition(e,i),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===i.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(a=0;a<r.length;a+=1)r[a]!==t&&r[a]instanceof s&&n(r[a]);else r instanceof s&&t!==r&&n(r)}},se={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-roledescription",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterOrSpaceKey:function(e){if(13===e.keyCode||32===e.keyCode){var t=this,a=t.params.a11y,i=m(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is(z(t.params.pagination.bulletClass))&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop&&e.navigation){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?(e.a11y.disableEl(i),e.a11y.makeElNotFocusable(i)):(e.a11y.enableEl(i),e.a11y.makeElFocusable(i))),a&&a.length>0&&(e.isEnd?(e.a11y.disableEl(a),e.a11y.makeElNotFocusable(a)):(e.a11y.enableEl(a),e.a11y.makeElFocusable(a)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(a){var i=m(a);e.a11y.makeElFocusable(i),e.params.pagination.renderBullet||(e.a11y.addElRole(i,"button"),e.a11y.addElLabel(i,t.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var a=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(a,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(a,t.containerMessage);var i,s,r,n=e.$wrapperEl,o=n.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16);e.a11y.addElId(n,o),i=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite",e.a11y.addElLive(n,i),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),t.slideRole),e.slides.each((function(a){var i=m(a),s=t.slideLabelMessage.replace(/\{\{index\}\}/,i.index()+1).replace(/\{\{slidesLength\}\}/,e.slides.length);e.a11y.addElLabel(i,s)})),e.navigation&&e.navigation.$nextEl&&(s=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(r=e.navigation.$prevEl),s&&s.length&&(e.a11y.makeElFocusable(s),"BUTTON"!==s[0].tagName&&(e.a11y.addElRole(s,"button"),s.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(s,t.nextSlideMessage),e.a11y.addElControls(s,o)),r&&r.length&&(e.a11y.makeElFocusable(r),"BUTTON"!==r[0].tagName&&(e.a11y.addElRole(r,"button"),r.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(r,t.prevSlideMessage),e.a11y.addElControls(r,o)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown",z(e.params.pagination.bulletClass),e.a11y.onEnterOrSpaceKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&a.a11y.liveRegion.length>0&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterOrSpaceKey),t&&t.off("keydown",a.a11y.onEnterOrSpaceKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown",z(a.params.pagination.bulletClass),a.a11y.onEnterOrSpaceKey)}},re={init:function(){var e=this,t=o();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var a=e.history;a.initialized=!0,a.paths=re.getPathValues(e.params.url),(a.paths.key||a.paths.value)&&(a.scrollToSlide(0,a.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=o();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=re.getPathValues(e.params.url),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(e){var t=o(),a=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),i=a.length;return{key:a[i-2],value:a[i-1]}},setHistory:function(e,t){var a=this,i=o();if(a.history.initialized&&a.params.history.enabled){var s;s=a.params.url?new URL(a.params.url):i.location;var r=a.slides.eq(t),n=re.slugify(r.attr("data-history"));if(a.params.history.root.length>0){var l=a.params.history.root;"/"===l[l.length-1]&&(l=l.slice(0,l.length-1)),n=l+"/"+e+"/"+n}else s.pathname.includes(e)||(n=e+"/"+n);var d=i.history.state;d&&d.value===n||(a.params.history.replaceState?i.history.replaceState({value:n},null,n):i.history.pushState({value:n},null,n))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(re.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ne={onHashCange:function(){var e=this,t=r();e.emit("hashChange");var a=t.location.hash.replace("#","");if(a!==e.slides.eq(e.activeIndex).attr("data-hash")){var i=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+a+'"]').index();if(void 0===i)return;e.slideTo(i)}},setHash:function(){var e=this,t=o(),a=r();if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||""),e.emit("hashSet");else{var i=e.slides.eq(e.activeIndex),s=i.attr("data-hash")||i.attr("data-history");a.location.hash=s||"",e.emit("hashSet")}},init:function(){var e=this,t=r(),a=o();if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var i=t.location.hash.replace("#","");if(i)for(var s=0,n=e.slides.length;s<n;s+=1){var l=e.slides.eq(s);if((l.attr("data-hash")||l.attr("data-history"))===i&&!l.hasClass(e.params.slideDuplicateClass)){var d=l.index();e.slideTo(d,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&m(a).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){var e=o();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashCange)}},oe={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=r();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}},le={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd((function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}}))}}},de={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.browser,p=t.params.cubeEffect,c=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled,h=0;p.shadow&&(c?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var v=0;v<s.length;v+=1){var f=s.eq(v),g=v;u&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,w=Math.floor(b/360);o&&(b=-b,w=Math.floor(-b/360));var y=Math.max(Math.min(f[0].progress,1),-1),E=0,x=0,T=0;g%4==0?(E=4*-w*l,T=0):(g-1)%4==0?(E=0,T=4*-w*l):(g-2)%4==0?(E=l+4*w*l,T=l):(g-3)%4==0&&(E=-l,T=3*l+4*l*w),o&&(E=-E),c||(x=E,E=0);var S="rotateX("+(c?0:-b)+"deg) rotateY("+(c?b:0)+"deg) translate3d("+E+"px, "+x+"px, "+T+"px)";if(y<=1&&y>-1&&(h=90*g+90*y,o&&(h=90*-g-90*y)),f.transform(S),p.slideShadows){var C=c?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=c?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=Math.max(-y,0)),M.length&&(M[0].style.opacity=Math.max(y,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),p.shadow)if(c)e.transform("translate3d(0px, "+(r/2+p.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,L=p.shadowScale/P,$=p.shadowOffset;e.transform("scale3d("+k+", 1, "+L+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/L+"px) rotateX(-90deg)")}var I=d.isSafari||d.isWebView?-l/2:0;i.transform("translate3d(0px,0,"+I+"px) rotateX("+(t.isHorizontal()?0:h)+"deg) rotateY("+(t.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},pe={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,l=0,o=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}}))}}},ce={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.slidesSizesGrid,r=e.params.coverflowEffect,n=e.isHorizontal(),o=e.translate,l=n?t/2-o:a/2-o,d=n?r.rotate:-r.rotate,p=r.depth,c=0,u=i.length;c<u;c+=1){var h=i.eq(c),v=s[c],f=(l-h[0].swiperSlideOffset-v/2)/v*r.modifier,g=n?d*f:0,b=n?0:d*f,w=-p*Math.abs(f),y=r.stretch;"string"==typeof y&&-1!==y.indexOf("%")&&(y=parseFloat(r.stretch)/100*v);var E=n?0:y*f,x=n?y*f:0,T=1-(1-r.scale)*Math.abs(f);Math.abs(x)<.001&&(x=0),Math.abs(E)<.001&&(E=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0),Math.abs(T)<.001&&(T=0);var S="translate3d("+x+"px,"+E+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg) scale("+T+")";if(h.transform(S),h[0].style.zIndex=1-Math.abs(Math.round(f)),r.slideShadows){var C=n?h.find(".swiper-slide-shadow-left"):h.find(".swiper-slide-shadow-top"),M=n?h.find(".swiper-slide-shadow-right"):h.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(n?"left":"top")+'"></div>'),h.append(C)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(n?"right":"bottom")+'"></div>'),h.append(M)),C.length&&(C[0].style.opacity=f>0?f:0),M.length&&(M[0].style.opacity=-f>0?-f:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ue={init:function(){var e=this,t=e.params.thumbs;if(e.thumbs.initialized)return!1;e.thumbs.initialized=!0;var a=e.constructor;return t.swiper instanceof a?(e.thumbs.swiper=t.swiper,C(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),C(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):S(t.swiper)&&(e.thumbs.swiper=new a(C({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&m(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView,s=t.params.thumbs.autoScrollOffset,r=s&&!a.params.loop;if(t.realIndex!==a.realIndex||r){var n,o,l=a.activeIndex;if(a.params.loop){a.slides.eq(l).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,l=a.activeIndex);var d=a.slides.eq(l).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),p=a.slides.eq(l).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();n=void 0===d?p:void 0===p?d:p-l==l-d?l:p-l<l-d?p:d,o=t.activeIndex>t.previousIndex?"next":"prev"}else o=(n=t.realIndex)>t.previousIndex?"next":"prev";r&&(n+="next"===o?s:-1*s),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(n)<0&&(a.params.centeredSlides?n=n>l?n-Math.floor(i/2)+1:n+Math.floor(i/2)-1:n>l&&(n=n-i+1),a.slideTo(n,e?0:void 0))}var c=1,u=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(c=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),a.slides.removeClass(u),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(var h=0;h<c;h+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+h)+'"]').addClass(u);else for(var v=0;v<c;v+=1)a.slides.eq(t.realIndex+v).addClass(u)}}},he=[q,U,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){M(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:K.enable,disable:K.disable,handle:K.handle,handleMouseEnter:K.handleMouseEnter,handleMouseLeave:K.handleMouseLeave,animateSlider:K.animateSlider,releaseScroll:K.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){M(this,{navigation:t({},Z)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},click:function(e,t){var a=e.navigation,i=a.$nextEl,s=a.$prevEl,r=t.target;if(e.params.navigation.hideOnClick&&!m(r).is(s)&&!m(r).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;var n;i?n=i.hasClass(e.params.navigation.hiddenClass):s&&(n=s.hasClass(e.params.navigation.hiddenClass)),!0===n?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),s&&s.toggleClass(e.params.navigation.hiddenClass)}}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){M(this,{pagination:t({dynamicBulletIndex:0},J)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,t){var a=t.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(a).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&a===e.navigation.nextEl||e.navigation.prevEl&&a===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){M(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},Q)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){M(this,{parallax:t({},ee)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;M(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},te)});var a=1;Object.defineProperty(e.zoom,"scale",{get:function(){return a},set:function(t){if(a!==t){var i=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,s=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,i,s)}a=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){M(this,{lazy:t({initialImageLoaded:!1},ae)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&(e.params.lazy.checkInView?e.lazy.checkInViewOnLoad():e.lazy.load())},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},"scrollbarDragMove resize _freeModeNoMomentumRelease":function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){M(this,{controller:t({control:this.params.controller.control},ie)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,a){e.controller.control&&e.controller.setTranslate(t,a)},setTransition:function(e,t,a){e.controller.control&&e.controller.setTransition(t,a)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}},create:function(){M(this,{a11y:t({},se,{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,root:"",replaceState:!1,key:"slides"}},create:function(){M(this,{history:t({},re)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},transitionEnd:function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){M(this,{hashNavigation:t({initialized:!1},ne)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){M(this,{autoplay:t({},oe,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t,a){e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){M(this,{fadeEffect:t({},le)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};C(e.params,t),C(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){M(this,{cubeEffect:t({},de)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};C(e.params,t),C(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){M(this,{flipEffect:t({},pe)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};C(e.params,t),C(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){M(this,{coverflowEffect:t({},ce)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){M(this,{thumbs:t({swiper:null,initialized:!1},ue)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var a=e.thumbs.swiper;a&&a.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return F.use(he),F}));
/*! Magnific Popup - v1.1.0  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
;!function(t){function e(t,e){return"function"==typeof t?t.call(e):t}function i(e,i){this.$element=t(e),this.options=i,this.enabled=!0}i.prototype={show:function(){var i=this.getTitle();if(i&&this.enabled){var s=this.tip();s.find(".tipsy-inner")[this.options.html?"html":"text"](i),s[0].className="tipsy",s.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var n,o=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),a=s[0].offsetWidth,l=s[0].offsetHeight,r=this.getGravity();switch(r.charAt(0)){case"n":n={top:o.top+o.height+this.options.offset,left:o.left+o.width/2-a/2};break;case"s":n={top:o.top-l-this.options.offset,left:o.left+o.width/2-a/2};break;case"e":n={top:o.top+o.height/2-l/2,left:o.left-a-this.options.offset};break;case"w":n={top:o.top+o.height/2-l/2,left:o.left+o.width+this.options.offset}}2==r.length&&("w"==r.charAt(1)?n.left=o.left+o.width/2-15:n.left=o.left+o.width/2-a+15),s.css(n).addClass("tipsy-"+r),s.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+r.charAt(0),this.options.className&&s.addClass(e(this.options.className,this.$element[0])),this.options.fade?s.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):s.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title")},getTitle:function(){var t,e=this.$element,i=this.options;return"string"==typeof(i=this.options).title?t=e.attr("title"==i.title?"original-title":i.title):"function"==typeof i.title&&(t=i.title.call(e[0])),(t=(""+t).replace(/(^\s*|\s*$)/,""))||i.fallback},getGravity:function(){this.$element,this.options;return this.$element.data("gravity")?this.$element.data("gravity"):e(this.options.gravity,this.$element[0])},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),this.$tip.data("tipsy-pointee",this.$element[0])),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.rbTipsy=function(e){if(!0===e)return this.data("tipsy");if("string"==typeof e){var s=this.data("tipsy");return s&&s[e](),this}function n(s){var n=t.data(s,"tipsy");return n||(n=new i(s,t.fn.rbTipsy.elementOptions(s,e)),t.data(s,"tipsy",n)),n}if((e=t.extend({},t.fn.rbTipsy.defaults,e)).live||this.each(function(){n(this)}),"manual"!=e.trigger){var o=e.live?"live":"bind",a="hover"==e.trigger?"mouseenter":"focus",l="hover"==e.trigger?"mouseleave":"blur";this[o](a,function(){var t=n(this);t.hoverState="in",0==e.delayIn?t.show():setTimeout(function(){"in"==t.hoverState&&t.show()},e.delayIn)})[o](l,function(){var t=n(this);t.hoverState="out",0==e.delayOut?t.hide():setTimeout(function(){"out"==t.hoverState&&t.hide()},e.delayOut)})}return this},t.fn.rbTipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover"},t.fn.rbTipsy.revalidate=function(){t(".tipsy").each(function(){var e=t.data(this,"tipsy-pointee");e&&function(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}(e)||t(this).remove()})},t.fn.rbTipsy.elementOptions=function(e,i){return t.metadata?t.extend({},i,t(e).metadata()):i},t.fn.rbTipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.rbTipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.rbTipsy.autoBounds=function(e,i){return function(){var s={ns:i[0],ew:i.length>1&&i[1]},n=t(document).scrollTop()+e,o=t(document).scrollLeft()+e,a=t(this);return a.offset().top<n&&(s.ns="n"),a.offset().left<o&&(s.ew="w"),t(window).width()+t(document).scrollLeft()-a.offset().left<e&&(s.ew="e"),t(window).height()+t(document).scrollTop()-a.offset().top<e&&(s.ns="s"),s.ns+(s.ew?s.ew:"")}}}(jQuery);
!function(o){o.fn.UItoTop=function(n){var t=!1,i=o.extend({text:"Back to Top",min:300,containerID:"back-top"},n),e="#"+i.containerID;!(window.innerWidth<1024&&o("body").hasClass("none-m-backtop"))&&(o("body").append('<a href="#top" id="'+i.containerID+'">'+i.text+"</a>"),o(e).on("click.UItoTop",function(){return window.scrollTo({top:0,behavior:"smooth"}),o(e).removeClass("scroll-btn-visible"),!1}),o(window).on("scroll",function(){var n=o(window).scrollTop();n>i.min&&!t?(o(e).addClass("scroll-btn-visible"),t=!0):n<=i.min&&(o(e).removeClass("scroll-btn-visible"),t=!1)}))}}(jQuery);
var FOXIZ_MAIN_SCRIPTS=(function(Module,$){'use strict';Module.initParams=function(){Module.body=$('body');Module.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);Module.document=$(document);Module.html=$('html, body');Module.outerHTML=$('html');Module.window=$(window);Module.ajaxData={};Module.themeSettings=foxizParams;Module.wPoint={};Module.sticky={};Module.eSticky={};Module.YTPlayers={};Module.articleData=[];Module.iframeAPIFlag=false;Module.bookmarkProgressing=false;Module.followProgressing=false;Module.readIndicator=$('#reading-progress');Module.readIndicatorPercent=0;Module.bookmarkData={}
Module.siteAccessFlag=false;}
Module.init=function(){this.initParams();this.syncBookmark();this.myBookmarks();this.topSpacing();this.siteAccessDetector();this.headerDropdown();this.mobileCollapse();this.privacyTrigger();this.popupNewsletter();this.backTop();this.paginationInfinite();this.loadYoutubeIframe();this.singleInfiniteLoadNext();this.readIndicatorInit();this.fontResizer();this.sliders();this.carousels();this.breakingNews();this.liveSearch();this.browserResize();this.initSubMenuPos();this.documentClick();this.footerSlideUp();this.documentReload();this.initAjaxBlocks();this.delayLoad();}
Module.documentReload=function(){this.followToggle();this.bookmarkToggle();this.loginPopup();this.hoverTipsy();this.paginationNextPrev();this.paginationLoadMore();this.showPostComment();this.scrollToComment();this.replyReview();this.usersRating();this.singleGallery();this.floatingVideo();this.videoPreview();this.floatingVideoRemove();this.scrollTableContent();this.singleScrollRefresh();this.productQuantity();this.playerAutoPlay();this.tocToggle();this.hoverEffects();this.highlightShares();this.galleryLightbox();this.singleFeaturedLightbox();}
Module.reInitAll=function(){this.html.off();this.window.trigger('load');this.refreshBookmarks();this.documentReload();}
Module.reInitPagination=function(){this.html.off();this.window.trigger('load');this.refreshBookmarks();this.paginationNextPrev();this.paginationLoadMore();this.paginationInfinite();this.bookmarkToggle();this.videoPreview();this.hoverTipsy();}
Module.initElementor=function(){if('undefined'!==typeof initDarkMode&&!FOXIZ_MAIN_SCRIPTS.editorDarkModeInit){FOXIZ_MAIN_SCRIPTS.editorDarkModeInit=true;initDarkMode();}
FOXIZ_MAIN_SCRIPTS.breakingNews();FOXIZ_MAIN_SCRIPTS.carousels();FOXIZ_MAIN_SCRIPTS.sliders();}
Module.isRTL=function(){return this.body.hasClass('rtl');}
Module.animationFrame=function(callback){var func=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||this.animationFrameFallback
func.call(window,callback)}
Module.animationFrameFallback=function(callback){window.setTimeout(callback,1000/60)}
Module.delayLoad=function(){var self=this;setTimeout(function(){self.stickyNavBar();self.stickyHeaderBuilder();},100)}
Module.browserResize=function(){var self=this;self.window.on('resize',function(){self.topSpacing();self.calcSubMenuPos();})}
Module.hoverTipsy=function(){if(typeof $.fn.rbTipsy==='undefined'){return false;}
this.body.find('[data-copy]').rbTipsy({title:'data-copy',fade:true,opacity:1,trigger:'hover',gravity:'n'});if(window.innerWidth>1024){this.body.find('[data-title]').rbTipsy({title:'data-title',fade:true,opacity:1,trigger:'hover',gravity:'n'});}}
Module.fontResizer=function(){var self=this;var size;if(navigator.cookieEnabled){size=sessionStorage.getItem('rubyResizerStep');}
if(!size){size=1;}
$('.font-resizer-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();size++;if(3<size){size=1;self.body.removeClass('medium-entry-size big-entry-size')}else{if(2==size){self.body.addClass('medium-entry-size').removeClass('big-entry-size');}else{self.body.addClass('big-entry-size').removeClass('medium-entry-size')}}
if(navigator.cookieEnabled){sessionStorage.setItem('rubyResizerStep',size);}});}
Module.hoverEffects=function(){var selectors=$('.effect-fadeout');if(selectors.length>0){selectors.off('mouseenter mouseleave').on('mouseenter',function(e){e.stopPropagation();var target=$(this);if(!target.hasClass('activated')){target.addClass('activated');}}).on('mouseleave',function(){$(this).removeClass('activated');});}}
Module.videoPreview=function(){var playPromise;$('.preview-trigger').on('mouseenter',function(e){var target=$(this);var wrap=target.find('.preview-video');if(!wrap.hasClass('video-added')){var video='<video preload="auto" muted loop><source src="'+wrap.data('source')+'" type="'+wrap.data('type')+'"></video>';wrap.append(video).addClass('video-added');}
target.addClass('show-preview');wrap.css('z-index',3);var el=target.find('video')[0];if(el){playPromise=el.play();}}).on('mouseleave',function(){var target=$(this);target.find('.preview-video').css('z-index',1);var el=target.find('video')[0];if(el&&playPromise!==undefined){playPromise.then(_=>{el.pause();}).catch(error=>{});}});}
Module.playerAutoPlay=function(){var self=this;var items=$('.is-autoplay');var nonResIframe=$('.entry-content > iframe');if(items!=null&&items.length>0){items.each(function(){var el=$(this);if(!el.hasClass('is-loaded')){self.wPoint['iframe']=new Waypoint({element:el,handler:function(){var iframe=el.find('iframe');self.initAutoPlay(iframe);el.addClass('is-loaded');this.destroy();},offset:'60%'});}})}
if(nonResIframe!=null&&nonResIframe.length>0){nonResIframe.each(function(){var el=$(this);if(!el.hasClass('is-loaded')){var iURL=el.attr('src');if(iURL.indexOf('youtube.com')>0||iURL.indexOf('youtu.be')>0||iURL.indexOf('vimeo.com')>0){el.wrap('<div class="rb-ires is-loaded"></div>');}}})}}
Module.initAutoPlay=function(item){if(item.length>0&&undefined!==item[0]){var src=item[0].src;if(src.indexOf('?')>-1){item[0].src+="&autoplay=1";}else{item[0].src+="?autoplay=1";}}}
Module.tocToggle=function(){$('.ruby-toc-toggle').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var content=target.parents('.ruby-table-contents').find('.inner');target.toggleClass('activate');content.toggle('250');})}
Module.headerDropdown=function(){var self=this;$('.more-trigger').on('click',function(e){self.calcSubMenuPos();e.preventDefault();e.stopPropagation();var target=$(this);var holder=target.parents('.header-wrap').find('.more-section-outer');if(!holder.hasClass('dropdown-activated')){self.body.find('.dropdown-activated').removeClass('dropdown-activated');holder.addClass('dropdown-activated');}else{holder.removeClass('dropdown-activated');}
if(target.hasClass('search-btn')){setTimeout(function(){holder.find('input[type="text"]').focus()},50);}
return false;});$('.search-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();var holder=$(this).parent('.header-dropdown-outer');if(!holder.hasClass('dropdown-activated')){self.body.find('.dropdown-activated').removeClass('dropdown-activated');holder.addClass('dropdown-activated');setTimeout(function(){holder.find('input[type="text"]').focus()},50);}else{holder.removeClass('dropdown-activated');}
return false;});$('.dropdown-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();var holder=$(this).parent('.header-dropdown-outer');if(!holder.hasClass('dropdown-activated')){self.body.find('.dropdown-activated').removeClass('dropdown-activated');holder.addClass('dropdown-activated');}else{holder.removeClass('dropdown-activated');}});}
Module.topSpacing=function(){var self=this;if(self.body.hasClass('top-spacing')){var height=$('.top-site-ad').outerHeight();$('.site-outer').css('margin-top',height);}}
Module.documentClick=function(){var self=this;var wrapper=$('.more-section-outer, .header-dropdown-outer, .mobile-collapse, .mfp-wrap');var fullSearch=$('.logo-sec-right .live-search-form-outer');document.addEventListener('click',function(e){if(!wrapper.is(e.target)&&wrapper.has(e.target).length===0){wrapper.removeClass('dropdown-activated');self.outerHTML.removeClass('collapse-activated');}
if(!fullSearch.is(e.target)&&fullSearch.has(e.target).length===0){fullSearch.find('.live-search-response').fadeOut(500);}});}
Module.initSubMenuPos=function(){var self=this;var trigger=false;setTimeout(function(){self.calcSubMenuPos();},1000);$('.menu-has-child-mega').on('mouseenter',function(e){if(!trigger){self.calcSubMenuPos();}
trigger=true;})}
Module.calcSubMenuPos=function(){if(window.outerWidth<1024){return false;}
var self=this;var megaParents=$('.menu-has-child-mega');var headerWrapper=$('#site-header');if(megaParents.length>0){megaParents.each(function(){var item=$(this);item.find('.mega-dropdown').css({'width':self.body.width(),'left':-item.offset().left,});item.addClass('mega-menu-loaded')})}
if(headerWrapper.length>0){var headerLeftOffset=headerWrapper.offset().left;var headerWidth=headerWrapper.width();var headerRightOffset=headerLeftOffset+headerWidth;var flexDropdown=$('.flex-dropdown');var subElements=$('ul.sub-menu');if(subElements.length>0){subElements.each(function(){var item=$(this);var itemLeftOffset=item.offset().left;var itemRightOffset=itemLeftOffset+item.width()+100;if(itemRightOffset>headerRightOffset){item.addClass('left-direction');}})}
if(flexDropdown.length>0){flexDropdown.each(function(){var item=$(this);var parentItem=item.parent();if(parentItem.hasClass('is-child-wide')||item.hasClass('mega-has-left')){return;}
var itemWidth=item.width();var itemHalfWidth=itemWidth/2;var parentItemOffset=parentItem.offset().left;var parentHalfWidth=parentItem.width()/2;var parentItemCenterOffset=parentItemOffset+parentHalfWidth;var rightSpacing=headerRightOffset-parentItemCenterOffset;var leftSpacing=parentItemCenterOffset-headerLeftOffset;if(itemWidth>=headerWidth){item.css({'width':headerWidth-2,'left':-parentItemOffset});}else if(itemHalfWidth>rightSpacing){item.css({'right':-rightSpacing+parentHalfWidth+1,'left':'auto',});}else if(itemHalfWidth>leftSpacing){item.css({'left':-leftSpacing+parentHalfWidth+1,'right':'auto',});}else{item.css({'right':'auto','left':-itemHalfWidth+parentHalfWidth,});}});}}}
Module.stickyNavBar=function(){var self=this;if(self.body.hasClass('elementor-editor-active')){return false;}
self.sticky.section=$('#sticky-holder');self.sticky.outer=$('#navbar-outer');if((!self.body.hasClass('is-mstick')&&!self.body.hasClass('yes-tstick'))||self.sticky.outer.length<1||self.sticky.section.length<1){return false;}
self.sticky.smartSticky=!!self.body.hasClass('is-smart-sticky');self.sticky.isSticky=false;self.sticky.lastScroll=0;if(self.body.hasClass('yes-tstick')){self.sticky.isTitleSticky=true;}else{self.sticky.isTitleSticky=0;}
self.sticky.additionalOffset=200;if(window.innerWidth>1024){if(self.sticky.isTitleSticky){self.sticky.additionalOffset=450;}else{self.sticky.additionalOffset=0;}}
if(self.body.hasClass('admin-bar')){self.sticky.adminBarSpacing=32;}else{self.sticky.adminBarSpacing=0;}
self.sticky.topOffset=self.sticky.section.offset().top;self.sticky.stickySectionHeight=self.sticky.section.outerHeight();self.sticky.outer.css('min-height',self.sticky.outer.outerHeight());self.sticky.activatePos=self.sticky.topOffset+1+self.sticky.stickySectionHeight+self.sticky.additionalOffset;self.sticky.deactivePos=self.sticky.topOffset-self.sticky.adminBarSpacing+self.sticky.additionalOffset;if(window.addEventListener){if(self.sticky.smartSticky){window.addEventListener('scroll',function(){self.animationFrame(self.initSmartStickyNavBar.bind(self));},false);}else{window.addEventListener('scroll',function(){self.animationFrame(self.initStickyNavBar.bind(self));},false);}}
self.window.on('unstickMenu',function(){self.sticky.outer.css('min-height',self.sticky.outer.outerHeight());self.sticky.stickySectionHeight=self.sticky.section.outerHeight();self.sticky.topOffset=self.sticky.section.offset().top;self.sticky.activatePos=self.sticky.topOffset+1+self.sticky.stickySectionHeight+self.sticky.additionalOffset;self.sticky.deactivePos=self.sticky.topOffset-self.sticky.adminBarSpacing+self.sticky.additionalOffset;});}
Module.initStickyNavBar=function(){var self=this;var scroll=self.window.scrollTop();if(!self.sticky.isSticky&&scroll>self.sticky.activatePos){self.sticky.isSticky=true;self.body.addClass('stick-animated sticky-on');self.sticky.stickAnimatedTimeout=setTimeout(function(){self.body.removeClass('stick-animated');},200);}else if(self.sticky.isSticky&&scroll<=self.sticky.deactivePos){self.sticky.isSticky=false;self.body.removeClass('sticky-on stick-animated');self.window.trigger('unstickMenu');}}
Module.initSmartStickyNavBar=function(){var self=this;var scroll=self.window.scrollTop();if(!self.sticky.isSticky&&scroll>self.sticky.activatePos&&scroll<self.sticky.lastScroll){self.sticky.isSticky=true;self.body.addClass('stick-animated sticky-on');self.sticky.stickAnimatedTimeout=setTimeout(function(){self.body.removeClass('stick-animated');},200);}else if(self.sticky.isSticky&&(scroll<=self.sticky.deactivePos||scroll>self.sticky.lastScroll)){self.sticky.isSticky=false;self.body.removeClass('sticky-on stick-animated');if(scroll<=self.sticky.deactivePos){self.window.trigger('unstickESection');}}
self.sticky.lastScroll=scroll;}
Module.stickyHeaderBuilder=function(){var self=this;if(self.body.hasClass('elementor-editor-active')){return false;}
var stickySection=$('.header-template .e-section-sticky').first();var hasTitleSticky=$('body.single-post #s-title-sticky').first();if(stickySection.length<1){return false;}
if(hasTitleSticky.length>0){self.body.addClass('yes-tstick');self.eSticky.isTitleSticky=true;}else{self.eSticky.isTitleSticky=0;}
self.eSticky.additionalOffset=200;if(window.innerWidth>1024){if(self.eSticky.isTitleSticky){self.eSticky.additionalOffset=450;}else{self.eSticky.additionalOffset=0;}}
self.eSticky.smartSticky=!!stickySection.hasClass('is-smart-sticky');if(window.innerWidth<=1024){var mobileHeader=$('#header-template-holder');stickySection.removeClass('e-section-sticky');mobileHeader.addClass('e-section-sticky');stickySection=mobileHeader;}
self.eSticky.section=stickySection;self.eSticky.outer=stickySection.parent();self.eSticky.adminBarSpacing=0;self.eSticky.isSticky=false;self.eSticky.lastScroll=0;self.eSticky.stickySectionHeight=stickySection.outerHeight();self.eSticky.topOffset=stickySection.offset().top;if(self.body.hasClass('admin-bar')){self.eSticky.adminBarSpacing=32;}
self.eSticky.outer.css('min-height',self.eSticky.outer.outerHeight());self.eSticky.activatePos=self.eSticky.topOffset+1+self.eSticky.stickySectionHeight+self.eSticky.additionalOffset;self.eSticky.deactivePos=self.eSticky.topOffset-self.eSticky.adminBarSpacing+self.eSticky.additionalOffset;if(window.addEventListener){if(self.eSticky.smartSticky){window.addEventListener('scroll',function(){self.animationFrame(self.initSmartStickyESection.bind(self));},false);}else{window.addEventListener('scroll',function(){self.animationFrame(self.initStickyESection.bind(self));},false);}}
self.window.on('unstickESection',function(){self.eSticky.outer.css('min-height',self.eSticky.outer.outerHeight());self.eSticky.stickySectionHeight=self.eSticky.section.outerHeight();self.eSticky.topOffset=self.eSticky.section.offset().top;self.eSticky.activatePos=self.eSticky.topOffset+1+self.eSticky.stickySectionHeight+self.eSticky.additionalOffset;self.eSticky.deactivePos=self.eSticky.topOffset-self.eSticky.adminBarSpacing+self.eSticky.additionalOffset;});}
Module.initStickyESection=function(){var self=this;var scroll=self.window.scrollTop();if(!self.eSticky.isSticky&&scroll>self.eSticky.activatePos){self.eSticky.isSticky=true;self.body.addClass('stick-animated sticky-on');self.eSticky.stickAnimatedTimeout=setTimeout(function(){self.body.removeClass('stick-animated');},200);}else if(self.eSticky.isSticky&&scroll<=self.eSticky.deactivePos){self.eSticky.isSticky=false;self.body.removeClass('sticky-on stick-animated');self.window.trigger('unstickESection');}}
Module.initSmartStickyESection=function(){var self=this;var scroll=self.window.scrollTop();if(!self.eSticky.isSticky&&scroll>self.eSticky.activatePos&&scroll<self.eSticky.lastScroll){self.eSticky.isSticky=true;self.body.addClass('stick-animated sticky-on');self.eSticky.stickAnimatedTimeout=setTimeout(function(){self.body.removeClass('stick-animated');},200);}else if(self.eSticky.isSticky&&(scroll<=self.eSticky.deactivePos||scroll>self.eSticky.lastScroll)){self.eSticky.isSticky=false;self.body.removeClass('sticky-on stick-animated');if(scroll<=self.eSticky.deactivePos){self.window.trigger('unstickESection');}}
self.eSticky.lastScroll=scroll;}
Module.mobileCollapse=function(){var self=this;$('.mobile-menu-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);if(target.hasClass('mobile-search-icon')){setTimeout(function(){self.outerHTML.find('.header-search-form input[type="text"]').focus()},50);}
if(!self.outerHTML.hasClass('collapse-activated')){self.outerHTML.addClass('collapse-activated');}else{self.outerHTML.removeClass('collapse-activated');}});}
Module.privacyTrigger=function(){$('#privacy-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();localStorage.setItem('RubyPrivacyAllowed','1');$('#rb-privacy').slideUp(250,function(){$(this).remove();});return false;});}
Module.backTop=function(){if(this.body.hasClass('is-backtop')){$().UItoTop({text:'<i class="rbi rbi-darrow-top"></i>',});}}
Module.SetTTLStorage=function(id,value,ttl){var data={value:value,ttl:Date.now()+ttl*3600000}
localStorage.setItem(id,JSON.stringify(data));}
Module.getTTLStorage=function(id){var data=localStorage.getItem(id);if(!data){return null;}
data=JSON.parse(data);if(Date.now()>data.ttl){localStorage.removeItem(data);return null;}
return data.value;}
Module.loginPopup=function(){var toggle=$('.login-toggle');var form=$('#rb-user-popup-form');toggle.css('pointer-events','auto');if(toggle.length>0&&form.length>0){toggle.on('click',function(e){e.preventDefault();e.stopPropagation();$.magnificPopup.open({type:'inline',preloader:false,removalDelay:500,showCloseBtn:true,closeBtnInside:true,closeOnBgClick:true,items:{src:form,type:'inline'},mainClass:'popup-animation',closeMarkup:'<span class="close-popup-btn mfp-close"><span class="close-icon"></span></span>',fixedBgPos:true,fixedContentPos:true});})}}
Module.popupNewsletter=function(){var self=this;var target=$('#rb-popup-newsletter');if(target.length>0){var display=target.data('display');self.newsletterExpired=target.data('expired');self.newsletterDisplayOffset=target.data('offset');var delay=target.data('delay');var oldExpired=localStorage.getItem('RubyNewsletterExpired');if(!oldExpired||self.newsletterExpired!=oldExpired){localStorage.setItem('RubyNewsletterExpired',self.newsletterExpired);localStorage.removeItem('RubyNewsletter');}
if(!self.getTTLStorage('RubyNewsletter')){if(!display||'scroll'==display){if(window.addEventListener){window.addEventListener('scroll',function(){self.animationFrame(self.scrollPopupNewsletter.bind(self));},false);}}else{setTimeout(function(){self.popupNewsletterInit();},delay);}}}}
Module.scrollPopupNewsletter=function(){var self=this;if(!self.newsletterPopupFlag&&self.window.scrollTop()>self.newsletterDisplayOffset){self.newsletterPopupFlag=true;self.popupNewsletterInit();}}
Module.popupNewsletterInit=function(){var self=this;if(self.siteAccessFlag){return;}
$.magnificPopup.open({type:'inline',preloader:false,closeBtnInside:true,removalDelay:300,showCloseBtn:true,closeOnBgClick:false,disableOn:1024,items:{src:'#rb-popup-newsletter',type:'inline'},mainClass:'popup-animation',fixedBgPos:true,fixedContentPos:true,closeMarkup:'<span class="close-popup-btn mfp-close"><span class="close-icon"></span></span>',callbacks:{close:function(){if(self.siteAccessFlag){return;}
self.SetTTLStorage('RubyNewsletter',1,self.newsletterExpired*24);}}});}
Module.footerSlideUp=function(){var target=$('#footer-slideup');if(target.length>0){var self=this;self.footerSlideUpExpired=target.data('expired');var delay=target.data('delay');var oldExpired=localStorage.getItem('footerSlideUpExpired');if(!oldExpired||self.footerSlideUpExpired!=oldExpired){localStorage.setItem('footerSlideUpExpired',self.footerSlideUpExpired);localStorage.removeItem('footerSlideUp');}
if(!self.getTTLStorage('footerSlideUp')){setTimeout(function(){self.footerSlideUpInit();},delay);}
setTimeout(function(){self.footerSlideUpToggle();},delay);}}
Module.footerSlideUpToggle=function(){var self=this;$('.slideup-toggle').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();self.footerSlideUpInit();return false;});}
Module.footerSlideUpInit=function(){if(this.body.hasClass('yes-f-slideup')){this.body.removeClass('yes-f-slideup');this.SetTTLStorage('footerSlideUp',1,this.footerSlideUpExpired*24);}else{this.body.addClass('yes-f-slideup');localStorage.removeItem('footerSlideUp');}}
Module.loadYoutubeIframe=function(){var self=this;var blockPlaylist=$('.yt-playlist');if(blockPlaylist.length>0){var tag=document.createElement('script');tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);}
window.onYouTubeIframeAPIReady=function(){$('.yt-playlist').each(function(){var target=$(this);var iframe=target.find('.yt-player');var videoID=target.data('id');var blockID=target.data('block');self.YTPlayers[blockID]=new YT.Player(iframe.get(0),{height:'540',width:'960',videoId:videoID,events:{'onReady':self.videoPlayToggle,'onStateChange':self.videoPlayToggle}});});$('.plist-item').on('click',function(e){e.preventDefault();e.stopPropagation();var wrapper=$(this).parents('.yt-playlist');var currentBlockID=wrapper.data('block');var videoID=$(this).data('id');var title=$(this).text();var meta=$(this).data('index');Object.keys(self.YTPlayers).forEach(function(id){self.YTPlayers[id].pauseVideo();});self.YTPlayers[currentBlockID].loadVideoById({'videoId':videoID});wrapper.find('.yt-trigger').addClass('is-playing');wrapper.find('.play-title').hide().text(title).fadeIn(250);wrapper.find('.video-index').text(meta);});}}
Module.videoPlayToggle=function(){var players=FOXIZ_MAIN_SCRIPTS.YTPlayers;$('.yt-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var currentBlockID=target.parents('.yt-playlist').data('block');var currentState=players[currentBlockID].getPlayerState();if(-1==currentState||0==currentState||2==currentState||5==currentState){players[currentBlockID].playVideo();target.addClass('is-playing');}else{players[currentBlockID].pauseVideo();target.removeClass('is-playing');}})}
Module.showPostComment=function(){$('.show-post-comment').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var wrap=$(this).parent();$(this).fadeOut(250,function(){$(this).remove();wrap.find('.is-invisible').removeClass('is-invisible');wrap.next('.comment-holder').removeClass('is-hidden');})});}
Module.scrollTableContent=function(){var self=this;$('.anchor-link').on('click',function(e){e.stopPropagation();var target=$(this).data('index');self.html.animate({scrollTop:$('.'+target).offset().top-75},400);});}
Module.scrollToComment=function(){var commentBtn=$('.show-post-comment');var self=this;if(commentBtn.length>0){var hash=window.location.hash;if('#respond'==hash||'#comment'==hash.substring(0,8)){commentBtn.trigger('click');self.html.animate({scrollTop:commentBtn.offset().top},400);}}}
Module.replyReview=function(){var replyLink=$('.comment-reply-link');replyLink.on('click',function(){var target=$(this);var wrapper=target.parents('.rb-reviews-area');if(wrapper.length>0){var cancelLink=$('#cancel-comment-reply-link');wrapper.find('.rb-form-rating').addClass('is-hidden');cancelLink.on('click',function(){wrapper.find('.rb-form-rating').removeClass('is-hidden');});}});}
Module.usersRating=function(){var self=this;var reviewsForm=self.body.find('.rb-reviews-form');if(reviewsForm.length>0){reviewsForm.each(function(){var reviewForm=$(this);if(!reviewForm.hasClass('is-loaded')){reviewForm.addClass('is-loaded');var ratingForm=reviewForm.find('.rb-form-rating');var selection=reviewForm.find('.rb-rating-selection');var text=reviewForm.find('.rating-alert').html();var ratingValue=null;selection.val('');selection.hide();selection.before('<div class="rb-review-stars">\
                                <span>\
                                    <a class="star" data-rating="1" href="#"><i class="rbi rbi-star-o"></i></a>\
                                    <a class="star" data-rating="2" href="#"><i class="rbi rbi-star-o"></i></a>\
                                    <a class="star" data-rating="3" href="#"><i class="rbi rbi-star-o"></i></a>\
                                    <a class="star" data-rating="4" href="#"><i class="rbi rbi-star-o"></i></a>\
                                    <a class="star" data-rating="5" href="#"><i class="rbi rbi-star-o"></i></a>\
                                </span>\
                            </div>');ratingForm.on('click','a.star',function(e){e.preventDefault();e.stopPropagation();var star=$(this);ratingValue=star.data('rating');star.siblings('a').removeClass('active');star.addClass('active');ratingForm.addClass('selected');});reviewForm.on('click','#respond #submit',function(){selection.val(ratingValue);if(!selection.val()){window.alert(text);return false;}});}});}}
Module.readIndicatorInit=function(){var self=this;if(!self.body.hasClass('single-post')||self.readIndicator.length<1){return false;}
var content=$('.entry-content');if(content.length<1){return false;}
content=content.eq(0);self.indicatorTop=content.offset().top;self.indicatorHeight=content.outerHeight(true)-self.window.height();if(window.addEventListener){window.addEventListener('scroll',function(){self.animationFrame(self.readIndicatorCalc.bind(self));},false);}}
Module.readIndicatorCalc=function(){var self=this;var scroll=self.window.scrollTop();self.readIndicatorPercent=((scroll-self.indicatorTop)/self.indicatorHeight)*100;if(self.readIndicatorPercent<=130){self.readIndicator.css('width',self.readIndicatorPercent+'%');}}
Module.breakingNews=function(){var self=this;var breakingNews=$('.breaking-news-slider');if(breakingNews.length<1){return false;}
breakingNews.each(function(){var el=$(this);var params={slidesPerView:1,loop:true,}
if(el.data('play')){params.autoplay={delay:self.themeSettings.sliderSpeed,pauseOnMouseEnter:true,stopOnLastSlide:true,disableOnInteraction:true,}
if(el.data('speed')){params.autoplay.delay=el.data('speed');}}
if('undefined'!==typeof self.isElementorEditor){delete params.autoplay;}
params.navigation={nextEl:el.find('.breaking-news-next')[0],prevEl:el.find('.breaking-news-prev')[0]}
new RBSwiper(this,params);});}
Module.sliders=function(){var self=this;var sliders=$('.post-slider');if(sliders.length<1){return false;}
sliders.each(function(){var slider=$(this);var params={grabCursor:true,allowTouchMove:true,effect:self.themeSettings.sliderEffect,loop:true,}
if(slider.data('play')){params.autoplay={delay:self.themeSettings.sliderSpeed,pauseOnMouseEnter:true,stopOnLastSlide:true,disableOnInteraction:true,}
if(slider.data('speed')){params.autoplay.delay=slider.data('speed');}}
if('undefined'!==typeof self.isElementorEditor){delete params.autoplay;}
params.pagination={el:slider.find('.slider-pagination')[0],clickable:true,};params.navigation={nextEl:slider.find('.slider-next')[0],prevEl:slider.find('.slider-prev')[0]}
new RBSwiper(this,params);});}
Module.carousels=function(){var self=this;var carousels=$('.post-carousel');if(carousels.length<1){return false;}
carousels.each(function(){var carousel=$(this);var params={grabCursor:true,allowTouchMove:true,freeMode:false,loop:true}
params.slidesPerView=carousel.data('mcol');params.spaceBetween=carousel.data('mgap');params.centeredSlides=carousel.data('centered');params.navigation={nextEl:carousel.find('.slider-next')[0],prevEl:carousel.find('.slider-prev')[0]}
if(carousel.find('.slider-pagination')[0]){params.pagination={el:carousel.find('.slider-pagination')[0],type:'bullets',clickable:true,};}
if(carousel.data('play')){params.autoplay={delay:self.themeSettings.sliderSpeed,pauseOnMouseEnter:true,stopOnLastSlide:true,disableOnInteraction:true,}
if(carousel.data('speed')){params.autoplay.delay=carousel.data('speed');}}
if('undefined'!==typeof self.isElementorEditor){delete params.autoplay;}
if(carousel.data('fmode')){params.freeMode=true;}
params.breakpoints={768:{slidesPerView:carousel.data('tcol'),spaceBetween:carousel.data('tgap')},1025:{slidesPerView:carousel.data('col'),spaceBetween:carousel.data('gap')},1500:{slidesPerView:carousel.data('wcol'),spaceBetween:carousel.data('gap')}};params.on={afterInit:function(swiper){var wrap=$(swiper.$wrapperEl);$(swiper.$wrapperEl).find('.p-box').css('height',wrap.height());},resize:function(swiper){var wrap=$(swiper.$wrapperEl);$(swiper.$wrapperEl).find('.p-box').css('height',wrap.height());},};new RBSwiper(this,params);});}
Module.singleGallery=function(){var self=this;var gallerySections=self.body.find('.featured-gallery-wrap');if(!gallerySections.length){return;}
gallerySections.each(function(){var section=$(this);if(!section.hasClass('is-loaded')){var index=section.data('gallery');var sliderEl=section.find('.gallery-slider').attr('id');var sliderNavEl=section.find('.gallery-slider-nav').attr('id');var carouselEl=section.find('.gallery-carousel').attr('id');var coverflowEL=section.find('.gallery-coverflow').attr('id');if('undefined'!==typeof sliderEl&&'undefined'!==typeof sliderNavEl){var galleryNav=new RBSwiper('#'+sliderNavEl,{spaceBetween:15,slidesPerView:6,freeMode:self.themeSettings.sliderFMode,grabCursor:true,loop:true,watchSlidesVisibility:true,watchSlidesProgress:true,on:{init:function(){$(this.$wrapperEl).removeClass('pre-load');},},});var gallerySlider=new RBSwiper('#'+sliderEl,{spaceBetween:0,grabCursor:true,loop:true,pagination:{el:'.swiper-pagination-'+index,type:'progressbar',clickable:true,},on:{init:function(){section.addClass('is-loaded');},},thumbs:{swiper:galleryNav}});gallerySlider.on('slideChange',function(){if(this.activeIndex){$(this.$el).next().find('.current-slider-count').fadeOut(0).html(this.activeIndex).fadeIn(250);}});}
if('undefined'!==typeof carouselEl){new RBSwiper('#'+carouselEl,{spaceBetween:20,slidesPerView:'auto',freeMode:self.themeSettings.sliderFMode,loop:false,grabCursor:true,scrollbar:{el:'.swiper-scrollbar-'+index,hide:true,},on:{init:function(){$(this.$wrapperEl).removeClass('pre-load');section.addClass('is-loaded');},},});}
if('undefined'!==typeof coverflowEL){new RBSwiper('#'+coverflowEL,{effect:"coverflow",grabCursor:true,centeredSlides:true,slidesPerView:1.2,coverflowEffect:{rotate:50,stretch:0,depth:250,modifier:1,slideShadows:true,},breakpoints:{768:{slidesPerView:3}},on:{init:function(){$(this.$wrapperEl).removeClass('pre-load');section.addClass('is-loaded');},},pagination:{el:'.swiper-pagination-'+index,clickable:true,},});}}});}
Module.highlightShares=function(){var self=this;if(!self.themeSettings.highlightShares||(window.matchMedia&&window.matchMedia('(pointer: coarse)').matches)){return;}
var extra=[];var config={selectableElements:['.is-highlight-shares'],twitterUsername:self.themeSettings.twitterName,};if(self.themeSettings.highlightShareFacebook){config.facebook=true;}
if(self.themeSettings.highlightShareTwitter){config.twitter=true;}
if(self.themeSettings.highlightShareReddit){extra.push({icon:'<i class="rbi rbi-reddit"></i>',url:'https://reddit.com/submit?url=PAGE_URL&title=TEXT_SELECTION'});}
Sharect.config(config).appendCustomShareButtons(extra).init();}
Module.floatingVideo=function(){var self=this;var floating=$('.floating-video').not('.is-loaded');if(floating.length<1||window.outerWidth<1025){return false;}
self.wPoint['Floating']=new Waypoint({element:floating,offset:-floating.height(),handler:function(direction){self.body.find('.floating-video').addClass('is-loaded').removeClass('floating-activated');self.body.find('.floating-close').remove();if('down'==direction){this.element.addClass(' floating-activated');this.element.find('.float-holder').prepend('<a class="floating-close close-popup-btn" href="#"><span class="close-icon"></span></a>');}}});}
Module.floatingVideoRemove=function(){var self=this;self.body.on('click','.floating-close',function(e){e.preventDefault();e.stopPropagation();self.body.find('.floating-video').removeClass('floating-activated');self.wPoint['Floating'].destroy();})}
Module.myBookmarks=function(){var self=this;var myBookmarks=$('#my-bookmarks');var myCategories=$('#my-categories');var myAuthors=$('#my-authors');var myRecommended=$('#my-recommended');if(myBookmarks.length<1){return false;}
$.ajax({type:'POST',url:self.themeSettings.ajaxurl,data:{action:'my_bookmarks'},success:function(response){response=JSON.parse(JSON.stringify(response));if(response.sync){self.bookmarkData=response.sync;}
var listPosts=$(response.listposts);var remove=$(response.remove);var posts=listPosts.find('.p-wrap');if(posts.length>0){$.each(posts,function(){var post=$(this);var temp=remove.clone();temp.data('pid',post.data('pid'));post.find('.feat-holder').append(temp);});}
myBookmarks.fadeOut(150,function(){myBookmarks.html(listPosts);myBookmarks.fadeIn(400);});if(myCategories.length>0){myCategories.fadeOut(150,function(){myCategories.html(response.categories).fadeIn(400);});}
if(myAuthors.length>0){myAuthors.fadeOut(150,function(){myAuthors.html(response.authors).fadeIn(400);});}
if(myRecommended.length>0){myRecommended.fadeOut(150,function(){myRecommended.html(response.recommended).fadeIn(400);});}
setTimeout(function(){Waypoint.refreshAll();self.syncBookmarkCSS(response.sync);self.removeBookmark();self.followToggle();self.reInitPagination();},600);}});}
Module.syncBookmark=function(){var self=this;if(self.body.hasClass('sync-bookmarks')&&!self.body.hasClass('page-template-bookmark')){var notificationWrap=$('.notification-bookmark');$.ajax({type:'POST',url:self.themeSettings.ajaxurl,data:{action:'sync_bookmarks',notification:notificationWrap.length},success:function(response){self.bookmarkData=JSON.parse(JSON.stringify(response));self.syncBookmarkCSS(self.bookmarkData);if(response.notification){notificationWrap.html(response.notification);}}});}}
Module.refreshBookmarks=function(){if(this.bookmarkData!==undefined){this.syncBookmarkCSS(this.bookmarkData);}}
Module.syncBookmarkCSS=function(response){$.each(response.posts,function(index,val){$('.bookmark-trigger[data-pid='+val+']').css('opacity',0).addClass('bookmarked').animate({opacity:1},250);});$.each(response.categories,function(index,val){$('.follow-trigger[data-cid='+val+']').addClass('followed');});$.each(response.authors,function(index,val){$('.follow-trigger[data-uid='+val+']').addClass('followed');});$('.follow-button').animate({opacity:1},200);}
Module.bookmarkToggle=function(){var self=this;$('.bookmark-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var pid=target.data('pid');var infoTemplate=$('#bookmark-toggle-info');if(!pid||self.bookmarkProgressing){return false;}
self.bookmarkProgressing=true;target.addClass('in-progress');clearTimeout(self.timeOut);$.ajax({type:'POST',url:self.themeSettings.ajaxurl,data:{action:'rb_bookmark',pid:pid},success:function(response){response=JSON.parse(JSON.stringify(response));if('added'===response.action){$('.bookmark-trigger[data-pid='+pid+']').css('opacity',0).addClass('bookmarked').animate({opacity:1},250);infoTemplate.removeClass('removed bookmark-limited');infoTemplate.addClass('added');}else if('removed'===response.action){$('.bookmark-trigger[data-pid='+pid+']').css('opacity',0).removeClass('bookmarked').animate({opacity:1},250);infoTemplate.removeClass('added bookmark-limited');infoTemplate.addClass('removed');}else if('limit'===response.action){infoTemplate.addClass('bookmark-limited');}
if(infoTemplate.length){infoTemplate.fadeOut(100,function(){infoTemplate.find('.bookmark-featured').html(response.image);infoTemplate.find('.bookmark-title').html(response.title);infoTemplate.find('.bookmark-desc').html(response.description);infoTemplate.fadeIn(300);self.timeOut=setTimeout(function(){infoTemplate.fadeOut(600);},2000);});infoTemplate.on({mouseenter:function(){clearTimeout(self.timeOut);},mouseleave:function(){self.timeOut=setTimeout(function(){infoTemplate.fadeOut(600);},1200);}});}
if(self.bookmarkData!==undefined){if('added'===response.action){self.bookmarkData.posts[pid]=pid;}else{$.each(self.bookmarkData.posts,function(index,val){if(pid===val){delete self.bookmarkData.posts[index];}});}}
target.removeClass('in-progress');self.bookmarkProgressing=false;}});});}
Module.removeBookmark=function(){var self=this;$('.remove-bookmark').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var pid=target.data('pid');var wrapper=target.parents('.p-wrap');var infoTemplate=$('#bookmark-remove-info');if(!pid||self.bookmarkProgressing){return false;}
self.bookmarkProgressing=true;self.body.addClass('removing-bookmark');wrapper.fadeOut(600,function(){wrapper.addClass('removing');infoTemplate.fadeIn(300);});self.removeBookmarkTimeout=setTimeout(function(){infoTemplate.fadeOut(600);wrapper.trigger('removeBookmark',pid);},2000);$('#bookmark-undo').on('click',function(){self.bookmarkProgressing=false;self.body.removeClass('removing-bookmark');wrapper.fadeIn(1000);infoTemplate.fadeOut(600);return false;});infoTemplate.on({mouseenter:function(){clearTimeout(self.removeBookmarkTimeout);},mouseleave:function(){self.removeBookmarkTimeout=setTimeout(function(){infoTemplate.fadeOut(600);wrapper.trigger('removeBookmark',pid);},1200);}});wrapper.on('removeBookmark',function(event,pid){if(self.bookmarkProgressing){$.ajax({type:'POST',url:self.themeSettings.ajaxurl,data:{action:'rb_bookmark',pid:pid},success:function(response){wrapper.remove();self.body.removeClass('removing-bookmark');self.bookmarkProgressing=false;}});}});})}
Module.followToggle=function(){var self=this;$('.follow-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var cid=target.data('cid');var uid=target.data('uid');var infoTemplate=$('#follow-toggle-info');if((!cid&&!uid)||self.followProgressing){return false;}
self.followProgressing=true;target.addClass('in-progress');$.ajax({type:'POST',url:self.themeSettings.ajaxurl,data:{action:'rb_follow',cid:cid,uid:uid,},success:function(response){response=JSON.parse(JSON.stringify(response));if('added'===response.action){if(cid){$('.follow-trigger[data-cid='+cid+']').css('opacity',0).addClass('followed').animate({opacity:1},250);}else{$('.follow-trigger[data-uid='+uid+']').css('opacity',0).addClass('followed').animate({opacity:1},250);}
infoTemplate.removeClass('removed bookmark-limited');infoTemplate.addClass('added');}else if('removed'===response.action){if(cid){$('.follow-trigger[data-cid='+cid+']').css('opacity',0).removeClass('followed').animate({opacity:1},250);}else{$('.follow-trigger[data-uid='+uid+']').css('opacity',0).removeClass('followed').animate({opacity:1},250);}
infoTemplate.removeClass('added bookmark-limited');infoTemplate.addClass('removed');}else if('limit'===response.action){infoTemplate.addClass('bookmark-limited');}
if(infoTemplate.length){infoTemplate.fadeOut(100,function(){infoTemplate.find('.bookmark-desc').html(response.description);infoTemplate.fadeIn(300);self.timeOut=setTimeout(function(){infoTemplate.fadeOut(600);},2000);});infoTemplate.on({mouseenter:function(){clearTimeout(self.timeOut);},mouseleave:function(){self.timeOut=setTimeout(function(){infoTemplate.fadeOut(600);},1200);}});}
target.removeClass('in-progress');self.followProgressing=false;}});});}
Module.initAjaxBlocks=function(){var self=this;var elements=$('.is-ajax-block');if(elements.length>0){elements.each(function(){var block=$(this);var uuid=block.attr('id');if(!self.ajaxData[uuid]){self.ajaxData[uuid]=self.getBlockSettings(uuid);}
$.ajax({type:'GET',url:self.themeSettings.ajaxurl,data:{action:'liveb',data:self.ajaxData[uuid]},success:function(response){response=JSON.parse(JSON.stringify(response));block.html(response).fadeIn(250);block.dequeue();self.reInitPagination();Waypoint.refreshAll();}});})}}
Module.siteAccessDetector=function(){var self=this;var detection=$('#rb-checktag');if(!detection.length){return false;}
setTimeout(function(){if($('.rb-adbanner').height()<1){self.siteAccessPopup();document.addEventListener('contextmenu',event=>event.preventDefault());}},1000);}
Module.siteAccessPopup=function(){this.siteAccessFlag=true;$.magnificPopup.close();setTimeout(function(){$.magnificPopup.open({type:'inline',preloader:false,showCloseBtn:false,closeBtnInside:false,enableEscapeKey:false,removalDelay:999999,closeOnBgClick:false,items:{src:'#rb-site-access',type:'inline'},mainClass:'popup-animation site-access-popup',fixedBgPos:true,fixedContentPos:true,});},310);}
Module.galleryLightbox=function(){$('.gallery-popup-link').on('click',function(e){e.preventDefault();e.stopPropagation();var target=$(this);var data=[];var galleryID=target.data('gallery');var slideIndex=target.data('index');var galleries=$(galleryID).find('.gallery-el');galleries.each(function(){data.push({title:$(this).find('.image-title').html(),rbgallery:$(this).html()});});$.magnificPopup.open({type:'inline',mainClass:'rb-gallery-popup popup-animation',closeMarkup:'<button title="%title%" class="mfp-close mfp-button"><i class="rbi rbi-close"></i></button>',closeOnBgClick:false,removalDelay:500,showCloseBtn:true,fixedBgPos:true,fixedContentPos:true,preloader:false,gallery:{enabled:true,preload:[0,2],arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-button mfp-arrow-%dir%"><i class="rbi rbi-%dir%"></i></button>',tCounter:'<span>%curr% / %total%</span>'},callbacks:{open:function(){$.magnificPopup.instance.goTo(slideIndex);},close:function(){$.magnificPopup.instance.popupsCache={};},buildControls:function(){if(this.arrowLeft&&this.arrowRight){this.contentContainer.find('.gallery-popup-nav').append(this.arrowLeft.add(this.arrowRight));}}},inline:{markup:'<div class="gallery-popup-header light-scheme">'+'<span class="mfp-title h5"></span>'+'<div class="popup-header-right"><div class="mfp-counter"></div><div class="mfp-close"></div></div>'+'</div><div class="gallery-popup-nav"></div>'+'<div class="gallery-popup-content"><div class="mfp-rbgallery"></div></div>'},items:data});return false;});};Module.singleFeaturedLightbox=function(){$('.featured-lightbox-trigger').on('click',function(e){e.preventDefault();e.stopPropagation();var source='<img src="'+$(this).data('source')+'" alt="'+$(this).find('img').attr('alt')+'">';var caption=$(this).data('caption');var attribution=$(this).data('attribution');$.magnificPopup.open({mainClass:'rb-gallery-popup single-featured-popup popup-animation',closeOnBgClick:true,removalDelay:500,showCloseBtn:true,fixedBgPos:true,fixedContentPos:true,preloader:false,closeMarkup:'<button title="%title%" class="mfp-close mfp-button"><i class="rbi rbi-close"></i></button>',callbacks:{close:function(){$.magnificPopup.instance.popupsCache={};},},inline:{markup:'<div class="gallery-popup-header light-scheme">'+'<div class="mfp-close"></div>'+'</div><div class="gallery-popup-nav"></div>'+'<div class="gallery-popup-content"><div class="mfp-source gallery-popup-image"></div>'+'<div class="gallery-popup-entry light-scheme">'+'<span class="mfp-title h5"></span><span class="mfp-attribution description-text"></span>'+'</div>'+'</div>'},items:{title:caption,source:source,attribution:attribution},});});}
Module.paginationNextPrev=function(){var self=this;$('.pagination-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var paginationTrigger=$(this);if(paginationTrigger.hasClass('is-disable')){return;}
var block=paginationTrigger.parents('.block-wrap');var uuid=block.attr('id');if(!self.ajaxData[uuid]){self.ajaxData[uuid]=self.getBlockSettings(uuid);}
if(self.ajaxData[uuid]&&self.ajaxData[uuid].processing){return;}
self.ajaxData[uuid].processing=true;var type=paginationTrigger.data('type');self.ajaxStartAnimation(block,'replace');self.ajaxReplaceLoad(block,uuid,type);});}
Module.ajaxReplaceLoad=function(block,uuid,type){var self=this;if(!self.ajaxData[uuid].paged){self.ajaxData[uuid].paged=1;}
if('prev'===type){self.ajaxData[uuid].page_next=parseInt(self.ajaxData[uuid].paged)-1;}else{self.ajaxData[uuid].page_next=parseInt(self.ajaxData[uuid].paged)+1;}
var cacheID=self.cacheData.getCacheID(uuid,self.ajaxData[uuid].page_next);if(self.cacheData.exist(cacheID)){var cache=self.cacheData.get(cacheID);if('undefined'!==typeof cache.paged){self.ajaxData[uuid].paged=cache.paged;}
setTimeout(function(){self.ajaxRenderHTML(block,uuid,cache,'replace');},250)}else{$.ajax({type:'GET',url:self.themeSettings.ajaxurl,data:{action:'livep',data:self.ajaxData[uuid]},success:function(response){response=JSON.parse(JSON.stringify(response));if('undefined'!==typeof response.paged){self.ajaxData[uuid].paged=response.paged;}
self.cacheData.set(cacheID,response);self.ajaxRenderHTML(block,uuid,response,'replace');}});}}
Module.paginationLoadMore=function(){var self=this;$('.loadmore-trigger').off('click').on('click',function(e){e.preventDefault();e.stopPropagation();var paginationTrigger=$(this);if(paginationTrigger.hasClass('is-disable')){return;}
var block=paginationTrigger.parents('.block-wrap');var uuid=block.attr('id');if(!self.ajaxData[uuid]){self.ajaxData[uuid]=self.getBlockSettings(uuid);}
if(self.ajaxData[uuid]&&self.ajaxData[uuid].processing){return;}
self.ajaxData[uuid].processing=true;self.ajaxStartAnimation(block,'append');self.ajaxAppendLoad(block,uuid);})}
Module.paginationInfinite=function(){var self=this;var infiniteElements=$('.pagination-infinite');if(infiniteElements.length>0){infiniteElements.each(function(){var paginationTrigger=$(this);if(!paginationTrigger.hasClass('is-disable')){var block=paginationTrigger.parents('.block-wrap');if(block.hasClass('is-horizontal-scroll')&&window.outerWidth<1024){paginationTrigger.addClass('is-disable');return;}
var uuid=block.attr('id');var wPointID='infinite'+uuid;if(!self.ajaxData[uuid]){self.ajaxData[uuid]=self.getBlockSettings(uuid);}
var params={element:paginationTrigger,offset:'bottom-in-view',handler:function(direction){if(self.ajaxData[uuid]&&self.ajaxData[uuid].processing){return;}
if('down'==direction){self.ajaxData[uuid].processing=true;self.ajaxStartAnimation(block,'append');self.ajaxAppendLoad(block,uuid);}}}
if('uid_notification'===uuid){params.context=block.parents('.scroll-holder').eq(0);if(window.outerWidth<1025){return;}}
self.wPoint[wPointID]=new Waypoint(params);}});}}
Module.ajaxAppendLoad=function(block,uuid){var self=this;if(!self.ajaxData[uuid].paged){self.ajaxData[uuid].paged=1;}
if(self.ajaxData[uuid].paged>=self.ajaxData[uuid].page_max){return;}
self.ajaxData[uuid].page_next=parseInt(self.ajaxData[uuid].paged)+1;$.ajax({type:'GET',url:self.themeSettings.ajaxurl,data:{action:'livep',data:self.ajaxData[uuid]},success:function(response){response=JSON.parse(JSON.stringify(response));if('undefined'!==typeof response.paged){self.ajaxData[uuid].paged=response.paged;}
if('undefined'!==typeof response.notice){response.content=response.content+response.notice;}
self.ajaxRenderHTML(block,uuid,response,'append');}});}
Module.liveSearch=function(){var liveSearch=$('.live-search-form');if(liveSearch.length==0){return;}
var self=this;liveSearch.each(function(){var liveSearchEl=$(this);var input=liveSearchEl.find('input[type="text"]');var responseWrap=liveSearchEl.find('.live-search-response');var animation=liveSearchEl.find('.live-search-animation');input.attr('autocomplete','off');var delay=(function(){var timer=0;return function(callback,ms){clearTimeout(timer);timer=setTimeout(callback,ms);};})();input.keyup(function(){var param=$(this).val();delay(function(){if(param){liveSearchEl.addClass('search-loading');setTimeout(function(){animation.fadeIn(200);},250);$.ajax({type:'GET',url:self.themeSettings.ajaxurl,data:{action:'live_search',s:param},success:function(data){data=$.parseJSON(JSON.stringify(data));animation.fadeOut(200);setTimeout(function(){liveSearchEl.removeClass('search-loading');},250);responseWrap.hide().empty().css('height',responseWrap.height());responseWrap.html(data);responseWrap.css('height','auto').fadeIn(250);}});}else{responseWrap.fadeOut(250,function(){responseWrap.empty().css('height','auto');});}},250);})});}
Module.cacheData={data:{},get:function(id){return this.data[id];},set:function(id,data){this.remove(id);this.data[id]=data;},remove:function(id){delete this.data[id];},getCacheID:function(blockID,currentPage){return JSON.stringify('RB_'+blockID+'_'+currentPage);},exist:function(id){return this.data.hasOwnProperty(id)&&this.data[id]!==null;}}
Module.ajaxStartAnimation=function(block,action){var inner=block.find('.block-inner');block.find('.pagination-trigger').addClass('is-disable');inner.stop();if('replace'===action){inner.css('min-height',inner.outerHeight());inner.fadeTo('250',0.05);inner.after('<i class="rb-loader loader-absolute"></i>');}else{block.find('.loadmore-trigger').addClass('loading');block.find('.rb-loader').css({'display':'block'}).delay(250).animate({opacity:1},250);}}
Module.ajaxRenderHTML=function(block,uuid,response,action){var self=this;block.delay(50).queue(function(){var uuid=block.attr('id');var inner=block.find('.block-inner');block.find('.pagination-trigger').removeClass('is-disable');inner.stop();if('replace'===action){inner.html(response.content);block.find('.rb-loader').animate({opacity:0},250,function(){$(this).remove();})
inner.css('min-height','');inner.fadeTo(250,1);}else{var content=$(response.content);inner.append(content);content.addClass('is-invisible');content.addClass('opacity-animate');block.find('.rb-loader').animate({opacity:0},250,function(){$(this).css({'display':'none'});});setTimeout(function(){content.removeClass('is-invisible');},250);block.find('.loadmore-trigger').removeClass('loading');}
self.ajaxTriggerState(block,uuid);self.ajaxData[uuid].processing=false;if(inner.hasClass('is-masonry')){$(inner).isotope('reloadItems');}
block.dequeue();self.reInitPagination();Waypoint.refreshAll();});}
Module.ajaxTriggerState=function(block,uuid){var self=this;block.find('.pagination-trigger').removeClass('is-disable');if(self.ajaxData[uuid].paged<2){block.find('[data-type="prev"]').addClass('is-disable');}else if(self.ajaxData[uuid].paged>=self.ajaxData[uuid].page_max){block.find('[data-type="next"]').addClass('is-disable');block.find('.loadmore-trigger').addClass('is-disable').hide();block.find('.pagination-infinite').addClass('is-disable').hide();}}
Module.getBlockSettings=function(uuid){var settings;if('undefined'!==typeof window[uuid]){settings=window[uuid];}
return this.cleanNull(settings);}
Module.cleanNull=function(data){if('string'==typeof data){return data;}
$.each(data,function(key,value){if(value===''||value===null){delete data[key];}});return data;}
Module.singleInfiniteLoadNext=function(){var infiniteWrapper=$('#single-post-infinite');if(!infiniteWrapper.length){return;}
var self=this;var infiniteLoadPoint=$('#single-infinite-point');var animationIcon=infiniteLoadPoint.find('.rb-loader');var loadNexParam={element:infiniteLoadPoint,offset:'bottom-in-view',handler:function(direction){if(true===self.ajaxData['singleProcessing']||'up'==direction){return;}
var nextPostURL=infiniteWrapper.data('nextposturl');if(nextPostURL.indexOf('?')!=-1||nextPostURL.indexOf('#')!=-1){nextPostURL=nextPostURL+'&rbsnp=1';}else{nextPostURL=nextPostURL+'?rbsnp=1';}
self.ajaxData['singleProcessing']=true;animationIcon.css({'display':'block'}).animate({opacity:1},250);$.ajax({type:'GET',url:nextPostURL,dataType:'html',success:function(response){response=$.parseJSON(JSON.stringify(response));response=$('<div id="temp-dom"></div>').append($.parseHTML(response));response=response.find('.single-post-outer');var nextPostURL=response.data('nextposturl');if('undefined'!==typeof(nextPostURL)&&nextPostURL.length>0){infiniteWrapper.data('nextposturl',nextPostURL);}else{infiniteWrapper.removeAttr('id');infiniteLoadPoint.remove();}
animationIcon.animate({opacity:0},250).delay(250).css({'display':'none'});infiniteWrapper.append(response);self.ajaxData['singleProcessing']=false;setTimeout(function(){Waypoint.refreshAll();self.reInitAll();if('undefined'!==typeof FOXIZ_CORE_SCRIPT){FOXIZ_CORE_SCRIPT.loadGoogleAds(response);FOXIZ_CORE_SCRIPT.loadInstagram(response);}},1);}});}}
self.wPoint['ajaxSingleNextPosts']=new Waypoint(loadNexParam);};Module.singleScrollRefresh=function(){var infiniteWrapper=$('#single-post-infinite');if(!infiniteWrapper.length){return;}
var self=this;self.articleData=[];var articleOuter=infiniteWrapper.find('.single-post-outer');if(articleOuter.length>0){self.inviewPostID=articleOuter.eq(0).data('postid');articleOuter.each(function(){var article=$(this);var itemData={postID:article.data('postid'),postURL:article.data('postlink'),postTitle:article.find('h1.s-title').text(),shareList:article.find('.sticky-share-list-buffer').html(),top:article.offset().top,bottom:article.offset().top+article.outerHeight(true)};if(self.readIndicator.length>0){var content=article.find('div[itemprop="articleBody"]');content=content.eq(0);itemData.indicatorTop=content.offset().top;itemData.indicatorHeight=content.outerHeight(true)-self.window.height();}
self.articleData.push(itemData);});if(window.addEventListener){window.addEventListener('scroll',function(){self.animationFrame(self.scrollToUpdateArticle.bind(self));},false);}}}
Module.scrollToUpdateArticle=function(){var self=this;var scroll=self.window.scrollTop();self.articleData.every(function(article){if(scroll>(article.top+5)&&scroll<(article.bottom-5)){if(article.indicatorTop){self.readIndicatorPercent=((scroll-article.indicatorTop)/article.indicatorHeight)*100;if(self.readIndicatorPercent<=130){self.readIndicator.css('width',self.readIndicatorPercent+'%');}}
if(article.postID!=self.inviewPostID){self.inviewPostID=article.postID;if(article.postURL!==''){history.replaceState(null,null,article.postURL);}
document.title=article.postTitle;$('.single-post-outer').removeClass('activated');$('[data-postid="'+article.postID+'"]').addClass('activated');$('#s-title-sticky .sticky-title').hide().html(article.postTitle).fadeIn(300);$('#s-title-sticky .sticky-share-list').html(article.shareList);self.body.find('.floating-video').removeClass('floating-activated');if('undefined'!==typeof FOXIZ_CORE_SCRIPT){FOXIZ_CORE_SCRIPT.updateGA(article);}}
return false;}
return true;});}
Module.productQuantity=function(){this.document.on('click','.quantity .quantity-btn',function(e){e.preventDefault();var button=$(this);var step=1;var input=button.parent().find('input');var min=1;var max=9999;var value_old=parseInt(input.val());var value_new=parseInt(input.val());if(input.attr('step')){step=parseInt(input.attr('step'));}
if(input.attr('min')){min=parseInt(input.attr('min'));}
if(input.attr('max')){max=parseInt(input.attr('max'));}
if(button.hasClass('up')){if(value_old<max){value_new=value_old+step;}else{value_new=1;}}else if(button.hasClass('down')){if(value_old>min){value_new=value_old-step;}else{value_new=0;}}
if(!input.attr('disabled')){input.val(value_new).change();}});}
return Module;}(FOXIZ_MAIN_SCRIPTS||{},jQuery))
jQuery(document).ready(function($){FOXIZ_MAIN_SCRIPTS.init();});jQuery(window).on('elementor/frontend/init',function(){FOXIZ_MAIN_SCRIPTS.isElementorEditor=true;FOXIZ_MAIN_SCRIPTS.editorDarkModeInit=false;if(window.elementor&&window.elementorFrontend){elementorFrontend.hooks.addAction('frontend/element_ready/widget',FOXIZ_MAIN_SCRIPTS.initElementor);}});
(()=>{var e={1677:()=>{function e(e){for(var t=!!e.getAttribute("data-show-if"),r=t?e.getAttribute("data-show-if").split(":"):e.getAttribute("data-hide-if").split(":"),n=r[0],a=(r.length>1?r[1]:"*").split("|"),i=function(e,t){for(var r=[],n=e.querySelectorAll('input[name="'+t+'"],select[name="'+t+'"],textarea[name="'+t+'"]'),a=0;a<n.length;a++){var i=n[a];("radio"!==i.type&&"checkbox"!==i.type||i.checked)&&r.push(i.value)}return r}(function(e){for(var t=e;t.parentElement;)if("FORM"===(t=t.parentElement).tagName)return t;return null}(e),n),o=!1,s=0;s<i.length;s++){var c=i[s];if(o=a.indexOf(c)>-1||a.indexOf("*")>-1&&c.length>0)break}e.style.display=t?o?"":"none":o?"none":"";var u=e.querySelectorAll("input,select,textarea");[].forEach.call(u,(function(e){(o||t)&&e.getAttribute("data-was-required")&&(e.required=!0,e.removeAttribute("data-was-required")),o&&t||!e.required||(e.setAttribute("data-was-required","true"),e.required=!1)}))}function t(){var t=document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");[].forEach.call(t,e)}function r(t){if(t.target&&t.target.form&&!(t.target.form.className.indexOf("mc4wp-form")<0)){var r=t.target.form.querySelectorAll("[data-show-if],[data-hide-if]");[].forEach.call(r,e)}}document.addEventListener("keyup",r,!0),document.addEventListener("change",r,!0),document.addEventListener("mc4wp-refresh",t,!0),window.addEventListener("load",t),t()},2573:(e,t,r)=>{var n=r(7422),a=r(3409),i=function(e,t){this.id=e,this.element=t||document.createElement("form"),this.name=this.element.getAttribute("data-name")||"Form #"+this.id,this.errors=[],this.started=!1};i.prototype.setData=function(e){try{a(this.element,e)}catch(e){console.error(e)}},i.prototype.getData=function(){return n(this.element,{hash:!0,empty:!0})},i.prototype.getSerializedData=function(){return n(this.element,{hash:!1,empty:!0})},i.prototype.setResponse=function(e){this.element.querySelector(".mc4wp-response").innerHTML=e},i.prototype.reset=function(){this.setResponse(""),this.element.querySelector(".mc4wp-form-fields").style.display="",this.element.reset()},e.exports=i},8592:(e,t,r)=>{var n=r(2573),a=[],i={};function o(e,t){i[e]=i[e]||[],i[e].forEach((function(e){return e.apply(null,t)}))}function s(e,t){t=t||parseInt(e.getAttribute("data-id"))||0;var r=new n(t,e);return a.push(r),r}e.exports={get:function(e){e=parseInt(e);for(var t=0;t<a.length;t++)if(a[t].id===e)return a[t];return s(document.querySelector(".mc4wp-form-"+e),e)},getByElement:function(e){for(var t=e.form||e,r=0;r<a.length;r++)if(a[r].element===t)return a[r];return s(t)},on:function(e,t){i[e]=i[e]||[],i[e].push(t)},off:function(e,t){i[e]=i[e]||[],i[e]=i[e].filter((function(e){return e!==t}))},trigger:function(e,t){"submit"===e||e.indexOf(".submit")>0?o(e,t):window.setTimeout((function(){o(e,t)}),1)}}},7422:e=>{var t=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function a(e,t,r){if(0===t.length)return r;var n=t.shift(),i=n.match(/^\[(.+?)\]$/);if("[]"===n)return e=e||[],Array.isArray(e)?e.push(a(null,t,r)):(e._values=e._values||[],e._values.push(a(null,t,r))),e;if(i){var o=i[1],s=+o;isNaN(s)?(e=e||{})[o]=a(e[o],t,r):(e=e||[])[s]=a(e[s],t,r)}else e[n]=a(e[n],t,r);return e}function i(e,t,r){if(t.match(n))a(e,function(e){var t=[],r=new RegExp(n),a=/^([^\[\]]*)/.exec(e);for(a[1]&&t.push(a[1]);null!==(a=r.exec(e));)t.push(a[1]);return t}(t),r);else{var i=e[t];i?(Array.isArray(i)||(e[t]=[i]),e[t].push(r)):e[t]=r}return e}function o(e,t,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=(r=encodeURIComponent(r)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+r}e.exports=function(e,n){"object"!=typeof n?n={hash:!!n}:void 0===n.hash&&(n.hash=!0);for(var a=n.hash?{}:"",s=n.serializer||(n.hash?i:o),c=e&&e.elements?e.elements:[],u=Object.create(null),l=0;l<c.length;++l){var f=c[l];if((n.disabled||!f.disabled)&&f.name&&r.test(f.nodeName)&&!t.test(f.type)){var d=f.name,m=f.value;if("checkbox"!==f.type&&"radio"!==f.type||f.checked||(m=void 0),n.empty){if("checkbox"!==f.type||f.checked||(m=""),"radio"===f.type&&(u[f.name]||f.checked?f.checked&&(u[f.name]=!0):u[f.name]=!1),null==m&&"radio"==f.type)continue}else if(!m)continue;if("select-multiple"!==f.type)a=s(a,d,m);else{m=[];for(var p=f.options,h=!1,v=0;v<p.length;++v){var g=p[v],y=n.empty&&!g.value,w=g.value||y;g.selected&&w&&(h=!0,a=n.hash&&"[]"!==d.slice(d.length-2)?s(a,d+"[]",g.value):s(a,d,g.value))}!h&&n.empty&&(a=s(a,d,""))}}}if(n.empty)for(var d in u)u[d]||(a=s(a,d,""));return a}},3409:e=>{e.exports&&(e.exports=function e(t,r,n){for(var a in r)if(r.hasOwnProperty(a)){var i=a,o=r[a];if(void 0===o&&(o=""),null===o&&(o=""),void 0!==n&&(i=n+"["+a+"]"),o.constructor===Array)i+="[]";else if("object"==typeof o){e(t,o,i);continue}var s=t.elements.namedItem(i);if(s)switch(s.type||s[0].type){default:s.value=o;break;case"radio":case"checkbox":for(var c=o.constructor===Array?o:[o],u=0;u<s.length;u++)s[u].checked=c.indexOf(s[u].value)>-1;break;case"select-multiple":c=o.constructor===Array?o:[o];for(var l=0;l<s.options.length;l++)s.options[l].selected=c.indexOf(s.options[l].value)>-1;break;case"select":case"select-one":s.value=o.toString()||o;break;case"date":s.value=new Date(o).toISOString().split("T")[0]}}})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{var e=window.mc4wp||{},t=r(8592);function n(e,r){t.trigger(r[0].id+"."+e,r),t.trigger(e,r)}function a(e,t){document.addEventListener(e,(function(e){if(e.target){var r=e.target,n=!1;"string"==typeof r.className&&(n=r.className.indexOf("mc4wp-form")>-1),n||"function"!=typeof r.matches||(n=r.matches(".mc4wp-form *")),n&&t.call(e,e)}}),!0)}if(r(1677),a("submit",(function(e){var r=t.getByElement(e.target);e.defaultPrevented||t.trigger(r.id+".submit",[r,e]),e.defaultPrevented||t.trigger("submit",[r,e])})),a("focus",(function(e){var r=t.getByElement(e.target);r.started||(n("started",[r,e]),r.started=!0)})),a("change",(function(e){n("change",[t.getByElement(e.target),e])})),e.listeners){for(var i=e.listeners,o=0;o<i.length;o++)t.on(i[o].event,i[o].callback);delete e.listeners}e.forms=t,window.mc4wp=e})()})();
/*! elementor - v3.8.1 - 13-11-2022 */
(()=>{"use strict";var e,r,_,t,a,i={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return i[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=i,e=[],__webpack_require__.O=(r,_,t,a)=>{if(!_){var i=1/0;for(u=0;u<e.length;u++){for(var[_,t,a]=e[u],n=!0,c=0;c<_.length;c++)(!1&a||i>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,a<i&&(i=a));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[_,t,a]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);__webpack_require__.r(a);var i={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,__webpack_require__.d(a,i),a},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.2d166d71ba2a6a9e66fd.bundle.min.js":48===e?"text-path.b1be1b4899a9ff20217b.bundle.min.js":209===e?"accordion.be7db2e47c14ed1141fb.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.2327c8f9bd0a558456b9.bundle.min.js":181===e?"toggle.933918840481dcc64242.bundle.min.js":791===e?"video.fab0f05f6306583e8ff8.bundle.min.js":268===e?"image-carousel.e02695895b33b77d89de.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.0fe1d3abe4a4fd76f033.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="elementor:",__webpack_require__.l=(e,r,_,i)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",a+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var a=new Promise(((_,a)=>t=e[r]=[_,a]));_.push(t[2]=a);var i=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(i,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var a=_&&("load"===_.type?"missing":_.type),i=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",n.name="ChunkLoadError",n.type=a,n.request=i,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,a,[i,n,c]=_,o=0;if(i.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<i.length;o++)a=i[o],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
/*! elementor - v3.8.1 - 13-11-2022 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const r of t)if(e.constructor.name===r.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(r=>{t[r]=e.attributes[r]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},2821:(e,t,r)=>{"use strict";var n=r(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(3090));class SwiperHandlerBase extends o.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,findElement(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).parent().closest(".elementor-element").is(t)}))},getUniqueHandlerID(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let r="change";"global"!==t&&(r+=":"+t),e.editorListeners.push({event:r,to:elementor.channels.editor,callback(t,r){e.getUniqueHandlerID(r.model.cid,r.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,r)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(t,r){if(r.model.cid!==e.getModelCID())return;const n=Object.keys(t.changed)[0];e.onEditSettingsChange(n,t.changed[n])}}),["page"].forEach((function(t){var r="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[r]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback(t){e[r](t.changed)}})}))},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType(){return this.$element.data("element_type")},getWidgetType(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(e){let t={};const r=this.getModelCID();if(this.isEdit&&r){const e=elementorFrontend.config.elements.data[r],n=e.attributes;let o=n.widgetType||n.elType;n.isInner&&(o="inner-"+o);let i=elementorFrontend.config.elements.keys[o];i||(i=elementorFrontend.config.elements.keys[o]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&i.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==i.indexOf(e)){let r=n[e];r.toJSON&&(r=r.toJSON()),t[e]=r}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},6412:(e,t,r)=>{"use strict";var n=r(3203),o=n(r(5955)),i=n(r(8135)),s=n(r(5658)),a=n(r(3090)),u=n(r(2821));o.default.frontend={Document:i.default,tools:{StretchElement:s.default},handlers:{Base:a.default,SwiperBase:u.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window}}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){var e,t=this.getSettings("selectors.container");try{e=jQuery(t)}catch(e){}e&&e.length||(e=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var r=this.elements.$element,n=e.innerWidth(),o=r.offset().left,i="fixed"===r.css("position"),s=i?0:o;if(window!==e[0]){var a=e.offset().left;i&&(s=a),o>a&&(s=o-a)}i||(elementorFrontend.config.is_rtl&&(s=n-(r.outerWidth()+s)),s=-s);var u={};u.width=n+"px",u[this.getSettings("direction")]=s+"px",r.css(u)},reset(){var e={width:""};e[this.getSettings("direction")]="",this.elements.$element.css(e)}})},2618:(e,t,r)=>{"use strict";var n=r(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(740);var o=n(r(7597)),i=n(r(381));class ArgsObject extends o.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(t,e))throw Error(`${e} is required.`)}requireArgumentType(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,r),typeof r[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,r),!(r[e]instanceof t||(0,i.default)(r[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,r),r[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0,r(740),r(5623);class ForceMethodImplementation extends Error{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`,t),Object.keys(t).length&&console.error(t),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=e=>{const t=Error().stack.split("\n")[2].trim(),r=t.startsWith("at new")?"constructor":t.split(" ")[1],n={};if(n.functionName=r,n.fullName=r,n.functionName.includes(".")){const e=n.functionName.split(".");n.className=e[0],n.functionName=e[1]}else n.isStatic=!0;throw new ForceMethodImplementation(n,e)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}}t.default=InstanceType},1192:(e,t,r)=>{"use strict";r(740);const Module=function(){const e=jQuery,t=arguments,r=this,n={};let o;const ensureClosureMethods=function(){e.each(r,(function(e){const t=r[e];"function"==typeof t&&(r[e]=function(){return t.apply(r,arguments)})}))},initSettings=function(){o=r.getDefaultSettings();const n=t[0];n&&e.extend(!0,o,n)},init=function(){r.__construct.apply(r,t),ensureClosureMethods(),initSettings(),r.trigger("init")};this.getItems=function(e,t){if(t){const r=t.split("."),n=r.splice(0,1);if(!r.length)return e[n];if(!e[n])return;return this.getItems(e[n],r.join("."))}return e},this.getSettings=function(e){return this.getItems(o,e)},this.setSettings=function(t,n,i){if(i||(i=o),"object"==typeof t)return e.extend(i,t),r;const s=t.split("."),a=s.splice(0,1);return s.length?(i[a]||(i[a]={}),r.setSettings(s.join("."),n,i[a])):(i[a]=n,r)},this.getErrorMessage=function(e,t){let r;if("forceMethodImplementation"===e)r=`The method '${t}' must to be implemented in the inheritor child.`;else r="An error occurs";return r},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,o){if("object"==typeof t)return e.each(t,(function(e){r.on(e,this)})),r;return t.split(" ").forEach((function(e){n[e]||(n[e]=[]),n[e].push(o)})),r},this.off=function(e,t){if(!n[e])return r;if(!t)return delete n[e],r;const o=n[e].indexOf(t);return-1!==o&&(delete n[e][o],n[e]=n[e].filter((e=>e))),r},this.trigger=function(t){const o="on"+t[0].toUpperCase()+t.slice(1),i=Array.prototype.slice.call(arguments,1);r[o]&&r[o].apply(r,i);const s=n[t];return s?(e.each(s,(function(e,t){t.apply(r,i)})),r):r},init()};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,r=this,child=function(){return r.apply(this,arguments)};return t.extend(child,r),(child.prototype=Object.create(t.extend({},r.prototype,e))).constructor=child,child.__super__=r.prototype,child},e.exports=Module},6516:(e,t,r)=>{"use strict";var n=r(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(2640)).default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var e=[],t=this.elements.$container.position().top,r=this.getSettings(),n=r.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(o){var i=Math.floor(o/n),s=jQuery(this),a=s[0].getBoundingClientRect().height+r.verticalSpaceBetween;if(i){var u=s.position(),c=o%n,l=u.top-t-e[c];l-=parseInt(s.css("margin-top"),10),l*=-1,s.css("margin-top",l+"px"),e[c]+=a}else e.push(a)}))}});t.default=o},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const r={root:e.root||null,rootMargin:e.offset||"0px",threshold:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=[];if(e>0&&e<=100){const r=100/e;for(let e=0;e<=100;e+=r)t.push(e/100)}else t.push(0);return t}(e.sensitivity)};return new IntersectionObserver((function handleIntersect(r){const n=r[0].boundingClientRect.y,o=r[0].isIntersecting,i=n<t?"down":"up",s=Math.abs(parseFloat((100*r[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:o,scrollPercentage:s,intersectionScrollDirection:i}),t=n}),r)}static getElementViewportPercentage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=e[0].getBoundingClientRect(),n=t.start||0,o=t.end||0,i=window.innerHeight*n/100,s=window.innerHeight*o/100,a=r.top-window.innerHeight,u=0-a+i,c=r.top+i+e.height()-a+s,l=Math.max(0,Math.min(u/c,1));return parseFloat((100*l).toFixed(2))}static getPageScrollPercentage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const r=e.start||0,n=e.end||0,o=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,i=o*r/100,s=o+i+o*n/100;return(document.documentElement.scrollTop+document.body.scrollTop+i)/s*100}}},2640:(e,t,r)=>{"use strict";var n=r(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1192)).default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}});t.default=o},5955:(e,t,r)=>{"use strict";var n=r(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1192)),i=n(r(2640)),s=n(r(2618)),a=n(r(6516)),u=n(r(400)),c=n(r(869)),l=window.elementorModules={Module:o.default,ViewModule:i.default,ArgsObject:s.default,ForceMethodImplementation:c.default,utils:{Masonry:a.default,Scroll:u.default}};t.default=l},5089:(e,t,r)=>{var n=r(930),o=r(9268),i=TypeError;e.exports=function(e){if(n(e))return e;throw i(o(e)+" is not a function")}},1378:(e,t,r)=>{var n=r(930),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw i("Can't set "+o(e)+" as a prototype")}},8669:(e,t,r)=>{var n=r(211),o=r(4710),i=r(7826).f,s=n("unscopables"),a=Array.prototype;null==a[s]&&i(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},6112:(e,t,r)=>{var n=r(8759),o=String,i=TypeError;e.exports=function(e){if(n(e))return e;throw i(o(e)+" is not an object")}},6198:(e,t,r)=>{var n=r(4088),o=r(7740),i=r(2871),createMethod=function(e){return function(t,r,s){var a,u=n(t),c=i(u),l=o(s,c);if(e&&r!=r){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===r)return e||l||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},2306:(e,t,r)=>{var n=r(8240),o=n({}.toString),i=n("".slice);e.exports=function(e){return i(o(e),8,-1)}},375:(e,t,r)=>{var n=r(2371),o=r(930),i=r(2306),s=r(211)("toStringTag"),a=Object,u="Arguments"==i(function(){return arguments}());e.exports=n?i:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=a(e),s))?r:u?i(t):"Object"==(n=i(t))&&o(t.callee)?"Arguments":n}},1765:(e,t,r)=>{var n=r(8240),o=Error,i=n("".replace),s=String(o("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(s);e.exports=function(e,t){if(u&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=i(e,a,"");return e}},8474:(e,t,r)=>{var n=r(9606),o=r(6095),i=r(4399),s=r(7826);e.exports=function(e,t,r){for(var a=o(t),u=s.f,c=i.f,l=0;l<a.length;l++){var f=a[l];n(e,f)||r&&n(r,f)||u(e,f,c(t,f))}}},2585:(e,t,r)=>{var n=r(5283),o=r(7826),i=r(5736);e.exports=n?function(e,t,r){return o.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},5736:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1343:(e,t,r)=>{var n=r(930),o=r(7826),i=r(3712),s=r(9444);e.exports=function(e,t,r,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:t;if(n(r)&&i(r,c,a),a.global)u?e[t]=r:s(t,r);else{try{a.unsafe?e[t]&&(u=!0):delete e[t]}catch(e){}u?e[t]=r:o.f(e,t,{value:r,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9444:(e,t,r)=>{var n=r(2086),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},5283:(e,t,r)=>{var n=r(3677);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(e,t,r)=>{var n=r(2086),o=r(8759),i=n.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},4999:(e,t,r)=>{var n=r(563);e.exports=n("navigator","userAgent")||""},1448:(e,t,r)=>{var n,o,i=r(2086),s=r(4999),a=i.process,u=i.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},8684:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2114:(e,t,r)=>{var n=r(3677),o=r(5736);e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},1695:(e,t,r)=>{var n=r(2086),o=r(4399).f,i=r(2585),s=r(1343),a=r(9444),u=r(8474),c=r(7189);e.exports=function(e,t){var r,l,f,p,d,g=e.target,h=e.global,m=e.stat;if(r=h?n:m?n[g]||a(g,{}):(n[g]||{}).prototype)for(l in t){if(p=t[l],f=e.dontCallGetSet?(d=o(r,l))&&d.value:r[l],!c(h?l:g+(m?".":"#")+l,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),s(r,l,p,e)}}},3677:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},7258:(e,t,r)=>{var n=r(6059),o=Function.prototype,i=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?s.bind(i):function(){return s.apply(i,arguments)})},6059:(e,t,r)=>{var n=r(3677);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9413:(e,t,r)=>{var n=r(6059),o=Function.prototype.call;e.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},4398:(e,t,r)=>{var n=r(5283),o=r(9606),i=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function something(){}.name,c=a&&(!n||n&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},8240:(e,t,r)=>{var n=r(6059),o=Function.prototype,i=o.bind,s=o.call,a=n&&i.bind(s,s);e.exports=n?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},563:(e,t,r)=>{var n=r(2086),o=r(930),aFunction=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?aFunction(n[e]):n[e]&&n[e][t]}},2964:(e,t,r)=>{var n=r(5089);e.exports=function(e,t){var r=e[t];return null==r?void 0:n(r)}},2086:(e,t,r)=>{var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},9606:(e,t,r)=>{var n=r(8240),o=r(3060),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){return i(o(e),t)}},7153:e=>{e.exports={}},5963:(e,t,r)=>{var n=r(563);e.exports=n("document","documentElement")},6761:(e,t,r)=>{var n=r(5283),o=r(3677),i=r(821);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(e,t,r)=>{var n=r(8240),o=r(3677),i=r(2306),s=Object,a=n("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):s(e)}:s},5070:(e,t,r)=>{var n=r(930),o=r(8759),i=r(7530);e.exports=function(e,t,r){var s,a;return i&&n(s=t.constructor)&&s!==r&&o(a=s.prototype)&&a!==r.prototype&&i(e,a),e}},9277:(e,t,r)=>{var n=r(8240),o=r(930),i=r(4489),s=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},8945:(e,t,r)=>{var n=r(8759),o=r(2585);e.exports=function(e,t){n(t)&&"cause"in t&&o(e,"cause",t.cause)}},3278:(e,t,r)=>{var n,o,i,s=r(9316),a=r(2086),u=r(8240),c=r(8759),l=r(2585),f=r(9606),p=r(4489),d=r(8944),g=r(7153),h="Object already initialized",m=a.TypeError,v=a.WeakMap;if(s||p.state){var y=p.state||(p.state=new v),b=u(y.get),x=u(y.has),E=u(y.set);n=function(e,t){if(x(y,e))throw new m(h);return t.facade=e,E(y,e,t),t},o=function(e){return b(y,e)||{}},i=function(e){return x(y,e)}}else{var S=d("state");g[S]=!0,n=function(e,t){if(f(e,S))throw new m(h);return t.facade=e,l(e,S,t),t},o=function(e){return f(e,S)?e[S]:{}},i=function(e){return f(e,S)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return r}}}},930:e=>{e.exports=function(e){return"function"==typeof e}},7189:(e,t,r)=>{var n=r(3677),o=r(930),i=/#|\.prototype\./,isForced=function(e,t){var r=a[s(e)];return r==c||r!=u&&(o(t)?n(t):!!t)},s=isForced.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=isForced.data={},u=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},8759:(e,t,r)=>{var n=r(930);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},3296:e=>{e.exports=!1},2071:(e,t,r)=>{var n=r(563),o=r(930),i=r(5516),s=r(1876),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return o(t)&&i(t.prototype,a(e))}},2871:(e,t,r)=>{var n=r(4005);e.exports=function(e){return n(e.length)}},3712:(e,t,r)=>{var n=r(3677),o=r(930),i=r(9606),s=r(5283),a=r(4398).CONFIGURABLE,u=r(9277),c=r(3278),l=c.enforce,f=c.get,p=Object.defineProperty,d=s&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),g=String(String).split("String"),h=e.exports=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),d&&r&&i(r,"arity")&&e.length!==r.arity&&p(e,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=l(e);return i(n,"source")||(n.source=g.join("string"==typeof t?t:"")),e};Function.prototype.toString=h((function toString(){return o(this)&&f(this).source||u(this)}),"toString")},5681:e=>{var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function trunc(e){var n=+e;return(n>0?r:t)(n)}},3193:(e,t,r)=>{var n=r(1448),o=r(3677);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},9316:(e,t,r)=>{var n=r(2086),o=r(930),i=r(9277),s=n.WeakMap;e.exports=o(s)&&/native code/.test(i(s))},1879:(e,t,r)=>{var n=r(4059);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},4710:(e,t,r)=>{var n,o=r(6112),i=r(7711),s=r(8684),a=r(7153),u=r(5963),c=r(821),l=r(8944),f=l("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return"<script>"+e+"</"+"script>"},NullProtoObjectViaActiveX=function(e){e.write(scriptTag("")),e.close();var t=e.parentWindow.Object;return e=null,t},NullProtoObject=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}var e,t;NullProtoObject="undefined"!=typeof document?document.domain&&n?NullProtoObjectViaActiveX(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(scriptTag("document.F=Object")),e.close(),e.F):NullProtoObjectViaActiveX(n);for(var r=s.length;r--;)delete NullProtoObject.prototype[s[r]];return NullProtoObject()};a[f]=!0,e.exports=Object.create||function create(e,t){var r;return null!==e?(EmptyConstructor.prototype=o(e),r=new EmptyConstructor,EmptyConstructor.prototype=null,r[f]=e):r=NullProtoObject(),void 0===t?r:i.f(r,t)}},7711:(e,t,r)=>{var n=r(5283),o=r(8202),i=r(7826),s=r(6112),a=r(4088),u=r(8779);t.f=n&&!o?Object.defineProperties:function defineProperties(e,t){s(e);for(var r,n=a(t),o=u(t),c=o.length,l=0;c>l;)i.f(e,r=o[l++],n[r]);return e}},7826:(e,t,r)=>{var n=r(5283),o=r(6761),i=r(8202),s=r(6112),a=r(2258),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";t.f=n?i?function defineProperty(e,t,r){if(s(e),t=a(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&d in r&&!r.writable){var n=l(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:p in r?r.configurable:n.configurable,enumerable:f in r?r.enumerable:n.enumerable,writable:!1})}return c(e,t,r)}:c:function defineProperty(e,t,r){if(s(e),t=a(t),s(r),o)try{return c(e,t,r)}catch(e){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},4399:(e,t,r)=>{var n=r(5283),o=r(9413),i=r(7446),s=r(5736),a=r(4088),u=r(2258),c=r(9606),l=r(6761),f=Object.getOwnPropertyDescriptor;t.f=n?f:function getOwnPropertyDescriptor(e,t){if(e=a(e),t=u(t),l)try{return f(e,t)}catch(e){}if(c(e,t))return s(!o(i.f,e,t),e[t])}},62:(e,t,r)=>{var n=r(1352),o=r(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return n(e,o)}},6952:(e,t)=>{t.f=Object.getOwnPropertySymbols},5516:(e,t,r)=>{var n=r(8240);e.exports=n({}.isPrototypeOf)},1352:(e,t,r)=>{var n=r(8240),o=r(9606),i=r(4088),s=r(6198).indexOf,a=r(7153),u=n([].push);e.exports=function(e,t){var r,n=i(e),c=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&u(l,r);for(;t.length>c;)o(n,r=t[c++])&&(~s(l,r)||u(l,r));return l}},8779:(e,t,r)=>{var n=r(1352),o=r(8684);e.exports=Object.keys||function keys(e){return n(e,o)}},7446:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function propertyIsEnumerable(e){var t=n(this,e);return!!t&&t.enumerable}:r},7530:(e,t,r)=>{var n=r(8240),o=r(6112),i=r(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function setPrototypeOf(r,n){return o(r),i(n),t?e(r,n):r.__proto__=n,r}}():void 0)},7999:(e,t,r)=>{var n=r(9413),o=r(930),i=r(8759),s=TypeError;e.exports=function(e,t){var r,a;if("string"===t&&o(r=e.toString)&&!i(a=n(r,e)))return a;if(o(r=e.valueOf)&&!i(a=n(r,e)))return a;if("string"!==t&&o(r=e.toString)&&!i(a=n(r,e)))return a;throw s("Can't convert object to primitive value")}},6095:(e,t,r)=>{var n=r(563),o=r(8240),i=r(62),s=r(6952),a=r(6112),u=o([].concat);e.exports=n("Reflect","ownKeys")||function ownKeys(e){var t=i.f(a(e)),r=s.f;return r?u(t,r(e)):t}},1632:(e,t,r)=>{var n=r(7826).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},9586:e=>{var t=TypeError;e.exports=function(e){if(null==e)throw t("Can't call method on "+e);return e}},8944:(e,t,r)=>{var n=r(9197),o=r(5422),i=n("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},4489:(e,t,r)=>{var n=r(2086),o=r(9444),i="__core-js_shared__",s=n[i]||o(i,{});e.exports=s},9197:(e,t,r)=>{var n=r(3296),o=r(4489);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},7740:(e,t,r)=>{var n=r(9502),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},4088:(e,t,r)=>{var n=r(5974),o=r(9586);e.exports=function(e){return n(o(e))}},9502:(e,t,r)=>{var n=r(5681);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},4005:(e,t,r)=>{var n=r(9502),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},3060:(e,t,r)=>{var n=r(9586),o=Object;e.exports=function(e){return o(n(e))}},1288:(e,t,r)=>{var n=r(9413),o=r(8759),i=r(2071),s=r(2964),a=r(7999),u=r(211),c=TypeError,l=u("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var r,u=s(e,l);if(u){if(void 0===t&&(t="default"),r=n(u,e,t),!o(r)||i(r))return r;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2258:(e,t,r)=>{var n=r(1288),o=r(2071);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},2371:(e,t,r)=>{var n={};n[r(211)("toStringTag")]="z",e.exports="[object z]"===String(n)},4059:(e,t,r)=>{var n=r(375),o=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},9268:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},5422:(e,t,r)=>{var n=r(8240),o=0,i=Math.random(),s=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},1876:(e,t,r)=>{var n=r(3193);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(e,t,r)=>{var n=r(5283),o=r(3677);e.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},211:(e,t,r)=>{var n=r(2086),o=r(9197),i=r(9606),s=r(5422),a=r(3193),u=r(1876),c=o("wks"),l=n.Symbol,f=l&&l.for,p=u?l:l&&l.withoutSetter||s;e.exports=function(e){if(!i(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&i(l,e)?c[e]=l[e]:c[e]=u&&f?f(t):p(t)}return c[e]}},1557:(e,t,r)=>{"use strict";var n=r(563),o=r(9606),i=r(2585),s=r(5516),a=r(7530),u=r(8474),c=r(1632),l=r(5070),f=r(1879),p=r(8945),d=r(1765),g=r(2114),h=r(5283),m=r(3296);e.exports=function(e,t,r,v){var y="stackTraceLimit",b=v?2:1,x=e.split("."),E=x[x.length-1],S=n.apply(null,x);if(S){var w=S.prototype;if(!m&&o(w,"cause")&&delete w.cause,!r)return S;var O=n("Error"),I=t((function(e,t){var r=f(v?t:e,void 0),n=v?new S(e):new S;return void 0!==r&&i(n,"message",r),g&&i(n,"stack",d(n.stack,2)),this&&s(w,this)&&l(n,this,I),arguments.length>b&&p(n,arguments[b]),n}));if(I.prototype=w,"Error"!==E?a?a(I,O):u(I,O,{name:!0}):h&&y in S&&(c(I,S,y),c(I,S,"prepareStackTrace")),u(I,S),!m)try{w.name!==E&&i(w,"name",E),w.constructor=I}catch(e){}return I}}},5623:(e,t,r)=>{"use strict";var n=r(1695),o=r(6198).includes,i=r(3677),s=r(8669);n({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function includes(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},740:(e,t,r)=>{var n=r(1695),o=r(2086),i=r(7258),s=r(1557),a="WebAssembly",u=o.WebAssembly,c=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(e,t){var r={};r[e]=s(e,t,c),n({global:!0,constructor:!0,arity:1,forced:c},r)},exportWebAssemblyErrorCauseWrapper=function(e,t){if(u&&u[e]){var r={};r[e]=s("WebAssembly."+e,t,c),n({target:a,stat:!0,constructor:!0,arity:1,forced:c},r)}};exportGlobalErrorCauseWrapper("Error",(function(e){return function Error(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(e){return function EvalError(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(e){return function RangeError(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(e){return function ReferenceError(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(e){return function SyntaxError(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(e){return function TypeError(t){return i(e,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(e){return function URIError(t){return i(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(e){return function CompileError(t){return i(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(e){return function LinkError(t){return i(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(e){return function RuntimeError(t){return i(e,this,arguments)}}))},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=6412,e(e.s=t)}]);
!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&(0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
/*! elementor - v3.8.1 - 13-11-2022 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(8135));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:s.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,i=t.elementorType,s=this.documentClasses[i]||this.documentClasses.base;this.documents[n]=new s({$element:e,id:n})}}t.default=_default},9804:(e,t,n)=>{"use strict";var i=n(3203),s=i(n(6397)),o=i(n(8704)),r=i(n(4985)),a=i(n(7537)),l=i(n(355)),d=i(n(2804)),c=i(n(3384));e.exports=function(e){var t=this;const i={};this.elementsHandlers={"accordion.default":()=>n.e(209).then(n.bind(n,8470)),"alert.default":()=>n.e(745).then(n.bind(n,9269)),"counter.default":()=>n.e(120).then(n.bind(n,7884)),"progress.default":()=>n.e(192).then(n.bind(n,1351)),"tabs.default":()=>n.e(520).then(n.bind(n,9459)),"toggle.default":()=>n.e(181).then(n.bind(n,2)),"video.default":()=>n.e(791).then(n.bind(n,5363)),"image-carousel.default":()=>n.e(268).then(n.bind(n,5914)),"text-editor.default":()=>n.e(357).then(n.bind(n,1327)),"wp-widget-media_audio.default":()=>n.e(52).then(n.bind(n,7602))};const addElementsHandlers=()=>{this.elementsHandlers.section=[d.default,...o.default,l.default,c.default],this.elementsHandlers.container=[...o.default],elementorFrontend.isEditMode()&&this.elementsHandlers.container.push(...r.default),this.elementsHandlers.column=a.default,e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const i=n[1]||null;this.attachHandler(e,t,i)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(e,t){const n=t.$element.data("model-cid");let s;if(n){s=e.prototype.getConstructorID(),i[n]||(i[n]={});const t=i[n][s];t&&t.onDestroy()}const o=new e(t);n&&(i[n][s]=o)},this.attachHandler=(e,n,i)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";i=i?"."+i:"",elementorFrontend.hooks.addAction(`frontend/element_ready/${e}${i}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e},!0);else{const i=n();if(!i)return;i instanceof Promise?i.then((n=>{let{default:i}=n;t.addHandler(i,{$element:e},!0)})):t.addHandler(i,{$element:e},!0)}}))}(e,n,i)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(elementorFrontend.config.is_static)return;const n=jQuery(t),i=n.attr("data-element_type");if(i&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${i}`,n,e),"widget"===i)){const t=n.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,n,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",s.default),addElementsHandlers()}}},5654:(e,t,n)=>{"use strict";var i=n(3203);n(59);var s=i(n(9220)),o=i(n(5107)),r=i(n(3308)),a=i(n(1604)),l=i(n(1911)),d=i(n(4773)),c=i(n(2064)),u=i(n(8628)),h=i(n(8646)),m=i(n(6866)),g=i(n(4375)),p=i(n(6404)),f=i(n(6046)),v=n(6028);const b=n(9469),_=n(9804),y=n(3346);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0","elementorFrontend.config.experimentalFeatures.e_dom_optimization"),!elementorFrontend.config.experimentalFeatures.e_dom_optimization}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings","3.0.0","getKitSettings and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const i=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let s=i.indexOf(e);for(;s>0;){const e=t[n+"_"+i[s]];if(e||0===e)return e;s--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let i;return i=e[n]?e[n]:e[t],i}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,anchors:new y,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:r.default,assetsLoader:new m.default,escapeHTML:v.escapeHTML,events:p.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(r.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,i){if(i||(i=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,i),i instanceof jQuery){const s=t+"."+e;i.on(s,n)}else i.on(t,n,e);else i.on(t,n)}removeListeners(e,t,n,i){if(i||(i=this.elements.$window),i instanceof jQuery){const s=t+"."+e;i.off(s,n)}else i.off(t,n,e)}debounce(e,t){let n;return function(){const i=this,s=arguments,later=()=>{n=null,e.apply(i,s)},o=!n;clearTimeout(n),n=setTimeout(later,t),o&&e.apply(i,s)}}waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function(){const e=this.element||this,i=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),i}),n)}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:f.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new b,this.breakpoints=new g.default(this.config.responsive),this.storage=new o.default,this.elementsHandler=new _(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),p.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new s.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},4058:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:"elementor-background-slideshow swiper-container",swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",swiperPreloader:"swiper-lazy-preloader",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}getSwiperOptions(){const e=this.getElementSettings(),t={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===e.background_slideshow_loop,speed:e.background_slideshow_transition_duration,autoplay:{delay:e.background_slideshow_slide_duration,stopOnLastSlide:!e.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:()=>{e.background_slideshow_ken_burns&&this.handleKenBurns()}}};switch("yes"===e.background_slideshow_loop&&(t.loopedSlides=this.getSlidesCount()),e.background_slideshow_slide_transition){case"fade":t.effect="fade",t.fadeEffect={crossFade:!0};break;case"slide_down":t.autoplay.reverseDirection=!0,t.direction="vertical";break;case"slide_up":t.direction="vertical"}return"yes"===e.background_slideshow_lazyload&&(t.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),t}buildSwiperElements(){const e=this.getSettings("classes"),t=this.getElementSettings(),n="slide_left"===t.background_slideshow_slide_transition?"ltr":"rtl",i=jQuery("<div>",{class:e.swiperContainer,dir:n}),s=jQuery("<div>",{class:e.swiperWrapper}),o=t.background_slideshow_ken_burns,r="yes"===t.background_slideshow_lazyload;let a=e.slideBackground;if(o){a+=" "+e.kenBurns;const n="in"===t.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";a+=" "+e[n]}r&&(a+=" swiper-lazy"),this.elements.$slides=jQuery(),t.background_slideshow_gallery.forEach((t=>{const n=jQuery("<div>",{class:e.swiperSlide});let i;if(r){const n=jQuery("<div>",{class:e.swiperPreloader});i=jQuery("<div>",{class:a,"data-background":t.url}),i.append(n)}else i=jQuery("<div>",{class:a,style:'background-image: url("'+t.url+'");'});n.append(i),s.append(n),this.elements.$slides=this.elements.$slides.add(n)})),i.append(s),this.$element.prepend(i),this.elements.$backgroundSlideShowContainer=i}async initSlider(){if(1>=this.getSlidesCount())return;const e=this.getElementSettings(),t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns()}activate(){this.buildSwiperElements(),this.initSlider()}deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}onInit(){super.onInit(),this.getElementSettings("background_slideshow_gallery")&&this.run()}onDestroy(){super.onDestroy(),this.deactivate()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundSlideshow},9501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}calcVideosSize(e){let t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);const n=this.elements.$backgroundVideoContainer.outerWidth(),i=this.elements.$backgroundVideoContainer.outerHeight(),s=t.split(":"),o=s[0]/s[1],r=n/i>o;return{width:r?n:i*o,height:r?n/o:i}}changeVideoSize(){if("hosted"!==this.videoType&&!this.player)return;let e;if("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),!e)return;const t=this.calcVideosSize(e);e.width(t.width).height(t.height)}startVideoLoop(e){if(!this.player.getIframe().contentWindow)return;const t=this.getElementSettings(),n=t.background_video_start||0,i=t.background_video_end;if(!t.background_play_once||e){if(this.player.seekTo(n),i){setTimeout((()=>{this.startVideoLoop(!1)}),1e3*(i-n+1))}}else this.player.stopVideo()}prepareVimeoVideo(e,t){const n=this.getElementSettings(),i={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!1,background:!0,muted:!0};this.player=new e.Player(this.elements.$backgroundVideoContainer,i),this.handleVimeoStartEndTimes(n),this.player.ready().then((()=>{jQuery(this.player.element).addClass("elementor-background-video-embed"),this.changeVideoSize()}))}handleVimeoStartEndTimes(e){e.background_video_start&&this.player.on("play",(t=>{0===t.seconds&&this.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(t=>{e.background_video_end&&e.background_video_end<t.seconds&&(e.background_play_once?this.player.pause():this.player.setCurrentTime(e.background_video_start)),this.player.getDuration().then((n=>{e.background_video_start&&!e.background_video_end&&t.seconds>n-.5&&this.player.setCurrentTime(e.background_video_start)}))}))}prepareYTVideo(e,t){const n=this.elements.$backgroundVideoContainer,i=this.getElementSettings();let s=e.PlayerState.PLAYING;window.chrome&&(s=e.PlayerState.UNSTARTED);const o={videoId:t,events:{onReady:()=>{this.player.mute(),this.changeVideoSize(),this.startVideoLoop(!0),this.player.playVideo()},onStateChange:t=>{switch(t.data){case s:n.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:this.player.seekTo(i.background_video_start||0),i.background_play_once&&this.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};i.background_privacy_mode&&(o.host="https://www.youtube-nocookie.com",o.origin=window.location.hostname),n.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],o)}activate(){let e,t=this.getElementSettings("background_video_link");const n=this.getElementSettings("background_play_once");if(-1!==t.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(t),this.apiProvider.onApiReady((n=>{"youtube"===this.videoType&&this.prepareYTVideo(n,e),"vimeo"===this.videoType&&this.prepareVimeoVideo(n,t)}));else{this.videoType="hosted";const e=this.getElementSettings("background_video_start"),i=this.getElementSettings("background_video_end");(e||i)&&(t+="#t="+(e||0)+(i?","+i:"")),this.elements.$backgroundVideoHosted.attr("src",t).one("canplay",this.changeVideoSize.bind(this)),n&&this.elements.$backgroundVideoHosted.on("ended",(()=>{this.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize",this.changeVideoSize)}deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}run(){const e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}onInit(){super.onInit(...arguments),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},8704:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(4058)),o=i(n(9501)),r=[s.default,o.default];t.default=r},7537:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=[i(n(4058)).default];t.default=s},4985:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[()=>n.e(413).then(n.bind(n,2929)),()=>n.e(413).then(n.bind(n,343))];t.default=i},6397:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),i=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),i)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},355:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode()}isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}isOverflowHidden(){return"hidden"===this.$element.css("overflow")}getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;const e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}setHandlesPosition(){const e=elementor.documents.getCurrent();if(!e||!e.container.isEditable())return;const t="elementor-section--handles-inside";if(elementor.settings.page.model.attributes.scroll_snap)return void this.$element.addClass(t);const n=this.isOverflowHidden();if(!n&&!this.isFirstSection())return;const i=n?0:this.getOffset();if(i<25){this.$element.addClass(t);const e=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");i<-5?e.css("top",-i):e.css("top","")}else this.$element.removeClass(t)}onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}t.default=HandlesPosition},3384:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}getDefaultElements(){const e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}isActive(){return elementorFrontend.isEditMode()}getSvgURL(e,t){let n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}buildSVG(e){const t="shape_divider_"+e,n=this.getElementSettings(t),i=this.elements["$"+e+"Container"];if(i.attr("data-shape",n),!n)return void i.empty();let s=n;this.getElementSettings(t+"_negative")&&(s+="-negative");const o=this.getSvgURL(n,s);jQuery.get(o,(e=>{i.empty().append(e.childNodes[0])})),this.setNegative(e)}setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}onInit(){this.isActive(this.getSettings())&&(super.onInit(...arguments),["top","bottom"].forEach((e=>{this.getElementSettings("shape_divider_"+e)&&this.buildSVG(e)})))}onElementChange(e){const t=e.match(/^shape_divider_(top|bottom)$/);if(t)return void this.buildSVG(t[1]);const n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}t.default=Shapes},2804:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class StretchedSection extends elementorModules.frontend.handlers.Base{bindEvents(){const e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass("elementor-section-stretched")}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement({element:this.$element,selectors:{container:this.getStretchContainer()}})}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}stretch(){this.getElementSettings("stretch_section")&&this.stretchElement.stretch()}onInit(){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...arguments),this.stretch())}onElementChange(e){"stretch_section"===e&&(this.getElementSettings("stretch_section")?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}t.default=StretchedSection},3346:(e,t,n)=>{"use strict";var i=n(6028);e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:(0,i.isScrollSnapActive)()?"body":"html, body"}}),getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks(e){var t,n=e.currentTarget,s=location.pathname===n.pathname;if(location.hostname===n.hostname&&s&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var o=t.offset().top,r=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");r.length>0&&(o-=r.height()),a.length>0&&(o-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),o=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",o),(0,i.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","none"),this.elements.$scrollable.animate({scrollTop:o},this.getSettings("scrollDuration"),"linear",(()=>{(0,i.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","")}))}}},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments)}})},6866:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=new Promise((t=>{const i="style"===e?this.getStyleElement(n.src):this.getScriptElement(n.src);i.onload=()=>t(!0);const s="head"===n.parent?n.parent:"body";document[s].appendChild(i)}))),n.loader}}t.default=AssetsLoader;const n=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min";AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`},"share-link":{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`}},style:{}}},8646:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(723).then(n.t.bind(n,3896,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),i=elementorFrontend.utils.assetsLoader.load("script","share-link");return Promise.all([e,t,i]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),i=elementorFrontend.isEditMode(),s=i&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),o=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(i&&o&&e.preventDefault());if(e.preventDefault(),i&&!elementor.getPreferences("lightbox_in_editor"))return;if(s)return;(this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox).createLightbox(t)}isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},8628:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Swiper{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),jQuery(e).closest(".elementor-widget-wrap").addClass("e-swiper-container"),jQuery(e).closest(".elementor-widget").addClass("e-widget-swiper"),new Promise((t=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(this.createSwiperInstance(e,this.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((i=>{const s=parseInt(i);let o;if(s===t.mobile.value||s+1===t.mobile.value)o=0;else if(!t.widescreen||s!==t.widescreen.value&&s+1!==t.widescreen.value){const e=n.findIndex((e=>s===e||s+1===e));o=n[e-1]}else o=s;e.breakpoints[o]=e.breakpoints[i],e.breakpoints[i]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},2064:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5719);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let i={};const s=e.match(/settings=(.+)/);s&&(i=JSON.parse(atob(s[1])));for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];n(i,...r)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},6028:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},4773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},1911:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(4773));class VimeoLoader extends s.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=(e=super.getAutoplayURL(e)).match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},1604:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(4773));class YoutubeLoader extends s.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},59:(e,t,n)=>{"use strict";n.p=elementorFrontendConfig.urls.assets+"js/"},4375:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),i=n.length;return e="min"===t[n[i-1]].direction?n[i-2]:n[i-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let i;if(n[0]===e)i=320;else if("widescreen"===e)i=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const s=n.indexOf(e);i=t[n[s-1]].value+1}return i}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},6404:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,i&&e.dispatchEvent(new CustomEvent(i,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;var n=Events;t.default=n},9469:e=>{"use strict";e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,i,s){var o,r,a;if(n[e][t])if(i)if(o=n[e][t],s)for(a=o.length;a--;)(r=o[a]).callback===i&&r.context===s&&o.splice(a,1);else for(a=o.length;a--;)o[a].callback===i&&o.splice(a,1);else n[e][t]=[]}function _addHook(e,t,i,s,o){var r={callback:i,priority:s,context:o},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===i)return l=!0,!1})),l)return;a.push(r),a=function _hookInsertSort(e){for(var t,n,i,s=1,o=e.length;s<o;s++){for(t=e[s],n=s;(i=e[n-1])&&i.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[r];n[e][t]=a}function _runHook(e,t,i){var s,o,r=n[e][t];if(!r)return"filters"===e&&i[0];if(o=r.length,"filters"===e)for(s=0;s<o;s++)i[0]=r[s].callback.apply(r[s].context,i);else for(s=0;s<o;s++)r[s].callback.apply(r[s].context,i);return"filters"!==e||i[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),i=n.shift();return"string"==typeof i?_runHook("filters",i,n):e},addFilter:function addFilter(t,n,i,s){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,i=parseInt(i||10,10),s),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),i=n.shift();return"string"==typeof i&&_runHook("actions",i,n),e},addAction:function addAction(t,n,i,s){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,i=parseInt(i||10,10),s),e}},e}},3308:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,i=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),s=matchUserAgent("Firefox"),o=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!r&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||i),d=matchUserAgent("Chrome")&&!!window.CSS;var c={appleWebkit:matchUserAgent("AppleWebKit")&&!d,blink:d,chrome:l,edge:a,firefox:s,ie:r,mac:matchUserAgent("Macintosh"),opera:i,safari:o,webkit:matchUserAgent("AppleWebKit")};t.default=c},5107:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let i=n.getItem("elementor");i=i?JSON.parse(i):{},i.__expiration||(i.__expiration={});const s=i.__expiration;let o=[];e?s[e]&&(o=[e]):o=Object.keys(s);let r=!1;return o.forEach((e=>{new Date(s[e])<new Date&&(delete i[e],delete s[e],r=!0)})),r&&this.save(i,t.session),e?i[e]:i}set(e,t,n){n=n||{};const i=this.get(null,n);if(i[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),i.__expiration[e]=t.getTime()}this.save(i,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},6046:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(48).then(n.bind(n,6468))))}}t.default=_default},1855:(e,t,n)=>{var i=n(5516),s=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},3621:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5719:(e,t,n)=>{"use strict";var i=n(1695),s=n(2086),o=n(563),r=n(5736),a=n(7826).f,l=n(9606),d=n(1855),c=n(5070),u=n(1879),h=n(3621),m=n(1765),g=n(5283),p=n(3296),f="DOMException",v=o("Error"),b=o(f),_=function DOMException(){d(this,y);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),i=new b(t,n),s=v(t);return s.name=f,a(i,"stack",r(1,m(s.stack,1))),c(i,this,_),i},y=_.prototype=b.prototype,w="stack"in v(f),k="stack"in new b(1,2),S=b&&g&&Object.getOwnPropertyDescriptor(s,f),E=!(!S||S.writable&&S.configurable),C=w&&!E&&!k;i({global:!0,constructor:!0,forced:p||C},{DOMException:C?_:b});var M=o(f),A=M.prototype;if(A.constructor!==M)for(var D in p||a(A,"constructor",r(1,M)),h)if(l(h,D)){var $=h[D],O=$.s;l(M,O)||a(M,O,r(6,$.c))}}},e=>{e.O(0,[354],(()=>{return t=5654,e(e.s=t);var t}));e.O()}]);