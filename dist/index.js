/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/wglt/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/wglt/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=41)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(27);e.Serializable=function(t,e){return function(i){const r=s.createSerializeMetadata(i);r.className=t,e&&(r.valueType=!!e.valueType)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);class r extends s.Vec2{constructor(t,e,i,s){super(t,e),this.width=i,this.height=s}get x1(){return this.x}get y1(){return this.y}get x2(){return this.x+this.width}get y2(){return this.y+this.height}get left(){return this.x}get top(){return this.y}clone(){return new r(this.x,this.y,this.width,this.height)}copy(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height}getCenter(){return new s.Vec2(this.x+this.width/2|0,this.y+this.height/2|0)}intersects(t){return this.x<=t.x2&&this.x2>=t.x&&this.y<=t.y2&&this.y2>=t.y}contains(t){return t.x>=this.x&&t.x<=this.x2&&t.y>=this.y&&t.y<=this.y2}}e.Rect=r},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});let r=class{constructor(t,e){this.x=t,this.y=e}add(t){this.x+=t.x,this.y+=t.y}};r=s([i(0).Serializable("Vec2",{valueType:!0})],r),e.Vec2=r},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(8);let o=class{constructor(t){this.gui=null,this.rect=t,this.children=new r.ArrayList,this.modal=!1,this.visible=!0}setGui(t){if(!this.gui){this.gui=t;for(let e=0;e<this.children.length;e++)this.children.get(e).setGui(t)}}add(t){t.parent=this,t.setGui(this.gui),this.children.add(t)}remove(t){this.children.remove(t)}move(t){this.parent&&this.parent.remove(this),t.add(this)}getPanelAt(t){for(let e=this.children.length-1;e>=0;e--){const i=this.children.get(e);if(!i.visible)continue;if(i.isDragging())continue;const s=i.getPanelAt(t);if(s)return s}if(this.rect.contains(t))return this}drawContents(){this.drawChildren()}drawChildren(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);e.visible&&e.drawContents()}}handleInput(){return this.handleChildrenInput()}handleChildrenInput(){for(let t=this.children.length-1;t>=0;t--){const e=this.children.get(t);if(e.visible&&(e.handleInput()||e.modal))return!0}return!1}isDragging(){return this.gui&&this.gui.dragElement===this}onDrop(t){return!1}updateTooltip(t){t.visible=!1}};o=s([i(0).Serializable("Panel")],o),e.Panel=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{}s.VK_CANCEL=3,s.VK_HELP=6,s.VK_BACK_SPACE=8,s.VK_TAB=9,s.VK_CLEAR=12,s.VK_ENTER=13,s.VK_SHIFT=16,s.VK_CONTROL=17,s.VK_ALT=18,s.VK_PAUSE=19,s.VK_CAPS_LOCK=20,s.VK_ESCAPE=27,s.VK_SPACE=32,s.VK_PAGE_UP=33,s.VK_PAGE_DOWN=34,s.VK_END=35,s.VK_HOME=36,s.VK_LEFT=37,s.VK_UP=38,s.VK_RIGHT=39,s.VK_DOWN=40,s.VK_PRINTSCREEN=44,s.VK_INSERT=45,s.VK_DELETE=46,s.VK_0=48,s.VK_1=49,s.VK_2=50,s.VK_3=51,s.VK_4=52,s.VK_5=53,s.VK_6=54,s.VK_7=55,s.VK_8=56,s.VK_9=57,s.VK_COLON=58,s.VK_SEMICOLON=59,s.VK_LESS_THAN=60,s.VK_EQUALS=61,s.VK_GREATER_THAN=62,s.VK_QUESTION_MARK=63,s.VK_AT=64,s.VK_A=65,s.VK_B=66,s.VK_C=67,s.VK_D=68,s.VK_E=69,s.VK_F=70,s.VK_G=71,s.VK_H=72,s.VK_I=73,s.VK_J=74,s.VK_K=75,s.VK_L=76,s.VK_M=77,s.VK_N=78,s.VK_O=79,s.VK_P=80,s.VK_Q=81,s.VK_R=82,s.VK_S=83,s.VK_T=84,s.VK_U=85,s.VK_V=86,s.VK_W=87,s.VK_X=88,s.VK_Y=89,s.VK_Z=90,s.VK_CONTEXT_MENU=93,s.VK_NUMPAD0=96,s.VK_NUMPAD1=97,s.VK_NUMPAD2=98,s.VK_NUMPAD3=99,s.VK_NUMPAD4=100,s.VK_NUMPAD5=101,s.VK_NUMPAD6=102,s.VK_NUMPAD7=103,s.VK_NUMPAD8=104,s.VK_NUMPAD9=105,s.VK_MULTIPLY=106,s.VK_ADD=107,s.VK_SEPARATOR=108,s.VK_SUBTRACT=109,s.VK_DECIMAL=110,s.VK_DIVIDE=111,s.VK_F1=112,s.VK_F2=113,s.VK_F3=114,s.VK_F4=115,s.VK_F5=116,s.VK_F6=117,s.VK_F7=118,s.VK_F8=119,s.VK_F9=120,s.VK_F10=121,s.VK_F11=122,s.VK_F12=123,s.VK_F13=124,s.VK_F14=125,s.VK_F15=126,s.VK_F16=127,s.VK_F17=128,s.VK_F18=129,s.VK_F19=130,s.VK_F20=131,s.VK_F21=132,s.VK_F22=133,s.VK_F23=134,s.VK_F24=135,s.VK_NUM_LOCK=144,s.VK_SCROLL_LOCK=145,s.VK_CIRCUMFLEX=160,s.VK_EXCLAMATION=161,s.VK_DOUBLE_QUOTE=162,s.VK_HASH=163,s.VK_DOLLAR=164,s.VK_PERCENT=165,s.VK_AMPERSAND=166,s.VK_UNDERSCORE=167,s.VK_OPEN_PAREN=168,s.VK_CLOSE_PAREN=169,s.VK_ASTERISK=170,s.VK_PLUS=171,s.VK_PIPE=172,s.VK_HYPHEN_MINUS=173,s.VK_OPEN_CURLY_BRACKET=174,s.VK_CLOSE_CURLY_BRACKET=175,s.VK_TILDE=176,s.VK_COMMA=188,s.VK_PERIOD=190,s.VK_SLASH=191,s.VK_BACK_QUOTE=192,s.VK_OPEN_BRACKET=219,s.VK_BACK_SLASH=220,s.VK_CLOSE_BRACKET=221,s.VK_QUOTE=222,s.VK_META=224,s.VK_ALTGR=225,s.VK_WIN=91,s.VK_KANA=21,s.VK_HANGUL=21,s.VK_EISU=22,s.VK_JUNJA=23,s.VK_FINAL=24,s.VK_HANJA=25,s.VK_KANJI=25,s.VK_CONVERT=28,s.VK_NONCONVERT=29,s.VK_ACCEPT=30,s.VK_MODECHANGE=31,s.VK_SELECT=41,s.VK_PRINT=42,s.VK_EXECUTE=43,s.VK_SLEEP=95,e.Keys=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(42);e.Animation=class{constructor(t,e){this.promise=new s.AnimationPromise,this.countdown=t,this.blocking=e}isDone(){return this.countdown<=0}update(){this.countdown--}draw(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11);class r{}r.BLACK=s.fromRgb(0,0,0),r.WHITE=s.fromRgb(255,255,255),r.GRAY=s.fromRgb(128,128,128),r.LIGHT_GRAY=s.fromRgb(170,170,170),r.DARK_GRAY=s.fromRgb(85,85,85),r.YELLOW=s.fromRgb(255,255,85),r.BROWN=s.fromRgb(170,85,0),r.RED=s.fromRgb(255,0,0),r.LIGHT_RED=s.fromRgb(255,85,85),r.DARK_RED=s.fromRgb(170,0,0),r.GREEN=s.fromRgb(0,255,0),r.LIGHT_GREEN=s.fromRgb(85,255,85),r.DARK_GREEN=s.fromRgb(0,170,0),r.LIGHT_CYAN=s.fromRgb(85,255,255),r.DARK_CYAN=s.fromRgb(0,170,170),r.BLUE=s.fromRgb(0,0,255),r.LIGHT_BLUE=s.fromRgb(85,85,255),r.DARK_BLUE=s.fromRgb(0,0,170),r.LIGHT_MAGENTA=s.fromRgb(255,85,255),r.DARK_MAGENTA=s.fromRgb(170,0,170),r.ORANGE=s.fromRgb(255,136,0),e.Colors=r},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(3);let n=class extends o.Panel{constructor(t){super(t),this.closeButton=!1}drawContents(){this.gui&&this.gui.renderer.draw(this.gui.app,this)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;if(this.gui.app.isKeyPressed(r.Keys.VK_ESCAPE))return this.visible=!1,!0;const t=this.gui.app.mouse;return!(!t.isClicked()||this.rect.contains(t))&&(this.visible=!1,!0)}close(){this.gui&&this.gui.remove(this)}};n=s([i(0).Serializable("Dialog")],n),e.Dialog=n},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});let r=class{constructor(){this.elements=[]}get length(){return this.elements.length}clear(){this.elements.splice(0,this.elements.length)}get(t){return this.elements[t]}add(t){if(this.elements.push(t),this.listeners)for(let e=0;e<this.listeners.length;e++)this.listeners[e].onAdd(this,t)}remove(t){const e=this.elements.indexOf(t);if(e>=0&&(this.elements.splice(e,1),this.listeners))for(let e=0;e<this.listeners.length;e++)this.listeners[e].onRemove(this,t)}contains(t){return this.elements.indexOf(t)>=0}addListener(t){this.listeners||(this.listeners=[]),this.listeners.push(t)}};r=s([i(0).Serializable("ArrayList")],r),e.ArrayList=r},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(6),o=i(13);let n=class extends o.Button{constructor(t,e,i){super(t,e.ability.sprite),this.talent=e,this.shortcut=!!i,this.tooltipMessages=e.ability.tooltipMessages}click(){this.talent.use()}drawContents(){if(super.drawContents(),this.talent.cooldown>0){const t=this.talent.actor.game,e=t.cooldownSprite;if(e){const i=1-this.talent.cooldown/this.talent.ability.cooldown,s=Math.round(i*e.frames),o=e.x+s*e.width,n=e.y,h=this.rect.x+(this.rect.width-e.width)/2|0,a=this.rect.y+(this.rect.height-e.height)/2|0;t.app.drawImage(h,a,o,n,e.width,e.height);const c=this.rect.x+this.rect.width/2|0,l=this.rect.y+this.rect.height/2|0;t.app.drawCenteredString(this.talent.cooldown.toString(),c+1,l-2,r.Colors.BLACK),t.app.drawCenteredString(this.talent.cooldown.toString(),c,l-3,r.Colors.WHITE)}}}};n=s([i(0).Serializable("TalentButton")],n),e.TalentButton=n},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(8),o=i(13);let n=class extends o.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.stackItems=new r.ArrayList,this.stackItems.add(i),this.tooltipMessages=i.tooltipMessages}click(){if(this.stackItems.length>0){const t=this.stackItems.get(0),e=t.game.player;e&&e.use(t)}}removeAll(){for(let t=this.stackItems.length-1;t>=0;t--)this.containerItems.remove(this.stackItems.get(t))}drawContents(){if(this.gui&&(super.drawContents(),this.stackItems.length>1)){const t=this.rect;this.gui.app.drawRightString(this.stackItems.length.toString(),t.x2-3,t.y2-10)}}updateTooltip(t){if(this.stackItems.length>0){const t=this.stackItems.get(0);t.onUpdateTooltip(),this.tooltipMessages=t.tooltipMessages}super.updateTooltip(t)}};n=s([i(0).Serializable("ItemButton")],n),e.ItemButton=n},function(t,e,i){"use strict";function s(t,e,i,s){return void 0===s&&(s=255),(t<<24)+(e<<16)+(i<<8)+s}Object.defineProperty(e,"__esModule",{value:!0}),e.fromRgb=s,e.fromHsv=function(t,e,i,r){const o=6*t|0,n=6*t-o,h=i*(1-e),a=i*(1-n*e),c=i*(1-(1-n)*e);let l,d,u;switch(o%6){case 0:l=i,d=c,u=h;break;case 1:l=a,d=i,u=h;break;case 2:l=h,d=i,u=c;break;case 3:l=h,d=a,u=i;break;case 4:l=c,d=h,u=i;break;case 5:l=i,d=h,u=a;break;default:l=0,d=0,u=0}return void 0===r&&(r=1),s(255*l|0,255*d|0,255*u|0,255*r|0)}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(13);let o=class extends r.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.shortcutItem=i,this.tooltipMessages=i.tooltipMessages}click(){const t=this.getItem();if(t){const e=t.game.player;e&&e.use(t)}}drawContents(){if(this.gui&&(super.drawContents(),!this.isDragging())){const t=this.rect,e=this.countItems();this.gui.app.drawRightString(e.toString(),t.x2-3,t.y2-10)}}getItem(){for(let t=0;t<this.containerItems.length;t++){const e=this.containerItems.get(t);if(this.shortcutItem.isStackable(e))return e}}countItems(){let t=0;for(let e=0;e<this.containerItems.length;e++)this.shortcutItem.isStackable(this.containerItems.get(e))&&t++;return t}};o=s([i(0).Serializable("ItemShortcutButton")],o),e.ItemShortcutButton=o},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(3);let o=class extends r.Panel{constructor(t,e,i,s){super(t),this.sprite=e,this.shortcutKey=i,this.onClick=s}drawContents(){if(!this.gui)return;const t=this.sprite,e=this.rect,i=(e.width-t.width)/2|0,s=(e.height-t.height)/2|0;t.draw(this.gui.app,e.x+i,e.y+s)}handleInput(){if(!this.gui)return!1;const t=this.gui.app,e=t.mouse;return this.rect.contains(e.start)&&e.isDragging()?(this.gui.startDragging(this),!0):this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked()?(this.click(),!0):e.down&&this.rect.contains(e)}click(){this.onClick&&this.onClick()}updateTooltip(t){this.tooltipMessages?(t.messages=this.tooltipMessages,t.visible=!0):t.visible=!1}};o=s([i(0).Serializable("Button")],o),e.Button=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(39),r=i(1),o=i(51);e.getTileId=function(t,e){return 64*e+t};e.TileMap=class{constructor(t,e,i,n){this.width=t,this.height=e,this.depth=i,this.tileSize=n,this.grid=new Array(e),this.layers=new Array(i),this.dirty=!0,this.originX=0,this.originY=0,this.visibleRect=new r.Rect(0,0,t,e),this.prevVisibleRect=new r.Rect(0,0,t,e);for(let i=0;i<e;i++){this.grid[i]=new Array(t);for(let e=0;e<t;e++)this.grid[i][e]=new s.TileMapCell(e,i)}for(let s=0;s<i;s++)this.layers[s]=new o.TileMapLayer(t,e)}isOutOfRange(t,e,i){return t<0||t>=this.width||e<0||e>=this.height||i<0||i>=this.depth}clear(){for(let t=0;t<this.layers.length;t++)this.layers[t].clear()}getTile(t,e,i){return this.isOutOfRange(t,e,i)?0:this.layers[i].getTile(t,e)}setTile(t,e,i,s){this.isOutOfRange(t,e,i)||this.layers[i].setTile(t,e,s)}isBlocked(t,e){return!!this.isOutOfRange(t,e,0)||this.grid[e][t].blocked}setBlocked(t,e,i,s){this.isOutOfRange(t,e,0)||(this.grid[e][t].blocked=i,this.grid[e][t].blockedSight=void 0!==s?s:i)}getCell(t,e){return this.isOutOfRange(t,e,0)?null:this.grid[e][t]}isVisible(t,e){return!(t<this.visibleRect.x1||t>=this.visibleRect.x2||e<this.visibleRect.y1||e>=this.visibleRect.y2)&&this.grid[e][t].visible}isSeen(t,e){const i=this.getCell(t,e);return i&&i.seen}setSeen(t,e,i){const s=this.getCell(t,e);s&&(s.seen=i)}isAnimated(t,e,i){return!this.isOutOfRange(t,e,i)&&this.layers[i].isAnimated(t,e)}setAnimated(t,e,i,s){this.isOutOfRange(t,e,i)||this.layers[i].setAnimated(t,e,s)}resetFov(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++)this.grid[t][e].seen=!1,this.grid[t][e].visible=!1}computeFov(t,e,i,s){this.originX=t,this.originY=e,this.prevVisibleRect.copy(this.visibleRect);const r=i,o=s||i;this.visibleRect.x=Math.max(0,t-r),this.visibleRect.y=Math.max(0,e-o),this.visibleRect.width=Math.min(this.width-1,t+r)-this.visibleRect.x+1,this.visibleRect.height=Math.min(this.height-1,e+o)-this.visibleRect.y+1;for(let t=this.visibleRect.y1;t<this.visibleRect.y2;t++)for(let e=this.visibleRect.x1;e<this.visibleRect.x2;e++)this.grid[t][e].visible=!1;this.grid[e][t].visible=!0,this.computeOctantY(1,1),this.computeOctantX(1,1),this.computeOctantY(1,-1),this.computeOctantX(1,-1),this.computeOctantY(-1,1),this.computeOctantX(-1,1),this.computeOctantY(-1,-1),this.computeOctantX(-1,-1),this.dirty=!0}computeOctantY(t,e){const i=[],s=[];let r,o,n,h,a,c,l,d,u,p,f=1,g=0,y=0,m=0;for(o=this.originY+e;o>=this.visibleRect.y1&&o<this.visibleRect.y2;o+=e,y=g,++f)for(n=.5/f,p=-1,h=Math.floor(m*f+.5),r=this.originX+h*t;h<=f&&r>=this.visibleRect.x1&&r<this.visibleRect.x2;r+=t,++h,p=u){if(a=!0,c=!1,d=p,u=(l=h/f)+n,y>0)if(this.grid[o-e][r].visible&&!this.grid[o-e][r].blockedSight||this.grid[o-e][r-t].visible&&!this.grid[o-e][r-t].blockedSight){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[o][r].blockedSight){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[o][r].visible=!0,this.grid[o][r].seen=!0,this.grid[o][r].blockedSight&&(m>=d?m=u:c||(i[g]=d,s[g++]=u)))}}computeOctantX(t,e){const i=[],s=[];let r,o,n,h,a,c,l,d,u,p,f=1,g=0,y=0,m=0;for(r=this.originX+t;r>=this.visibleRect.x1&&r<this.visibleRect.x2;r+=t,y=g,++f)for(n=.5/f,p=-1,h=Math.floor(m*f+.5),o=this.originY+h*e;h<=f&&o>=this.visibleRect.y1&&o<this.visibleRect.y2;o+=e,++h,p=u){if(a=!0,c=!1,d=p,u=(l=h/f)+n,y>0)if(this.grid[o][r-t].visible&&!this.grid[o][r-t].blockedSight||this.grid[o-e][r-t].visible&&!this.grid[o-e][r-t].blockedSight){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[o][r].blockedSight){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[o][r].visible=!0,this.grid[o][r].seen=!0,this.grid[o][r].blockedSight&&(m>=d?m=u:c||(i[g]=d,s[g++]=u)))}}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(3);let o=class extends r.Panel{constructor(t,e){super(t),this.shortcutKey=e}get button(){return this.children.length>0?this.children.get(0):void 0}drawContents(){if(!this.gui)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;e&&this.gui.app.drawImage(t.x,t.y,e.x,e.y,t.width,t.height);const i=this.button;i&&!i.isDragging()&&(i.rect.x=this.rect.x,i.rect.y=this.rect.y,i.rect.width=this.rect.width,i.rect.height=this.rect.height,this.drawChildren()),this.shortcutKey&&this.gui.app.drawRightString(String.fromCharCode(this.shortcutKey),t.x2-3,t.y+3)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;const t=this.gui.app,e=t.mouse,i=this.button;return i&&(this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked())?(i.click(),!0):e.down&&this.rect.contains(e)}};o=s([i(0).Serializable("ButtonSlot")],o),e.ButtonSlot=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.SELF=0]="SELF",t[t.ENTITY=1]="ENTITY",t[t.TILE=2]="TILE"}(e.TargetType||(e.TargetType={}))},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(2);let o=class extends r.Vec2{constructor(t,e,i,s,o,n){super(e,i),this.game=t,this.offset=new r.Vec2(0,0),this.name=s,this.sprite=o,this.blocks=n,this.zIndex=1}get pixelX(){return this.x*this.game.tileSize.width+this.offset.x}get pixelY(){return this.y*this.game.tileSize.height+this.offset.y}get centerPixelX(){return this.pixelX+this.sprite.width/2|0}get centerPixelY(){return this.pixelY+this.sprite.height/2|0}distanceTo(t){return Math.hypot(t.x-this.x,t.y-this.y)}distance(t,e){return Math.hypot(t-this.x,e-this.y)}draw(){this.sprite.draw(this.game.app,this.pixelX-this.game.viewport.x,this.pixelY-this.game.viewport.y)}startTurn(){}endTurn(){}sendToBack(){}onBump(t){return!1}};o=s([i(0).Serializable("Entity")],o),e.Entity=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AI=class{constructor(t){this.actor=t,this.alwaysActive=!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Input=class{constructor(){this.down=!1,this.downCount=0,this.upCount=0}update(){this.down?(this.downCount++,this.upCount=0):(this.downCount=0,this.upCount++)}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(34),o=i(12),n=i(3),h=i(9),a=i(1),c=i(2),l=i(10);let d=class{constructor(t){this.app=t,this.renderer=new r.DialogRenderer(new a.Rect(0,0,1,1)),this.rootPanel=new n.Panel(t.size),this.rootPanel.gui=this}add(t){this.rootPanel.add(t)}remove(t){this.rootPanel.remove(t)}getPanelAt(t){return this.rootPanel.getPanelAt(t)}handleInput(){return this.dragElement&&this.dragOffset?(this.updateDragging(),!0):this.rootPanel.handleInput()}draw(){this.rootPanel.drawContents(),this.dragElement&&this.dragElement.drawContents()}startDragging(t){const e=this.app.mouse;this.dragElement=t,this.dragOffset=new c.Vec2(e.start.x-t.rect.x,e.start.y-t.rect.y)}updateDragging(){const t=this.app.mouse,e=this.dragElement,i=this.dragOffset;if(t.down)e.rect.x=t.x-i.x,e.rect.y=t.y-i.y;else{const s=this.rootPanel.getPanelAt(t);s&&s.onDrop(e)?(e.rect.x=s.rect.x,e.rect.y=s.rect.y,e.move(s)):e instanceof l.ItemButton&&s===this.rootPanel?e.removeAll():e instanceof o.ItemShortcutButton&&s===this.rootPanel?e.parent&&e.parent.remove(e):e instanceof h.TalentButton&&e.shortcut&&s===this.rootPanel?e.parent&&e.parent.remove(e):(e.rect.x=t.start.x-i.x,e.rect.y=t.start.y-i.y),this.dragElement=void 0,this.dragOffset=void 0}}};d=s([i(0).Serializable("GUI")],d),e.GUI=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Message=class{constructor(t,e){this.text=t,this.color=e}draw(t,e){t.drawString(this.text,e.x,e.y,this.color,e)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(32),r="precision highp float;attribute vec2 position;attribute vec2 texture;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 viewOffset;uniform vec2 viewportSize;uniform vec2 tileSize;uniform vec2 mapSize;void main(void) {   pixelCoord = (texture * viewportSize) + viewOffset;   texCoord = pixelCoord / mapSize / tileSize;   gl_Position = vec4(position, 0.0, 1.0);}",o="precision highp float;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 tileSize;uniform float animFrame;uniform sampler2D tiles;uniform sampler2D sprites;void main(void) {   vec4 tile = texture2D(tiles, texCoord);   if(tile.x == 0.0 && tile.y == 0.0) { discard; }   vec2 spriteOffset = floor(tile.xy * 256.0) * tileSize;   if(tile.z != 0.0) spriteOffset.x += animFrame * tileSize.x;   vec2 spriteCoord = mod(pixelCoord, tileSize);   gl_FragColor = texture2D(sprites, (spriteOffset + spriteCoord) / 1024.0);   if (gl_FragColor.a == 0.0) discard;   gl_FragColor.a *= tile.a;}";e.TileMapRenderer=class{constructor(t,e){this.gl=t,this.tileMap=e,this.quadVertBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quadVertBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,1,-1,1,1,1,1,1,0,-1,-1,0,1,1,1,1,0,-1,1,0,0]),t.STATIC_DRAW),this.tilemapShader=s.initShaderProgram(t,r,o),this.positionAttribute=t.getAttribLocation(this.tilemapShader,"position"),this.textureAttribute=t.getAttribLocation(this.tilemapShader,"texture"),this.viewportSizeUniform=t.getUniformLocation(this.tilemapShader,"viewportSize"),this.viewOffsetUniform=t.getUniformLocation(this.tilemapShader,"viewOffset"),this.mapSizeUniform=t.getUniformLocation(this.tilemapShader,"mapSize"),this.tileSizeUniform=t.getUniformLocation(this.tilemapShader,"tileSize"),this.animFrameUniform=t.getUniformLocation(this.tilemapShader,"animFrame"),this.tileSamplerUniform=t.getUniformLocation(this.tilemapShader,"tiles"),this.spriteSamplerUniform=t.getUniformLocation(this.tilemapShader,"sprites"),this.layerTextures=new Array(e.depth);for(let i=0;i<e.depth;i++){const s=t.createTexture(),r=e.layers[i].imageData;t.bindTexture(t.TEXTURE_2D,s),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.width,e.height,0,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.layerTextures[i]=s}}draw(t,e,i,s,r){const o=this.gl,n=this.tileMap;o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA),o.useProgram(this.tilemapShader),o.bindBuffer(o.ARRAY_BUFFER,this.quadVertBuffer),o.enableVertexAttribArray(this.positionAttribute),o.enableVertexAttribArray(this.textureAttribute),o.vertexAttribPointer(this.positionAttribute,2,o.FLOAT,!1,16,0),o.vertexAttribPointer(this.textureAttribute,2,o.FLOAT,!1,16,8),o.uniform2f(this.viewOffsetUniform,t,e),o.uniform2f(this.viewportSizeUniform,i,s),o.uniform2f(this.tileSizeUniform,n.tileSize.width,n.tileSize.height),o.uniform1f(this.animFrameUniform,r||0),o.activeTexture(o.TEXTURE0),o.uniform1i(this.spriteSamplerUniform,0),o.activeTexture(o.TEXTURE1),o.uniform1i(this.tileSamplerUniform,1);const h=Math.min(n.visibleRect.x1,n.prevVisibleRect.x1),a=Math.min(n.visibleRect.y1,n.prevVisibleRect.y1),c=Math.max(n.visibleRect.x2,n.prevVisibleRect.x2),l=Math.max(n.visibleRect.y2,n.prevVisibleRect.y2);for(let t=0;t<n.depth;t++){const e=n.layers[t],i=this.layerTextures[t];if(o.uniform2f(this.mapSizeUniform,n.width,n.height),o.bindTexture(o.TEXTURE_2D,i),n.dirty){for(let t=a;t<l;t++)for(let i=h;i<c;i++){const s=n.isVisible(i,t)?255:n.isSeen(i,t)?144:0;e.setAlpha(i,t,s)}o.texSubImage2D(o.TEXTURE_2D,0,0,0,e.width,e.height,o.RGBA,o.UNSIGNED_BYTE,e.imageData)}o.drawArrays(o.TRIANGLES,0,6)}n.dirty=!1}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(16),o=i(24),n=i(25),h=i(26),a=i(8),c=i(6),l=i(17);let d=class extends l.Entity{constructor(t,e,i,s,r,o){super(t,e,i,s,r,o),this.hp=100,this.maxHp=100,this.ap=1,this.maxAp=1,this.inventory=new a.ArrayList,this.talents=new a.ArrayList,this.visibleDuration=-1,this.seen=!1}startTurn(){this.ap=this.maxAp;for(let t=0;t<this.talents.length;t++){const e=this.talents.get(t);e.cooldown>0&&e.cooldown--}}move(t,e,i){const s=this.x+t,r=this.y+e;if(this.blocks){if(this.game.isBlocked(s,r))return!1}else if(this.game.tileMap.isBlocked(s,r))return!1;this.x=s,this.y=r,this.ap--,this.offset.x=-t*this.game.tileSize.width,this.offset.y=-e*this.game.tileSize.height;const o=i||4,n=this.game.tileSize.width/o,a=this.game.tileSize.height/o;return this.game.animations.push(new h.SlideAnimation(this,t*n,e*a,o)),this.game.blocked=!0,!0}moveTo(t,e,i){return this.move(t-this.x,e-this.y,i)}moveToward(t,e,i){const s=t-this.x,r=e-this.y;if(s<0&&r<0&&this.move(-1,-1,i))return!0;if(s<0&&r>0&&this.move(-1,1,i))return!0;if(s>0&&r<0&&this.move(1,-1,i))return!0;if(s>0&&r>0&&this.move(1,1,i))return!0;if(Math.abs(s)>Math.abs(r)){if(s<0&&this.move(-1,0,i))return!0;if(s>0&&this.move(1,0,i))return!0;if(r<0&&this.move(0,-1,i))return!0;if(r>0&&this.move(0,1,i))return!0}else{if(r<0&&this.move(0,-1,i))return!0;if(r>0&&this.move(0,1,i))return!0;if(s<0&&this.move(-1,0,i))return!0;if(s>0&&this.move(1,0,i))return!0}return!1}attack(t,e){t!==this&&(this.onAttack(t,e),t.takeDamage(this,e),this.ap--,this.game.animations.push(new o.BumpAnimation(this,t)),this.game.blocked=!0)}takeHeal(t){this.hp=Math.min(this.hp+t,this.maxHp),this.addFloatingText(t.toString(),c.Colors.LIGHT_GREEN)}takeDamage(t,e){this.hp<=0||(this.hp-=e,this.addFloatingText(e.toString(),c.Colors.RED),this.hp<=0&&(this.hp=0,this.onDeath(t),this.game.entities.remove(this)))}pickup(t){t.onPickup(this),this.inventory.add(t),this.game.entities.remove(t)}use(t){return t.onUse(this)}cast(t,e,i){t.targetType===r.TargetType.SELF||e?t.cast(this,e)&&i&&i():this.game.startTargeting(t,i)}addFloatingText(t,e){this.game.animations.push(new n.FloatingTextAnimation(this,t,e))}onAttack(t,e){}onDeath(t){}};d=s([i(0).Serializable("Actor")],d),e.Actor=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=12;e.BumpAnimation=class extends s.Animation{constructor(t,e){super(r,!0),this.entity=t,this.dx=e.x-t.x,this.dy=e.y-t.y}update(){const t=r-this.countdown;t>=0&&t<4&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),t>=4&&t<8&&(this.entity.offset.x-=this.dx,this.entity.offset.y-=this.dy),super.update()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(6),r=i(5),o=40;e.FloatingTextAnimation=class extends r.Animation{constructor(t,e,i){super(o,!1),this.actor=t,this.str=e,this.color=i||s.Colors.WHITE}draw(t){const e=o-this.countdown,i=this.actor.pixelX+(this.actor.sprite.width/2|0)-t.viewport.x,s=this.actor.pixelY-3-t.viewport.y-Math.min(4,Math.floor(e/2));t.app.drawCenteredString(this.str,i,s,this.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5);e.SlideAnimation=class extends s.Animation{constructor(t,e,i,s){super(s,!0),this.entity=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),0===this.countdown&&(this.entity.offset.x=0,this.entity.offset.y=0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s="__wgltMetadata";function r(t){const e=new o;return t[s]=e,e}e.createSerializeMetadata=r,e.getSerializeMetadata=function(t){return t[s]||r(t)};class o{constructor(){this.className="Object",this.valueType=!1}}e.SerializeMetadata=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(48),r=i(29),o=i(30),n=i(1),h=i(31),a=i(2),c=i(4),l=400,d=224,u=!1,p=2,f=[c.Keys.VK_NUMPAD7],g=[c.Keys.VK_NUMPAD9],y=[c.Keys.VK_NUMPAD1],m=[c.Keys.VK_NUMPAD3],_=[c.Keys.VK_UP,c.Keys.VK_NUMPAD8,c.Keys.VK_K,c.Keys.VK_W,c.Keys.VK_Z],x=[c.Keys.VK_LEFT,c.Keys.VK_NUMPAD4,c.Keys.VK_H,c.Keys.VK_A,c.Keys.VK_Q],v=[c.Keys.VK_DOWN,c.Keys.VK_NUMPAD2,c.Keys.VK_J,c.Keys.VK_S],w=[c.Keys.VK_RIGHT,c.Keys.VK_NUMPAD6,c.Keys.VK_L,c.Keys.VK_D],b=[c.Keys.VK_SPACE,c.Keys.VK_NUMPAD5];e.App=class{constructor(t){const e=t.canvas;if(!e)throw new Error("Null or missing canvas element");const i=e.getContext("webgl",{alpha:!1,antialias:!1});if(!i)throw new Error("Could not get WebGL context");this.canvas=e,this.gl=i,this.size=t.size||new n.Rect(0,0,l,d),this.font=t.font||s.FONT_04B03,this.fillWindow=t.fillWindow||u,this.scaleFactor=t.scaleFactor||p,this.center=new a.Vec2(this.size.width/2|0,this.size.height/2|0),i.disable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),e.width=this.size.width,e.height=this.size.height,e.style.outline="none",e.tabIndex=0,e.focus(),this.mobile=this.isMobile(),this.renderSet=new h.RenderSet(i,t.imageUrl,this.font),this.keyboard=new r.Keyboard(e),this.mouse=new o.Mouse(this),this.fillWindow&&(window.addEventListener("resize",this.handleResizeEvent.bind(this),!1),this.handleResizeEvent()),this.renderLoop()}handleResizeEvent(){const t=window.innerWidth,e=window.innerHeight,i=this.isMobile(),s=i?320:400,r=i?224:300;this.scaleFactor=1,this.scaleFactor=t>e?Math.max(1,Math.min(Math.round(t/s),Math.round(e/r))):Math.max(1,Math.min(Math.round(t/r),Math.round(e/s))),this.size.width=Math.round(t/this.scaleFactor),this.size.height=Math.round(e/this.scaleFactor),this.center.x=this.size.width/2|0,this.center.y=this.size.height/2|0,this.canvas.width=this.size.width,this.canvas.height=this.size.height,this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width=t+"px",this.canvas.style.height=e+"px"}isMobile(){return!!navigator.userAgent.match(/Android|iPhone|iPod|IEMobile|WPDesktop|Opera Mini/i)}renderLoop(){this.keyboard.update(),this.mouse.update(),this.resetGl(),this.state&&this.state.update(),this.renderSet.flush(this.size.width,this.size.height),requestAnimationFrame(this.renderLoop.bind(this))}resetGl(){const t=this.gl;t.viewport(0,0,this.size.width,this.size.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.renderSet.positionArrayIndex=0,this.renderSet.texcoordArrayIndex=0,this.renderSet.colorArrayIndex=0}drawImage(t,e,i,s,r,o,n,h,a){this.renderSet.drawImage(t,e,i,s,r,o,n,h,a)}drawString(t,e,i,s,r){this.renderSet.drawString(t,e,i,s,r)}drawCenteredString(t,e,i,s){this.renderSet.drawCenteredString(t,e,i,s)}drawRightString(t,e,i,s){this.renderSet.drawRightString(t,e,i,s)}isKeyDown(t){const e=this.keyboard.getKey(t);return e&&e.down}isKeyPressed(t){const e=this.keyboard.getKey(t),i=e?e.downCount:0;return 1===i||i>30}isDownLeftKeyPressed(){return this.isKeyArrayPressed(y)}isDownKeyPressed(){return this.isKeyArrayPressed(v)}isDownRightKeyPressed(){return this.isKeyArrayPressed(m)}isLeftKeyPressed(){return this.isKeyArrayPressed(x)}isWaitKeyPressed(){return this.isKeyArrayPressed(b)}isRightKeyPressed(){return this.isKeyArrayPressed(w)}isUpLeftKeyPressed(){return this.isKeyArrayPressed(f)}isUpKeyPressed(){return this.isKeyArrayPressed(_)}isUpRightKeyPressed(){return this.isKeyArrayPressed(g)}isKeyArrayPressed(t){for(let e=0;e<t.length;e++)if(this.isKeyPressed(t[e]))return!0;return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(19),r=256;e.Keyboard=class{constructor(t){this.keys=new Array(r);for(let t=0;t<r;t++)this.keys[t]=new s.Input;t.addEventListener("keydown",t=>this.setKey(t,!0)),t.addEventListener("keyup",t=>this.setKey(t,!1))}setKey(t,e){t.stopPropagation(),t.preventDefault();const i=t.keyCode;i>=0&&i<r&&(this.keys[i].down=e)}update(){for(let t=0;t<r;t++)this.keys[t].down?this.keys[t].downCount++:this.keys[t].downCount=0}getKey(t){return t>=0&&t<r?this.keys[t]:null}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(19),r=i(1),o=i(2),n=4,h=30;e.Mouse=class extends s.Input{constructor(t){super(),this.app=t,this.prev=new o.Vec2(0,0),this.start=new o.Vec2(0,0),this.x=0,this.y=0,this.dx=0,this.dy=0,this.dragDistance=0,this.longPress=!1,this.wheelDelta=0,this.lastWheelDelta=0;const e=t.canvas,i=this.handleEvent.bind(this);e.addEventListener("mousedown",i),e.addEventListener("mouseup",i),e.addEventListener("mousemove",i),e.addEventListener("contextmenu",i);const s=this.handleTouchEvent.bind(this);e.addEventListener("touchstart",s),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("touchmove",s);const r=this.handleMouseWheel.bind(this);e.addEventListener("mousewheel",r)}handleTouchEvent(t){if(t.stopPropagation(),t.preventDefault(),t.touches.length>0){const e=t.touches[0];this.updatePosition(e.clientX,e.clientY)}"touchstart"===t.type&&(this.down=!0,this.prev.x=this.x,this.prev.y=this.y,this.start.x=this.x,this.start.y=this.y,this.dx=0,this.dy=0,this.dragDistance=0),"touchend"===t.type&&(this.down=!1,this.longPress=this.downCount>=h)}handleEvent(t){t.stopPropagation(),t.preventDefault(),this.updatePosition(t.clientX,t.clientY),"mousedown"===t.type&&(this.down=!0,this.start.x=this.x,this.start.y=this.y,this.dragDistance=0,this.app.canvas.focus()),"mouseup"===t.type&&(this.down=!1,this.longPress=this.downCount>=h)}updatePosition(t,e){let i=this.app.canvas.getBoundingClientRect();const s=this.app.size.width/this.app.size.height,o=i.width/i.height;if(o-s>.01){const t=s*i.height,e=i.width-t;i=new r.Rect(Math.floor(e/2),0,t,i.height)}if(o-s<-.01){const t=i.width/s,e=i.height-t;i=new r.Rect(0,Math.floor(e/2),i.width,t)}this.x=this.app.size.width*(t-i.left)/i.width|0,this.y=this.app.size.height*(e-i.top)/i.height|0}handleMouseWheel(t){t.stopPropagation(),t.preventDefault();const e=t;return this.lastWheelDelta=Math.max(-1,Math.min(1,e.deltaY)),!1}update(){super.update(),this.dx=this.x-this.prev.x,this.dy=this.y-this.prev.y,this.prev.x=this.x,this.prev.y=this.y,this.wheelDelta=this.lastWheelDelta,this.lastWheelDelta=0,this.down&&(this.dragDistance+=Math.abs(this.dx)+Math.abs(this.dy))}isClicked(){return 1===this.upCount&&this.dragDistance<n&&!this.longPress}isDragging(){return this.down&&this.dragDistance>n}isLongPress(){return this.downCount===h&&!this.isDragging()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(32),r=65536,o="uniform vec2 u_viewportSize;attribute vec2 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_color;void main() {vec2 zeroToOne = a_position / u_viewportSize;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;v_color = a_color;}",n="precision highp float;uniform sampler2D u_image;varying vec2 v_texCoord;varying vec4 v_color;void main() {gl_FragColor = texture2D(u_image, v_texCoord);if (gl_FragColor.a < 0.1) discard;if (v_color.a != 0.0) gl_FragColor = v_color;}";e.RenderSet=class{constructor(t,e,i){this.gl=t,this.font=i;const h=s.initShaderProgram(t,o,n);this.program=h,this.viewportSizeLocation=t.getUniformLocation(h,"u_viewportSize"),this.positionLocation=t.getAttribLocation(h,"a_position"),this.texcoordLocation=t.getAttribLocation(h,"a_texCoord"),this.colorLocation=t.getAttribLocation(h,"a_color"),this.positionBuffer=t.createBuffer(),this.texcoordBuffer=t.createBuffer(),this.colorBuffer=t.createBuffer(),this.spriteTexture=s.createTexture(t,e),this.positionArray=new Float32Array(r),this.positionArrayIndex=0,this.texcoordArray=new Float32Array(r),this.texcoordArrayIndex=0,this.colorUint8Array=new Uint8Array(r),this.colorDataView=new DataView(this.colorUint8Array.buffer),this.colorArrayIndex=0}drawCenteredString(t,e,i,s){const r=e-this.font.getStringWidth(t)/2|0;this.drawString(t,r,i,s)}drawRightString(t,e,i,s){const r=e-this.font.getStringWidth(t);this.drawString(t,r,i,s)}drawString(t,e,i,s,r){const o=t.split("\n"),n=this.font.getHeight();let h=e,a=i;for(let t=0;t<o.length;t++){t>0&&(h=e,a+=n);for(let e=0;e<o[t].length;e++){const i=o[t].charCodeAt(e);if(this.font.isInRange(i)){const t=this.font.getOffset(i),e=this.font.getWidth(i);this.drawImage(h,a,t,0,e,n,s),h+=e}}}r&&(r.x=h,r.y=a)}drawChar(t,e,i,s){if(this.font.isInRange(t)){const r=this.font.getOffset(t),o=this.font.getWidth(t),n=this.font.getHeight();this.drawImage(e,i,r,0,o,n,s)}}drawImage(t,e,i,s,r,o,n,h,a){const c=this.spriteTexture;if(!c.loaded)return;const l=void 0!==h?h:r,d=void 0!==a?a:o,u=t+Math.abs(l),p=e+d,f=i/c.width,g=s/c.height,y=(i+r)/c.width,m=(s+o)/c.height,_=n||0;this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=m,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=m,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=m;for(let t=0;t<6;t++)this.colorDataView.setUint32(this.colorArrayIndex,_,!1),this.colorArrayIndex+=4}flush(t,e){if(!this.spriteTexture.loaded||0===this.positionArrayIndex)return;const i=this.gl;i.useProgram(this.program),i.uniform2f(this.viewportSizeLocation,t,e),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.spriteTexture);{i.enableVertexAttribArray(this.positionLocation),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.bufferData(i.ARRAY_BUFFER,this.positionArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,o=0;i.vertexAttribPointer(this.positionLocation,t,e,s,r,o)}{i.enableVertexAttribArray(this.texcoordLocation),i.bindBuffer(i.ARRAY_BUFFER,this.texcoordBuffer),i.bufferData(i.ARRAY_BUFFER,this.texcoordArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,o=0;i.vertexAttribPointer(this.texcoordLocation,t,e,s,r,o)}{i.enableVertexAttribArray(this.colorLocation),i.bindBuffer(i.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.colorUint8Array,i.DYNAMIC_DRAW);const t=4,e=i.UNSIGNED_BYTE,s=!0,r=0,o=0;i.vertexAttribPointer(this.colorLocation,t,e,s,r,o)}const s=i.TRIANGLES,r=this.positionArrayIndex/2;i.drawArrays(s,0,r)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function s(t,e,i){const s=t.createShader(e);return t.shaderSource(s,i),t.compileShader(s),s}e.ExtendedTexture=class extends WebGLTexture{constructor(){super(),this.loaded=!1,this.width=0,this.height=0}},e.initShaderProgram=function(t,e,i){const r=s(t,t.VERTEX_SHADER,e),o=s(t,t.FRAGMENT_SHADER,i),n=t.createProgram();return t.attachShader(n,r),t.attachShader(n,o),t.linkProgram(n),n},e.loadShader=s,e.createTexture=function(t,e){const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const s=t.RGBA,r=t.RGBA,o=t.UNSIGNED_BYTE,n=new Uint8Array([0,0,0,255]);t.texImage2D(t.TEXTURE_2D,0,s,1,1,0,r,o,n);const h=new Image;return h.onload=(()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,s,r,o,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.generateMipmap(t.TEXTURE_2D),i.loaded=!0,i.width=h.width,i.height=h.height}),h.src=e,i}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(20);e.AppState=class{constructor(t){this.app=t,this.gui=new s.GUI(t)}update(){this.gui.handleInput(),this.gui.draw()}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});let r=class{constructor(t,e){this.baseRect=t,this.closeButtonRect=e}draw(t,e){const i=this.baseRect.x,s=this.baseRect.y,r=this.baseRect.width/3|0,o=this.baseRect.height/3|0,n=i+r,h=s+o,a=i+2*r,c=s+2*r,l=e.rect.x,d=e.rect.y,u=e.rect.width-2*r,p=e.rect.height-2*o,f=l+r,g=d+o,y=f+u,m=g+p;if(t.drawImage(l,d,i,s,r,o,void 0,r,o),t.drawImage(f,d,n,s,r,o,void 0,u,o),t.drawImage(y,d,a,s,r,o,void 0,r,o),t.drawImage(l,g,i,h,r,o,void 0,r,p),t.drawImage(f,g,n,h,r,o,void 0,u,p),t.drawImage(y,g,a,h,r,o,void 0,r,p),t.drawImage(l,m,i,c,r,o,void 0,r,o),t.drawImage(f,m,n,c,r,o,void 0,u,o),t.drawImage(y,m,a,c,r,o,void 0,r,o),this.closeButtonRect&&e.closeButton){const i=this.closeButtonRect.width,s=this.closeButtonRect.height,r=e.rect.x2-i,o=e.rect.y,n=this.closeButtonRect.x,h=this.closeButtonRect.y;t.drawImage(r,o,n,h,i,s)}}};r=s([i(0).Serializable("DialogRenderer")],r),e.DialogRenderer=r},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(16),o=i(23),n=i(33),h=i(6),a=i(50),c=i(4),l=i(36),d=i(1),u=i(37),p=i(38),f=i(2),g=i(8),y=i(0),m=i(14),_=i(22),x=new d.Rect(0,0,256,256);let v=class extends n.AppState{constructor(t,e){super(t),this.viewport=new d.Rect(0,0,t.size.width,t.size.height),this.viewportFocus=new f.Vec2(0,0),this.animations=[],this.entities=new g.ArrayList,this.turnIndex=0,this.blocked=!1,this.cursor=new f.Vec2(-1,-1),this.tooltip=new a.TooltipDialog,this.rng=new u.RNG,this.pathIndex=0,this.horizontalViewDistance=e.viewDistance||13,this.verticalViewDistance=e.viewDistance||13,this.zoom=1,e.horizontalViewDistance&&(this.horizontalViewDistance=e.horizontalViewDistance),e.verticalViewDistance&&(this.verticalViewDistance=e.verticalViewDistance);const i=e.mapSize||x,s=e.mapLayers||1,r=e.tileSize||new d.Rect(0,0,16,16);this.tileMap=new m.TileMap(i.width,i.height,s,r),this.tileMapRenderer=new _.TileMapRenderer(t.gl,this.tileMap)}get tileSize(){return this.tileMap.tileSize}log(t,e){this.messageLog&&this.messageLog.add(t,e)}addAnimation(t){return this.animations.push(t),t.promise}update(){p.Sprite.updateGlobalAnimations(),this.updateTooltip(),this.updateZoom(),this.gui.handleInput()||(this.updateAnimations(),this.updateEntities(),this.onUpdate&&this.onUpdate(),this.updateViewport()),this.drawTileMap(),1===this.zoom&&(this.drawTargeting(),this.drawEntities(),this.drawAnimations()),this.gui.draw()}updateTooltip(){if(this.gui.dragElement)return void(this.tooltip.visible=!1);this.tooltip.visible||(this.tooltipElement=void 0);const t=this.app.mouse,e=t.isLongPress();if(!t.down&&(0!==t.dx||0!==t.dy)||e){const i=this.gui.getPanelAt(t);this.tooltipElement!==i&&(this.tooltipElement=i,i&&(i.updateTooltip(this.tooltip),e&&window.navigator.vibrate(100))),this.tooltip.visible&&(this.tooltip.gui||this.gui.add(this.tooltip),this.tooltip.showAt(t.x,t.y),this.tooltip.modal=this.app.mobile)}}updateZoom(){if(0!==this.app.mouse.wheelDelta){const t=this.viewport.getCenter();this.viewportFocus.x=t.x,this.viewportFocus.y=t.y,this.app.mouse.wheelDelta>0?this.zoom*=.5:this.zoom*=2,this.viewport.width=this.zoom*this.app.size.width|0,this.viewport.height=this.zoom*this.app.size.height|0,this.viewport.x=t.x-(this.app.size.width/this.zoom/2|0),this.viewport.y=t.y-(this.app.size.height/this.zoom/2|0)}}updateAnimations(){this.blocked=!1;for(let t=0;t<this.animations.length;t++){const e=this.animations[t];e.update(),e.blocking&&(this.blocked=!0)}for(let t=this.animations.length-1;t>=0;t--)this.animations[t].isDone()&&(this.animations[t].promise.resolve(),this.animations.splice(t,1))}updateEntities(){if(this.player&&this.player.hp<=0)return;let t=0;for(;0!==this.entities.length&&(this.turnIndex>=this.entities.length&&(this.turnIndex=0),!(t>2*this.entities.length));){const e=this.entities.get(this.turnIndex);if(e instanceof o.Actor){if(e.ap>0){if(e===this.player){this.blocked||this.handlePlayerInput();break}this.doAi(e)}e.ap<=0&&(e.ap=0,this.nextTurn())}else this.nextTurn();t++}}resetViewport(){this.player&&(this.viewportFocus.x=this.player.centerPixelX,this.viewportFocus.y=this.player.centerPixelY,this.viewport.x=this.viewportFocus.x-(this.app.size.width/this.zoom/2|0),this.viewport.y=this.viewportFocus.y-(this.app.size.height/this.zoom/2|0))}updateViewport(){this.viewport.width=this.app.size.width/this.zoom,this.viewport.height=this.app.size.height/this.zoom;const t=this.app.mouse;if(t.isDragging())this.viewport.x-=t.dx/this.zoom,this.viewport.y-=t.dy/this.zoom,this.viewportFocus.x=this.viewport.x+(this.viewport.width/2|0),this.viewportFocus.y=this.viewport.y+(this.viewport.height/2|0);else{const t=.05,e=this.viewportFocus.x-(this.app.size.width/this.zoom/2|0);if(e!==this.viewport.x){let i=t*e-t*this.viewport.x;i=i<0?Math.floor(i):Math.ceil(i),this.viewport.x+=i}const i=this.viewportFocus.y-(this.app.size.height/this.zoom/2|0);if(i!==this.viewport.y){let e=t*i-t*this.viewport.y;e=e<0?Math.floor(e):Math.ceil(e),this.viewport.y+=e}}}drawTileMap(){if(this.app.renderSet.spriteTexture.loaded){const t=(this.viewport.x/this.zoom|0)*this.zoom,e=(this.viewport.y/this.zoom|0)*this.zoom,i=(p.Sprite.globalAnimIndex/30|0)%2;this.tileMapRenderer.draw(t,e,this.viewport.width,this.viewport.height,i)}}drawTargeting(){if(this.isTargeting()&&this.targetSprite){const t=this.cursor.x*this.tileMap.tileSize.width-this.viewport.x,e=this.cursor.y*this.tileMap.tileSize.height-this.viewport.y;this.targetSprite.draw(this.app,t,e)}}drawEntities(){for(let t=0;t<3;t++)for(let e=0;e<this.entities.length;e++){const i=this.entities.get(e);i.zIndex===t&&this.tileMap.isVisible(i.x,i.y)&&i.draw()}}drawAnimations(){let t=0;for(let e=0;e<this.animations.length;e++){const i=this.animations[e];0!==t&&i.blocking||i.draw(this),i.blocking&&t++}}isTargeting(){return!!this.targetAbility}startTargeting(t,e){this.targetAbility=t,this.targetCallback=e,this.player&&(this.cursor.x=this.player.x,this.cursor.y=this.player.y)}endTargeting(){if(this.player&&this.targetAbility){const t=this.targetAbility.targetType;let e=null;t===r.TargetType.ENTITY?e=this.getActorAt(this.cursor.x,this.cursor.y):t===r.TargetType.TILE&&(e=this.tileMap.getCell(this.cursor.x,this.cursor.y)),e&&this.targetAbility.cast(this.player,e)&&this.targetCallback&&this.targetCallback()}this.cancelTargeting()}cancelTargeting(){this.targetAbility=void 0,this.targetCallback=void 0}handlePlayerInput(){if(!this.player||this.blocked)return;if(this.player.ai)return this.player.ai.doAi(),void(this.player.ap=0);const t=this.app.mouse;if((t.down||0!==t.dx||0!==t.dy)&&(this.cursor.x=(this.viewport.x+t.x)/this.tileMap.tileSize.width|0,this.cursor.y=(this.viewport.y+t.y)/this.tileMap.tileSize.height|0),this.app.isKeyDown(c.Keys.VK_SHIFT)){let t=0,e=0;return this.app.isDownLeftKeyPressed()&&(t=-1,e=1),this.app.isDownKeyPressed()&&(e=1),this.app.isDownRightKeyPressed()&&(t=1,e=1),this.app.isLeftKeyPressed()&&(t=-1),this.app.isRightKeyPressed()&&(t=1),this.app.isUpLeftKeyPressed()&&(t=-1,e=-1),this.app.isUpKeyPressed()&&(e=-1),this.app.isUpRightKeyPressed()&&(t=1,e=-1),this.viewportFocus.x-=t*this.tileMap.tileSize.height,void(this.viewportFocus.y-=e*this.tileMap.tileSize.height)}if(this.isTargeting())return(this.app.isKeyPressed(c.Keys.VK_ENTER)||this.app.mouse.isClicked())&&this.endTargeting(),this.app.isKeyPressed(c.Keys.VK_ESCAPE)&&this.cancelTargeting(),this.app.isDownLeftKeyPressed()&&(this.cursor.x--,this.cursor.y++),this.app.isDownKeyPressed()&&this.cursor.y++,this.app.isDownRightKeyPressed()&&(this.cursor.x++,this.cursor.y++),this.app.isLeftKeyPressed()&&this.cursor.x--,this.app.isRightKeyPressed()&&this.cursor.x++,this.app.isUpLeftKeyPressed()&&(this.cursor.x--,this.cursor.y--),this.app.isUpKeyPressed()&&this.cursor.y--,void(this.app.isUpRightKeyPressed()&&(this.cursor.x++,this.cursor.y--));if(t.isClicked()){const e=(this.viewport.x+t.x)/this.tileMap.tileSize.width|0,i=(this.viewport.y+t.y)/this.tileMap.tileSize.height|0,s=this.tileMap.getCell(e,i);s&&s!==this.targetTile&&(this.targetTile=s,this.path=l.computePath(this.tileMap,this.player,this.targetTile,100),this.pathIndex=0)}let e=null;if(this.path){for(e=this.path[this.pathIndex];e&&e.x===this.player.x&&e.y===this.player.y;)this.pathIndex++,e=this.pathIndex<this.path.length?this.path[this.pathIndex]:null;e||this.stopAutoWalk()}if(e){const t=e.x-this.player.x,i=e.y-this.player.y;this.tryMoveOrAttack(t,i)||this.stopAutoWalk()}else this.app.isDownLeftKeyPressed()&&this.tryMoveOrAttack(-1,1)||this.app.isDownKeyPressed()&&this.tryMoveOrAttack(0,1)||this.app.isDownRightKeyPressed()&&this.tryMoveOrAttack(1,1)||this.app.isLeftKeyPressed()&&this.tryMoveOrAttack(-1,0)||this.app.isRightKeyPressed()&&this.tryMoveOrAttack(1,0)||this.app.isUpLeftKeyPressed()&&this.tryMoveOrAttack(-1,-1)||this.app.isUpKeyPressed()&&this.tryMoveOrAttack(0,-1)||this.app.isUpRightKeyPressed()&&this.tryMoveOrAttack(1,-1)||this.app.isWaitKeyPressed()&&(this.player.ap=0)}tryMoveOrAttack(t,e){const i=this.player;if(!i)return!1;const s=i.x+t,r=i.y+e;for(let t=0;t<this.entities.length;t++){const e=this.entities.get(t);if(i!==e&&e.x===s&&e.y===r)return this.path&&e instanceof o.Actor?1===this.pathIndex?(this.stopAutoWalk(),e.onBump(i)):(this.stopAutoWalk(),!0):e.onBump(i)}return i.move(t,e)}recalculateViewportFocus(){const t=this.player;if(!t)return;const e=this.tileMap,i=e.tileSize.width,s=e.tileSize.height;let r=t.x*i,n=t.y*s,h=(t.x+1)*i,a=(t.y+1)*s;for(let o=t.y-this.verticalViewDistance;o<=t.y+this.verticalViewDistance;o++)for(let c=t.x-this.horizontalViewDistance;c<=t.x+this.horizontalViewDistance;c++)e.isVisible(c,o)&&(r=Math.min(r,c*i),n=Math.min(n,o*s),h=Math.max(h,(c+1)*i),a=Math.max(a,(o+1)*s));let c=t.x*i,l=t.y*s,d=c+i,u=l+s;if(this.path)for(let t=this.pathIndex;t<this.path.length;t++){const e=this.path[t];c=Math.min(c,e.x*i),l=Math.min(l,e.y*s),d=Math.max(d,(e.x+1)*i),u=Math.max(u,(e.y+1)*s)}else for(let t=0;t<this.entities.length;t++){const r=this.entities.get(t);r instanceof o.Actor&&e.isVisible(r.x,r.y)&&(c=Math.min(c,r.x*i),l=Math.min(l,r.y*s),d=Math.max(d,(r.x+1)*i),u=Math.max(u,(r.y+1)*s))}h-r<=this.viewport.width?this.viewportFocus.x=Math.round((r+h)/2):this.viewportFocus.x=Math.round((c+d)/2),a-n<=this.viewport.height?this.viewportFocus.y=Math.round((n+a)/2):this.viewportFocus.y=Math.round((l+u)/2)}doAi(t){t.ai?((t.visibleDuration>0||t.ai.alwaysActive)&&t.ai.doAi(),t.ap=0):t.ap=0}nextTurn(){if(this.turnIndex<this.entities.length){const t=this.entities.get(this.turnIndex);t.endTurn(),this.player===t&&this.recomputeFov()}if(this.turnIndex++,this.turnIndex>=this.entities.length&&(this.turnIndex=0),this.turnIndex>=0&&this.turnIndex<this.entities.length){const t=this.entities.get(this.turnIndex);t.startTurn(),this.player===t&&this.recalculateViewportFocus()}}stopAutoWalk(){this.path=void 0,this.targetTile=void 0}isBlocked(t,e){if(this.tileMap.isBlocked(t,e))return!0;for(let i=0;i<this.entities.length;i++){const s=this.entities.get(i);if(s.blocks&&s.x===t&&s.y===e)return!0}return!1}getEntityAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities.get(i);if(s.x===t&&s.y===e)return s}}getActorAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities.get(i);if(s instanceof o.Actor&&s.x===t&&s.y===e)return s}}recomputeFov(){if(this.player){this.tileMap.computeFov(this.player.x,this.player.y,this.horizontalViewDistance,this.verticalViewDistance);for(let t=0;t<this.entities.length;t++){const e=this.entities.get(t);e!==this.player&&(e instanceof o.Actor&&(this.tileMap.isVisible(e.x,e.y)?(e.seen||(e.seen=!0,this.player.addFloatingText("!",h.Colors.WHITE),this.stopAutoWalk(),this.viewportFocus.x=(this.player.centerPixelX+e.centerPixelX)/2|0,this.viewportFocus.y=(this.player.centerPixelY+e.centerPixelY)/2|0),e.visibleDuration++):e.visibleDuration=-1))}}}};v=s([y.Serializable("Game")],v),e.Game=v},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=[-1,0,1,-1,1,-1,0,1],r=[-1,-1,-1,0,0,1,1,1],o=[1.5,1,1.5,1,1,1.5,1,1.5];function n(t){let e=null,i=-1,s=1/0;for(let r=0;r<t.length;r++){const o=t[r];o.g!==1/0&&o.g+o.h<s&&(e=o,i=r,s=o.g+o.h)}return t.splice(i,1),e}function h(t){const e=[];let i=t;for(;i;)e.push(i),i=i.prev;return e.reverse(),e}e.computePath=function(t,e,i,a){!function(t,e){for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++){const r=t.grid[i][s];r.g=1/0,r.h=Math.min(Math.abs(s-e.x),Math.abs(i-e.y)),r.prev=null}}(t,i);const c=t.grid[e.y][e.x];c.g=0;const l=[c];for(;l.length>0;){const e=n(l);if(e.x===i.x&&e.y===i.y)return h(e);for(let n=0;n<s.length;n++){const h=e.x+s[n],c=e.y+r[n];if(h>=0&&h<t.width&&c>=0&&c<t.height){const s=t.grid[c][h],r=e.g+o[n];r<s.g&&r<=a&&(h===i.x&&c===i.y||!t.grid[c][h].blocked)&&(s.g=r,s.prev=e,l.push(s))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RNG=class{constructor(t){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||1}setSeed(t){this.state=t}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,e){const i=e-t;return t+(this.nextInt()/this.m*i|0)}chooseIndex(t){const e=t.reduce((t,e)=>t+e),i=this.nextRange(1,e+1);let s=0;for(let e=0;e<t.length;e++)if(i<=(s+=t[e]))return e;return t.length-1}chooseKey(t){const e=[],i=[];for(const s in t)t.hasOwnProperty(s)&&(e.push(s),i.push(t[s]));return e[this.chooseIndex(i)]}}},function(t,e,i){"use strict";var s,r=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const o=i(1),n=i(0);let h=s=class extends o.Rect{constructor(t,e,i,s,r,o,n,h){super(t,e,i,s),this.frames=r||1,this.loop=!!o,this.ticksPerFrame=n||30,this.colorOverride=h,this.animIndex=0,this.animDelay=0}draw(t,e,i,r){let o=this.animIndex;this.loop&&(o=(s.globalAnimIndex/this.ticksPerFrame|0)%this.frames);const n=this.x+o*this.width,h=this.y,a=r||this.colorOverride;t.drawImage(e,i,n,h,this.width,this.height,a),this.animDelay++,this.animDelay>this.ticksPerFrame&&(this.animDelay=0,this.animIndex++,this.animIndex>=this.frames&&(this.loop?this.animIndex=0:this.animIndex=this.frames-1))}clone(){return new s(this.x,this.y,this.width,this.height,this.frames,this.loop,this.ticksPerFrame,this.colorOverride)}static updateGlobalAnimations(){s.globalAnimIndex++}};h.globalAnimIndex=0,h=s=r([n.Serializable("Sprite")],h),e.Sprite=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);e.TileMapCell=class extends s.Vec2{constructor(t,e){super(t,e),this.blocked=!0,this.blockedSight=!0,this.visible=!1,this.seen=!1,this.g=0,this.h=0,this.prev=null}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(15),o=i(10),n=i(12),h=i(9);let a=class extends r.ButtonSlot{onDrop(t){if(this.children.length>0)return!1;if(t instanceof o.ItemButton){const e=t,i=e.containerItems,s=e.stackItems.get(0);return this.add(new n.ItemShortcutButton(this.rect.clone(),i,s)),!1}return t instanceof h.TalentButton?!!t.shortcut||(this.add(new h.TalentButton(this.rect.clone(),t.talent,!0)),!1):!!(t instanceof n.ItemShortcutButton||t instanceof h.TalentButton&&t.shortcut)}};a=s([i(0).Serializable("ShortcutButtonSlot")],a),e.ShortcutButtonSlot=a},function(t,e,i){"use strict";function s(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),s(i(16)),s(i(23)),s(i(18)),s(i(43)),s(i(44)),s(i(5)),s(i(24)),s(i(45)),s(i(46)),s(i(25)),s(i(47)),s(i(26)),s(i(28)),s(i(33)),s(i(8)),s(i(11)),s(i(6)),s(i(49)),s(i(17)),s(i(35)),s(i(20)),s(i(13)),s(i(15)),s(i(52)),s(i(7)),s(i(34)),s(i(54)),s(i(10)),s(i(55)),s(i(12)),s(i(57)),s(i(58)),s(i(3)),s(i(59)),s(i(60)),s(i(40)),s(i(9)),s(i(61)),s(i(19)),s(i(62)),s(i(29)),s(i(4)),s(i(21)),s(i(30)),s(i(36)),s(i(1)),s(i(37)),s(i(0)),s(i(63)),s(i(38)),s(i(64)),s(i(14)),s(i(39)),s(i(22)),s(i(2))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AnimationPromise=class{constructor(){this.handlers=[]}then(t){return this.handlers.push(t),this}resolve(){for(let t=0;t<this.handlers.length;t++)this.handlers[t]()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(18),r=1;e.BasicMonster=class extends s.AI{constructor(t,e){super(t),this.damageFunc=e}doAi(){const t=this.actor,e=t.game.player;if(e)if(t.distanceTo(e)>1.5)t.moveToward(e.x,e.y);else if(e.hp>0){const i=this.damageFunc?this.damageFunc(t,e):r;t.attack(e,i)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(18);e.ConfusedMonster=class extends s.AI{constructor(t){super(t),this.numTurns=10,this.oldAi=t.ai}doAi(){if(this.numTurns>0){const t=this.actor.game.rng;this.actor.move(t.nextRange(-1,2),t.nextRange(-1,2)),this.numTurns--}else this.actor.ai=this.oldAi}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=i(5);e.FadeInAnimation=class extends r.Animation{constructor(t){super(t,!0),this.duration=t}draw(t){const e=t.blackoutRect;if(!e)return;const i=this.countdown/this.duration,r=Math.max(1,Math.min(255,255*i|0)),o=s.fromRgb(0,0,0,r);t.app.drawImage(0,0,e.x,e.y,e.width,e.height,o,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=i(5);e.FadeOutAnimation=class extends r.Animation{constructor(t){super(t,!0),this.duration=t}draw(t){const e=t.blackoutRect;if(!e)return;const i=1-this.countdown/this.duration,r=Math.max(1,Math.min(255,255*i|0)),o=s.fromRgb(0,0,0,r);t.app.drawImage(0,0,e.x,e.y,e.width,e.height,o,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5);e.ProjectileAnimation=class extends s.Animation{constructor(t,e,i,s){super(s,!0),this.sprite=t,this.position=e,this.velocity=i,this.duration=s}update(){super.update(),this.position.add(this.velocity)}draw(t){const e=this.position.x-t.viewport.x,i=this.position.y-t.viewport.y;this.sprite.draw(t.app,e,i)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=32,r=126;class o{isInRange(t){return t>=s&&t<=r}getStringWidth(t){let e=0;for(let i=0;i<t.length;i++)e+=this.getWidth(t.charCodeAt(i));return e}}e.Font=o;e.MonospacedFont=class extends o{constructor(t){super(),this.glyphSize=t}getOffset(t){return(t-s)*this.glyphSize.width}getWidth(){return this.glyphSize.width}getHeight(){return this.glyphSize.height}};class n extends o{constructor(t,e){super(),this.height=t,this.widths=e,this.offsets=[0];let i=0;for(let t=0;t<this.widths.length;t++)i+=this.widths[t],this.offsets.push(i)}getOffset(t){return this.offsets[t-s]}getWidth(t){return this.widths[t-s]}getHeight(){return this.height}}e.ProportionalFont=n,e.FONT_04B03=new n(8,[4,2,4,6,5,6,6,2,3,3,4,4,3,4,2,6,5,3,5,5,5,5,5,5,5,5,2,2,4,4,4,5,6,5,5,4,5,4,4,5,5,4,5,5,4,6,5,5,5,5,5,5,4,5,5,6,5,5,4,3,6,3,4,5,3,5,5,4,5,5,4,5,5,2,3,5,2,6,5,5,5,5,4,5,4,5,5,6,4,5,5,4,2,4,5,0])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(21);e.CompoundMessage=class extends s.Message{constructor(...t){super("",0),this.messages=t}draw(t,e){for(let i=0;i<this.messages.length;i++)this.messages[i].draw(t,e)}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(1),o=i(7),n=i(0);let h=class extends o.Dialog{constructor(){super(new r.Rect(0,0,100,10)),this.messages=[],this.visible=!1}showAt(t,e){if(!this.gui)return;const i=this.gui.app,s=i.font,r=s.getHeight()+2;this.rect.width=10,this.rect.height=10+this.messages.length*r;for(let t=0;t<this.messages.length;t++){const e=this.messages[t],i=10+s.getStringWidth(e.text);this.rect.width=Math.max(this.rect.width,i)}t+this.rect.width>=i.size.width?this.rect.x=t-this.rect.width-2:this.rect.x=t+2,e-this.rect.height<0?this.rect.y=e+2:this.rect.y=e-this.rect.height-2,this.rect.x<0&&(this.rect.x=0),this.rect.y<0&&(this.rect.y=0),this.visible=!0}drawContents(){if(!this.gui)return;super.drawContents();const t=this.gui.app.font.getHeight()+2,e=this.rect.x+5;let i=this.rect.y+5;for(let s=0;s<this.messages.length;s++){const r=this.messages[s];this.gui.app.drawString(r.text,e,i,r.color),i+=t}}handleInput(){return!!this.gui&&(this.gui.app.mouse.isClicked()&&(this.visible=!1),!1)}};h=s([n.Serializable("TooltipDialog")],h),e.TooltipDialog=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(14);e.TileMapLayer=class{constructor(t,e){this.width=t,this.height=e,this.imageData=new Uint8Array(4*t*e),this.clear()}clear(){let t=0;for(;t<this.imageData.length;)this.imageData[t++]=0}getIndex(t,e){return 4*(e*this.width+t)}setTile(t,e,i){const s=this.getIndex(t,e);this.imageData[s]=i%64|0,this.imageData[s+1]=i/64|0}getTile(t,e){const i=this.getIndex(t,e);return s.getTileId(this.imageData[i],this.imageData[i+1])}isAnimated(t,e){const i=this.getIndex(t,e);return!!this.imageData[i+2]}setAnimated(t,e,i){const s=this.getIndex(t,e);this.imageData[s+2]=i?1:0}getAlpha(t,e){const i=this.getIndex(t,e);return this.imageData[i+3]}setAlpha(t,e,i){const s=this.getIndex(t,e);this.imageData[s+3]=i}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(2),n=i(53),h=i(7),a=i(0);let c=class extends h.Dialog{constructor(t,e){super(t),this.options=e,this.selectedIndex=0,this.renderer=new n.DefaultSelectOptionRenderer}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect,e=new o.Vec2(t.x+4,t.y+4);for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex;this.renderer.drawOption(this.gui,e,i,s),e.y+=this.renderer.getHeight(i,s)}}handleInput(){if(!this.gui)return!1;const t=this.gui.app;for(let e=0;e<this.options.length;e++)t.isKeyPressed(r.Keys.VK_A+e)&&(this.selectedIndex=e,this.onSelect&&this.onSelect(this.options[e]));t.isKeyPressed(r.Keys.VK_ENTER)&&this.onSelect&&this.onSelect(this.options[this.selectedIndex]),t.isKeyPressed(r.Keys.VK_ESCAPE)&&this.onCancel&&this.onCancel(),t.isKeyPressed(r.Keys.VK_UP)&&this.selectedIndex--,t.isKeyPressed(r.Keys.VK_DOWN)&&this.selectedIndex++,this.selectedIndex<0&&(this.selectedIndex+=this.options.length),this.selectedIndex>=this.options.length&&(this.selectedIndex-=this.options.length);const e=t.mouse,i=this.rect;let s=i.y+4;if(1===e.upCount&&e.x>=i.x1&&e.x<i.x2)for(let t=0;t<this.options.length;t++){const i=this.options[t],r=t===this.selectedIndex,o=this.renderer.getHeight(i,r),n=s,h=s+o;e.y>=n&&e.y<h&&(r?this.onSelect&&this.onSelect(i):this.selectedIndex=t),s+=o}return!0}};c=s([a.Serializable("ComplexSelectDialog")],c),e.ComplexSelectDialog=c},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(6);let o=class{getHeight(t,e){return 10}drawOption(t,e,i,s){const o=s?r.Colors.YELLOW:r.Colors.WHITE;t.app.drawString(i.name,e.x,e.y,o)}};o=s([i(0).Serializable("DefaultSelectOptionRenderer")],o),e.DefaultSelectOptionRenderer=o},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(3);let o=class extends r.Panel{constructor(t,e){super(e),this.srcRect=t}drawContents(){if(!this.gui)return;const t=this.srcRect,e=this.rect;this.gui.app.drawImage(e.x,e.y,t.x,t.y,e.width,e.height)}};o=s([i(0).Serializable("ImagePanel")],o),e.ImagePanel=o},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(1),n=i(7),h=i(10),a=i(56),c=i(0);let l=class extends n.Dialog{constructor(t,e,i,s){super(t),this.messages=e,this.capacity=i,this.items=s,this.modal=!0,s.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new a.ItemContainerButtonSlot(new o.Rect(0,0,24,24),s,r.Keys.VK_A+t))}addItem(t){const e=this.getExistingButton(t);if(e)return void e.stackItems.add(t);const i=this.getNextFreeSlot();i&&i.add(new h.ItemButton(i.rect.clone(),this.items,t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof h.ItemButton&&s.stackItems.contains(t)&&(s.stackItems.remove(t),0===s.stackItems.length&&i.remove(s))}}getExistingButton(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e).button;if(i&&i instanceof h.ItemButton){const e=i.stackItems.get(0);if(t.isStackable(e))return i}}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+4,s=t.y+4;for(let t=0;t<this.messages.length;t++){const e=this.messages[t];this.gui.app.drawString(e.text,i,s,e.color),s+=10}for(let r=0;r<this.capacity;r++){const o=this.children.get(r);o.rect.x=i,o.rect.y=s,o.rect.width=e.width,o.rect.height=e.height,(i+=e.width+2)>t.x2-e.width-4&&(i=t.x+4,s+=e.height+2)}this.rect.height=s+4-t.y,this.drawChildren()}};l=s([c.Serializable("ItemContainerDialog")],l),e.ItemContainerDialog=l},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(15),o=i(10);let n=class extends r.ButtonSlot{constructor(t,e,i){super(t,i),this.items=e}onDrop(t){return t instanceof o.ItemButton}};n=s([i(0).Serializable("ItemContainerButtonSlot")],n),e.ItemContainerButtonSlot=n},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(6),o=i(21),n=i(3),h=i(0),a=i(2);let c=class extends n.Panel{constructor(t,e){super(t),this.messages=[],this.maxItems=e||5}add(t,e){t instanceof n.Panel||(t instanceof o.Message?this.messages.push(t):this.messages.push(new o.Message(t,e||r.Colors.WHITE)),this.messages.length>this.maxItems&&this.messages.splice(0,this.messages.length-this.maxItems))}drawContents(){if(!this.gui)return;const t=new a.Vec2(this.rect.x,this.rect.y);if(t.y<0){const e=this.gui.app.size.height+t.y+this.rect.height;t.y=e-10*this.messages.length}for(let e=0;e<this.messages.length;e++){this.messages[e].draw(this.gui.app,t),t.x=0,t.y+=10}}handleInput(){return!1}};c=s([h.Serializable("MessageLog")],c),e.MessageLog=c},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(3);let o=class extends r.Panel{constructor(t,e){super(t),this.message=e}drawContents(){if(!this.gui)return;const t=this.message,e=this.rect;this.gui.app.drawString(t.text,e.x,e.y,t.color)}};o=s([i(0).Serializable("MessagePanel")],o),e.MessagePanel=o},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(7),n=i(0);let h=class extends o.Dialog{constructor(t,e,i){super(t),this.options=e,this.callback=i}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect;for(let e=0;e<this.options.length;e++){const i=String.fromCharCode(65+e)+" - "+this.options[e].name;this.gui.app.drawString(i,t.x+4,t.y+4+10*e)}}handleInput(){if(!this.gui)return!1;for(let t=0;t<this.options.length;t++)if(this.gui.app.isKeyPressed(r.Keys.VK_A+t))return this.callback(this.options[t]),this.close(),!0;if(this.gui.app.isKeyPressed(r.Keys.VK_ESCAPE))return this.close(),!0;const t=this.gui.app.mouse,e=this.rect;if(t.isClicked()&&t.x>=e.x1&&t.x<e.x2){if(this.closeButton&&t.x>=e.x2-16&&t.y<e.y+16)return this.close(),!0;for(let i=0;i<this.options.length;i++){const s=e.y+4+10*i,r=s+10;t.y>=s&&t.y<r&&(this.callback(this.options[i]),this.close())}}return!0}};h=s([n.Serializable("SelectDialog")],h),e.SelectDialog=h},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(1),n=i(12),h=i(3),a=i(40),c=i(9),l=i(0);let d=class extends h.Panel{constructor(t,e,i){super(t),this.spacing=void 0!==i?i:2;for(let t=0;t<e;t++){const e=new a.ShortcutButtonSlot(new o.Rect(0,0,24,24),r.Keys.VK_1+t);this.add(e)}}addTalent(t,e){if(this.containsTalent(t))return;const i=this.getFreeSlot(!!e);i&&i.add(new c.TalentButton(i.rect.clone(),t,!0))}containsTalent(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);if(i.button&&i.button instanceof c.TalentButton&&i.button.talent===t)return!0}return!1}addItem(t,e,i){if(this.containsItem(e))return;const s=this.getFreeSlot(!!i);s&&s.add(new n.ItemShortcutButton(s.rect.clone(),t,e))}containsItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);if(i.button&&i.button instanceof n.ItemShortcutButton&&t.isStackable(i.button.shortcutItem))return!0}return!1}drawContents(){if(!this.gui)return;const t=this.gui.renderer.buttonSlotRect;if(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);i.rect.x=this.rect.x+e*(t.width+2),i.rect.y=this.rect.y,i.rect.width=t.width,i.rect.height=t.height}this.drawChildren()}}getFreeSlot(t){if(t)for(let t=this.children.length-1;t>=0;t--){const e=this.children.get(t);if(!e.button)return e}else for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}};d=s([l.Serializable("ShortcutBar")],d),e.ShortcutBar=d},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(4),o=i(1),n=i(15),h=i(7),a=i(9),c=i(0);let l=class extends h.Dialog{constructor(t,e,i,s){super(t),this.messages=e,this.capacity=i,this.talents=s,this.modal=!0,s.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new n.ButtonSlot(new o.Rect(0,0,24,24),r.Keys.VK_A+t))}addItem(t){const e=this.getNextFreeSlot();e&&e.add(new a.TalentButton(e.rect.clone(),t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof a.TalentButton&&s.talent===t&&i.remove(s)}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+4,s=t.y+4;for(let t=0;t<this.messages.length;t++){const e=this.messages[t];this.gui.app.drawString(e.text,i,s,e.color),s+=10}for(let r=0;r<this.capacity;r++){const o=this.children.get(r);o.rect.x=i,o.rect.y=s,o.rect.width=e.width,o.rect.height=e.height,(i+=e.width+2)>t.x2-e.width-4&&(i=t.x+4,s+=e.height+2)}this.rect.height=s+4-t.y,this.drawChildren()}};l=s([c.Serializable("TalentsDialog")],l),e.TalentsDialog=l},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});const r=i(17);let o=class extends r.Entity{isStackable(t){return this.name===t.name}onBump(t){return t.pickup(this),t.moveToward(this.x,this.y),!0}onPickup(t){}onUse(t){return!1}onUpdateTooltip(){}};o=s([i(0).Serializable("Item")],o),e.Item=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(35),r=i(31),o=i(28),n=i(20),h=i(3),a=i(27),c=i(14),l=i(22);e.Serializer=class{constructor(){this.typeLists={}}serialize(t){return{root:this.serializeObject(t),refs:this.typeLists}}serializeObject(t){if(null==t)return t;const e=typeof t;if("boolean"===e||"number"===e||"string"===e)return t;if(!t.constructor)throw new Error("Object does not have a constructor");if(t instanceof o.App||t instanceof n.GUI||t instanceof h.Panel||t instanceof r.RenderSet||t instanceof c.TileMap||t instanceof l.TileMapRenderer||t instanceof Function)return;if(t instanceof Array)return this.serializeArray(t);const i=a.getSerializeMetadata(t.constructor),d=i.className,u=!i.valueType,p={};if(d&&u){if(void 0!==t.__index)return{__className:d,__index:t.__index};let e=this.typeLists[d];e||(e=[],this.typeLists[d]=e),t.__index=e.length,e.push(p)}const f=Object.getOwnPropertyNames(t);let g=0;for(let e=0;e<f.length;e++){const i=f[e],r=t[i];if("__index"===i)continue;if(t instanceof s.Game&&("tooltip"===i||"tooltipElement"===i||"messageLog"===i))continue;const o=this.serializeObject(r);void 0!==o&&(p[i]=o,g++)}return 0!==g?d&&u?{__className:d,__index:t.__index}:p:void 0}serializeArray(t){const e=[];for(let i=0;i<t.length;i++)e.push(this.serializeObject(t[i]));return e}}},function(t,e,i){"use strict";var s=this&&this.__decorate||function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};Object.defineProperty(e,"__esModule",{value:!0});let r=class{constructor(t,e,i){this.actor=t,this.ability=e,this.rank=i||1,this.cooldown=0}use(t){return!(this.cooldown>0)&&(this.actor.cast(this.ability,t,()=>{this.cooldown=this.ability.cooldown}),!0)}};r=s([i(0).Serializable("Talent")],r),e.Talent=r}])});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/abilities/bubble.ts":
/*!*********************************!*\
  !*** ./src/abilities/bubble.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const bubble_1 = __webpack_require__(/*! ../buffs/bubble */ "./src/buffs/bubble.ts");
