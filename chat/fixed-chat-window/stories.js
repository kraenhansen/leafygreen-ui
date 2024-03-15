import e,{forwardRef as n,useRef as t,useState as r}from"react";import{Avatar as o}from"@lg-chat/avatar";import{InputBar as a}from"@lg-chat/input-bar";import{Message as i}from"@lg-chat/message";import{MessageFeed as l}from"@lg-chat/message-feed";import{WithMessageRating as s}from"@lg-chat/message-feedback/src/InlineMessageFeedback/InlineMessageFeedback.stories";import{MessagePrompts as c,MessagePrompt as u}from"@lg-chat/message-prompts";import{css as m,cx as d}from"@leafygreen-ui/emotion";import{Theme as g,storybookArgTypes as f}from"@leafygreen-ui/lib";import p from"@leafygreen-ui/icon/dist/Sparkle";import{useDarkMode as y}from"@leafygreen-ui/leafygreen-provider";import{palette as h}from"@leafygreen-ui/palette";import{transitionDuration as b,hoverRing as v,focusRing as k,spacing as w,BaseFontSize as E}from"@leafygreen-ui/tokens";import{Body as x}from"@leafygreen-ui/typography";import{Transition as S}from"react-transition-group";import{ChatWindow as O}from"@lg-chat/chat-window";import M from"@leafygreen-ui/icon/dist/ChevronDown";import N from"@leafygreen-ui/popover";function C(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},T.apply(this,arguments)}function j(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function B(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,l=[],s=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,n)||A(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){if(e){if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var L,H,F,G,R,W,U,z,q,$=[{id:1,messageBody:"Hi! Ask me anything.",isMongo:!0},{id:2,messageBody:"Can you tell me the answer to this thing?",userName:"Sean Park"},{id:3,messageBody:"This thing is `something`.",isMongo:!0},{id:4,messageBody:'This should do the trick.\n\n```typescript\ntype HelloWorld = "Hello, world!"\n\nfunction helloWorld() {\nreturn "Hello, world!" satisfies HelloWorld;\n}\n```\n      ',isMongo:!0,messageRatingProps:{onChange:function(e){return console.log("Message 4 was ".concat(e.target.value,"."))}}},{id:5,messageBody:"How about another question?",userName:"Sean Park"},{id:6,messageBody:"Sorry, MongoAI can't do that right now.\n\nRefer to [LeafyGreen UI](mongodb.design) or [LeafyGreen UI](mongodb.design) for more details. I'm filling out this space to see if the message will line up to the right side.\n    ",isMongo:!0,messageRatingProps:{onChange:function(e){return console.log("Message 6 was ".concat(e.target.value,"."))}}}],J=m(L||(L=B(["\n  border-radius: 40px;\n  padding: 0px;\n  outline: none;\n  border-style: solid;\n  cursor: pointer;\n  transition: box-shadow ","ms ease-in-out;\n"])),b.slower),K=(C(G={},g.Dark,m(H||(H=B(["\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n    &:hover {\n      box-shadow: ",";\n    }\n\n    &:focus-visible {\n      box-shadow: ",";\n    }\n  "])),h.green.dark1,h.black,h.green.light1,v.dark.green,k.dark.default)),C(G,g.Light,m(F||(F=B(["\n    border-color: ",";\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      box-shadow: ",";\n    }\n\n    &:focus-visible {\n      box-shadow: ",";\n    }\n  "])),h.green.dark1,h.white,h.green.dark2,v.light.green,k.light.default)),G),Q=m(R||(R=B(["\n  display: flex;\n  gap: ","px;\n  align-items: center;\n  padding: 12px ","px;\n"])),w[2],w[3]),V=m(W||(W=B(["\n  color: inherit;\n"]))),X=["className","children","darkMode"],Y=n((function(n,t){var r=n.className,o=n.children,a=n.darkMode,i=j(n,X),l=y(a).theme;return e.createElement("button",T({className:d(J,K[l],r)},i,{ref:t}),e.createElement("div",{className:Q},e.createElement(p,{fill:l===g.Light?h.green.dark1:h.green.dark3}),o&&e.createElement(x,{baseFontSize:E.Body1,className:V},e.createElement("b",null,o))))}));Y.displayName="ChatTrigger";var Z,_,ee=m(U||(U=B(["\n  position: relative;\n"]))),ne=m(z||(z=B(["\n  transition: all ","ms ease-in-out;\n  transform-origin: bottom right;\n  min-width: 360px;\n  width: 360px;\n"])),b.default),te=m(q||(q=B(["\n  border-radius: 24px;\n"]))),re=["className","children","defaultOpen","darkMode","trigger","badgeText","triggerText","title","open","onTriggerClick","onClose","popoverProps"],oe=n((function(n,o){var a=n.className,i=n.children,l=n.defaultOpen,s=void 0!==l&&l,c=n.darkMode,u=n.trigger,m=n.badgeText,g=n.triggerText,f=n.title,p=n.open,y=n.onTriggerClick,h=n.onClose,b=n.popoverProps,v=j(n,re),k=t(null),w=P(r(s),2),E=w[0],x=w[1],C=function(e){void 0===p&&x(!1),null==h||h(e)};return e.createElement("div",T({ref:o},v,{className:d(ee,a)}),null!=u?u:e.createElement(Y,{onClick:function(e){void 0===p&&x((function(e){return!e})),null==y||y(e)}},g),e.createElement(N,T({justify:"end",align:"top"},b,{active:null!=p?p:E}),e.createElement(S,{nodeRef:k,in:!0,timeout:100},(function(n){return e.createElement("div",{ref:k,className:ne,style:{transform:"entering"===n||"entered"===n?"scale(1)":"scale(0)",opacity:"entering"===n||"entered"===n?1:0}},e.createElement(O,{darkMode:c,badgeText:m,className:te,title:f,onClose:C,iconSlot:e.createElement(M,null)},i))}))))}));oe.displayName="FixedChatWindow";var ae={title:"Chat/FixedChatWindow",component:oe,argTypes:{darkMode:f.darkMode},parameters:{default:"Uncontrolled"}},ie=function(n){var t=n.id,r=n.isMongo,a=n.messageBody,l=n.userName,d=n.messageRatingProps;return e.createElement(i,{key:t,sourceType:"markdown",avatar:e.createElement(o,{variant:r?"mongo":"user"}),isSender:!!l,messageBody:a},0===t&&e.createElement(c,null,e.createElement(u,{selected:!0},"Can you tell me the answer to this thing?"),e.createElement(u,null,"Can you tell me the answer to that thing?")),!!d&&e.createElement(s,{className:m(Z||(Z=B(["\n          min-width: unset;\n        "])))}))},le=m(_||(_=B(["\n  position: fixed;\n  bottom: 16px;\n  right: 32px;\n"]))),se=function(n){var t=P(r($),2),o=t[0],i=t[1];return e.createElement("div",{className:le},e.createElement(oe,T({},n,{defaultOpen:!0,title:"LG Chat Demo",badgeText:"Beta",triggerText:"MongoDB AI"}),e.createElement(l,null,o.map((function(n){return e.createElement(ie,T({key:n.id},n))}))),e.createElement(a,{onMessageSend:function(e){var n={messageBody:e,userName:"Sean Park"};i((function(e){return[].concat(I(e),[n])}))}})))},ce=function(n){var t=P(r($),2),o=t[0],i=t[1],s=P(r(!0),2),c=s[0],u=s[1];return e.createElement("div",{className:le},e.createElement(oe,T({},n,{defaultOpen:!0,title:"LG Chat Demo",badgeText:"Beta",triggerText:"MongoDB AI",open:c,onClose:function(){u(!1)},onTriggerClick:function(){u((function(e){return!e}))}}),e.createElement(l,null,o.map((function(n){return e.createElement(ie,T({key:n.id},n))}))),e.createElement(a,{onMessageSend:function(e){var n={messageBody:e,userName:"Sean Park"};i((function(e){return[].concat(I(e),[n])}))}})))},ue=function(n){var t=P(r([]),2),o=t[0],i=t[1];return e.createElement("div",{className:le},e.createElement(oe,T({},n,{defaultOpen:!0,title:"LG Chat Demo",badgeText:"Beta",triggerText:"MongoDB AI"}),e.createElement(l,null,o.map((function(n){return e.createElement(ie,T({key:n.id},n))}))),e.createElement(a,{onMessageSend:function(e){var n={messageBody:e,userName:"Sean Park"};i((function(e){return[].concat(I(e),[n])}))}})))};export{ce as Controlled,ue as Empty,se as Uncontrolled,ae as default};