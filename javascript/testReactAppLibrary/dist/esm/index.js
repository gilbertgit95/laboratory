import e from"react";var r,t={};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n,o={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?function(){if(r)return t;r=1;var n=e,o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l}():n||(n=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator,g="@@iterator",b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=b.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var _,k=!1,w=!1,S=!1,O=!1,j=!1;function R(e){return e.displayName||"Context"}function E(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case a:return"Fragment";case n:return"Portal";case c:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return R(e)+".Consumer";case s:return R(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:E(e.type)||"Memo";case d:var t=e,o=t._payload,v=t._init;try{return E(v(o))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var T,P,x,$,C,N,D,F=Object.assign,I=0;function L(){}L.__reactDisabledLog=!0;var A,W=b.ReactCurrentDispatcher;function U(e,r,t){if(void 0===A)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return"\n"+A+e}var z,B=!1,M="function"==typeof WeakMap?WeakMap:Map;function Y(e,r){if(!e||B)return"";var t,n=z.get(e);if(void 0!==n)return n;B=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=W.current,W.current=null,function(){if(0===I){T=console.log,P=console.info,x=console.warn,$=console.error,C=console.group,N=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:L,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var c=r.stack.split("\n"),s=t.stack.split("\n"),l=c.length-1,u=s.length-1;l>=1&&u>=0&&c[l]!==s[u];)u--;for(;l>=1&&u>=0;l--,u--)if(c[l]!==s[u]){if(1!==l||1!==u)do{if(l--,--u<0||c[l]!==s[u]){var f="\n"+c[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&z.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{B=!1,W.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:T}),info:F({},e,{value:P}),warn:F({},e,{value:x}),error:F({},e,{value:$}),group:F({},e,{value:C}),groupCollapsed:F({},e,{value:N}),groupEnd:F({},e,{value:D})})}I<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?U(p):"";return"function"==typeof e&&z.set(e,y),y}function V(e,r,t){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return U(e);switch(e){case f:return U("Suspense");case p:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return Y(e.render,!1);case y:return V(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return V(i(a),r,t)}catch(e){}}return""}z=new M;var J=Object.prototype.hasOwnProperty,K={},X=b.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);X.setExtraStackFrame(t)}else X.setExtraStackFrame(null)}var H=Array.isArray;function G(e){return H(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=b.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,c){var s={$$typeof:t,type:e,key:r,ref:n,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,r,t,n,o){var a,i={},c=null,s=null;for(a in void 0!==t&&(Z(t),c=""+t),function(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),c=""+r.key),function(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(s=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=E(ne.current.type);te[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)J.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(c||s){var u="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){ee||(ee=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,u),s&&function(e,r){var t=function(){re||(re=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,u)}return ae(e,c,s,o,n,ne.current,i)}var ce,se=b.ReactCurrentOwner,le=b.ReactDebugCurrentFrame;function ue(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(se.current){var e=E(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ce=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=pe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ye[t]){ye[t]=!0;var n="";e&&e._owner&&e._owner!==se.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),ue(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ue(null)}}}function ve(e,r){if("object"==typeof e)if(G(e))for(var t=0;t<e.length;t++){var n=e[t];fe(n)&&de(n,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e[g];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function me(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=E(t);!function(e,r,t,n,o){var a=Function.call.bind(J);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(q(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof c),q(null)),c instanceof Error&&!(c.message in K)&&(K[c.message]=!0,q(o),h("Failed %s type: %s",t,c.message),q(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||ce||(ce=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ge={};function be(e,r,n,o,m,g){var b=function(e){return"string"==typeof e||"function"==typeof e||!!(e===a||e===c||j||e===i||e===f||e===p||O||e===v||k||w||S)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!b){var R,T="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(T+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),T+=pe(),null===e?R="null":G(e)?R="array":void 0!==e&&e.$$typeof===t?(R="<"+(E(e.type)||"Unknown")+" />",T=" Did you accidentally export a JSX literal instead of a component?"):R=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",R,T)}var P=ie(e,r,n,m,g);if(null==P)return P;if(b){var x=r.children;if(void 0!==x)if(o)if(G(x)){for(var $=0;$<x.length;$++)ve(x[$],e);Object.freeze&&Object.freeze(x)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve(x,e)}if(J.call(r,"key")){var C=E(e),N=Object.keys(r).filter((function(e){return"key"!==e})),D=N.length>0?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}";ge[C+D]||(h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',D,C,N.length>0?"{"+N.join(": ..., ")+": ...}":"{}",C),ge[C+D]=!0)}return e===a?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ue(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ue(null);break}}null!==e.ref&&(ue(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}(P):me(P),P}var he=function(e,r,t){return be(e,r,t,!1)},_e=function(e,r,t){return be(e,r,t,!0)};o.Fragment=a,o.jsx=he,o.jsxs=_e}());!function(e,r){void 0===r&&(r={});var t=r.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("body {\r\n  padding: 100px;\r\n  font-size: large;\r\n  text-align: left;\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  :hover {\r\n    color: grey;\r\n  }\r\n}\r\n\r\n.star{\r\n  font-size: large;\r\n}\r\n.starActive {\r\n  color: red;\r\n}\r\n.starInactive {\r\n  color: #ccc;\r\n}\r\n\r\n.rating-secondary {\r\n  background-color: black;\r\n  color: white;\r\n  padding:6px;\r\n}");
//# sourceMappingURL=index.js.map