const SPRITE = new wglt_1.Sprite(896, 216, 16, 24, 1, true, undefined, 0xCCEEFFFF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Bubble', wglt_1.Colors.WHITE),
    new wglt_1.Message('20 mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Shields the caster absorbing 4 + INT', wglt_1.Colors.YELLOW),
    new wglt_1.Message('damage.', wglt_1.Colors.YELLOW),
];
class BubbleAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Bubble';
        this.targetType = wglt_1.TargetType.SELF;
        this.minRange = 1;
        this.maxRange = 1;
        this.cooldown = 20;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster) {
        for (let i = 0; i < caster.buffs.length; i++) {
            if (caster.buffs[i] instanceof bubble_1.Bubble) {
                if (caster === caster.game.player) {
                    caster.game.log('You already have a bubble.', wglt_1.Colors.LIGHT_GRAY);
                }
                return false;
            }
        }
        const absorb = 4 + caster.intelligenceModifier;
        caster.buffs.push(new bubble_1.Bubble(caster, absorb));
        caster.ap--;
        return true;
    }
}
exports.BubbleAbility = BubbleAbility;


/***/ }),

/***/ "./src/abilities/confuse.ts":
/*!**********************************!*\
  !*** ./src/abilities/confuse.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const CONFUSE_RANGE = 8;
const CONFUSE_SPRITE = new wglt_1.Sprite(128, 32, 16, 24, 3, false);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Confuse', wglt_1.Colors.WHITE),
    new wglt_1.Message('20 mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('Befuddles an enemy into a random', wglt_1.Colors.YELLOW),
    new wglt_1.Message('stupor for 10 turns.', wglt_1.Colors.YELLOW),
];
class ConfuseAbility {
    constructor() {
        this.sprite = CONFUSE_SPRITE;
        this.name = 'confuse';
        this.targetType = wglt_1.TargetType.ENTITY;
        this.minRange = 1;
        this.maxRange = CONFUSE_RANGE;
        this.cooldown = 1;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        if (caster.distanceTo(target) > CONFUSE_RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        target.ai = new wglt_1.ConfusedMonster(target);
        game.log('The eyes of the ' + target.name + ' look vacant, as he stumbles around!', wglt_1.Colors.LIGHT_GREEN);
        caster.ap--;
        return true;
    }
}
exports.ConfuseAbility = ConfuseAbility;


/***/ }),

