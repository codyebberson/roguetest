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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=32)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Vec2=class{constructor(t,e){this.x=t,this.y=e}add(t){this.x+=t.x,this.y+=t.y}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Effect=class{constructor(t,e){this.countdown=t,this.blocking=e}isDone(){return this.countdown<=0}update(){this.countdown--}draw(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0);class r extends s.Vec2{constructor(t,e,i,s){super(t,e),this.width=i,this.height=s}get x1(){return this.x}get y1(){return this.y}get x2(){return this.x+this.width}get y2(){return this.y+this.height}get left(){return this.x}get top(){return this.y}clone(){return new r(this.x,this.y,this.width,this.height)}getCenter(){return new s.Vec2(this.x+this.width/2|0,this.y+this.height/2|0)}intersects(t){return this.x<=t.x2&&this.x2>=t.x&&this.y<=t.y2&&this.y2>=t.y}contains(t){return t.x>=this.x&&t.x<=this.x2&&t.y>=this.y&&t.y<=this.y2}}e.Rect=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(13);e.Panel=class{constructor(t){this.gui=null,this.rect=t,this.children=new s.XArray,this.modal=!1,this.visible=!0}setGui(t){if(!this.gui){this.gui=t;for(let e=0;e<this.children.length;e++)this.children.get(e).setGui(t)}}add(t){t.parent=this,t.setGui(this.gui),this.children.add(t)}remove(t){this.children.remove(t)}move(t){this.parent&&this.parent.remove(this),t.add(this)}getPanelAt(t){for(let e=this.children.length-1;e>=0;e--){const i=this.children.get(e);if(!i.visible)continue;if(i.isDragging())continue;const s=i.getPanelAt(t);if(s)return s}if(this.rect.contains(t))return this}drawContents(){this.drawChildren()}drawChildren(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);e.visible&&e.drawContents()}}handleInput(){return this.handleChildrenInput()}handleChildrenInput(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(e.visible&&(e.handleInput()||e.modal))return!0}return!1}isDragging(){return this.gui&&this.gui.dragElement===this}onDrop(t){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{}s.VK_CANCEL=3,s.VK_HELP=6,s.VK_BACK_SPACE=8,s.VK_TAB=9,s.VK_CLEAR=12,s.VK_ENTER=13,s.VK_SHIFT=16,s.VK_CONTROL=17,s.VK_ALT=18,s.VK_PAUSE=19,s.VK_CAPS_LOCK=20,s.VK_ESCAPE=27,s.VK_SPACE=32,s.VK_PAGE_UP=33,s.VK_PAGE_DOWN=34,s.VK_END=35,s.VK_HOME=36,s.VK_LEFT=37,s.VK_UP=38,s.VK_RIGHT=39,s.VK_DOWN=40,s.VK_PRINTSCREEN=44,s.VK_INSERT=45,s.VK_DELETE=46,s.VK_0=48,s.VK_1=49,s.VK_2=50,s.VK_3=51,s.VK_4=52,s.VK_5=53,s.VK_6=54,s.VK_7=55,s.VK_8=56,s.VK_9=57,s.VK_COLON=58,s.VK_SEMICOLON=59,s.VK_LESS_THAN=60,s.VK_EQUALS=61,s.VK_GREATER_THAN=62,s.VK_QUESTION_MARK=63,s.VK_AT=64,s.VK_A=65,s.VK_B=66,s.VK_C=67,s.VK_D=68,s.VK_E=69,s.VK_F=70,s.VK_G=71,s.VK_H=72,s.VK_I=73,s.VK_J=74,s.VK_K=75,s.VK_L=76,s.VK_M=77,s.VK_N=78,s.VK_O=79,s.VK_P=80,s.VK_Q=81,s.VK_R=82,s.VK_S=83,s.VK_T=84,s.VK_U=85,s.VK_V=86,s.VK_W=87,s.VK_X=88,s.VK_Y=89,s.VK_Z=90,s.VK_CONTEXT_MENU=93,s.VK_NUMPAD0=96,s.VK_NUMPAD1=97,s.VK_NUMPAD2=98,s.VK_NUMPAD3=99,s.VK_NUMPAD4=100,s.VK_NUMPAD5=101,s.VK_NUMPAD6=102,s.VK_NUMPAD7=103,s.VK_NUMPAD8=104,s.VK_NUMPAD9=105,s.VK_MULTIPLY=106,s.VK_ADD=107,s.VK_SEPARATOR=108,s.VK_SUBTRACT=109,s.VK_DECIMAL=110,s.VK_DIVIDE=111,s.VK_F1=112,s.VK_F2=113,s.VK_F3=114,s.VK_F4=115,s.VK_F5=116,s.VK_F6=117,s.VK_F7=118,s.VK_F8=119,s.VK_F9=120,s.VK_F10=121,s.VK_F11=122,s.VK_F12=123,s.VK_F13=124,s.VK_F14=125,s.VK_F15=126,s.VK_F16=127,s.VK_F17=128,s.VK_F18=129,s.VK_F19=130,s.VK_F20=131,s.VK_F21=132,s.VK_F22=133,s.VK_F23=134,s.VK_F24=135,s.VK_NUM_LOCK=144,s.VK_SCROLL_LOCK=145,s.VK_CIRCUMFLEX=160,s.VK_EXCLAMATION=161,s.VK_DOUBLE_QUOTE=162,s.VK_HASH=163,s.VK_DOLLAR=164,s.VK_PERCENT=165,s.VK_AMPERSAND=166,s.VK_UNDERSCORE=167,s.VK_OPEN_PAREN=168,s.VK_CLOSE_PAREN=169,s.VK_ASTERISK=170,s.VK_PLUS=171,s.VK_PIPE=172,s.VK_HYPHEN_MINUS=173,s.VK_OPEN_CURLY_BRACKET=174,s.VK_CLOSE_CURLY_BRACKET=175,s.VK_TILDE=176,s.VK_COMMA=188,s.VK_PERIOD=190,s.VK_SLASH=191,s.VK_BACK_QUOTE=192,s.VK_OPEN_BRACKET=219,s.VK_BACK_SLASH=220,s.VK_CLOSE_BRACKET=221,s.VK_QUOTE=222,s.VK_META=224,s.VK_ALTGR=225,s.VK_WIN=91,s.VK_KANA=21,s.VK_HANGUL=21,s.VK_EISU=22,s.VK_JUNJA=23,s.VK_FINAL=24,s.VK_HANJA=25,s.VK_KANJI=25,s.VK_CONVERT=28,s.VK_NONCONVERT=29,s.VK_ACCEPT=30,s.VK_MODECHANGE=31,s.VK_SELECT=41,s.VK_PRINT=42,s.VK_EXECUTE=43,s.VK_SLEEP=95,e.Keys=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8);class r{}r.BLACK=s.fromRgb(0,0,0),r.WHITE=s.fromRgb(255,255,255),r.GRAY=s.fromRgb(128,128,128),r.LIGHT_GRAY=s.fromRgb(170,170,170),r.DARK_GRAY=s.fromRgb(85,85,85),r.YELLOW=s.fromRgb(255,255,85),r.BROWN=s.fromRgb(170,85,0),r.RED=s.fromRgb(255,0,0),r.LIGHT_RED=s.fromRgb(255,85,85),r.DARK_RED=s.fromRgb(170,0,0),r.GREEN=s.fromRgb(0,255,0),r.LIGHT_GREEN=s.fromRgb(85,255,85),r.DARK_GREEN=s.fromRgb(0,170,0),r.LIGHT_CYAN=s.fromRgb(85,255,255),r.DARK_CYAN=s.fromRgb(0,170,170),r.LIGHT_BLUE=s.fromRgb(85,85,255),r.DARK_BLUE=s.fromRgb(0,0,170),r.LIGHT_MAGENTA=s.fromRgb(255,85,255),r.DARK_MAGENTA=s.fromRgb(170,0,170),r.ORANGE=s.fromRgb(255,136,0),e.Colors=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.Button=class extends s.Panel{constructor(t,e,i,s){super(t),this.sprite=e,this.shortcutKey=i,this.onClick=s}drawContents(){if(!this.gui)return;const t=this.sprite,e=this.rect,i=(e.width-t.width)/2|0,s=(e.height-t.height)/2|0;t.draw(this.gui.app,e.x+i,e.y+s)}handleInput(){if(!this.gui)return!1;const t=this.gui.app,e=t.mouse;return this.rect.contains(e.start)&&e.isDragging()?(this.gui.startDragging(this),!0):this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked()?(this.click(),!0):e.down&&this.rect.contains(e)}click(){this.onClick&&this.onClick()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.Dialog=class extends s.Panel{constructor(t,e){super(t),this.title=e,this.closeButton=!1}drawContents(){this.gui&&this.gui.renderer.draw(this.gui.app,this)}handleInput(){return!1}close(){this.gui&&this.gui.remove(this)}}},function(t,e,i){"use strict";function s(t,e,i,s){return void 0===s&&(s=255),(t<<24)+(e<<16)+(i<<8)+s}Object.defineProperty(e,"__esModule",{value:!0}),e.fromRgb=s,e.fromHsv=function(t,e,i,r){const n=6*t|0,o=6*t-n,h=i*(1-e),a=i*(1-o*e),c=i*(1-(1-o)*e);let l,d,u;switch(n%6){case 0:l=i,d=c,u=h;break;case 1:l=a,d=i,u=h;break;case 2:l=h,d=i,u=c;break;case 3:l=h,d=a,u=i;break;case 4:l=c,d=h,u=i;break;case 5:l=i,d=h,u=a;break;default:l=0,d=0,u=0}return void 0===r&&(r=1),s(255*l|0,255*d|0,255*u|0,255*r|0)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.ButtonSlot=class extends s.Panel{constructor(t,e){super(t),this.shortcutKey=e}get button(){return this.children.length>0?this.children.get(0):void 0}drawContents(){if(!this.gui)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;e&&this.gui.app.drawImage(t.x,t.y,e.x,e.y,t.width,t.height);const i=this.button;i&&!i.isDragging()&&(i.rect.x=this.rect.x,i.rect.y=this.rect.y,i.rect.width=this.rect.width,i.rect.height=this.rect.height,this.drawChildren()),this.shortcutKey&&this.gui.app.drawRightString(String.fromCharCode(this.shortcutKey),t.x2-3,t.y+3)}handleInput(){if(!this.gui)return!1;if(this.handleChildrenInput())return!0;const t=this.gui.app,e=t.mouse,i=this.button;return i&&(this.shortcutKey&&t.isKeyPressed(this.shortcutKey)||this.rect.contains(e)&&e.isClicked())?(i.click(),!0):e.down&&this.rect.contains(e)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(13),r=i(6);e.ItemButton=class extends r.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.stackItems=new s.XArray,this.stackItems.add(i)}click(){if(this.stackItems.length>0){const t=this.stackItems.get(0),e=t.game.player;e&&e.use(t)}}drawContents(){if(this.gui&&(super.drawContents(),this.stackItems.length>1)){const t=this.rect;this.gui.app.drawString(this.stackItems.length.toString(),t.x2-7,t.y2-10)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.SELF=0]="SELF",t[t.ENTITY=1]="ENTITY",t[t.TILE=2]="TILE"}(e.TargetType||(e.TargetType={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0);e.Entity=class extends s.Vec2{constructor(t,e,i,r,n,o){super(e,i),this.game=t,this.offset=new s.Vec2(0,0),this.name=r,this.sprite=n,this.blocks=o}get pixelX(){return this.x*this.game.tileSize.width+this.offset.x}get pixelY(){return this.y*this.game.tileSize.height+this.offset.y}distanceTo(t){return Math.hypot(t.x-this.x,t.y-this.y)}distance(t,e){return Math.hypot(t-this.x,e-this.y)}draw(){this.sprite.draw(this.game.app,this.pixelX-this.game.viewport.x,this.pixelY-this.game.viewport.y)}sendToBack(){}onBump(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.XArray=class{constructor(){this.elements=[]}get length(){return this.elements.length}get(t){return this.elements[t]}add(t){if(this.elements.push(t),this.listeners)for(let e=0;e<this.listeners.length;e++)this.listeners[e].onAdd(this,t)}remove(t){const e=this.elements.indexOf(t);if(e>=0&&(this.elements.splice(e,1),this.listeners))for(let e=0;e<this.listeners.length;e++)this.listeners[e].onRemove(this,t)}contains(t){return this.elements.indexOf(t)>=0}addListener(t){this.listeners||(this.listeners=[]),this.listeners.push(t)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AI=class{constructor(t){this.actor=t,this.activatedCount=-1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Input=class{constructor(){this.down=!1,this.downCount=0,this.upCount=0}update(){this.down?(this.downCount++,this.upCount=0):(this.downCount=0,this.upCount++)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(6);e.ItemShortcutButton=class extends s.Button{constructor(t,e,i){super(t,i.sprite),this.containerItems=e,this.shortcutItem=i}click(){const t=this.getItem();if(t){const e=t.game.player;e&&e.use(t)}}drawContents(){if(this.gui&&(super.drawContents(),!this.isDragging())){const t=this.rect,e=this.countItems();this.gui.app.drawRightString(e.toString(),t.x2-3,t.y2-10)}}getItem(){for(let t=0;t<this.containerItems.length;t++){const e=this.containerItems.get(t);if(e.name===this.shortcutItem.name)return e}}countItems(){let t=0;for(let e=0;e<this.containerItems.length;e++)this.containerItems.get(e).name===this.shortcutItem.name&&t++;return t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(6);e.TalentButton=class extends s.Button{constructor(t,e){super(t,e.ability.sprite),this.talent=e}click(){this.talent.actor.cast(this.talent.ability)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=i(5),n=i(19),o=i(20),h=i(21),a=i(12),c=i(13);e.Actor=class extends a.Entity{constructor(t,e,i,s,r,n){super(t,e,i,s,r,n),this.hp=100,this.maxHp=100,this.ap=1,this.maxAp=1,this.inventory=new c.XArray,this.talents=new c.XArray}move(t,e){const i=this.x+t,s=this.y+e;if(this.game.isBlocked(i,s))return!1;const r=this.game.tileSize.width/4,n=this.game.tileSize.height/4;return this.game.effects.push(new h.SlideEffect(this,t*r,e*n,4)),this.game.blocked=!0,this.ap--,!0}moveToward(t,e){const i=t-this.x,s=e-this.y,r=Math.hypot(i,s);this.move(Math.round(i/r),Math.round(s/r))}attack(t){t!==this&&(this.onAttack&&this.onAttack(t,10),t.takeDamage(10),this.ap--,this.game.effects.push(new n.BumpEffect(this,t)),this.game.blocked=!0)}takeHeal(t){this.hp=Math.min(this.hp+t,this.maxHp),this.game.effects.push(new o.FloatingTextEffect(t.toString(),this.pixelX+8,this.pixelY-4,r.Colors.LIGHT_GREEN))}takeDamage(t){if(this.hp-=t,this.game.effects.push(new o.FloatingTextEffect(t.toString(),this.pixelX+8,this.pixelY-4,r.Colors.RED)),this.hp<=0){this.hp=0,this.onDeath&&this.onDeath();const t=this.game.entities.indexOf(this);t>=0&&this.game.entities.splice(t,1)}}pickup(t){t.onPickup(this),this.inventory.add(t);const e=this.game.entities.indexOf(t);e>=0&&this.game.entities.splice(e,1)}use(t){return t.onUse(this)}cast(t,e){t.targetType===s.TargetType.SELF?t.cast(this)&&e&&e():this.game.startTargeting(t,e)}onAttack(t,e){}onDeath(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1),r=12;e.BumpEffect=class extends s.Effect{constructor(t,e){super(r,!0),this.entity=t,this.dx=e.x-t.x,this.dy=e.y-t.y}update(){const t=r-this.countdown;t>=0&&t<4&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),t>=4&&t<8&&(this.entity.offset.x-=this.dx,this.entity.offset.y-=this.dy),super.update()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(1);e.FloatingTextEffect=class extends r.Effect{constructor(t,e,i,r){super(40,!1),this.str=t,this.pixelX=e,this.pixelY=i,this.color=r||s.Colors.WHITE}draw(t){const e=40-this.countdown,i=this.pixelX-t.viewport.x,s=this.pixelY-t.viewport.y-Math.min(4,Math.floor(e/2));t.app.drawCenteredString(this.str,i,s,this.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.SlideEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.entity=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.entity.offset.x+=this.dx,this.entity.offset.y+=this.dy),0===this.countdown&&(this.entity.x+=this.entity.offset.x/this.entity.game.tileSize.width,this.entity.y+=this.entity.offset.y/this.entity.game.tileSize.height,this.entity.offset.x=0,this.entity.offset.y=0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RNG=class{constructor(t){this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||1}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,e){const i=e-t;return t+(this.nextInt()/this.m*i|0)}chooseIndex(t){const e=t.reduce((t,e)=>t+e),i=this.nextRange(1,e+1);let s=0;for(let e=0;e<t.length;e++)if(i<=(s+=t[e]))return e;return t.length-1}chooseKey(t){const e=[],i=[];for(const s in t)t.hasOwnProperty(s)&&(e.push(s),i.push(t[s]));return e[this.chooseIndex(i)]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(15),r=256;e.Keyboard=class{constructor(t){this.keys=new Array(r);for(let t=0;t<r;t++)this.keys[t]=new s.Input;t.addEventListener("keydown",t=>this.setKey(t,!0)),t.addEventListener("keyup",t=>this.setKey(t,!1))}setKey(t,e){t.stopPropagation(),t.preventDefault();const i=t.keyCode;i>=0&&i<r&&(this.keys[i].down=e)}update(){for(let t=0;t<r;t++)this.keys[t].down?this.keys[t].downCount++:this.keys[t].downCount=0}getKey(t){return t>=0&&t<r?this.keys[t]:null}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(15),r=i(2),n=i(0);e.Mouse=class extends s.Input{constructor(t){super(),this.app=t,this.prev=new n.Vec2(0,0),this.start=new n.Vec2(0,0),this.x=0,this.y=0,this.dx=0,this.dy=0,this.dragDistance=0;const e=t.canvas,i=this.handleEvent.bind(this);e.addEventListener("mousedown",i),e.addEventListener("mouseup",i),e.addEventListener("mousemove",i),e.addEventListener("contextmenu",i);const s=this.handleTouchEvent.bind(this);e.addEventListener("touchstart",s),e.addEventListener("touchend",s),e.addEventListener("touchcancel",s),e.addEventListener("touchmove",s)}handleTouchEvent(t){if(t.stopPropagation(),t.preventDefault(),t.touches.length>0){const e=t.touches[0];this.updatePosition(e.clientX,e.clientY)}"touchstart"===t.type&&(this.down=!0,this.prev.x=this.x,this.prev.y=this.y,this.start.x=this.x,this.start.y=this.y,this.dx=0,this.dy=0,this.dragDistance=0),"touchend"===t.type&&(this.down=!1)}handleEvent(t){t.stopPropagation(),t.preventDefault(),this.updatePosition(t.clientX,t.clientY),"mousedown"===t.type&&(this.down=!0,this.start.x=this.x,this.start.y=this.y,this.dragDistance=0,this.app.canvas.focus()),"mouseup"===t.type&&(this.down=!1)}updatePosition(t,e){let i=this.app.canvas.getBoundingClientRect();const s=this.app.size.width/this.app.size.height,n=i.width/i.height;if(n-s>.01){const t=s*i.height,e=i.width-t;i=new r.Rect(Math.floor(e/2),0,t,i.height)}if(n-s<-.01){const t=i.width/s,e=i.height-t;i=new r.Rect(0,Math.floor(e/2),i.width,t)}this.x=this.app.size.width*(t-i.left)/i.width|0,this.y=this.app.size.height*(e-i.top)/i.height|0}update(){super.update(),this.dx=this.x-this.prev.x,this.dy=this.y-this.prev.y,this.prev.x=this.x,this.prev.y=this.y,this.down&&(this.dragDistance+=Math.abs(this.dx)+Math.abs(this.dy))}isClicked(){return 1===this.upCount&&this.dragDistance<4}isDragging(){return this.down&&this.dragDistance>4}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function s(t,e,i){const s=t.createShader(e);return t.shaderSource(s,i),t.compileShader(s),s}e.ExtendedTexture=class extends WebGLTexture{constructor(){super(),this.loaded=!1,this.width=0,this.height=0}},e.initShaderProgram=function(t,e,i){const r=s(t,t.VERTEX_SHADER,e),n=s(t,t.FRAGMENT_SHADER,i),o=t.createProgram();return t.attachShader(o,r),t.attachShader(o,n),t.linkProgram(o),o},e.loadShader=s,e.createTexture=function(t,e){const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const s=t.RGBA,r=t.RGBA,n=t.UNSIGNED_BYTE,o=new Uint8Array([0,0,0,255]);t.texImage2D(t.TEXTURE_2D,0,s,1,1,0,r,n,o);const h=new Image;return h.onload=(()=>{t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,s,r,n,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.generateMipmap(t.TEXTURE_2D),i.loaded=!0,i.width=h.width,i.height=h.height}),h.src=e,i}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(27);e.AppState=class{constructor(t){this.app=t,this.gui=new s.GUI(t)}update(){this.gui.handleInput(),this.gui.draw()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(28),r=i(16),n=i(3),o=i(2),h=i(0);e.GUI=class{constructor(t){this.app=t,this.renderer=new s.DialogRenderer(new o.Rect(0,0,1,1)),this.rootPanel=new n.Panel(t.size),this.rootPanel.gui=this}add(t){this.rootPanel.add(t)}remove(t){this.rootPanel.remove(t)}handleInput(){return this.dragElement&&this.dragOffset?(this.updateDragging(),!0):this.rootPanel.handleInput()}draw(){this.rootPanel.drawContents(),this.dragElement&&this.dragElement.drawContents()}startDragging(t){const e=this.app.mouse;this.dragElement=t,this.dragOffset=new h.Vec2(e.start.x-t.rect.x,e.start.y-t.rect.y)}updateDragging(){const t=this.app.mouse,e=this.dragElement,i=this.dragOffset;if(t.down)e.rect.x=t.x-i.x,e.rect.y=t.y-i.y;else{const s=this.rootPanel.getPanelAt(t);s&&s.onDrop(e)?(e.rect.x=s.rect.x,e.rect.y=s.rect.y,e.move(s)):e instanceof r.ItemShortcutButton&&s===this.rootPanel?e.parent&&e.parent.remove(e):(e.rect.x=t.start.x-i.x,e.rect.y=t.start.y-i.y),this.dragElement=void 0,this.dragOffset=void 0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DialogRenderer=class{constructor(t,e){this.baseRect=t,this.closeButtonRect=e}draw(t,e){const i=this.baseRect.x,s=this.baseRect.y,r=this.baseRect.width/3|0,n=this.baseRect.height/3|0,o=i+r,h=s+n,a=i+2*r,c=s+2*r,l=e.rect.x,d=e.rect.y,u=e.rect.width-2*r,p=e.rect.height-2*n,g=l+r,f=d+n,y=g+u,x=f+p;if(t.drawImage(l,d,i,s,r,n,void 0,r,n),t.drawImage(g,d,o,s,r,n,void 0,u,n),t.drawImage(y,d,a,s,r,n,void 0,r,n),t.drawImage(l,f,i,h,r,n,void 0,r,p),t.drawImage(g,f,o,h,r,n,void 0,u,p),t.drawImage(y,f,a,h,r,n,void 0,r,p),t.drawImage(l,x,i,c,r,n,void 0,r,n),t.drawImage(g,x,o,c,r,n,void 0,u,n),t.drawImage(y,x,a,c,r,n,void 0,r,n),this.closeButtonRect&&e.closeButton){const i=this.closeButtonRect.width,s=this.closeButtonRect.height,r=e.rect.x2-i,n=e.rect.y,o=this.closeButtonRect.x,h=this.closeButtonRect.y;t.drawImage(r,n,o,h,i,s)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=[0,-1,1,0],r=[-1,0,0,1],n=[1,1,1,1];function o(t){let e=null,i=-1,s=1/0;for(let r=0;r<t.length;r++){const n=t[r];n.g!==1/0&&n.g+n.h<s&&(e=n,i=r,s=n.g+n.h)}return t.splice(i,1),e}function h(t){const e=[];let i=t;for(;i;)e.push(i),i=i.prev;return e.reverse(),e}e.computePath=function(t,e,i,a){!function(t,e){for(let i=0;i<t.height;i++)for(let s=0;s<t.width;s++){const r=t.grid[i][s];r.g=1/0,r.h=Math.min(Math.abs(s-e.x),Math.abs(i-e.y)),r.prev=null}}(t,i);const c=t.grid[e.y][e.x];c.g=0;const l=[c];for(;l.length>0;){const e=o(l);if(e.x===i.x&&e.y===i.y)return h(e);for(let i=0;i<s.length;i++){const o=e.x+s[i],h=e.y+r[i];if(o>=0&&o<t.width&&h>=0&&h<t.height){const s=t.grid[h][o],r=e.g+n[i];r<s.g&&r<=a&&!t.grid[h][o].blocked&&(s.g=r,s.prev=e,l.push(s))}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),r=30;class n extends s.Rect{constructor(t,e,i,s,n,o,h,a){super(t,e,i,s),this.frames=n||1,this.loop=!!o,this.ticksPerFrame=h||r,this.colorOverride=a,this.animIndex=0,this.animDelay=0}draw(t,e,i,s){let r=this.animIndex;this.loop&&(r=(n.globalAnimIndex/this.ticksPerFrame|0)%this.frames);const o=this.x+r*this.width,h=this.y,a=s||this.colorOverride;t.drawImage(e,i,o,h,this.width,this.height,a),this.animDelay++,this.animDelay>this.ticksPerFrame&&(this.animDelay=0,this.animIndex++,this.animIndex>=this.frames&&(this.loop?this.animIndex=0:this.animIndex=this.frames-1))}static updateGlobalAnimations(){n.globalAnimIndex++}}n.globalAnimIndex=0,e.Sprite=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Message=class{constructor(t,e){this.text=t,this.color=e}}},function(t,e,i){"use strict";function s(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}Object.defineProperty(e,"__esModule",{value:!0}),s(i(11)),s(i(18)),s(i(14)),s(i(33)),s(i(34)),s(i(35)),s(i(26)),s(i(8)),s(i(5)),s(i(19)),s(i(1)),s(i(38)),s(i(39)),s(i(20)),s(i(40)),s(i(21)),s(i(12)),s(i(41)),s(i(27)),s(i(6)),s(i(9)),s(i(43)),s(i(7)),s(i(28)),s(i(10)),s(i(45)),s(i(16)),s(i(47)),s(i(3)),s(i(48)),s(i(49)),s(i(50)),s(i(51)),s(i(17)),s(i(53)),s(i(15)),s(i(54)),s(i(23)),s(i(4)),s(i(31)),s(i(24)),s(i(29)),s(i(0)),s(i(2)),s(i(22)),s(i(30)),s(i(55)),s(i(56))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(14);e.BasicMonster=class extends s.AI{doAi(){const t=this.actor,e=t.game.player;e&&(t.distanceTo(e)>=2?t.moveToward(e.x,e.y):e.hp>0&&t.attack(e))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(22),r=i(14);e.ConfusedMonster=class extends r.AI{constructor(t){super(t),this.rng=new s.RNG,this.numTurns=10,this.oldAi=t.ai}doAi(){this.numTurns>0?(this.actor.move(this.rng.nextRange(-1,2),this.rng.nextRange(-1,2)),this.numTurns--):this.actor.ai=this.oldAi}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(36),r=i(23),n=i(24),o=i(2),h=i(37),a=i(0),c=400,l=224,d=!1,u=2;e.App=class{constructor(t){const e=t.canvas;if(!e)throw new Error("Null or missing canvas element");const i=e.getContext("webgl",{alpha:!1,antialias:!1});if(!i)throw new Error("Could not get WebGL context");this.canvas=e,this.gl=i,this.size=t.size||new o.Rect(0,0,c,l),this.font=t.font||s.FONT_04B03,this.fillWindow=t.fillWindow||d,this.scaleFactor=t.scaleFactor||u,this.center=new a.Vec2(this.size.width/2|0,this.size.height/2|0),i.disable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),e.width=this.size.width,e.height=this.size.height,e.style.outline="none",e.tabIndex=0,e.focus(),this.renderSet=new h.RenderSet(i,t.imageUrl,this.font),this.keyboard=new r.Keyboard(e),this.mouse=new n.Mouse(this),this.fillWindow&&(window.addEventListener("resize",this.handleResizeEvent.bind(this),!1),this.handleResizeEvent()),this.renderLoop()}handleResizeEvent(){const t=window.innerWidth,e=window.innerHeight,i=this.isMobile(),s=i?320:400,r=i?224:300;this.scaleFactor=1,this.scaleFactor=t>e?Math.max(1,Math.min(Math.round(t/s),Math.round(e/r))):Math.max(1,Math.min(Math.round(t/r),Math.round(e/s))),this.size.width=Math.round(t/this.scaleFactor),this.size.height=Math.round(e/this.scaleFactor),this.center.x=this.size.width/2|0,this.center.y=this.size.height/2|0,this.canvas.width=this.size.width,this.canvas.height=this.size.height,this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width=t+"px",this.canvas.style.height=e+"px"}isMobile(){return navigator.userAgent.match(/Android|iPhone|iPod|IEMobile|WPDesktop|Opera Mini/i)}renderLoop(){this.keyboard.update(),this.mouse.update(),this.resetGl(),this.state&&this.state.update(),this.renderSet.flush(this.size.width,this.size.height),requestAnimationFrame(this.renderLoop.bind(this))}resetGl(){const t=this.gl;t.viewport(0,0,this.size.width,this.size.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.renderSet.positionArrayIndex=0,this.renderSet.texcoordArrayIndex=0,this.renderSet.colorArrayIndex=0}drawImage(t,e,i,s,r,n,o,h,a){this.renderSet.drawImage(t,e,i,s,r,n,o,h,a)}drawString(t,e,i,s){this.renderSet.drawString(t,e,i,s)}drawCenteredString(t,e,i,s){this.renderSet.drawCenteredString(t,e,i,s)}drawRightString(t,e,i,s){this.renderSet.drawRightString(t,e,i,s)}isKeyDown(t){const e=this.keyboard.getKey(t);return e&&e.down}isKeyPressed(t){const e=this.keyboard.getKey(t),i=e?e.downCount:0;return 1===i||i>30}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=32,r=126;class n{isInRange(t){return t>=s&&t<=r}getStringWidth(t){let e=0;for(let i=0;i<t.length;i++)e+=this.getWidth(t.charCodeAt(i));return e}}e.Font=n;e.MonospacedFont=class extends n{constructor(t){super(),this.glyphSize=t}getOffset(t){return(t-s)*this.glyphSize.width}getWidth(){return this.glyphSize.width}getHeight(){return this.glyphSize.height}};class o extends n{constructor(t,e){super(),this.height=t,this.widths=e,this.offsets=[0];let i=0;for(let t=0;t<this.widths.length;t++)i+=this.widths[t],this.offsets.push(i)}getOffset(t){return this.offsets[t-s]}getWidth(t){return this.widths[t-s]}getHeight(){return this.height}}e.ProportionalFont=o,e.FONT_04B03=new o(8,[4,2,4,6,5,6,6,2,3,3,4,4,3,4,2,6,5,3,5,5,5,5,5,5,5,5,2,2,4,4,4,5,6,5,5,4,5,4,4,5,5,4,5,5,4,6,5,5,5,5,5,5,4,5,5,6,5,5,4,3,6,3,4,5,3,5,5,4,5,5,4,5,5,2,3,5,2,6,5,5,5,5,4,5,4,5,5,6,4,5,5,4,2,4,5,0])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(25),r=65536,n="uniform vec2 u_viewportSize;attribute vec2 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_color;void main() {vec2 zeroToOne = a_position / u_viewportSize;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;v_color = a_color;}",o="precision highp float;uniform sampler2D u_image;varying vec2 v_texCoord;varying vec4 v_color;void main() {gl_FragColor = texture2D(u_image, v_texCoord);if (gl_FragColor.a < 0.1) discard;if (v_color.a != 0.0) gl_FragColor = v_color;}";e.RenderSet=class{constructor(t,e,i){this.gl=t,this.font=i;const h=s.initShaderProgram(t,n,o);this.program=h,this.viewportSizeLocation=t.getUniformLocation(h,"u_viewportSize"),this.positionLocation=t.getAttribLocation(h,"a_position"),this.texcoordLocation=t.getAttribLocation(h,"a_texCoord"),this.colorLocation=t.getAttribLocation(h,"a_color"),this.positionBuffer=t.createBuffer(),this.texcoordBuffer=t.createBuffer(),this.colorBuffer=t.createBuffer(),this.spriteTexture=s.createTexture(t,e),this.positionArray=new Float32Array(r),this.positionArrayIndex=0,this.texcoordArray=new Float32Array(r),this.texcoordArrayIndex=0,this.colorUint8Array=new Uint8Array(r),this.colorDataView=new DataView(this.colorUint8Array.buffer),this.colorArrayIndex=0}drawCenteredString(t,e,i,s){const r=e-this.font.getStringWidth(t)/2|0;this.drawString(t,r,i,s)}drawRightString(t,e,i,s){const r=e-this.font.getStringWidth(t);this.drawString(t,r,i,s)}drawString(t,e,i,s){const r=t.split("\n"),n=this.font.getHeight();let o=i;for(let t=0;t<r.length;t++){let i=e;for(let e=0;e<r[t].length;e++){const h=r[t].charCodeAt(e);if(this.font.isInRange(h)){const t=this.font.getOffset(h),e=this.font.getWidth(h);this.drawImage(i,o,t,0,e,n,s),i+=e}}o+=n}}drawChar(t,e,i,s){if(this.font.isInRange(t)){const r=this.font.getOffset(t),n=this.font.getWidth(t),o=this.font.getHeight();this.drawImage(e,i,r,0,n,o,s)}}drawImage(t,e,i,s,r,n,o,h,a){const c=this.spriteTexture;if(!c.loaded)return;const l=void 0!==h?h:r,d=void 0!==a?a:n,u=t+Math.abs(l),p=e+d,g=i/c.width,f=s/c.height,y=(i+r)/c.width,x=(s+n)/c.height,_=o||0;this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=x,this.positionArray[this.positionArrayIndex++]=t,this.positionArray[this.positionArrayIndex++]=p,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=e,this.positionArray[this.positionArrayIndex++]=u,this.positionArray[this.positionArrayIndex++]=p,this.texcoordArray[this.texcoordArrayIndex++]=g,this.texcoordArray[this.texcoordArrayIndex++]=x,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=f,this.texcoordArray[this.texcoordArrayIndex++]=y,this.texcoordArray[this.texcoordArrayIndex++]=x;for(let t=0;t<6;t++)this.colorDataView.setUint32(this.colorArrayIndex,_,!1),this.colorArrayIndex+=4}flush(t,e){if(!this.spriteTexture.loaded||0===this.positionArrayIndex)return;const i=this.gl;i.useProgram(this.program),i.uniform2f(this.viewportSizeLocation,t,e),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.spriteTexture);{i.enableVertexAttribArray(this.positionLocation),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.bufferData(i.ARRAY_BUFFER,this.positionArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.positionLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.texcoordLocation),i.bindBuffer(i.ARRAY_BUFFER,this.texcoordBuffer),i.bufferData(i.ARRAY_BUFFER,this.texcoordArray,i.DYNAMIC_DRAW);const t=2,e=i.FLOAT,s=!1,r=0,n=0;i.vertexAttribPointer(this.texcoordLocation,t,e,s,r,n)}{i.enableVertexAttribArray(this.colorLocation),i.bindBuffer(i.ARRAY_BUFFER,this.colorBuffer),i.bufferData(i.ARRAY_BUFFER,this.colorUint8Array,i.DYNAMIC_DRAW);const t=4,e=i.UNSIGNED_BYTE,s=!0,r=0,n=0;i.vertexAttribPointer(this.colorLocation,t,e,s,r,n)}const s=i.TRIANGLES,r=this.positionArrayIndex/2;i.drawArrays(s,0,r)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8),r=i(1);e.FadeInEffect=class extends r.Effect{constructor(t){super(t,!0),this.duration=t}draw(t){const e=this.countdown/this.duration,i=Math.max(1,Math.min(255,255*e|0)),r=s.fromRgb(0,0,0,i);t.app.drawImage(0,0,0,32,16,16,r,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8),r=i(1);e.FadeOutEffect=class extends r.Effect{constructor(t){super(t,!0),this.duration=t}draw(t){const e=1-this.countdown/this.duration,i=Math.max(1,Math.min(255,255*e|0)),r=s.fromRgb(0,0,0,i);t.app.drawImage(0,0,0,32,16,16,r,t.app.size.width,t.app.size.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.ProjectileEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.sprite=t,this.position=e,this.velocity=i,this.duration=s}update(){super.update(),this.position.add(this.velocity)}draw(t){const e=this.position.x-t.viewport.x,i=this.position.y-t.viewport.y;this.sprite.draw(t.app,e,i)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(11),r=i(18),n=i(26),o=i(42),h=i(4),a=i(29),c=i(2),l=i(30),d=i(0),u=16,p=16,g=13;e.Game=class extends n.AppState{constructor(t,e){super(t),this.tileSize=e.tileSize||new c.Rect(0,0,u,p),this.viewport=new c.Rect(0,0,t.size.width,t.size.height),this.effects=[],this.entities=[],this.turnIndex=0,this.blocked=!1,this.cursor=new d.Vec2(-1,-1),this.pathIndex=0,this.followPlayer=!0}log(t,e){this.messageLog&&this.messageLog.add(t,e)}update(){l.Sprite.updateGlobalAnimations(),this.gui.handleInput()||(this.updateEffects(),this.updateEntities(),this.onUpdate&&this.onUpdate(),this.updateViewport()),this.drawTileMap(),this.drawTargeting(),this.drawEntities(),this.drawEffects(),this.gui.draw()}updateEffects(){this.blocked=!1;for(let t=0;t<this.effects.length;t++){const e=this.effects[t];e.blocking&&this.blocked||(e.update(),e.blocking&&(this.blocked=!0))}for(let t=this.effects.length-1;t>=0;t--)if(this.effects[t].isDone()){const e=this.effects[t];e.onDone&&e.onDone(),this.effects.splice(t,1)}}updateEntities(){let t=0;for(;!(this.turnIndex<0||this.turnIndex>=this.entities.length||t>2*this.entities.length);){const e=this.entities[this.turnIndex];if(e instanceof r.Actor){if(e.ap>0){if(e===this.player){this.handlePlayerInput();break}this.doAi(e)}!this.blocked&&e.ap<=0&&(e.ap=0,this.nextTurn())}else this.nextTurn();if(this.blocked)break;t++}}updateViewport(){const t=this.app.mouse;if(t.isDragging())this.viewport.x-=t.dx,this.viewport.y-=t.dy,this.followPlayer=!1;else if(this.player&&this.followPlayer){const t=(this.app.size.width-this.player.sprite.width)/2|0,e=(this.app.size.height-this.player.sprite.height)/2|0;this.viewport.x=this.player.pixelX-t,this.viewport.y=this.player.pixelY-e,this.viewport.width=this.app.size.width,this.viewport.height=this.app.size.height}}drawTileMap(){this.app.renderSet.spriteTexture.loaded&&this.tileMap&&this.tileMap.draw(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height)}drawTargeting(){if(this.isTargeting()&&this.targetSprite){const t=this.cursor.x*this.tileSize.width-this.viewport.x,e=this.cursor.y*this.tileSize.height-this.viewport.y;this.targetSprite.draw(this.app,t,e)}}drawEntities(){for(let t=0;t<this.entities.length;t++){const e=this.entities[t];this.tileMap&&!this.tileMap.isVisible(e.x,e.y)||e.draw()}}drawEffects(){let t=0;for(let e=0;e<this.effects.length;e++){const i=this.effects[e];0!==t&&i.blocking||i.draw(this),i.blocking&&t++}}isTargeting(){return!!this.targetAbility}startTargeting(t,e){this.targetAbility=t,this.targetCallback=e,this.player&&(this.cursor.x=this.player.x,this.cursor.y=this.player.y)}endTargeting(){if(this.player&&this.targetAbility){const t=this.targetAbility.targetType;let e=null;t===s.TargetType.ENTITY?e=this.getEnemyAt(this.cursor.x,this.cursor.y):t===s.TargetType.TILE&&this.tileMap&&(e=this.tileMap.getCell(this.cursor.x,this.cursor.y)),e&&this.targetAbility.cast(this.player,e)&&this.targetCallback&&this.targetCallback()}this.cancelTargeting()}cancelTargeting(){this.targetAbility=void 0,this.targetCallback=void 0}handlePlayerInput(){if(!this.player||this.blocked)return;const t=this.app.mouse;if((t.down||0!==t.dx||0!==t.dy)&&(this.cursor.x=(this.viewport.x+t.x)/this.tileSize.width|0,this.cursor.y=(this.viewport.y+t.y)/this.tileSize.height|0),this.app.isKeyDown(h.Keys.VK_SHIFT)){this.followPlayer=!1;const t=4,e=2*this.tileSize.width/t,i=2*this.tileSize.height/t;return this.app.isKeyPressed(h.Keys.VK_UP)&&this.effects.push(new o.ScrollEffect(this.viewport,0,-i,t)),this.app.isKeyPressed(h.Keys.VK_LEFT)&&this.effects.push(new o.ScrollEffect(this.viewport,-e,0,t)),this.app.isKeyPressed(h.Keys.VK_RIGHT)&&this.effects.push(new o.ScrollEffect(this.viewport,e,0,t)),void(this.app.isKeyPressed(h.Keys.VK_DOWN)&&this.effects.push(new o.ScrollEffect(this.viewport,0,i,t)))}if(this.isTargeting())return(this.app.isKeyPressed(h.Keys.VK_ENTER)||this.app.mouse.isClicked())&&this.endTargeting(),this.app.isKeyPressed(h.Keys.VK_ESCAPE)&&this.cancelTargeting(),this.app.isKeyPressed(h.Keys.VK_UP)&&this.cursor.y--,this.app.isKeyPressed(h.Keys.VK_LEFT)&&this.cursor.x--,this.app.isKeyPressed(h.Keys.VK_RIGHT)&&this.cursor.x++,void(this.app.isKeyPressed(h.Keys.VK_DOWN)&&this.cursor.y++);if(t.isClicked()){const e=(this.viewport.x+t.x)/this.tileSize.width|0,i=(this.viewport.y+t.y)/this.tileSize.height|0;if(this.targetEntity=this.getEnemyAt(e,i),this.targetEntity)return this.targetTile=void 0,this.path=void 0,void(this.player.distance(this.targetEntity.x,this.targetEntity.y)<=1&&this.player.attack(this.targetEntity));if(this.tileMap){const t=this.tileMap.getCell(e,i);t&&t!==this.targetTile&&(this.targetTile=t,this.path=a.computePath(this.tileMap,this.player,this.targetTile,100),this.pathIndex=0)}}let e=null;if(this.path){for(e=this.path[this.pathIndex];e&&e.x===this.player.x&&e.y===this.player.y;)this.pathIndex++,e=this.pathIndex<this.path.length?this.path[this.pathIndex]:null;e&&this.getEnemyAt(e.x,e.y)&&(e=null),e||(this.targetTile=void 0,this.path=void 0)}const i=this.app.isKeyPressed(h.Keys.VK_NUMPAD2)||this.app.isKeyPressed(h.Keys.VK_DOWN)||e&&e.y>this.player.y,s=this.app.isKeyPressed(h.Keys.VK_NUMPAD4)||this.app.isKeyPressed(h.Keys.VK_LEFT)||e&&e.x<this.player.x,r=this.app.isKeyPressed(h.Keys.VK_NUMPAD6)||this.app.isKeyPressed(h.Keys.VK_RIGHT)||e&&e.x>this.player.x,n=this.app.isKeyPressed(h.Keys.VK_NUMPAD8)||this.app.isKeyPressed(h.Keys.VK_UP)||e&&e.y<this.player.y,c=this.app.isKeyPressed(h.Keys.VK_NUMPAD5);n&&this.tryMoveOrAttack(0,-1),s&&this.tryMoveOrAttack(-1,0),r&&this.tryMoveOrAttack(1,0),i&&this.tryMoveOrAttack(0,1),c&&(this.player.ap=0)}tryMoveOrAttack(t,e){const i=this.player;if(!i)return;this.followPlayer=!0;const s=i.x+t,r=i.y+e;for(let t=0;t<this.entities.length;t++){const e=this.entities[t];if(i!==e&&e.x===s&&e.y===r)return i.onBump&&i.onBump(e),!0}return i.move(t,e)}doAi(t){t.ai&&(!this.tileMap||this.tileMap.isVisible(t.x,t.y)&&t.ai.activatedCount>0)&&t.ai.doAi(),t.ap=0}nextTurn(){if(this.player&&this.entities[this.turnIndex]===this.player){if(this.player&&this.tileMap){this.recomputeFov();for(let t=0;t<this.entities.length;t++){const e=this.entities[t];e instanceof r.Actor&&e.ai&&(this.tileMap.isVisible(e.x,e.y)?e.ai.activatedCount++:e.ai.activatedCount=-1)}}this.entities.sort((t,e)=>this.player?Math.hypot(t.x-this.player.x,t.y-this.player.y)-Math.hypot(e.x-this.player.x,e.y-this.player.y):0)}if(this.turnIndex++,this.turnIndex>=this.entities.length){this.turnIndex=0;for(let t=0;t<this.entities.length;t++){const e=this.entities[t];e instanceof r.Actor&&(e.ap=e.maxAp)}}}isBlocked(t,e){if(this.tileMap&&this.tileMap.isBlocked(t,e))return!0;for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s.blocks&&s.x===t&&s.y===e)return!0}return!1}getEnemyAt(t,e){for(let i=0;i<this.entities.length;i++){const s=this.entities[i];if(s instanceof r.Actor&&!(s.hp<=0)&&s instanceof r.Actor&&s.x===t&&s.y===e)return s}}recomputeFov(){this.player&&this.tileMap&&this.tileMap.computeFov(this.player.x,this.player.y,g)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.ScrollEffect=class extends s.Effect{constructor(t,e,i,s){super(s,!0),this.viewport=t,this.dx=e,this.dy=i}update(){this.countdown--,this.countdown>=0&&(this.viewport.x+=this.dx,this.viewport.y+=this.dy)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(0),n=i(44),o=i(7),h=4;e.ComplexSelectDialog=class extends o.Dialog{constructor(t,e,i){super(t,e),this.options=i,this.selectedIndex=0,this.renderer=new n.DefaultSelectOptionRenderer}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect,e=new r.Vec2(t.x+h,t.y+h);for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex;this.renderer.drawOption(this.gui,e,i,s),e.y+=this.renderer.getHeight(i,s)}}handleInput(){if(!this.gui)return!1;const t=this.gui.app;for(let e=0;e<this.options.length;e++)t.isKeyPressed(s.Keys.VK_A+e)&&(this.selectedIndex=e,this.onSelect&&this.onSelect(this.options[e]));t.isKeyPressed(s.Keys.VK_ENTER)&&this.onSelect&&this.onSelect(this.options[this.selectedIndex]),t.isKeyPressed(s.Keys.VK_ESCAPE)&&this.onCancel&&this.onCancel(),t.isKeyPressed(s.Keys.VK_UP)&&this.selectedIndex--,t.isKeyPressed(s.Keys.VK_DOWN)&&this.selectedIndex++,this.selectedIndex<0&&(this.selectedIndex+=this.options.length),this.selectedIndex>=this.options.length&&(this.selectedIndex-=this.options.length);const e=t.mouse,i=this.rect;let r=i.y+h;if(1===e.upCount&&e.x>=i.x1&&e.x<i.x2)for(let t=0;t<this.options.length;t++){const i=this.options[t],s=t===this.selectedIndex,n=this.renderer.getHeight(i,s),o=r,h=r+n;e.y>=o&&e.y<h&&(s?this.onSelect&&this.onSelect(i):this.selectedIndex=t),r+=n}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5);e.DefaultSelectOptionRenderer=class{getHeight(t,e){return 10}drawOption(t,e,i,r){const n=r?s.Colors.YELLOW:s.Colors.WHITE;t.app.drawString(i.name,e.x,e.y,n)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(2),n=i(7),o=i(10),h=i(46),a=4,c=2;e.ItemContainerDialog=class extends n.Dialog{constructor(t,e,i,s){super(t,e),this.capacity=i,this.items=s,s.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new h.ItemContainerButtonSlot(new r.Rect(0,0,24,24),s))}addItem(t){const e=this.getExistingButton(t);if(e)return void e.stackItems.add(t);const i=this.getNextFreeSlot();i&&i.add(new o.ItemButton(i.rect.clone(),this.items,t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof o.ItemButton&&s.stackItems.contains(t)&&(s.stackItems.remove(t),0===s.stackItems.length&&i.remove(s))}}getExistingButton(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e).button;if(i&&i instanceof o.ItemButton&&i.stackItems.get(0).name===t.name)return i}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+a,s=t.y+a;for(let r=0;r<this.capacity;r++){const n=this.children.get(r);n.rect.x=i,n.rect.y=s,n.rect.width=e.width,n.rect.height=e.height,(i+=e.width+c)>t.x2-e.width-a&&(i=t.x+a,s+=e.height+c)}this.drawChildren()}handleInput(){return!(!this.gui||!this.handleChildrenInput()&&(!this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE)||(this.visible=!1,0)))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(9),r=i(10);e.ItemContainerButtonSlot=class extends s.ButtonSlot{constructor(t,e){super(t),this.items=e}onDrop(t){return t instanceof r.ItemButton}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.ImagePanel=class extends s.Panel{constructor(t,e){super(e),this.srcRect=t}drawContents(){if(!this.gui)return;const t=this.srcRect,e=this.rect;this.gui.app.drawImage(e.x,e.y,t.x,t.y,e.width,e.height)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(5),r=i(31),n=i(3);e.MessageLog=class extends n.Panel{constructor(t,e){super(t),this.messages=[],this.maxItems=e||5}add(t,e){t instanceof n.Panel||(this.messages.push(new r.Message(t,e||s.Colors.WHITE)),this.messages.length>this.maxItems&&this.messages.splice(0,this.messages.length-this.maxItems))}drawContents(){if(!this.gui)return;const t=this.rect.x;let e=this.rect.y;e<0&&(e=this.gui.app.size.height+e+this.rect.height-10*this.messages.length);for(let i=0;i<this.messages.length;i++){const s=this.messages[i];this.gui.app.drawString(s.text,t,e,s.color),e+=10}}handleInput(){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(3);e.MessagePanel=class extends s.Panel{constructor(t,e){super(t),this.message=e}drawContents(){if(!this.gui)return;const t=this.message,e=this.rect;this.gui.app.drawString(t.text,e.x,e.y,t.color)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(7),n=4,o=10;e.SelectDialog=class extends r.Dialog{constructor(t,e,i,s){super(t,e),this.options=i,this.callback=s}drawContents(){if(!this.gui)return;super.drawContents();const t=this.rect;for(let e=0;e<this.options.length;e++){const i=String.fromCharCode(65+e)+" - "+this.options[e].name;this.gui.app.drawString(i,t.x+n,t.y+n+e*o)}}handleInput(){if(!this.gui)return!1;for(let t=0;t<this.options.length;t++)if(this.gui.app.isKeyPressed(s.Keys.VK_A+t))return this.callback(this.options[t]),this.close(),!0;if(this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE))return this.close(),!0;const t=this.gui.app.mouse,e=this.rect;if(t.isClicked()&&t.x>=e.x1&&t.x<e.x2){if(this.closeButton&&t.x>=e.x2-16&&t.y<e.y+16)return this.close(),!0;for(let i=0;i<this.options.length;i++){const s=e.y+n+i*o,r=s+o;t.y>=s&&t.y<r&&(this.callback(this.options[i]),this.close())}}return!0}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(9),r=i(10),n=i(16),o=i(17),h=i(52);e.ShortcutButtonSlot=class extends s.ButtonSlot{onDrop(t){if(this.children.length>0)return!1;if(t instanceof r.ItemButton){const e=t,i=e.containerItems,s=e.stackItems.get(0);return this.add(new n.ItemShortcutButton(this.rect.clone(),i,s)),!1}return t instanceof o.TalentButton?(this.add(new h.TalentShortcutButton(this.rect.clone(),t.talent)),!1):t instanceof n.ItemShortcutButton||t instanceof h.TalentShortcutButton}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(6);e.TalentShortcutButton=class extends s.Button{constructor(t,e){super(t,e.ability.sprite),this.talent=e}click(){this.talent.actor.cast(this.talent.ability)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),r=i(2),n=i(9),o=i(7),h=i(17),a=4,c=2;e.TalentsDialog=class extends o.Dialog{constructor(t,e,i,s){super(t,e),this.capacity=i,this.talents=s,s.addListener({onAdd:(t,e)=>this.addItem(e),onRemove:(t,e)=>this.removeItem(e)});for(let t=0;t<i;t++)this.add(new n.ButtonSlot(new r.Rect(0,0,24,24)))}addItem(t){const e=this.getNextFreeSlot();e&&e.add(new h.TalentButton(e.rect.clone(),t))}removeItem(t){for(let e=0;e<this.children.length;e++){const i=this.children.get(e),s=i.button;s&&s instanceof h.TalentButton&&s.talent===t&&i.remove(s)}}getNextFreeSlot(){for(let t=0;t<this.children.length;t++){const e=this.children.get(t);if(!e.button)return e}}drawContents(){if(super.drawContents(),!this.gui||!this.gui.renderer.buttonSlotRect)return;const t=this.rect,e=this.gui.renderer.buttonSlotRect;let i=t.x+a,s=t.y+a;for(let r=0;r<this.capacity;r++){const n=this.children.get(r);n.rect.x=i,n.rect.y=s,n.rect.width=e.width,n.rect.height=e.height,(i+=e.width+c)>t.x2-e.width-a&&(i=t.x+a,s+=e.height+c)}this.drawChildren()}handleInput(){return!(!this.gui||!this.handleChildrenInput()&&(!this.gui.app.isKeyPressed(s.Keys.VK_ESCAPE)||(this.visible=!1,0)))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(12);e.Item=class extends s.Entity{onPickup(t){}onUse(t){return!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Talent=class{constructor(t,e,i){this.actor=t,this.ability=e,this.rank=i||1,this.cooldown=0}cast(t){return!(this.cooldown>0||!this.ability.cast(this.actor,t)||(this.cooldown=this.ability.cooldown,0))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(25),r=i(0),n="precision highp float;attribute vec2 position;attribute vec2 texture;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 viewOffset;uniform vec2 viewportSize;uniform vec2 tileSize;uniform vec2 mapSize;void main(void) {   pixelCoord = (texture * viewportSize) + viewOffset;   texCoord = pixelCoord / mapSize / tileSize;   gl_Position = vec4(position, 0.0, 1.0);}",o="precision highp float;varying vec2 pixelCoord;varying vec2 texCoord;uniform vec2 tileSize;uniform sampler2D tiles;uniform sampler2D sprites;void main(void) {   vec4 tile = texture2D(tiles, texCoord);   if(tile.x == 1.0 && tile.y == 1.0) { discard; }   vec2 spriteOffset = floor(tile.xy * 256.0) * tileSize;   vec2 spriteCoord = mod(pixelCoord, tileSize);   gl_FragColor = texture2D(sprites, (spriteOffset + spriteCoord) / 1024.0);   gl_FragColor.a = tile.a;}";class h extends r.Vec2{constructor(t,e,i){super(t,e),this.tile=i,this.blocked=!0,this.visible=!1,this.seen=!1,this.g=0,this.h=0,this.prev=null}}e.TileMapCell=h;class a{constructor(t,e){this.width=t,this.height=e,this.imageData=new Uint8Array(4*t*e),this.dimensions=new Float32Array([t,e]),this.texture=null,this.clear()}clear(){for(let t=0;t<this.imageData.length;t++)this.imageData[t]=255}setAlpha(t,e,i){this.imageData[4*(e*this.width+t)+3]=i}initGl(t){this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,this.imageData),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}updateGl(t){t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,this.imageData)}}e.TileMapLayer=a;e.TileMap=class{constructor(t,e,i,r){this.gl=t,this.width=e,this.height=i,this.grid=new Array(i),this.layers=new Array(r),this.tileWidth=16,this.tileHeight=16,this.originX=0,this.originY=0,this.minX=0,this.maxX=e-1,this.minY=0,this.maxY=i-1;for(let t=0;t<i;t++){this.grid[t]=new Array(e);for(let i=0;i<e;i++)this.grid[t][i]=new h(i,t,0)}for(let t=0;t<r;t++)this.layers[t]=new a(e,i);this.quadVertBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quadVertBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,1,-1,1,1,1,1,1,0,-1,-1,0,1,1,1,1,0,-1,1,0,0]),t.STATIC_DRAW),this.tilemapShader=s.initShaderProgram(t,n,o),this.positionAttribute=t.getAttribLocation(this.tilemapShader,"position"),this.textureAttribute=t.getAttribLocation(this.tilemapShader,"texture"),this.viewportSizeUniform=t.getUniformLocation(this.tilemapShader,"viewportSize"),this.viewOffsetUniform=t.getUniformLocation(this.tilemapShader,"viewOffset"),this.mapSizeUniform=t.getUniformLocation(this.tilemapShader,"mapSize"),this.tileSizeUniform=t.getUniformLocation(this.tilemapShader,"tileSize"),this.tileSamplerUniform=t.getUniformLocation(this.tilemapShader,"tiles"),this.spriteSamplerUniform=t.getUniformLocation(this.tilemapShader,"sprites");for(let e=0;e<this.layers.length;e++)this.layers[e].initGl(t)}setTile(t,e,i,s,r){this.grid[i][e].tile=s,this.grid[i][e].blocked=!!r;const n=this.layers[t],o=4*(i*n.width+e),h=0===s?255:(s-1)%64|0,a=0===s?255:(s-1)/64|0;n.imageData[o+0]=h,n.imageData[o+1]=a}getCell(t,e){return t<0||t>=this.width||e<0||e>=this.height?null:this.grid[e][t]}getTile(t,e){const i=this.getCell(t,e);return i?i.tile:0}isBlocked(t,e){const i=this.getCell(t,e);return!i||i.blocked}isVisible(t,e){return!(t<this.minX||t>this.maxX||e<this.minY||e>this.maxY)&&this.grid[e][t].visible}isSeen(t,e){const i=this.getCell(t,e);return i&&i.seen}setSeen(t,e,i){const s=this.getCell(t,e);s&&(s.seen=i)}draw(t,e,i,s){const r=this.gl;r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.useProgram(this.tilemapShader),r.bindBuffer(r.ARRAY_BUFFER,this.quadVertBuffer),r.enableVertexAttribArray(this.positionAttribute),r.enableVertexAttribArray(this.textureAttribute),r.vertexAttribPointer(this.positionAttribute,2,r.FLOAT,!1,16,0),r.vertexAttribPointer(this.textureAttribute,2,r.FLOAT,!1,16,8),r.uniform2f(this.viewOffsetUniform,t,e),r.uniform2f(this.viewportSizeUniform,i,s),r.uniform2f(this.tileSizeUniform,this.tileWidth,this.tileHeight),r.activeTexture(r.TEXTURE0),r.uniform1i(this.spriteSamplerUniform,0),r.activeTexture(r.TEXTURE1),r.uniform1i(this.tileSamplerUniform,1);const n=t/this.tileWidth|0,o=e/this.tileHeight|0,h=(t+i)/this.tileWidth|0,a=(e+s)/this.tileHeight|0;for(let t=0;t<this.layers.length;t++){const e=this.layers[t];for(let t=o;t<=a;t++)for(let i=n;i<=h;i++){const s=this.isVisible(i,t)?255:this.isSeen(i,t)?144:0;e.setAlpha(i,t,s)}r.uniform2fv(this.mapSizeUniform,e.dimensions),r.bindTexture(r.TEXTURE_2D,e.texture),e.updateGl(r),r.drawArrays(r.TRIANGLES,0,6)}}resetFov(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++)this.grid[t][e].seen=!1,this.grid[t][e].visible=!1}computeFov(t,e,i){this.originX=t,this.originY=e,this.minX=Math.max(0,t-i),this.minY=Math.max(0,e-i),this.maxX=Math.min(this.width-1,t+i),this.maxY=Math.min(this.height-1,e+i);for(let t=this.minY;t<=this.maxY;t++)for(let e=this.minX;e<=this.maxX;e++)this.grid[t][e].seen=this.grid[t][e].seen||this.grid[t][e].visible,this.grid[t][e].visible=!1;this.grid[e][t].visible=!0,this.computeOctantY(1,1),this.computeOctantX(1,1),this.computeOctantY(1,-1),this.computeOctantX(1,-1),this.computeOctantY(-1,1),this.computeOctantX(-1,1),this.computeOctantY(-1,-1),this.computeOctantX(-1,-1)}computeOctantY(t,e){const i=[],s=[];let r,n,o,h,a,c,l,d,u,p,g=1,f=0,y=0,x=0;for(n=this.originY+e;n>=this.minY&&n<=this.maxY;n+=e,y=f,++g)for(o=.5/g,p=-1,h=Math.floor(x*g+.5),r=this.originX+h*t;h<=g&&r>=this.minX&&r<=this.maxX;r+=t,++h,p=u){if(a=!0,c=!1,d=p,u=(l=h/g)+o,y>0)if(this.grid[n-e][r].visible&&!this.grid[n-e][r].blocked||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blocked){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[n][r].blocked){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blocked&&(x>=d?x=u:c||(i[f]=d,s[f++]=u)))}}computeOctantX(t,e){const i=[],s=[];let r,n,o,h,a,c,l,d,u,p,g=1,f=0,y=0,x=0;for(r=this.originX+t;r>=this.minX&&r<=this.maxX;r+=t,y=f,++g)for(o=.5/g,p=-1,h=Math.floor(x*g+.5),n=this.originY+h*e;h<=g&&n>=this.minY&&n<=this.maxY;n+=e,++h,p=u){if(a=!0,c=!1,d=p,u=(l=h/g)+o,y>0)if(this.grid[n][r-t].visible&&!this.grid[n][r-t].blocked||this.grid[n-e][r-t].visible&&!this.grid[n-e][r-t].blocked){for(let t=0;t<y&&a;++t)if(d<=s[t]&&u>=i[t])if(this.grid[n][r].blocked){if(d>=i[t]&&u<=s[t]){a=!1;break}i[t]=Math.min(i[t],d),s[t]=Math.max(s[t],u),c=!0}else if(l>i[t]&&l<s[t]){a=!1;break}}else a=!1;a&&(this.grid[n][r].visible=!0,this.grid[n][r].blocked&&(x>=d?x=u:c||(i[f]=d,s[f++]=u)))}}}}])});
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
class ConfuseAbility {
    constructor() {
        this.sprite = CONFUSE_SPRITE;
        this.name = 'confuse';
        this.targetType = wglt_1.TargetType.ENTITY;
        this.minRange = 1;
        this.maxRange = CONFUSE_RANGE;
        this.cooldown = 1;
    }
    cast(caster, target) {
        const game = caster.game;
        if (caster.distanceTo(target) > CONFUSE_RANGE) {
            game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
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

/***/ "./src/abilities/fireball.ts":
/*!***********************************!*\
  !*** ./src/abilities/fireball.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const explosioneffect_1 = __webpack_require__(/*! ../effects/explosioneffect */ "./src/effects/explosioneffect.ts");
const FIREBALL_RANGE = 10;
const FIREBALL_RADIUS = 3;
const FIREBALL_DAMAGE = 12;
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const FIRE_COLOR = wglt_1.Colors.ORANGE;
const FIREBALL_SPRITE = new wglt_1.Sprite(512, 336, SPRITE_WIDTH, SPRITE_HEIGHT, undefined, undefined, undefined, FIRE_COLOR);
class FireballAbility {
    constructor() {
        this.sprite = FIREBALL_SPRITE;
        this.name = 'fireball';
        this.targetType = wglt_1.TargetType.TILE;
        this.minRange = 1;
        this.maxRange = FIREBALL_RANGE;
        this.cooldown = 1;
    }
    cast(caster, target) {
        const game = caster.game;
        const player = caster;
        // game.startTargeting((x: number, y: number) => {
        const distance = player.distanceTo(target);
        if (distance > FIREBALL_RANGE) {
            game.log('Target out of range.', wglt_1.Colors.LIGHT_GRAY);
            return false;
        }
        const speed = 8;
        const count = distance * (game.tileSize.width / speed);
        const dx = (target.x * game.tileSize.width - player.pixelX) / count;
        const dy = (target.y * game.tileSize.height - player.pixelY) / count;
        game.effects.push(new wglt_1.ProjectileEffect(FIREBALL_SPRITE, new wglt_1.Vec2(player.pixelX, player.pixelY), new wglt_1.Vec2(dx, dy), count));
        game.effects.push(new explosioneffect_1.ExplosionEffect(game, target, FIREBALL_RADIUS, 30));
        game.log('The fireball explodes, burning everything within ' + FIREBALL_RADIUS + ' tiles!', wglt_1.Colors.ORANGE);
        for (let i = game.entities.length - 1; i >= 0; i--) {
            const entity = game.entities[i];
            if (entity instanceof wglt_1.Actor && entity.distanceTo(target) <= FIREBALL_RADIUS) {
                game.log('The ' + entity.name + ' gets burned for ' + FIREBALL_DAMAGE + ' hit points.', wglt_1.Colors.ORANGE);
                entity.takeDamage(FIREBALL_DAMAGE);
            }
        }
        caster.ap--;
        return true;
    }
}
exports.FireballAbility = FireballAbility;


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
const LIGHTNING_DAMAGE = 20;
const LIGHTNING_RANGE = 5;
class LightningAbility {
    constructor() {
        this.sprite = new wglt_1.Sprite(158, 10, 16, 24, undefined, undefined, undefined, 0xFFFF00FF);
        this.name = 'lightning';
        this.targetType = wglt_1.TargetType.SELF;
        this.minRange = 1;
        this.maxRange = LIGHTNING_RANGE;
        this.cooldown = 1;
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
        // Create lightning animation
        const explosion = new wglt_1.Sprite(256, 408, 16, 24, 2, true, 8, wglt_1.Colors.YELLOW);
        const effect = new wglt_1.ProjectileEffect(explosion, new wglt_1.Vec2(monster.pixelX, monster.pixelY), new wglt_1.Vec2(0, 0), 32);
        effect.onDone = () => {
            game.log('The damage is ' + LIGHTNING_DAMAGE + ' hit points', wglt_1.Colors.LIGHT_BLUE);
            monster.takeDamage(LIGHTNING_DAMAGE);
            caster.ap--;
        };
        game.effects.push(effect);
        return true;
    }
    getClosestMonster(game, player, x, y, range) {
        let minDist = range + 1;
        let result = null;
        for (let i = 0; i < game.entities.length; i++) {
            const entity = game.entities[i];
            if (entity instanceof wglt_1.Actor && entity !== player) {
                const dist = entity.distance(x, y);
                if (dist < minDist) {
                    minDist = dist;
                    result = entity;
                }
            }
        }
        return result;
    }
}
exports.LightningAbility = LightningAbility;


/***/ }),

/***/ "./src/effects/explosioneffect.ts":
/*!****************************************!*\
  !*** ./src/effects/explosioneffect.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
class ExplosionEffect extends wglt_1.Effect {
    constructor(game, center, radius, duration) {
        super(duration, true);
        this.game = game;
        this.center = center;
        this.radius = radius;
        this.sprites = [];
    }
    update() {
        super.update();
        const game = this.game;
        for (let i = 0; i < 15; i++) {
            const x = (2.0 * (Math.random() - 0.5) * 2.0 * this.radius + this.center.x) | 0;
            const y = (2.0 * (Math.random() - 0.5) * 2.0 * this.radius + this.center.y) | 0;
            if (Math.hypot(this.center.x - x, this.center.y - y) <= this.radius) {
                const explosion = new wglt_1.Sprite(512, 336, 16, 24, 4, false, 4, wglt_1.Colors.ORANGE);
                const effect = new wglt_1.ProjectileEffect(explosion, new wglt_1.Vec2(x * game.tileSize.width, y * game.tileSize.height), new wglt_1.Vec2(0, 0), 16);
                effect.blocking = false;
                game.effects.push(effect);
            }
        }
    }
}
exports.ExplosionEffect = ExplosionEffect;


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
class Monster extends wglt_1.Actor {
    constructor(game, x, y, name, sprite) {
        super(game, x, y, name, sprite, true);
        this.hp = 20;
        this.ai = new wglt_1.BasicMonster(this);
    }
    onAttack(attacker, damage) {
        if (damage > 0) {
            this.game.log(attacker.name + ' attacks ' + this.name + ' for ' + damage + ' hit points.', 0x808080FF);
        }
        else {
            this.game.log(attacker.name + ' attacks ' + this.name + ' but it has no effect!', 0x808080FF);
        }
    }
    onDeath() {
        this.game.log(this.name + ' is dead');
        this.blocks = false;
        this.ai = undefined;
        this.name = 'remains of ' + this.name;
        this.sendToBack();
        const player = this.game.player;
        const xpGain = 10;
        player.xp += xpGain;
        while (player.xp >= player.maxXp) {
            player.level++;
            player.xp = 0;
            player.maxXp *= 2;
            this.game.log('You reached level ' + player.level, 0xFF8000FF);
        }
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
const PLAYER_SPRITE = new wglt_1.Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);
class Player extends wglt_1.Actor {
    constructor(game, x, y) {
        super(game, x, y, 'Player', PLAYER_SPRITE, true);
        this.level = 1;
        this.xp = 0;
        this.maxXp = 100;
    }
    onAttack(attacker, damage) {
        if (damage > 0) {
            this.game.log(attacker.name + ' attacks ' + this.name + ' for ' + damage + ' hit points.', 0x808080FF);
        }
        else {
            this.game.log(attacker.name + ' attacks ' + this.name + ' but it has no effect!', 0x808080FF);
        }
    }
    onDeath() {
        this.game.log('You died!');
    }
}
exports.Player = Player;


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
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const SPRITE = new wglt_1.Sprite(64, 144, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
class Spider extends monster_1.Monster {
    constructor(game, x, y) {
        super(game, x, y, 'Spider', SPRITE);
    }
}
exports.Spider = Spider;


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
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const SPRITE = new wglt_1.Sprite(64, 216, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);
class Troll extends monster_1.Monster {
    constructor(game, x, y) {
        super(game, x, y, 'Troll', SPRITE);
    }
}
exports.Troll = Troll;


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
        for (let i = 0; i < 6; i++) {
            this.add(new wglt_1.ShortcutButtonSlot(new wglt_1.Rect(2 + i * 24, 0, 20, 28), wglt_1.Keys.VK_1 + i));
        }
        // Create a slot for the inventory button
        this.add(new wglt_1.ButtonSlot(new wglt_1.Rect(100, 0, 20, 28), wglt_1.Keys.VK_I));
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
const wglt_1 = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/index.js");
const confuse_1 = __webpack_require__(/*! ./abilities/confuse */ "./src/abilities/confuse.ts");
const fireball_1 = __webpack_require__(/*! ./abilities/fireball */ "./src/abilities/fireball.ts");
const lightning_1 = __webpack_require__(/*! ./abilities/lightning */ "./src/abilities/lightning.ts");
const player_1 = __webpack_require__(/*! ./entities/player */ "./src/entities/player.ts");
const spider_1 = __webpack_require__(/*! ./entities/spider */ "./src/entities/spider.ts");
const troll_1 = __webpack_require__(/*! ./entities/troll */ "./src/entities/troll.ts");
const bottompanel_1 = __webpack_require__(/*! ./gui/bottompanel */ "./src/gui/bottompanel.ts");
const toppanel_1 = __webpack_require__(/*! ./gui/toppanel */ "./src/gui/toppanel.ts");
const healthpotion_1 = __webpack_require__(/*! ./items/healthpotion */ "./src/items/healthpotion.ts");
const scroll_1 = __webpack_require__(/*! ./items/scroll */ "./src/items/scroll.ts");
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
const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const TARGET_SPRITE = new wglt_1.Sprite(16, 40, SPRITE_WIDTH, SPRITE_HEIGHT);
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
            monster = new spider_1.Spider(game, x, y);
        }
        else {
            // Create a troll
            monster = new troll_1.Troll(game, x, y);
        }
        game.entities.push(monster);
    }
    // Choose random number of items
    const numItems = rng.nextRange(0, MAX_ROOM_ITEMS);
    for (let i = 0; i < numItems; i++) {
        // Choose random spot for this item
        const x = rng.nextRange(room.x1 + 1, room.x2 - 1);
        const y = rng.nextRange(room.y1 + 1, room.y2 - 1);
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
function nextLevel() {
    const fadeOut = new wglt_1.FadeOutEffect(30);
    const fadeIn = new wglt_1.FadeInEffect(30);
    fadeOut.onDone = () => {
        // Advance to the next level
        game.log('You take a moment to rest, and recover your strength.', wglt_1.Colors.LIGHT_MAGENTA);
        game.log('After a rare moment of peace, you descend deeper...', wglt_1.Colors.LIGHT_RED);
        // Clear all entities other than the player
        game.entities.splice(0, game.entities.length);
        game.entities.push(player);
        // Reset the players targets
        game.targetEntity = undefined;
        game.targetTile = undefined;
        game.path = undefined;
        createMap();
    };
    game.effects.push(fadeOut);
    game.effects.push(fadeIn);
}
const app = new wglt_1.App({
    canvas: document.querySelector('canvas'),
    imageUrl: 'graphics.png',
    size: new wglt_1.Rect(0, 0, 224, 400),
    fillWindow: true
});
const game = new wglt_1.Game(app, { tileSize: new wglt_1.Rect(0, 0, 16, 24) });
game.targetSprite = TARGET_SPRITE;
game.gui.renderer.baseRect = new wglt_1.Rect(0, 64, 24, 24);
const rng = new wglt_1.RNG(1);
const player = new player_1.Player(game, 30, 20);
player.level = 1;
player.xp = 0;
player.maxXp = 10;
player.onBump = (other) => {
    if (other instanceof wglt_1.Item) {
        player.moveToward(other.x, other.y);
        player.pickup(other);
        return true;
    }
    if (other instanceof wglt_1.Actor) {
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
game.messageLog = new wglt_1.MessageLog(new wglt_1.Rect(1, -84, 100, 50));
game.gui.add(game.messageLog);
game.log('Welcome stranger! Prepare to perish!', wglt_1.Colors.DARK_RED);
const topPanel = new toppanel_1.TopPanel(player);
game.gui.add(topPanel);
const bottomPanel = new bottompanel_1.BottomPanel();
game.gui.add(bottomPanel);
const inventoryDialog = new wglt_1.ItemContainerDialog(new wglt_1.Rect(10, 50, 94, 126), 'INVENTORY', 16, player.inventory);
inventoryDialog.visible = false;
game.gui.add(inventoryDialog);
const inventoryButton = new wglt_1.Button(new wglt_1.Rect(400 - 24, 224 - 24, 20, 28), new wglt_1.Sprite(834, 168, 16, 24, 1, true, 30, 0xe08020ff), undefined, () => {
    inventoryDialog.visible = !inventoryDialog.visible;
    talentsDialog.visible = false;
});
bottomPanel.inventorySlot.add(inventoryButton);
const talentsDialog = new wglt_1.TalentsDialog(new wglt_1.Rect(10, 50, 94, 126), 'TALENTS', 16, player.talents);
talentsDialog.visible = false;
game.gui.add(talentsDialog);
const talentsButton = new wglt_1.Button(new wglt_1.Rect(400 - 24, 224 - 24, 20, 28), new wglt_1.Sprite(658, 360, 16, 24, undefined, undefined, undefined, wglt_1.Colors.LIGHT_BLUE), undefined, () => {
    talentsDialog.visible = !talentsDialog.visible;
    inventoryDialog.visible = false;
});
topPanel.talentsSlot.add(talentsButton);
player.talents.add(new wglt_1.Talent(player, new fireball_1.FireballAbility()));
player.talents.add(new wglt_1.Talent(player, new lightning_1.LightningAbility()));
// Generate the map
createMap();
const mainMenu = new wglt_1.AppState(app);
mainMenu.gui.renderer.baseRect = new wglt_1.Rect(0, 16, 24, 24);
mainMenu.gui.add(new wglt_1.SelectDialog(new wglt_1.Rect(16, 64, 160, 100), 'MAIN MENU', [{ name: 'NEW GAME' }, { name: 'CONTINUE' }], (choice) => {
    if (choice.name === 'NEW GAME') {
        app.state = game;
    }
}));
app.state = mainMenu;


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
const SPRITE = new wglt_1.Sprite(658, 168, 16, 24, 1, true, undefined, 0xFF0000FF);
class HealthPotion extends wglt_1.Item {
    constructor(game, x, y) {
        super(game, x, y, 'health potion', SPRITE, false);
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
        return true;
    }
}
exports.HealthPotion = HealthPotion;


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
const SPRITE = new wglt_1.Sprite(738, 168, 16, 24, 1, true, undefined, 0xF0F0E0FF);
class Scroll extends wglt_1.Item {
    constructor(game, x, y, ability) {
        super(game, x, y, 'scroll of ' + ability.name, SPRITE, false);
        this.ability = ability;
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


/***/ })

/******/ });
//# sourceMappingURL=index.js.map