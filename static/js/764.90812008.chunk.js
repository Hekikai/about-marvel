"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[764],{519:function(e,t,n){n(791);var r=n(392),a=n(184);t.Z=function(){return(0,a.jsx)("img",{style:{display:"block",margin:"2rem auto",width:"96px"},src:r,alt:"Danger icon"})}},764:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(885),a=n(791),c=n(346),o=n(304),i=n(394),s=n(519),l=n(184),u=function(e){var t=e.character,n=t.name,r=t.description,a=t.thumbnail,c=t.homePage,o=t.wikiPage,i={objectFit:"cover"};return null!==a&&void 0!==a&&a.indexOf("not_available")&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:n}),(0,l.jsx)("p",{className:"randomchar__descr",children:r}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:o,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,a.useState)({}),t=(0,r.Z)(e,2),n=t[0],d=t[1],f=(0,o.Z)(),h=f.loading,m=f.error,p=f.getCharacter,b=f.clearError;(0,a.useEffect)((function(){return x(),function(){}}),[]);var v=function(e){d(e)},x=function(){b();var e=Math.floor(400*Math.random()+1011e3);p(e).then(v)},j=m?(0,l.jsx)(s.Z,{}):null,_=h?(0,l.jsx)(i.Z,{}):null,y=h||m?null:(0,l.jsx)(u,{character:n});return(0,l.jsxs)("div",{className:"randomchar",children:[j,_,y,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:x,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:c,alt:"mjolnir",className:"randomchar__decoration"})]})]})},f=n(982),h=function(e){var t=(0,o.Z)(),n=t.loading,c=t.error,u=t.getAllCharacters,d=(0,a.useState)([]),h=(0,r.Z)(d,2),m=h[0],p=h[1],b=(0,a.useState)(!1),v=(0,r.Z)(b,2),x=v[0],j=v[1],_=(0,a.useState)(1541),y=(0,r.Z)(_,2),g=y[0],N=y[1],k=(0,a.useState)(!1),w=(0,r.Z)(k,2),Z=w[0],C=w[1];(0,a.useEffect)((function(){S(g,!0)}),[]);var S=function(e,t){j(!t),u(e).then(O)},O=function(e){var t=!1;e.length<9&&(t=!0),p((function(t){return[].concat((0,f.Z)(t),(0,f.Z)(e))})),j(!1),N((function(e){return e+9})),C(t)},E=function(t){var n=t.map((function(t){var n={objectFit:"cover"};return t.thumbnail.indexOf("not_available")&&(n={objectFit:"fill"}),(0,l.jsxs)("li",{className:"char__item",tabIndex:0,onFocus:function(){return e.onCharSelected(t.id)},children:[(0,l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),(0,l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:n})}(m),P=c?(0,l.jsx)(s.Z,{}):null,F=n&&!x?(0,l.jsx)(i.Z,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[P,F,E,(0,l.jsx)("button",{className:"button button__main button__long",disabled:x,style:{display:Z?"none":"block"},onClick:function(){return S(g)},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},m=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,l.jsxs)("div",{className:"skeleton",children:[(0,l.jsxs)("div",{className:"pulse skeleton__header",children:[(0,l.jsx)("div",{className:"pulse skeleton__circle"}),(0,l.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"}),(0,l.jsx)("div",{className:"pulse skeleton__block"})]})]})},p=function(e){var t=e.character,n=t.name,r=t.description,a=t.thumbnail,c=t.homePage,o=t.wikiPage,i=t.comics,s={objectFit:"contain"};return a.includes("not_available")&&(s={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:a,alt:n,style:s}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:n}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:o,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:r}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There are no comics",i.map((function(e,t){return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},b=function(e){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),c=n[0],u=n[1],d=(0,o.Z)(),f=d.loading,h=d.error,b=d.getCharacter,v=d.clearError;(0,a.useEffect)((function(){j()}),[e.characterId]);var x=function(e){u(e)},j=function(){var t=e.characterId;t&&(v(),b(t).then(x))},_=c||f||h?null:(0,l.jsx)(m,{}),y=h?(0,l.jsx)(s.Z,{}):null,g=f?(0,l.jsx)(i.Z,{}):null,N=f||h||!c?null:(0,l.jsx)(p,{character:c});return(0,l.jsxs)("div",{className:"char__info",children:[_,y,g,N]})};function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(c,e);var t,n,r,a=N(c);function c(){var e;v(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:!1},e}return t=c,(n=[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(s.Z,{}):this.props.children}}])&&x(t.prototype,n),r&&x(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.Component),w=k,Z=n(610),C=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],c=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:(0,l.jsx)(d,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(w,{children:(0,l.jsx)(h,{onCharSelected:function(e){c(e)}})}),(0,l.jsx)(w,{children:(0,l.jsx)(b,{characterId:n})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:Z,alt:"vision"})]})}},304:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(861),a=n(757),c=n.n(a),o=n(885),i=n(791),s=function(){var e=function(){var e=(0,i.useState)(!1),t=(0,o.Z)(e,2),n=t[0],a=t[1],s=(0,i.useState)(null),l=(0,o.Z)(s,2),u=l[0],d=l[1],f=(0,i.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,o,i,s,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,o=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:n,headers:o,body:r});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return s=e.sent,a(!1),e.abrupt("return",s);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),d(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,error:u,request:f,clearError:(0,i.useCallback)((function(){return d(null)}),[])}}(),t=e.loading,n=e.error,a=e.request,s=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=3b46640549182f2ab56a8cc596f5e343",d=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:215,e.next=3,a("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",b(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,a("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}},b=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homePage:e.urls[0].url,wikiPage:e.urls[1].url,comics:e.comics.items.slice(0,10)}};return{loading:t,error:n,clearError:s,getAllCharacters:d,getCharacter:f,getAllComics:h,getComic:m}}},392:function(e,t,n){e.exports=n.p+"static/media/error.3da73bad54eb1e0fc4ae.gif"},346:function(e,t,n){e.exports=n.p+"static/media/mjolnir.61f31e1809f12183a524.png"},610:function(e,t,n){e.exports=n.p+"static/media/vision.067d4ae1936d64a577ce.png"},982:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(907);var a=n(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=764.90812008.chunk.js.map