/***/ "./src/abilities/curse.ts":
/*!********************************!*\
  !*** ./src/abilities/curse.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const curse_1 = __webpack_require__(/*! ../buffs/curse */ "./src/buffs/curse.ts");
const RANGE = 8;
const SPRITE = new wglt_1.Sprite(880, 144, 16, 24, 1, false, undefined, 0xC040C0FF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Curse', wglt_1.Colors.WHITE),
    new wglt_1.Message('20 mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Corrupts the target, causing (1 + INT) / 4', wglt_1.Colors.YELLOW),
    new wglt_1.Message('damage per turn for 8 turns.', wglt_1.Colors.YELLOW),
];
class CurseAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Curse';
        this.targetType = wglt_1.TargetType.ENTITY;
        this.minRange = 1;
        this.maxRange = RANGE;
        this.cooldown = 3;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        if (caster.distanceTo(target) > RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const damage = Math.round((1 + caster.intelligenceModifier) / 4);
        target.buffs.push(new curse_1.Curse(caster, target, damage, 8));
        caster.ap--;
        return true;
    }
}
exports.CurseAbility = CurseAbility;


/***/ }),

/***/ "./src/abilities/demonicgateway.ts":
/*!*****************************************!*\
  !*** ./src/abilities/demonicgateway.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const gateway_1 = __webpack_require__(/*! ../items/gateway */ "./src/items/gateway.ts");
const RANGE = 10;
const SPRITE = new wglt_1.Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Demonic Gateway', wglt_1.Colors.WHITE),
    new wglt_1.Message('20 mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('2 turn cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Creates a demonic gateway between two', wglt_1.Colors.YELLOW),
    new wglt_1.Message('locations. User can transport to the other gateway.', wglt_1.Colors.YELLOW),
];
class DemonicGatewayAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Demonic Gateway';
        this.targetType = wglt_1.TargetType.TILE;
        this.minRange = 1;
        this.maxRange = RANGE;
        this.cooldown = 10;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        const distance = caster.distanceTo(target);
        if (distance > RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const gateway1 = new gateway_1.Gateway(game, caster.x, caster.y, caster);
        const gateway2 = new gateway_1.Gateway(game, target.x, target.y, caster);
        gateway1.other = gateway2;
        gateway2.other = gateway1;
        game.entities.add(gateway1);
        game.entities.add(gateway2);
        caster.move(target.x - caster.x, target.y - caster.y, 16);
        caster.ap--;
        return true;
    }
}
exports.DemonicGatewayAbility = DemonicGatewayAbility;


/***/ }),

/***/ "./src/abilities/fireball.ts":
/*!***********************************!*\
  !*** ./src/abilities/fireball.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const explosionanimation_1 = __webpack_require__(/*! ../animations/explosionanimation */ "./src/animations/explosionanimation.ts");
const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIRE_COLOR = wglt_1.Colors.ORANGE;
const FIREBALL_SPRITE = new wglt_1.Sprite(512, 336, SPRITE_WIDTH, SPRITE_HEIGHT, undefined, undefined, undefined, FIRE_COLOR);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Fireball', wglt_1.Colors.WHITE),
    new wglt_1.Message('2% of base mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('2 turn cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Throws a fiery ball causing 8 + INT damage', wglt_1.Colors.YELLOW),
    new wglt_1.Message('to all enemies within 3 tiles.', wglt_1.Colors.YELLOW),
];
class FireballAbility {
    constructor() {
        this.sprite = FIREBALL_SPRITE;
        this.name = 'fireball';
        this.targetType = wglt_1.TargetType.TILE;
        this.minRange = 1;
        this.maxRange = FIREBALL_RANGE;
        this.cooldown = 30;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        const distance = caster.distanceTo(target);
        if (distance > FIREBALL_RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const speed = 8;
        const count = distance * (game.tileSize.width / speed);
        const dx = (target.x * game.tileSize.width - caster.pixelX) / count;
        const dy = (target.y * game.tileSize.height - caster.pixelY) / count;
        caster.ap--;
        game.addAnimation(new wglt_1.ProjectileAnimation(FIREBALL_SPRITE, new wglt_1.Vec2(caster.pixelX, caster.pixelY), new wglt_1.Vec2(dx, dy), count)).then(() => {
            game.addAnimation(new explosionanimation_1.ExplosionAnimation(game, target, FIREBALL_RADIUS, 30)).then(() => {
                game.log('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', wglt_1.Colors.ORANGE);
                const damage = caster.buffDamage(8 + caster.intelligenceModifier);
                for (let i = game.entities.length - 1; i >= 0; i--) {
                    const entity = game.entities.get(i);
                    if (entity !== caster && entity instanceof wglt_1.Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
                        game.log('The ' + entity.name + ' gets burned for ' + damage + ' hit points.', wglt_1.Colors.ORANGE);
                        entity.takeDamage(caster, damage);
                    }
                }
            });
        });
        return true;
    }
}
exports.FireballAbility = FireballAbility;


/***/ }),

/***/ "./src/abilities/flashheal.ts":
/*!************************************!*\
  !*** ./src/abilities/flashheal.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(672, 144, 16, 24, 1, false, undefined, 0xFFD0D0FF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Flash Heal', wglt_1.Colors.WHITE),
    new wglt_1.Message('20 mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('A fast spell that heals an ally', wglt_1.Colors.YELLOW),
    new wglt_1.Message('for 1d8 + INT points.', wglt_1.Colors.YELLOW),
];
class FlashHealAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Flash Heal';
        this.targetType = wglt_1.TargetType.SELF;
        this.minRange = 0;
        this.maxRange = 0;
        this.cooldown = 5;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster) {
        if (caster.hp === caster.maxHp) {
            if (caster === caster.game.player) {
                caster.game.log('You are already at full health.', wglt_1.Colors.DARK_RED);
            }
            return false;
        }
        const healAmount = caster.game.rng.nextRange(1, 8) + caster.intelligenceModifier;
        caster.takeHeal(healAmount);
        caster.ap--;
        return true;
    }
}
exports.FlashHealAbility = FlashHealAbility;


/***/ }),

/***/ "./src/abilities/leap.ts":
/*!*******************************!*\
  !*** ./src/abilities/leap.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const stunned_1 = __webpack_require__(/*! ../ai/stunned */ "./src/ai/stunned.ts");
const LEAP_RANGE = 3;
const LEAP_RADIUS = 2;
const LEAP_COLOR = wglt_1.fromRgb(0xFF, 0x80, 0x80);
const LEAP_SPRITE = new wglt_1.Sprite(720, 336, 16, 24, undefined, undefined, undefined, LEAP_COLOR);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Heroic Leap', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Stun all enemies within 1 tile.', wglt_1.Colors.YELLOW)
];
class LeapAbility {
    constructor() {
        this.sprite = LEAP_SPRITE;
        this.name = 'leap';
        this.targetType = wglt_1.TargetType.TILE;
        this.minRange = 1;
        this.maxRange = LEAP_RANGE;
        this.cooldown = 10;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        const distance = caster.distanceTo(target);
        if (distance > LEAP_RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && game.tileMap.isBlocked(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target is blocked.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const existing = game.getActorAt(target.x, target.y);
        if (existing) {
            if (caster === game.player) {
                game.log('Target is occupied.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const count = 4;
        const xSpeed = (target.x - caster.x) * game.tileSize.width / count;
        const ySpeed = (target.y - caster.y) * game.tileSize.height / count;
        game.addAnimation(new wglt_1.SlideAnimation(caster, xSpeed, ySpeed, count)).then(() => {
            caster.x = target.x;
            caster.y = target.y;
            let count = 0;
            for (let i = game.entities.length - 1; i >= 0; i--) {
                const entity = game.entities.get(i);
                if (entity === caster) {
                    continue;
                }
                if (entity instanceof wglt_1.Actor && entity.distanceTo(target) < LEAP_RADIUS) {
                    entity.ai = new stunned_1.Stunned(entity, 1);
                    count++;
                }
            }
            if (count > 0) {
                game.log('Stunned ' + count + ' foes!', LEAP_COLOR);
            }
            caster.ap--;
        });
        return true;
    }
}
exports.LeapAbility = LeapAbility;


/***/ }),

/***/ "./src/abilities/lightning.ts":
/*!************************************!*\
  !*** ./src/abilities/lightning.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const LIGHTNING_RANGE = 5;
const MANA_COST = 10;
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Lightning', wglt_1.Colors.WHITE),
    new wglt_1.Message(MANA_COST + ' mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Hurls a bolt of lightning at the nearest enemy', wglt_1.Colors.YELLOW),
    new wglt_1.Message('dealing 4 + INT damage.', wglt_1.Colors.YELLOW),
];
class LightningAbility {
    constructor() {
        this.sprite = new wglt_1.Sprite(158, 10, 16, 24, undefined, undefined, undefined, 0xFFFF00FF);
        this.name = 'lightning';
        this.targetType = wglt_1.TargetType.SELF;
        this.minRange = 1;
        this.maxRange = LIGHTNING_RANGE;
        this.cooldown = 10;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster) {
        const game = caster.game;
        // Find closest enemy (inside a maximum range) and damage it
        const monster = this.getClosestMonster(game, caster, caster.x, caster.y, LIGHTNING_RANGE);
        if (!monster) {
            game.log('No enemy is close enough to strike.', wglt_1.Colors.LIGHT_RED);
            return false;
        }
        // Zap it!
        game.log('A lightning bolt strikes the ' + monster.name + ' with a loud thunder!', wglt_1.Colors.LIGHT_BLUE);
        // Calculate damage
        const damage = 4 + caster.intelligenceModifier;
        // Create lightning animation
        const explosion = new wglt_1.Sprite(256, 408, 16, 24, 2, true, 8, wglt_1.Colors.YELLOW);
        game.addAnimation(new wglt_1.ProjectileAnimation(explosion, new wglt_1.Vec2(monster.pixelX, monster.pixelY), new wglt_1.Vec2(0, 0), 32)).then(() => {
            game.log('The damage is ' + damage + ' hit points', wglt_1.Colors.LIGHT_BLUE);
            monster.takeDamage(caster, damage);
            caster.ap--;
        });
        return true;
    }
    getClosestMonster(game, player, x, y, range) {
        let minDist = range + 1;
        let result = null;
        for (let i = 0; i < game.entities.length; i++) {
            const entity = game.entities.get(i);
            if (entity === player) {
                continue;
            }
            if (!(entity instanceof wglt_1.Actor)) {
                continue;
            }
            if (game.tileMap && !game.tileMap.isVisible(entity.x, entity.y)) {
                continue;
            }
            const dist = entity.distance(x, y);
            if (dist < minDist) {
                minDist = dist;
                result = entity;
            }
        }
        return result;
    }
}
exports.LightningAbility = LightningAbility;


/***/ }),

/***/ "./src/abilities/rage.ts":
/*!*******************************!*\
  !*** ./src/abilities/rage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const rage_1 = __webpack_require__(/*! ../buffs/rage */ "./src/buffs/rage.ts");
const SPRITE = new wglt_1.Sprite(656, 192, 16, 24, undefined, undefined, undefined, 0xDD2222FF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Rage', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Become enraged increasing damage by', wglt_1.Colors.YELLOW),
    new wglt_1.Message('100% for 8 turns.', wglt_1.Colors.YELLOW),
];
class RageAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Rage';
        this.targetType = wglt_1.TargetType.SELF;
        this.minRange = 1;
        this.maxRange = 1;
        this.cooldown = 20;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster) {
        for (let i = 0; i < caster.buffs.length; i++) {
            if (caster.buffs[i] instanceof rage_1.Rage) {
                if (caster === caster.game.player) {
                    caster.game.log('You already have rage.', wglt_1.Colors.LIGHT_GRAY);
                }
                return false;
            }
        }
        const duration = 8;
        caster.buffs.push(new rage_1.Rage(caster, duration));
        caster.ap--;
        return true;
    }
}
exports.RageAbility = RageAbility;


/***/ }),

/***/ "./src/abilities/shadowstrike.ts":
/*!***************************************!*\
  !*** ./src/abilities/shadowstrike.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const RANGE = 10;
const SPRITE = new wglt_1.Sprite(656, 192, 16, 24, undefined, undefined, undefined, 0xc4c4c4ff);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Shadow Strike', wglt_1.Colors.WHITE),
    new wglt_1.Message('Instant cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Appear behind your target up to 25 yards away,', wglt_1.Colors.YELLOW),
    new wglt_1.Message('dealing double damage.', wglt_1.Colors.YELLOW)
];
class ShadowStrikeAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'Shadow Strike';
        this.targetType = wglt_1.TargetType.ENTITY;
        this.minRange = 1;
        this.maxRange = RANGE;
        this.cooldown = 10;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        const distance = caster.distanceTo(target);
        if (distance > RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        let farthestTile = null;
        let farthestDistance = 0.0;
        for (let y = target.y - 1; y <= target.y + 1; y++) {
            for (let x = target.x - 1; x <= target.x + 1; x++) {
                if (Math.hypot(x - target.x, y - target.y) > 1.001) {
                    // Too far away from the target
                    continue;
                }
                if (game.isBlocked(x, y)) {
                    // Blocked or occupied
                    continue;
                }
                const distance = caster.distance(x, y);
                if (distance > farthestDistance) {
                    farthestTile = new wglt_1.Vec2(x, y);
                    farthestDistance = distance;
                }
            }
        }
        if (!farthestTile) {
            if (caster === game.player) {
                game.log('No free spaces available.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        const count = 4;
        const xSpeed = (farthestTile.x - caster.x) * game.tileSize.width / count;
        const ySpeed = (farthestTile.y - caster.y) * game.tileSize.height / count;
        game.addAnimation(new wglt_1.SlideAnimation(caster, xSpeed, ySpeed, count)).then(() => {
            caster.x = farthestTile.x;
            caster.y = farthestTile.y;
            caster.attack(target, caster.getDamage() * 2);
            caster.ap--;
        });
        return true;
    }
}
exports.ShadowStrikeAbility = ShadowStrikeAbility;


/***/ }),

/***/ "./src/abilities/shoot.ts":
/*!********************************!*\
  !*** ./src/abilities/shoot.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const RANGE = 8;
const SPRITE = new wglt_1.Sprite(896, 96, 16, 24, 1, false, undefined, 0x40D0D0FF);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Shoot', wglt_1.Colors.WHITE),
    new wglt_1.Message('30 yard range', wglt_1.Colors.WHITE),
    new wglt_1.Message('Requires a ranged weapon.', wglt_1.Colors.WHITE)
];
class ShootAbility {
    constructor() {
        this.sprite = SPRITE;
        this.name = 'shoot';
        this.targetType = wglt_1.TargetType.ENTITY;
        this.minRange = 1;
        this.maxRange = RANGE;
        this.cooldown = 3;
        this.tooltipMessages = TOOLTIP_MESSAGES;
    }
    cast(caster, target) {
        const game = caster.game;
        const weapon = caster.mainHandWeapon;
        if (!weapon || !weapon.ranged) {
            if (caster === game.player) {
                game.log('Shoot requires a ranged weapon.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (caster.distanceTo(target) > RANGE) {
            if (caster === game.player) {
                game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        if (game.tileMap && !game.tileMap.isVisible(target.x, target.y)) {
            if (caster === game.player) {
                game.log('Target not visible.', wglt_1.Colors.LIGHT_GRAY);
            }
            return false;
        }
        target.takeDamage(caster, caster.getDamage());
        caster.ap--;
        return true;
    }
}
exports.ShootAbility = ShootAbility;


/***/ }),

