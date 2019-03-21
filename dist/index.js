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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=33)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);class r extends s.Vec2{constructor(t,e,i,s){super(t,e),this.width=i,this.height=s}get x1(){return this.x}get y1(){return this.y}get x2(){return this.x+this.width}get y2(){return this.y+this.height}get left(){return this.x}get top(){return this.y}clone(){return new r(this.x,this.y,this.width,this.height)}getCenter(){return new s.Vec2(this.x+this.width/2|0,this.y+this.height/2|0)}intersects(t){return this.x<=t.x2&&this.x2>=t.x&&this.y<=t.y2&&this.y2>=t.y}contains(t){return t.x>=this.x&&t.x<=this.x2&&t.y>=this.y&&t.y<=this.y2}}e.Rect=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Vec2=class{constructor(t,e){this.x=t,this.y=e}add(t){this.x+=t.x,this.y+=t.y}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(9);e.Panel=class{constructor(t){this.gui=null,this.rect=t,this.children=new s.ArrayList,this.modal=!1,this.visible=!0}setGui(t){if(!this.gui){this.gui=t;for(let e=0;e<this.children.length;e++)this.children.get(e).setGui(t)}}add(t){t.parent=this,t.setGui(this.gui),this.children.add(t)}remove(t){this.children.remove(t)}move(t){this.parent&&this.parent.remove(this),t.add(this)}getPanelAt(t){for(let e=this.children.length-1;e>=0;e--){const i=this.children.get(e);if(!i.visible)continue;if(i.isDragging())continue;const s=i.getPanelAt(t);if(s)return s}if(this.rect.contains(t))return this}drawContents(){this.drawChildren()}drawChildren(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);e.visible&&e.drawContents()}}handleInput(){return this.handleChildrenInput()}handleChildrenInput(){for(let t=this.children.length-1;t>=0;t--){const e=this.children.get(t);if(e.visible&&(e.handleInput()||e.modal))return!0}return!1}isDragging(){return this.gui&&this.gui.dragElement===this}onDrop(t){return!1}updateTooltip(t){t.visible=!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{}s.VK_CANCEL=3,s.VK_HELP=6,s.VK_BACK_SPACE=8,s.VK_TAB=9,s.VK_CLEAR=12,s.VK_ENTER=13,s.VK_SHIFT=16,s.VK_CONTROL=17,s.VK_ALT=18,s.VK_PAUSE=19,s.VK_CAPS_LOCK=20,s.VK_ESCAPE=27,s.VK_SPACE=32,s.VK_PAGE_UP=33,s.VK_PAGE_DOWN=34,s.VK_END=35,s.VK_HOME=36,s.VK_LEFT=37,s.VK_UP=38,s.VK_RIGHT=39,s.VK_DOWN=40,s.VK_PRINTSCREEN=44,s.VK_INSERT=45,s.VK_DELETE=46,s.VK_0=48,s.VK_1=49,s.VK_2=50,s.VK_3=51,s.VK_4=52,s.VK_5=53,s.VK_6=54,s.VK_7=55,s.VK_8=56,s.VK_9=57,s.VK_COLON=58,s.VK_SEMICOLON=59,s.VK_LESS_THAN=60,s.VK_EQUALS=61,s.VK_GREATER_THAN=62,s.VK_QUESTION_MARK=63,s.VK_AT=64,s.VK_A=65,s.VK_B=66,s.VK_C=67,s.VK_D=68,s.VK_E=69,s.VK_F=70,s.VK_G=71,s.VK_H=72,s.VK_I=73,s.VK_J=74,s.VK_K=75,s.VK_L=76,s.VK_M=77,s.VK_N=78,s.VK_O=79,s.VK_P=80,s.VK_Q=81,s.VK_R=82,s.VK_S=83,s.VK_T=84,s.VK_U=85,s.VK_V=86,s.VK_W=87,s.VK_X=88,s.VK_Y=89,s.VK_Z=90,s.VK_CONTEXT_MENU=93,s.VK_NUMPAD0=96,s.VK_NUMPAD1=97,s.VK_NUMPAD2=98,s.VK_NUMPAD3=99,s.VK_NUMPAD4=100,s.VK_NUMPAD5=101,s.VK_NUMPAD6=102,s.VK_NUMPAD7=103,s.VK_NUMPAD8=104,s.VK_NUMPAD9=105,s.VK_MULTIPLY=106,s.VK_ADD=107,s.VK_SEPARATOR=108,s.VK_SUBTRACT=109,s.VK_DECIMAL=110,s.VK_DIVIDE=111,s.VK_F1=112,s.VK_F2=113,s.VK_F3=114,s.VK_F4=115,s.VK_F5=116,s.VK_F6=117,s.VK_F7=118,s.VK_F8=119,s.VK_F9=120,s.VK_F10=121,s.VK_F11=122,s.VK_F12=123,s.VK_F13=124,s.VK_F14=125,s.VK_F15=126,s.VK_F16=127,s.VK_F17=128,s.VK_F18=129,s.VK_F19=130,s.VK_F20=131,s.VK_F21=132,s.VK_F22=133,s.VK_F23=134,s.VK_F24=135,s.VK_NUM_LOCK=144,s.VK_SCROLL_LOCK=145,s.VK_CIRCUMFLEX=160,s.VK_EXCLAMATION=161,s.VK_DOUBLE_QUOTE=162,s.VK_HASH=163,s.VK_DOLLAR=164,s.VK_PERCENT=165,s.VK_AMPERSAND=166,s.VK_UNDERSCORE=167,s.VK_OPEN_PAREN=168,s.VK_CLOSE_PAREN=169,s.VK_ASTERISK=170,s.VK_PLUS=171,s.VK_PIPE=172,s.VK_HYPHEN_MINUS=173,s.VK_OPEN_CURLY_BRACKET=174,s.VK_CLOSE_CURLY_BRACKET=175,s.VK_TILDE=176,s.VK_COMMA=188,s.VK_PERIOD=190,s.VK_SLASH=191,s.VK_BACK_QUOTE=192,s.VK_OPEN_BRACKET=219,s.VK_BACK_SLASH=220,s.VK_CLOSE_BRACKET=221,s.VK_QUOTE=222,s.VK_META=224,s.VK_ALTGR=225,s.VK_WIN=91,s.VK_KANA=21,s.VK_HANGUL=21,s.VK_EISU=22,s.VK_JUNJA=23,s.VK_FINAL=24,s.VK_HANJA=25,s.VK_KANJI=25,s.VK_CONVERT=28,s.VK_NONCONVERT=29,s.VK_ACCEPT=30,s.VK_MODECHANGE=31,s.VK_SELECT=41,s.VK_PRINT=42,s.VK_EXECUTE=43,s.VK_SLEEP=95,e.Keys=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(34);e.Animation=class{constructor(t,e){this.promise=new s.AnimationPromise,this.countdown=t,this.blocking=e}isDone(){return this.countdown<=0}update(){this.countdown--}draw(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8);class r{}r.BLACK=s.fromRgb(0,0,0),r.WHITE=s.fromRgb(255,255,255),r.GRAY=s.fromRgb(128,128,128),r.LIGHT_GRAY=s.fromRgb(170,170,170),r.DARK_GRAY=s.fromRgb(85,85,85),r.YELLOW=s.fromRgb(255,255,85),r.BROWN=s.fromRgb(170,85,0),r.RED=s.fromRgb(255,0,0),r.LIGHT_RED=s.fromRgb(255,85,85),r.DARK_RED=s.fromRgb(170,0,0),r.GREEN=s.fromRgb(0,255,0),r.LIGHT_GREEN=s.fromRgb(85,255,85),r.DARK_GREEN=s.fromRgb(0,170,0),r.LIGHT_CYAN=s.fromRgb(85,255,255),r.DARK_CYAN=s.fromRgb(0,170,170),r.BLUE=s.fromRgb(0,0,255),r.LIGHT_BLUE=s.fromRgb(85,85,255),r.DARK_BLUE=s.fromRgb(0,0,170),r.LIGHT_MAGENTA=s.fromRgb(255,85,255),r.DARK_MAGENTA=s.fromRgb(170,0,170),r.ORANGE=s.fromRgb(255,136,0),e.Colors=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(2);e.Dialog=class extends r.Panel{constructor(t){super(t),this.closeButton=!1}drawContents(){this.gui&&this.gui.renderer.draw(this.gui.app,this)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;if(this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE))return this.visible=!1,!0;const t=this.gui.app.mouse;return!(!t.isClicked()||this.rect.contains(t)||(this.visible=!1,0))}close(){this.gui&&this.gui.remove(this)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(11);e.TalentButton=class extends r.Button{constructor(t,e,i){super(t,e.ability.sprite),this.talent=e,this.shortcut=!!i,this.tooltipMessages=e.ability.tooltipMessages}click(){this.talent.use()}drawContents(){if(super.drawContents(),this.talent.cooldown>0){const t=this.talent.actor.game,e=t.cooldownSprite;if(e){const i=1-this.talent.cooldown/this.talent.ability.cooldown,r=Math.round(i*e.frames),n=e.x+r*e.width,o=e.y,h=this.rect.x+(this.rect.width-e.width)/2|0,a=this.rect.y+(this.rect.height-e.height)/2|0;t.app.drawImage(h,a,n,o,e.width,e.height);const c=this.rect.x+this.rect.width/2|0,l=this.rect.y+this.rect.height/2|0;t.app.drawCenteredString(this.talent.cooldown.toString(),c+1,l-2,s.Colors.BLACK),t.app.drawCenteredString(this.talent.cooldown.toString(),c,l-3,s.Colors.WHITE)}}}}},function(t,e,i){"use strict";function s(t,e,i,s){return void 0===s&&(s=255),(t<<24)+(e<<16)+(i<<8)+s}Object.defineProperty(e,"__esModule",{value:!0}),e.fromRgb=s,e.fromHsv=function(t,e,i,r){const n=6*t|0,o=6*t-n,h=i*(1-e),a=i*(1-o*e),c=i*(1-(1-o)*e);let l,d,u;switch(n%6){case 0:l=i,d=c,u=h;break;case 1:l=a,d=i,u=h;break;case 2:l=h,d=i,u=c;break;case 3:l=h,d=a,u=i;break;case 4:l=c,d=h,u=i;break;case 5:l=i,d=h,u=a;break;default:l=0,d=0,u=0}return void 0===r&&(r=1),s(255*l|0,255*d|0,255*u|0,255*r|0)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ArrayList=class{constructor(){this.elements=[]}get length(){return this.elements.length}clear(){this.elements.splice(0,this.elements.length)}get(t){return this.elements[t]}add(t){if(this.elements.push(t),this.listeners)for(let e=0;e<this.listeners.length;e++)this.listeners[e].onAdd(this,t)}remove(t){const e=this.elements.indexOf(t);if(e>=0&&(this.elements.splice(e,1),this.listeners))for(let e=0;e<this.listeners.length;e++)this.listeners[e].onRemove(this,t)}contains(t){return this.elements.indexOf(t)>=0}addListener(t){this.listeners||(this.listeners=[]),this.listeners.push(t)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11);e.ItemShortcutButton=class extends s.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.shortcutItem=i,this.tooltipMessages=i.tooltipMessages}click(){const t=this.getItem();if(t){const e=t.game.player;e&&e.use(t)}}drawContents(){if(this.gui&&(super.drawContents(),!this.isDragging())){const t=this.rect,e=this.countItems();this.gui.app.drawRightString(e.toString(),t.x2-3,t.y2-10)}}getItem(){for(let t=0;t<this.containerItems.length;t++){const e=this.containerItems.get(t);if(e.name===this.shortcutItem.name)return e}}countItems(){let t=0;for(let e=0;e<this.containerItems.length;e++)this.containerItems.get(e).name===this.shortcutItem.name&&t++;return t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);e.Button=class extends s.Panel{constructor(t,e,i,s){super(t),this.sprite=e,this.shortcutKey=i,this.onClick=s}drawContents(){if(!this.gui)return;const t=this.sprite,e=this.rect,i=(e.width-t.width)/2|0,s=(e.height-t.height)/2|0;t.draw(this.gui.app,e.x+i,e.y+s)}handleInput(){if(!this.gui)return!1;const t=this.gui.app,e=t.mouse;return this.rect.contains(e.start)&&e.isDragging()?(this.gui.startDragging(this),!0):this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked()?(this.click(),!0):e.down&&this.rect.contains(e)}click(){this.onClick&&this.onClick()}updateTooltip(t){this.tooltipMessages?(t.messages=this.tooltipMessages,t.visible=!0):t.visible=!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);e.ButtonSlot=class extends s.Panel{constructor(t,e){super(t),this.shortcutKey=e}get button(){return this.children.length>0?this.children.get(0):void 0}drawContents(){if(!this.gui)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;e&&this.gui.app.drawImage(t.x,t.y,e.x,e.y,t.width,t.height);const i=this.button;i&&!i.isDragging()&&(i.rect.x=this.rect.x,i.rect.y=this.rect.y,i.rect.width=this.rect.width,i.rect.height=this.rect.height,this.drawChildren()),this.shortcutKey&&this.gui.app.drawRightString(String.fromCharCode(this.shortcutKey),t.x2-3,t.y+3)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;const t=this.gui.app,e=t.mouse,i=this.button;return i&&(this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked())?(i.click(),!0):e.down&&this.rect.contains(e)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(9),r=i(11);e.ItemButton=class extends r.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.stackItems=new s.ArrayList,this.stackItems.add(i),this.tooltipMessages=i.tooltipMessages}click(){if(this.stackItems.length>0){const t=this.stackItems.get(0),e=t.game.player;e&&e.use(t)}}drawContents(){if(this.gui&&(super.drawContents(),this.stackItems.length>1)){const t=this.rect;this.gui.app.drawRightString(this.stackItems.length.toString(),t.x2-3,t.y2-10)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.SELF=0]="SELF",t[t.ENTITY=1]="ENTITY",t[t.TILE=2]="TILE"}(e.TargetType||(e.TargetType={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.Entity=class extends s.Vec2{constructor(t,e,i,r,n,o){super(e,i),this.game=t,this.offset=new s.Vec2(0,0),this.name=r,this.sprite=n,this.blocks=o,this.zIndex=1}get pixelX(){return this.x*this.game.tileSize.width+this.offset.x}get pixelY(){return this.y*this.game.tileSize.height+this.offset.y}get centerPixelX(){return this.pixelX+this.sprite.width/2|0}get centerPixelY(){return this.pixelY+this.sprite.height/2|0}distanceTo(t){return Math.hypot(t.x-this.x,t.y-this.y)}distance(t,e){return Math.hypot(t-this.x,e-this.y)}draw(){this.sprite.draw(this.game.app,this.pixelX-this.game.viewport.x,this.pixelY-this.game.viewport.y)}startTurn(){}endTurn(){}sendToBack(){}onBump(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AI=class{constructor(t){this.actor=t,this.alwaysActive=!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Input=class{constructor(){this.down=!1,this.downCount=0,this.upCount=0}update(){this.down?(this.downCount++,this.upCount=0):(this.downCount=0,this.upCount++)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(14),r=i(19),n=i(20),o=i(21),h=i(9),a=i(5),c=i(15);e.Actor=class extends c.Entity{constructor(t,e,i,s,r,n){super(t,e,i,s,r,n),this.hp=100,this.maxHp=100,this.ap=1,this.maxAp=1,this.inventory=new h.ArrayList,this.talents=new h.ArrayList,this.visibleDuration=-1,this.seen=!1}startTurn(){this.ap=this.maxAp;for(let t=0;t<this.talents.length;t++){const e=this.talents.get(t);e.cooldown>0&&e.cooldown--}}move(t,e,i){const s=this.x+t,r=this.y+e;if(this.blocks){if(this.game.isBlocked(s,r))return!1}else if(this.game.tileMap&&this.game.tileMap.isBlocked(s,r))return!1;this.x=s,this.y=r,this.ap--,this.offset.x=-t*this.game.tileSize.width,this.offset.y=-e*this.game.tileSize.height;const n=i||4,h=this.game.tileSize.width/n,a=this.game.tileSize.height/n;return this.game.animations.push(new o.SlideAnimation(this,t*h,e*a,n)),this.game.blocked=!0,!0}moveTo(t,e,i){return this.move(t-this.x,e-this.y,i)}moveToward(t,e,i){const s=t-this.x,r=e-this.y;if(Math.abs(s)>Math.abs(r)){if(s<0&&this.move(-1,0,i))return!0;if(s>0&&this.move(1,0,i))return!0;if(r<0&&this.move(0,-1,i))return!0;if(r>0&&this.move(0,1,i))return!0}else{if(r<0&&this.move(0,-1,i))return!0;if(r>0&&this.move(0,1,i))return!0;if(s<0&&this.move(-1,0,i))return!0;if(s>0&&this.move(1,0,i))return!0}return!1}attack(t,e){t!==this&&(this.onAttack(t,e),t.takeDamage(e),this.ap--,this.game.animations.push(new r.BumpAnimation(this,t)),this.game.blocked=!0)}takeHeal(t){this.hp=Math.min(this.hp+t,this.maxHp),this.addFloatingText(t.toString(),a.Colors.LIGHT_GREEN)}takeDamage(t){if(this.hp-=t,this.addFloatingText(t.toString(),a.Colors.RED),this.hp<=0){this.hp=0,this.onDeath&&this.onDeath();const t=this.game.entities.indexOf(this);t>=0&&this.game.entities.splice(t,1)}}pickup(t){t.onPickup(this),this.inventory.add(t);const e=this.game.entities.indexOf(t);e>=0&&this.game.entities.splice(e,1)}use(t){return t.onUse(this)}cast(t,e,i){t.targetType===s.TargetType.SELF||e?t.cast(this,e)&&i&&i():this.game.startTargeting(t,i)}addFloatingText(t,e){this.game.animations.push(new n.FloatingTextAnimation(this,t,e))}onAttack(t,e){}onDeath(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=12;e.BumpAnimation=class extends s.Animation{constructor(t,e){super(r,!0),this.entity=t,this.dx=e.x-t.x,this.dy=e.y-t.y}update(){const t=r-this.countdown;t>=0&&t<4&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),t>=4&&t<8&&(this.entity.offset.x-=this.dx,this.entity.offset.y-=this.dy),super.update()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(4),n=40;e.FloatingTextAnimation=class extends r.Animation{constructor(t,e,i){super(n,!1),this.actor=t,this.str=e,this.color=i||s.Colors.WHITE}draw(t){const e=n-this.countdown,i=this.actor.pixelX+(this.actor.sprite.width/2|0)-t.viewport.x,s=this.actor.pixelY-3-t.viewport.y-Math.min(4,Math.floor(e/2));t.app.drawCenteredString(this.str,i,s,this.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4);e.SlideAnimation=class extends s.Animation{constructor(t,e,i,s){super(s,!0),this.entity=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),0===this.countdown&&(this.entity.offset.x=0,this.entity.offset.y=0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(17),r=256;e.Keyboard=class{constructor(t){this.keys=new Array(r);for(let t=0;t<r;t++)this.keys[t]=new s.Input;t.addEventListener("keydown",t=>this.setKey(t,!0)),t.addEventListener("keyup",t=>this.setKey(t,!1))}setKey(t,e){t.stopPropagation(),t.preventDefault();const i=t.keyCode;i>=0&&i<r&&(this.keys[i].down=e)}update(){for(let t=0;t<r;t++)this.keys[t].down?this.keys[t].downCount++:this.keys[t].downCount=0}getKey(t){return t>=0&&t<r?this.keys[t]:null}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(17),r=i(0),n=i(1),o=4,h=30;e.Mouse=class extends s.Input{constructor(t){super(),this.app=t,this.prev=new n.Vec2(0,0),this.start=new n.Vec2(0,0),this.x=0,this.y=0,this.dx=0,this.dy=0,this.dragDistance=0,this.longPress=!1;const e=t.canvas,i=this.handleEvent.bind(this);e.addEventListener("mousedown",i),e.addEventListener("mouseup",i),e.addEventListener("mousemove",i),e.addEventListener("contextmenu",i);const s=this.handleTouchEvent.bind(this);e.addEventListener("touchstart",s),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("touchmove",s)}handleTouchEvent(t){if(t.stopPropagation(),t.preventDefault(),t.touches.length>0){const e=t.touches[0];this.updatePosition(e.clientX,e.clientY)}"touchstart"===t.type&&(this.down=!0,this.prev.x=this.x,this.prev.y=this.y,this.start.x=this.x,this.start.y=this.y,this.dx=0,this.dy=0,this.dragDistance=0),"touchend"===t.type&&(this.down=!1,this.longPress=this.downCount>=h)}handleEvent(t){t.stopPropagation(),t.preventDefault(),this.updatePosition(t.clientX,t.clientY),"mousedown"===t.type&&(this.down=!0,this.start.x=this.x,this.start.y=this.y,this.dragDistance=0,this.app.canvas.focus()),"mouseup"===t.type&&(this.down=!1,this.longPress=this.downCount>=h)}updatePosition(t,e){let i=this.app.canvas.getBoundingClientRect();const s=this.app.size.width/this.app.size.height,n=i.width/i.height;if(n-s>.01){const t=s*i.height,e=i.width-t;i=new r.Rect(Math.floor(e/2),0,t,i.height)}if(n-s<-.01){const t=i.width/s,e=i.height-t;i=new r.Rect(0,Math.floor(e/2),i.width,t)}this.x=this.app.size.width*(t-i.left)/i.width|0,this.y=this.app.size.height*(e-i.top)/i.height|0}update(){super.update(),this.dx=this.x-this.prev.x,this.dy=this.y-this.prev.y,this.prev.x=this.x,this.prev.y=this.y,this.down&&(this.dragDistance+=Math.abs(this.dx)+Math.abs(this.dy))}isClicked(){return 1===this.upCount&&this.dragDistance<o&&!this.longPress}isDragging(){return this.down&&this.dragDistance>o}isLongPress(){return this.downCount===h&&!this.isDragging()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function s(t,e,i){const s=t.createShader(e);return t.shaderSource(s,i),t.compileShader(s),s}e.ExtendedTexture=class extends WebGLTexture{constructor(){super(),this.loaded=!1,this.width=0,this.height=0}},e.initShaderProgram=function(t,e,i){const r=s(t,t.VERTEX_SHADER,e),n=s(t,t.FRAGMENT_SHADER,i),o=t.createProgram();return t.attachShader(o,r),t.attachShader(o,n),t.linkProgram(o),o},e.loadShader=s,e.createTexture=function(t,e){const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const s=t.RGBA,r=t.RGBA,n=t.UNSIGNED_BYTE,o=new Uint8Array([0,0,0,255]);t.texImage2D(t.TEXTURE_2D,0,s,1,1,0,r,n,o);const h=new Image;return h.onload=(()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,s,r,n,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.generateMipmap(t.TEXTURE_2D),i.loaded=!0,i.width=h.width,i.height=h.height}),h.src=e,i}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(26);e.AppState=class{constructor(t){this.app=t,this.gui=new s.GUI(t)}update(){this.gui.handleInput(),this.gui.draw()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(27),r=i(10),n=i(2),o=i(7),h=i(0),a=i(1);e.GUI=class{constructor(t){this.app=t,this.renderer=new s.DialogRenderer(new h.Rect(0,0,1,1)),this.rootPanel=new n.Panel(t.size),this.rootPanel.gui=this}add(t){this.rootPanel.add(t)}remove(t){this.rootPanel.remove(t)}getPanelAt(t){return this.rootPanel.getPanelAt(t)}handleInput(){return this.dragElement&&this.dragOffset?(this.updateDragging(),!0):this.rootPanel.handleInput()}draw(){this.rootPanel.drawContents(),this.dragElement&&this.dragElement.drawContents()}startDragging(t){const e=this.app.mouse;this.dragElement=t,this.dragOffset=new a.Vec2(e.start.x-t.rect.x,e.start.y-t.rect.y)}updateDragging(){const t=this.app.mouse,e=this.dragElement,i=this.dragOffset;if(t.down)e.rect.x=t.x-i.x,e.rect.y=t.y-i.y;else{const s=this.rootPanel.getPanelAt(t);s&&s.onDrop(e)?(e.rect.x=s.rect.x,e.rect.y=s.rect.y,e.move(s)):e instanceof r.ItemShortcutButton&&s===this.rootPanel?e.parent&&e.parent.remove(e):e instanceof o.TalentButton&&e.shortcut&&s===this.rootPanel?e.parent&&e.parent.remove(e):(e.rect.x=t.start.x-i.x,e.rect.y=t.start.y-i.y),this.dragElement=void 0,this.dragOffset=void 0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DialogRenderer=class{constructor(t,e){this.baseRect=t,this.closeButtonRect=e}draw(t,e){const i=this.baseRect.x,s=this.baseRect.y,r=this.baseRect.width/3|0,n=this.baseRect.height/3|0,o=i+r,h=s+n,a=i+2*r,c=s+2*r,l=e.rect.x,d=e.rect.y,u=e.rect.width-2*r,g=e.rect.height-2*n,p=l+r,f=d+n,y=p+u,m=f+g;if(t.drawImage(l,d,i,s,r,n,void 0,r,n),t.drawImage(p,d,o,s,r,n,void 0,u,n),t.drawImage(y,d,a,s,r,n,void 0,r,n),t.drawImage(l,f,i,h,r,n,void 0,r,g),t.drawImage(p,f,o,h,r,n,void 0,u,g),t.drawImage(y,f,a,h,r,n,void 0,r,g),t.drawImage(l,m,i,c,r,n,void 0,r,n),t.drawImage(p,m,o,c,r,n,void 0,u,n),t.drawImage(y,m,a,c,r,n,void 0,r,n),this.closeButtonRect&&e.closeButton){const i=this.closeButtonRect.width,s=this.closeButtonRect.height,r=e.rect.x2-i,n=e.rect.y,o=this.closeButtonRect.x,h=this.closeButtonRect.y;t.drawImage(r,n,o,h,i,s)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=[0,-1,1,0],r=[-1,0,0,1],n=[1,1,1,1];function o(t){let e=null,i=-1,s=1/0;for(let r=0;r<t.length;r++){const n=t[r];n.g!==1/0&&n.g+n.h<s&&(e=n,i=r,s=n.g+n.h)}return t.splice(i,1),e}function h(t){const e=[];let i=t;for(;i;)e.push(i),i=i.prev;return e.reverse(),e}e.computePath=function(t,e,i,a){!function(t,e){for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++){const r=t.grid[i][s];r.g=1/0,r.h=Math.min(Math.abs(s-e.x),Math.abs(i-e.y)),r.prev=null}}(t,i);const c=t.grid[e.y][e.x];c.g=0;const l=[c];for(;l.length>0;){const e=o(l);if(e.x===i.x&&e.y===i.y)return h(e);for(let i=0;i<s.length;i++){const o=e.x+s[i],h=e.y+r[i];if(o>=0&&o<t.width&&h>=0&&h<t.height){const s=t.grid[h][o],r=e.g+n[i];r<s.g&&r<=a&&!t.grid[h][o].blocked&&(s.g=r,s.prev=e,l.push(s))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RNG=class{constructor(t){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||1}setSeed(t){this.state=t}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,e){const i=e-t;return t+(this.nextInt()/this.m*i|0)}chooseIndex(t){const e=t.reduce((t,e)=>t+e),i=this.nextRange(1,e+1);let s=0;for(let e=0;e<t.length;e++)if(i<=(s+=t[e]))return e;return t.length-1}chooseKey(t){const e=[],i=[];for(const s in t)t.hasOwnProperty(s)&&(e.push(s),i.push(t[s]));return e[this.chooseIndex(i)]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0),r=30;class n extends s.Rect{constructor(t,e,i,s,n,o,h,a){super(t,e,i,s),this.frames=n||1,this.loop=!!o,this.ticksPerFrame=h||r,this.colorOverride=a,this.animIndex=0,this.animDelay=0}draw(t,e,i,s){let r=this.animIndex;this.loop&&(r=(n.globalAnimIndex/this.ticksPerFrame|0)%this.frames);const o=this.x+r*this.width,h=this.y,a=s||this.colorOverride;t.drawImage(e,i,o,h,this.width,this.height,a),this.animDelay++,this.animDelay>this.ticksPerFrame&&(this.animDelay=0,this.animIndex++,this.animIndex>=this.frames&&(this.loop?this.animIndex=0:this.animIndex=this.frames-1))}static updateGlobalAnimations(){n.globalAnimIndex++}}n.globalAnimIndex=0,e.Sprite=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Message=class{constructor(t,e){this.text=t,this.color=e}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(12),r=i(13),n=i(10),o=i(7);e.ShortcutButtonSlot=class extends s.ButtonSlot{onDrop(t){if(this.children.length>0)return!1;if(t instanceof r.ItemButton){const e=t,i=e.containerItems,s=e.stackItems.get(0);return this.add(new n.ItemShortcutButton(this.rect.clone(),i,s)),!1}return t instanceof o.TalentButton?!!t.shortcut||(this.add(new o.TalentButton(this.rect.clone(),t.talent,!0)),!1):!!(t instanceof n.ItemShortcutButton||t instanceof o.TalentButton&&t.shortcut)}}},function(t,e,i){"use strict";function s(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),s(i(14)),s(i(18)),s(i(16)),s(i(35)),s(i(36)),s(i(4)),s(i(19)),s(i(37)),s(i(38)),s(i(20)),s(i(39)),s(i(21)),s(i(40)),s(i(25)),s(i(9)),s(i(8)),s(i(5)),s(i(15)),s(i(43)),s(i(26)),s(i(11)),s(i(12)),s(i(45)),s(i(6)),s(i(27)),s(i(47)),s(i(13)),s(i(48)),s(i(10)),s(i(50)),s(i(51)),s(i(2)),s(i(52)),s(i(53)),s(i(32)),s(i(7)),s(i(54)),s(i(17)),s(i(55)),s(i(22)),s(i(3)),s(i(31)),s(i(23)),s(i(28)),s(i(0)),s(i(29)),s(i(30)),s(i(56)),s(i(57)),s(i(1))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AnimationPromise=class{constructor(){this.handlers=[]}then(t){return this.handlers.push(t),this}resolve(){for(let t=0;t<this.handlers.length;t++)this.handlers[t]()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(16),r=1;e.BasicMonster=class extends s.AI{constructor(t,e){super(t),this.damageFunc=e}doAi(){const t=this.actor,e=t.game.player;if(e)if(t.distanceTo(e)>1)t.moveToward(e.x,e.y);else if(e.hp>0){const i=this.damageFunc?this.damageFunc(t,e):r;t.attack(e,i)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(16);e.ConfusedMonster=class extends s.AI{constructor(t){super(t),this.numTurns=10,this.oldAi=t.ai}doAi(){if(this.numTurns>0){const t=this.actor.game.rng;this.actor.move(t.nextRange(-1,2),t.nextRange(-1,2)),this.numTurns--}else this.actor.ai=this.oldAi}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8),r=i(4);e.FadeInAnimation=class extends r.Animation{constructor(t){super(t,!0),this.duration=t}draw(t){const e=t.blackoutRect;if(!e)return;const i=this.countdown/this.duration,r=Math.max(1,Math.min(255,255*i|0)),n=s.fromRgb(0,0,0,r);t.app.drawImage(0,0,e.x,e.y,e.width,e.height,n,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8),r=i(4);e.FadeOutAnimation=class extends r.Animation{constructor(t){super(t,!0),this.duration=t}draw(t){const e=t.blackoutRect;if(!e)return;const i=1-this.countdown/this.duration,r=Math.max(1,Math.min(255,255*i|0)),n=s.fromRgb(0,0,0,r);t.app.drawImage(0,0,e.x,e.y,e.width,e.height,n,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4);e.ProjectileAnimation=class extends s.Animation{constructor(t,e,i,s){super(s,!0),this.sprite=t,this.position=e,this.velocity=i,this.duration=s}update(){super.update(),this.position.add(this.velocity)}draw(t){const e=this.position.x-t.viewport.x,i=this.position.y-t.viewport.y;this.sprite.draw(t.app,e,i)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(41),r=i(22),n=i(23),o=i(0),h=i(42),a=i(1),c=400,l=224,d=!1,u=2;e.App=class{constructor(t){const e=t.canvas;if(!e)throw new Error("Null or missing canvas element");const i=e.getContext("webgl",{alpha:!1,antialias:!1});if(!i)throw new Error("Could not get WebGL context");this.canvas=e,this.gl=i,this.size=t.size||new o.Rect(0,0,c,l),this.font=t.font||s.FONT_04B03,this.fillWindow=t.fillWindow||d,this.scaleFactor=t.scaleFactor||u,this.center=new a.Vec2(this.size.width/2|0,this.size.height/2|0),i.disable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),e.width=this.size.width,e.height=this.size.height,e.style.outline="none",e.tabIndex=0,e.focus(),this.mobile=this.isMobile(),this.renderSet=new h.RenderSet(i,t.imageUrl,this.font),this.keyboard=new r.Keyboard(e),this.mouse=new n.Mouse(this),this.fillWindow&&(window.addEventListener("resize",this.handleResizeEvent.bind(this),!1),this.handleResizeEvent()),this.renderLoop()}handleResizeEvent(){const t=window.innerWidth,e=window.innerHeight,i=this.isMobile(),s=i?320:400,r=i?224:300;this.scaleFactor=1,this.scaleFactor=t>e?Math.max(1,Math.min(Math.round(t/s),Math.round(e/r))):Math.max(1,Math.min(Math.round(t/r),Math.round(e/s))),this.size.width=Math.round(t/this.scaleFactor),this.size.height=Math.round(e/this.scaleFactor),this.center.x=this.size.width/2|0,this.center.y=this.size.height/2|0,this.canvas.width=this.size.width,this.canvas.height=this.size.height,this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width=t+"px",this.canvas.style.height=e+"px"}isMobile(){return!!navigator.userAgent.match(/Android|iPhone|iPod|IEMobile|WPDesktop|Opera Mini/i)}renderLoop(){this.keyboard.update(),this.mouse.update(),this.resetGl(),this.state&&this.state.update(),this.renderSet.flush(this.size.width,this.size.height),requestAnimationFrame(this.renderLoop.bind(this))}resetGl(){const t=this.gl;t.viewport(0,0,this.size.width,this.size.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.renderSet.positionArrayIndex=0,this.renderSet.texcoordArrayIndex=0,this.renderSet.colorArrayIndex=0}drawImage(t,e,i,s,r,n,o,h,a){this.renderSet.drawImage(t,e,i,s,r,n,o,h,a)}drawString(t,e,i,s){this.renderSet.drawString(t,e,i,s)}drawCenteredString(t,e,i,s){this.renderSet.drawCenteredString(t,e,i,s)}drawRightString(t,e,i,s){this.renderSet.drawRightString(t,e,i,s)}isKeyDown(t){const e=this.keyboard.getKey(t);return e&&e.down}isKeyPressed(t){const e=this.keyboard.getKey(t),i=e?e.downCount:0;return 1===i||i>30}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=32,r=126;class n{isInRange(t){return t>=s&&t<=r}getStringWidth(t){let e=0;for(let i=0;i<t.length;i++)e+=this.getWidth(t.charCodeAt(i));return e}}e.Font=n;e.MonospacedFont=class extends n{constructor(t){super(),this.glyphSize=t}getOffset(t){return(t-s)*this.glyphSize.width}getWidth(){return this.glyphSize.width}getHeight(){return this.glyphSize.height}};class o extends n{constructor(t,e){super(),this.height=t,this.widths=e,this.offsets=[0];let i=0;for(let t=0;t<this.widths.length;t++)i+=this.widths[t],this.offsets.push(i)}getOffset(t){return this.offsets[t-s]}getWidth(t){return this.widths[t-s]}getHeight(){return this.height}}e.ProportionalFont=o,e.FONT_04B03=new o(8,[4,2,4,6,5,6,6,2,3,3,4,4,3,4,2,6,5,3,5,5,5,5,5,5,5,5,2,2,4,4,4,5,6,5,5,4,5,4,4,5,5,4,5,5,4,6,5,5,5,5,5,5,4,5,5,6,5,5,4,3,6,3,4,5,3,5,5,4,5,5,4,5,5,2,3,5,2,6,5,5,5,5,4,5,4,5,5,6,4,5,5,4,2,4,5,0])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(24),r=65536,n="uniform vec2 u_viewportSize;attribute vec2 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_color;void main() {vec2 zeroToOne = a_position / u_viewportSize;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;v_color = a_color;}",o="precision highp float;uniform sampler2D u_image;varying vec2 v_texCoord;varying vec4 v_color;void main() {gl_FragColor = texture2D(u_image, v_texCoord);if (gl_FragColor.a < 0.1) discard;if (v_color.a != 0.0) gl_FragColor = v_color;}";e.RenderSet=class{constructor(t,e,i){this.gl=t,this.font=i;const h=s.initShaderProgram(t,n,o);this.program=h,this.viewportSizeLocation=t.getUniformLocation(h,"u_viewportSize"),this.positionLocation=t.getAttribLocation(h,"a_position"),this.texcoordLocation=t.getAttribLocation(h,"a_texCoord"),this.colorLocation=t.getAttribLocation(h,"a_color"),this.positionBuffer=t.createBuffer(),this.texcoordBuffer=t.createBuffer(),this.colorBuffer=t.createBuffer(),this.spriteTexture=s.createTexture(t,e),this.positionArray=new Float32Array(r),this.positionArrayIndex=0,this.texcoordArray=new Float32Array(r),this.texcoordArrayIndex=0,this.colorUint8Array=new Uint8Array(r),this.colorDataView=new DataView(this.colorUint8Array.buffer),this.colorArrayIndex=0}drawCenteredString(t,e,i,s){const r=e-this.font.getStringWidth(t)/2|0;this.drawString(t,r,i,s)}drawRightString(t,e,i,s){const r=e-this.font.getStringWidth(t);this.drawString(t,r,i,s)}drawString(t,e,i,s){const r=t.split("\n"),n=this.font.getHeight();let o=i;for(let t=0;t<r.length;t++){let i=e;for(let e=0;e<r[t].length;e++){const h=r[t].charCodeAt(e);if(this.font.isInRange(h)){const t=this.font.getOffset(h),e=this.font.getWidth(h);this.drawImage(i,o,t,0,e,n,s),i+=e}}o+=n}}drawChar(t,e,i,s){if(this.font.isInRange(t)){const r=this.font.getOffset(t),n=this.font.getWidth(t),o=this.font.getHeight();this.drawImage(e,i,r,0,n,o,s)}}drawImage(t,e,i,s,r,n,o,h,a){const c=this.spriteTexture;if(!c.loaded)return;const l=void 0!==h?h:r,d=void 0!==a?a:n,u=t+Math.abs(l),g=e+d,p=i/c.width,f=s/c.height,y=(i+r)/c.width,m=(s+n)/c.height,x=o||0;this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=m,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=g,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=m,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=m;for(let t=0;t<6;t++)this.colorDataView.setUint32(this.colorArrayIndex,x,!1),this.colorArrayIndex+=4}flush(t,e){if(!this.spriteTexture.loaded||0===this.positionArrayIndex)return;const i=this.gl;i.useProgram(this.program),i.uniform2f(this.viewportSizeLocation,t,e),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.spriteTexture);{i.enableVertexAttribArray(this.positionLocation),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.bufferData(i.ARRAY_BUFFER,this.positionArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.positionLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.texcoordLocation),i.bindBuffer(i.ARRAY_BUFFER,this.texcoordBuffer),i.bufferData(i.ARRAY_BUFFER,this.texcoordArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.texcoordLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.colorLocation),i.bindBuffer(i.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.colorUint8Array,i.DYNAMIC_DRAW);const t=4,e=i.UNSIGNED_BYTE,s=!0,r=0,n=0;i.vertexAttribPointer(this.colorLocation,t,e,s,r,n)}const s=i.TRIANGLES,r=this.positionArrayIndex/2;i.drawArrays(s,0,r)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(14),r=i(18),n=i(25),o=i(5),h=i(44),a=i(3),c=i(28),l=i(0),d=i(29),u=i(30),g=i(1),p=16,f=16,y=13,m=[a.Keys.VK_UP,a.Keys.VK_NUMPAD8,a.Keys.VK_K,a.Keys.VK_W,a.Keys.VK_Z],x=[a.Keys.VK_LEFT,a.Keys.VK_NUMPAD4,a.Keys.VK_H,a.Keys.VK_A,a.Keys.VK_Q],w=[a.Keys.VK_DOWN,a.Keys.VK_NUMPAD2,a.Keys.VK_J,a.Keys.VK_S],_=[a.Keys.VK_RIGHT,a.Keys.VK_NUMPAD6,a.Keys.VK_L,a.Keys.VK_D],v=[a.Keys.VK_SPACE,a.Keys.VK_NUMPAD5];e.Game=class extends n.AppState{constructor(t,e){super(t),this.tileSize=e.tileSize||new l.Rect(0,0,p,f),this.viewport=new l.Rect(0,0,t.size.width,t.size.height),this.viewportFocus=new g.Vec2(0,0),this.animations=[],this.entities=[],this.turnIndex=0,this.blocked=!1,this.cursor=new g.Vec2(-1,-1),this.tooltip=new h.TooltipDialog,this.rng=new d.RNG,this.pathIndex=0,this.horizontalViewDistance=e.viewDistance||y,this.verticalViewDistance=e.viewDistance||y,e.horizontalViewDistance&&(this.horizontalViewDistance=e.horizontalViewDistance),e.verticalViewDistance&&(this.verticalViewDistance=e.verticalViewDistance)}log(t,e){this.messageLog&&this.messageLog.add(t,e)}addAnimation(t){return this.animations.push(t),t.promise}update(){u.Sprite.updateGlobalAnimations(),this.updateTooltip(),this.gui.handleInput()||(this.updateAnimations(),this.updateEntities(),this.onUpdate&&this.onUpdate(),this.updateViewport()),this.drawTileMap(),this.drawTargeting(),this.drawEntities(),this.drawAnimations(),this.gui.draw()}updateTooltip(){if(this.gui.dragElement)return void(this.tooltip.visible=!1);this.tooltip.visible||(this.tooltipElement=void 0);const t=this.app.mouse,e=t.isLongPress();if(!t.down&&(0!==t.dx||0!==t.dy)||e){const i=this.gui.getPanelAt(t);this.tooltipElement!==i&&(this.tooltipElement=i,i&&(i.updateTooltip(this.tooltip),e&&window.navigator.vibrate(100))),this.tooltip.visible&&(this.tooltip.gui||this.gui.add(this.tooltip),this.tooltip.showAt(t.x,t.y),this.tooltip.modal=this.app.mobile)}}updateAnimations(){this.blocked=!1;for(let t=0;t<this.animations.length;t++){const e=this.animations[t];e.update(),e.blocking&&(this.blocked=!0)}for(let t=this.animations.length-1;t>=0;t--)this.animations[t].isDone()&&(this.animations[t].promise.resolve(),this.animations.splice(t,1))}updateEntities(){let t=0;for(;0!==this.entities.length&&(this.turnIndex>=this.entities.length&&(this.turnIndex=0),!(t>2*this.entities.length));){const e=this.entities[this.turnIndex];if(e instanceof r.Actor){if(e.ap>0){if(e===this.player){this.blocked||this.handlePlayerInput();break}this.doAi(e)}e.ap<=0&&(e.ap=0,this.nextTurn())}else this.nextTurn();t++}}resetViewport(){this.player&&(this.viewportFocus.x=this.player.centerPixelX,this.viewportFocus.y=this.player.centerPixelY,this.viewport.x=this.viewportFocus.x-(this.app.size.width/2|0),this.viewport.y=this.viewportFocus.y-(this.app.size.height/2|0))}updateViewport(){this.viewport.width=this.app.size.width,this.viewport.height=this.app.size.height;const t=this.app.mouse;if(t.isDragging())this.viewport.x-=t.dx,this.viewport.y-=t.dy,this.viewportFocus.x=this.viewport.x+(this.viewport.width/2|0),this.viewportFocus.y=this.viewport.y+(this.viewport.height/2|0);else{const t=this.viewportFocus.x-(this.app.size.width/2|0);if(t!==this.viewport.x){let e=.1*t-.1*this.viewport.x;e=e<0?Math.floor(e):Math.ceil(e),this.viewport.x+=e}const e=this.viewportFocus.y-(this.app.size.height/2|0);if(e!==this.viewport.y){let t=.1*e-.1*this.viewport.y;t=t<0?Math.floor(t):Math.ceil(t),this.viewport.y+=t}}}drawTileMap(){if(this.app.renderSet.spriteTexture.loaded&&this.tileMap){const t=(u.Sprite.globalAnimIndex/30|0)%2;this.tileMap.draw(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height,t)}}drawTargeting(){if(this.isTargeting()&&this.targetSprite){const t=this.cursor.x*this.tileSize.width-this.viewport.x,e=this.cursor.y*this.tileSize.height-this.viewport.y;this.targetSprite.draw(this.app,t,e)}}drawEntities(){for(let t=0;t<3;t++)for(let e=0;e<this.entities.length;e++){const i=this.entities[e];i.zIndex!==t||this.tileMap&&!this.tileMap.isVisible(i.x,i.y)||i.draw()}}drawAnimations(){let t=0;for(let e=0;e<this.animations.length;e++){const i=this.animations[e];0!==t&&i.blocking||i.draw(this),i.blocking&&t++}}isTargeting(){return!!this.targetAbility}startTargeting(t,e){this.targetAbility=t,this.targetCallback=e,this.player&&(this.cursor.x=this.player.x,this.cursor.y=this.player.y)}endTargeting(){if(this.player&&this.targetAbility){const t=this.targetAbility.targetType;let e=null;t===s.TargetType.ENTITY?e=this.getActorAt(this.cursor.x,this.cursor.y):t===s.TargetType.TILE&&this.tileMap&&(e=this.tileMap.getCell(this.cursor.x,this.cursor.y)),e&&this.targetAbility.cast(this.player,e)&&this.targetCallback&&this.targetCallback()}this.cancelTargeting()}cancelTargeting(){this.targetAbility=void 0,this.targetCallback=void 0}handlePlayerInput(){if(!this.player||this.blocked)return;if(this.player.ai)return this.player.ai.doAi(),void(this.player.ap=0);const t=this.app.mouse;if((t.down||0!==t.dx||0!==t.dy)&&(this.cursor.x=(this.viewport.x+t.x)/this.tileSize.width|0,this.cursor.y=(this.viewport.y+t.y)/this.tileSize.height|0),this.app.isKeyDown(a.Keys.VK_SHIFT))return this.isKeyPressed(m)&&(this.viewportFocus.y-=2*this.tileSize.height),this.isKeyPressed(x)&&(this.viewportFocus.x-=2*this.tileSize.width),this.isKeyPressed(_)&&(this.viewportFocus.x+=2*this.tileSize.width),void(this.isKeyPressed(w)&&(this.viewportFocus.y+=2*this.tileSize.height));if(this.isTargeting())return(this.app.isKeyPressed(a.Keys.VK_ENTER)||this.app.mouse.isClicked())&&this.endTargeting(),this.app.isKeyPressed(a.Keys.VK_ESCAPE)&&this.cancelTargeting(),this.isKeyPressed(m)&&this.cursor.y--,this.isKeyPressed(x)&&this.cursor.x--,this.isKeyPressed(_)&&this.cursor.x++,void(this.isKeyPressed(w)&&this.cursor.y++);if(t.isClicked()){const e=(this.viewport.x+t.x)/this.tileSize.width|0,i=(this.viewport.y+t.y)/this.tileSize.height|0;if(this.tileMap){const t=this.tileMap.getCell(e,i);t&&t!==this.targetTile&&(this.targetTile=t,this.path=c.computePath(this.tileMap,this.player,this.targetTile,100),this.pathIndex=0)}}let e=null;if(this.path){for(e=this.path[this.pathIndex];e&&e.x===this.player.x&&e.y===this.player.y;)this.pathIndex++,e=this.pathIndex<this.path.length?this.path[this.pathIndex]:null;e||this.stopAutoWalk()}const i=this.isKeyPressed(w)||e&&e.y>this.player.y,s=this.isKeyPressed(x)||e&&e.x<this.player.x,r=this.isKeyPressed(_)||e&&e.x>this.player.x,n=this.isKeyPressed(m)||e&&e.y<this.player.y,o=this.isKeyPressed(v);n&&this.tryMoveOrAttack(0,-1),s&&this.tryMoveOrAttack(-1,0),r&&this.tryMoveOrAttack(1,0),i&&this.tryMoveOrAttack(0,1),o&&(this.player.ap=0)}isKeyPressed(t){for(let e=0;e<t.length;e++)if(this.app.isKeyPressed(t[e]))return!0;return!1}tryMoveOrAttack(t,e){const i=this.player;if(!i)return;const s=i.x+t,r=i.y+e;for(let t=0;t<this.entities.length;t++){const e=this.entities[t];if(i!==e&&e.x===s&&e.y===r)return i.onBump&&i.onBump(e),this.stopAutoWalk(),!0}return i.move(t,e)}recalculateViewportFocus(){const t=this.player;if(!t)return;let e=t.x*t.sprite.width,i=t.y*t.sprite.height,s=e+t.sprite.width,n=i+t.sprite.height;if(this.path)for(let t=this.pathIndex;t<this.path.length;t++){const r=this.path[t];e=Math.min(e,r.x*this.tileSize.width),i=Math.min(i,r.y*this.tileSize.height),s=Math.max(s,(r.x+1)*this.tileSize.width),n=Math.max(n,(r.y+1)*this.tileSize.height)}else for(let t=0;t<this.entities.length;t++){const o=this.entities[t];o instanceof r.Actor&&this.tileMap&&this.tileMap.isVisible(o.x,o.y)&&(e=Math.min(e,o.pixelX),i=Math.min(i,o.pixelY),s=Math.max(s,o.pixelX+o.sprite.width),n=Math.max(n,o.pixelY+o.sprite.height))}this.viewportFocus.x=Math.round((e+s)/2),this.viewportFocus.y=Math.round((i+n)/2)}doAi(t){t.ai?((t.visibleDuration>0||t.ai.alwaysActive)&&t.ai.doAi(),t.ap=0):t.ap=0}nextTurn(){if(this.turnIndex<this.entities.length){const t=this.entities[this.turnIndex];t.endTurn(),this.player===t&&(this.recomputeFov(),this.recalculateViewportFocus())}this.turnIndex++,this.turnIndex>=this.entities.length&&(this.turnIndex=0),this.turnIndex>=0&&this.turnIndex<this.entities.length&&this.entities[this.turnIndex].startTurn()}stopAutoWalk(){this.path=void 0,this.targetTile=void 0}isBlocked(t,e){if(this.tileMap&&this.tileMap.isBlocked(t,e))return!0;for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s.blocks&&s.x===t&&s.y===e)return!0}return!1}getEntityAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s.x===t&&s.y===e)return s}}getActorAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s instanceof r.Actor&&s.x===t&&s.y===e)return s}}recomputeFov(){if(this.player&&this.tileMap){this.tileMap.computeFov(this.player.x,this.player.y,this.horizontalViewDistance,this.verticalViewDistance);for(let t=0;t<this.entities.length;t++){const e=this.entities[t];e!==this.player&&e instanceof r.Actor&&(this.tileMap.isVisible(e.x,e.y)?(e.seen||(e.seen=!0,this.player.addFloatingText("!",o.Colors.WHITE),this.stopAutoWalk(),this.viewportFocus.x=(this.player.centerPixelX+e.centerPixelX)/2|0,this.viewportFocus.y=(this.player.centerPixelY+e.centerPixelY)/2|0),e.visibleDuration++):e.visibleDuration=-1)}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0),r=i(6),n=100,o=5,h=2;e.TooltipDialog=class extends r.Dialog{constructor(){super(new s.Rect(0,0,n,10)),this.messages=[],this.visible=!1}showAt(t,e){if(!this.gui)return;const i=this.gui.app,s=i.font,r=s.getHeight()+h;this.rect.width=2*o,this.rect.height=2*o+this.messages.length*r;for(let t=0;t<this.messages.length;t++){const e=this.messages[t],i=2*o+s.getStringWidth(e.text);this.rect.width=Math.max(this.rect.width,i)}t+this.rect.width>=i.size.width?this.rect.x=t-this.rect.width-2:this.rect.x=t+2,e-this.rect.height<0?this.rect.y=e+2:this.rect.y=e-this.rect.height-2,this.rect.x<0&&(this.rect.x=0),this.rect.y<0&&(this.rect.y=0),this.visible=!0}drawContents(){if(!this.gui)return;super.drawContents();const t=this.gui.app.font.getHeight()+h,e=this.rect.x+o;let i=this.rect.y+o;for(let s=0;s<this.messages.length;s++){const r=this.messages[s];this.gui.app.drawString(r.text,e,i,r.color),i+=t}}handleInput(){return!!this.gui&&(this.gui.app.mouse.isClicked()&&(this.visible=!1),!1)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(1),n=i(46),o=i(6),h=4;e.ComplexSelectDialog=class extends o.Dialog{constructor(t,e){super(t),this.options=e,this.selectedIndex=0,this.renderer=new n.DefaultSelectOptionRenderer}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect,e=new r.Vec2(t.x+h,t.y+h);for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex;this.renderer.drawOption(this.gui,e,i,s),e.y+=this.renderer.getHeight(i,s)}}handleInput(){if(!this.gui)return!1;const t=this.gui.app;for(let e=0;e<this.options.length;e++)t.isKeyPressed(s.Keys.VK_A+e)&&(this.selectedIndex=e,this.onSelect&&this.onSelect(this.options[e]));t.isKeyPressed(s.Keys.VK_ENTER)&&this.onSelect&&this.onSelect(this.options[this.selectedIndex]),t.isKeyPressed(s.Keys.VK_ESCAPE)&&this.onCancel&&this.onCancel(),t.isKeyPressed(s.Keys.VK_UP)&&this.selectedIndex--,t.isKeyPressed(s.Keys.VK_DOWN)&&this.selectedIndex++,this.selectedIndex<0&&(this.selectedIndex+=this.options.length),this.selectedIndex>=this.options.length&&(this.selectedIndex-=this.options.length);const e=t.mouse,i=this.rect;let r=i.y+h;if(1===e.upCount&&e.x>=i.x1&&e.x<i.x2)for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex,n=this.renderer.getHeight(i,s),o=r,h=r+n;e.y>=o&&e.y<h&&(s?this.onSelect&&this.onSelect(i):this.selectedIndex=t),r+=n}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5);e.DefaultSelectOptionRenderer=class{getHeight(t,e){return 10}drawOption(t,e,i,r){const n=r?s.Colors.YELLOW:s.Colors.WHITE;t.app.drawString(i.name,e.x,e.y,n)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);e.ImagePanel=class extends s.Panel{constructor(t,e){super(e),this.srcRect=t}drawContents(){if(!this.gui)return;const t=this.srcRect,e=this.rect;this.gui.app.drawImage(e.x,e.y,t.x,t.y,e.width,e.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(0),n=i(6),o=i(13),h=i(49),a=4,c=2;e.ItemContainerDialog=class extends n.Dialog{constructor(t,e,i,n){super(t),this.messages=e,this.capacity=i,this.items=n,this.modal=!0,n.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new h.ItemContainerButtonSlot(new r.Rect(0,0,24,24),n,s.Keys.VK_A+t))}addItem(t){const e=this.getExistingButton(t);if(e)return void e.stackItems.add(t);const i=this.getNextFreeSlot();i&&i.add(new o.ItemButton(i.rect.clone(),this.items,t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof o.ItemButton&&s.stackItems.contains(t)&&(s.stackItems.remove(t),0===s.stackItems.length&&i.remove(s))}}getExistingButton(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e).button;if(i&&i instanceof o.ItemButton&&i.stackItems.get(0).name===t.name)return i}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+a,s=t.y+a;for(let t=0;t<this.messages.length;t++){const e=this.messages[t];this.gui.app.drawString(e.text,i,s,e.color),s+=10}for(let r=0;r<this.capacity;r++){const n=this.children.get(r);n.rect.x=i,n.rect.y=s,n.rect.width=e.width,n.rect.height=e.height,(i+=e.width+c)>t.x2-e.width-a&&(i=t.x+a,s+=e.height+c)}this.rect.height=s+a-t.y,this.drawChildren()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(12),r=i(13);e.ItemContainerButtonSlot=class extends s.ButtonSlot{constructor(t,e,i){super(t,i),this.items=e}onDrop(t){return t instanceof r.ItemButton}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(31),n=i(2);e.MessageLog=class extends n.Panel{constructor(t,e){super(t),this.messages=[],this.maxItems=e||5}add(t,e){t instanceof n.Panel||(this.messages.push(new r.Message(t,e||s.Colors.WHITE)),this.messages.length>this.maxItems&&this.messages.splice(0,this.messages.length-this.maxItems))}drawContents(){if(!this.gui)return;const t=this.rect.x;let e=this.rect.y;e<0&&(e=this.gui.app.size.height+e+this.rect.height-10*this.messages.length);for(let i=0;i<this.messages.length;i++){const s=this.messages[i];this.gui.app.drawString(s.text,t,e,s.color),e+=10}}handleInput(){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2);e.MessagePanel=class extends s.Panel{constructor(t,e){super(t),this.message=e}drawContents(){if(!this.gui)return;const t=this.message,e=this.rect;this.gui.app.drawString(t.text,e.x,e.y,t.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(6),n=4,o=10;e.SelectDialog=class extends r.Dialog{constructor(t,e,i){super(t),this.options=e,this.callback=i}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect;for(let e=0;e<this.options.length;e++){const i=String.fromCharCode(65+e)+" - "+this.options[e].name;this.gui.app.drawString(i,t.x+n,t.y+n+e*o)}}handleInput(){if(!this.gui)return!1;for(let t=0;t<this.options.length;t++)if(this.gui.app.isKeyPressed(s.Keys.VK_A+t))return this.callback(this.options[t]),this.close(),!0;if(this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE))return this.close(),!0;const t=this.gui.app.mouse,e=this.rect;if(t.isClicked()&&t.x>=e.x1&&t.x<e.x2){if(this.closeButton&&t.x>=e.x2-16&&t.y<e.y+16)return this.close(),!0;for(let i=0;i<this.options.length;i++){const s=e.y+n+i*o,r=s+o;t.y>=s&&t.y<r&&(this.callback(this.options[i]),this.close())}}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(0),n=i(10),o=i(2),h=i(32),a=i(7),c=2;e.ShortcutBar=class extends o.Panel{constructor(t,e,i){super(t),this.spacing=void 0!==i?i:c;for(let t=0;t<e;t++){const e=new h.ShortcutButtonSlot(new r.Rect(0,0,24,24),s.Keys.VK_1+t);this.add(e)}}addTalent(t,e){if(this.containsTalent(t))return;const i=this.getFreeSlot(!!e);i&&i.add(new a.TalentButton(i.rect.clone(),t,!0))}containsTalent(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);if(i.button&&i.button instanceof a.TalentButton&&i.button.talent===t)return!0}return!1}addItem(t,e,i){if(this.containsItem(e))return;const s=this.getFreeSlot(!!i);s&&s.add(new n.ItemShortcutButton(s.rect.clone(),t,e))}containsItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);if(i.button&&i.button instanceof n.ItemShortcutButton&&i.button.shortcutItem.name===t.name)return!0}return!1}drawContents(){if(!this.gui)return;const t=this.gui.renderer.buttonSlotRect;if(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e);i.rect.x=this.rect.x+e*(t.width+c),i.rect.y=this.rect.y,i.rect.width=t.width,i.rect.height=t.height}this.drawChildren()}}getFreeSlot(t){if(t)for(let t=this.children.length-1;t>=0;t--){const e=this.children.get(t);if(!e.button)return e}else for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3),r=i(0),n=i(12),o=i(6),h=i(7),a=4,c=2;e.TalentsDialog=class extends o.Dialog{constructor(t,e,i,o){super(t),this.messages=e,this.capacity=i,this.talents=o,this.modal=!0,o.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new n.ButtonSlot(new r.Rect(0,0,24,24),s.Keys.VK_A+t))}addItem(t){const e=this.getNextFreeSlot();e&&e.add(new h.TalentButton(e.rect.clone(),t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof h.TalentButton&&s.talent===t&&i.remove(s)}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+a,s=t.y+a;for(let t=0;t<this.messages.length;t++){const e=this.messages[t];this.gui.app.drawString(e.text,i,s,e.color),s+=10}for(let r=0;r<this.capacity;r++){const n=this.children.get(r);n.rect.x=i,n.rect.y=s,n.rect.width=e.width,n.rect.height=e.height,(i+=e.width+c)>t.x2-e.width-a&&(i=t.x+a,s+=e.height+c)}this.rect.height=s+a-t.y,this.drawChildren()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(15);e.Item=class extends s.Entity{onPickup(t){}onUse(t){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Talent=class{constructor(t,e,i){this.actor=t,this.ability=e,this.rank=i||1,this.cooldown=0}use(t){return!(this.cooldown>0||(this.actor.cast(this.ability,t,()=>{this.cooldown=this.ability.cooldown}),0))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(24),r=i(1),n="precision highp float;attribute vec2 position;attribute vec2 texture;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 viewOffset;uniform vec2 viewportSize;uniform vec2 tileSize;uniform vec2 mapSize;void main(void) {   pixelCoord = (texture * viewportSize) + viewOffset;   texCoord = pixelCoord / mapSize / tileSize;   gl_Position = vec4(position, 0.0, 1.0);}",o="precision highp float;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 tileSize;uniform float animFrame;uniform sampler2D tiles;uniform sampler2D sprites;void main(void) {   vec4 tile = texture2D(tiles, texCoord);   if(tile.x == 1.0 && tile.y == 1.0) { discard; }   vec2 spriteOffset = floor(tile.xy * 256.0) * tileSize;   if(tile.z != 1.0) spriteOffset.x += animFrame * tileSize.x;   vec2 spriteCoord = mod(pixelCoord, tileSize);   gl_FragColor = texture2D(sprites, (spriteOffset + spriteCoord) / 1024.0);   if (gl_FragColor.a == 0.0) discard;   gl_FragColor.a *= tile.a;}";class h extends r.Vec2{constructor(t,e,i){super(t,e),this.tile=i,this.blocked=!0,this.blockedSight=!0,this.visible=!1,this.seen=!1,this.g=0,this.h=0,this.prev=null}}e.TileMapCell=h;class a{constructor(t,e){this.width=t,this.height=e,this.imageData=new Uint8Array(4*t*e),this.dimensions=new Float32Array([t,e]),this.texture=null,this.clear()}clear(){for(let t=0;t<this.imageData.length;t++)this.imageData[t]=255}setAlpha(t,e,i){this.imageData[4*(e*this.width+t)+3]=i}initGl(t){this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,this.imageData),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}updateGl(t){t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,this.imageData)}}e.TileMapLayer=a;e.TileMap=class{constructor(t,e,i,r){this.gl=t,this.width=e,this.height=i,this.grid=new Array(i),this.layers=new Array(r),this.tileWidth=16,this.tileHeight=16,this.originX=0,this.originY=0,this.minX=0,this.maxX=e-1,this.minY=0,this.maxY=i-1;for(let t=0;t<i;t++){this.grid[t]=new Array(e);for(let i=0;i<e;i++)this.grid[t][i]=new h(i,t,0)}for(let t=0;t<r;t++)this.layers[t]=new a(e,i);this.quadVertBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quadVertBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,1,-1,1,1,1,1,1,0,-1,-1,0,1,1,1,1,0,-1,1,0,0]),t.STATIC_DRAW),this.tilemapShader=s.initShaderProgram(t,n,o),this.positionAttribute=t.getAttribLocation(this.tilemapShader,"position"),this.textureAttribute=t.getAttribLocation(this.tilemapShader,"texture"),this.viewportSizeUniform=t.getUniformLocation(this.tilemapShader,"viewportSize"),this.viewOffsetUniform=t.getUniformLocation(this.tilemapShader,"viewOffset"),this.mapSizeUniform=t.getUniformLocation(this.tilemapShader,"mapSize"),this.tileSizeUniform=t.getUniformLocation(this.tilemapShader,"tileSize"),this.animFrameUniform=t.getUniformLocation(this.tilemapShader,"animFrame"),this.tileSamplerUniform=t.getUniformLocation(this.tilemapShader,"tiles"),this.spriteSamplerUniform=t.getUniformLocation(this.tilemapShader,"sprites");for(let e=0;e<this.layers.length;e++)this.layers[e].initGl(t)}setTile(t,e,i,s,r,n){if(e<0||e>=this.width||i<0||i>=this.height)return;0===t&&(this.grid[i][e].tile=s,this.grid[i][e].blocked=!!r,this.grid[i][e].blockedSight=void 0!==n?n:!!r);const o=this.layers[t],h=4*(i*o.width+e),a=0===s?255:(s-1)%64|0,c=0===s?255:(s-1)/64|0;o.imageData[h+0]=a,o.imageData[h+1]=c}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?null:this.grid[e][t]}getTile(t,e){const i=this.getCell(t,e);return i?i.tile:0}isBlocked(t,e){const i=this.getCell(t,e);return!i||i.blocked}isVisible(t,e){return!(t<this.minX||t>this.maxX||e<this.minY||e>this.maxY)&&this.grid[e][t].visible}isSeen(t,e){const i=this.getCell(t,e);return i&&i.seen}setSeen(t,e,i){const s=this.getCell(t,e);s&&(s.seen=i)}isAnimated(t,e,i){if(t<0||t>=this.width||e<0||e>=this.height)return!1;const s=this.layers[i],r=4*(e*s.width+t);return s.imageData[r+2]<255}setAnimated(t,e,i,s){if(t<0||t>=this.width||e<0||e>=this.height)return;const r=this.layers[i],n=4*(e*r.width+t);r.imageData[n+2]=s?1:255}draw(t,e,i,s,r){const n=this.gl;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.tilemapShader),n.bindBuffer(n.ARRAY_BUFFER,this.quadVertBuffer),n.enableVertexAttribArray(this.positionAttribute),n.enableVertexAttribArray(this.textureAttribute),n.vertexAttribPointer(this.positionAttribute,2,n.FLOAT,!1,16,0),n.vertexAttribPointer(this.textureAttribute,2,n.FLOAT,!1,16,8),n.uniform2f(this.viewOffsetUniform,t,e),n.uniform2f(this.viewportSizeUniform,i,s),n.uniform2f(this.tileSizeUniform,this.tileWidth,this.tileHeight),n.uniform1f(this.animFrameUniform,r||0),n.activeTexture(n.TEXTURE0),n.uniform1i(this.spriteSamplerUniform,0),n.activeTexture(n.TEXTURE1),n.uniform1i(this.tileSamplerUniform,1);const o=t/this.tileWidth|0,h=e/this.tileHeight|0,a=(t+i)/this.tileWidth|0,c=(e+s)/this.tileHeight|0;for(let t=0;t<this.layers.length;t++){const e=this.layers[t];for(let t=h;t<=c;t++)for(let i=o;i<=a;i++){const s=this.isVisible(i,t)?255:this.isSeen(i,t)?144:0;e.setAlpha(i,t,s)}n.uniform2fv(this.mapSizeUniform,e.dimensions),n.bindTexture(n.TEXTURE_2D,e.texture),e.updateGl(n),n.drawArrays(n.TRIANGLES,0,6)}}resetFov(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++)this.grid[t][e].seen=!1,this.grid[t][e].visible=!1}computeFov(t,e,i,s){this.originX=t,this.originY=e;const r=i,n=s||i;this.minX=Math.max(0,t-r),this.minY=Math.max(0,e-n),this.maxX=Math.min(this.width-1,t+r),this.maxY=Math.min(this.height-1,e+n);for(let t=this.minY;t<=this.maxY;t++)for(let e=this.minX;e<=this.maxX;e++)this.grid[t][e].seen=this.grid[t][e].seen||this.grid[t][e].visible,this.grid[t][e].visible=!1;this.grid[e][t].visible=!0,this.computeOctantY(1,1),this.computeOctantX(1,1),this.computeOctantY(1,-1),this.computeOctantX(1,-1),this.computeOctantY(-1,1),this.computeOctantX(-1,1),this.computeOctantY(-1,-1),this.computeOctantX(-1,-1)}computeOctantY(t,e){const i=[],s=[];let r,n,o,h,a,c,l,d,u,g,p=1,f=0,y=0,m=0;for(n=this.originY+e;n>=this.minY&&n<=this.maxY;n+=e,y=f,++p)for(o=.5/p,g=-1,h=Math.floor(m*p+.5),r=this.originX+h*t;h<=p&&r>=this.minX&&r<=this.maxX;r+=t,++h,g=u){if(a=!0,c=!1,d=g,u=(l=h/p)+o,y>0)if(this.grid[n-e][r].visible&&!this.grid[n-e][r].blockedSight||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blockedSight){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[n][r].blockedSight){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blockedSight&&(m>=d?m=u:c||(i[f]=d,s[f++]=u)))}}computeOctantX(t,e){const i=[],s=[];let r,n,o,h,a,c,l,d,u,g,p=1,f=0,y=0,m=0;for(r=this.originX+t;r>=this.minX&&r<=this.maxX;r+=t,y=f,++p)for(o=.5/p,g=-1,h=Math.floor(m*p+.5),n=this.originY+h*e;h<=p&&n>=this.minY&&n<=this.maxY;n+=e,++h,g=u){if(a=!0,c=!1,d=g,u=(l=h/p)+o,y>0)if(this.grid[n][r-t].visible&&!this.grid[n][r-t].blockedSight||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blockedSight){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[n][r].blockedSight){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blockedSight&&(m>=d?m=u:c||(i[f]=d,s[f++]=u)))}}}}])});
//# sourceMappingURL=index.js.map

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
        target.buffs.push(new curse_1.Curse(target, damage, 8));
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
        game.entities.push(gateway1);
        game.entities.push(gateway2);
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
const FIREBALL_DAMAGE = 12;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIRE_COLOR = wglt_1.Colors.ORANGE;
const FIREBALL_SPRITE = new wglt_1.Sprite(512, 336, SPRITE_WIDTH, SPRITE_HEIGHT, undefined, undefined, undefined, FIRE_COLOR);
const TOOLTIP_MESSAGES = [
    new wglt_1.Message('Fireball', wglt_1.Colors.WHITE),
    new wglt_1.Message('2% of base mana', wglt_1.Colors.WHITE),
    new wglt_1.Message('2 turn cast', wglt_1.Colors.WHITE),
    new wglt_1.Message('Throws a fiery ball causing 10 damage', wglt_1.Colors.YELLOW),
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
                for (let i = game.entities.length - 1; i >= 0; i--) {
                    const entity = game.entities[i];
                    if (entity instanceof wglt_1.Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
                        game.log('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', wglt_1.Colors.ORANGE);
                        entity.takeDamage(FIREBALL_DAMAGE);
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
                const entity = game.entities[i];
                if (entity === caster) {
                    continue;
                }
                if (entity instanceof wglt_1.Actor && entity.distanceTo(target) < LEAP_RADIUS) {
                    entity.ai = new stunned_1.Stunned(entity, 3);
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
            monster.takeDamage(damage);
            caster.ap--;
        });
        return true;
    }
    getClosestMonster(game, player, x, y, range) {
        let minDist = range + 1;
        let result = null;
        for (let i = 0; i < game.entities.length; i++) {
            const entity = game.entities[i];
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
        const damage = caster.getDamage();
        target.takeDamage(damage);
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
class App extends wglt.App {
    constructor() {
        super({
            canvas: document.querySelector('canvas'),
            imageUrl: 'graphics.png',
            size: new wglt_1.Rect(0, 0, 224, 400),
            fillWindow: true
        });
        this.mainMenu = new mainmenu_1.MainMenu(this);
        this.raceMenu = new racemenu_1.RaceMenu(this);
        this.classMenu = new classmenu_1.ClassMenu(this);
        this.highScores = new wglt_1.AppState(this);
        this.credits = new wglt_1.AppState(this);
        this.game = new game_1.Game(this);
        this.showMainMenu();
    }
    showMainMenu() {
        this.state = this.mainMenu;
    }
    chooseRace() {
        this.state = this.raceMenu;
    }
    chooseClass() {
        this.state = this.classMenu;
    }
    startGame() {
        this.state = this.game;
        // TODO: Where to put this logic?  Game constructor?
        this.game.player.inventory.add(new hearthstone_1.Hearthstone(this.game));
        if (this.playerRace) {
            this.playerRace.initPlayer(this.game.player);
        }
        if (this.playerClass) {
            this.playerClass.initPlayer(this.game.player);
        }
        this.game.addAnimation(new wglt_1.FadeInAnimation(30));
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
    update() { }
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
    constructor(actor, damage, duration) {
        super(actor);
        this.damage = damage;
        this.countdown = duration;
    }
    update() {
        if (this.countdown > 0) {
            this.actor.takeDamage(this.damage);
            this.countdown--;
        }
    }
    isDone() {
        return this.countdown <= 0;
    }
}
exports.Curse = Curse;


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
const squiresvest_1 = __webpack_require__(/*! ../equipment/squiresvest */ "./src/equipment/squiresvest.ts");
const squirespants_1 = __webpack_require__(/*! ../equipment/squirespants */ "./src/equipment/squirespants.ts");
const squiresboots_1 = __webpack_require__(/*! ../equipment/squiresboots */ "./src/equipment/squiresboots.ts");
const battlewornhammer_1 = __webpack_require__(/*! ../equipment/battlewornhammer */ "./src/equipment/battlewornhammer.ts");
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
        player.equipment.add(new squiresvest_1.SquiresVest(game));
        player.equipment.add(new squirespants_1.SquiresPants(game));
        player.equipment.add(new squiresboots_1.SquiresBoots(game));
        player.equipment.add(new battlewornhammer_1.BattlewornHammer(game));
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
const acolytespants_1 = __webpack_require__(/*! ../equipment/acolytespants */ "./src/equipment/acolytespants.ts");
const acolytesrobe_1 = __webpack_require__(/*! ../equipment/acolytesrobe */ "./src/equipment/acolytesrobe.ts");
const acolytesshoes_1 = __webpack_require__(/*! ../equipment/acolytesshoes */ "./src/equipment/acolytesshoes.ts");
const bentstaff_1 = __webpack_require__(/*! ../equipment/bentstaff */ "./src/equipment/bentstaff.ts");
const characterclass_1 = __webpack_require__(/*! ./characterclass */ "./src/classes/characterclass.ts");
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
        player.equipment.add(new acolytesrobe_1.AcolytesRobe(game));
        player.equipment.add(new acolytespants_1.AcolytesPants(game));
        player.equipment.add(new acolytesshoes_1.AcolytesShoes(game));
        player.equipment.add(new bentstaff_1.BentStaff(game));
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
const initiatesvest_1 = __webpack_require__(/*! ../equipment/initiatesvest */ "./src/equipment/initiatesvest.ts");
const initiatespants_1 = __webpack_require__(/*! ../equipment/initiatespants */ "./src/equipment/initiatespants.ts");
const initiatesboots_1 = __webpack_require__(/*! ../equipment/initiatesboots */ "./src/equipment/initiatesboots.ts");
const weatheredcrossbow_1 = __webpack_require__(/*! ../equipment/weatheredcrossbow */ "./src/equipment/weatheredcrossbow.ts");
const shoot_1 = __webpack_require__(/*! ../abilities/shoot */ "./src/abilities/shoot.ts");
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
        player.equipment.add(new initiatesvest_1.InitiatesVest(game));
        player.equipment.add(new initiatespants_1.InitiatesPants(game));
        player.equipment.add(new initiatesboots_1.InitiatesBoots(game));
        player.equipment.add(new weatheredcrossbow_1.WeatheredCrossbow(game));
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
const initiatesvest_1 = __webpack_require__(/*! ../equipment/initiatesvest */ "./src/equipment/initiatesvest.ts");
const initiatespants_1 = __webpack_require__(/*! ../equipment/initiatespants */ "./src/equipment/initiatespants.ts");
const initiatesboots_1 = __webpack_require__(/*! ../equipment/initiatesboots */ "./src/equipment/initiatesboots.ts");
const worndirk_1 = __webpack_require__(/*! ../equipment/worndirk */ "./src/equipment/worndirk.ts");
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
        player.equipment.add(new initiatesvest_1.InitiatesVest(game));
        player.equipment.add(new initiatespants_1.InitiatesPants(game));
        player.equipment.add(new initiatesboots_1.InitiatesBoots(game));
        player.equipment.add(new worndirk_1.WornDirk(game));
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
const acolytespants_1 = __webpack_require__(/*! ../equipment/acolytespants */ "./src/equipment/acolytespants.ts");
const acolytesrobe_1 = __webpack_require__(/*! ../equipment/acolytesrobe */ "./src/equipment/acolytesrobe.ts");
const acolytesshoes_1 = __webpack_require__(/*! ../equipment/acolytesshoes */ "./src/equipment/acolytesshoes.ts");
const bentstaff_1 = __webpack_require__(/*! ../equipment/bentstaff */ "./src/equipment/bentstaff.ts");
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
        player.equipment.add(new acolytesrobe_1.AcolytesRobe(game));
        player.equipment.add(new acolytespants_1.AcolytesPants(game));
        player.equipment.add(new acolytesshoes_1.AcolytesShoes(game));
        player.equipment.add(new bentstaff_1.BentStaff(game));
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
const squiresvest_1 = __webpack_require__(/*! ../equipment/squiresvest */ "./src/equipment/squiresvest.ts");
const squirespants_1 = __webpack_require__(/*! ../equipment/squirespants */ "./src/equipment/squirespants.ts");
const squiresboots_1 = __webpack_require__(/*! ../equipment/squiresboots */ "./src/equipment/squiresboots.ts");
const worngreatsword_1 = __webpack_require__(/*! ../equipment/worngreatsword */ "./src/equipment/worngreatsword.ts");
const worndirk_1 = __webpack_require__(/*! ../equipment/worndirk */ "./src/equipment/worndirk.ts");
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
        player.equipment.add(new squiresvest_1.SquiresVest(game));
        player.equipment.add(new squirespants_1.SquiresPants(game));
        player.equipment.add(new squiresboots_1.SquiresBoots(game));
        player.equipment.add(new worngreatsword_1.WornGreatsword(game));
        player.inventory.add(new worndirk_1.WornDirk(game));
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
            window.location.hash = 'game';
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
const DAMAGE = 8;
class BatAI extends wglt_1.AI {
    doAi() {
        const monster = this.actor;
        const player = monster.game.player;
        if (!player) {
            return;
        }
        const rng = player.game.rng;
        if (monster.distanceTo(player) < 3 && rng.nextRange(0, 100) < 33) {
            monster.attack(player, DAMAGE);
        }
        else {
            this.actor.move(rng.nextRange(-2, 3), rng.nextRange(-2, 3));
        }
    }
}
class Bat extends monster_1.Monster {
    constructor(game, x, y, level) {
        super(game, x, y, 'Bat', SPRITE);
        this.ai = new BatAI(this);
        this.level = level;
        this.strength = 10 + 2 * level;
        this.maxHp = 10 + 2 * level;
        this.hp = this.maxHp;
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
                const index = monster.game.entities.indexOf(monster);
                if (index >= 0) {
                    monster.game.entities.splice(index, 1);
                }
            }
        }
    }
}
class FlameCrawler extends monster_1.Monster {
    constructor(game, x, y, dx, dy) {
        super(game, x, y, 'Flame Crawler', SPRITE);
        this.ai = new FlameCrawlerAI(this);
        this.hp = this.maxHp = 5;
        this.dx = dx;
        this.dy = dy;
        this.showFrame = false;
        this.seen = true;
        this.blocks = false;
    }
}
exports.FlameCrawler = FlameCrawler;


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
        else if (griffon.aggro) {
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
        super(game, x, y, 'Griffon', SPRITE);
        this.aggro = false;
        this.level = level;
        this.maxHp = 10 * this.level;
        this.hp = this.maxHp;
        this.ai = new GriffonAI(this);
        this.talents.add(new wglt_1.Talent(this, new leap_1.LeapAbility()));
    }
    get leapTalent() {
        return this.talents.get(0);
    }
    takeDamage(damage) {
        super.takeDamage(damage);
        this.aggro = true;
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
        if (guard.aggro) {
            this.aggroCount++;
            if (this.aggroCount === 1) {
                // First attack
                const game = guard.game;
                game.log('Guard shouts for help!', wglt_1.Colors.LIGHT_BLUE);
                for (let i = 0; i < game.entities.length; i++) {
                    if (game.entities[i] instanceof Guard) {
                        const otherGuard = game.entities[i];
                        if (guard.distanceTo(otherGuard) < 6) {
                            otherGuard.aggro = true;
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
        super(game, x, y, 'Guard', SPRITE);
        this.aggro = false;
        this.ai = new GuardAI(this, waypoints);
        this.seen = true;
        this.level = 10;
        this.strength = 10 + 2 * this.level;
        this.maxHp = 10 + 2 * this.level;
        this.hp = this.maxHp;
    }
    takeDamage(damage) {
        super.takeDamage(damage);
        this.aggro = true;
    }
}
exports.Guard = Guard;


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
const statsactor_1 = __webpack_require__(/*! ./statsactor */ "./src/entities/statsactor.ts");
const START_BLOOD = 1367;
const END_BLOOD = 1371;
class Monster extends statsactor_1.StatsActor {
    constructor(game, x, y, name, sprite) {
        super(game, x, y, name, sprite);
        this.maxHp = 10;
        this.hp = 10;
        this.ai = new wglt_1.BasicMonster(this, this.calculateDamage);
    }
    onDeath() {
        this.game.log(this.name + ' is dead');
        this.blocks = false;
        this.ai = undefined;
        this.name = 'remains of ' + this.name;
        this.sendToBack();
        // Based on DnD xp rules
        // TODO: Add XP to the attacker, not the player
        const player = this.game.player;
        const xpGain = Math.round(10 * player.level * Math.pow(2.0, (this.level - player.level) * 0.5));
        player.addXp(xpGain);
        // Add blood to the map
        const map = this.game.tileMap;
        map.setTile(3, this.x, this.y, this.game.rng.nextRange(START_BLOOD, END_BLOOD));
    }
    calculateDamage(attacker, target) {
        const statsActor = attacker;
        const minDamage = statsActor.level;
        const maxDamage = Math.round(1.5 * statsActor.level);
        const damage = statsActor.game.rng.nextRange(minDamage, maxDamage + 1);
        const damageModifier = statsActor.strengthModifier;
        return damage + damageModifier;
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
const gateway_1 = __webpack_require__(/*! ../items/gateway */ "./src/items/gateway.ts");
const monster_1 = __webpack_require__(/*! ./monster */ "./src/entities/monster.ts");
const portal_1 = __webpack_require__(/*! ../items/portal */ "./src/items/portal.ts");
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
    }
    onBump(other) {
        if (other instanceof gateway_1.Gateway) {
            if (other.other) {
                const exit = other.other;
                this.move(exit.x - this.x, exit.y - this.y, 16);
            }
            return;
        }
        if (other instanceof portal_1.Portal) {
            const exit = other.other;
            if (exit) {
                this.game.warpToPoint(exit);
            }
            return;
        }
        if (other instanceof wglt_1.Item) {
            this.moveToward(other.x, other.y);
            this.pickup(other);
            return true;
        }
        if (other instanceof monster_1.Monster) {
            this.attack(other, this.getDamage());
            return true;
        }
        return false;
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
            this.maxHp += 2;
            this.hp = this.maxHp;
            this.xp = 0;
            this.maxXp = this.nextMaxXp(this.maxXp);
            this.remainingAbilityPoints += 2;
            this.game.log('You reached level ' + this.level, wglt_1.Colors.LIGHT_MAGENTA);
            levelUp = true;
        }
        if (levelUp) {
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
        if (dragon.aggro && dragon.cooldown === 0) {
            const room = dragon.room;
            const rng = game.rng;
            // Top and bottom edges
            for (let x = room.x1 + 1; x < room.x2 - 1; x++) {
                if (rng.nextRange(0, 2) === 0) {
                    game.entities.push(new flamecrawler_1.FlameCrawler(game, x, room.y1 + 1, 0, 1));
                }
                else {
                    game.entities.push(new flamecrawler_1.FlameCrawler(game, x, room.y2 - 1, 0, -1));
                }
            }
            // Left and right edges
            for (let y = room.y1 + 1; y < room.y2 - 1; y++) {
                if (rng.nextRange(0, 2) === 0) {
                    game.entities.push(new flamecrawler_1.FlameCrawler(game, room.x1 + 1, y, 1, 0));
                }
                else {
                    game.entities.push(new flamecrawler_1.FlameCrawler(game, room.x2 - 1, y, -1, 0));
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
        super(game, x, y, 'Dragon', SPRITE);
        this.aggro = false;
        this.cooldown = 0;
        this.room = room;
        this.level = level;
        this.maxHp = 10 * level;
        this.hp = this.maxHp;
        this.ai = new RedDragonAI(this);
    }
    takeDamage(damage) {
        super.takeDamage(damage);
        this.aggro = true;
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
        super(game, x, y, 'Shark', SPRITE);
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
        super(game, x, y, 'Spider', SPRITE);
        this.level = level;
        this.strength = 10 + 2 * level;
        this.maxHp = 10 + 2 * level;
        this.hp = this.maxHp;
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
const equipment_1 = __webpack_require__(/*! ../equipment/equipment */ "./src/equipment/equipment.ts");
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
        this.showFrame = true;
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
        return this.getEquipment(equipment_1.EquipmentSlot.MAINHAND);
    }
    getDamage() {
        const weapon = this.mainHandWeapon;
        const rng = this.game.rng;
        const damage = weapon ? rng.nextRange(weapon.minDamage, weapon.maxDamage + 1) : 1;
        const damageModifier = weapon && weapon.finesse ? this.dexterityModifier : this.strengthModifier;
        return damage + damageModifier;
    }
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
    addItem(item) {
        this.armor += item.bonusArmor;
        this.constitution += item.bonusConstitution;
        this.dexterity += item.bonusDexterity;
        this.strength += item.bonusStrength;
        this.intelligence += item.bonusIntelligence;
    }
    removeItem(item) {
        this.armor -= item.bonusArmor;
        this.constitution -= item.bonusConstitution;
        this.dexterity -= item.bonusDexterity;
        this.strength -= item.bonusStrength;
        this.intelligence -= item.bonusIntelligence;
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
        super(game, x, y, 'Troll', SPRITE);
        this.level = level;
        this.strength = 10 + 2 * level;
        this.maxHp = 10 + 2 * level;
        this.hp = this.maxHp;
    }
}
exports.Troll = Troll;


/***/ }),

/***/ "./src/equipment/acolytespants.ts":
/*!****************************************!*\
  !*** ./src/equipment/acolytespants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Acolyte\'s Pants';
const SPRITE = new wglt_1.Sprite(656, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Legs, Cloth', wglt_1.Colors.WHITE),
    new wglt_1.Message('2 Armor', wglt_1.Colors.WHITE)
];
class AcolytesPants extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.LEGS);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 2;
    }
}
exports.AcolytesPants = AcolytesPants;


/***/ }),

/***/ "./src/equipment/acolytesrobe.ts":
/*!***************************************!*\
  !*** ./src/equipment/acolytesrobe.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Acolyte\'s Robe';
const SPRITE = new wglt_1.Sprite(608, 288, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Chest, Cloth', wglt_1.Colors.WHITE),
    new wglt_1.Message('2 Armor', wglt_1.Colors.WHITE)
];
class AcolytesRobe extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.CHEST);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 2;
    }
}
exports.AcolytesRobe = AcolytesRobe;


/***/ }),

/***/ "./src/equipment/acolytesshoes.ts":
/*!****************************************!*\
  !*** ./src/equipment/acolytesshoes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Acolyte\'s Shoes';
const SPRITE = new wglt_1.Sprite(640, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Feet, Cloth', wglt_1.Colors.WHITE),
    new wglt_1.Message('1 Armor', wglt_1.Colors.WHITE)
];
class AcolytesShoes extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.FEET);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 1;
    }
}
exports.AcolytesShoes = AcolytesShoes;


/***/ }),

/***/ "./src/equipment/battlewornhammer.ts":
/*!*******************************************!*\
  !*** ./src/equipment/battlewornhammer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const weapon_1 = __webpack_require__(/*! ./weapon */ "./src/equipment/weapon.ts");
const NAME = 'Battleworn Hammer';
const SPRITE = new wglt_1.Sprite(640, 96, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Two-Hand Mace', wglt_1.Colors.WHITE),
    new wglt_1.Message('1-2 Damage', wglt_1.Colors.WHITE)
];
class BattlewornHammer extends weapon_1.Weapon {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.MAINHAND);
        this.tooltipMessages = TOOLTIPS;
    }
}
exports.BattlewornHammer = BattlewornHammer;


/***/ }),

/***/ "./src/equipment/bentstaff.ts":
/*!************************************!*\
  !*** ./src/equipment/bentstaff.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const weapon_1 = __webpack_require__(/*! ./weapon */ "./src/equipment/weapon.ts");
const NAME = 'Bent Staff';
const SPRITE = new wglt_1.Sprite(640, 120, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Two-Hand Staff', wglt_1.Colors.WHITE),
    new wglt_1.Message('1-2 Damage', wglt_1.Colors.WHITE)
];
class BentStaff extends weapon_1.Weapon {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.MAINHAND);
        this.tooltipMessages = TOOLTIPS;
    }
}
exports.BentStaff = BentStaff;


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
var EquipmentSlot;
(function (EquipmentSlot) {
    EquipmentSlot[EquipmentSlot["HEAD"] = 0] = "HEAD";
    EquipmentSlot[EquipmentSlot["NECK"] = 1] = "NECK";
    EquipmentSlot[EquipmentSlot["BACK"] = 2] = "BACK";
    EquipmentSlot[EquipmentSlot["CHEST"] = 3] = "CHEST";
    EquipmentSlot[EquipmentSlot["HANDS"] = 4] = "HANDS";
    EquipmentSlot[EquipmentSlot["LEGS"] = 5] = "LEGS";
    EquipmentSlot[EquipmentSlot["FEET"] = 6] = "FEET";
    EquipmentSlot[EquipmentSlot["RING"] = 7] = "RING";
    EquipmentSlot[EquipmentSlot["MAINHAND"] = 8] = "MAINHAND";
    EquipmentSlot[EquipmentSlot["OFFHAND"] = 9] = "OFFHAND";
})(EquipmentSlot = exports.EquipmentSlot || (exports.EquipmentSlot = {}));
class Equipment extends wglt_1.Item {
    constructor(game, x, y, name, sprite, slot) {
        super(game, x, y, name, sprite, false);
        this.slot = slot;
        this.bonusArmor = 0;
        this.bonusStrength = 0;
        this.bonusDexterity = 0;
        this.bonusConstitution = 0;
        this.bonusIntelligence = 0;
    }
    onUse(player) {
        const equipped = player.getEquipment(this.slot);
        if (equipped) {
            player.equipment.remove(equipped);
            player.inventory.add(equipped);
        }
        player.inventory.remove(this);
        player.equipment.add(this);
        return false;
    }
}
exports.Equipment = Equipment;


/***/ }),

/***/ "./src/equipment/initiatesboots.ts":
/*!*****************************************!*\
  !*** ./src/equipment/initiatesboots.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Initiate\'s Boots';
const SPRITE = new wglt_1.Sprite(640, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Feet, Leather', wglt_1.Colors.WHITE),
    new wglt_1.Message('3 Armor', wglt_1.Colors.WHITE)
];
class InitiatesBoots extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.FEET);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 3;
    }
}
exports.InitiatesBoots = InitiatesBoots;


/***/ }),

/***/ "./src/equipment/initiatespants.ts":
/*!*****************************************!*\
  !*** ./src/equipment/initiatespants.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Initiate\'s Pants';
const SPRITE = new wglt_1.Sprite(656, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Legs, Leather', wglt_1.Colors.WHITE),
    new wglt_1.Message('4 Armor', wglt_1.Colors.WHITE)
];
class InitiatesPants extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.LEGS);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 4;
    }
}
exports.InitiatesPants = InitiatesPants;


/***/ }),

/***/ "./src/equipment/initiatesvest.ts":
/*!****************************************!*\
  !*** ./src/equipment/initiatesvest.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Initiate\'s Vest';
const SPRITE = new wglt_1.Sprite(608, 288, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Chest, Leather', wglt_1.Colors.WHITE),
    new wglt_1.Message('5 Armor', wglt_1.Colors.WHITE)
];
class InitiatesVest extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.CHEST);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 5;
    }
}
exports.InitiatesVest = InitiatesVest;


/***/ }),

/***/ "./src/equipment/squiresboots.ts":
/*!***************************************!*\
  !*** ./src/equipment/squiresboots.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Squire\'s Boots';
const SPRITE = new wglt_1.Sprite(640, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Feet, Plate', wglt_1.Colors.WHITE),
    new wglt_1.Message('5 Armor', wglt_1.Colors.WHITE)
];
class SquiresBoots extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.FEET);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 5;
    }
}
exports.SquiresBoots = SquiresBoots;


/***/ }),

/***/ "./src/equipment/squirespants.ts":
/*!***************************************!*\
  !*** ./src/equipment/squirespants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Squire\'s Pants';
const SPRITE = new wglt_1.Sprite(656, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Legs, Plate', wglt_1.Colors.WHITE),
    new wglt_1.Message('6 Armor', wglt_1.Colors.WHITE)
];
class SquiresPants extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.LEGS);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 6;
    }
}
exports.SquiresPants = SquiresPants;


/***/ }),

/***/ "./src/equipment/squiresvest.ts":
/*!**************************************!*\
  !*** ./src/equipment/squiresvest.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const NAME = 'Squire\'s Vest';
const SPRITE = new wglt_1.Sprite(608, 288, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Chest, Plate', wglt_1.Colors.WHITE),
    new wglt_1.Message('7 Armor', wglt_1.Colors.WHITE)
];
class SquiresVest extends equipment_1.Equipment {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.CHEST);
        this.tooltipMessages = TOOLTIPS;
        this.bonusArmor = 7;
    }
}
exports.SquiresVest = SquiresVest;


/***/ }),

/***/ "./src/equipment/weapon.ts":
/*!*********************************!*\
  !*** ./src/equipment/weapon.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
class Weapon extends equipment_1.Equipment {
    constructor() {
        super(...arguments);
        this.minDamage = 1;
        this.maxDamage = 2;
        this.ranged = false;
        this.finesse = false;
    }
}
exports.Weapon = Weapon;


/***/ }),

/***/ "./src/equipment/weatheredcrossbow.ts":
/*!********************************************!*\
  !*** ./src/equipment/weatheredcrossbow.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const weapon_1 = __webpack_require__(/*! ./weapon */ "./src/equipment/weapon.ts");
const NAME = 'Weathered Crossbow';
const SPRITE = new wglt_1.Sprite(896, 96, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Ranged Crossbow', wglt_1.Colors.WHITE),
    new wglt_1.Message('1-2 Damage', wglt_1.Colors.WHITE)
];
class WeatheredCrossbow extends weapon_1.Weapon {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.MAINHAND);
        this.tooltipMessages = TOOLTIPS;
        this.ranged = true;
        this.finesse = true;
    }
}
exports.WeatheredCrossbow = WeatheredCrossbow;


/***/ }),

/***/ "./src/equipment/worndirk.ts":
/*!***********************************!*\
  !*** ./src/equipment/worndirk.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const weapon_1 = __webpack_require__(/*! ./weapon */ "./src/equipment/weapon.ts");
const NAME = 'Worn Dirk';
const SPRITE = new wglt_1.Sprite(672, 96, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('One-Hand Dagger', wglt_1.Colors.WHITE),
    new wglt_1.Message('1-2 Damage', wglt_1.Colors.WHITE)
];
class WornDirk extends weapon_1.Weapon {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.MAINHAND);
        this.tooltipMessages = TOOLTIPS;
        this.finesse = true;
        this.bonusDexterity = 10;
    }
}
exports.WornDirk = WornDirk;


/***/ }),

/***/ "./src/equipment/worngreatsword.ts":
/*!*****************************************!*\
  !*** ./src/equipment/worngreatsword.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/equipment/equipment.ts");
const weapon_1 = __webpack_require__(/*! ./weapon */ "./src/equipment/weapon.ts");
const NAME = 'Worn Greatsword';
const SPRITE = new wglt_1.Sprite(624, 96, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
    new wglt_1.Message(NAME, wglt_1.Colors.WHITE),
    new wglt_1.Message('Item Level 1', wglt_1.Colors.YELLOW),
    new wglt_1.Message('Two-Hand Sword', wglt_1.Colors.WHITE),
    new wglt_1.Message('1-2 Damage', wglt_1.Colors.WHITE)
];
class WornGreatsword extends weapon_1.Weapon {
    constructor(game, x, y) {
        super(game, x || 0, y || 0, NAME, SPRITE, equipment_1.EquipmentSlot.MAINHAND);
        this.tooltipMessages = TOOLTIPS;
    }
}
exports.WornGreatsword = WornGreatsword;


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
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const TARGET_SPRITE = new wglt_1.Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
class Game extends wglt.Game {
    constructor(app) {
        super(app, {
            tileSize: new wglt_1.Rect(0, 0, 16, 24),
            horizontalViewDistance: 8,
            verticalViewDistance: 6
        });
        this.targetSprite = TARGET_SPRITE;
        this.cooldownSprite = new wglt_1.Sprite(192, 16, 16, 24, 24);
        this.blackoutRect = new wglt_1.Rect(0, 40, 16, 16);
        this.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
        this.mapGen = new mapgen_1.MapGenerator(this);
        const player = new player_1.Player(this, 30, 20);
        this.player = player;
        this.entities.push(player);
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
            inventoryDialog.visible = !inventoryDialog.visible;
            talentsDialog.visible = false;
            characterDialog.visible = false;
        });
        inventoryButton.tooltipMessages = [
            new wglt_1.Message('Traveler\'s Backpack', wglt_1.Colors.GREEN),
            new wglt_1.Message('Item Level 55', wglt_1.Colors.YELLOW),
            new wglt_1.Message('16 Slot Bag', wglt_1.Colors.WHITE),
            new wglt_1.Message('Sell Price: 87 coins', wglt_1.Colors.WHITE)
        ];
        bottomPanel.inventorySlot.add(inventoryButton);
        const characterButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(640, 240, 16, 24, undefined, undefined, undefined, 0xffcf5cff), undefined, () => {
            characterDialog.visible = !characterDialog.visible;
            inventoryDialog.visible = false;
            talentsDialog.visible = false;
        });
        characterButton.tooltipMessages = [
            new wglt_1.Message('Character', wglt_1.Colors.WHITE),
            new wglt_1.Message('Currently equipped items,', wglt_1.Colors.YELLOW),
            new wglt_1.Message('stats and abilities.', wglt_1.Colors.YELLOW)
        ];
        topPanel.characterSlot.add(characterButton);
        const talentsButton = new wglt_1.Button(new wglt_1.Rect(0, 0, 20, 28), new wglt_1.Sprite(656, 360, 16, 24, undefined, undefined, undefined, wglt_1.Colors.LIGHT_BLUE), undefined, () => {
            talentsDialog.visible = !talentsDialog.visible;
            inventoryDialog.visible = false;
            characterDialog.visible = false;
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
        const inventoryDialog = new wglt_1.ItemContainerDialog(new wglt_1.Rect(4, 38, 94, 126), [
            new wglt_1.Message('Traveler\'s Backpack', wglt_1.Colors.GREEN),
            new wglt_1.Message('Click an item to use', wglt_1.Colors.LIGHT_GRAY),
            new wglt_1.Message('Drag for shortcut', wglt_1.Colors.LIGHT_GRAY)
        ], 16, player.inventory);
        inventoryDialog.visible = false;
        this.gui.add(inventoryDialog);
        const characterDialog = new characterdialog_1.CharacterDialog(new wglt_1.Rect(4, 38, 120, 126), player);
        characterDialog.visible = false;
        this.gui.add(characterDialog);
        const talentsDialog = new wglt_1.TalentsDialog(new wglt_1.Rect(4, 38, 94, 126), [
            new wglt_1.Message('Talents', wglt_1.Colors.GREEN),
            new wglt_1.Message('Click an ability to use', wglt_1.Colors.LIGHT_GRAY),
            new wglt_1.Message('Drag for shortcut', wglt_1.Colors.LIGHT_GRAY)
        ], 16, player.talents);
        talentsDialog.visible = false;
        this.gui.add(talentsDialog);
        const levelUpDialog = new levelupdialog_1.LevelUpDialog(new wglt_1.Rect(4, 38, 140, 126), player);
        levelUpDialog.visible = false;
        this.gui.add(levelUpDialog);
        this.levelUpDialog = levelUpDialog;
        player.inventory.addListener({
            onAdd: (_, item) => {
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
const equipment_1 = __webpack_require__(/*! ../equipment/equipment */ "./src/equipment/equipment.ts");
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
            case equipment_1.EquipmentSlot.HEAD:
                return this.headSlot;
            case equipment_1.EquipmentSlot.NECK:
                return this.neckSlot;
            case equipment_1.EquipmentSlot.BACK:
                return this.backSlot;
            case equipment_1.EquipmentSlot.CHEST:
                return this.chestSlot;
            case equipment_1.EquipmentSlot.HANDS:
                return this.handsSlot;
            case equipment_1.EquipmentSlot.LEGS:
                return this.legsSlot;
            case equipment_1.EquipmentSlot.FEET:
                return this.feetSlot;
            case equipment_1.EquipmentSlot.RING:
                return this.ringSlot;
            case equipment_1.EquipmentSlot.MAINHAND:
                return this.mainHandSlot;
            case equipment_1.EquipmentSlot.OFFHAND:
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
const monster_1 = __webpack_require__(/*! ../entities/monster */ "./src/entities/monster.ts");
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
        const entities = this.game.entities;
        const x = 2;
        let y = 40;
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            if (entity === this.game.player || !(entity instanceof statsactor_1.StatsActor)) {
                continue;
            }
            const actor = entity;
            if (!actor.showFrame || actor.visibleDuration < 0) {
                continue;
            }
            // Draw the frame
            app.drawImage(2, y, 64, 48, 54, 18);
            // Draw the name
            const color = actor instanceof monster_1.Monster ? wglt_1.Colors.DARK_RED : wglt_1.Colors.DARK_GREEN;
            app.drawImage(x + 1, y + 1, bo.x, bo.y, bo.width, bo.height, color, 38, 7);
            app.drawCenteredString(actor.name, x + 20, y + 1, wglt_1.Colors.YELLOW);
            // Draw the health
            const healthWidth = Math.round(38.0 * actor.hp / actor.maxHp);
            app.drawImage(x + 1, y + 9, bo.x, bo.y, bo.width, bo.height, wglt_1.Colors.DARK_GREEN, healthWidth, 7);
            app.drawCenteredString(actor.hp + '/' + actor.maxHp, x + 20, y + 9, wglt_1.Colors.WHITE);
            // Draw the level
            const levelColor = wglt_1.Colors.RED;
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
        const app = this.gui.app;
        app.drawImage(0, 0, 32, 22, 16, 42, undefined, app.size.width, 42);
        app.drawString('Oryx the Brave'.toUpperCase(), 1, 1, wglt_1.Colors.WHITE);
        // Health
        app.drawImage(2, 12, 128, 16, 12, 12);
        app.drawString(this.player.hp.toString(), 16, 15);
        // Mana
        app.drawImage(38, 12, 144, 16, 12, 12);
        app.drawString('88', 52, 15);
        // Energy
        app.drawImage(74, 12, 160, 16, 12, 12);
        app.drawString('88', 88, 15);
        // Update button x-positions to right align
        // This will normally be a no-op
        for (let i = 0; i < this.children.length; i++) {
            this.children.get(i).rect.x = app.size.width - 24 * (4 - i);
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
    if (hash === '#game') {
        app.startGame();
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
}
exports.Gateway = Gateway;


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
        super(game, x, y, 'health potion', SPRITE, false);
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
        game.warpToPoint(player.home);
        return true;
    }
}
exports.Hearthstone = Hearthstone;


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
    { display: 'NEW GAME', hash: 'chooserace', enabled: true },
    { display: 'CONTINUE', hash: 'game', enabled: false },
    { display: 'ENTER SEED', hash: 'seed', enabled: true },
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
// Size of the map
const MAP_WIDTH = 512;
const MAP_HEIGHT = 512;
const OVERWORLD_WIDTH = 256;
const OVERWORLD_HEIGHT = 256;
const DUNGEON_WIDTH = 64;
const DUNGEON_HEIGHT = 48;
const TILE_EMPTY = 0;
const TILE_SHADOW = getTileId(0, 3);
const TILE_WALL = getTileId(0, 19);
const TILE_HALF_WALL = getTileId(0, 20);
const TILE_HALF_WALL2 = getTileId(1, 20);
const TILE_HALF_WALL3 = getTileId(2, 20);
const TILE_FLOOR = getTileId(13, 17);
const TILE_WATER = getTileId(0, 18);
const TILE_BRIDGE = getTileId(15, 27);
const TILE_COBWEB_NORTHWEST = getTileId(28, 22);
const TILE_COBWEB_NORTHEAST = getTileId(29, 22);
const TILE_COBWEB_SOUTHWEST = getTileId(30, 22);
const TILE_COBWEB_SOUTHEAST = getTileId(31, 22);
const TILE_DOOR = getTileId(7, 19);
const TILE_STAIRS_DOWN = getTileId(14, 18);
const TILE_STAIRS_UP = getTileId(15, 18);
const TILE_BARREL = getTileId(24, 19);
const TILE_STATUE = getTileId(16, 20);
const TILE_GRASS = getTileId(0, 17);
const TILE_TREE = getTileId(22, 23);
function getTileId(tileX, tileY) {
    return 1 + tileY * 64 + tileX;
}
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
        this.game = game;
        const map = new wglt_1.TileMap(game.app.gl, MAP_WIDTH, MAP_HEIGHT, 4);
        map.tileWidth = 16;
        map.tileHeight = 24;
        game.tileMap = map;
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
        game.entities.push(portal1);
        game.entities.push(portal2);
        // Connect all of the dungeon floors to each other
        for (let i = 1; i < 10; i++) {
            const exit = dungeons[i - 1].exit;
            const entrance = dungeons[i].entrance;
            exit.other = entrance;
            entrance.other = exit;
        }
    }
    createOverworld() {
        const game = this.game;
        const map = game.tileMap;
        const player = game.player;
        const rng = game.rng;
        const overworld = new wglt_1.Rect(0, 0, OVERWORLD_WIDTH, OVERWORLD_HEIGHT);
        this.clearMap(map, overworld, TILE_GRASS, false);
        player.x = (OVERWORLD_WIDTH / 2) | 0;
        player.y = (OVERWORLD_HEIGHT / 2) | 0;
        player.home.x = player.x;
        player.home.y = player.y;
        // Make sure there's a ring of water around the map
        for (let x = overworld.x1; x < overworld.x2; x++) {
            // Top
            map.setTile(0, x, overworld.y1, TILE_GRASS, true);
            map.setTile(1, x, overworld.y1, TILE_TREE);
            // Bottom
            map.setTile(0, x, overworld.y2 - 1, TILE_GRASS, true);
            map.setTile(1, x, overworld.y2 - 1, TILE_TREE);
        }
        for (let y = overworld.y1; y < overworld.y2; y++) {
            // Left
            map.setTile(0, overworld.x1, y, TILE_GRASS, true);
            map.setTile(1, overworld.x1, y, TILE_TREE);
            // Right
            map.setTile(0, overworld.x2 - 1, y, TILE_GRASS, true);
            map.setTile(1, overworld.x2 - 1, y, TILE_TREE);
        }
        for (let i = 0; i < 1000; i++) {
            const treeX = rng.nextRange(overworld.x1, overworld.x2);
            const treeY = rng.nextRange(overworld.y1, overworld.y2);
            if (treeX !== player.x || treeY !== player.y) {
                map.setTile(0, treeX, treeY, TILE_GRASS, true);
                map.setTile(1, treeX, treeY, TILE_TREE);
            }
        }
        // Create moat
        for (let y = 17; y <= 53; y++) {
            for (let x = 17; x <= 53; x++) {
                map.setTile(0, x, y, TILE_WATER, true, false);
                map.setTile(1, x, y, TILE_EMPTY);
                map.setAnimated(x, y, 0, true);
            }
        }
        // Create castle
        for (let y = 19; y <= 51; y++) {
            for (let x = 19; x <= 51; x++) {
                map.setTile(0, x, y, TILE_FLOOR, false);
                map.setAnimated(x, y, 0, false);
            }
        }
        // Create castle walls
        for (let x = 19; x <= 51; x++) {
            map.setTile(0, x, 19, TILE_WALL, true);
            map.setTile(0, x, 51, TILE_WALL, true);
        }
        for (let y = 19; y <= 51; y++) {
            map.setTile(0, 19, y, TILE_WALL, true);
            map.setTile(0, 51, y, TILE_WALL, true);
        }
        // Create draw bridges
        for (let y = 16; y <= 19; y++) {
            for (let x = 34; x <= 35; x++) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
                map.setAnimated(x, y, 0, false);
            }
        }
        for (let y = 51; y <= 54; y++) {
            for (let x = 34; x <= 35; x++) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
                map.setAnimated(x, y, 0, false);
            }
        }
        for (let y = 34; y <= 35; y++) {
            for (let x = 16; x <= 19; x++) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
                map.setAnimated(x, y, 0, false);
            }
        }
        for (let y = 34; y <= 35; y++) {
            for (let x = 51; x <= 54; x++) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
                map.setAnimated(x, y, 0, false);
            }
        }
        // Create guards
        for (let i = 0; i < 10; i++) {
            const waypoints = [new wglt_1.Vec2(rng.nextRange(21, 49), rng.nextRange(21, 49))];
            for (let j = 1; j < 4; j++) {
                const prev = waypoints[j - 1];
                if (rng.nextRange(0, 2) === 0) {
                    waypoints.push(new wglt_1.Vec2(prev.x, rng.nextRange(21, 49)));
                }
                else {
                    waypoints.push(new wglt_1.Vec2(rng.nextRange(21, 49), prev.y));
                }
            }
            const guard = new guard_1.Guard(game, waypoints[0].x, waypoints[0].y, waypoints);
            game.entities.push(guard);
        }
        // Create portal entrance
        const portalSprite = new wglt_1.Sprite(528, 408, 16, 24, 1, false, undefined, 0xFF00FFFF);
        const portal1 = new portal_1.Portal(game, player.x + 2, player.y, 'portal', portalSprite);
        const portal2 = new portal_1.Portal(game, 35, 35, 'portal', portalSprite);
        portal1.other = portal2;
        portal2.other = portal1;
        game.entities.push(portal1);
        game.entities.push(portal2);
        // Initial FOV
        game.resetViewport();
        game.recomputeFov();
    }
    createDungeon(dungeon) {
        const game = this.game;
        const map = game.tileMap;
        const rng = game.rng;
        // Clear the map to all walls
        this.clearMap(map, dungeon.rect, TILE_WALL, true);
        // Create bodies of water
        const water = dungeon.rect.getCenter();
        for (let i = 0; i < 200; i++) {
            map.setTile(0, water.x, water.y, TILE_WATER, true, false);
            map.setTile(0, water.x - 1, water.y, TILE_WATER, true, false);
            map.setTile(0, water.x + 1, water.y, TILE_WATER, true, false);
            map.setTile(0, water.x, water.y - 1, TILE_WATER, true, false);
            map.setTile(0, water.x, water.y + 1, TILE_WATER, true, false);
            map.setAnimated(water.x, water.y, 0, true);
            map.setAnimated(water.x - 1, water.y, 0, true);
            map.setAnimated(water.x + 1, water.y, 0, true);
            map.setAnimated(water.x, water.y - 1, 0, true);
            map.setAnimated(water.x, water.y + 1, 0, true);
            water.x += rng.nextRange(-1, 2);
            water.y += rng.nextRange(-1, 2);
        }
        // Make sure there's a ring of "empty" all around
        for (let x = dungeon.rect.x1; x < dungeon.rect.x2; x++) {
            map.setTile(0, x, dungeon.rect.y1, TILE_EMPTY, true);
            map.setAnimated(x, dungeon.rect.y1, 0, false);
            map.setTile(0, x, dungeon.rect.y2 - 1, TILE_EMPTY, true);
            map.setAnimated(x, dungeon.rect.y2 - 1, 0, false);
        }
        for (let y = dungeon.rect.y1; y < dungeon.rect.y2; y++) {
            map.setTile(0, dungeon.rect.x1, y, TILE_EMPTY, true);
            map.setAnimated(dungeon.rect.x1, y, 0, false);
            map.setTile(0, dungeon.rect.x2 - 1, y, TILE_EMPTY, true);
            map.setAnimated(dungeon.rect.x2 - 1, y, 0, false);
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
                game.entities.push(dungeon.entrance);
                map.setTile(0, center.x, center.y, TILE_STAIRS_UP);
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
            // Create a door to boss room
            if (center.y > prev.y) {
                map.setTile(0, center.x, bossRoom.y1, TILE_DOOR, false, true);
            }
            else {
                map.setTile(0, center.x, bossRoom.y2, TILE_DOOR, false, true);
            }
            // Create boss
            const bossLevel = dungeon.level * 3 + 5;
            const dice = rng.nextRange(0, 1000);
            if (dice !== 0) {
                const redDragon = new reddragon_1.RedDragon(game, center.x, center.y, bossLevel, bossRoom);
                game.entities.push(redDragon);
            }
            else {
                const griffon = new griffon_1.Griffon(game, center.x, center.y, bossLevel);
                game.entities.push(griffon);
            }
            // Create stairs room
            this.createRoom(map, stairsRoom);
            // Create stairs
            const stairsLoc = stairsRoom.getCenter();
            this.createHTunnel(map, center.x, stairsLoc.x, stairsLoc.y);
            map.setTile(0, stairsLoc.x, stairsLoc.y, TILE_STAIRS_DOWN);
            dungeon.exit = new portal_1.Portal(game, stairsLoc.x, stairsLoc.y, 'stairs', STAIRS_SPRITE);
            game.entities.push(dungeon.exit);
        }
        // Touch up walls / half walls
        for (let y = dungeon.rect.y1; y < dungeon.rect.y2; y++) {
            for (let x = dungeon.rect.x1; x < dungeon.rect.x2; x++) {
                const t1 = map.getTile(x, y);
                const t2 = map.getTile(x, y + 1);
                const t3 = map.getTile(x - 1, y);
                const t4 = map.getTile(x + 1, y);
                const t5 = map.getTile(x, y - 1);
                if (t1 === TILE_FLOOR && t3 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(1, x, y, TILE_COBWEB_NORTHWEST);
                }
                if (t1 === TILE_FLOOR && t4 === TILE_WALL && t5 === TILE_HALF_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(1, x, y, TILE_COBWEB_NORTHEAST);
                }
                if (t1 === TILE_FLOOR && t3 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(1, x, y, TILE_COBWEB_SOUTHWEST);
                }
                if (t1 === TILE_FLOOR && t4 === TILE_WALL && t2 === TILE_WALL && rng.nextRange(0, 4) === 0) {
                    map.setTile(1, x, y, TILE_COBWEB_SOUTHEAST);
                }
                if (t1 === TILE_DOOR) {
                    map.setTile(2, x, y + 1, TILE_SHADOW);
                }
                if (t1 === TILE_WALL && t2 !== TILE_WALL) {
                    const r = rng.nextRange(0, 20);
                    if (r === 0) {
                        map.setTile(0, x, y, TILE_HALF_WALL2, true);
                    }
                    else if (r === 1) {
                        map.setTile(0, x, y, TILE_HALF_WALL3, true);
                    }
                    else {
                        map.setTile(0, x, y, TILE_HALF_WALL, true);
                    }
                    map.setTile(2, x, y + 1, TILE_SHADOW);
                }
                if (t1 !== TILE_WATER && t2 === TILE_WATER) {
                    map.setTile(2, x, y + 1, TILE_SHADOW);
                }
                const nearBridge = t2 === TILE_BRIDGE || t3 === TILE_BRIDGE || t4 === TILE_BRIDGE || t5 === TILE_BRIDGE;
                if (t1 === TILE_WATER && nearBridge && rng.nextRange(0, 20) === 1) {
                    game.entities.push(new shark_1.Shark(game, x, y));
                }
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
    clearMap(map, rect, tile, blocked) {
        for (let y = rect.y1; y < rect.y2; y++) {
            for (let x = rect.x1; x < rect.x2; x++) {
                map.setTile(0, x, y, tile, blocked);
                map.setAnimated(x, y, 0, false);
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
                map.setTile(0, x, y, TILE_FLOOR, false);
                map.setAnimated(x, y, 0, false);
            }
        }
    }
    createHTunnel(map, x1, x2, y) {
        for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
            const existing = map.getTile(x, y);
            if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
                continue;
            }
            if (existing === TILE_WATER) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
            }
            else {
                map.setTile(0, x, y, TILE_FLOOR, false);
            }
            map.setAnimated(x, y, 0, false);
        }
    }
    createVTunnel(map, y1, y2, x) {
        for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
            const existing = map.getTile(x, y);
            if (existing === TILE_STAIRS_UP || existing === TILE_STAIRS_DOWN) {
                continue;
            }
            if (existing === TILE_WATER) {
                map.setTile(0, x, y, TILE_BRIDGE, false);
            }
            else {
                map.setTile(0, x, y, TILE_FLOOR, false);
            }
            map.setAnimated(x, y, 0, false);
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
            game.entities.push(monster);
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
            game.entities.push(item);
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
                map.setTile(0, x, y, TILE_FLOOR, true, false);
                map.setTile(1, x, y, TILE_BARREL);
            }
            else {
                // Create a statue
                map.setTile(0, x, y, TILE_FLOOR, true, false);
                map.setTile(1, x, y, TILE_STATUE);
            }
        }
    }
}
exports.MapGenerator = MapGenerator;


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


/***/ })

/******/ });
//# sourceMappingURL=index.js.map