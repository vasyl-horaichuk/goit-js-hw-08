var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,d=Math.min,s=function(){return a.Date.now()};function p(e,t,n){var o,r,i,u,f,a,c=0,p=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){return c=e,f=setTimeout(T,t),p?g(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function T(){var e=s();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-a);return b?d(n,i-(e-c)):n}(e))}function w(e){return f=void 0,y&&o?g(e):(o=r=void 0,u)}function O(){var e=s(),n=j(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return h(a);if(b)return f=setTimeout(T,t),g(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=v(t)||0,m(n)&&(p=!!n.leading,i=(b="maxWait"in n)?l(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},O.flush=function(){return void 0===f?u:w(s())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=m(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");document.querySelector('input[type="email"]'),document.querySelector('textarea[name="message"]');console.log("feedback-form-state"),b.addEventListener("submit",handlerBtnSubmitForm),b.addEventListener("input",hadlerInputDateForm);
//# sourceMappingURL=03-feedback.88d7d129.js.map