/***/ "./src/ai/stunned.ts":
/*!***************************!*\
  !*** ./src/ai/stunned.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class Stunned extends wglt_1.AI {
    constructor(actor, turns) {
        super(actor);
        this.numTurns = turns;
        this.oldAi = actor.ai;
    }
    doAi() {
        if (this.numTurns > 0) {
            // Stunned.  Sit still.
            this.numTurns--;
        }
        else {
            this.actor.ai = this.oldAi;
        }
    }
}
exports.Stunned = Stunned;


/***/ }),

/***/ "./src/animations/explosionanimation.ts":
/*!**********************************************!*\
  !*** ./src/animations/explosionanimation.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class ExplosionAnimation extends wglt_1.Animation {
    constructor(game, center, radius, duration) {
        super(duration, true);
        this.game = game;
        this.center = center;
        this.radius = radius;
        this.duration = duration;
        this.sprites = [];
    }
    update() {
        super.update();
        const game = this.game;
        const maxRadius = this.radius * (1.0 - (this.countdown + 1) / (this.duration + 1));
        const centerX = (this.center.x) * game.tileSize.width;
        const centerY = (this.center.y) * game.tileSize.height;
        for (let i = 0; i < 3; i++) {
            const radius = maxRadius;
            const angle = this.countdown + i;
            const x = centerX + game.tileSize.width * radius * Math.cos(angle);
            const y = centerY + game.tileSize.height * radius * Math.sin(angle);
            const explosion = new wglt_1.Sprite(512, 336, 16, 24, 4, false, 4, wglt_1.Colors.ORANGE);
            const animation = new wglt_1.ProjectileAnimation(explosion, new wglt_1.Vec2(x, y), new wglt_1.Vec2(0, 0), 16);
            animation.blocking = false;
            game.animations.push(animation);
        }
    }
}
exports.ExplosionAnimation = ExplosionAnimation;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const classmenu_1 = __webpack_require__(/*! ./classmenu */ "./src/classmenu.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
const mainmenu_1 = __webpack_require__(/*! ./mainmenu */ "./src/mainmenu.ts");
const racemenu_1 = __webpack_require__(/*! ./racemenu */ "./src/racemenu.ts");
const hearthstone_1 = __webpack_require__(/*! ./items/hearthstone */ "./src/items/hearthstone.ts");
const seedmenu_1 = __webpack_require__(/*! ./seedmenu */ "./src/seedmenu.ts");
class App extends wglt.App {
    constructor() {
        super({
            canvas: document.querySelector('canvas'),
            imageUrl: 'graphics.png',
            size: new wglt_1.Rect(0, 0, 224, 400),
            fillWindow: true
        });
        this.mainMenu = new mainmenu_1.MainMenu(this);
        this.seedMenu = new seedmenu_1.SeedMenu(this);
        this.raceMenu = new racemenu_1.RaceMenu(this);
        this.classMenu = new classmenu_1.ClassMenu(this);
        this.highScores = new wglt_1.AppState(this);
        this.credits = new wglt_1.AppState(this);
        this.seed = 0;
        this.showMainMenu();
    }
    showMainMenu() {
        this.state = this.mainMenu;
    }
    chooseSeed() {
        this.state = this.seedMenu;
    }
    chooseRace() {
        this.state = this.raceMenu;
    }
    chooseClass() {
        this.state = this.classMenu;
    }
    startGame() {
        this.game = new game_1.Game(this, this.seed);
        // TODO: Where to put this logic?  Game constructor?
        this.game.player.inventory.add(new hearthstone_1.Hearthstone(this.game));
        if (this.playerRace) {
            this.playerRace.initPlayer(this.game.player);
        }
        if (this.playerClass) {
            this.playerClass.initPlayer(this.game.player);
        }
        window.location.hash = 'game';
    }
    playGame() {
        const game = this.game;
        this.state = game;
        game.addAnimation(new wglt_1.FadeInAnimation(30));
    }
    showHighScores() {
        this.state = this.highScores;
    }
    showCredits() {
        this.state = this.credits;
    }
}
exports.App = App;


/***/ }),

/***/ "./src/buffs/bubble.ts":
/*!*****************************!*\
  !*** ./src/buffs/bubble.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const buff_1 = __webpack_require__(/*! ./buff */ "./src/buffs/buff.ts");
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const COLOR = 0xAADDFFFF;
const SPRITE = new wglt_1.Sprite(608, 408, 16, 24, 2, true, undefined, COLOR);
class Bubble extends buff_1.Buff {
    constructor(actor, remaining) {
        super(actor);
        this.remaining = remaining;
    }
    modifyDamageTaken(damage) {
        if (damage <= 0) {
            return damage;
        }
        const absorb = Math.min(this.remaining, damage);
        this.remaining -= absorb;
        if (this.remaining <= 0) {
            this.actor.game.log('Absorbed the last ' + absorb + ' of the bubble!', COLOR);
        }
        else {
            this.actor.game.log('Bubble absorbed ' + absorb + ' damage.', COLOR);
        }
        return damage - absorb;
    }
    draw() {
        const actor = this.actor;
        const game = actor.game;
        const app = game.app;
        SPRITE.draw(app, actor.pixelX - game.viewport.x, actor.pixelY - game.viewport.y);
    }
    isDone() {
        return this.remaining <= 0;
    }
}
exports.Bubble = Bubble;


/***/ }),

/***/ "./src/buffs/buff.ts":
/*!***************************!*\
  !*** ./src/buffs/buff.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Buff {
    constructor(actor) {
        this.actor = actor;
    }
    /**
     * Called once per turn.
     * For example, a curse might countdown over time.
     */
    update() { }
    /**
     * Modifies damage taken.
     * For example, a bubble might mitigate incoming damage.
     * @param damage Original damage taken.
     */
    modifyDamageTaken(damage) {
        return damage;
    }
    /**
     * Modifies damage dealt.
     * For example, rage doubles output damage.
     * @param damage Original damage dealt.
     */
    modifyDamageDealt(damage) {
        return damage;
    }
    /**
     * Optionally draw an overlay over the player.
     * For example, a bubble might draw a buble around the player.
     */
    draw() { }
    isDone() {
        return false;
    }
}
exports.Buff = Buff;


/***/ }),

/***/ "./src/buffs/curse.ts":
/*!****************************!*\
  !*** ./src/buffs/curse.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const buff_1 = __webpack_require__(/*! ./buff */ "./src/buffs/buff.ts");
class Curse extends buff_1.Buff {
    constructor(caster, target, damage, duration) {
        super(target);
        this.caster = caster;
        this.damage = damage;
        this.countdown = duration;
    }
    update() {
        if (this.countdown > 0) {
            this.actor.takeDamage(this.caster, this.damage);
            this.countdown--;
        }
    }
    isDone() {
        return this.countdown <= 0;
    }
}
exports.Curse = Curse;


/***/ }),

/***/ "./src/buffs/rage.ts":
/*!***************************!*\
  !*** ./src/buffs/rage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const buff_1 = __webpack_require__(/*! ./buff */ "./src/buffs/buff.ts");
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const COLOR = 0xDD2222FF;
const SPRITE = new wglt_1.Sprite(640, 408, 16, 24, 2, true, undefined, COLOR);
class Rage extends buff_1.Buff {
    constructor(actor, countdown) {
        super(actor);
        this.countdown = countdown;
    }
    update() {
        if (this.countdown > 0) {
            this.countdown--;
        }
    }
    modifyDamageDealt(damage) {
        if (damage <= 0) {
            return damage;
        }
        return damage * 2;
    }
    draw() {
        const actor = this.actor;
        const game = actor.game;
        const app = game.app;
        SPRITE.draw(app, actor.pixelX - game.viewport.x, actor.pixelY - game.viewport.y);
    }
    isDone() {
        return this.countdown <= 0;
    }
}
exports.Rage = Rage;


/***/ }),

/***/ "./src/classes/characterclass.ts":
/*!***************************************!*\
  !*** ./src/classes/characterclass.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CharacterClass {
    constructor(name, icon, description, details) {
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.details = details;
    }
}
exports.CharacterClass = CharacterClass;


/***/ }),

/***/ "./src/classes/paladin.ts":
/*!********************************!*\
  !*** ./src/classes/paladin.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const flashheal_1 = __webpack_require__(/*! ../abilities/flashheal */ "./src/abilities/flashheal.ts");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const lightning_1 = __webpack_require__(/*! ../abilities/lightning */ "./src/abilities/lightning.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const NAME = 'Paladin';
const ICON = new wglt_1.Sprite(504, 700, 24, 26, undefined, undefined, undefined, 0xFF8080FF);
const SPRITE = new wglt_1.Sprite(320, 96, 16, 24, 2, true, undefined, 0xFF8080FF);
const DESC = 'Holy warriors commanding the power of the light';
const DETAILS = [
    new wglt_1.Message('+2 Strength, +2 Intelligence', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Heroic Leap - jump up to 3 tiles and stun enemies', wglt_1.Colors.YELLOW)
];
class Paladin extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new leap_1.LeapAbility()));
        player.talents.add(new wglt_1.Talent(player, new lightning_1.LightningAbility()));
        player.talents.add(new wglt_1.Talent(player, new flashheal_1.FlashHealAbility()));
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Vest')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.SHIRT_SPRITE_1, 0xC0A080FF)
            .withArmor(7)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(6)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Boots')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(5)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Battleworn Hammer')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2)
            .withSprite(equipmentsprites_1.MACE_SPRITE_1, 0xC0A080FF)
            .build());
        player.strength += 2;
        player.intelligence += 2;
    }
}
exports.Paladin = Paladin;


/***/ }),

/***/ "./src/classes/priest.ts":
/*!*******************************!*\
  !*** ./src/classes/priest.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const fireball_1 = __webpack_require__(/*! ../abilities/fireball */ "./src/abilities/fireball.ts");
const flashheal_1 = __webpack_require__(/*! ../abilities/flashheal */ "./src/abilities/flashheal.ts");
const lightning_1 = __webpack_require__(/*! ../abilities/lightning */ "./src/abilities/lightning.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const bubble_1 = __webpack_require__(/*! ../abilities/bubble */ "./src/abilities/bubble.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const NAME = 'Priest';
const ICON = new wglt_1.Sprite(0, 700, 24, 26, undefined, undefined, undefined, 0xFFFFFFFF);
const SPRITE = new wglt_1.Sprite(384, 96, 16, 24, 2, true, undefined, 0xf8f8f8ff);
const DESC = 'Devoted to the spiritual, powerful healing magic';
const DETAILS = [
    new wglt_1.Message('+5 Intelligence', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Heroic Leap - jump up to 3 tiles and stun enemies', wglt_1.Colors.YELLOW)
];
class Priest extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new fireball_1.FireballAbility()));
        player.talents.add(new wglt_1.Talent(player, new lightning_1.LightningAbility()));
        player.talents.add(new wglt_1.Talent(player, new flashheal_1.FlashHealAbility()));
        player.talents.add(new wglt_1.Talent(player, new bubble_1.BubbleAbility()));
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Neophyte\'s Robe')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.ROBE_SPRITE_1, 0xC0A080FF)
            .withArmor(2)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Neophyte\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(2)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Neophyte\'s Shoes')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(1)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Bent Staff')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2)
            .withSprite(equipmentsprites_1.STAFF_SPRITE_1, 0xC0A080FF)
            .build());
        player.intelligence += 5;
    }
}
exports.Priest = Priest;


/***/ }),

/***/ "./src/classes/ranger.ts":
/*!*******************************!*\
  !*** ./src/classes/ranger.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const shoot_1 = __webpack_require__(/*! ../abilities/shoot */ "./src/abilities/shoot.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const NAME = 'Ranger';
const ICON = new wglt_1.Sprite(168, 700, 24, 26, undefined, undefined, undefined, 0x80FF80FF);
const SPRITE = new wglt_1.Sprite(64, 120, 16, 24, 2, true, undefined, 0x80FF80FF);
const DESC = 'Strategy and finesse, attacking from a distance';
const DETAILS = [
    new wglt_1.Message('+2 Strength, +2 Dexterity', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Heroic Leap - jump up to 3 tiles and stun enemies', wglt_1.Colors.YELLOW)
];
class Ranger extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new shoot_1.ShootAbility()));
        player.talents.add(new wglt_1.Talent(player, new leap_1.LeapAbility()));
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Trapper\'s Vest')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.SHIRT_SPRITE_1, 0xC0A080FF)
            .withArmor(7)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Trapper\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(6)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Trapper\'s Boots')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(5)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Weathered Crossbow')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2, true, true)
            .withSprite(equipmentsprites_1.CROSSBOW_SPRITE_1, 0xC0A080FF)
            .build());
        player.strength += 2;
        player.dexterity += 2;
    }
}
exports.Ranger = Ranger;


/***/ }),

/***/ "./src/classes/rogue.ts":
/*!******************************!*\
  !*** ./src/classes/rogue.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const shadowstrike_1 = __webpack_require__(/*! ../abilities/shadowstrike */ "./src/abilities/shadowstrike.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const healthpotion_1 = __webpack_require__(/*! ../items/healthpotion */ "./src/items/healthpotion.ts");
const NAME = 'Rogue';
const ICON = new wglt_1.Sprite(144, 700, 24, 26, undefined, undefined, undefined, 0xA00000FF);
const SPRITE = new wglt_1.Sprite(192, 96, 16, 24, 2, true, undefined, 0xA00000FF);
const DESC = 'Lethal assasins and masters of stealth';
const DETAILS = [
    new wglt_1.Message('+5 Dexterity', wglt_1.Colors.LIGHT_GREEN), new wglt_1.Message('Stealth - go invisible for 10 turns', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Shadow Strike - sneak attack from a distance', wglt_1.Colors.YELLOW)
];
class Rogue extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new leap_1.LeapAbility()));
        player.talents.add(new wglt_1.Talent(player, new shadowstrike_1.ShadowStrikeAbility()));
        for (let i = 0; i < 5; i++) {
            player.inventory.add(new healthpotion_1.HealthPotion(game));
        }
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Footpad\'s Vest')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.SHIRT_SPRITE_1, 0xC0A080FF)
            .withArmor(7)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Footpad\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(6)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Footpad\'s Boots')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.LEATHER)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(5)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Worn Dirk')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2, false, true)
            .withSprite(equipmentsprites_1.DAGGER_SPRITE_1, 0xC0A080FF)
            .build());
        player.dexterity += 5;
    }
}
exports.Rogue = Rogue;


/***/ }),

/***/ "./src/classes/warlock.ts":
/*!********************************!*\
  !*** ./src/classes/warlock.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const curse_1 = __webpack_require__(/*! ../abilities/curse */ "./src/abilities/curse.ts");
const demonicgateway_1 = __webpack_require__(/*! ../abilities/demonicgateway */ "./src/abilities/demonicgateway.ts");
const lightning_1 = __webpack_require__(/*! ../abilities/lightning */ "./src/abilities/lightning.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const NAME = 'Warlock';
const ICON = new wglt_1.Sprite(24, 700, 24, 26, undefined, undefined, undefined, 0xA020A0FF);
const SPRITE = new wglt_1.Sprite(416, 96, 16, 24, 2, true, undefined, 0xA020A0FF);
const DESC = 'Practitioners of the dark arts';
const DETAILS = [
    new wglt_1.Message('+2 Constitution, +2 Intelligence', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Demonic Gateway - teleport by dark magic', wglt_1.Colors.YELLOW)
];
class Warlock extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new curse_1.CurseAbility()));
        player.talents.add(new wglt_1.Talent(player, new lightning_1.LightningAbility()));
        player.talents.add(new wglt_1.Talent(player, new demonicgateway_1.DemonicGatewayAbility()));
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Acolyte\'s Robe')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.ROBE_SPRITE_1, 0xC0A080FF)
            .withArmor(2)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Acolyte\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(2)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Acolyte\'s Shoes')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.CLOTH)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(1)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Bent Staff')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2)
            .withSprite(equipmentsprites_1.STAFF_SPRITE_1, 0xC0A080FF)
            .build());
        player.constitution += 2;
        player.intelligence += 2;
    }
}
exports.Warlock = Warlock;


/***/ }),

/***/ "./src/classes/warrior.ts":
/*!********************************!*\
  !*** ./src/classes/warrior.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
const rage_1 = __webpack_require__(/*! ../abilities/rage */ "./src/abilities/rage.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const equipmentsprites_1 = __webpack_require__(/*! ../equipment/equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentquality_1 = __webpack_require__(/*! ../equipment/equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ../equipment/equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const healthpotion_1 = __webpack_require__(/*! ../items/healthpotion */ "./src/items/healthpotion.ts");
const NAME = 'Warrior';
const ICON = new wglt_1.Sprite(216, 700, 24, 26, undefined, undefined, undefined, 0x804000FF);
const SPRITE = new wglt_1.Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);
const DESC = 'Lords of war, strength, and combat';
const DETAILS = [
    new wglt_1.Message('+5 Strength, +2 Constitution', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Heroic Leap - jump up to 3 tiles and stun enemies', wglt_1.Colors.YELLOW)
];
class Warrior extends characterclass_1.CharacterClass {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        const game = player.game;
        player.class = this;
        player.sprite = SPRITE;
        player.talents.add(new wglt_1.Talent(player, new leap_1.LeapAbility()));
        player.talents.add(new wglt_1.Talent(player, new rage_1.RageAbility()));
        for (let i = 0; i < 5; i++) {
            player.inventory.add(new healthpotion_1.HealthPotion(game));
        }
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Vest')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.CHEST)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.SHIRT_SPRITE_1, 0xC0A080FF)
            .withArmor(7)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Pants')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.LEGS)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.PANTS_SPRITE_1, 0xC0A080FF)
            .withArmor(6)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Squire\'s Boots')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.FEET)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withMaterial(equipmentmaterial_1.EquipmentMaterial.PLATE)
            .withSprite(equipmentsprites_1.BOOTS_SPRITE_1, 0xC0A080FF)
            .withArmor(5)
            .build());
        player.equipment.add(new equipmentbuilder_1.EquipmentBuilder(game)
            .withName('Worn Greatsword')
            .withItemLevel(1)
            .withSlot(equipmentslot_1.EquipmentSlot.MAINHAND)
            .withQuality(equipmentquality_1.EquipmentQuality.COMMON)
            .withDamage(1, 2)
            .withSprite(equipmentsprites_1.SWORD_SPRITE_1, 0xC0A080FF)
            .build());
        player.constitution += 2;
        player.strength += 5;
    }
}
exports.Warrior = Warrior;


/***/ }),

/***/ "./src/classmenu.ts":
/*!**************************!*\
  !*** ./src/classmenu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const paladin_1 = __webpack_require__(/*! ./classes/paladin */ "./src/classes/paladin.ts");
const priest_1 = __webpack_require__(/*! ./classes/priest */ "./src/classes/priest.ts");
const ranger_1 = __webpack_require__(/*! ./classes/ranger */ "./src/classes/ranger.ts");
const rogue_1 = __webpack_require__(/*! ./classes/rogue */ "./src/classes/rogue.ts");
const warlock_1 = __webpack_require__(/*! ./classes/warlock */ "./src/classes/warlock.ts");
const warrior_1 = __webpack_require__(/*! ./classes/warrior */ "./src/classes/warrior.ts");
const menuitemrenderer_1 = __webpack_require__(/*! ./gui/menuitemrenderer */ "./src/gui/menuitemrenderer.ts");
const CLASSES = [new paladin_1.Paladin(), new priest_1.Priest(), new ranger_1.Ranger(), new rogue_1.Rogue(), new warlock_1.Warlock(), new warrior_1.Warrior()];
class ClassMenu extends wglt_1.AppState {
    constructor(app) {
        super(app);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
        this.gui.add(new wglt_1.MessagePanel(new wglt_1.Rect(2, 2, 256, 10), new wglt_1.Message('Choose your class', wglt_1.Colors.WHITE)));
        const selectDialog = new wglt_1.ComplexSelectDialog(new wglt_1.Rect(2, 15, 246, 204), CLASSES);
        selectDialog.renderer = new menuitemrenderer_1.MenuItemRenderer(60, 30);
        selectDialog.onSelect = (choice) => {
            this.app.playerClass = choice;
            window.location.hash = 'startgame';
        };
        selectDialog.onCancel = () => {
            window.history.back();
        };
        this.gui.add(selectDialog);
    }
}
exports.ClassMenu = ClassMenu;


/***/ }),

/***/ "./src/dungeon.ts":
/*!************************!*\
  !*** ./src/dungeon.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Dungeon {
    constructor(rect, level) {
        this.rect = rect;
        this.level = level;
        this.rooms = [];
    }
}
exports.Dungeon = Dungeon;


/***/ }),

/***/ "./src/entities/bat.ts":
/*!*****************************!*\
  !*** ./src/entities/bat.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(192, 144, 16, 24, 2, true, undefined, 0x6757d9FF);
class BatAI extends wglt_1.AI {
    doAi() {
        const bat = this.actor;
        const player = bat.game.player;
        if (!player) {
            return;
        }
        const rng = player.game.rng;
        if (bat.distanceTo(player) < 3 && rng.nextRange(0, 100) < 33) {
            bat.attack(player, bat.getDamage());
        }
        else {
            this.actor.move(rng.nextRange(-2, 3), rng.nextRange(-2, 3));
        }
    }
}
class Bat extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Bat', SPRITE, level);
        this.ai = new BatAI(this);
    }
}
exports.Bat = Bat;


/***/ }),

/***/ "./src/entities/flamecrawler.ts":
/*!**************************************!*\
  !*** ./src/entities/flamecrawler.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(256, 312, 16, 24, 2, true, undefined, 0xd51111ff);
const DAMAGE = 8;
class FlameCrawlerAI extends wglt_1.AI {
    constructor(actor) {
        super(actor);
        this.alwaysActive = true;
        this.aliveCount = 0;
    }
    doAi() {
        const monster = this.actor;
        const player = monster.game.player;
        if (!player || player.hp <= 0) {
            return;
        }
        // Count how long it has been alive
        this.aliveCount++;
        if (this.aliveCount === 1) {
            // Do nothing on the first turn
            return;
        }
        const nextX = monster.x + monster.dx;
        const nextY = monster.y + monster.dy;
        if (player.x === nextX && player.y === nextY) {
            monster.attack(player, DAMAGE);
        }
        else {
            if (!monster.move(monster.dx, monster.dy)) {
                monster.game.entities.remove(monster);
            }
        }
    }
}
class FlameCrawler extends monster_1.Monster {
    constructor(game, x, y, dx, dy) {
        super(game, x, y, 'Flame Crawler', SPRITE, 1);
        this.ai = new FlameCrawlerAI(this);
        this.dx = dx;
        this.dy = dy;
        this.showFrame = false;
        this.seen = true;
        this.blocks = false;
    }
}
exports.FlameCrawler = FlameCrawler;


/***/ }),

/***/ "./src/entities/ghost.ts":
/*!*******************************!*\
  !*** ./src/entities/ghost.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(64, 288, 16, 24, 2, true, undefined, 0xE0E0E0A0);
class Ghost extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Ghost', SPRITE, level);
    }
}
exports.Ghost = Ghost;


/***/ }),

/***/ "./src/entities/griffon.ts":
/*!*********************************!*\
  !*** ./src/entities/griffon.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const SPRITE = new wglt_1.Sprite(448, 144, 16, 24, 2, true, undefined, 0xf2f261ff);
const DAMAGE = 10;
class GriffonAI extends wglt_1.AI {
    doAi() {
        const griffon = this.actor;
        const game = griffon.game;
        const player = game.player;
        if (!player || player.hp <= 0) {
            return;
        }
        const talent = griffon.leapTalent;
        if (talent.cooldown === 0) {
            const target = this.findLeapTarget(game, griffon, player);
            if (target && talent.use(target)) {
                return;
            }
        }
        const dist = griffon.distanceTo(player);
        if (dist <= 2) {
            griffon.attack(player, DAMAGE);
        }
        else if (griffon.sentiment === statsactor_1.Sentiment.HOSTILE) {
            griffon.moveToward(player.x, player.y);
        }
        else {
            const rng = player.game.rng;
            griffon.move(rng.nextRange(-1, 2), rng.nextRange(-1, 2));
        }
    }
    findLeapTarget(game, griffon, player) {
        for (let y = player.y - 1; y <= player.y + 1; y++) {
            for (let x = player.x - 1; x <= player.x + 1; x++) {
                const tile = game.tileMap && game.tileMap.getCell(x, y);
                if (!tile || tile.blocked) {
                    // Tile blocked
                    continue;
                }
                if (griffon.distanceTo(tile) > 3) {
                    // Too far away
                    continue;
                }
                if (game.getActorAt(x, y)) {
                    // Tile occupied
                    continue;
                }
                return tile;
            }
        }
        return undefined;
    }
}
class Griffon extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Griffon', SPRITE, level);
        this.maxHp = 10 * this.level;
        this.hp = this.maxHp;
        this.ai = new GriffonAI(this);
        this.talents.add(new wglt_1.Talent(this, new leap_1.LeapAbility()));
        this.sentiment = statsactor_1.Sentiment.NEUTRAL;
    }
    get leapTalent() {
        return this.talents.get(0);
    }
}
exports.Griffon = Griffon;


/***/ }),

/***/ "./src/entities/guard.ts":
/*!*******************************!*\
  !*** ./src/entities/guard.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const SPRITE = new wglt_1.Sprite(320, 96, 16, 24, 2, true, undefined, 0x5790b7FF);
class GuardAI extends wglt_1.AI {
    constructor(actor, waypoints) {
        super(actor);
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.waitCount = 0;
        this.aggroCount = 0;
    }
    doAi() {
        const guard = this.actor;
        const game = guard.game;
        const player = game.player;
        if (guard.sentiment === statsactor_1.Sentiment.HOSTILE) {
            this.aggroCount++;
            if (this.aggroCount === 1) {
                // First attack
                const game = guard.game;
                game.log('Guard shouts for help!', wglt_1.Colors.LIGHT_BLUE);
                for (let i = 0; i < game.entities.length; i++) {
                    const entity = game.entities.get(i);
                    if (entity instanceof Guard) {
                        const otherGuard = entity;
                        if (guard.distanceTo(otherGuard) < 6) {
                            otherGuard.sentiment = statsactor_1.Sentiment.HOSTILE;
                        }
                    }
                }
            }
            else {
                if (guard.distanceTo(player) > 1.0) {
                    // Move towards player if far away
                    guard.moveToward(player.x, player.y);
                }
                else if (player.hp > 0) {
                    // Close enough, attack! (if the player is still alive.)
                    const damage = 10;
                    guard.attack(player, damage);
                }
            }
            return;
        }
        if (this.waitCount > 0) {
            this.waitCount--;
            return;
        }
        const waypoint = this.waypoints[this.waypointIndex];
        if (guard.x === waypoint.x && guard.y === waypoint.y) {
            this.waypointIndex = (this.waypointIndex + 1) % this.waypoints.length;
            this.waitCount = guard.game.rng.nextRange(5, 15);
            return;
        }
        guard.moveToward(waypoint.x, waypoint.y);
    }
}
class Guard extends monster_1.Monster {
    constructor(game, x, y, waypoints) {
        super(game, x, y, 'Guard', SPRITE, 10);
        this.ai = new GuardAI(this, waypoints);
        this.seen = true;
        this.sentiment = statsactor_1.Sentiment.FRIENDLY;
    }
}
exports.Guard = Guard;


/***/ }),

/***/ "./src/entities/king.ts":
/*!******************************!*\
  !*** ./src/entities/king.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const questdialog_1 = __webpack_require__(/*! ../gui/questdialog */ "./src/gui/questdialog.ts");
const quest_1 = __webpack_require__(/*! ../quests/quest */ "./src/quests/quest.ts");
const SPRITE = new wglt_1.Sprite(320, 358, 16, 24, 2, true, undefined, 0xA040A0ff);
class KingAI extends wglt_1.AI {
    doAi() {
        const king = this.actor;
        const player = king.game.player;
        if (!player) {
            return;
        }
        if (king.sentiment !== statsactor_1.Sentiment.HOSTILE) {
            // Not hostile, do nothing
            return;
        }
        if (king.distanceTo(player) > 1.5) {
            // Move towards player if far away
            king.moveToward(player.x, player.y);
        }
        else if (player.hp > 0) {
            // Close enough, attack! (if the player is still alive.)
            king.attack(player, king.getDamage());
        }
    }
}
class King extends statsactor_1.StatsActor {
    constructor(game, x, y) {
        super(game, x, y, 'King', SPRITE);
        this.ai = new KingAI(this);
        this.level = 99;
        this.maxHp = 10 + this.level * 2;
        this.hp = this.maxHp;
        this.strength = 10 + this.level * 2;
    }
    onBump(player) {
        if (!this.dialog) {
            const desc = [
                'A THREAT WITHIN',
                '',
                'I hope you strapped your belt on tight,',
                'young paladin, because there is work to',
                'do here in Northshire.',
                '',
                'And I don\'t mean farming.',
                '',
                'The Stormwind guards are hard pressed to',
                'keep the peace here, with so many of us',
                'in distant lands and so many threats',
                'pressing close. And so we\'re enlisting',
                'the aid of anyone willing to defend',
                'their home. And their alliance.',
                '',
                'If you\'re here to answer the call, then',
                'speak with my superior, Marshal McBride.',
                'He\'s inside the abbey behind me.'
            ];
            const completion = [
                'Ah, good. Another volunteer.',
                'I hope it\'s enough.',
                'The human lands are threatened from without,',
                'and so many of our forces have been marchaled abroad.',
            ];
            const dialog = new questdialog_1.QuestDialog(new wglt_1.Rect(10, 40, 200, 200));
            dialog.quest = new quest_1.Quest(desc, 40);
            this.game.gui.add(dialog);
            this.dialog = dialog;
        }
        this.dialog.visible = true;
        return true;
    }
    takeDamage(attacker, damage) {
        super.takeDamage(attacker, damage);
        this.sentiment = statsactor_1.Sentiment.HOSTILE;
    }
}
exports.King = King;


/***/ }),

/***/ "./src/entities/monster.ts":
/*!*********************************!*\
  !*** ./src/entities/monster.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const player_1 = __webpack_require__(/*! ./player */ "./src/entities/player.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const gold_1 = __webpack_require__(/*! ../items/gold */ "./src/items/gold.ts");
const equipmentbuilder_1 = __webpack_require__(/*! ../equipment/equipmentbuilder */ "./src/equipment/equipmentbuilder.ts");
const healthpotion_1 = __webpack_require__(/*! ../items/healthpotion */ "./src/items/healthpotion.ts");
const START_BLOOD = 1367;
const END_BLOOD = 1370;
class Monster extends statsactor_1.StatsActor {
    constructor(game, x, y, name, sprite, level) {
        super(game, x, y, name, sprite);
        this.ai = new wglt_1.BasicMonster(this, this.calculateDamage);
        this.sentiment = statsactor_1.Sentiment.HOSTILE;
        this.level = level;
        this.strength = 10 + 4 * level;
        this.maxHp = 10 + 3 * level;
        this.hp = this.maxHp;
        this.armor = 2 * level;
        this.loot = this.getLoot();
    }
    takeDamage(attacker, damage) {
        super.takeDamage(attacker, damage);
        this.sentiment = statsactor_1.Sentiment.HOSTILE;
    }
    onDeath(attacker) {
        this.game.log(this.name + ' is dead');
        this.blocks = false;
        this.ai = undefined;
        this.game.entities.remove(this);
        if (attacker instanceof player_1.Player) {
            // Based on DnD xp rules
            const player = this.game.player;
            const xpGain = Math.round(10 * player.level * Math.pow(2.0, (this.level - player.level) * 0.5));
            player.addXp(xpGain);
        }
        // Add blood to the map
        const map = this.game.tileMap;
        map.setTile(this.x, this.y, 3, this.game.rng.nextRange(START_BLOOD, END_BLOOD));
        // Drop loot
        for (let i = 0; i < this.loot.length; i++) {
            // TODO: Spread loot around multiple tiles
            const location = this.findNearestDropLocation();
            if (!location) {
                break;
            }
            const loot = this.loot[i];
            loot.x = location.x;
            loot.y = location.y;
            this.game.entities.add(loot);
        }
    }
    calculateDamage(attacker, target) {
        return attacker.getDamage();
    }
    findNearestDropLocation() {
        for (let r = 0; r < 10; r += 0.5) {
            const r2 = Math.ceil(r);
            for (let y = this.y - r2; y <= this.y + r2; y++) {
                for (let x = this.x - r2; x <= this.x + r2; x++) {
                    if (Math.hypot(x - this.x, y - this.y) <= r) {
                        if (!this.game.isBlocked(x, y) && !this.game.getEntityAt(x, y)) {
                            return new wglt_1.Vec2(x, y);
                        }
                    }
                }
            }
        }
        return undefined;
    }
    getLoot() {
        const game = this.game;
        const result = [];
        if (this.game.rng.nextRange(0, 6) <= 2) {
            result.push(new gold_1.Gold(game, this.x, this.y));
        }
        if (this.game.rng.nextRange(0, 6) <= 2) {
            result.push(new healthpotion_1.HealthPotion(game, this.x, this.y));
        }
        if (this.game.rng.nextRange(0, 6) <= 2) {
            result.push(new equipmentbuilder_1.EquipmentBuilder(game).withRandomDrop(this.level).build());
        }
        return result;
    }
}
exports.Monster = Monster;


