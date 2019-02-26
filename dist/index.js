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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=27)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Vec2=class{constructor(t,e){this.x=t,this.y=e}add(t){this.x+=t.x,this.y+=t.y}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(15);e.Panel=class{constructor(t){this.gui=null,this.rect=t,this.children=new s.XArray,this.modal=!1,this.visible=!0}setGui(t){if(!this.gui){this.gui=t;for(let e=0;e<this.children.length;e++)this.children.get(e).setGui(t)}}add(t){t.parent=this,t.setGui(this.gui),this.children.add(t)}remove(t){this.children.remove(t)}move(t){this.parent&&this.parent.remove(this),t.add(this)}getPanelAt(t){for(let e=this.children.length-1;e>=0;e--){const i=this.children.get(e);if(!i.visible)continue;if(i.isDragging())continue;const s=i.getPanelAt(t);if(s)return s}if(this.rect.contains(t))return this}drawContents(){this.drawChildren()}drawChildren(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);e.visible&&e.drawContents()}}handleInput(){return this.handleChildrenInput()}handleChildrenInput(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(e.visible&&(e.handleInput()||e.modal))return!0}return!1}isDragging(){return this.gui&&this.gui.dragElement===this}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0);class r extends s.Vec2{constructor(t,e,i,s){super(t,e),this.width=i,this.height=s}get x1(){return this.x}get y1(){return this.y}get x2(){return this.x+this.width}get y2(){return this.y+this.height}get left(){return this.x}get top(){return this.y}clone(){return new r(this.x,this.y,this.width,this.height)}getCenter(){return new s.Vec2(this.x+this.width/2|0,this.y+this.height/2|0)}intersects(t){return this.x<=t.x2&&this.x2>=t.x&&this.y<=t.y2&&this.y2>=t.y}contains(t){return t.x>=this.x&&t.x<=this.x2&&t.y>=this.y&&t.y<=this.y2}}e.Rect=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Effect=class{constructor(t,e){this.countdown=t,this.blocking=e}isDone(){return this.countdown<=0}update(){this.countdown--}draw(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(16);class r{}r.BLACK=s.fromRgb(0,0,0),r.WHITE=s.fromRgb(255,255,255),r.GRAY=s.fromRgb(128,128,128),r.LIGHT_GRAY=s.fromRgb(170,170,170),r.DARK_GRAY=s.fromRgb(85,85,85),r.YELLOW=s.fromRgb(255,255,85),r.BROWN=s.fromRgb(170,85,0),r.RED=s.fromRgb(255,0,0),r.LIGHT_RED=s.fromRgb(255,85,85),r.DARK_RED=s.fromRgb(170,0,0),r.LIGHT_GREEN=s.fromRgb(85,255,85),r.DARK_GREEN=s.fromRgb(0,170,0),r.LIGHT_CYAN=s.fromRgb(85,255,255),r.DARK_CYAN=s.fromRgb(0,170,170),r.LIGHT_BLUE=s.fromRgb(85,85,255),r.DARK_BLUE=s.fromRgb(0,0,170),r.LIGHT_MAGENTA=s.fromRgb(255,85,255),r.DARK_MAGENTA=s.fromRgb(170,0,170),r.ORANGE=s.fromRgb(255,136,0),e.Colors=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{}s.VK_CANCEL=3,s.VK_HELP=6,s.VK_BACK_SPACE=8,s.VK_TAB=9,s.VK_CLEAR=12,s.VK_ENTER=13,s.VK_SHIFT=16,s.VK_CONTROL=17,s.VK_ALT=18,s.VK_PAUSE=19,s.VK_CAPS_LOCK=20,s.VK_ESCAPE=27,s.VK_SPACE=32,s.VK_PAGE_UP=33,s.VK_PAGE_DOWN=34,s.VK_END=35,s.VK_HOME=36,s.VK_LEFT=37,s.VK_UP=38,s.VK_RIGHT=39,s.VK_DOWN=40,s.VK_PRINTSCREEN=44,s.VK_INSERT=45,s.VK_DELETE=46,s.VK_0=48,s.VK_1=49,s.VK_2=50,s.VK_3=51,s.VK_4=52,s.VK_5=53,s.VK_6=54,s.VK_7=55,s.VK_8=56,s.VK_9=57,s.VK_COLON=58,s.VK_SEMICOLON=59,s.VK_LESS_THAN=60,s.VK_EQUALS=61,s.VK_GREATER_THAN=62,s.VK_QUESTION_MARK=63,s.VK_AT=64,s.VK_A=65,s.VK_B=66,s.VK_C=67,s.VK_D=68,s.VK_E=69,s.VK_F=70,s.VK_G=71,s.VK_H=72,s.VK_I=73,s.VK_J=74,s.VK_K=75,s.VK_L=76,s.VK_M=77,s.VK_N=78,s.VK_O=79,s.VK_P=80,s.VK_Q=81,s.VK_R=82,s.VK_S=83,s.VK_T=84,s.VK_U=85,s.VK_V=86,s.VK_W=87,s.VK_X=88,s.VK_Y=89,s.VK_Z=90,s.VK_CONTEXT_MENU=93,s.VK_NUMPAD0=96,s.VK_NUMPAD1=97,s.VK_NUMPAD2=98,s.VK_NUMPAD3=99,s.VK_NUMPAD4=100,s.VK_NUMPAD5=101,s.VK_NUMPAD6=102,s.VK_NUMPAD7=103,s.VK_NUMPAD8=104,s.VK_NUMPAD9=105,s.VK_MULTIPLY=106,s.VK_ADD=107,s.VK_SEPARATOR=108,s.VK_SUBTRACT=109,s.VK_DECIMAL=110,s.VK_DIVIDE=111,s.VK_F1=112,s.VK_F2=113,s.VK_F3=114,s.VK_F4=115,s.VK_F5=116,s.VK_F6=117,s.VK_F7=118,s.VK_F8=119,s.VK_F9=120,s.VK_F10=121,s.VK_F11=122,s.VK_F12=123,s.VK_F13=124,s.VK_F14=125,s.VK_F15=126,s.VK_F16=127,s.VK_F17=128,s.VK_F18=129,s.VK_F19=130,s.VK_F20=131,s.VK_F21=132,s.VK_F22=133,s.VK_F23=134,s.VK_F24=135,s.VK_NUM_LOCK=144,s.VK_SCROLL_LOCK=145,s.VK_CIRCUMFLEX=160,s.VK_EXCLAMATION=161,s.VK_DOUBLE_QUOTE=162,s.VK_HASH=163,s.VK_DOLLAR=164,s.VK_PERCENT=165,s.VK_AMPERSAND=166,s.VK_UNDERSCORE=167,s.VK_OPEN_PAREN=168,s.VK_CLOSE_PAREN=169,s.VK_ASTERISK=170,s.VK_PLUS=171,s.VK_PIPE=172,s.VK_HYPHEN_MINUS=173,s.VK_OPEN_CURLY_BRACKET=174,s.VK_CLOSE_CURLY_BRACKET=175,s.VK_TILDE=176,s.VK_COMMA=188,s.VK_PERIOD=190,s.VK_SLASH=191,s.VK_BACK_QUOTE=192,s.VK_OPEN_BRACKET=219,s.VK_BACK_SLASH=220,s.VK_CLOSE_BRACKET=221,s.VK_QUOTE=222,s.VK_META=224,s.VK_ALTGR=225,s.VK_WIN=91,s.VK_KANA=21,s.VK_HANGUL=21,s.VK_EISU=22,s.VK_JUNJA=23,s.VK_FINAL=24,s.VK_HANJA=25,s.VK_KANJI=25,s.VK_CONVERT=28,s.VK_NONCONVERT=29,s.VK_ACCEPT=30,s.VK_MODECHANGE=31,s.VK_SELECT=41,s.VK_PRINT=42,s.VK_EXECUTE=43,s.VK_SLEEP=95,e.Keys=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.Dialog=class extends s.Panel{constructor(t,e){super(t),this.title=e,this.closeButton=!1}drawContents(){this.gui&&this.gui.renderer.draw(this.gui.app,this)}handleInput(){return!1}close(){this.gui&&this.gui.remove(this)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Input=class{constructor(){this.down=!1,this.downCount=0,this.upCount=0}update(){this.down?(this.downCount++,this.upCount=0):(this.downCount=0,this.upCount++)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AI=class{constructor(t){this.entity=t,this.activatedCount=-1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(7),r=256;e.Keyboard=class{constructor(t){this.keys=new Array(r);for(let t=0;t<r;t++)this.keys[t]=new s.Input;t.addEventListener("keydown",t=>this.setKey(t,!0)),t.addEventListener("keyup",t=>this.setKey(t,!1))}setKey(t,e){t.stopPropagation(),t.preventDefault();const i=t.keyCode;i>=0&&i<r&&(this.keys[i].down=e)}update(){for(let t=0;t<r;t++)this.keys[t].down?this.keys[t].downCount++:this.keys[t].downCount=0}getKey(t){return t>=0&&t<r?this.keys[t]:null}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(7),r=i(2),n=i(0);e.Mouse=class extends s.Input{constructor(t){super(),this.app=t,this.prev=new n.Vec2(0,0),this.start=new n.Vec2(0,0),this.x=0,this.y=0,this.dx=0,this.dy=0,this.dragDistance=0;const e=t.canvas,i=this.handleEvent.bind(this);e.addEventListener("mousedown",i),e.addEventListener("mouseup",i),e.addEventListener("mousemove",i),e.addEventListener("contextmenu",i);const s=this.handleTouchEvent.bind(this);e.addEventListener("touchstart",s),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("touchmove",s)}handleTouchEvent(t){if(t.stopPropagation(),t.preventDefault(),t.touches.length>0){const e=t.touches[0];this.updatePosition(e.clientX,e.clientY),this.down||(this.down=!0,this.prev.x=this.x,this.prev.y=this.y,this.start.x=this.x,this.start.y=this.y,this.dx=0,this.dy=0,this.dragDistance=0)}else this.down=!1}handleEvent(t){t.stopPropagation(),t.preventDefault(),this.updatePosition(t.clientX,t.clientY),"mousedown"===t.type&&(this.down=!0,this.start.x=this.x,this.start.y=this.y,this.dragDistance=0,this.app.canvas.focus()),"mouseup"===t.type&&(this.down=!1)}updatePosition(t,e){let i=this.app.canvas.getBoundingClientRect();const s=this.app.size.width/this.app.size.height,n=i.width/i.height;if(n-s>.01){const t=s*i.height,e=i.width-t;i=new r.Rect(Math.floor(e/2),0,t,i.height)}if(n-s<-.01){const t=i.width/s,e=i.height-t;i=new r.Rect(0,Math.floor(e/2),i.width,t)}this.x=this.app.size.width*(t-i.left)/i.width|0,this.y=this.app.size.height*(e-i.top)/i.height|0}update(){super.update(),this.dx=this.x-this.prev.x,this.dy=this.y-this.prev.y,this.prev.x=this.x,this.prev.y=this.y,this.down&&(this.dragDistance+=Math.abs(this.dx)+Math.abs(this.dy))}isClicked(){return 1===this.upCount&&this.dragDistance<4}isDragging(){return this.down&&this.dragDistance>4}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function s(t,e,i){const s=t.createShader(e);return t.shaderSource(s,i),t.compileShader(s),s}e.ExtendedTexture=class extends WebGLTexture{constructor(){super(),this.loaded=!1,this.width=0,this.height=0}},e.initShaderProgram=function(t,e,i){const r=s(t,t.VERTEX_SHADER,e),n=s(t,t.FRAGMENT_SHADER,i),h=t.createProgram();return t.attachShader(h,r),t.attachShader(h,n),t.linkProgram(h),h},e.loadShader=s,e.createTexture=function(t,e){const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const s=t.RGBA,r=t.RGBA,n=t.UNSIGNED_BYTE,h=new Uint8Array([0,0,0,255]);t.texImage2D(t.TEXTURE_2D,0,s,1,1,0,r,n,h);const o=new Image;return o.onload=(()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,s,r,n,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.generateMipmap(t.TEXTURE_2D),i.loaded=!0,i.width=o.width,i.height=o.height}),o.src=e,i}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(13);e.AppState=class{constructor(t){this.app=t,this.gui=new s.GUI(t)}update(){this.gui.handleInput(),this.gui.draw()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(14),r=i(1),n=i(2),h=i(0);e.GUI=class{constructor(t){this.app=t,this.renderer=new s.DialogRenderer(new n.Rect(0,0,1,1)),this.rootPanel=new r.Panel(t.size),this.rootPanel.gui=this}add(t){this.rootPanel.add(t)}remove(t){this.rootPanel.remove(t)}handleInput(){return this.dragElement&&this.dragOffset?(this.updateDragging(),!0):this.rootPanel.handleInput()}draw(){this.rootPanel.drawContents(),this.dragElement&&this.dragElement.drawContents()}startDragging(t){const e=this.app.mouse;this.dragElement=t,this.dragOffset=new h.Vec2(e.start.x-t.rect.x,e.start.y-t.rect.y)}updateDragging(){const t=this.app.mouse,e=this.dragElement,i=this.dragOffset;if(t.down)e.rect.x=t.x-i.x,e.rect.y=t.y-i.y;else{const s=this.rootPanel.getPanelAt(t);s&&this.tryDrop(e,s)?(e.rect.x=s.rect.x,e.rect.y=s.rect.y,e.move(s)):(e.rect.x=t.start.x-i.x,e.rect.y=t.start.y-i.y),this.dragElement=void 0,this.dragOffset=void 0}}tryDrop(t,e){return e!==this.rootPanel&&!!this.onDrop&&this.onDrop(t,e)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DialogRenderer=class{constructor(t,e){this.baseRect=t,this.closeButtonRect=e}draw(t,e){const i=this.baseRect.x,s=this.baseRect.y,r=this.baseRect.width/3|0,n=this.baseRect.height/3|0,h=i+r,o=s+n,a=i+2*r,c=s+2*r,d=e.rect.x,l=e.rect.y,u=e.rect.width-2*r,p=e.rect.height-2*n,g=d+r,f=l+n,y=g+u,x=f+p;if(t.drawImage(d,l,i,s,r,n,void 0,r,n),t.drawImage(g,l,h,s,r,n,void 0,u,n),t.drawImage(y,l,a,s,r,n,void 0,r,n),t.drawImage(d,f,i,o,r,n,void 0,r,p),t.drawImage(g,f,h,o,r,n,void 0,u,p),t.drawImage(y,f,a,o,r,n,void 0,r,p),t.drawImage(d,x,i,c,r,n,void 0,r,n),t.drawImage(g,x,h,c,r,n,void 0,u,n),t.drawImage(y,x,a,c,r,n,void 0,r,n),this.closeButtonRect&&e.closeButton){const i=this.closeButtonRect.width,s=this.closeButtonRect.height,r=e.rect.x2-i,n=e.rect.y,h=this.closeButtonRect.x,o=this.closeButtonRect.y;t.drawImage(r,n,h,o,i,s)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.XArray=class{constructor(){this.elements=[]}get length(){return this.elements.length}get(t){return this.elements[t]}add(t){if(this.elements.push(t),this.listeners)for(let e=0;e<this.listeners.length;e++)this.listeners[e].onAdd(this,t)}remove(t){const e=this.elements.indexOf(t);if(e>=0&&(this.elements.splice(e,1),this.listeners))for(let e=0;e<this.listeners.length;e++)this.listeners[e].onRemove(this,t)}contains(t){return this.elements.indexOf(t)>=0}addListener(t){this.listeners||(this.listeners=[]),this.listeners.push(t)}}},function(t,e,i){"use strict";function s(t,e,i,s){return void 0===s&&(s=255),(t<<24)+(e<<16)+(i<<8)+s}Object.defineProperty(e,"__esModule",{value:!0}),e.fromRgb=s,e.fromHsv=function(t,e,i,r){const n=6*t|0,h=6*t-n,o=i*(1-e),a=i*(1-h*e),c=i*(1-(1-h)*e);let d,l,u;switch(n%6){case 0:d=i,l=c,u=o;break;case 1:d=a,l=i,u=o;break;case 2:d=o,l=i,u=c;break;case 3:d=o,l=a,u=i;break;case 4:d=c,l=o,u=i;break;case 5:d=i,l=o,u=a;break;default:d=0,l=0,u=0}return void 0===r&&(r=1),s(255*d|0,255*l|0,255*u|0,255*r|0)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=12;e.BumpEffect=class extends s.Effect{constructor(t,e){super(r,!0),this.entity=t,this.dx=e.x-t.x,this.dy=e.y-t.y}update(){const t=r-this.countdown;t>=0&&t<4&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),t>=4&&t<8&&(this.entity.offset.x-=this.dx,this.entity.offset.y-=this.dy),super.update()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(3);e.FloatingTextEffect=class extends r.Effect{constructor(t,e,i,r){super(40,!1),this.str=t,this.pixelX=e,this.pixelY=i,this.color=r||s.Colors.WHITE}draw(t){const e=40-this.countdown,i=this.pixelX-t.viewport.x,s=this.pixelY-t.viewport.y-Math.min(4,Math.floor(e/2));t.app.drawCenteredString(this.str,i,s,this.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.SlideEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.entity=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),0===this.countdown&&(this.entity.x+=this.entity.offset.x/this.entity.game.tileSize.width,this.entity.y+=this.entity.offset.y/this.entity.game.tileSize.height,this.entity.offset.x=0,this.entity.offset.y=0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=[0,-1,1,0],r=[-1,0,0,1],n=[1,1,1,1];function h(t){let e=null,i=-1,s=1/0;for(let r=0;r<t.length;r++){const n=t[r];n.g!==1/0&&n.g+n.h<s&&(e=n,i=r,s=n.g+n.h)}return t.splice(i,1),e}function o(t){const e=[];let i=t;for(;i;)e.push(i),i=i.prev;return e.reverse(),e}e.computePath=function(t,e,i,a){!function(t,e){for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++){const r=t.grid[i][s];r.g=1/0,r.h=Math.min(Math.abs(s-e.x),Math.abs(i-e.y)),r.prev=null}}(t,i);const c=t.grid[e.y][e.x];c.g=0;const d=[c];for(;d.length>0;){const e=h(d);if(e.x===i.x&&e.y===i.y)return o(e);for(let i=0;i<s.length;i++){const h=e.x+s[i],o=e.y+r[i];if(h>=0&&h<t.width&&o>=0&&o<t.height){const s=t.grid[o][h],r=e.g+n[i];r<s.g&&r<=a&&!t.grid[o][h].blocked&&(s.g=r,s.prev=e,d.push(s))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),r=30;class n extends s.Rect{constructor(t,e,i,s,n,h,o,a){super(t,e,i,s),this.frames=n||1,this.loop=!!h,this.ticksPerFrame=o||r,this.colorOverride=a,this.animIndex=0,this.animDelay=0}draw(t,e,i,s){let r=this.animIndex;this.loop&&(r=(n.globalAnimIndex/this.ticksPerFrame|0)%this.frames);const h=this.x+r*this.width,o=this.y,a=s||this.colorOverride;t.drawImage(e,i,h,o,this.width,this.height,a),this.animDelay++,this.animDelay>this.ticksPerFrame&&(this.animDelay=0,this.animIndex++,this.animIndex>=this.frames&&(this.loop?this.animIndex=0:this.animIndex=this.frames-1))}static updateGlobalAnimations(){n.globalAnimIndex++}}n.globalAnimIndex=0,e.Sprite=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RNG=class{constructor(t){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||1}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,e){const i=e-t;return t+(this.nextInt()/this.m*i|0)}chooseIndex(t){const e=t.reduce((t,e)=>t+e),i=this.nextRange(1,e+1);let s=0;for(let e=0;e<t.length;e++)if(i<=(s+=t[e]))return e;return t.length-1}chooseKey(t){const e=[],i=[];for(const s in t)t.hasOwnProperty(s)&&(e.push(s),i.push(t[s]));return e[this.chooseIndex(i)]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.Button=class extends s.Panel{constructor(t,e,i,s){super(t),this.sprite=e,this.shortcutKey=i,this.onClick=s}drawContents(){if(!this.gui)return;const t=this.sprite,e=this.rect,i=(e.width-t.width)/2|0,s=(e.height-t.height)/2|0;t.draw(this.gui.app,e.x+i,e.y+s)}handleInput(){if(!this.gui)return!1;const t=this.gui.app,e=t.mouse;return this.rect.contains(e)&&this.rect.contains(e.start)&&e.isDragging()?(this.gui.startDragging(this),!0):this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked()?(this.click(),!0):e.down&&this.rect.contains(e)}click(){this.onClick&&this.onClick()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.ButtonSlot=class extends s.Panel{constructor(t,e){super(t),this.shortcutKey=e}get button(){return this.children.length>0?this.children.get(0):void 0}drawContents(){if(!this.gui)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;e&&this.gui.app.drawImage(t.x,t.y,e.x,e.y,t.width,t.height);const i=this.button;i&&!i.isDragging()&&(i.rect.x=this.rect.x,i.rect.y=this.rect.y,this.drawChildren()),this.shortcutKey&&this.gui.app.drawString(String.fromCharCode(this.shortcutKey),t.x2-7,t.y+3)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;const t=this.gui.app,e=t.mouse,i=this.button;return i&&(this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked())?(i.click(),!0):e.down&&this.rect.contains(e)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(23);e.EntityButton=class extends s.Button{constructor(t,e){super(t,e.sprite),this.entities=[e]}click(){this.entities.length>0&&this.entities[0].use()}drawContents(){if(this.gui&&(super.drawContents(),this.entities.length>1)){const t=this.rect;this.gui.app.drawString(this.entities.length.toString(),t.x2-7,t.y2-10)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Message=class{constructor(t,e){this.text=t,this.color=e}}},function(t,e,i){"use strict";function s(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),s(i(28)),s(i(12)),s(i(16)),s(i(4)),s(i(31)),s(i(32)),s(i(8)),s(i(34)),s(i(35)),s(i(17)),s(i(3)),s(i(18)),s(i(36)),s(i(19)),s(i(13)),s(i(23)),s(i(24)),s(i(37)),s(i(6)),s(i(14)),s(i(25)),s(i(39)),s(i(40)),s(i(1)),s(i(41)),s(i(42)),s(i(43)),s(i(7)),s(i(9)),s(i(5)),s(i(26)),s(i(10)),s(i(20)),s(i(0)),s(i(2)),s(i(22)),s(i(21)),s(i(44))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(29),r=i(9),n=i(10),h=i(2),o=i(30),a=i(0),c=400,d=224,l=!1,u=2;e.App=class{constructor(t){const e=t.canvas;if(!e)throw new Error("Null or missing canvas element");const i=e.getContext("webgl",{alpha:!1,antialias:!1});if(!i)throw new Error("Could not get WebGL context");this.canvas=e,this.gl=i,this.size=t.size||new h.Rect(0,0,c,d),this.font=t.font||s.FONT_04B03,this.fillWindow=t.fillWindow||l,this.scaleFactor=t.scaleFactor||u,this.center=new a.Vec2(this.size.width/2|0,this.size.height/2|0),i.disable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),e.width=this.size.width,e.height=this.size.height,e.style.outline="none",e.tabIndex=0,e.focus(),this.renderSet=new o.RenderSet(i,t.imageUrl,this.font),this.keyboard=new r.Keyboard(e),this.mouse=new n.Mouse(this),this.fillWindow&&(window.addEventListener("resize",this.handleResizeEvent.bind(this),!1),this.handleResizeEvent()),this.renderLoop()}handleResizeEvent(){const t=window.innerWidth,e=window.innerHeight,i=this.isMobile(),s=i?320:400,r=i?224:300;this.scaleFactor=1,this.scaleFactor=t>e?Math.max(1,Math.min(Math.round(t/s),Math.round(e/r))):Math.max(1,Math.min(Math.round(t/r),Math.round(e/s))),this.size.width=Math.round(t/this.scaleFactor),this.size.height=Math.round(e/this.scaleFactor),this.center.x=this.size.width/2|0,this.center.y=this.size.height/2|0,this.canvas.width=this.size.width,this.canvas.height=this.size.height,this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width=t+"px",this.canvas.style.height=e+"px"}isMobile(){return navigator.userAgent.match(/Android|iPhone|iPod|IEMobile|WPDesktop|Opera Mini/i)}renderLoop(){this.keyboard.update(),this.mouse.update(),this.resetGl(),this.state&&this.state.update(),this.renderSet.flush(this.size.width,this.size.height),requestAnimationFrame(this.renderLoop.bind(this))}resetGl(){const t=this.gl;t.viewport(0,0,this.size.width,this.size.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.renderSet.positionArrayIndex=0,this.renderSet.texcoordArrayIndex=0,this.renderSet.colorArrayIndex=0}drawImage(t,e,i,s,r,n,h,o,a){this.renderSet.drawImage(t,e,i,s,r,n,h,o,a)}drawString(t,e,i,s){this.renderSet.drawString(t,e,i,s)}drawCenteredString(t,e,i,s){this.renderSet.drawCenteredString(t,e,i,s)}isKeyDown(t){const e=this.keyboard.getKey(t);return e&&e.down}isKeyPressed(t){const e=this.keyboard.getKey(t),i=e?e.downCount:0;return 1===i||i>30}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=32,r=126;class n{isInRange(t){return t>=s&&t<=r}getStringWidth(t){let e=0;for(let i=0;i<t.length;i++)e+=this.getWidth(t.charCodeAt(i));return e}}e.Font=n;e.MonospacedFont=class extends n{constructor(t){super(),this.glyphSize=t}getOffset(t){return(t-s)*this.glyphSize.width}getWidth(){return this.glyphSize.width}getHeight(){return this.glyphSize.height}};class h extends n{constructor(t,e){super(),this.height=t,this.widths=e,this.offsets=[0];let i=0;for(let t=0;t<this.widths.length;t++)i+=this.widths[t],this.offsets.push(i)}getOffset(t){return this.offsets[t-s]}getWidth(t){return this.widths[t-s]}getHeight(){return this.height}}e.ProportionalFont=h,e.FONT_04B03=new h(8,[4,2,4,6,5,6,6,2,3,3,4,4,3,4,2,6,5,3,5,5,5,5,5,5,5,5,2,2,4,4,4,5,6,5,5,4,5,4,4,5,5,4,5,5,4,6,5,5,5,5,5,5,4,5,5,6,5,5,4,3,6,3,4,5,3,5,5,4,5,5,4,5,5,2,3,5,2,6,5,5,5,5,4,5,4,5,5,6,4,5,5,4,2,4,5,0])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=65536,n="uniform vec2 u_viewportSize;attribute vec2 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_color;void main() {vec2 zeroToOne = a_position / u_viewportSize;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;v_color = a_color;}",h="precision highp float;uniform sampler2D u_image;varying vec2 v_texCoord;varying vec4 v_color;void main() {gl_FragColor = texture2D(u_image, v_texCoord);if (gl_FragColor.a < 0.1) discard;if (v_color.a > 0.5) gl_FragColor = v_color;}";e.RenderSet=class{constructor(t,e,i){this.gl=t,this.font=i;const o=s.initShaderProgram(t,n,h);this.program=o,this.viewportSizeLocation=t.getUniformLocation(o,"u_viewportSize"),this.positionLocation=t.getAttribLocation(o,"a_position"),this.texcoordLocation=t.getAttribLocation(o,"a_texCoord"),this.colorLocation=t.getAttribLocation(o,"a_color"),this.positionBuffer=t.createBuffer(),this.texcoordBuffer=t.createBuffer(),this.colorBuffer=t.createBuffer(),this.spriteTexture=s.createTexture(t,e),this.positionArray=new Float32Array(r),this.positionArrayIndex=0,this.texcoordArray=new Float32Array(r),this.texcoordArrayIndex=0,this.colorUint8Array=new Uint8Array(r),this.colorDataView=new DataView(this.colorUint8Array.buffer),this.colorArrayIndex=0}drawCenteredString(t,e,i,s){const r=e-this.font.getStringWidth(t)/2|0;this.drawString(t,r,i,s)}drawString(t,e,i,s){const r=t.split("\n"),n=this.font.getHeight();let h=i;for(let t=0;t<r.length;t++){let i=e;for(let e=0;e<r[t].length;e++){const o=r[t].charCodeAt(e);if(this.font.isInRange(o)){const t=this.font.getOffset(o),e=this.font.getWidth(o);this.drawImage(i,h,t,0,e,n,s),i+=e}}h+=n}}drawChar(t,e,i,s){if(this.font.isInRange(t)){const r=this.font.getOffset(t),n=this.font.getWidth(t),h=this.font.getHeight();this.drawImage(e,i,r,0,n,h,s)}}drawImage(t,e,i,s,r,n,h,o,a){const c=this.spriteTexture;if(!c.loaded)return;const d=void 0!==o?o:r,l=void 0!==a?a:n,u=t+Math.abs(d),p=e+l,g=i/c.width,f=s/c.height,y=(i+r)/c.width,x=(s+n)/c.height,_=h||0;this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=x,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=x,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=x;for(let t=0;t<6;t++)this.colorDataView.setUint32(this.colorArrayIndex,_,!1),this.colorArrayIndex+=4}flush(t,e){if(!this.spriteTexture.loaded||0===this.positionArrayIndex)return;const i=this.gl;i.useProgram(this.program),i.uniform2f(this.viewportSizeLocation,t,e),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.spriteTexture);{i.enableVertexAttribArray(this.positionLocation),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.bufferData(i.ARRAY_BUFFER,this.positionArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.positionLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.texcoordLocation),i.bindBuffer(i.ARRAY_BUFFER,this.texcoordBuffer),i.bufferData(i.ARRAY_BUFFER,this.texcoordArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.texcoordLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.colorLocation),i.bindBuffer(i.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.colorUint8Array,i.DYNAMIC_DRAW);const t=4,e=i.UNSIGNED_BYTE,s=!0,r=0,n=0;i.vertexAttribPointer(this.colorLocation,t,e,s,r,n)}const s=i.TRIANGLES,r=this.positionArrayIndex/2;i.drawArrays(s,0,r)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(17),n=i(18),h=i(19),o=i(0),a=i(15);e.Entity=class extends o.Vec2{constructor(t,e,i,s,r,n){super(e,i),this.game=t,this.offset=new o.Vec2(0,0),this.name=s,this.sprite=r,this.blocks=n,this.health=100,this.maxHealth=100,this.actionPoints=1,this.inventory=new a.XArray,this.canPickup=!1,this.canAttack=!1}get pixelX(){return this.x*this.game.tileSize.width+this.offset.x}get pixelY(){return this.y*this.game.tileSize.height+this.offset.y}move(t,e){const i=this.x+t,s=this.y+e;if(this.game.isBlocked(i,s))return!1;const r=this.game.tileSize.width/4,n=this.game.tileSize.height/4;return this.game.effects.push(new h.SlideEffect(this,t*r,e*n,4)),this.game.blocked=!0,this.actionPoints--,!0}moveToward(t,e){const i=t-this.x,s=e-this.y,r=Math.hypot(i,s);this.move(Math.round(i/r),Math.round(s/r))}attack(t){t!==this&&(this.onAttack&&this.onAttack(this,t,10),t.takeDamage(10),this.actionPoints--,this.game.effects.push(new r.BumpEffect(this,t)),this.game.blocked=!0)}takeDamage(t){if(this.health-=t,this.game.effects.push(new n.FloatingTextEffect(t.toString(),this.pixelX+8,this.pixelY-4,s.Colors.RED)),this.onDamage&&this.onDamage(this),this.health<=0){this.health=0,this.onDeath&&this.onDeath(this);const t=this.game.entities.indexOf(this);t>=0&&this.game.entities.splice(t,1)}}pickup(t){t.onPickup&&t.onPickup(this,t),this.inventory.add(t);const e=this.game.entities.indexOf(t);e>=0&&this.game.entities.splice(e,1)}use(){return!!this.onUse&&(this.onUse(this),!0)}distanceTo(t){return Math.hypot(t.x-this.x,t.y-this.y)}distance(t,e){return Math.hypot(t-this.x,e-this.y)}draw(){this.sprite.draw(this.game.app,this.pixelX-this.game.viewport.x,this.pixelY-this.game.viewport.y)}sendToBack(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(12),r=i(33),n=i(5),h=i(20),o=i(2),a=i(21),c=i(0),d=16,l=16,u=13;e.Game=class extends s.AppState{constructor(t,e){super(t),this.tileSize=e.tileSize||new o.Rect(0,0,d,l),this.viewport=new o.Rect(0,0,t.size.width,t.size.height),this.effects=[],this.entities=[],this.turnIndex=0,this.blocked=!1,this.cursor=new c.Vec2(-1,-1),this.pathIndex=0,this.followPlayer=!0}update(){a.Sprite.updateGlobalAnimations(),this.gui.handleInput()||(this.updateEffects(),this.updateEntities(),this.onUpdate&&this.onUpdate(),this.updateViewport()),this.drawTileMap(),this.drawTargeting(),this.drawEntities(),this.drawEffects(),this.gui.draw()}updateEffects(){this.blocked=!1;for(let t=0;t<this.effects.length;t++){const e=this.effects[t];e.blocking&&this.blocked||(e.update(),e.blocking&&(this.blocked=!0))}for(let t=this.effects.length-1;t>=0;t--)this.effects[t].isDone()&&this.effects.splice(t,1)}updateEntities(){let t=0;for(;!(this.turnIndex<0||this.turnIndex>=this.entities.length||t>2*this.entities.length);){const e=this.entities[this.turnIndex];if(e.actionPoints>0){if(e===this.player){this.handlePlayerInput();break}this.doAi(e)}if(!this.blocked&&e.actionPoints<=0&&(e.actionPoints=0,this.nextTurn()),this.blocked)break;t++}}updateViewport(){const t=this.app.mouse;if(t.isDragging())this.viewport.x-=t.dx,this.viewport.y-=t.dy,this.followPlayer=!1;else if(this.player&&this.followPlayer){const t=(this.app.size.width-this.player.sprite.width)/2|0,e=(this.app.size.height-this.player.sprite.height)/2|0;this.viewport.x=this.player.pixelX-t,this.viewport.y=this.player.pixelY-e,this.viewport.width=this.app.size.width,this.viewport.height=this.app.size.height}}drawTileMap(){this.app.renderSet.spriteTexture.loaded&&this.tileMap&&this.tileMap.draw(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height)}drawTargeting(){if(this.isTargeting()&&this.targetSprite){const t=this.cursor.x*this.tileSize.width-this.viewport.x,e=this.cursor.y*this.tileSize.height-this.viewport.y;this.targetSprite.draw(this.app,t,e)}}drawEntities(){for(let t=0;t<this.entities.length;t++){const e=this.entities[t];this.tileMap&&!this.tileMap.isVisible(e.x,e.y)||e.draw()}}drawEffects(){let t=0;for(let e=0;e<this.effects.length;e++){const i=this.effects[e];0!==t&&i.blocking||i.draw(this),i.blocking&&t++}}isTargeting(){return!!this.targetCallback}startTargeting(t){this.targetCallback=t,this.player&&(this.cursor.x=this.player.x,this.cursor.y=this.player.y)}endTargeting(){this.targetCallback&&this.targetCallback(this.cursor.x,this.cursor.y),this.cancelTargeting()}cancelTargeting(){this.targetCallback=void 0}handlePlayerInput(){if(!this.player||this.blocked)return;const t=this.app.mouse;if(0===t.dx&&0===t.dy||(this.cursor.x=(this.viewport.x+t.x)/this.tileSize.width|0,this.cursor.y=(this.viewport.y+t.y)/this.tileSize.height|0),this.app.isKeyDown(n.Keys.VK_SHIFT)){this.followPlayer=!1;const t=4,e=2*this.tileSize.width/t,i=2*this.tileSize.height/t;return this.app.isKeyPressed(n.Keys.VK_UP)&&this.effects.push(new r.ScrollEffect(this.viewport,0,-i,t)),this.app.isKeyPressed(n.Keys.VK_LEFT)&&this.effects.push(new r.ScrollEffect(this.viewport,-e,0,t)),this.app.isKeyPressed(n.Keys.VK_RIGHT)&&this.effects.push(new r.ScrollEffect(this.viewport,e,0,t)),void(this.app.isKeyPressed(n.Keys.VK_DOWN)&&this.effects.push(new r.ScrollEffect(this.viewport,0,i,t)))}if(this.isTargeting())return(this.app.isKeyPressed(n.Keys.VK_ENTER)||this.app.mouse.isClicked())&&this.endTargeting(),this.app.isKeyPressed(n.Keys.VK_ESCAPE)&&this.cancelTargeting(),this.app.isKeyPressed(n.Keys.VK_UP)&&this.cursor.y--,this.app.isKeyPressed(n.Keys.VK_LEFT)&&this.cursor.x--,this.app.isKeyPressed(n.Keys.VK_RIGHT)&&this.cursor.x++,void(this.app.isKeyPressed(n.Keys.VK_DOWN)&&this.cursor.y++);if(t.isClicked()){const e=(this.viewport.x+t.x)/this.tileSize.width|0,i=(this.viewport.y+t.y)/this.tileSize.height|0;if(this.targetEntity=this.getEnemyAt(e,i),this.targetEntity)return this.targetTile=void 0,this.path=void 0,void(this.player.distance(this.targetEntity.x,this.targetEntity.y)<=1&&this.player.attack(this.targetEntity));if(this.tileMap){const t=this.tileMap.getCell(e,i);t&&t!==this.targetTile&&(this.targetTile=t,this.path=h.computePath(this.tileMap,this.player,this.targetTile,100),this.pathIndex=0)}}let e=null;if(this.path){for(e=this.path[this.pathIndex];e&&e.x===this.player.x&&e.y===this.player.y;)this.pathIndex++,e=this.pathIndex<this.path.length?this.path[this.pathIndex]:null;e&&this.getEnemyAt(e.x,e.y)&&(e=null),e||(this.targetTile=void 0,this.path=void 0)}const i=this.app.isKeyPressed(n.Keys.VK_NUMPAD2)||this.app.isKeyPressed(n.Keys.VK_DOWN)||e&&e.y>this.player.y,s=this.app.isKeyPressed(n.Keys.VK_NUMPAD4)||this.app.isKeyPressed(n.Keys.VK_LEFT)||e&&e.x<this.player.x,o=this.app.isKeyPressed(n.Keys.VK_NUMPAD6)||this.app.isKeyPressed(n.Keys.VK_RIGHT)||e&&e.x>this.player.x,a=this.app.isKeyPressed(n.Keys.VK_NUMPAD8)||this.app.isKeyPressed(n.Keys.VK_UP)||e&&e.y<this.player.y,c=this.app.isKeyPressed(n.Keys.VK_NUMPAD5);a&&this.tryMoveOrAttack(0,-1),s&&this.tryMoveOrAttack(-1,0),o&&this.tryMoveOrAttack(1,0),i&&this.tryMoveOrAttack(0,1),c&&(this.player.actionPoints=0)}tryMoveOrAttack(t,e){const i=this.player;if(!i)return;this.followPlayer=!0;const s=i.x+t,r=i.y+e;for(let t=0;t<this.entities.length;t++){const e=this.entities[t];if(i!==e&&e.x===s&&e.y===r&&i.onBump&&i.onBump(e))return!0}return i.move(t,e)}doAi(t){t.ai&&(!this.tileMap||this.tileMap.isVisible(t.x,t.y)&&t.ai.activatedCount>0)&&t.ai.doAi(),t.actionPoints=0}nextTurn(){if(this.player&&this.entities[this.turnIndex]===this.player){if(this.player&&this.tileMap){this.recomputeFov();for(let t=0;t<this.entities.length;t++){const e=this.entities[t];e.ai&&(this.tileMap.isVisible(e.x,e.y)?e.ai.activatedCount++:e.ai.activatedCount=-1)}}this.entities.sort((t,e)=>this.player?Math.hypot(t.x-this.player.x,t.y-this.player.y)-Math.hypot(e.x-this.player.x,e.y-this.player.y):0)}if(this.turnIndex++,this.turnIndex>=this.entities.length){this.turnIndex=0;for(let t=0;t<this.entities.length;t++)this.entities[t].actionPoints=1}}isBlocked(t,e){if(this.tileMap&&this.tileMap.isBlocked(t,e))return!0;for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s.blocks&&s.x===t&&s.y===e)return!0}return!1}getEnemyAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s.canAttack&&!(s.health<=0)&&s.x===t&&s.y===e)return s}}recomputeFov(){this.player&&this.tileMap&&this.tileMap.computeFov(this.player.x,this.player.y,u)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.ScrollEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.viewport=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.viewport.x+=this.dx,this.viewport.y+=this.dy)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8);e.BasicMonster=class extends s.AI{doAi(){const t=this.entity,e=t.game.player;e&&(t.distanceTo(e)>=2?t.moveToward(e.x,e.y):e.health>0&&t.attack(e))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(22),r=i(8);e.ConfusedMonster=class extends r.AI{constructor(t){super(t),this.rng=new s.RNG,this.numTurns=10,this.oldAi=t.ai}doAi(){this.numTurns>0?(this.entity.move(this.rng.nextRange(-1,2),this.rng.nextRange(-1,2)),this.numTurns--):this.entity.ai=this.oldAi}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.ProjectileEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.sprite=t,this.position=e,this.velocity=i,this.duration=s}update(){super.update(),this.position.add(this.velocity)}draw(t){const e=this.position.x-t.viewport.x,i=this.position.y-t.viewport.y;this.sprite.draw(t.app,e,i)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(0),n=i(38),h=i(6),o=4;e.ComplexSelectDialog=class extends h.Dialog{constructor(t,e,i){super(t,e),this.options=i,this.selectedIndex=0,this.renderer=new n.DefaultSelectOptionRenderer}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect,e=new r.Vec2(t.x+o,t.y+o);for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex;this.renderer.drawOption(this.gui,e,i,s),e.y+=this.renderer.getHeight(i,s)}}handleInput(){if(!this.gui)return!1;const t=this.gui.app;for(let e=0;e<this.options.length;e++)t.isKeyPressed(s.Keys.VK_A+e)&&(this.selectedIndex=e,this.onSelect&&this.onSelect(this.options[e]));t.isKeyPressed(s.Keys.VK_ENTER)&&this.onSelect&&this.onSelect(this.options[this.selectedIndex]),t.isKeyPressed(s.Keys.VK_ESCAPE)&&this.onCancel&&this.onCancel(),t.isKeyPressed(s.Keys.VK_UP)&&this.selectedIndex--,t.isKeyPressed(s.Keys.VK_DOWN)&&this.selectedIndex++,this.selectedIndex<0&&(this.selectedIndex+=this.options.length),this.selectedIndex>=this.options.length&&(this.selectedIndex-=this.options.length);const e=t.mouse,i=this.rect;let r=i.y+o;if(1===e.upCount&&e.x>=i.x1&&e.x<i.x2)for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex,n=this.renderer.getHeight(i,s),h=r,o=r+n;e.y>=h&&e.y<o&&(s?this.onSelect&&this.onSelect(i):this.selectedIndex=t),r+=n}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4);e.DefaultSelectOptionRenderer=class{getHeight(t,e){return 10}drawOption(t,e,i,r){const n=r?s.Colors.YELLOW:s.Colors.WHITE;t.app.drawString(i.name,e.x,e.y,n)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(2),n=i(24),h=i(6),o=i(25),a=4,c=2;e.EntityContainerDialog=class extends h.Dialog{constructor(t,e,i,s){super(t,e),this.capacity=i,this.entities=s,s.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new n.ButtonSlot(new r.Rect(24*t,0,24,24)))}addItem(t){const e=this.getExistingButton(t);if(e)return void e.entities.push(t);const i=this.getNextFreeSlot();i&&i.add(new o.EntityButton(i.rect.clone(),t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;if(s&&s instanceof o.EntityButton){const e=s.entities.indexOf(t);e>=0&&(s.entities.splice(e,1),0===s.entities.length&&i.remove(s))}}}getExistingButton(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e).button;if(i&&i instanceof o.EntityButton&&i.entities[0].name===t.name)return i}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+a,s=t.y+a;for(let r=0;r<this.capacity;r++){const n=this.children.get(r);n.rect.x=i,n.rect.y=s,n.rect.width=e.width,n.rect.height=e.height,(i+=e.width+c)>t.x2-e.width-a&&(i=t.x+a,s+=e.height+c)}this.drawChildren()}handleInput(){return!(!this.gui||!this.handleChildrenInput()&&(!this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE)||(this.visible=!1,0)))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.ImagePanel=class extends s.Panel{constructor(t,e){super(e),this.srcRect=t}drawContents(){if(!this.gui)return;const t=this.srcRect,e=this.rect;this.gui.app.drawImage(e.x,e.y,t.x,t.y,e.width,e.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(26),n=i(1);e.MessageLog=class extends n.Panel{constructor(t,e){super(t),this.messages=[],this.maxItems=e||5}add(t,e){t instanceof n.Panel||(this.messages.push(new r.Message(t,e||s.Colors.WHITE)),this.messages.length>this.maxItems&&this.messages.splice(0,this.messages.length-this.maxItems))}drawContents(){if(!this.gui)return;const t=this.rect.x;let e=this.rect.y;e<0&&(e=this.gui.app.size.height+e+this.rect.height-10*this.messages.length);for(let i=0;i<this.messages.length;i++){const s=this.messages[i];this.gui.app.drawString(s.text,t,e,s.color),e+=10}}handleInput(){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.MessagePanel=class extends s.Panel{constructor(t,e){super(t),this.message=e}drawContents(){if(!this.gui)return;const t=this.message,e=this.rect;this.gui.app.drawString(t.text,e.x,e.y,t.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(6),n=4,h=10;e.SelectDialog=class extends r.Dialog{constructor(t,e,i,s){super(t,e),this.options=i,this.callback=s}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect;for(let e=0;e<this.options.length;e++){const i=String.fromCharCode(65+e)+" - "+this.options[e].name;this.gui.app.drawString(i,t.x+n,t.y+n+e*h)}}handleInput(){if(!this.gui)return!1;for(let t=0;t<this.options.length;t++)if(this.gui.app.isKeyPressed(s.Keys.VK_A+t))return this.callback(this.options[t]),this.close(),!0;if(this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE))return this.close(),!0;const t=this.gui.app.mouse,e=this.rect;if(t.isClicked()&&t.x>=e.x1&&t.x<e.x2){if(this.closeButton&&t.x>=e.x2-16&&t.y<e.y+16)return this.close(),!0;for(let i=0;i<this.options.length;i++){const s=e.y+n+i*h,r=s+h;t.y>=s&&t.y<r&&(this.callback(this.options[i]),this.close())}}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=i(0),n="precision highp float;attribute vec2 position;attribute vec2 texture;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 viewOffset;uniform vec2 viewportSize;uniform vec2 tileSize;uniform vec2 mapSize;void main(void) {   pixelCoord = (texture * viewportSize) + viewOffset;   texCoord = pixelCoord / mapSize / tileSize;   gl_Position = vec4(position, 0.0, 1.0);}",h="precision highp float;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 tileSize;uniform sampler2D tiles;uniform sampler2D sprites;void main(void) {   vec4 tile = texture2D(tiles, texCoord);   if(tile.x == 1.0 && tile.y == 1.0) { discard; }   vec2 spriteOffset = floor(tile.xy * 256.0) * tileSize;   vec2 spriteCoord = mod(pixelCoord, tileSize);   gl_FragColor = texture2D(sprites, (spriteOffset + spriteCoord) / 1024.0);   gl_FragColor.a = tile.a;}";class o extends r.Vec2{constructor(t,e,i){super(t,e),this.tile=i,this.blocked=!0,this.visible=!1,this.seen=!1,this.g=0,this.h=0,this.prev=null}}e.TileMapCell=o;class a{constructor(t,e){this.width=t,this.height=e,this.imageData=new Uint8Array(4*t*e),this.dimensions=new Float32Array([t,e]),this.texture=null,this.clear()}clear(){for(let t=0;t<this.imageData.length;t++)this.imageData[t]=255}setAlpha(t,e,i){this.imageData[4*(e*this.width+t)+3]=i}initGl(t){this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,this.imageData),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}updateGl(t){t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,this.imageData)}}e.TileMapLayer=a;e.TileMap=class{constructor(t,e,i,r){this.gl=t,this.width=e,this.height=i,this.grid=new Array(i),this.layers=new Array(r),this.tileWidth=16,this.tileHeight=16,this.originX=0,this.originY=0,this.minX=0,this.maxX=e-1,this.minY=0,this.maxY=i-1;for(let t=0;t<i;t++){this.grid[t]=new Array(e);for(let i=0;i<e;i++)this.grid[t][i]=new o(i,t,0)}for(let t=0;t<r;t++)this.layers[t]=new a(e,i);this.quadVertBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quadVertBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,1,-1,1,1,1,1,1,0,-1,-1,0,1,1,1,1,0,-1,1,0,0]),t.STATIC_DRAW),this.tilemapShader=s.initShaderProgram(t,n,h),this.positionAttribute=t.getAttribLocation(this.tilemapShader,"position"),this.textureAttribute=t.getAttribLocation(this.tilemapShader,"texture"),this.viewportSizeUniform=t.getUniformLocation(this.tilemapShader,"viewportSize"),this.viewOffsetUniform=t.getUniformLocation(this.tilemapShader,"viewOffset"),this.mapSizeUniform=t.getUniformLocation(this.tilemapShader,"mapSize"),this.tileSizeUniform=t.getUniformLocation(this.tilemapShader,"tileSize"),this.tileSamplerUniform=t.getUniformLocation(this.tilemapShader,"tiles"),this.spriteSamplerUniform=t.getUniformLocation(this.tilemapShader,"sprites");for(let e=0;e<this.layers.length;e++)this.layers[e].initGl(t)}setTile(t,e,i,s,r){this.grid[i][e].tile=s,this.grid[i][e].blocked=!!r;const n=this.layers[t],h=4*(i*n.width+e),o=0===s?255:(s-1)%64|0,a=0===s?255:(s-1)/64|0;n.imageData[h+0]=o,n.imageData[h+1]=a}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?null:this.grid[e][t]}getTile(t,e){const i=this.getCell(t,e);return i?i.tile:0}isBlocked(t,e){const i=this.getCell(t,e);return!i||i.blocked}isVisible(t,e){return!(t<this.minX||t>this.maxX||e<this.minY||e>this.maxY)&&this.grid[e][t].visible}isSeen(t,e){const i=this.getCell(t,e);return i&&i.seen}setSeen(t,e,i){const s=this.getCell(t,e);s&&(s.seen=i)}draw(t,e,i,s){const r=this.gl;r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.useProgram(this.tilemapShader),r.bindBuffer(r.ARRAY_BUFFER,this.quadVertBuffer),r.enableVertexAttribArray(this.positionAttribute),r.enableVertexAttribArray(this.textureAttribute),r.vertexAttribPointer(this.positionAttribute,2,r.FLOAT,!1,16,0),r.vertexAttribPointer(this.textureAttribute,2,r.FLOAT,!1,16,8),r.uniform2f(this.viewOffsetUniform,t,e),r.uniform2f(this.viewportSizeUniform,i,s),r.uniform2f(this.tileSizeUniform,this.tileWidth,this.tileHeight),r.activeTexture(r.TEXTURE0),r.uniform1i(this.spriteSamplerUniform,0),r.activeTexture(r.TEXTURE1),r.uniform1i(this.tileSamplerUniform,1);const n=t/this.tileWidth|0,h=e/this.tileHeight|0,o=(t+i)/this.tileWidth|0,a=(e+s)/this.tileHeight|0;for(let t=0;t<this.layers.length;t++){const e=this.layers[t];for(let t=h;t<=a;t++)for(let i=n;i<=o;i++){const s=this.isVisible(i,t)?255:this.isSeen(i,t)?144:0;e.setAlpha(i,t,s)}r.uniform2fv(this.mapSizeUniform,e.dimensions),r.bindTexture(r.TEXTURE_2D,e.texture),e.updateGl(r),r.drawArrays(r.TRIANGLES,0,6)}}resetFov(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++)this.grid[t][e].seen=!1,this.grid[t][e].visible=!1}computeFov(t,e,i){this.originX=t,this.originY=e,this.minX=Math.max(0,t-i),this.minY=Math.max(0,e-i),this.maxX=Math.min(this.width-1,t+i),this.maxY=Math.min(this.height-1,e+i);for(let t=this.minY;t<=this.maxY;t++)for(let e=this.minX;e<=this.maxX;e++)this.grid[t][e].seen=this.grid[t][e].seen||this.grid[t][e].visible,this.grid[t][e].visible=!1;this.grid[e][t].visible=!0,this.computeOctantY(1,1),this.computeOctantX(1,1),this.computeOctantY(1,-1),this.computeOctantX(1,-1),this.computeOctantY(-1,1),this.computeOctantX(-1,1),this.computeOctantY(-1,-1),this.computeOctantX(-1,-1)}computeOctantY(t,e){const i=[],s=[];let r,n,h,o,a,c,d,l,u,p,g=1,f=0,y=0,x=0;for(n=this.originY+e;n>=this.minY&&n<=this.maxY;n+=e,y=f,++g)for(h=.5/g,p=-1,o=Math.floor(x*g+.5),r=this.originX+o*t;o<=g&&r>=this.minX&&r<=this.maxX;r+=t,++o,p=u){if(a=!0,c=!1,l=p,u=(d=o/g)+h,y>0)if(this.grid[n-e][r].visible&&!this.grid[n-e][r].blocked||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blocked){for(let t=0;t<y&&a;++t)if(l<=s[t]&&u>=i[t])if(this.grid[n][r].blocked){if(l>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],l),s[t]=Math.max(s[t],u),c=!0}else if(d>i[t]&&d<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blocked&&(x>=l?x=u:c||(i[f]=l,s[f++]=u)))}}computeOctantX(t,e){const i=[],s=[];let r,n,h,o,a,c,d,l,u,p,g=1,f=0,y=0,x=0;for(r=this.originX+t;r>=this.minX&&r<=this.maxX;r+=t,y=f,++g)for(h=.5/g,p=-1,o=Math.floor(x*g+.5),n=this.originY+o*e;o<=g&&n>=this.minY&&n<=this.maxY;n+=e,++o,p=u){if(a=!0,c=!1,l=p,u=(d=o/g)+h,y>0)if(this.grid[n][r-t].visible&&!this.grid[n][r-t].blocked||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blocked){for(let t=0;t<y&&a;++t)if(l<=s[t]&&u>=i[t])if(this.grid[n][r].blocked){if(l>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],l),s[t]=Math.max(s[t],u),c=!0}else if(d>i[t]&&d<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blocked&&(x>=l?x=u:c||(i[f]=l,s[f++]=u)))}}}}])});
//# sourceMappingURL=index.js.map

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
class Player extends wglt_1.Entity {
    constructor() {
        super(...arguments);
        this.level = 1;
        this.xp = 0;
        this.maxXp = 100;
    }
}
exports.Player = Player;


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
        super(new wglt_1.Rect(0, -48, 400, 48));
        // Create 6 slots for the action bar
        for (let i = 0; i < 6; i++) {
            this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(2 + i * 24, 0, 20, 28), wglt_1.Keys.VK_1 + i));
        }
        // Create a slot for the inventory button
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(100, 0, 20, 28), wglt_1.Keys.VK_I));
        // const inventoryButton = new Button(
        //     new Rect(834, 168, 16, 24),
        //     new Rect(400 - 24, 224 - 24, 20, 28),
        //     // wglt.Keys.VK_I,
        //     undefined,
        //     () => {
        //         const inventoryDialog = new SelectDialog(
        //             new Rect(40, 40, 150, 100),
        //             'INVENTORY',
        //             // player.inventory,
        //             [],
        //             (choice: Entity) => {
        //                 choice.use();
        //             });
        //         inventoryDialog.closeButton = true;
        //         (this.gui as GUI).rootPanel.add(inventoryDialog);
        //         // game.gui.add(inventoryDialog);
        //     });
        // this.add(inventoryButton);
        // game.gui.add(inventoryButton);
    }
    get inventorySlot() {
        return this.children.get(this.children.length - 1);
    }
    drawContents() {
        if (!this.gui) {
            return;
        }
        const app = this.gui.app;
        const y = app.size.height - 42;
        app.drawImage(0, y, 48, 16, 16, 48, undefined, app.size.width, 48);
        // for (let i = 0; i < 8; i++) {
        //     this.gui.app.drawImage(1 + i * 23, y + 14, 192, 48, 20, 28);
        // }
        // Update button y-positions
        // This will normally be a no-op
        for (let i = 0; i < this.children.length; i++) {
            this.children.get(i).rect.y = app.size.height - 30;
        }
        // Update inventory button to be right-aligned
        this.inventorySlot.rect.x = app.size.width - 22;
        this.drawChildren();
    }
}
exports.BottomPanel = BottomPanel;


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
        super(new wglt_1.Rect(0, 0, 400, 48));
        this.player = player;
    }
    drawContents() {
        if (!this.gui) {
            return;
        }
        const app = this.gui.app;
        app.drawImage(0, 0, 32, 16, 16, 48, undefined, app.size.width, 48);
        app.drawString('Oryx the Brave'.toUpperCase(), 1, 1, wglt_1.Colors.WHITE);
        app.drawString('Orcish Assassin'.toUpperCase(), 100, 1, wglt_1.Colors.GRAY);
        // Health
        app.drawImage(4, 16, 67, 46, 20, 20);
        app.drawString(this.player.health.toString(), 24, 20);
        // Armor
        app.drawImage(42, 16, 89, 46, 20, 20);
        // Mana
        app.drawImage(76, 16, 111, 46, 20, 20);
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
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const player_1 = __webpack_require__(/*! ./entities/player */ "./src/entities/player.ts");
const toppanel_1 = __webpack_require__(/*! ./gui/toppanel */ "./src/gui/toppanel.ts");
const bottompanel_1 = __webpack_require__(/*! ./gui/bottompanel */ "./src/gui/bottompanel.ts");
// Size of the map
const MAP_WIDTH = 60;
const MAP_HEIGHT = 40;
const TILE_WALL = 1 + (456 / 24) * 64 + 0;
const TILE_HALF_WALL = 1 + (480 / 24) * 64 + 0;
const TILE_FLOOR = 1 + (408 / 24) * 64 + (208 / 16);
// Parameters for dungeon generator
const ROOM_MAX_SIZE = 10;
const ROOM_MIN_SIZE = 6;
const MAX_ROOMS = 30;
const MAX_ROOM_MONSTERS = 3;
const MAX_ROOM_ITEMS = 2;
const TORCH_RADIUS = 10;
// Spell values
const HEAL_AMOUNT = 4;
const LIGHTNING_DAMAGE = 20;
const LIGHTNING_RANGE = 5;
const CONFUSE_RANGE = 8;
const CONFUSE_NUM_TURNS = 10;
const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const TARGET_SPRITE = new wglt_1.Sprite(0, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
const PLAYER_SPRITE = new wglt_1.Sprite(0, 96, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0xffcf5cff);
const ORC_SPRITE = new wglt_1.Sprite(64, 144, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
const TROLL_SPRITE = new wglt_1.Sprite(64, 216, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
const POTION_SPRITE = new wglt_1.Sprite(658, 168, SPRITE_WIDTH, SPRITE_HEIGHT, 1, true, undefined, 0xFF0000FF);
const SCROLL_SPRITE = new wglt_1.Sprite(738, 168, SPRITE_WIDTH, SPRITE_HEIGHT, 1, true, undefined, 0xF0F0E0FF);
const FIREBALL_SPRITE = new wglt_1.Sprite(128, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 3, false);
const EXPLOSION_SPRITE = new wglt_1.Sprite(176, 32, SPRITE_WIDTH, SPRITE_HEIGHT, 4, false, 4);
const STAIRS_SPRITE = new wglt_1.Sprite(224, 432, SPRITE_WIDTH, SPRITE_HEIGHT, 1);
function createRoom(map, room) {
    for (let y = room.y1 + 1; y < room.y2; y++) {
        for (let x = room.x1 + 1; x < room.x2; x++) {
            map.setTile(0, x, y, TILE_FLOOR, false);
        }
    }
}
function createHTunnel(map, x1, x2, y) {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        map.setTile(0, x, y, TILE_FLOOR, false);
    }
}
function createVTunnel(map, y1, y2, x) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        map.setTile(0, x, y, TILE_FLOOR, false);
    }
}
function createMap() {
    // Clear the map to all walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            map.setTile(0, x, y, TILE_WALL, true);
        }
    }
    // Reset field-of-view
    map.resetFov();
    const rooms = [];
    for (let r = 0; r < MAX_ROOMS; r++) {
        // Random width and height
        const w = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const h = rng.nextRange(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        // Random position without going out of the boundaries of the map
        const x = rng.nextRange(1, MAP_WIDTH - w - 2);
        const y = rng.nextRange(1, MAP_HEIGHT - h - 2);
        // "Rect" class makes rectangles easier to work with
        const newRoom = new wglt_1.Rect(x, y, w, h);
        // Run through the other rooms and see if they intersect with this one
        let failed = false;
        for (let j = 0; j < rooms.length; j++) {
            if (newRoom.intersects(rooms[j])) {
                failed = true;
                break;
            }
        }
        if (!failed) {
            // This means there are no intersections, so this room is valid
            // "paint" it to the map's tiles
            createRoom(map, newRoom);
            // Center coordinates of new room, will be useful later
            const center = newRoom.getCenter();
            if (rooms.length === 0) {
                // This is the first room, where the player starts at
                player.x = center.x;
                player.y = center.y;
            }
            else {
                // All rooms after the first:
                // Connect it to the previous room with a tunnel
                // Center coordinates of previous room
                const prev = rooms[rooms.length - 1].getCenter();
                // Draw a coin (random number that is either 0 or 1)
                if (rng.nextRange(0, 1) === 1) {
                    // First move horizontally, then vertically
                    createHTunnel(map, prev.x, center.x, prev.y);
                    createVTunnel(map, prev.y, center.y, center.x);
                }
                else {
                    // First move vertically, then horizontally
                    createVTunnel(map, prev.y, center.y, prev.x);
                    createHTunnel(map, prev.x, center.x, center.y);
                }
            }
            // Add some contents to this room, such as monsters
            placeObjects(newRoom);
            // Finally, append the new room to the list
            rooms.push(newRoom);
        }
    }
    // Touch up walls / half walls
    for (let y = 0; y < MAP_HEIGHT; y++) {
        for (let x = 0; x < MAP_WIDTH; x++) {
            if (map.getTile(x, y) === TILE_WALL && map.getTile(x, y + 1) !== TILE_WALL) {
                map.setTile(0, x, y, TILE_HALF_WALL, true);
            }
        }
    }
    // Create stairs at the center of the last room
    const stairsLoc = rooms[rooms.length - 1].getCenter();
    const stairs = new wglt_1.Entity(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE, true);
    game.entities.push(stairs);
    // Initial FOV
    map.computeFov(player.x, player.y, 12);
}
function placeObjects(room) {
    // Choose random number of monsters
    const numMonsters = rng.nextRange(0, MAX_ROOM_MONSTERS);
    for (let i = 0; i < numMonsters; i++) {
        // Choose random spot for this monster
        const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
        const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
        let monster = null;
        // Only place it if the tile is not blocked
        // 80% chance of getting an orc
        if (rng.nextRange(0, 100) < 80) {
            // Create an orc
            monster = new wglt_1.Entity(game, x, y, 'Orc', ORC_SPRITE, true);
        }
        else {
            // Create a troll
            monster = new wglt_1.Entity(game, x, y, 'Troll', TROLL_SPRITE, true);
        }
        monster.health = 20;
        monster.canAttack = true;
        monster.ai = new wglt_1.BasicMonster(monster);
        monster.onAttack = attackCallback;
        monster.onDeath = monsterDeath;
        game.entities.push(monster);
    }
    // Choose random number of items
    const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);
    for (let i = 0; i < numItems; i++) {
        // Choose random spot for this item
        const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
        const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
        const dice = rng.nextRange(0, 100);
        let itemName = null;
        let itemSprite = null;
        let itemUse = null;
        if (dice < 50) {
            // Create a healing potion (50% chance)
            itemName = 'healing potion';
            itemSprite = POTION_SPRITE;
            itemUse = castHeal;
        }
        else if (dice < 50 + 20) {
            // Create a lightning bolt scroll (20% chance)
            itemName = 'scroll of lightning bolt';
            itemSprite = SCROLL_SPRITE;
            itemUse = castLightning;
        }
        else if (dice < 50 + 20 + 15) {
            // Create a fireball scroll (15% chance)
            itemName = 'scroll of fireball';
            itemSprite = SCROLL_SPRITE;
            itemUse = castFireball;
        }
        else {
            // Create a confuse scroll (15% chance)
            itemName = 'scroll of confusion';
            itemSprite = SCROLL_SPRITE;
            itemUse = castConfuse;
        }
        const item = new wglt_1.Entity(game, x, y, itemName, itemSprite, false);
        item.canPickup = true;
        item.onPickup = pickupCallback;
        item.onUse = itemUse;
        game.entities.push(item);
    }
}
function pickupCallback(entity, item) {
    messageLog.add(entity.name + ' picked up a ' + item.name, wglt_1.Colors.LIGHT_GREEN);
}
function getClosestMonster(x, y, range) {
    let minDist = range + 1;
    let result = null;
    for (let i = 0; i < game.entities.length; i++) {
        const entity = game.entities[i];
        if (entity !== player && entity.canAttack) {
            const dist = entity.distance(x, y);
            if (dist < minDist) {
                minDist = dist;
                result = entity;
            }
        }
    }
    return result;
}
function getMonsterAt(x, y) {
    return getClosestMonster(x, y, 0);
}
function castHeal(item, entity) {
    // Heal the player
    if (player.health === player.maxHealth) {
        messageLog.add('You are already at full health.', wglt_1.Colors.DARK_RED);
        return;
    }
    messageLog.add('Your wounds start to feel better!', wglt_1.Colors.LIGHT_MAGENTA);
    player.health += HEAL_AMOUNT;
    player.inventory.remove(item);
}
function castLightning(item) {
    // Find closest enemy (inside a maximum range) and damage it
    const monster = getClosestMonster(player.x, player.y, LIGHTNING_RANGE);
    if (!monster) {
        messageLog.add('No enemy is close enough to strike.', wglt_1.Colors.LIGHT_RED);
        return;
    }
    // Zap it!
    messageLog.add('A lightning bolt strikes the ' + monster.name + ' with a loud thunder!', wglt_1.Colors.LIGHT_BLUE);
    messageLog.add('The damage is ' + LIGHTNING_DAMAGE + ' hit points', wglt_1.Colors.LIGHT_BLUE);
    monster.takeDamage(LIGHTNING_DAMAGE);
    player.inventory.remove(item);
}
function castFireball(item) {
    // Ask the player for a target tile to throw a fireball at
    messageLog.add('Left-click to cast fireball, or right-click to cancel.', wglt_1.Colors.LIGHT_CYAN);
    game.startTargeting((x, y) => {
        const distance = player.distance(x, y);
        if (distance > FIREBALL_RANGE) {
            messageLog.add('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            return;
        }
        const speed = 8;
        const count = distance * (game.tileSize.width / speed);
        const dx = (x * game.tileSize.width - player.pixelX) / count;
        const dy = (y * game.tileSize.height - player.pixelY) / count;
        game.effects.push(new wglt_1.ProjectileEffect(FIREBALL_SPRITE, new wglt_1.Vec2(player.pixelX, player.pixelY), new wglt_1.Vec2(dx, dy), count));
        game.effects.push(new wglt_1.ProjectileEffect(EXPLOSION_SPRITE, new wglt_1.Vec2(x * game.tileSize.width, y * game.tileSize.height), new wglt_1.Vec2(0, 0), 16));
        messageLog.add('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', wglt_1.Colors.ORANGE);
        for (let i = game.entities.length - 1; i >= 0; i--) {
            const entity = game.entities[i];
            if (entity.canAttack && entity.distance(x, y) <= FIREBALL_RADIUS) {
                messageLog.add('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', wglt_1.Colors.ORANGE);
                entity.takeDamage(FIREBALL_DAMAGE);
            }
        }
        player.actionPoints = 0;
        player.inventory.remove(item);
    });
}
function castConfuse(item) {
    // Ask the player for a target to confuse
    messageLog.add('Left-click to cast confuse, or right-click to cancel.', wglt_1.Colors.LIGHT_CYAN);
    game.startTargeting((x, y) => {
        if (player.distance(x, y) > CONFUSE_RANGE) {
            messageLog.add('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            return;
        }
        const monster = getMonsterAt(x, y);
        if (!monster) {
            messageLog.add('No monster there.', wglt_1.Colors.LIGHT_GRAY);
            return;
        }
        monster.ai = new wglt_1.ConfusedMonster(monster);
        messageLog.add('The eyes of the ' + monster.name + ' look vacant, as he stumbles around!', wglt_1.Colors.LIGHT_GREEN);
        player.inventory.remove(item);
    });
}
function attackCallback(attacker, target, damage) {
    if (damage > 0) {
        messageLog.add(attacker.name + ' attacks ' + target.name + ' for ' + damage + ' hit points.', 0x808080FF);
    }
    else {
        messageLog.add(attacker.name + ' attacks ' + target.name + ' but it has no effect!', 0x808080FF);
    }
}
function playerDeath() {
    messageLog.add('You died!');
}
function monsterDeath(monster) {
    messageLog.add(monster.name + ' is dead');
    monster.blocks = false;
    monster.ai = undefined;
    monster.name = 'remains of ' + monster.name;
    monster.sendToBack();
    const xpGain = 10;
    player.xp += xpGain;
    while (player.xp >= player.maxXp) {
        player.level++;
        player.xp = 0;
        player.maxXp *= 2;
        messageLog.add('You reached level ' + player.level, 0xFF8000FF);
    }
}
function nextLevel() {
    // Advance to the next level
    messageLog.add('You take a moment to rest, and recover your strength.', wglt_1.Colors.LIGHT_MAGENTA);
    messageLog.add('After a rare moment of peace, you descend deeper...', wglt_1.Colors.LIGHT_RED);
    // Clear all entities other than the player
    game.entities.splice(0, game.entities.length);
    game.entities.push(player);
    // Reset the players targets
    game.targetEntity = undefined;
    game.targetTile = undefined;
    game.path = undefined;
    createMap();
}
const app = new wglt_1.App({
    canvas: document.querySelector('canvas'),
    imageUrl: 'graphics.png',
    size: new wglt_1.Rect(0, 0, 224, 400),
    fillWindow: true
});
const game = new wglt_1.Game(app, {
    tileSize: new wglt_1.Rect(0, 0, 16, 24)
});
game.targetSprite = TARGET_SPRITE;
game.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
const rng = new wglt_1.RNG(1);
const player = new player_1.Player(game, 30, 20, 'Player', PLAYER_SPRITE, true);
player.canAttack = true;
player.onAttack = attackCallback;
player.onDeath = playerDeath;
player.level = 1;
player.xp = 0;
player.maxXp = 10;
player.onBump = function (other) {
    if (other.canPickup) {
        player.moveToward(other.x, other.y);
        player.pickup(other);
        return true;
    }
    if (other.canAttack) {
        player.attack(other);
        return true;
    }
    if (other.name === 'stairs') {
        nextLevel();
        return true;
    }
    return false;
};
const map = new wglt_1.TileMap(app.gl, MAP_WIDTH, MAP_HEIGHT, 1);
map.tileWidth = 16;
map.tileHeight = 24;
game.tileMap = map;
game.player = player;
game.entities.push(player);
game.gui.renderer.baseRect = new wglt_1.Rect(0, 16, 24, 24);
game.gui.renderer.buttonSlotRect = new wglt_1.Rect(64, 16, 20, 28);
game.gui.onDrop = (dragElement, dropTarget) => {
    console.log('onDrop', dragElement, dropTarget);
    return true;
};
const messageLog = new wglt_1.MessageLog(new wglt_1.Rect(1, -84, 100, 50));
messageLog.add('Welcome stranger! Prepare to perish!', wglt_1.Colors.DARK_RED);
game.gui.add(messageLog);
game.gui.add(new toppanel_1.TopPanel(player));
const bottomPanel = new bottompanel_1.BottomPanel();
game.gui.add(bottomPanel);
const inventoryDialog = new wglt_1.EntityContainerDialog(new wglt_1.Rect(10, 50, 94, 126), 'INVENTORY', 16, player.inventory);
inventoryDialog.visible = false;
game.gui.add(inventoryDialog);
const inventoryButton = new wglt_1.Button(new wglt_1.Rect(400 - 24, 224 - 24, 20, 28), new wglt_1.Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
    inventoryDialog.visible = !inventoryDialog.visible;
});
bottomPanel.inventorySlot.add(inventoryButton);
// Generate the map
createMap();
const mainMenu = new wglt_1.AppState(app);
mainMenu.gui.renderer.baseRect = new wglt_1.Rect(0, 16, 24, 24);
mainMenu.gui.add(new wglt_1.SelectDialog(new wglt_1.Rect(16, 64, 160, 100), 'MAIN MENU', [
    { name: 'NEW GAME' },
    { name: 'CONTINUE' }
], (choice) => {
    if (choice.name === 'NEW GAME') {
        app.state = game;
    }
}));
app.state = mainMenu;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map