/***/ }),

/***/ "./src/entities/player.ts":
/*!********************************!*\
  !*** ./src/entities/player.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const paladin_1 = __webpack_require__(/*! ../classes/paladin */ "./src/classes/paladin.ts");
const human_1 = __webpack_require__(/*! ../races/human */ "./src/races/human.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const PLAYER_SPRITE = new wglt_1.Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);
class Player extends statsactor_1.StatsActor {
    constructor(game, x, y) {
        super(game, x, y, 'Player', PLAYER_SPRITE);
        this.level = 1;
        this.hp = 10;
        this.maxHp = 10;
        this.xp = 0;
        this.maxXp = 20;
        this.race = new human_1.Human();
        this.class = new paladin_1.Paladin();
        this.remainingAbilityPoints = 0;
        this.home = new wglt_1.Vec2(x, y);
        this.keys = new Array(1000);
    }
    takeDamage(attacker, damage) {
        this.game.stopAutoWalk();
        super.takeDamage(attacker, damage);
    }
    onDeath() {
        this.game.log('You died!');
    }
    addXp(xpGain) {
        this.xp += xpGain;
        this.addFloatingText('+' + xpGain, wglt_1.Colors.LIGHT_MAGENTA);
        let levelUp = false;
        while (this.xp >= this.maxXp) {
            this.level++;
            this.xp -= this.maxXp;
            this.maxXp = this.nextMaxXp(this.maxXp);
            this.remainingAbilityPoints += 2;
            this.game.log('You reached level ' + this.level, wglt_1.Colors.LIGHT_MAGENTA);
            levelUp = true;
        }
        if (levelUp) {
            this.recalculateMaxHp();
            this.game.levelUpDialog.visible = true;
        }
    }
    nextMaxXp(oldMaxXp) {
        return Math.round(oldMaxXp * 1.5 / 10.0) * 10.0;
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/entities/reddragon.ts":
/*!***********************************!*\
  !*** ./src/entities/reddragon.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const flamecrawler_1 = __webpack_require__(/*! ./flamecrawler */ "./src/entities/flamecrawler.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const key_1 = __webpack_require__(/*! ../items/key */ "./src/items/key.ts");
const SPRITE = new wglt_1.Sprite(576, 312, 16, 24, 2, true, undefined, 0xd51111ff);
const DAMAGE = 10;
class RedDragonAI extends wglt_1.AI {
    doAi() {
        const dragon = this.actor;
        const game = dragon.game;
        const player = game.player;
        if (!player || player.hp <= 0) {
            return;
        }
        if (dragon.sentiment === statsactor_1.Sentiment.HOSTILE && dragon.cooldown === 0) {
            const room = dragon.room;
            const rng = game.rng;
            // Top and bottom edges
            for (let x = room.x1 + 1; x < room.x2 - 1; x++) {
                if (rng.nextRange(0, 2) === 0) {
                    game.entities.add(new flamecrawler_1.FlameCrawler(game, x, room.y1 + 1, 0, 1));
                }
                else {
                    game.entities.add(new flamecrawler_1.FlameCrawler(game, x, room.y2 - 1, 0, -1));
                }
            }
            // Left and right edges
            for (let y = room.y1 + 1; y < room.y2 - 1; y++) {
                if (rng.nextRange(0, 2) === 0) {
                    game.entities.add(new flamecrawler_1.FlameCrawler(game, room.x1 + 1, y, 1, 0));
                }
                else {
                    game.entities.add(new flamecrawler_1.FlameCrawler(game, room.x2 - 1, y, -1, 0));
                }
            }
            dragon.cooldown = 10;
            return;
        }
        if (dragon.cooldown > 0) {
            dragon.cooldown--;
        }
        const dist = dragon.distanceTo(player);
        if (dist <= 2) {
            dragon.attack(player, DAMAGE);
        }
    }
}
class RedDragon extends monster_1.Monster {
    constructor(game, x, y, level, room) {
        super(game, x, y, 'Dragon', SPRITE, level);
        this.cooldown = 0;
        this.room = room;
        this.maxHp = 10 * level;
        this.hp = this.maxHp;
        this.ai = new RedDragonAI(this);
        this.sentiment = statsactor_1.Sentiment.NEUTRAL;
    }
    getLoot() {
        return [
            new key_1.Key(this.game, this.x, this.y, 0)
        ];
    }
}
exports.RedDragon = RedDragon;


/***/ }),

/***/ "./src/entities/shark.ts":
/*!*******************************!*\
  !*** ./src/entities/shark.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(0, 168, 16, 24, 2, true, undefined, 0x5790b7FF);
const DAMAGE = 10;
class SharkAI extends wglt_1.AI {
    doAi() {
        const monster = this.actor;
        const player = monster.game.player;
        if (!player) {
            return;
        }
        if (monster.distanceTo(player) < 2) {
            monster.attack(player, DAMAGE);
        }
    }
}
class Shark extends monster_1.Monster {
    constructor(game, x, y) {
        super(game, x, y, 'Shark', SPRITE, 1);
        this.ai = new SharkAI(this);
    }
}
exports.Shark = Shark;


/***/ }),

/***/ "./src/entities/spider.ts":
/*!********************************!*\
  !*** ./src/entities/spider.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(64, 144, 16, 24, 2, true, undefined, 0x20e64fFF);
class Spider extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Spider', SPRITE, level);
    }
}
exports.Spider = Spider;


/***/ }),

/***/ "./src/entities/statsactor.ts":
/*!************************************!*\
  !*** ./src/entities/statsactor.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
var Sentiment;
(function (Sentiment) {
    Sentiment[Sentiment["HOSTILE"] = -1] = "HOSTILE";
    Sentiment[Sentiment["NEUTRAL"] = 0] = "NEUTRAL";
    Sentiment[Sentiment["FRIENDLY"] = 1] = "FRIENDLY";
})(Sentiment = exports.Sentiment || (exports.Sentiment = {}));
class StatsActor extends wglt_1.Actor {
    constructor(game, x, y, name, sprite) {
        super(game, x, y, name, sprite, true);
        this.level = 1;
        this.mp = 1;
        this.maxMp = 1;
        this.armor = 0;
        this.strength = 10;
        this.dexterity = 10;
        this.constitution = 10;
        this.intelligence = 10;
        this.recalculateMaxHp();
        this.hp = this.maxHp;
        this.showFrame = true;
        this.sentiment = Sentiment.NEUTRAL;
        this.equipment = new wglt_1.ArrayList();
        this.buffs = [];
        this.equipment.addListener({ onAdd: (_, item) => this.addItem(item), onRemove: (_, item) => this.removeItem(item) });
    }
    get strengthModifier() {
        return this.calculateModifier(this.strength);
    }
    get dexterityModifier() {
        return this.calculateModifier(this.dexterity);
    }
    get constitutionModifier() {
        return this.calculateModifier(this.constitution);
    }
    get intelligenceModifier() {
        return this.calculateModifier(this.intelligence);
    }
    calculateModifier(abilityScore) {
        return Math.floor((abilityScore - 10) / 2);
    }
    getEquipment(slot) {
        for (let i = 0; i < this.equipment.length; i++) {
            const item = this.equipment.get(i);
            if (item.slot === slot) {
                return item;
            }
        }
        return undefined;
    }
    get mainHandWeapon() {
        return this.getEquipment(equipmentslot_1.EquipmentSlot.MAINHAND);
    }
    getDamage() {
        const weapon = this.mainHandWeapon;
        const rng = this.game.rng;
        let baseDamage = 1;
        let modifier = this.strengthModifier;
        if (weapon) {
            baseDamage = rng.nextRange(weapon.minDamage, weapon.maxDamage + 1);
            modifier = weapon.finesse ? this.dexterityModifier : this.strengthModifier;
        }
        return this.buffDamage(baseDamage + modifier);
    }
    buffDamage(damage) {
        let result = damage;
        for (let i = 0; i < this.buffs.length; i++) {
            result = this.buffs[i].modifyDamageDealt(result);
        }
        return result;
    }
    takeDamage(attacker, damage) {
        // Start by subtracting armor modifier
        let result = Math.max(0, damage - Math.round(0.1 * this.armor));
        // Apply any buffs from the target
        for (let i = 0; i < this.buffs.length; i++) {
            result = this.buffs[i].modifyDamageTaken(result);
        }
        // Finally apply the damage
        super.takeDamage(attacker, result);
    }
    onBump(player) {
        if (this.sentiment === Sentiment.FRIENDLY) {
            this.onTalk(player);
        }
        else {
            player.attack(this, player.getDamage());
        }
        return true;
    }
    onTalk(player) { }
    onAttack(target, damage) {
        if (damage > 0) {
            this.game.log(this.name + ' attacks ' + target.name + ' for ' + damage + ' hit points.', 0x808080FF);
        }
        else {
            this.game.log(this.name + ' attacks ' + target.name + ' but it has no effect!', 0x808080FF);
        }
    }
    startTurn() {
        super.startTurn();
        for (let i = this.buffs.length - 1; i >= 0; i--) {
            const buff = this.buffs[i];
            buff.update();
            if (buff.isDone()) {
                this.buffs.splice(i, 1);
            }
        }
    }
    equipItem(item) {
        const equipped = this.getEquipment(item.slot);
        const oldHp = this.hp;
        if (equipped) {
            this.equipment.remove(equipped);
        }
        this.inventory.remove(item);
        this.equipment.add(item);
        if (equipped) {
            this.inventory.add(equipped);
        }
        // Have to manually restore HP
        // When removing equipment, constitution can drop, which can drop max HP
        // Make sure the player keeps their HP
        this.hp = Math.min(oldHp, this.maxHp);
    }
    addItem(item) {
        this.armor += item.armor;
        this.constitution += item.constitution;
        this.dexterity += item.dexterity;
        this.strength += item.strength;
        this.intelligence += item.intelligence;
        this.recalculateMaxHp();
    }
    removeItem(item) {
        this.armor -= item.armor;
        this.constitution -= item.constitution;
        this.dexterity -= item.dexterity;
        this.strength -= item.strength;
        this.intelligence -= item.intelligence;
        this.recalculateMaxHp();
    }
    recalculateMaxHp() {
        this.maxHp = 8 + 2 * this.level + this.constitutionModifier;
        this.hp = Math.min(this.hp, this.maxHp);
    }
    draw() {
        super.draw();
        for (let i = 0; i < this.buffs.length; i++) {
            this.buffs[i].draw();
        }
    }
}
exports.StatsActor = StatsActor;


/***/ }),

/***/ "./src/entities/troll.ts":
/*!*******************************!*\
  !*** ./src/entities/troll.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const SPRITE = new wglt_1.Sprite(64, 216, 16, 24, 2, true, undefined, 0x20e64fFF);
class Troll extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Troll', SPRITE, level);
    }
}
exports.Troll = Troll;


/***/ }),

/***/ "./src/entities/windelemental.ts":
/*!***************************************!*\
  !*** ./src/entities/windelemental.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const leap_1 = __webpack_require__(/*! ../abilities/leap */ "./src/abilities/leap.ts");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const SPRITE = new wglt_1.Sprite(288, 312, 16, 24, 2, true, undefined, 0xAADDFFFF);
const DAMAGE = 10;
class WindElementalAI extends wglt_1.AI {
    doAi() {
        const actor = this.actor;
        const game = actor.game;
        const player = game.player;
        if (!player || player.hp <= 0) {
            return;
        }
        const dist = actor.distanceTo(player);
        if (dist <= 2) {
            actor.attack(player, DAMAGE);
        }
        else {
            const rng = player.game.rng;
            actor.move(rng.nextRange(-1, 2), rng.nextRange(-1, 2));
        }
    }
}
class WindElemental extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Wind', SPRITE, level);
        this.maxHp = 10 * this.level;
        this.hp = this.maxHp;
        this.ai = new WindElementalAI(this);
        this.talents.add(new wglt_1.Talent(this, new leap_1.LeapAbility()));
        this.sentiment = statsactor_1.Sentiment.HOSTILE;
    }
    get leapTalent() {
        return this.talents.get(0);
    }
}
exports.WindElemental = WindElemental;


/***/ }),

/***/ "./src/equipment/equipment.ts":
/*!************************************!*\
  !*** ./src/equipment/equipment.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipmentslot_1 = __webpack_require__(/*! ./equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ./equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const equipmentquality_1 = __webpack_require__(/*! ./equipmentquality */ "./src/equipment/equipmentquality.ts");
const COLOR_POOR = 0x9D9D9DFF;
const COLOR_COMMON = 0xFFFFFFFF;
const COLOR_UNCOMMON = 0x1EFF00FF;
const COLOR_RARE = 0x0070DDFF;
const COLOR_EPIC = 0xA335EEFF;
const COLOR_LEGENDARY = 0xFF8000FF;
class Equipment extends wglt_1.Item {
    constructor(builder) {
        super(builder.game, builder.x, builder.y, builder.name, builder.sprite, false);
        this.itemLevel = builder.itemLevel;
        this.slot = builder.slot;
        this.material = builder.material;
        this.quality = builder.quality;
        this.armor = builder.armor;
        this.strength = builder.strength;
        this.dexterity = builder.dexterity;
        this.constitution = builder.constitution;
        this.intelligence = builder.intelligence;
        this.minDamage = builder.minDamage;
        this.maxDamage = builder.maxDamage;
        this.ranged = builder.ranged;
        this.finesse = builder.finesse;
        this.onUpdateTooltip();
    }
    getColor(quality) {
        switch (quality) {
            case equipmentquality_1.EquipmentQuality.COMMON:
                return COLOR_COMMON;
            case equipmentquality_1.EquipmentQuality.UNCOMMON:
                return COLOR_UNCOMMON;
            case equipmentquality_1.EquipmentQuality.RARE:
                return COLOR_RARE;
            case equipmentquality_1.EquipmentQuality.EPIC:
                return COLOR_EPIC;
            case equipmentquality_1.EquipmentQuality.LEGENDARY:
                return COLOR_LEGENDARY;
            default:
                return COLOR_POOR;
        }
    }
    isStackable() {
        return false;
    }
    onPickup(player) {
        this.game.log(new wglt_1.CompoundMessage(new wglt_1.Message(player.name + ' picked up ', wglt_1.Colors.WHITE), new wglt_1.Message('[' + this.name + ']', this.getColor(this.quality))));
    }
    onUse(player) {
        player.equipItem(this);
        return false;
    }
    onUpdateTooltip() {
        const game = this.game;
        const player = game.player;
        const equipped = player.getEquipment(this.slot);
        if (equipped && equipped !== this) {
            this.buildComparisonTooltip(equipped);
        }
        else {
            this.buildNormalTooltip();
        }
    }
    buildComparisonTooltip(equipped) {
        this.tooltipMessages = [];
        this.tooltipMessages.push(new wglt_1.Message(this.name, this.getColor(this.quality)));
        this.tooltipMessages.push(new wglt_1.Message('Item Level ' + this.itemLevel + ' (vs ' + equipped.itemLevel + ')', wglt_1.Colors.YELLOW));
        if (this.material === equipmentmaterial_1.EquipmentMaterial.NONE) {
            this.tooltipMessages.push(new wglt_1.Message(this.slot, wglt_1.Colors.WHITE));
        }
        else {
            this.tooltipMessages.push(new wglt_1.Message(this.slot + ', ' + this.material, wglt_1.Colors.WHITE));
        }
        if (this.slot === equipmentslot_1.EquipmentSlot.MAINHAND) {
            this.tooltipMessages.push(new wglt_1.Message(this.minDamage + '-' + this.maxDamage + ' Damage (vs ' + equipped.minDamage + '-' + equipped.maxDamage + ')', wglt_1.Colors.YELLOW));
        }
        if (this.armor > 0 || equipped.armor > 0) {
            this.tooltipMessages.push(new wglt_1.Message(this.armor + ' Armor (vs ' + equipped.armor + ')', wglt_1.Colors.YELLOW));
        }
        if (this.strength > 0 || equipped.strength > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.strength + ' Strength (vs ' + equipped.strength + ')', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.dexterity > 0 || equipped.dexterity > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.dexterity + ' Dexterity (vs ' + equipped.dexterity + ')', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.constitution > 0 || equipped.constitution > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.constitution + ' Constitution (vs ' + equipped.constitution + ')', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.intelligence > 0 || equipped.intelligence > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.intelligence + ' Intelligence (vs ' + equipped.intelligence + ')', wglt_1.Colors.LIGHT_GREEN));
        }
    }
    buildNormalTooltip() {
        this.tooltipMessages = [];
        this.tooltipMessages.push(new wglt_1.Message(this.name, this.getColor(this.quality)));
        this.tooltipMessages.push(new wglt_1.Message('Item Level ' + this.itemLevel, wglt_1.Colors.YELLOW));
        if (this.material === equipmentmaterial_1.EquipmentMaterial.NONE) {
            this.tooltipMessages.push(new wglt_1.Message(this.slot, wglt_1.Colors.WHITE));
        }
        else {
            this.tooltipMessages.push(new wglt_1.Message(this.slot + ', ' + this.material, wglt_1.Colors.WHITE));
        }
        if (this.slot === equipmentslot_1.EquipmentSlot.MAINHAND) {
            this.tooltipMessages.push(new wglt_1.Message(this.minDamage + '-' + this.maxDamage + ' Damage', wglt_1.Colors.YELLOW));
        }
        if (this.armor > 0) {
            this.tooltipMessages.push(new wglt_1.Message(this.armor + ' Armor', wglt_1.Colors.YELLOW));
        }
        if (this.strength > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.strength + ' Strength', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.dexterity > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.dexterity + ' Dexterity', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.constitution > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.constitution + ' Constitution', wglt_1.Colors.LIGHT_GREEN));
        }
        if (this.intelligence > 0) {
            this.tooltipMessages.push(new wglt_1.Message('+' + this.intelligence + ' Intelligence', wglt_1.Colors.LIGHT_GREEN));
        }
    }
}
exports.Equipment = Equipment;


/***/ }),

/***/ "./src/equipment/equipmentbuilder.ts":
/*!*******************************************!*\
  !*** ./src/equipment/equipmentbuilder.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipmentslot_1 = __webpack_require__(/*! ./equipmentslot */ "./src/equipment/equipmentslot.ts");
const equipmentmaterial_1 = __webpack_require__(/*! ./equipmentmaterial */ "./src/equipment/equipmentmaterial.ts");
const equipmentquality_1 = __webpack_require__(/*! ./equipmentquality */ "./src/equipment/equipmentquality.ts");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const equipmentsprites_1 = __webpack_require__(/*! ./equipmentsprites */ "./src/equipment/equipmentsprites.ts");
const DEFAULT_SPRITE = new wglt_1.Sprite(160, 240, 16, 24, 1, false, undefined, 0x808080FF);
class EquipmentBuilder {
    constructor(game) {
        this.x = 0;
        this.y = 0;
        this.name = '';
        this.sprite = DEFAULT_SPRITE;
        this.itemLevel = 1;
        this.slot = equipmentslot_1.EquipmentSlot.HEAD;
        this.material = equipmentmaterial_1.EquipmentMaterial.NONE;
        this.quality = equipmentquality_1.EquipmentQuality.POOR;
        this.armor = 0;
        this.strength = 0;
        this.dexterity = 0;
        this.constitution = 0;
        this.intelligence = 0;
        this.minDamage = 1;
        this.maxDamage = 2;
        this.ranged = false;
        this.finesse = false;
        this.statMultiplier = 1.0;
        this.game = game;
    }
    withName(name) {
        this.name = name;
        return this;
    }
    withSprite(s, c) {
        this.sprite = new wglt_1.Sprite(s.x, s.y, s.width, s.height, s.frames, s.loop, s.ticksPerFrame, c);
        return this;
    }
    withColor(color) {
        this.withSprite(this.sprite, color);
        return this;
    }
    withItemLevel(itemLevel) {
        this.itemLevel = itemLevel;
        return this;
    }
    withSlot(slot) {
        this.slot = slot;
        return this;
    }
    withMaterial(material) {
        this.material = material;
        return this;
    }
    withQuality(quality) {
        this.quality = quality;
        return this;
    }
    withArmor(armor) {
        this.armor = armor;
        return this;
    }
    withStrength(strength) {
        this.strength = strength;
        return this;
    }
    withDexterity(dexterity) {
        this.dexterity = dexterity;
        return this;
    }
    withConstitution(constitution) {
        this.constitution = constitution;
        return this;
    }
    withIntelligence(intelligence) {
        this.intelligence = intelligence;
        return this;
    }
    withDamage(minDamage, maxDamage, ranged, finesse) {
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.ranged = !!ranged;
        this.finesse = !!finesse;
        return this;
    }
    withRandomDrop(itemLevel) {
        this.itemLevel = itemLevel;
        this.chooseQuality();
        this.chooseSlot();
        this.chooseFlair();
        return this;
    }
    chooseQuality() {
        const rng = this.game.rng;
        const quality = rng.nextRange(0, 100);
        if (quality === 99) {
            this.quality = equipmentquality_1.EquipmentQuality.LEGENDARY;
            this.statMultiplier = 1.75;
        }
        else if (quality > 97) {
            this.quality = equipmentquality_1.EquipmentQuality.EPIC;
            this.statMultiplier = 1.5;
        }
        else if (quality > 90) {
            this.quality = equipmentquality_1.EquipmentQuality.RARE;
            this.statMultiplier = 1.25;
        }
        else if (quality > 75) {
            this.quality = equipmentquality_1.EquipmentQuality.UNCOMMON;
            this.statMultiplier = 1.1;
        }
        else if (quality > 40) {
            this.quality = equipmentquality_1.EquipmentQuality.COMMON;
            this.statMultiplier = 1.0;
        }
        else {
            this.quality = equipmentquality_1.EquipmentQuality.POOR;
            this.statMultiplier = 0.75;
        }
    }
    chooseSlot() {
        switch (this.game.rng.nextRange(0, 10)) {
            case 0:
                this.chooseHead();
                break;
            case 1:
                this.chooseNeck();
                break;
            case 2:
                this.chooseBack();
                break;
            case 3:
                this.chooseChest();
                break;
            case 4:
                this.chooseHands();
                break;
            case 5:
                this.chooseLegs();
                break;
            case 6:
                this.chooseFeet();
                break;
            case 7:
                this.chooseRing();
                break;
            case 8:
                this.chooseMainHand();
                break;
            case 9:
                this.chooseOffHand();
                break;
        }
    }
    chooseHead() {
        this.slot = equipmentslot_1.EquipmentSlot.HEAD;
        switch (this.game.rng.nextRange(0, 3)) {
            case 0:
                this.material = equipmentmaterial_1.EquipmentMaterial.CLOTH;
                this.name = this.chooseValue('Cowl', 'Crown', 'Hood', 'Wizard Hat');
                this.armor = Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.CLOTH_HELM_SPRITES);
                break;
            case 1:
                this.material = equipmentmaterial_1.EquipmentMaterial.LEATHER;
                this.name = this.chooseValue('Hood', 'Cover', 'Facemask', 'Mask');
                this.armor = Math.ceil(3.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.LEATHER_HELM_SPRITES);
                break;
            case 2:
                this.material = equipmentmaterial_1.EquipmentMaterial.PLATE;
                this.name = this.chooseValue('Helm', 'Helmet', 'Headguard', 'Faceguard', 'Greathelm');
                this.armor = Math.ceil(4.5 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.PLATE_HELM_SPRITES);
                break;
        }
    }
    chooseNeck() {
        this.slot = equipmentslot_1.EquipmentSlot.NECK;
        this.name = this.chooseValue('Necklace');
        this.sprite = equipmentsprites_1.NECKLACE_SPRITE_1;
    }
    chooseBack() {
        this.slot = equipmentslot_1.EquipmentSlot.BACK;
        this.name = this.chooseValue('Cloak');
        this.sprite = this.chooseArrayValue(equipmentsprites_1.CLOAK_SPRITES);
        this.armor = Math.ceil(this.itemLevel * this.statMultiplier);
    }
    chooseChest() {
        this.slot = equipmentslot_1.EquipmentSlot.CHEST;
        switch (this.game.rng.nextRange(0, 3)) {
            case 0:
                this.material = equipmentmaterial_1.EquipmentMaterial.CLOTH;
                this.name = this.chooseValue('Robe', 'Tunic');
                this.armor = Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.ROBE_SPRITES);
                break;
            case 1:
                this.material = equipmentmaterial_1.EquipmentMaterial.LEATHER;
                this.name = this.chooseValue('Vest', 'Chestpiece', 'Tunic');
                this.armor = Math.ceil(3.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.SHIRT_SPRITES);
                break;
            case 2:
                this.material = equipmentmaterial_1.EquipmentMaterial.PLATE;
                this.name = this.chooseValue('Breastplate', 'Chestguard');
                this.armor = Math.ceil(4.5 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.SHIRT_SPRITES);
                break;
        }
    }
    chooseHands() {
        this.slot = equipmentslot_1.EquipmentSlot.HANDS;
        switch (this.game.rng.nextRange(0, 3)) {
            case 0:
                this.material = equipmentmaterial_1.EquipmentMaterial.CLOTH;
                this.name = this.chooseValue('Gloves', 'Wraps');
                this.armor = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.GLOVES_SPRITES);
                break;
            case 1:
                this.material = equipmentmaterial_1.EquipmentMaterial.LEATHER;
                this.name = this.chooseValue('Gloves', 'Gauntlets');
                this.armor = Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.GLOVES_SPRITES);
                break;
            case 2:
                this.material = equipmentmaterial_1.EquipmentMaterial.PLATE;
                this.name = this.chooseValue('Gloves', 'Gauntlets');
                this.armor = Math.ceil(3.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.GLOVES_SPRITES);
                break;
        }
    }
    chooseLegs() {
        this.slot = equipmentslot_1.EquipmentSlot.LEGS;
        switch (this.game.rng.nextRange(0, 3)) {
            case 0:
                this.material = equipmentmaterial_1.EquipmentMaterial.CLOTH;
                this.name = this.chooseValue('Leggings', 'Pants');
                this.armor = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.PANTS_SPRITES);
                break;
            case 1:
                this.material = equipmentmaterial_1.EquipmentMaterial.LEATHER;
                this.name = this.chooseValue('Legguards', 'Pants');
                this.armor = Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.PANTS_SPRITES);
                break;
            case 2:
                this.material = equipmentmaterial_1.EquipmentMaterial.PLATE;
                this.name = this.chooseValue('Legplates', 'Legguards');
                this.armor = Math.ceil(3.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.PANTS_SPRITES);
                break;
        }
    }
    chooseFeet() {
        this.slot = equipmentslot_1.EquipmentSlot.FEET;
        switch (this.game.rng.nextRange(0, 3)) {
            case 0:
                this.material = equipmentmaterial_1.EquipmentMaterial.CLOTH;
                this.name = this.chooseValue('Boots', 'Sandals', 'Shoes', 'Slippers', 'Footpads');
                this.armor = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.BOOTS_SPRITES);
                break;
            case 1:
                this.material = equipmentmaterial_1.EquipmentMaterial.LEATHER;
                this.name = this.chooseValue('Boots', 'Shoes', 'Treads');
                this.armor = Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.BOOTS_SPRITES);
                break;
            case 2:
                this.material = equipmentmaterial_1.EquipmentMaterial.PLATE;
                this.name = this.chooseValue('Boots', 'Greaves', 'Sabatons');
                this.armor = Math.ceil(3.0 * this.itemLevel * this.statMultiplier);
                this.sprite = this.chooseArrayValue(equipmentsprites_1.BOOTS_SPRITES);
                break;
        }
    }
    chooseRing() {
        this.slot = equipmentslot_1.EquipmentSlot.RING;
        this.name = this.chooseValue('Ring', 'Band', 'Signet', 'Circle', 'Loop');
        this.sprite = this.chooseArrayValue(equipmentsprites_1.RING_SPRITES);
    }
    chooseMainHand() {
        this.slot = equipmentslot_1.EquipmentSlot.MAINHAND;
        this.minDamage = Math.floor(1.0 * this.itemLevel * this.statMultiplier);
        this.maxDamage = Math.ceil(1.2 * this.itemLevel * this.statMultiplier);
        switch (this.game.rng.nextRange(0, 7)) {
            case 0:
                this.name = this.chooseValue('Sword', 'Blade', 'Slicer', 'Sabre');
                this.sprite = this.chooseArrayValue(equipmentsprites_1.SWORD_SPRITES);
                break;
            case 1:
                this.name = this.chooseValue('Axe', 'Ripper', 'Slicer');
                this.sprite = equipmentsprites_1.AXE_SPRITE_1;
                break;
            case 2:
                this.name = this.chooseValue('Mace', 'Hammer', 'Gavel', 'Club');
                this.sprite = this.chooseArrayValue(equipmentsprites_1.MACE_SPRITES);
                break;
            case 3:
                this.name = this.chooseValue('Dagger', 'Knife', 'Edge');
                this.sprite = equipmentsprites_1.DAGGER_SPRITE_1;
                this.finesse = true;
                break;
            case 4:
                this.name = this.chooseValue('Bow', 'Shortbow', 'Longbow', 'Recurve', 'Greatbow');
                this.sprite = equipmentsprites_1.BOW_SPRITE_1;
                this.finesse = true;
                this.ranged = true;
                break;
            case 5:
                this.name = this.chooseValue('Crossbow', 'Bolt-Thrower', 'Speargun', 'Repeater');
                this.sprite = equipmentsprites_1.CROSSBOW_SPRITE_1;
                this.finesse = true;
                this.ranged = true;
                break;
            case 6:
                this.name = this.chooseValue('Staff', 'Spellstaff');
                this.sprite = this.chooseArrayValue(equipmentsprites_1.STAFF_SPRITES);
                break;
        }
    }
    chooseOffHand() {
        this.slot = equipmentslot_1.EquipmentSlot.OFFHAND;
        const dice = this.game.rng.nextRange(0, 10);
        if (dice === 9) {
            this.name = 'Lantern';
            this.sprite = equipmentsprites_1.LANTERN_SPRITE;
            this.intelligence = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
        }
        else if (dice === 8) {
            this.name = 'Orb';
            this.sprite = equipmentsprites_1.ORB_SPRITE;
            this.intelligence = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
        }
        else if (dice >= 5) {
            this.name = this.chooseValue('Spellbook', 'Tome');
            this.sprite = equipmentsprites_1.BOOK_SPRITE;
            this.intelligence = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
        }
        else {
            this.name = this.chooseValue('Shield', 'Shield Wall', 'Bulwark', 'Barrier');
            this.sprite = this.chooseArrayValue(equipmentsprites_1.SHIELD_SPRITES);
            this.armor = Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
            this.constitution = Math.ceil(1.0 * this.itemLevel * this.statMultiplier);
        }
    }
    chooseFlair() {
        switch (this.quality) {
            case equipmentquality_1.EquipmentQuality.POOR:
                this.choosePoorFlair();
                break;
            case equipmentquality_1.EquipmentQuality.COMMON:
                this.chooseCommonFlair();
                break;
            case equipmentquality_1.EquipmentQuality.UNCOMMON:
                this.chooseUncommonFlair();
                break;
            case equipmentquality_1.EquipmentQuality.RARE:
                this.chooseRareFlair();
                break;
            case equipmentquality_1.EquipmentQuality.EPIC:
                this.chooseEpicFlair();
                break;
            case equipmentquality_1.EquipmentQuality.LEGENDARY:
                this.chooseLegendaryFlair();
                break;
        }
    }
    choosePoorFlair() {
        this.name = this.chooseValue('Patched', 'Ragged', 'Chewed', 'Worn', 'Loose') + ' ' + this.name;
        this.withColor(wglt_1.Colors.LIGHT_GRAY);
    }
    chooseCommonFlair() {
        this.name = this.chooseValue('Hunting', 'Cadet', 'Veteran', 'Simple', 'Pioneer') + ' ' + this.name;
        this.withColor(0xC0A080FF);
    }
    chooseUncommonFlair() {
        switch (this.game.rng.nextRange(0, 6)) {
            case 0:
                this.name += ' of the Tiger';
                this.strength += Math.ceil(this.itemLevel * this.statMultiplier);
                this.dexterity += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.ORANGE);
                break;
            case 1:
                this.name += ' of the Bear';
                this.strength += Math.ceil(this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.BROWN);
                break;
            case 2:
                this.name += ' of the Gorilla';
                this.strength += Math.ceil(this.itemLevel * this.statMultiplier);
                this.intelligence += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.LIGHT_CYAN);
                break;
            case 3:
                this.name += ' of the Monkey';
                this.dexterity += Math.ceil(this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.LIGHT_GREEN);
                break;
            case 4:
                this.name += ' of the Falcon';
                this.dexterity += Math.ceil(this.itemLevel * this.statMultiplier);
                this.intelligence += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.LIGHT_RED);
                break;
            case 5:
                this.name += ' of the Eagle';
                this.constitution += Math.ceil(this.itemLevel * this.statMultiplier);
                this.intelligence += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.LIGHT_BLUE);
                break;
        }
    }
    chooseRareFlair() {
        switch (this.game.rng.nextRange(0, 4)) {
            case 0:
                this.name = 'Elven ' + this.name;
                this.dexterity += Math.ceil(this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(this.itemLevel * this.statMultiplier);
                this.intelligence += Math.ceil(this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.LIGHT_MAGENTA);
                break;
            case 1:
                this.name = 'Obsidian ' + this.name;
                this.strength += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.DARK_MAGENTA);
                break;
            case 2:
                this.name = 'Saphiron ' + this.name;
                this.dexterity += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.DARK_BLUE);
                break;
            case 3:
                this.name = 'Scarlet ' + this.name;
                this.intelligence += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.constitution += Math.ceil(1.5 * this.itemLevel * this.statMultiplier);
                this.withColor(wglt_1.Colors.DARK_RED);
                break;
        }
    }
    chooseEpicFlair() {
        this.name = 'Cody\'s ' + this.name;
        this.dexterity += Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
        this.strength += Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
        this.intelligence += Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
        this.constitution += Math.ceil(2.0 * this.itemLevel * this.statMultiplier);
        this.withColor(wglt_1.Colors.LIGHT_BLUE);
    }
    chooseLegendaryFlair() {
        this.name = 'Cody\'s ' + this.name;
        this.dexterity += Math.ceil(2.5 * this.itemLevel * this.statMultiplier);
        this.strength += Math.ceil(2.5 * this.itemLevel * this.statMultiplier);
        this.intelligence += Math.ceil(2.5 * this.itemLevel * this.statMultiplier);
        this.constitution += Math.ceil(2.5 * this.itemLevel * this.statMultiplier);
        this.withColor(wglt_1.Colors.LIGHT_BLUE);
    }
    chooseValue(...values) {
        return values[this.game.rng.nextRange(0, values.length)];
    }
    chooseArrayValue(values) {
        return values[this.game.rng.nextRange(0, values.length)];
    }
    build() {
        return new equipment_1.Equipment(this);
    }
}
exports.EquipmentBuilder = EquipmentBuilder;


/***/ }),

/***/ "./src/equipment/equipmentmaterial.ts":
/*!********************************************!*\
  !*** ./src/equipment/equipmentmaterial.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EquipmentMaterial;
(function (EquipmentMaterial) {
    EquipmentMaterial["NONE"] = "";
    EquipmentMaterial["CLOTH"] = "Cloth";
    EquipmentMaterial["LEATHER"] = "Leather";
    EquipmentMaterial["MAIL"] = "Mail";
    EquipmentMaterial["PLATE"] = "Plate";
})(EquipmentMaterial = exports.EquipmentMaterial || (exports.EquipmentMaterial = {}));


/***/ }),

/***/ "./src/equipment/equipmentquality.ts":
/*!*******************************************!*\
  !*** ./src/equipment/equipmentquality.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EquipmentQuality;
(function (EquipmentQuality) {
    EquipmentQuality[EquipmentQuality["POOR"] = 0] = "POOR";
    EquipmentQuality[EquipmentQuality["COMMON"] = 1] = "COMMON";
    EquipmentQuality[EquipmentQuality["UNCOMMON"] = 2] = "UNCOMMON";
    EquipmentQuality[EquipmentQuality["RARE"] = 3] = "RARE";
    EquipmentQuality[EquipmentQuality["EPIC"] = 4] = "EPIC";
    EquipmentQuality[EquipmentQuality["LEGENDARY"] = 5] = "LEGENDARY";
})(EquipmentQuality = exports.EquipmentQuality || (exports.EquipmentQuality = {}));


/***/ }),

/***/ "./src/equipment/equipmentslot.ts":
/*!****************************************!*\
  !*** ./src/equipment/equipmentslot.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EquipmentSlot;
(function (EquipmentSlot) {
    EquipmentSlot["HEAD"] = "Head";
    EquipmentSlot["NECK"] = "Neck";
    EquipmentSlot["BACK"] = "Back";
    EquipmentSlot["CHEST"] = "Chest";
    EquipmentSlot["HANDS"] = "Hands";
    EquipmentSlot["LEGS"] = "Legs";
    EquipmentSlot["FEET"] = "Feet";
    EquipmentSlot["RING"] = "Ring";
    EquipmentSlot["MAINHAND"] = "Main Hand";
    EquipmentSlot["OFFHAND"] = "Off Hand";
})(EquipmentSlot = exports.EquipmentSlot || (exports.EquipmentSlot = {}));


/***/ }),

/***/ "./src/equipment/equipmentsprites.ts":
/*!*******************************************!*\
  !*** ./src/equipment/equipmentsprites.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const W = 16;
const H = 24;
const C = 0x808080FF;
exports.SWORD_SPRITE_1 = new wglt_1.Sprite(608, 96, W, H, 1, false, undefined, C);
exports.SWORD_SPRITE_2 = new wglt_1.Sprite(624, 96, W, H, 1, false, undefined, C);
exports.SWORD_SPRITE_3 = new wglt_1.Sprite(752, 120, W, H, 1, false, undefined, C);
exports.SWORD_SPRITE_4 = new wglt_1.Sprite(768, 120, W, H, 1, false, undefined, C);
exports.SWORD_SPRITES = [
    exports.SWORD_SPRITE_1,
    exports.SWORD_SPRITE_2,
    exports.SWORD_SPRITE_3,
    exports.SWORD_SPRITE_4,
];
exports.MACE_SPRITE_1 = new wglt_1.Sprite(640, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITE_2 = new wglt_1.Sprite(688, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITE_3 = new wglt_1.Sprite(704, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITE_4 = new wglt_1.Sprite(720, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITE_5 = new wglt_1.Sprite(736, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITE_6 = new wglt_1.Sprite(833, 96, W, H, 1, false, undefined, C);
exports.MACE_SPRITES = [
    exports.MACE_SPRITE_1,
    exports.MACE_SPRITE_2,
    exports.MACE_SPRITE_3,
    exports.MACE_SPRITE_4,
    exports.MACE_SPRITE_5,
    exports.MACE_SPRITE_6,
];
exports.DAGGER_SPRITE_1 = new wglt_1.Sprite(672, 96, W, H, 1, false, undefined, C);
exports.AXE_SPRITE_1 = new wglt_1.Sprite(752, 96, W, H, 1, false, undefined, C);
exports.BOW_SPRITE_1 = new wglt_1.Sprite(880, 96, W, H, 1, false, undefined, C);
exports.CROSSBOW_SPRITE_1 = new wglt_1.Sprite(896, 96, W, H, 1, false, undefined, C);
exports.STAFF_SPRITE_1 = new wglt_1.Sprite(896, 120, W, H, 1, false, undefined, C);
exports.STAFF_SPRITE_2 = new wglt_1.Sprite(608, 120, W, H, 1, false, undefined, C);
exports.STAFF_SPRITE_3 = new wglt_1.Sprite(624, 120, W, H, 1, false, undefined, C);
exports.STAFF_SPRITE_4 = new wglt_1.Sprite(640, 120, W, H, 1, false, undefined, C);
exports.STAFF_SPRITE_5 = new wglt_1.Sprite(656, 120, W, H, 1, false, undefined, C);
exports.STAFF_SPRITES = [
    exports.STAFF_SPRITE_1,
    exports.STAFF_SPRITE_2,
    exports.STAFF_SPRITE_3,
    exports.STAFF_SPRITE_4,
    exports.STAFF_SPRITE_5,
];
exports.SHIRT_SPRITE_1 = new wglt_1.Sprite(608, 144, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_2 = new wglt_1.Sprite(608, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_3 = new wglt_1.Sprite(624, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_4 = new wglt_1.Sprite(640, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_5 = new wglt_1.Sprite(656, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_6 = new wglt_1.Sprite(672, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_7 = new wglt_1.Sprite(688, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_8 = new wglt_1.Sprite(704, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_9 = new wglt_1.Sprite(720, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_10 = new wglt_1.Sprite(736, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITE_11 = new wglt_1.Sprite(752, 264, W, H, 1, false, undefined, C);
exports.SHIRT_SPRITES = [
    exports.SHIRT_SPRITE_1,
    exports.SHIRT_SPRITE_2,
    exports.SHIRT_SPRITE_3,
    exports.SHIRT_SPRITE_4,
    exports.SHIRT_SPRITE_5,
    exports.SHIRT_SPRITE_6,
    exports.SHIRT_SPRITE_7,
    exports.SHIRT_SPRITE_8,
    exports.SHIRT_SPRITE_9,
    exports.SHIRT_SPRITE_10,
    exports.SHIRT_SPRITE_11,
];
exports.ROBE_SPRITE_1 = new wglt_1.Sprite(608, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_2 = new wglt_1.Sprite(624, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_3 = new wglt_1.Sprite(640, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_4 = new wglt_1.Sprite(656, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_5 = new wglt_1.Sprite(672, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_6 = new wglt_1.Sprite(688, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_7 = new wglt_1.Sprite(704, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_8 = new wglt_1.Sprite(720, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_9 = new wglt_1.Sprite(736, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITE_10 = new wglt_1.Sprite(752, 288, W, H, 1, false, undefined, C);
exports.ROBE_SPRITES = [
    exports.ROBE_SPRITE_1,
    exports.ROBE_SPRITE_2,
    exports.ROBE_SPRITE_3,
    exports.ROBE_SPRITE_4,
    exports.ROBE_SPRITE_5,
    exports.ROBE_SPRITE_6,
    exports.ROBE_SPRITE_7,
    exports.ROBE_SPRITE_8,
    exports.ROBE_SPRITE_9,
    exports.ROBE_SPRITE_10,
];
exports.HELM_SPRITE_1 = new wglt_1.Sprite(608, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_2 = new wglt_1.Sprite(624, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_3 = new wglt_1.Sprite(640, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_4 = new wglt_1.Sprite(656, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_5 = new wglt_1.Sprite(672, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_6 = new wglt_1.Sprite(688, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_7 = new wglt_1.Sprite(704, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_8 = new wglt_1.Sprite(720, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_9 = new wglt_1.Sprite(736, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_10 = new wglt_1.Sprite(752, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_11 = new wglt_1.Sprite(768, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_12 = new wglt_1.Sprite(784, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_13 = new wglt_1.Sprite(800, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_14 = new wglt_1.Sprite(816, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_15 = new wglt_1.Sprite(832, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_16 = new wglt_1.Sprite(848, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_17 = new wglt_1.Sprite(864, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_18 = new wglt_1.Sprite(880, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITE_19 = new wglt_1.Sprite(896, 240, W, H, 1, false, undefined, C);
exports.HELM_SPRITES = [
    exports.HELM_SPRITE_1,
    exports.HELM_SPRITE_2,
    exports.HELM_SPRITE_3,
    exports.HELM_SPRITE_4,
    exports.HELM_SPRITE_5,
    exports.HELM_SPRITE_6,
    exports.HELM_SPRITE_7,
    exports.HELM_SPRITE_8,
    exports.HELM_SPRITE_9,
    exports.HELM_SPRITE_10,
    exports.HELM_SPRITE_11,
    exports.HELM_SPRITE_12,
    exports.HELM_SPRITE_13,
    exports.HELM_SPRITE_14,
    exports.HELM_SPRITE_15,
    exports.HELM_SPRITE_16,
    exports.HELM_SPRITE_17,
    exports.HELM_SPRITE_18,
    exports.HELM_SPRITE_19,
];
exports.CLOTH_HELM_SPRITES = [
    exports.HELM_SPRITE_12,
    exports.HELM_SPRITE_13,
    exports.HELM_SPRITE_14,
    exports.HELM_SPRITE_15,
    exports.HELM_SPRITE_16,
];
exports.LEATHER_HELM_SPRITES = [
    exports.HELM_SPRITE_1,
    exports.HELM_SPRITE_2,
    exports.HELM_SPRITE_4,
    exports.HELM_SPRITE_6,
    exports.HELM_SPRITE_7,
    exports.HELM_SPRITE_17,
    exports.HELM_SPRITE_18,
    exports.HELM_SPRITE_19,
];
exports.PLATE_HELM_SPRITES = [
    exports.HELM_SPRITE_1,
    exports.HELM_SPRITE_4,
    exports.HELM_SPRITE_8,
    exports.HELM_SPRITE_9,
    exports.HELM_SPRITE_10,
    exports.HELM_SPRITE_11,
    exports.HELM_SPRITE_19
];
exports.GLOVES_SPRITE_1 = new wglt_1.Sprite(608, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_2 = new wglt_1.Sprite(624, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_3 = new wglt_1.Sprite(640, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_4 = new wglt_1.Sprite(656, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_5 = new wglt_1.Sprite(672, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_6 = new wglt_1.Sprite(688, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_7 = new wglt_1.Sprite(704, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_8 = new wglt_1.Sprite(720, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_9 = new wglt_1.Sprite(736, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITE_10 = new wglt_1.Sprite(752, 312, W, H, 1, false, undefined, C);
exports.GLOVES_SPRITES = [
    exports.GLOVES_SPRITE_1,
    exports.GLOVES_SPRITE_2,
    exports.GLOVES_SPRITE_3,
    exports.GLOVES_SPRITE_4,
    exports.GLOVES_SPRITE_5,
    exports.GLOVES_SPRITE_6,
    exports.GLOVES_SPRITE_7,
    exports.GLOVES_SPRITE_8,
    exports.GLOVES_SPRITE_9,
    exports.GLOVES_SPRITE_10,
];
exports.PANTS_SPRITE_1 = new wglt_1.Sprite(656, 144, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_2 = new wglt_1.Sprite(768, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_3 = new wglt_1.Sprite(784, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_4 = new wglt_1.Sprite(800, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_5 = new wglt_1.Sprite(816, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_6 = new wglt_1.Sprite(832, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITE_7 = new wglt_1.Sprite(848, 312, W, H, 1, false, undefined, C);
exports.PANTS_SPRITES = [
    exports.PANTS_SPRITE_1,
    exports.PANTS_SPRITE_2,
    exports.PANTS_SPRITE_3,
    exports.PANTS_SPRITE_4,
    exports.PANTS_SPRITE_5,
    exports.PANTS_SPRITE_6,
    exports.PANTS_SPRITE_7,
];
exports.BOOTS_SPRITE_1 = new wglt_1.Sprite(640, 144, W, H, 1, false, undefined, C);
exports.BOOTS_SPRITES = [
    exports.BOOTS_SPRITE_1,
];
exports.SHIELD_SPRITE_1 = new wglt_1.Sprite(688, 144, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_2 = new wglt_1.Sprite(608, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_3 = new wglt_1.Sprite(624, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_4 = new wglt_1.Sprite(640, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_5 = new wglt_1.Sprite(656, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_6 = new wglt_1.Sprite(672, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_7 = new wglt_1.Sprite(688, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_8 = new wglt_1.Sprite(704, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_9 = new wglt_1.Sprite(720, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_10 = new wglt_1.Sprite(736, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_11 = new wglt_1.Sprite(752, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_12 = new wglt_1.Sprite(768, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_13 = new wglt_1.Sprite(784, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_14 = new wglt_1.Sprite(800, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_15 = new wglt_1.Sprite(816, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_16 = new wglt_1.Sprite(832, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITE_17 = new wglt_1.Sprite(848, 216, W, H, 1, false, undefined, C);
exports.SHIELD_SPRITES = [
    exports.SHIELD_SPRITE_1,
    exports.SHIELD_SPRITE_2,
    exports.SHIELD_SPRITE_3,
    exports.SHIELD_SPRITE_4,
    exports.SHIELD_SPRITE_5,
    exports.SHIELD_SPRITE_6,
    exports.SHIELD_SPRITE_7,
    exports.SHIELD_SPRITE_8,
    exports.SHIELD_SPRITE_9,
    exports.SHIELD_SPRITE_10,
    exports.SHIELD_SPRITE_11,
    exports.SHIELD_SPRITE_12,
    exports.SHIELD_SPRITE_13,
    exports.SHIELD_SPRITE_14,
    exports.SHIELD_SPRITE_15,
    exports.SHIELD_SPRITE_16,
    exports.SHIELD_SPRITE_17,
];
exports.NECKLACE_SPRITE_1 = new wglt_1.Sprite(768, 144, W, H, 1, false, undefined, C);
exports.RING_SPRITE_1 = new wglt_1.Sprite(784, 144, W, H, 1, false, undefined, C);
exports.RING_SPRITE_2 = new wglt_1.Sprite(800, 144, W, H, 1, false, undefined, C);
exports.RING_SPRITES = [
    exports.RING_SPRITE_1,
    exports.RING_SPRITE_2
];
exports.CLOAK_SPRITE_1 = new wglt_1.Sprite(768, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_2 = new wglt_1.Sprite(784, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_3 = new wglt_1.Sprite(800, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_4 = new wglt_1.Sprite(816, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_5 = new wglt_1.Sprite(832, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_6 = new wglt_1.Sprite(848, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITE_7 = new wglt_1.Sprite(864, 288, W, H, 1, false, undefined, C);
exports.CLOAK_SPRITES = [
    exports.CLOAK_SPRITE_1,
    exports.CLOAK_SPRITE_2,
    exports.CLOAK_SPRITE_3,
    exports.CLOAK_SPRITE_4,
    exports.CLOAK_SPRITE_5,
    exports.CLOAK_SPRITE_6,
    exports.CLOAK_SPRITE_7,
];
exports.LANTERN_SPRITE = new wglt_1.Sprite(880, 168, W, H, 1, false, undefined, C);
exports.ORB_SPRITE = new wglt_1.Sprite(848, 168, W, H, 1, false, undefined, C);
exports.CLOCK_SPRITE = new wglt_1.Sprite(880, 144, W, H, 1, false, undefined, C);
exports.BOOK_SPRITE = new wglt_1.Sprite(816, 168, W, H, 1, false, undefined, C);


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const player_1 = __webpack_require__(/*! ./entities/player */ "./src/entities/player.ts");
const bottompanel_1 = __webpack_require__(/*! ./gui/bottompanel */ "./src/gui/bottompanel.ts");
const characterdialog_1 = __webpack_require__(/*! ./gui/characterdialog */ "./src/gui/characterdialog.ts");
const toppanel_1 = __webpack_require__(/*! ./gui/toppanel */ "./src/gui/toppanel.ts");
const mapgen_1 = __webpack_require__(/*! ./mapgen */ "./src/mapgen.ts");
const levelupdialog_1 = __webpack_require__(/*! ./gui/levelupdialog */ "./src/gui/levelupdialog.ts");
const entityframes_1 = __webpack_require__(/*! ./gui/entityframes */ "./src/gui/entityframes.ts");
const healthpotion_1 = __webpack_require__(/*! ./items/healthpotion */ "./src/items/healthpotion.ts");
const scroll_1 = __webpack_require__(/*! ./items/scroll */ "./src/items/scroll.ts");
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const TARGET_SPRITE = new wglt_1.Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
class Game extends wglt.Game {
    constructor(app, seed) {
        super(app, {
            mapSize: new wglt_1.Rect(0, 0, 512, 512),
            mapLayers: 4,
            tileSize: new wglt_1.Rect(0, 0, 16, 24),
            horizontalViewDistance: 6,
            verticalViewDistance: 4
        });
        this.rng.setSeed(seed);
        this.targetSprite = TARGET_SPRITE;
        this.cooldownSprite = new wglt_1.Sprite(192, 16, 16, 24, 24);
        this.blackoutRect = new wglt_1.Rect(0, 40, 16, 16);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
        this.mapGen = new mapgen_1.MapGenerator(this);
        const player = new player_1.Player(this, 30, 20);
        this.player = player;
        this.entities.add(player);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 16, 24, 24);
        this.gui.renderer.buttonSlotRect = new wglt_1.Rect(64, 16, 20, 28);
        this.messageLog = new wglt_1.MessageLog(new wglt_1.Rect(1, -84, 100, 50));
        this.gui.add(this.messageLog);
        this.log('Welcome stranger! Prepare to perish!', wglt_1.Colors.DARK_RED);
        const topPanel = new toppanel_1.TopPanel(player);
        this.gui.add(topPanel);
        const bottomPanel = new bottompanel_1.BottomPanel();
        this.gui.add(bottomPanel);
        this.gui.add(new entityframes_1.EntityFrames(this));
        const inventoryButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(832, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
            this.hideAllDialogs();
            this.inventoryDialog.visible = true;
        });
        inventoryButton.tooltipMessages = [
            new wglt_1.Message('Traveler\'s Backpack', wglt_1.Colors.GREEN),
            new wglt_1.Message('Item Level 55', wglt_1.Colors.YELLOW),
            new wglt_1.Message('16 Slot Bag', wglt_1.Colors.WHITE),
            new wglt_1.Message('Sell Price: 87 coins', wglt_1.Colors.WHITE)
        ];
        bottomPanel.inventorySlot.add(inventoryButton);
        const characterButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(640, 240, 16, 24, undefined, undefined, undefined, 0xffcf5cff), undefined, () => {
            this.hideAllDialogs();
            this.characterDialog.visible = true;
        });
        characterButton.tooltipMessages = [
            new wglt_1.Message('Character', wglt_1.Colors.WHITE),
            new wglt_1.Message('Currently equipped items,', wglt_1.Colors.YELLOW),
            new wglt_1.Message('stats and abilities.', wglt_1.Colors.YELLOW)
        ];
        topPanel.characterSlot.add(characterButton);
        const talentsButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(656, 360, 16, 24, undefined, undefined, undefined, wglt_1.Colors.LIGHT_BLUE), undefined, () => {
            this.hideAllDialogs();
            this.talentsDialog.visible = true;
        });
        talentsButton.tooltipMessages = [
            new wglt_1.Message('Talents', wglt_1.Colors.WHITE),
            new wglt_1.Message('A list of all of your', wglt_1.Colors.YELLOW),
            new wglt_1.Message('character\'s talents.', wglt_1.Colors.YELLOW)
        ];
        topPanel.talentsSlot.add(talentsButton);
        const menuButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(352, 672, 16, 24, undefined, undefined, undefined, wglt_1.Colors.LIGHT_GRAY), undefined, () => {
            window.location.hash = 'menu';
        });
        menuButton.tooltipMessages = [new wglt_1.Message('Main Menu', wglt_1.Colors.WHITE)];
        topPanel.menuSlot.add(menuButton);
        this.inventoryDialog = new wglt_1.ItemContainerDialog(new wglt_1.Rect(4, 38, 94, 126), [
            new wglt_1.Message('Traveler\'s Backpack', wglt_1.Colors.GREEN),
            new wglt_1.Message('Click an item to use', wglt_1.Colors.LIGHT_GRAY),
            new wglt_1.Message('Drag for shortcut', wglt_1.Colors.LIGHT_GRAY)
        ], 16, player.inventory);
        this.inventoryDialog.visible = false;
        this.gui.add(this.inventoryDialog);
        this.characterDialog = new characterdialog_1.CharacterDialog(new wglt_1.Rect(4, 38, 120, 126), player);
        this.characterDialog.visible = false;
        this.gui.add(this.characterDialog);
        this.talentsDialog = new wglt_1.TalentsDialog(new wglt_1.Rect(4, 38, 94, 126), [
            new wglt_1.Message('Talents', wglt_1.Colors.GREEN),
            new wglt_1.Message('Click an ability to use', wglt_1.Colors.LIGHT_GRAY),
            new wglt_1.Message('Drag for shortcut', wglt_1.Colors.LIGHT_GRAY)
        ], 16, player.talents);
        this.talentsDialog.visible = false;
        this.gui.add(this.talentsDialog);
        const levelUpDialog = new levelupdialog_1.LevelUpDialog(new wglt_1.Rect(4, 38, 140, 126), player);
        levelUpDialog.visible = false;
        this.gui.add(levelUpDialog);
        this.levelUpDialog = levelUpDialog;
        player.inventory.addListener({
            onAdd: (_, item) => {
                if (!(item instanceof healthpotion_1.HealthPotion) && !(item instanceof scroll_1.Scroll)) {
                    // Only add health potions and scrolls
                    return;
                }
                bottomPanel.shortcutBar.addItem(player.inventory, item, true);
            },
            onRemove: () => { }
        });
        player.talents.addListener({
            onAdd: (_, talent) => {
                bottomPanel.shortcutBar.addTalent(talent);
            },
            onRemove: () => { }
        });
        // Generate the map
        this.mapGen.createMap();
    }
    hideAllDialogs() {
        this.inventoryDialog.visible = false;
        this.characterDialog.visible = false;
        this.talentsDialog.visible = false;
    }
    warpToPoint(point) {
        this.addAnimation(new wglt_1.FadeOutAnimation(30)).then(() => {
            if (this.player) {
                this.player.x = point.x;
                this.player.y = point.y;
            }
            this.stopAutoWalk();
            this.resetViewport();
            this.recomputeFov();
            this.addAnimation(new wglt_1.FadeInAnimation(30));
        });
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/gui/bottompanel.ts":
/*!********************************!*\
  !*** ./src/gui/bottompanel.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class BottomPanel extends wglt_1.Panel {
    constructor() {
        super(new wglt_1.Rect(0, -43, 400, 43));
        // Create 6 slots for the action bar
        this.add(new wglt_1.ShortcutBar(new wglt_1.Rect(0, 0, 6 * 24, 28), 6));
        // Create a slot for the inventory button
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(100, 0, 20, 28), wglt_1.Keys.VK_I));
    }
    get shortcutBar() {
        return this.children.get(0);
    }
    get inventorySlot() {
        return this.children.get(this.children.length - 1);
    }
    drawContents() {
        if (!this.gui) {
            return;
        }
        const app = this.gui.app;
        const y = app.size.height - 43;
        app.drawImage(0, y, 48, 16, 16, 48, undefined, app.size.width, 48);
        // Update button y-positions
        // This will normally be a no-op
        for (let i = 0; i < this.children.length; i++) {
            this.children.get(i).rect.y = app.size.height - 31;
        }
        // Update inventory button to be right-aligned
        this.inventorySlot.rect.x = app.size.width - 22;
        this.drawChildren();
    }
}
exports.BottomPanel = BottomPanel;


/***/ }),

/***/ "./src/gui/characterdialog.ts":
/*!************************************!*\
  !*** ./src/gui/characterdialog.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipmentslot_1 = __webpack_require__(/*! ../equipment/equipmentslot */ "./src/equipment/equipmentslot.ts");
const MARGIN = 4;
const BUTTON_SPACING = 2;
class CharacterDialog extends wglt_1.Dialog {
    constructor(rect, player) {
        super(rect);
        this.player = player;
        this.modal = true;
        const capacity = 10;
        for (let i = 0; i < capacity; i++) {
            // Slots are repositioned at render time
            this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(0, 0, 24, 24)));
        }
        player.equipment.addListener({ onAdd: (_, item) => this.addItem(item), onRemove: (_, item) => this.removeItem(item) });
    }
    get headSlot() {
        return this.children.get(0);
    }
    get neckSlot() {
        return this.children.get(1);
    }
    get backSlot() {
        return this.children.get(2);
    }
    get chestSlot() {
        return this.children.get(3);
    }
    get handsSlot() {
        return this.children.get(4);
    }
    get legsSlot() {
        return this.children.get(5);
    }
    get feetSlot() {
        return this.children.get(6);
    }
    get ringSlot() {
        return this.children.get(7);
    }
    get mainHandSlot() {
        return this.children.get(8);
    }
    get offHandSlot() {
        return this.children.get(9);
    }
    addItem(item) {
        const slot = this.getSlot(item);
        if (slot) {
            slot.add(new wglt_1.ItemButton(slot.rect.clone(), this.player.inventory, item));
        }
    }
    removeItem(item) {
        const slot = this.getSlot(item);
        if (slot) {
            const button = slot.button;
            if (button) {
                slot.remove(button);
            }
        }
    }
    getSlot(item) {
        switch (item.slot) {
            case equipmentslot_1.EquipmentSlot.HEAD:
                return this.headSlot;
            case equipmentslot_1.EquipmentSlot.NECK:
                return this.neckSlot;
            case equipmentslot_1.EquipmentSlot.BACK:
                return this.backSlot;
            case equipmentslot_1.EquipmentSlot.CHEST:
                return this.chestSlot;
            case equipmentslot_1.EquipmentSlot.HANDS:
                return this.handsSlot;
            case equipmentslot_1.EquipmentSlot.LEGS:
                return this.legsSlot;
            case equipmentslot_1.EquipmentSlot.FEET:
                return this.feetSlot;
            case equipmentslot_1.EquipmentSlot.RING:
                return this.ringSlot;
            case equipmentslot_1.EquipmentSlot.MAINHAND:
                return this.mainHandSlot;
            case equipmentslot_1.EquipmentSlot.OFFHAND:
                return this.offHandSlot;
            default:
                return undefined;
        }
    }
    drawContents() {
        super.drawContents();
        if (!this.gui || !this.gui.renderer.buttonSlotRect) {
            return;
        }
        // Update positions of button slots
        const containerRect = this.rect;
        const buttonRect = this.gui.renderer.buttonSlotRect;
        const centerX = ((containerRect.x1 + containerRect.x2) / 2) | 0;
        const x = containerRect.x + MARGIN;
        let y = containerRect.y + MARGIN;
        this.gui.app.drawCenteredString('ORYX THE BRAVE', centerX, y, wglt_1.Colors.WHITE);
        y += 10;
        const desc = 'Level ' + this.player.level + ' ' + this.player.race.name + ' ' + this.player.class.name;
        this.gui.app.drawCenteredString(desc, centerX, y, wglt_1.Colors.WHITE);
        y += 10;
        // Draw the player sprite at 2x
        this.player.sprite.draw(this.gui.app, centerX - 8, y + 32);
        // Left column:  head, neck, back, chest
        for (let i = 0; i < 4; i++) {
            const child = this.children.get(i);
            child.rect.x = x;
            child.rect.y = y + i * (buttonRect.height + BUTTON_SPACING);
            child.rect.width = buttonRect.width;
            child.rect.height = buttonRect.height;
        }
        // Right column: hands, legs, ring1, ring2
        for (let i = 0; i < 4; i++) {
            const child = this.children.get(4 + i);
            child.rect.x = containerRect.x2 - MARGIN - buttonRect.width;
            child.rect.y = y + i * (buttonRect.height + BUTTON_SPACING);
            child.rect.width = buttonRect.width;
            child.rect.height = buttonRect.height;
        }
        this.mainHandSlot.rect.x = centerX - buttonRect.width - 1;
        this.mainHandSlot.rect.y = y + 90;
        this.mainHandSlot.rect.width = buttonRect.width;
        this.mainHandSlot.rect.height = buttonRect.height;
        this.offHandSlot.rect.x = centerX + 1;
        this.offHandSlot.rect.y = y + 90;
        this.offHandSlot.rect.width = buttonRect.width;
        this.offHandSlot.rect.height = buttonRect.height;
        y += 4 * (buttonRect.height + BUTTON_SPACING) + MARGIN;
        this.gui.app.drawString('Armor', x + 2, y, wglt_1.Colors.YELLOW);
        this.gui.app.drawRightString(this.player.armor.toString(), x + 85, y, wglt_1.Colors.WHITE);
        y += 10;
        this.gui.app.drawString('Constitution', x + 2, y, wglt_1.Colors.YELLOW);
        this.gui.app.drawRightString(this.player.constitution.toString(), x + 85, y, wglt_1.Colors.WHITE);
        this.gui.app.drawString('+' + this.player.constitutionModifier, x + 95, y, wglt_1.Colors.LIGHT_GREEN);
        y += 10;
        this.gui.app.drawString('Strength', x + 2, y, wglt_1.Colors.YELLOW);
        this.gui.app.drawRightString(this.player.strength.toString(), x + 85, y, wglt_1.Colors.WHITE);
        this.gui.app.drawString('+' + this.player.strengthModifier, x + 95, y, wglt_1.Colors.LIGHT_GREEN);
        y += 10;
        this.gui.app.drawString('Dexterity', x + 2, y, wglt_1.Colors.YELLOW);
        this.gui.app.drawRightString(this.player.dexterity.toString(), x + 85, y, wglt_1.Colors.WHITE);
        this.gui.app.drawString('+' + this.player.dexterityModifier, x + 95, y, wglt_1.Colors.LIGHT_GREEN);
        y += 10;
        this.gui.app.drawString('Intelligence', x + 2, y, wglt_1.Colors.YELLOW);
        this.gui.app.drawRightString(this.player.intelligence.toString(), x + 85, y, wglt_1.Colors.WHITE);
        this.gui.app.drawString('+' + this.player.intelligenceModifier, x + 95, y, wglt_1.Colors.LIGHT_GREEN);
        y += 10;
        this.rect.height = (y + MARGIN) - containerRect.y;
        this.drawChildren();
    }
}
exports.CharacterDialog = CharacterDialog;


/***/ }),

/***/ "./src/gui/entityframes.ts":
/*!*********************************!*\
  !*** ./src/gui/entityframes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const statsactor_1 = __webpack_require__(/*! ../entities/statsactor */ "./src/entities/statsactor.ts");
class EntityFrames extends wglt_1.Panel {
    constructor(game) {
        super(new wglt_1.Rect(0, 40, 40, 200));
        this.game = game;
    }
    drawContents() {
        if (!this.gui) {
            return;
        }
        const bo = this.game.blackoutRect;
        if (!bo) {
            return;
        }
        const app = this.gui.app;
        const player = this.game.player;
        const entities = this.game.entities;
        const x = 2;
        let y = 40;
        for (let i = 0; i < entities.length; i++) {
            const entity = entities.get(i);
            if (entity === this.game.player || !(entity instanceof statsactor_1.StatsActor)) {
                continue;
            }
            const actor = entity;
            if (!actor.showFrame || actor.visibleDuration < 0) {
                continue;
            }
            // Draw the frame
            app.drawImage(x, y, 64, 48, 54, 18);
            // Draw the name
            let nameColor = wglt_1.Colors.YELLOW;
            if (actor.sentiment === statsactor_1.Sentiment.FRIENDLY) {
                nameColor = wglt_1.Colors.LIGHT_GREEN;
            }
            else if (actor.sentiment === statsactor_1.Sentiment.HOSTILE) {
                nameColor = wglt_1.Colors.RED;
            }
            app.drawCenteredString(actor.name, x + 20, y + 1, nameColor);
            // Draw the health
            const healthWidth = Math.round(38.0 * actor.hp / actor.maxHp);
            app.drawImage(x + 1, y + 9, bo.x, bo.y, bo.width, bo.height, wglt_1.Colors.DARK_GREEN, healthWidth, 7);
            app.drawCenteredString(actor.hp + '/' + actor.maxHp, x + 20, y + 9, wglt_1.Colors.WHITE);
            // Draw the level
            let levelColor = wglt_1.Colors.YELLOW;
            if (actor.level > player.level + 3) {
                levelColor = wglt_1.Colors.RED;
            }
            else if (actor.level > player.level + 1) {
                levelColor = wglt_1.Colors.ORANGE;
            }
            else if (actor.level < player.level - 3) {
                levelColor = wglt_1.Colors.LIGHT_GREEN;
            }
            else if (actor.level < player.level - 1) {
                levelColor = 0xbbee44FF; // Yellow-green
            }
            app.drawCenteredString(actor.level.toString(), x + 47, y + 5, levelColor);
            y += 24;
        }
    }
}
exports.EntityFrames = EntityFrames;


/***/ }),

/***/ "./src/gui/levelupdialog.ts":
/*!**********************************!*\
  !*** ./src/gui/levelupdialog.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const MARGIN = 5;
const BUTTON_SPACING = 2;
const CONSTITUTION_SPRITE = new wglt_1.Sprite(688, 144, 16, 24, 1, false, undefined, 0xC04020FF);
const DEXTERITY_SPRITE = new wglt_1.Sprite(640, 144, 16, 24, 1, false, undefined, 0xC04020FF);
const INTELLIGENCE_SPRITE = new wglt_1.Sprite(688, 168, 16, 24, 1, false, undefined, 0xC04020FF);
const STRENGTH_SPRITE = new wglt_1.Sprite(608, 312, 16, 24, 1, false, undefined, 0xC04020FF);
const DESCRIPTIONS = [
    [
        new wglt_1.Message('Constitution', wglt_1.Colors.YELLOW),
        new wglt_1.Message('Health, staminal,', wglt_1.Colors.WHITE),
        new wglt_1.Message('and vital force', wglt_1.Colors.WHITE)
    ],
    [
        new wglt_1.Message('Dexterity', wglt_1.Colors.YELLOW),
        new wglt_1.Message('Physical agility, reflexes,', wglt_1.Colors.WHITE),
        new wglt_1.Message('balance, and poise', wglt_1.Colors.WHITE)
    ],
    [
        new wglt_1.Message('Intelligence', wglt_1.Colors.YELLOW),
        new wglt_1.Message('Mental acuity, recall,', wglt_1.Colors.WHITE),
        new wglt_1.Message('and analytical skill', wglt_1.Colors.WHITE)
    ],
    [
        new wglt_1.Message('Strength', wglt_1.Colors.YELLOW),
        new wglt_1.Message('Natural athleticism,', wglt_1.Colors.WHITE),
        new wglt_1.Message('and bodily power', wglt_1.Colors.WHITE)
    ],
];
class LevelUpDialog extends wglt_1.Dialog {
    constructor(rect, player) {
        super(rect);
        this.player = player;
        this.modal = true;
        const constitutionSlot = new wglt_1.ButtonSlot(new wglt_1.Rect(0, 0, 24, 24), wglt_1.Keys.VK_1);
        const constitutionBtn = new wglt_1.Button(new wglt_1.Rect(0, 0, 16, 24), CONSTITUTION_SPRITE, undefined, () => this.incConstitution());
        constitutionSlot.add(constitutionBtn);
        this.add(constitutionSlot);
        const dexteritySlot = new wglt_1.ButtonSlot(new wglt_1.Rect(0, 0, 24, 24), wglt_1.Keys.VK_2);
        const dexterityBtn = new wglt_1.Button(new wglt_1.Rect(0, 0, 16, 24), DEXTERITY_SPRITE, undefined, () => this.incDexterity());
        dexteritySlot.add(dexterityBtn);
        this.add(dexteritySlot);
        const intelligenceSlot = new wglt_1.ButtonSlot(new wglt_1.Rect(0, 0, 24, 24), wglt_1.Keys.VK_3);
        const intelligenceBtn = new wglt_1.Button(new wglt_1.Rect(0, 0, 16, 24), INTELLIGENCE_SPRITE, undefined, () => this.incIntelligence());
        intelligenceSlot.add(intelligenceBtn);
        this.add(intelligenceSlot);
        const strengthSlot = new wglt_1.ButtonSlot(new wglt_1.Rect(0, 0, 24, 24), wglt_1.Keys.VK_4);
        const strengthBtn = new wglt_1.Button(new wglt_1.Rect(0, 0, 16, 24), STRENGTH_SPRITE, undefined, () => this.incStrength());
        strengthSlot.add(strengthBtn);
        this.add(strengthSlot);
    }
    incConstitution() {
        this.increaseStat(1, 0, 0, 0);
    }
    incDexterity() {
        this.increaseStat(0, 1, 0, 0);
    }
    incIntelligence() {
        this.increaseStat(0, 0, 1, 0);
    }
    incStrength() {
        this.increaseStat(0, 0, 0, 1);
    }
    increaseStat(con, dex, int, str) {
        this.player.constitution += con;
        this.player.dexterity += dex;
        this.player.intelligence += int;
        this.player.strength += str;
        this.player.remainingAbilityPoints--;
        if (this.player.remainingAbilityPoints === 0) {
            this.visible = false;
        }
    }
    drawContents() {
        super.drawContents();
        if (!this.gui || !this.gui.renderer.buttonSlotRect) {
            return;
        }
        // Update positions of button slots
        const containerRect = this.rect;
        const buttonRect = this.gui.renderer.buttonSlotRect;
        const x = containerRect.x + MARGIN;
        let y = containerRect.y + MARGIN;
        this.gui.app.drawString('Leveled up!', x, y, wglt_1.Colors.WHITE);
        y += 10;
        this.gui.app.drawString('Choose ' + this.player.remainingAbilityPoints + ' stats to increase:', x, y, wglt_1.Colors.WHITE);
        y += 10;
        for (let i = 0; i < 4; i++) {
            const desc = DESCRIPTIONS[i];
            for (let j = 0; j < desc.length; j++) {
                this.gui.app.drawString(desc[j].text, x + 25, y + 1 + j * 8, desc[j].color);
            }
            const child = this.children.get(i);
            child.rect.x = x;
            child.rect.y = y;
            child.rect.width = buttonRect.width;
            child.rect.height = buttonRect.height;
            y += buttonRect.height + BUTTON_SPACING;
        }
        this.rect.height = (y + MARGIN) - containerRect.y;
        this.drawChildren();
    }
}
exports.LevelUpDialog = LevelUpDialog;


/***/ }),

/***/ "./src/gui/menuitemrenderer.ts":
/*!*************************************!*\
  !*** ./src/gui/menuitemrenderer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class MenuItemRenderer {
    constructor(expandedHeight, collapsedHeight) {
        this.expandedHeight = expandedHeight;
        this.collapsedHeight = collapsedHeight;
    }
    drawOption(gui, point, option, selected) {
        const app = gui.app;
        let x = point.x;
        const y = point.y;
        let iconColor = wglt_1.Colors.GRAY;
        let titleColor = wglt_1.Colors.GRAY;
        let descColor = wglt_1.Colors.GRAY;
        if (selected) {
            iconColor = undefined;
            titleColor = wglt_1.Colors.YELLOW;
            descColor = wglt_1.Colors.WHITE;
        }
        if (option.icon) {
            option.icon.draw(app, x, y, iconColor);
            x += option.icon.width + 2;
        }
        app.drawString(option.name, x, y, titleColor);
        if (option.description) {
            app.drawString(option.description, x + 3, y + 10, descColor);
        }
        if (selected && option.details) {
            for (let j = 0; j < option.details.length; j++) {
                const msg = option.details[j];
                const color = selected ? msg.color : wglt_1.Colors.LIGHT_GRAY;
                app.drawString(msg.text, x + 3, y + 20 + j * 10, color);
            }
        }
    }
    getHeight(_, selected) {
        return selected ? this.expandedHeight : this.collapsedHeight;
    }
}
exports.MenuItemRenderer = MenuItemRenderer;


/***/ }),

/***/ "./src/gui/questdialog.ts":
/*!********************************!*\
  !*** ./src/gui/questdialog.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const MARGIN = 8;
class QuestDialog extends wglt_1.Dialog {
    constructor(rect) {
        super(rect);
        this.modal = true;
    }
    drawContents() {
        super.drawContents();
        if (!this.gui || !this.gui.renderer.buttonSlotRect || !this.quest) {
            return;
        }
        // Update positions of button slots
        const containerRect = this.rect;
        const buttonRect = this.gui.renderer.buttonSlotRect;
        const centerX = ((containerRect.x1 + containerRect.x2) / 2) | 0;
        const x = containerRect.x + MARGIN;
        let y = containerRect.y + MARGIN;
        for (let i = 0; i < this.quest.description.length; i++) {
            this.gui.app.drawString(this.quest.description[i], x, y, wglt_1.Colors.WHITE);
            y += 10;
        }
        this.rect.height = Math.max(200, (y + MARGIN) - containerRect.y);
        this.drawChildren();
    }
}
exports.QuestDialog = QuestDialog;


/***/ }),

/***/ "./src/gui/toppanel.ts":
/*!*****************************!*\
  !*** ./src/gui/toppanel.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class TopPanel extends wglt_1.Panel {
    constructor(player) {
        super(new wglt_1.Rect(0, 0, 400, 42));
        this.player = player;
        // Character / inventory
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(0, 3, 20, 28), wglt_1.Keys.VK_C));
        // Talents / abilities
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(0, 3, 20, 28), wglt_1.Keys.VK_N));
        // Inspect
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(0, 3, 20, 28), wglt_1.Keys.VK_QUESTION_MARK));
        // Main menu
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(0, 3, 20, 28), wglt_1.Keys.VK_Q));
    }
    get characterSlot() {
        return this.children.get(0);
    }
    get talentsSlot() {
        return this.children.get(1);
    }
    get inspectSlot() {
        return this.children.get(2);
    }
    get menuSlot() {
        return this.children.get(3);
    }
    drawContents() {
        if (!this.gui) {
            return;
        }
        const bo = this.player.game.blackoutRect;
        if (!bo) {
            return;
        }
        const app = this.gui.app;
        // Draw the overall top panel frame
        app.drawImage(0, 0, 32, 22, 16, 42, undefined, app.size.width, 42);
        // Draw the frame
        const x = 2;
        const y = 2;
        const actor = this.player;
        app.drawImage(x, y, 64, 48, 54, 18);
        // Draw the name
        app.drawCenteredString('ORYX', x + 20, y + 1, wglt_1.Colors.WHITE);
        // Draw the health
        const healthWidth = Math.round(38.0 * actor.hp / actor.maxHp);
        app.drawImage(x + 1, y + 9, bo.x, bo.y, bo.width, bo.height, wglt_1.Colors.DARK_GREEN, healthWidth, 7);
        app.drawCenteredString(actor.hp + '/' + actor.maxHp, x + 20, y + 9, wglt_1.Colors.WHITE);
        // Draw the level
        app.drawCenteredString(actor.level.toString(), x + 47, y + 5, wglt_1.Colors.WHITE);
        // Update button x-positions to right align
        // This will normally be a no-op
        for (let i = 0; i < this.children.length; i++) {
            this.children.get(i).rect.x = app.size.width - 22 * (4 - i);
        }
        this.drawChildren();
    }
}
exports.TopPanel = TopPanel;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const app = new app_1.App();
// Clear the window hash on load
// Always start at the root
if (window.location.hash && window.location.hash !== '#') {
    window.location.hash = '';
}
// Subscribe to future window hash change events
window.addEventListener('hashchange', handleHashChange);
function handleHashChange() {
    const hash = window.location.hash;
    if (hash === '#startgame') {
        app.startGame();
    }
    else if (hash === '#game') {
        app.playGame();
    }
    else if (hash === '#chooseseed') {
        app.chooseSeed();
    }
    else if (hash === '#chooserace') {
        app.chooseRace();
    }
    else if (hash === '#chooseclass') {
        app.chooseClass();
    }
    else if (hash === '#highscores') {
        app.showHighScores();
    }
    else if (hash === '#credits') {
        app.showCredits();
    }
    else {
        app.showMainMenu();
    }
}


/***/ }),

/***/ "./src/items/bossdoor.ts":
/*!*******************************!*\
  !*** ./src/items/bossdoor.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const door_1 = __webpack_require__(/*! ./door */ "./src/items/door.ts");
class BossDoor extends door_1.Door {
    constructor(game, x, y, boss) {
        super(game, x, y);
        this.boss = boss;
        this.zIndex = 0;
    }
    onBump(player) {
        if (this.boss.hp <= 0) {
            // Boss is dead
            this.openDoor();
            player.moveTo(this.x, this.y);
            return true;
        }
        const dotProduct = (this.x - player.x) * (this.boss.x - player.x) +
            (this.y - player.y) * (this.boss.y - player.y);
        if (dotProduct > 0) {
            // Walking toward the boss
            const dx = this.x - player.x;
            const dy = this.y - player.y;
            player.move(dx * 2, dy * 2);
            return true;
        }
        // Otherwise, door is locked
        return false;
    }
}
exports.BossDoor = BossDoor;


/***/ }),

/***/ "./src/items/door.ts":
/*!***************************!*\
  !*** ./src/items/door.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const TILE_OPEN_DOOR = wglt_1.getTileId(7, 20);
const SPRITE = new wglt_1.Sprite(256, 432, 16, 24, 1, true, undefined, 0x804020FF);
class Door extends wglt_1.Item {
    constructor(game, x, y) {
        super(game, x, y, 'door', SPRITE, true);
        this.zIndex = 0;
    }
    openDoor() {
        const game = this.game;
        const map = game.tileMap;
        game.entities.remove(this);
        map.setTile(this.x, this.y, 0, TILE_OPEN_DOOR);
        map.setBlocked(this.x, this.y, false);
    }
}
exports.Door = Door;


/***/ }),

/***/ "./src/items/gateway.ts":
/*!******************************!*\
  !*** ./src/items/gateway.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(432, 408, 16, 24, 1, true, undefined, 0xc3d012FF);
class Gateway extends wglt_1.Item {
    constructor(game, x, y, owner) {
        super(game, x, y, 'gateway', SPRITE, false);
        this.owner = owner;
        this.zIndex = 0;
    }
    onBump(player) {
        const exit = this.other;
        if (!exit) {
            return false;
        }
        player.move(exit.x - player.x, exit.y - player.y, 16);
        return true;
    }
}
exports.Gateway = Gateway;


/***/ }),

/***/ "./src/items/gold.ts":
/*!***************************!*\
  !*** ./src/items/gold.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(896, 168, 16, 24, 1, true, undefined, 0xFFFF00FF);
const TOOLTIPS = [
    new wglt_1.Message('Gold', wglt_1.Colors.WHITE),
    new wglt_1.Message('The coin of the realm.', wglt_1.Colors.WHITE),
];
class Gold extends wglt_1.Item {
    constructor(game, x, y) {
        super(game, x, y, 'gold', SPRITE, false);
        this.tooltipMessages = TOOLTIPS;
    }
    onPickup(entity) {
        this.game.log(entity.name + ' picked up gold coins', wglt_1.Colors.LIGHT_GREEN);
    }
}
exports.Gold = Gold;


/***/ }),

/***/ "./src/items/healthpotion.ts":
/*!***********************************!*\
  !*** ./src/items/healthpotion.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const HEAL_AMOUNT = 4;
const SPRITE = new wglt_1.Sprite(656, 168, 16, 24, 1, true, undefined, 0xFF0000FF);
const TOOLTIPS = [
    new wglt_1.Message('Ancient Healing Potion', wglt_1.Colors.LIGHT_BLUE),
    new wglt_1.Message('Item Level 5', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Use: Restore 10 health', wglt_1.Colors.LIGHT_GREEN),
];
class HealthPotion extends wglt_1.Item {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, 'health potion', SPRITE, false);
        this.tooltipMessages = TOOLTIPS;
    }
    onPickup(entity) {
        this.game.log(entity.name + ' picked up a ' + this.name, wglt_1.Colors.LIGHT_GREEN);
    }
    onUse(user) {
        if (user.hp === user.maxHp) {
            this.game.log('You are already at full health.', wglt_1.Colors.DARK_RED);
            return false;
        }
        this.game.log('Your wounds start to feel better!', wglt_1.Colors.LIGHT_MAGENTA);
        user.takeHeal(HEAL_AMOUNT);
        user.inventory.remove(this);
        user.ap--;
        return true;
    }
}
exports.HealthPotion = HealthPotion;


/***/ }),

/***/ "./src/items/hearthstone.ts":
/*!**********************************!*\
  !*** ./src/items/hearthstone.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(848, 168, 16, 24, 1, true, undefined, 0x80C0C0FF);
const TOOLTIPS = [
    new wglt_1.Message('Hearthstone', wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Use: Returns you to your home.', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Speak to an Innkeeper in a different', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('place to change your home location.', wglt_1.Colors.LIGHT_GREEN),
];
class Hearthstone extends wglt_1.Item {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, 'Hearthstone', SPRITE, false);
        this.tooltipMessages = TOOLTIPS;
    }
    onUse(player) {
        const game = player.game;
        game.hideAllDialogs();
        game.warpToPoint(player.home);
        return true;
    }
}
exports.Hearthstone = Hearthstone;


/***/ }),

/***/ "./src/items/key.ts":
/*!**************************!*\
  !*** ./src/items/key.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(688, 168, 16, 24, 1, true, undefined, 0xFFFF00FF);
class Key extends wglt_1.Item {
    constructor(game, x, y, keyId) {
        super(game, x, y, 'key', SPRITE, false);
        this.keyId = keyId;
    }
    onBump(player) {
        player.keys[this.keyId] = true;
        player.moveTo(this.x, this.y);
        this.game.entities.remove(this);
        return true;
    }
}
exports.Key = Key;


/***/ }),

/***/ "./src/items/lockeddoor.ts":
/*!*********************************!*\
  !*** ./src/items/lockeddoor.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const door_1 = __webpack_require__(/*! ./door */ "./src/items/door.ts");
class LockedDoor extends door_1.Door {
    constructor(game, x, y, keyId) {
        super(game, x, y);
        this.keyId = keyId;
        this.zIndex = 0;
    }
    onBump(player) {
        if (player.keys[this.keyId]) {
            this.openDoor();
            player.moveTo(this.x, this.y);
            return true;
        }
        // Otherwise, door is locked
        return false;
    }
}
exports.LockedDoor = LockedDoor;


/***/ }),

/***/ "./src/items/portal.ts":
/*!*****************************!*\
  !*** ./src/items/portal.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class Portal extends wglt_1.Item {
    constructor(game, x, y, name, sprite) {
        super(game, x, y, name, sprite, false);
        this.zIndex = 0;
        this.fade = false;
    }
    onBump(_) {
        const exit = this.other;
        if (!exit) {
            return false;
        }
        this.game.warpToPoint(exit);
        return true;
    }
}
exports.Portal = Portal;


/***/ }),

/***/ "./src/items/scroll.ts":
/*!*****************************!*\
  !*** ./src/items/scroll.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const SPRITE = new wglt_1.Sprite(736, 168, 16, 24, 1, true, undefined, 0xF0F0E0FF);
class Scroll extends wglt_1.Item {
    constructor(game, x, y, ability) {
        super(game, x, y, 'scroll of ' + ability.name, SPRITE, false);
        this.ability = ability;
        this.tooltipMessages = ability.tooltipMessages;
    }
    onPickup(entity) {
        this.game.log(entity.name + ' picked up a ' + this.name, wglt_1.Colors.LIGHT_GREEN);
    }
    onUse(user) {
        this.game.hideAllDialogs();
        const ability = this.ability;
        if (ability.targetType === wglt_1.TargetType.SELF) {
            if (ability.cast(user)) {
                user.inventory.remove(this);
            }
        }
        else {
            this.game.startTargeting(ability, () => {
                user.inventory.remove(this);
            });
        }
        return true;
    }
}
exports.Scroll = Scroll;


/***/ }),

/***/ "./src/mainmenu.ts":
/*!*************************!*\
  !*** ./src/mainmenu.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const OPTIONS = [
    { display: 'NEW GAME', hash: 'chooseseed', enabled: true },
    { display: 'CONTINUE', hash: 'game', enabled: false },
    { display: 'TUTORIAL', hash: 'tutorial', enabled: true },
    { display: 'HIGH SCORES', hash: 'highscores', enabled: true },
    { display: 'CREDITS', hash: 'credits', enabled: true },
];
class MainMenu extends wglt_1.AppState {
    constructor(app) {
        super(app);
        this.selectedIndex = 0;
        this.time = 0;
        this.sprites = [];
        this.chooseSprites();
    }
    chooseSprites() {
        this.sprites = [];
        for (let i = 0; i < 4; i++) {
            const x = 32 * Math.floor(Math.random() * 19);
            const y = 96 + 24 * Math.floor(Math.random() * 13);
            const color = wglt_1.fromHsv(Math.random(), 0.9, 0.5);
            this.sprites.push(new wglt_1.Sprite(x, y, 16, 24, 2, true, undefined, color));
        }
    }
    update() {
        wglt_1.Sprite.updateGlobalAnimations();
        // "Continue" is only enabled if there is an active game
        const app = this.app;
        OPTIONS[1].enabled = !!app.game;
        const time2 = this.time % 300;
        if (time2 < 80 && time2 % 8 === 0) {
            this.chooseSprites();
        }
        // Draw the gradient background image
        this.app.drawImage(this.app.center.x - 128, 0, 0, 800, 256, 128);
        // Draw the title text
        this.app.drawCenteredString('KOPI LUWAK DUNGEON', this.app.center.x + 1, 33, wglt_1.Colors.BLACK);
        this.app.drawCenteredString('KOPI LUWAK DUNGEON', this.app.center.x, 32);
        // Draw the sprites
        for (let i = 0; i < 4; i++) {
            const x = this.app.center.x - 56 + i * 32;
            const y = 52;
            this.sprites[i].draw(this.app, x, y);
        }
        // Draw the menu options
        const mouse = this.app.mouse;
        for (let i = 0; i < OPTIONS.length; i++) {
            const option = OPTIONS[i];
            const x = this.app.center.x;
            const y = 90 + 15 * i;
            let color = wglt_1.Colors.WHITE;
            if (!option.enabled) {
                color = wglt_1.Colors.GRAY;
            }
            else if (i === this.selectedIndex) {
                color = wglt_1.Colors.YELLOW;
            }
            this.app.drawCenteredString(option.display, x + 1, y + 1, wglt_1.Colors.BLACK);
            this.app.drawCenteredString(option.display, x, y, color);
            if (mouse.y >= y && mouse.y < y + 14 && mouse.isClicked()) {
                window.location.hash = option.hash;
            }
            if (i === this.selectedIndex && this.app.isKeyPressed(wglt_1.Keys.VK_ENTER)) {
                window.location.hash = option.hash;
            }
        }
        if (this.app.isKeyPressed(wglt_1.Keys.VK_UP)) {
            this.selectedIndex--;
        }
        if (this.app.isKeyPressed(wglt_1.Keys.VK_DOWN)) {
            this.selectedIndex++;
        }
        if (this.selectedIndex < 0) {
            this.selectedIndex += OPTIONS.length;
        }
        if (this.selectedIndex >= OPTIONS.length) {
            this.selectedIndex -= OPTIONS.length;
        }
        this.time++;
    }
}
exports.MainMenu = MainMenu;


/***/ }),

/***/ "./src/mapgen.ts":
/*!***********************!*\
  !*** ./src/mapgen.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const confuse_1 = __webpack_require__(/*! ./abilities/confuse */ "./src/abilities/confuse.ts");
const fireball_1 = __webpack_require__(/*! ./abilities/fireball */ "./src/abilities/fireball.ts");
const lightning_1 = __webpack_require__(/*! ./abilities/lightning */ "./src/abilities/lightning.ts");
const bat_1 = __webpack_require__(/*! ./entities/bat */ "./src/entities/bat.ts");
const griffon_1 = __webpack_require__(/*! ./entities/griffon */ "./src/entities/griffon.ts");
const shark_1 = __webpack_require__(/*! ./entities/shark */ "./src/entities/shark.ts");
const spider_1 = __webpack_require__(/*! ./entities/spider */ "./src/entities/spider.ts");
const troll_1 = __webpack_require__(/*! ./entities/troll */ "./src/entities/troll.ts");
const healthpotion_1 = __webpack_require__(/*! ./items/healthpotion */ "./src/items/healthpotion.ts");
const scroll_1 = __webpack_require__(/*! ./items/scroll */ "./src/items/scroll.ts");
const reddragon_1 = __webpack_require__(/*! ./entities/reddragon */ "./src/entities/reddragon.ts");
const guard_1 = __webpack_require__(/*! ./entities/guard */ "./src/entities/guard.ts");
const portal_1 = __webpack_require__(/*! ./items/portal */ "./src/items/portal.ts");
const dungeon_1 = __webpack_require__(/*! ./dungeon */ "./src/dungeon.ts");
const lockeddoor_1 = __webpack_require__(/*! ./items/lockeddoor */ "./src/items/lockeddoor.ts");
const key_1 = __webpack_require__(/*! ./items/key */ "./src/items/key.ts");
const bossdoor_1 = __webpack_require__(/*! ./items/bossdoor */ "./src/items/bossdoor.ts");
const king_1 = __webpack_require__(/*! ./entities/king */ "./src/entities/king.ts");
const ghost_1 = __webpack_require__(/*! ./entities/ghost */ "./src/entities/ghost.ts");
const windelemental_1 = __webpack_require__(/*! ./entities/windelemental */ "./src/entities/windelemental.ts");
// Size of the map
const MAP_WIDTH = 512;
const MAP_HEIGHT = 512;
const OVERWORLD_WIDTH = 256;
const OVERWORLD_HEIGHT = 256;
const DUNGEON_WIDTH = 64;
const DUNGEON_HEIGHT = 48;
const TILE_EMPTY = 0;
const TILE_SHADOW = wglt_1.getTileId(0, 3);
const TILE_WALL = wglt_1.getTileId(0, 19);
const TILE_HALF_WALL = wglt_1.getTileId(0, 20);
const TILE_HALF_WALL2 = wglt_1.getTileId(1, 20);
const TILE_HALF_WALL3 = wglt_1.getTileId(2, 20);
const TILE_FLOOR = wglt_1.getTileId(13, 17);
const TILE_WATER = wglt_1.getTileId(0, 18);
const TILE_BRIDGE = wglt_1.getTileId(15, 27);
const TILE_COBWEB_NORTHWEST = wglt_1.getTileId(28, 22);
const TILE_COBWEB_NORTHEAST = wglt_1.getTileId(29, 22);
const TILE_COBWEB_SOUTHWEST = wglt_1.getTileId(30, 22);
const TILE_COBWEB_SOUTHEAST = wglt_1.getTileId(31, 22);
const TILE_CLOSED_DOOR = wglt_1.getTileId(7, 19);
const TILE_STAIRS_DOWN = wglt_1.getTileId(14, 18);
const TILE_STAIRS_UP = wglt_1.getTileId(15, 18);
const TILE_BARREL = wglt_1.getTileId(24, 19);
const TILE_STATUE = wglt_1.getTileId(16, 20);
const TILE_GRASS = wglt_1.getTileId(0, 17);
const TILE_TREE1 = wglt_1.getTileId(20, 23);
const TILE_TREE2 = wglt_1.getTileId(22, 23);
const TILE_PATH = wglt_1.getTileId(18, 17);
const TILE_FENCE1 = wglt_1.getTileId(16, 22);
const TILE_FENCE2 = wglt_1.getTileId(17, 22);
const TILE_FENCE3 = wglt_1.getTileId(18, 22);
const TILE_FENCE4 = wglt_1.getTileId(19, 22);
const TILE_FENCE5 = wglt_1.getTileId(20, 22);
const TILE_FENCE6 = wglt_1.getTileId(21, 22);
const TILE_FENCE7 = wglt_1.getTileId(22, 22);
const TILE_FENCE8 = wglt_1.getTileId(23, 22);
const TILE_FENCE9 = wglt_1.getTileId(24, 22);
const TILE_FENCE10 = wglt_1.getTileId(25, 22);
// Parameters for dungeon generator
const ROOM_MIN_WIDTH = 6;
const ROOM_MAX_WIDTH = 10;
const ROOM_MIN_HEIGHT = 4;
const ROOM_MAX_HEIGHT = 8;
const MAX_ROOMS = 10;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;
const MAX_ROOM_OBSTACLES = 4;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const STAIRS_SPRITE = new wglt_1.Sprite(700, 500, SPRITE_WIDTH, SPRITE_HEIGHT, 1);
const BOSS_ZONE_HEIGHT = 10;
const BOSS_LAYOUTS = [
    {
        // Top left
        bossZone: new wglt_1.Rect(0, 0, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
        bossRoom: new wglt_1.Rect(8, 2, 14, 8),
        stairsRoom: new wglt_1.Rect(2, 4, 4, 4)
    },
    {
        // Top right
        bossZone: new wglt_1.Rect(0, 0, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
        bossRoom: new wglt_1.Rect(DUNGEON_WIDTH - 22, 2, 14, 8),
        stairsRoom: new wglt_1.Rect(DUNGEON_WIDTH - 6, 4, 4, 4)
    },
    {
        // Bottom left
        bossZone: new wglt_1.Rect(0, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
        bossRoom: new wglt_1.Rect(8, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, 14, 8),
        stairsRoom: new wglt_1.Rect(2, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT + 2, 4, 4)
    },
    {
        // Bottom right
        bossZone: new wglt_1.Rect(0, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, DUNGEON_WIDTH, BOSS_ZONE_HEIGHT),
        bossRoom: new wglt_1.Rect(DUNGEON_WIDTH - 22, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT, 14, 8),
        stairsRoom: new wglt_1.Rect(DUNGEON_WIDTH - 6, DUNGEON_HEIGHT - BOSS_ZONE_HEIGHT + 2, 4, 4)
    },
];
class MapGenerator {
    constructor(game) {
        this.nextKeyId = 0;
        this.game = game;
    }
    createMap() {
        this.createOverworld();
        const dungeons = [];
        for (let i = 0; i < 10; i++) {
            const x = MAP_WIDTH - DUNGEON_WIDTH;
            const y = i * DUNGEON_HEIGHT;
            const dungeon = new dungeon_1.Dungeon(new wglt_1.Rect(x, y, DUNGEON_WIDTH, DUNGEON_HEIGHT), i);
            this.createDungeon(dungeon);
            dungeons.push(dungeon);
        }
        // Create portal entrance
        const game = this.game;
        const player = game.player;
        const portalSprite = new wglt_1.Sprite(528, 408, 16, 24, 1, false, undefined, 0x00FFFFFF);
        const portal1 = new portal_1.Portal(game, player.x + 4, player.y, 'portal', portalSprite);
        const portal2 = dungeons[0].entrance;
        portal1.other = portal2;
        portal2.other = portal1;
        game.entities.add(portal1);
        game.entities.add(portal2);
        // Connect all of the dungeon floors to each other
        for (let i = 1; i < 10; i++) {
            const exit = dungeons[i - 1].exit;
            const entrance = dungeons[i].entrance;
            exit.other = entrance;
            entrance.other = exit;
        }
        // Touch-up (add shadows, other ambient effects)
        this.touchUp(this.game.tileMap);
    }
    createOverworld() {
        const game = this.game;
        const map = game.tileMap;
        const player = game.player;
        const rng = game.rng;
        const outerOverworld = new wglt_1.Rect(0, 0, OVERWORLD_WIDTH, OVERWORLD_HEIGHT);
        const overworld = new wglt_1.Rect(4, 4, OVERWORLD_WIDTH - 8, OVERWORLD_HEIGHT - 8);
        this.clearMap(map, outerOverworld, TILE_WATER, true, false);
        this.clearMap(map, overworld, TILE_GRASS, false, false);
        player.x = (OVERWORLD_WIDTH / 2) | 0;
        player.y = (OVERWORLD_HEIGHT / 2) | 0;
        player.home.x = player.x;
        player.home.y = player.y;
        // Make sure there's a ring of water around the map
        const point = new wglt_1.Vec2(0, 0);
        for (point.y = outerOverworld.y1; point.y < outerOverworld.y2; point.y++) {
            for (point.x = outerOverworld.x1; point.x < outerOverworld.x2; point.x++) {
                if (!overworld.contains(point)) {
                    map.setAnimated(point.x, point.y, 0, true);
                }
            }
        }
        // Create a river
        this.createRiver(map, overworld, 5000);
        // Make sure the player starts on ground
        for (let y = player.y - 4; y <= player.y + 4; y++) {
            for (let x = player.x - 4; x <= player.x + 4; x++) {
                map.setTile(x, y, 0, TILE_GRASS);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        // Create graveyards
        const graveyards = [];
        for (let i = 0; i < 5; i++) {
            const w = rng.nextRange(14, 18);
            const h = rng.nextRange(8, 12);
            const x = rng.nextRange(overworld.x1, overworld.x2 - w);
            const y = rng.nextRange(overworld.y1, overworld.y2 - h);
            const graveyard = new wglt_1.Rect(x, y, w, h);
            const center = graveyard.getCenter();
            for (let y = graveyard.y1; y < graveyard.y2; y++) {
                for (let x = graveyard.x1; x < graveyard.x2; x++) {
                    if (x === graveyard.x1 && y === graveyard.y1) {
                        // Top-left corner
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE8);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (x === graveyard.x2 - 1 && y === graveyard.y1) {
                        // Top-right corner
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE7);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (x === graveyard.x1 && y === graveyard.y2 - 1) {
                        // Bottom-left corner
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE6);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (x === graveyard.x2 - 1 && y === graveyard.y2 - 1) {
                        // Bottom-right corner
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE5);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (x === graveyard.x1) {
                        // Vertical-left fence
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE10);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (x === graveyard.x2 - 1) {
                        // Vertical-right fence
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE9);
                        map.setBlocked(x, y, true, false);
                    }
                    else if (y === graveyard.y1 || y === graveyard.y2 - 1) {
                        // Horizontal fence
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setTile(x, y, 1, TILE_FENCE1);
                        map.setBlocked(x, y, true, false);
                    }
                    else {
                        // Middle space
                        map.setTile(x, y, 0, TILE_GRASS);
                        map.setAnimated(x, y, 0, false);
                        map.setBlocked(x, y, false);
                    }
                }
            }
            // Create entrances
            map.setTile(center.x, graveyard.y1, 0, TILE_GRASS);
            map.setTile(center.x, graveyard.y1, 1, TILE_EMPTY);
            map.setBlocked(center.x, graveyard.y1, false);
            map.setTile(center.x, graveyard.y2 - 1, 0, TILE_GRASS);
            map.setTile(center.x, graveyard.y2 - 1, 1, TILE_EMPTY);
            map.setBlocked(center.x, graveyard.y2 - 1, false);
            // Create a ghost
            const distance = Math.hypot(center.x - player.x, center.y - player.y);
            const level = Math.round(distance / 5);
            const ghost = new ghost_1.Ghost(game, center.x, center.y, level);
            game.entities.add(ghost);
            graveyards.push(graveyard);
        }
        // Create trees
        for (let i = 0; i < 5000; i++) {
            const treeX = rng.nextRange(overworld.x1, overworld.x2);
            const treeY = rng.nextRange(overworld.y1, overworld.y2);
            if ((treeX !== player.x || treeY !== player.y) &&
                map.getTile(treeX, treeY, 0) === TILE_GRASS &&
                !map.isBlocked(treeX, treeY)) {
                map.setTile(treeX, treeY, 0, TILE_GRASS);
                map.setBlocked(treeX, treeY, true);
                const treeType = rng.nextRange(0, 2);
                if (treeType === 0) {
                    map.setTile(treeX, treeY, 1, TILE_TREE1);
                }
                else {
                    map.setTile(treeX, treeY, 1, TILE_TREE2);
                }
            }
        }
        // Create the main castle
        const castle = this.createCastle(map);
        // Create a road from the player to the castle
        const path = wglt_1.computePath(map, player, castle.getCenter(), 10000);
        if (path) {
            for (let i = 0; i < path.length; i++) {
                if (map.getTile(path[i].x, path[i].y, 0) === TILE_GRASS) {
                    map.setTile(path[i].x, path[i].y, 1, TILE_PATH);
                }
            }
        }
        else {
            console.log('eek! no path!');
        }
        // Create baddies
        for (let i = 0; i < 500; i++) {
            // Choose random spot for this monster
            const x = rng.nextRange(overworld.x1 + 1, overworld.x2 - 2);
            const y = rng.nextRange(overworld.y1 + 1, overworld.y2 - 2);
            if (map.getTile(x, y, 0) !== TILE_GRASS || map.isBlocked(x, y)) {
                // Not grass, ignore
                continue;
            }
            if (game.getEntityAt(x, y)) {
                // Something already at this location
                continue;
            }
            const distance = Math.hypot(x - player.x, y - player.y);
            if (distance < 10) {
                // Too close to start location
                continue;
            }
            const roll = rng.nextRange(0, 100);
            const level = Math.round((distance - 10) / 10) + rng.nextRange(1, 3);
            let monster = null;
            if (roll < 40) {
                monster = new spider_1.Spider(game, x, y, level);
            }
            else if (roll < 80) {
                monster = new bat_1.Bat(game, x, y, level);
            }
            else {
                monster = new troll_1.Troll(game, x, y, level);
            }
            game.entities.add(monster);
        }
        // Create portal entrance
        const portalSprite = new wglt_1.Sprite(528, 408, 16, 24, 1, false, undefined, 0xFF00FFFF);
        const portal1 = new portal_1.Portal(game, player.x + 2, player.y, 'portal', portalSprite);
        const portal2 = new portal_1.Portal(game, graveyards[0].x + 2, graveyards[0].y + 2, 'portal', portalSprite);
        portal1.other = portal2;
        portal2.other = portal1;
        game.entities.add(portal1);
        game.entities.add(portal2);
        const king = new king_1.King(game, player.x - 2, player.y);
        game.entities.add(king);
        // Initial FOV
        game.resetViewport();
        game.recomputeFov();
    }
    createCastle(map) {
        const game = this.game;
        const rng = game.rng;
        const width = rng.nextRange(20, 40);
        const height = rng.nextRange(15, 30);
        const x = rng.nextRange(10, OVERWORLD_WIDTH - 10 - width);
        const y = rng.nextRange(10, OVERWORLD_HEIGHT - 10 - height);
        const castle = new wglt_1.Rect(x, y, width, height);
        const center = castle.getCenter();
        const moat = castle;
        const walls = new wglt_1.Rect(castle.x + 2, castle.y + 2, castle.width - 4, castle.height - 4);
        const floors = new wglt_1.Rect(walls.x + 1, walls.y + 1, walls.width - 2, walls.height - 2);
        // Create moat
        for (let y = moat.y1; y < moat.y2; y++) {
            for (let x = moat.x1; x < moat.x2; x++) {
                map.setTile(x, y, 0, TILE_WATER);
                map.setTile(x, y, 1, TILE_EMPTY);
                map.setAnimated(x, y, 0, true);
                map.setBlocked(x, y, true, false);
            }
        }
        // Create castle
        for (let y = walls.y1; y < walls.y2; y++) {
            for (let x = walls.x1; x < walls.x2; x++) {
                map.setTile(x, y, 0, TILE_FLOOR);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        // Create castle walls
        for (let x = walls.x1; x < walls.x2; x++) {
            map.setTile(x, walls.y1, 0, TILE_WALL);
            map.setBlocked(x, walls.y1, true);
            map.setTile(x, walls.y2 - 1, 0, TILE_WALL);
            map.setBlocked(x, walls.y2 - 1, true);
        }
        for (let y = walls.y1; y < walls.y2; y++) {
            map.setTile(walls.x1, y, 0, TILE_WALL);
            map.setBlocked(walls.x1, y, true);
            map.setTile(walls.x2 - 1, y, 0, TILE_WALL);
            map.setBlocked(walls.x2 - 1, y, true);
        }
        // Create draw bridges
        for (let y = moat.y1 - 1; y < moat.y1 + 3; y++) {
            for (let x = center.x - 1; x <= center.x; x++) {
                map.setTile(x, y, 0, TILE_BRIDGE);
                map.setTile(x, y, 1, TILE_EMPTY);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        for (let y = moat.y2 - 3; y < moat.y2 + 1; y++) {
            for (let x = center.x - 1; x <= center.x; x++) {
                map.setTile(x, y, 0, TILE_BRIDGE);
                map.setTile(x, y, 1, TILE_EMPTY);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        for (let y = center.y - 1; y <= center.y; y++) {
            for (let x = moat.x1 - 1; x < moat.x1 + 3; x++) {
                map.setTile(x, y, 0, TILE_BRIDGE);
                map.setTile(x, y, 1, TILE_EMPTY);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        for (let y = center.y - 1; y <= center.y; y++) {
            for (let x = moat.x2 - 3; x < moat.x2 + 1; x++) {
                map.setTile(x, y, 0, TILE_BRIDGE);
                map.setTile(x, y, 1, TILE_EMPTY);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
        // Create guards
        for (let i = 0; i < 10; i++) {
            const waypoints = [new wglt_1.Vec2(rng.nextRange(floors.x1, floors.x2), rng.nextRange(floors.y1, floors.y2))];
            for (let j = 1; j < 4; j++) {
                const prev = waypoints[j - 1];
                if (rng.nextRange(0, 2) === 0) {
                    waypoints.push(new wglt_1.Vec2(prev.x, rng.nextRange(floors.y1, floors.y2)));
                }
                else {
                    waypoints.push(new wglt_1.Vec2(rng.nextRange(floors.x1, floors.x2), prev.y));
                }
            }
            const guard = new guard_1.Guard(game, waypoints[0].x, waypoints[0].y, waypoints);
            game.entities.add(guard);
        }
        return castle;
    }
    createDungeon(dungeon) {
        const game = this.game;
        const map = game.tileMap;
        const rng = game.rng;
        const keyId = this.nextKeyId++;
        // Clear the map to all walls
        this.clearMap(map, dungeon.rect, TILE_WALL, true, true);
        // Create bodies of water
        this.createRiver(map, dungeon.rect, 200);
        // Make sure there's a ring of "empty" all around
        for (let x = dungeon.rect.x1; x < dungeon.rect.x2; x++) {
            map.setTile(x, dungeon.rect.y1, 0, TILE_EMPTY);
            map.setAnimated(x, dungeon.rect.y1, 0, false);
            map.setBlocked(x, dungeon.rect.y1, true);
            map.setTile(x, dungeon.rect.y2 - 1, 0, TILE_EMPTY);
            map.setAnimated(x, dungeon.rect.y2 - 1, 0, false);
            map.setBlocked(x, dungeon.rect.y2 - 1, true);
        }
        for (let y = dungeon.rect.y1; y < dungeon.rect.y2; y++) {
            map.setTile(dungeon.rect.x1, y, 0, TILE_EMPTY);
            map.setAnimated(dungeon.rect.x1, y, 0, false);
            map.setBlocked(dungeon.rect.x1, y, true);
            map.setTile(dungeon.rect.x2 - 1, y, 0, TILE_EMPTY);
            map.setAnimated(dungeon.rect.x2 - 1, y, 0, false);
            map.setBlocked(dungeon.rect.x2 - 1, y, true);
        }
        const bossLayout = BOSS_LAYOUTS[rng.nextRange(0, BOSS_LAYOUTS.length)];
        const bossZone = new wglt_1.Rect(bossLayout.bossZone.x + dungeon.rect.x, bossLayout.bossZone.y + dungeon.rect.y, bossLayout.bossZone.width, bossLayout.bossZone.height);
        const bossRoom = new wglt_1.Rect(bossLayout.bossRoom.x + dungeon.rect.x, bossLayout.bossRoom.y + dungeon.rect.y, bossLayout.bossRoom.width, bossLayout.bossRoom.height);
        const stairsRoom = new wglt_1.Rect(bossLayout.stairsRoom.x + dungeon.rect.x, bossLayout.stairsRoom.y + dungeon.rect.y, bossLayout.stairsRoom.width, bossLayout.stairsRoom.height);
        while (dungeon.rooms.length < MAX_ROOMS) {
            // Random width and height
            const w = rng.nextRange(ROOM_MIN_WIDTH, ROOM_MAX_WIDTH);
            const h = rng.nextRange(ROOM_MIN_HEIGHT, ROOM_MAX_HEIGHT);
            // Random position without going out of the boundaries of the map
            const x = rng.nextRange(dungeon.rect.x1 + 2, dungeon.rect.x2 - w - 3);
            const y = rng.nextRange(dungeon.rect.y1 + 2, dungeon.rect.y2 - h - 3);
            // "Rect" class makes rectangles easier to work with
            const newRoom = new wglt_1.Rect(x, y, w, h);
            // Run through the other rooms and see if they intersect with this one
            let failed = newRoom.intersects(bossZone);
            for (let j = 0; j < dungeon.rooms.length; j++) {
                if (newRoom.intersects(dungeon.rooms[j])) {
                    failed = true;
                    break;
                }
            }
            if (failed) {
                continue;
            }
            // This means there are no intersections, so this room is valid
            // "paint" it to the map's tiles
            this.createRoom(map, newRoom);
            // Center coordinates of new room, will be useful later
            const center = newRoom.getCenter();
            if (dungeon.rooms.length === 0) {
                // This is the first room, where the player starts at
                dungeon.entrance = new portal_1.Portal(game, center.x, center.y, 'stairs', STAIRS_SPRITE);
                game.entities.add(dungeon.entrance);
                map.setTile(center.x, center.y, 0, TILE_STAIRS_UP);
            }
            else {
                // All rooms after the first:
                // Connect it to the previous room with a tunnel
                // Center coordinates of previous room
                const prev = dungeon.rooms[dungeon.rooms.length - 1].getCenter();
                // Draw a coin (random number that is either 0 or 1)
                if (rng.nextRange(0, 1) === 1) {
                    // First move horizontally, then vertically
                    this.createHTunnel(map, prev.x, center.x, prev.y);
                    this.createVTunnel(map, prev.y, center.y, center.x);
                }
                else {
                    // First move vertically, then horizontally
                    this.createVTunnel(map, prev.y, center.y, prev.x);
                    this.createHTunnel(map, prev.x, center.x, center.y);
                }
                this.placeMonsters(newRoom, dungeon.level);
            }
            // Add items (scrolls and health potions)
            this.placeItems(newRoom);
            // Finally, append the new room to the list
            dungeon.rooms.push(newRoom);
        }
        {
            // Create boss room
            this.createRoom(map, bossRoom);
            // Connect boss room to previous room
            const prev = dungeon.rooms[dungeon.rooms.length - 1].getCenter();
            const center = bossRoom.getCenter();
            this.createHTunnel(map, prev.x, center.x, prev.y);
            this.createVTunnel(map, prev.y, center.y, center.x);
            // Create boss
            const bossLevel = dungeon.level * 3 + 2;
            const dice = rng.nextRange(0, 3);
            let boss = undefined;
            if (dice === 0) {
                boss = new reddragon_1.RedDragon(game, center.x, center.y, bossLevel, bossRoom);
            }
            else if (dice === 1) {
                boss = new windelemental_1.WindElemental(game, center.x, center.y, bossLevel);
            }
            else {
                boss = new griffon_1.Griffon(game, center.x, center.y, bossLevel);
            }
            boss.loot = [new key_1.Key(game, boss.x, boss.y, keyId)];
            game.entities.add(boss);
            // Create a door to boss room
            if (center.y > prev.y) {
                map.setTile(center.x, bossRoom.y1, 0, TILE_CLOSED_DOOR);
                map.setBlocked(center.x, bossRoom.y1, true);
                game.entities.add(new bossdoor_1.BossDoor(game, center.x, bossRoom.y1, boss));
            }
            else {
                map.setTile(center.x, bossRoom.y2, 0, TILE_CLOSED_DOOR);
                map.setBlocked(center.x, bossRoom.y2, true);
                game.entities.add(new bossdoor_1.BossDoor(game, center.x, bossRoom.y2, boss));
            }
            // Create stairs room
            this.createRoom(map, stairsRoom);
            // Create stairs
            const stairsLoc = stairsRoom.getCenter();
            this.createHTunnel(map, center.x, stairsLoc.x, stairsLoc.y);
            map.setTile(stairsLoc.x, stairsLoc.y, 0, TILE_STAIRS_DOWN);
            dungeon.exit = new portal_1.Portal(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE);
            game.entities.add(dungeon.exit);
            // Create door to stairs room
            if (center.x > stairsLoc.x) {
                map.setTile(bossRoom.x1, center.y, 0, TILE_CLOSED_DOOR);
                map.setBlocked(bossRoom.x1, center.y, true);
                game.entities.add(new lockeddoor_1.LockedDoor(game, bossRoom.x1, center.y, keyId));
            }
            else {
                map.setTile(bossRoom.x2, center.y, 0, TILE_CLOSED_DOOR);
                map.setBlocked(bossRoom.x2, center.y, true);
                game.entities.add(new lockeddoor_1.LockedDoor(game, bossRoom.x2, center.y, keyId));
            }
        }
        // Place obstacles after all rooms have been connected
        for (let i = 0; i < dungeon.rooms.length; i++) {
            this.placeObstacles(dungeon.rooms[i]);
        }
        // Initial FOV
        game.resetViewport();
        game.recomputeFov();
    }
    clearMap(map, rect, tile, blocked, blockedSight) {
        for (let y = rect.y1; y < rect.y2; y++) {
            for (let x = rect.x1; x < rect.x2; x++) {
                map.setTile(x, y, 0, tile);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, blocked, blockedSight);
                for (let z = 1; z < 4; z++) {
                    map.setTile(z, x, y, TILE_EMPTY);
                    map.setAnimated(x, y, z, false);
                }
            }
        }
    }
    createRoom(map, room) {
        for (let y = room.y1 + 1; y < room.y2; y++) {
            for (let x = room.x1 + 1; x < room.x2; x++) {
                map.setTile(x, y, 0, TILE_FLOOR);
                map.setAnimated(x, y, 0, false);
                map.setBlocked(x, y, false);
            }
        }
    }
    createHTunnel(map, x1, x2, y) {
        for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
            const existing = map.getTile(x, y, 0);
            if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
                continue;
            }
            if (existing === TILE_WATER) {
                map.setTile(x, y, 0, TILE_BRIDGE);
            }
            else {
                map.setTile(x, y, 0, TILE_FLOOR);
            }
            map.setAnimated(x, y, 0, false);
            map.setBlocked(x, y, false);
        }
    }
    createVTunnel(map, y1, y2, x) {
        for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
            const existing = map.getTile(x, y, 0);
            if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
                continue;
            }
            if (existing === TILE_WATER) {
                map.setTile(x, y, 0, TILE_BRIDGE);
            }
            else {
                map.setTile(x, y, 0, TILE_FLOOR);
            }
            map.setAnimated(x, y, 0, false);
            map.setBlocked(x, y, false);
        }
    }
    placeMonsters(room, dungeonLevel) {
        const game = this.game;
        const rng = game.rng;
        // Choose random number of monsters
        const numMonsters = rng.nextRange(0, MAX_ROOM_MONSTERS);
        for (let i = 0; i < numMonsters; i++) {
            // Choose random spot for this monster
            const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
            const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
            if (game.getEntityAt(x, y)) {
                // Something already at this location
                continue;
            }
            const roll = rng.nextRange(0, 100);
            const level = dungeonLevel * 2 + rng.nextRange(1, 3);
            let monster = null;
            if (roll < 40) {
                monster = new spider_1.Spider(game, x, y, level);
            }
            else if (roll < 80) {
                monster = new bat_1.Bat(game, x, y, level);
            }
            else {
                monster = new troll_1.Troll(game, x, y, level);
            }
            game.entities.add(monster);
        }
    }
    placeItems(room) {
        const game = this.game;
        const rng = game.rng;
        // Choose random number of items
        const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);
        for (let i = 0; i < numItems; i++) {
            // Choose random spot for this item
            const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
            const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
            if (game.getEntityAt(x, y)) {
                // Something already at this location
                continue;
            }
            const dice = rng.nextRange(0, 100);
            let item = null;
            if (dice < 50) {
                // Create a healing potion (50% chance)
                item = new healthpotion_1.HealthPotion(game, x, y);
            }
            else if (dice < 50 + 20) {
                // Create a lightning bolt scroll (20% chance)
                item = new scroll_1.Scroll(game, x, y, new lightning_1.LightningAbility());
            }
            else if (dice < 50 + 20 + 15) {
                // Create a fireball scroll (15% chance)
                item = new scroll_1.Scroll(game, x, y, new fireball_1.FireballAbility());
            }
            else {
                // Create a confuse scroll (15% chance)
                item = new scroll_1.Scroll(game, x, y, new confuse_1.ConfuseAbility());
            }
            game.entities.add(item);
        }
    }
    placeObstacles(room) {
        const game = this.game;
        const rng = game.rng;
        const map = game.tileMap;
        // Choose random number of obstacles
        const numItems = rng.nextRange(0, MAX_ROOM_OBSTACLES + 1);
        for (let i = 0; i < numItems; i++) {
            // Choose random spot for this item
            const x = rng.nextRange(room.x1 + 2, room.x2 - 3);
            const y = rng.nextRange(room.y1 + 2, room.y2 - 3);
            if (game.getEntityAt(x, y)) {
                // Something already at this location
                continue;
            }
            const dice = rng.nextRange(0, 100);
            if (dice < 80) {
                // Create a barrel
                map.setTile(x, y, 0, TILE_FLOOR);
                map.setTile(x, y, 1, TILE_BARREL);
            }
            else {
                // Create a statue
                map.setTile(x, y, 0, TILE_FLOOR);
                map.setTile(x, y, 1, TILE_STATUE);
            }
            map.setBlocked(x, y, true, false);
        }
    }
    createRiver(map, bounds, length) {
        const rng = this.game.rng;
        const water = bounds.getCenter();
        for (let i = 0; i < length; i++) {
            map.setTile(water.x, water.y, 0, TILE_WATER);
            map.setTile(water.x - 1, water.y, 0, TILE_WATER);
            map.setTile(water.x + 1, water.y, 0, TILE_WATER);
            map.setTile(water.x, water.y - 1, 0, TILE_WATER);
            map.setTile(water.x, water.y + 1, 0, TILE_WATER);
            map.setAnimated(water.x, water.y, 0, true);
            map.setAnimated(water.x - 1, water.y, 0, true);
            map.setAnimated(water.x + 1, water.y, 0, true);
            map.setAnimated(water.x, water.y - 1, 0, true);
            map.setAnimated(water.x, water.y + 1, 0, true);
            map.setBlocked(water.x, water.y, true, false);
            map.setBlocked(water.x - 1, water.y, true, false);
            map.setBlocked(water.x + 1, water.y, true, false);
            map.setBlocked(water.x, water.y - 1, true, false);
            map.setBlocked(water.x, water.y + 1, true, false);
            water.x += rng.nextRange(-1, 2);
            water.y += rng.nextRange(-1, 2);
            if (!bounds.contains(water)) {
                return;
            }
        }
    }
    touchUp(map) {
        const game = this.game;
        const rng = game.rng;
        // Touch up walls / half walls
        for (let y = 0; y < MAP_HEIGHT; y++) {
            for (let x = 0; x < MAP_WIDTH; x++) {
                const t1 = map.getTile(x, y, 0);
                const t2 = map.getTile(x, y + 1, 0);
                const t3 = map.getTile(x - 1, y, 0);
                const t4 = map.getTile(x + 1, y, 0);
                const t5 = map.getTile(x, y - 1, 0);
                if (t1 === TILE_FLOOR && t3 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(x, y, 1, TILE_COBWEB_NORTHWEST);
                }
                if (t1 === TILE_FLOOR && t4 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(x, y, 1, TILE_COBWEB_NORTHEAST);
                }
                if (t1 === TILE_FLOOR && t3 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(x, y, 1, TILE_COBWEB_SOUTHWEST);
                }
                if (t1 === TILE_FLOOR && t4 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(x, y, 1, TILE_COBWEB_SOUTHEAST);
                }
                if (t1 === TILE_CLOSED_DOOR && t2 !== TILE_WALL) {
                    map.setTile(x, y + 1, 2, TILE_SHADOW);
                }
                if (t1 === TILE_WALL && t2 !== TILE_WALL && t2 !== TILE_CLOSED_DOOR) {
                    const r = rng.nextRange(0, 20);
                    if (r === 0) {
                        map.setTile(x, y, 0, TILE_HALF_WALL2);
                    }
                    else if (r === 1) {
                        map.setTile(x, y, 0, TILE_HALF_WALL3);
                    }
                    else {
                        map.setTile(x, y, 0, TILE_HALF_WALL);
                    }
                    map.setTile(x, y + 1, 2, TILE_SHADOW);
                }
                if (t1 !== TILE_WATER && t2 === TILE_WATER) {
                    map.setTile(x, y + 1, 2, TILE_SHADOW);
                }
                const nearBridge = t2 === TILE_BRIDGE || t3 === TILE_BRIDGE || t4 === TILE_BRIDGE || t5 === TILE_BRIDGE;
                if (t1 === TILE_WATER && nearBridge && rng.nextRange(0, 20) === 1) {
                    game.entities.add(new shark_1.Shark(game, x, y));
                }
            }
        }
    }
}
exports.MapGenerator = MapGenerator;


/***/ }),

/***/ "./src/quests/quest.ts":
/*!*****************************!*\
  !*** ./src/quests/quest.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Quest {
    constructor(description, xpGain) {
        this.description = description;
        this.xpGain = xpGain;
    }
}
exports.Quest = Quest;


/***/ }),

/***/ "./src/racemenu.ts":
/*!*************************!*\
  !*** ./src/racemenu.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const menuitemrenderer_1 = __webpack_require__(/*! ./gui/menuitemrenderer */ "./src/gui/menuitemrenderer.ts");
const dwarf_1 = __webpack_require__(/*! ./races/dwarf */ "./src/races/dwarf.ts");
const elf_1 = __webpack_require__(/*! ./races/elf */ "./src/races/elf.ts");
const human_1 = __webpack_require__(/*! ./races/human */ "./src/races/human.ts");
const orc_1 = __webpack_require__(/*! ./races/orc */ "./src/races/orc.ts");
const undead_1 = __webpack_require__(/*! ./races/undead */ "./src/races/undead.ts");
const RACES = [new human_1.Human(), new dwarf_1.Dwarf(), new elf_1.Elf(), new orc_1.Orc(), new undead_1.Undead()];
class RaceMenu extends wglt_1.AppState {
    constructor(app) {
        super(app);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
        this.gui.add(new wglt_1.MessagePanel(new wglt_1.Rect(2, 2, 256, 10), new wglt_1.Message('Choose your race', wglt_1.Colors.WHITE)));
        const selectDialog = new wglt_1.ComplexSelectDialog(new wglt_1.Rect(2, 15, 246, 204), RACES);
        selectDialog.renderer = new menuitemrenderer_1.MenuItemRenderer(60, 40);
        selectDialog.onSelect = (choice) => {
            this.app.playerRace = choice;
            window.location.hash = 'chooseclass';
        };
        selectDialog.onCancel = () => {
            window.history.back();
        };
        this.gui.add(selectDialog);
    }
}
exports.RaceMenu = RaceMenu;


/***/ }),

/***/ "./src/races/characterrace.ts":
/*!************************************!*\
  !*** ./src/races/characterrace.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CharacterRace {
    constructor(name, icon, description, details) {
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.details = details;
    }
}
exports.CharacterRace = CharacterRace;


/***/ }),

/***/ "./src/races/dwarf.ts":
/*!****************************!*\
  !*** ./src/races/dwarf.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const characterrace_1 = __webpack_require__(/*! ./characterrace */ "./src/races/characterrace.ts");
const NAME = 'Dwarf';
const ICON = new wglt_1.Sprite(510, 730, 34, 34, undefined, undefined, undefined, 0x4080C0FF);
const DESC = 'Bold and hardy, skilled warriors';
const DETAILS = [
    new wglt_1.Message('+4 Constitution, +2 Strength', wglt_1.Colors.LIGHT_GREEN), new wglt_1.Message('Critical strike bonus', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Stoneform - Removes all curses', wglt_1.Colors.YELLOW)
];
class Dwarf extends characterrace_1.CharacterRace {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        player.race = this;
        player.constitution += 4;
        player.strength += 2;
    }
}
exports.Dwarf = Dwarf;


/***/ }),

/***/ "./src/races/elf.ts":
/*!**************************!*\
  !*** ./src/races/elf.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const characterrace_1 = __webpack_require__(/*! ./characterrace */ "./src/races/characterrace.ts");
const NAME = 'Elf';
const ICON = new wglt_1.Sprite(238, 730, 34, 34, undefined, undefined, undefined, 0xFF8080FF);
const DESC = 'Magical people of otherworldly grace';
const DETAILS = [
    new wglt_1.Message('+3 Dexterity, +3 Intelligence', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Shadowmeld - slip into the shadows', wglt_1.Colors.YELLOW)
];
class Elf extends characterrace_1.CharacterRace {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        player.race = this;
        player.dexterity += 3;
        player.intelligence += 3;
    }
}
exports.Elf = Elf;


/***/ }),

/***/ "./src/races/human.ts":
/*!****************************!*\
  !*** ./src/races/human.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const characterrace_1 = __webpack_require__(/*! ./characterrace */ "./src/races/characterrace.ts");
const NAME = 'Human';
const ICON = new wglt_1.Sprite(0, 730, 34, 34, undefined, undefined, undefined, 0xddae62FF);
const DESC = 'Young race with lust for power';
const DETAILS = [
    new wglt_1.Message('+1 all attributes', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Reduced stun times', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Hustle - when active, double actions', wglt_1.Colors.YELLOW),
];
class Human extends characterrace_1.CharacterRace {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        player.race = this;
        player.constitution++;
        player.strength++;
        player.dexterity++;
        player.intelligence++;
    }
}
exports.Human = Human;


/***/ }),

/***/ "./src/races/orc.ts":
/*!**************************!*\
  !*** ./src/races/orc.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const characterrace_1 = __webpack_require__(/*! ./characterrace */ "./src/races/characterrace.ts");
const NAME = 'Orc';
const ICON = new wglt_1.Sprite(442, 730, 34, 34, undefined, undefined, undefined, 0x20B020FF);
const DESC = 'Noble savages of shamanistic roots';
const DETAILS = [
    new wglt_1.Message('+2 Constitution, +4 Strength', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('War Shout - Boost all stats by +1 for 5 turns', wglt_1.Colors.YELLOW)
];
class Orc extends characterrace_1.CharacterRace {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        player.race = this;
        player.constitution += 2;
        player.strength += 4;
    }
}
exports.Orc = Orc;


/***/ }),

/***/ "./src/races/undead.ts":
/*!*****************************!*\
  !*** ./src/races/undead.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const characterrace_1 = __webpack_require__(/*! ./characterrace */ "./src/races/characterrace.ts");
const NAME = 'Undead';
const ICON = new wglt_1.Sprite(578, 730, 34, 34, undefined, undefined, undefined, 0xD040D0FF);
const DESC = 'Cursed to wander for eternity';
const DETAILS = [
    new wglt_1.Message('+2 Dexterity, +4 Intelligence', wglt_1.Colors.LIGHT_GREEN),
    new wglt_1.Message('Cannibalize - 10% of damage returns as health', wglt_1.Colors.YELLOW)
];
class Undead extends characterrace_1.CharacterRace {
    constructor() {
        super(NAME, ICON, DESC, DETAILS);
    }
    initPlayer(player) {
        player.race = this;
        player.dexterity += 2;
        player.intelligence += 4;
    }
}
exports.Undead = Undead;


/***/ }),

/***/ "./src/seedmenu.ts":
/*!*************************!*\
  !*** ./src/seedmenu.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const menuitemrenderer_1 = __webpack_require__(/*! ./gui/menuitemrenderer */ "./src/gui/menuitemrenderer.ts");
class Seed {
    constructor(number, name, description) {
        this.number = number;
        this.name = name;
        this.description = description || '';
    }
}
class SeedMenu extends wglt_1.AppState {
    constructor(app) {
        super(app);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
        const seeds = [
            new Seed(1, 'One'),
            new Seed(2, 'Two'),
            new Seed(3, 'Three'),
            new Seed(4, 'Four'),
            new Seed(5, 'Five'),
            new Seed(Math.round(Math.random() * 1000.0), 'Random'),
        ];
        this.gui.add(new wglt_1.MessagePanel(new wglt_1.Rect(2, 2, 256, 10), new wglt_1.Message('Choose your seed', wglt_1.Colors.WHITE)));
        const selectDialog = new wglt_1.ComplexSelectDialog(new wglt_1.Rect(2, 15, 246, 204), seeds);
        selectDialog.renderer = new menuitemrenderer_1.MenuItemRenderer(15, 15);
        selectDialog.onSelect = (choice) => {
            console.log('set seed', choice.number);
            this.app.seed = choice.number;
            window.location.hash = 'chooserace';
        };
        selectDialog.onCancel = () => {
            window.history.back();
        };
        this.gui.add(selectDialog);
    }
}
exports.SeedMenu = SeedMenu;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map