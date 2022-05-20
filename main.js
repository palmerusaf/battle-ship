/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/battle-screen.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/battle-screen.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.battle-screen {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n.ship-area {\n  display: none;\n}\n\n.grid-area {\n  display: flex;\n  flex-direction: column;\n  place-self: center;\n  align-items: center;\n}\n.grid-area__label {\n  font-family: \"Mil Stencil\";\n  color: #cacaca;\n  font-size: 1.7rem;\n  margin-bottom: 0.3rem;\n  text-align: center;\n}\n.grid-area__grid {\n  width: 75vmin;\n  height: 75vmin;\n}\n\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .battle-screen {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n  }\n\n  .grid-area {\n    flex-direction: row;\n  }\n  .grid-area__label {\n    margin: 0;\n    width: 6.5rem;\n  }\n\n  .footer {\n    display: none;\n  }\n}\n@media screen and (min-width: 1000px) {\n  .battle-screen {\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .grid-area__grid {\n    width: 400px;\n    height: 400px;\n  }\n  .grid-area__grid .clickable {\n    cursor: crosshair;\n  }\n\n  .ship-area {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ship-area--Player {\n    grid-area: 2;\n  }\n  .ship-area__label {\n    font-family: \"Mil Stencil\";\n    color: #969696;\n    font-size: 1.1rem;\n    margin-bottom: 0.2rem;\n  }\n  .ship-area__list {\n    background-color: #cacaca;\n    padding: 1rem;\n    width: fit-content;\n    border: solid 2px #969696;\n    border-radius: 10px;\n  }\n  .ship-area__img {\n    width: 100px;\n    height: 41px;\n  }\n  .ship-area .sunk {\n    transition: 500ms;\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/battle-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,aAAA;EACA,kCAAA;EACA,0BAAA;EACA,YAAA;EACA,WAAA;AAOF;;AALA;EACE,aAAA;AAQF;;AANA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AASF;AARE;EACE,0BAAA;EACA,cDPc;ECQd,iBAAA;EACA,qBAAA;EACA,kBAAA;AAUJ;AARE;EAEE,aADY;EAEZ,cAFY;AAWhB;;AANA;EACE;IACE,qCAAA;IACA,uBAAA;EASF;;EAPA;IACE,mBAAA;EAUF;EATE;IACE,SAAA;IACA,aAAA;EAWJ;;EARA;IACE,aAAA;EAWF;AACF;AARA;EACE;IACE,kCAAA;IACA,qCAAA;EAUF;;EAPE;IACE,YAAA;IACA,aAAA;EAUJ;EATI;IACE,iBAAA;EAWN;;EAPA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAUF;EATE;IACE,YAAA;EAWJ;EATE;IACE,0BAAA;IACA,cD1De;IC2Df,iBAAA;IACA,qBAAA;EAWJ;EATE;IACE,yBDhEY;ICiEZ,aAAA;IACA,kBAAA;IACA,yBAAA;IACA,mBAAA;EAWJ;EATE;IACE,YAAA;IACA,YAAA;EAWJ;EATE;IACE,iBAAA;IACA,UAAA;EAWJ;AACF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.battle-screen {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: 1fr;\n  height: 100%;\n  width: 100%;\n}\n.ship-area {\n  display: none;\n}\n.grid-area {\n  display: flex;\n  flex-direction: column;\n  place-self: center;\n  align-items: center;\n  &__label {\n    font-family: \"Mil Stencil\";\n    color: $navy-gray-chain;\n    font-size: 1.7rem;\n    margin-bottom: 0.3rem;\n    text-align: center;\n  }\n  &__grid {\n    $vmin-size: 75vmin;\n    width: $vmin-size;\n    height: $vmin-size;\n  }\n}\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .battle-screen {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n  }\n  .grid-area {\n    flex-direction: row;\n    &__label {\n      margin: 0;\n      width: 6.5rem;\n    }\n  }\n  .footer {\n    display: none;\n  }\n}\n//desktop styling\n@media screen and (min-width: 1000px) {\n  .battle-screen {\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .grid-area {\n    &__grid {\n      width: 400px;\n      height: 400px;\n      .clickable {\n        cursor: crosshair;\n      }\n    }\n  }\n  .ship-area {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    &--Player {\n      grid-area: 2;\n    }\n    &__label {\n      font-family: \"Mil Stencil\";\n      color: $navy-chain-outline;\n      font-size: 1.1rem;\n      margin-bottom: 0.2rem;\n    }\n    &__list {\n      background-color: $navy-gray-chain;\n      padding: 1rem;\n      width: fit-content;\n      border: solid 2px $navy-chain-outline;\n      border-radius: 10px;\n    }\n    &__img {\n      width: 100px;\n      height: 41px;\n    }\n    .sunk {\n      transition: 500ms;\n      opacity: 0;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.button {\n  font-size: 1.2rem;\n  padding: 0.4rem 1rem;\n  background-color: #cacaca;\n  border-radius: 50px;\n  border: none;\n  border: #969696 solid 2px;\n}\n\n.grid-container {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-container__element {\n  border: solid 1px #969696;\n  background-color: #cacaca;\n}\n.grid-container__ship {\n  position: absolute;\n  height: 10%;\n  z-index: 0;\n}\n.grid-container__ship--rotated {\n  transform-origin: top left;\n  transform: rotate(90deg) translate(0, -100%);\n}\n\n.ship-index-0 {\n  width: 50%;\n}\n.ship-index-1 {\n  width: 40%;\n}\n.ship-index-2 {\n  width: 30%;\n}\n.ship-index-3, .ship-index-4 {\n  width: 20%;\n}\n.ship-index-5, .ship-index-6 {\n  width: 10%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition: 300ms;\n}\n.clickable:hover {\n  transform: scale(1.08);\n  transition: 300ms;\n}\n\n.attack-grid {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n}\n.attack-grid__bomb {\n  animation: dropIn 600ms;\n}\n@keyframes dropIn {\n  0% {\n    transform: scale(20);\n    opacity: 0;\n  }\n  25%, 75% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/components.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,iBAAA;EACA,oBAAA;EACA,yBDOgB;ECNhB,mBAAA;EACA,YAAA;EACA,yBAAA;AAOF;;AALA;EACE,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,mCAAA;AAQF;AAPE;EACE,yBAAA;EACA,yBDLc;ACclB;AAPE;EACE,kBAAA;EACA,WAAA;EACA,UAAA;AASJ;AARI;EACE,0BAAA;EACA,4CAAA;AAUN;;AALE;EACE,UAAA;AAQJ;AANE;EACE,UAAA;AAQJ;AANE;EACE,UAAA;AAQJ;AANE;EAEE,UAAA;AAOJ;AALE;EAEE,UAAA;AAMJ;;AAHA;EACE,eAAA;EACA,iBAAA;AAMF;AALE;EACE,sBAAA;EACA,iBAAA;AAOJ;;AAJA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAOF;AANE;EACE,uBAAA;AAQJ;AAPI;EACE;IACE,oBAAA;IACA,UAAA;EASN;EAPI;IAEE,UAAA;EAQN;EANI;IACE,mBAAA;IACA,UAAA;EAQN;AACF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"../styles/variables.scss\";\n\n.button {\n  font-size: 1.2rem;\n  padding: 0.4rem 1rem;\n  background-color: $navy-gray-chain;\n  border-radius: 50px;\n  border: none;\n  border: $navy-chain-outline solid 2px;\n}\n.grid-container {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  &__element {\n    border: solid 1px $navy-chain-outline;\n    background-color: $navy-gray-chain;\n  }\n  &__ship {\n    position: absolute;\n    height: 10%;\n    z-index: 0;\n    &--rotated {\n      transform-origin: top left;\n      transform: rotate(90deg) translate(0, -100%);\n    }\n  }\n}\n.ship-index {\n  &-0 {\n    width: 50%;\n  }\n  &-1 {\n    width: 40%;\n  }\n  &-2 {\n    width: 30%;\n  }\n  &-3,\n  &-4 {\n    width: 20%;\n  }\n  &-5,\n  &-6 {\n    width: 10%;\n  }\n}\n.clickable {\n  cursor: pointer;\n  transition: 300ms;\n  &:hover {\n    transform: scale(1.08);\n    transition: 300ms;\n  }\n}\n.attack-grid {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  &__bomb {\n    animation: dropIn 600ms;\n    @keyframes dropIn {\n      0% {\n        transform: scale(20);\n        opacity: 0;\n      }\n      25%,\n      75% {\n        opacity: 1;\n      }\n      100% {\n        transform: scale(1);\n        opacity: 0;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.footers-parent {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: #062d6a;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  padding: 0.3rem;\n  background-color: #cacaca;\n}\n.footer__repo-link {\n  display: flex;\n  align-items: center;\n  color: #000;\n}\n.footer__github-icon {\n  height: 1.5rem;\n  margin-right: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/footer.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,YAAA;EACA,aAAA;EACA,4BAAA;EACA,yBDGU;ACIZ;;AALA;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,yBAAA;AAQF;AAPE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AASJ;AAPE;EACE,cAAA;EACA,oBAAA;AASJ","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.footers-parent {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  background-color: $navy-blue;\n}\n.footer {\n  display: flex;\n  justify-content: center;\n  padding: 0.3rem;\n  background-color: $navy-gray-chain;\n  &__repo-link {\n    display: flex;\n    align-items: center;\n    color: #000;\n  }\n  &__github-icon {\n    height: 1.5rem;\n    margin-right: 0.4rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/game-over-screen.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/game-over-screen.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.content {\n  position: relative;\n}\n\n.game-over {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  background-color: #cacaca;\n  padding: 1.6rem;\n  width: 18rem;\n  height: 13rem;\n  border: solid 3px #969696;\n  border-radius: 15px;\n  opacity: 0.92;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.game-over__title {\n  font-family: \"Special Elite\";\n  font-size: 3.4rem;\n  color: #73391f;\n}\n.game-over__winner-msg {\n  font-family: \"Mil Stencil\";\n  font-size: 2rem;\n  color: #765f3a;\n}\n.game-over__button-field {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/game-over-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,kBAAA;AAOF;;AALA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AAQF;AAPE;EACE,4BAAA;EACA,iBAAA;EACA,cDVe;ACmBnB;AAPE;EACE,0BAAA;EACA,eAAA;EACA,cDlBiB;AC2BrB;AAPE;EACE,aAAA;EACA,WAAA;EACA,6BAAA;AASJ","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.content {\n  position: relative;\n}\n.game-over {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  background-color: $navy-gray-chain;\n  padding: 1.6rem;\n  width: 18rem;\n  height: 13rem;\n  border: solid 3px $navy-chain-outline;\n  border-radius: 15px;\n  opacity: 0.92;\n  align-items: center;\n  justify-content: space-evenly;\n  &__title {\n    font-family: \"Special Elite\";\n    font-size: 3.4rem;\n    color: $navy-brown-eagle;\n  }\n  &__winner-msg {\n    font-family: \"Mil Stencil\";\n    font-size: 2rem;\n    color: $navy-brown-outline;\n  }\n  &__button-field {\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n/* prettier-ignore */\n/* HTML5 display-role reset for older browsers */\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.scss"],"names":[],"mappings":"AAAA;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACG,qBAAA;AAAJ;;AAEA,gDAAA;AAEA;;EAEC,cAAA;AAAD;;AAEA,oBAAA;AACA,gDAAA;AACA;EACE,cAAA;AACF;;AACA;;EAEE,gBAAA;AAEF;;AAAA;;EAEE,YAAA;AAGF;;AADA;;;;EAIE,WAAA;EACA,aAAA;AAIF;;AAFA;EACE,yBAAA;EACA,iBAAA;AAKF;;AAHA;;EAEE,YAAA;EACA,WAAA;EACA,uBAAA;AAMF","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n//prettier-ignore\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    text-decoration: none;\n}\n/* HTML5 display-role reset for older browsers */\n//prettier-ignore\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n/* prettier-ignore */\n/* HTML5 display-role reset for older browsers */\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ship-placement-screen.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ship-placement-screen.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.ship-placement-screen {\n  display: grid;\n  height: 100%;\n  font-family: \"Mil Stencil\";\n  align-items: center;\n  grid-template-rows: repeat(3, 1fr) 5.5fr 1fr;\n  place-items: center;\n}\n\n.welcome-msg {\n  font-size: 2rem;\n  color: #969696;\n}\n\n.directions {\n  color: #cacaca;\n  margin: 0 2rem;\n  text-align: center;\n}\n\n.button-field {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 1rem;\n}\n.button-field .flip-button {\n  transition: 500ms;\n}\n.button-field .flip-button--flipped {\n  transition: 500ms;\n  transform: rotate(90deg);\n}\n\n.placement-grid {\n  width: 95vmin;\n  height: 95vmin;\n  max-width: 500px;\n  max-height: 500px;\n}\n\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .ship-placement-screen {\n    grid-template-rows: 0.7fr auto auto;\n    grid-template-columns: 1fr 1.5fr 1fr;\n  }\n\n  .welcome-msg {\n    grid-column: 1/-1;\n  }\n\n  .directions {\n    grid-row: 2/-1;\n  }\n\n  .placement-grid {\n    grid-row: 2/-1;\n    width: 65vmin;\n    height: 65vmin;\n    align-self: start;\n  }\n\n  .continue {\n    align-self: start;\n  }\n}\n@media screen and (min-width: 500px) and (min-height: 376px) {\n  .welcome-msg {\n    font-size: 4rem;\n  }\n\n  .directions {\n    font-size: 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/ship-placement-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,aAAA;EACA,YAAA;EACA,0BAAA;EACA,mBAAA;EACA,4CAAA;EACA,mBAAA;AAOF;;AALA;EACE,eAAA;EACA,cDCmB;ACOrB;;AANA;EACE,cDHgB;ECIhB,cAAA;EACA,kBAAA;AASF;;AAPA;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,SAAA;AAUF;AATE;EACE,iBAAA;AAWJ;AAVI;EACE,iBAAA;EACA,wBAAA;AAYN;;AARA;EACE,aAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;AAWF;;AATA;EACE;IACE,mCAAA;IACA,oCAAA;EAYF;;EAVA;IACE,iBAAA;EAaF;;EAXA;IACE,cAAA;EAcF;;EAZA;IACE,cAAA;IACA,aAAA;IACA,cAAA;IACA,iBAAA;EAeF;;EAbA;IACE,iBAAA;EAgBF;AACF;AAdA;EACE;IACE,eAAA;EAgBF;;EAdA;IACE,iBAAA;EAiBF;AACF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.ship-placement-screen {\n  display: grid;\n  height: 100%;\n  font-family: \"Mil Stencil\";\n  align-items: center;\n  grid-template-rows: repeat(3, 1fr) 5.5fr 1fr;\n  place-items: center;\n}\n.welcome-msg {\n  font-size: 2rem;\n  color: $navy-chain-outline;\n}\n.directions {\n  color: $navy-gray-chain;\n  margin: 0 2rem;\n  text-align: center;\n}\n.button-field {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 1rem;\n  .flip-button {\n    transition: 500ms;\n    &--flipped {\n      transition: 500ms;\n      transform: rotate(90deg);\n    }\n  }\n}\n.placement-grid {\n  width: 95vmin;\n  height: 95vmin;\n  max-width: 500px;\n  max-height: 500px;\n}\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .ship-placement-screen {\n    grid-template-rows: 0.7fr auto auto;\n    grid-template-columns: 1fr 1.5fr 1fr;\n  }\n  .welcome-msg {\n    grid-column: 1/-1;\n  }\n  .directions {\n    grid-row: 2/-1;\n  }\n  .placement-grid {\n    grid-row: 2/-1;\n    width: 65vmin;\n    height: 65vmin;\n    align-self: start;\n  }\n  .continue {\n    align-self: start;\n  }\n}\n@media screen and (min-width: 500px) and (min-height: 376px) {\n  .welcome-msg {\n    font-size: 4rem;\n  }\n  .directions {\n    font-size: 1.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/title-screen.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/title-screen.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SpecialElite-Regular.ttf */ "./src/fonts/SpecialElite-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.title-screen {\n  height: 100%;\n  display: grid;\n}\n\n.title {\n  align-self: end;\n  justify-self: center;\n  font-weight: bold;\n  font-size: 2.9rem;\n  color: #feb932;\n  margin-bottom: 1rem;\n  font-family: \"Special Elite\";\n}\n\n.play-button {\n  align-self: start;\n  justify-self: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/title-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,YAAA;EACA,aAAA;AAOF;;AALA;EACE,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cDDU;ECEV,mBAAA;EACA,4BAAA;AAQF;;AANA;EACE,iBAAA;EACA,oBAAA;AASF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"../styles/variables.scss\";\n\n.title-screen {\n  height: 100%;\n  display: grid;\n}\n.title {\n  align-self: end;\n  justify-self: center;\n  font-weight: bold;\n  font-size: 2.9rem;\n  color: $navy-gold;\n  margin-bottom: 1rem;\n  font-family: \"Special Elite\";\n}\n.play-button {\n  align-self: start;\n  justify-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/battle-screen.scss":
/*!***************************************!*\
  !*** ./src/styles/battle-screen.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battle_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./battle-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/battle-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battle_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battle_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battle_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battle_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components.scss":
/*!************************************!*\
  !*** ./src/styles/components.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_components_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./components.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/components.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_components_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_components_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_components_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_components_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/game-over-screen.scss":
/*!******************************************!*\
  !*** ./src/styles/game-over-screen.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./game-over-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/game-over-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/ship-placement-screen.scss":
/*!***********************************************!*\
  !*** ./src/styles/ship-placement-screen.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ship-placement-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ship-placement-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/title-screen.scss":
/*!**************************************!*\
  !*** ./src/styles/title-screen.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./title-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/title-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/battle-screen.js":
/*!**************************************!*\
  !*** ./src/modules/battle-screen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battleScreen": () => (/* binding */ battleScreen)
/* harmony export */ });
/* harmony import */ var _styles_battle_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/battle-screen.scss */ "./src/styles/battle-screen.scss");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _new_grid_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-grid-area */ "./src/modules/new-grid-area.js");
/* harmony import */ var _new_ship_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-ship-list */ "./src/modules/new-ship-list.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");






function battleScreen() {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_2__.newGridAreaFor)("Enemy"));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_3__.newShipListFor)("Enemy"));

  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_2__.newGridAreaFor)("Player"));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_3__.newShipListFor)("Player"));

  function eraseShipFromList(data) {
    const { playerName, shipIndex } = data;
    const ship = document.querySelector(
      `.${playerName}-ship-list-item-${shipIndex}`
    );
    ship.classList.add("sunk");
  }
  _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("shipHasSunk", eraseShipFromList);
  _render__WEBPACK_IMPORTED_MODULE_4__.Render.attack('Enemy',33,true)
  _render__WEBPACK_IMPORTED_MODULE_4__.Render.attack('Enemy',23,false)
}


/***/ }),

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => (/* binding */ Components)
/* harmony export */ });
/* harmony import */ var _styles_components_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components.scss */ "./src/styles/components.scss");
/* harmony import */ var _new_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-grid */ "./src/modules/new-grid.js");



const Components = (() => {
  const newButton = (label) => {
    const button = document.createElement("button");
    button.classList.add("button", "clickable");
    button.textContent = label;
    return button;
  };

  return {
    newButton,
    newGrid: _new_grid__WEBPACK_IMPORTED_MODULE_1__.newGrid,
  };
})();


/***/ }),

/***/ "./src/modules/game-board.js":
/*!***********************************!*\
  !*** ./src/modules/game-board.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship_fleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-fleet */ "./src/modules/ship-fleet.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");



const GRID_SIZE = 100;
function GameBoard(pName) {
  const _grid = buildGrid(GRID_SIZE);
  const _fleet = (0,_ship_fleet__WEBPACK_IMPORTED_MODULE_0__.ShipFleet)();
  const _playerName = pName;
  let _placementIndex = 0;
  let _placementAxis = "x";

  const getCoordinateStatus = (index) => _grid[index];

  const placeShip = (startingCoordinate, axis = getPlacementAxis()) => {
    setShipCoordinates();
    updateGridWithShipIndex();
    _placementIndex++;

    function updateGridWithShipIndex() {
      const shipCoordinates = _fleet[_placementIndex].getCoordinates();
      shipCoordinates.forEach(
        (coordinate) => (_grid[coordinate].shipIndex = _placementIndex)
      );
    }

    function setShipCoordinates() {
      _fleet[_placementIndex].setCoordinates(startingCoordinate, axis);
    }
  };

  const isIllegalShipPlacement = (startingCoordinate, axis) => {
    const shipIndex = _placementIndex;
    return overFlowsGrid() || overLapsAnotherShip();

    function overFlowsGrid() {
      const shipLength = _fleet[shipIndex].getLength();
      return overFlowsGridOnXAxis() || overFlowsGridOnYAxis();

      function overFlowsGridOnXAxis() {
        if (axis !== "x") return false;
        const firstDigitOfStartingCoordinate = startingCoordinate % 10;
        return shipLength + firstDigitOfStartingCoordinate - 1 >= 10;
      }

      function overFlowsGridOnYAxis() {
        if (axis !== "y") return false;
        const endOfShipCoordinate = (shipLength - 1) * 10 + startingCoordinate;
        return endOfShipCoordinate >= _grid.length;
      }
    }

    function placedOnAnotherShip(pCoordinate) {
      return _grid[pCoordinate].shipIndex !== "none";
    }

    function overLapsAnotherShip() {
      const coordinatesToCheck = _fleet[shipIndex].checkCoordinates(
        startingCoordinate,
        axis
      );
      return coordinatesToCheck.some(placedOnAnotherShip);
    }
  };
  const areAllShipsPlaced = () => {
    return _placementIndex === _fleet.length;
  };

  const receiveAttack = (coordinate) => {
    if (_grid[coordinate].isPlayed) return;
    _grid[coordinate].isPlayed = true;

    if (_grid[coordinate].shipIndex === "none") return;
    attackShip();

    function attackShip() {
      const shipIndex = _grid[coordinate].shipIndex;
      const shipToAttack = _fleet[shipIndex];
      shipToAttack.hit();

      if (shipToAttack.isSunk()) publishShipSinking();

      function publishShipSinking() {
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("shipHasSunk", {
          startingCoordinate: shipToAttack.getStartingCoordinate(),
          shipIndex: shipIndex,
          playerName: _playerName,
          axis: shipToAttack.getAxis(),
        });
      }
    }
  };

  const isFleetSunk = () => _fleet.every((ship) => ship.isSunk());

  const placeAllShipsAtRandomCoordinates = () => {
    while (!areAllShipsPlaced()) {
      const [legalCoordinate, legalAxis] = getRandomLegalPlacement();
      placeShip(legalCoordinate, legalAxis);
    }

    function getRandomLegalPlacement() {
      let [coordinate, axis] = getRandomPlacement();
      while (isIllegalShipPlacement(coordinate, axis)) {
        [coordinate, axis] = getRandomPlacement();
      }
      return [coordinate, axis];
    }

    function getRandomPlacement() {
      const axes = ["x", "y"];
      const randomAxis = axes[Math.floor(Math.random() * axes.length)];
      const randomCoordinate = Math.floor(Math.random() * GRID_SIZE);
      return [randomCoordinate, randomAxis];
    }
  };

  const getPlacementAxis = () => _placementAxis;

  const togglePlacementAxis = () =>
    (_placementAxis = _placementAxis === "x" ? "y" : "x");

  const resetPlacement = () => {
    _placementIndex = 0;
    _grid.forEach((item) => (item.shipIndex = "none"));
    _fleet.forEach((ship) => ship.resetCoordinates());
  };

  const getPlacementIndex = () => _placementIndex;

  return {
    getCoordinateStatus,
    placeShip,
    isIllegalShipPlacement,
    areAllShipsPlaced,
    placeAllShipsAtRandomCoordinates,
    receiveAttack,
    isFleetSunk,
    getPlacementAxis,
    getPlacementIndex,
    togglePlacementAxis,
    resetPlacement,
  };
}

function buildGrid(size) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    grid.push(newGridItem());
  }
  return grid;

  function newGridItem() {
    return { isPlayed: false, shipIndex: "none" };
  }
}


/***/ }),

/***/ "./src/modules/game-over-screen.js":
/*!*****************************************!*\
  !*** ./src/modules/game-over-screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameOverScreen": () => (/* binding */ gameOverScreen)
/* harmony export */ });
/* harmony import */ var _styles_game_over_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/game-over-screen.scss */ "./src/styles/game-over-screen.scss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");




function gameOverScreen(isWinner) {
  const content = document.querySelector(".content");

  const gameOverContainer = document.createElement("div");
  gameOverContainer.classList.add("game-over");
  content.append(gameOverContainer);

  const title = document.createElement("h1");
  title.classList.add("game-over__title");
  title.textContent = "Game Over";
  gameOverContainer.appendChild(title);

  const winnerMsg = document.createElement("p");
  winnerMsg.classList.add("game-over__winner-msg");
  winnerMsg.textContent = `You have ${isWinner ? "won." : "lost."}`;
  gameOverContainer.appendChild(winnerMsg);

  const buttonField = document.createElement("div");
  buttonField.classList.add("game-over__button-field");
  gameOverContainer.appendChild(buttonField);

  const playAgainButton = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Play Again?");
  playAgainButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.playAgainClick);
  buttonField.appendChild(playAgainButton);

  const quitButton = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Quit");
  quitButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.quitClick);
  buttonField.appendChild(quitButton);
}


/***/ }),

/***/ "./src/modules/index-to-ship-name.js":
/*!*******************************************!*\
  !*** ./src/modules/index-to-ship-name.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexToShipName": () => (/* binding */ indexToShipName)
/* harmony export */ });
function indexToShipName(index) {
  if (index === 0) return "carrier";
  if (index === 1) return "battleship";
  if (index === 2) return "cruiser";
  if (index === 3 || index === 4) return "destroyer";
  if (index === 5 || index === 6) return "submarine";
}


/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interface": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-board */ "./src/modules/game-board.js");




const Interface = (() => {
  const enemyGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_2__.GameBoard)("Enemy");
  enemyGameBoard.placeAllShipsAtRandomCoordinates();
  const playerGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_2__.GameBoard)("Player");

  function startGameClick() {
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.clearContent();
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.shipPlacementScreen();
  }

  function flipShipClick(e) {
    playerGameBoard.togglePlacementAxis();
    e.target.classList.toggle("flip-button--flipped");
  }

  function resetClick(displayGrid) {
    displayGrid.resetShips();
    playerGameBoard.resetPlacement();
  }

  function continueClick() {
    if (!playerGameBoard.areAllShipsPlaced()) return;
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.clearContent();
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.battleScreen();
  }

  function placementGridClick({ target, displayGrid }) {
    const coordinate = _getIndexOf(target);
    if (playerGameBoard.areAllShipsPlaced()) return;
    const axis = playerGameBoard.getPlacementAxis();
    if (playerGameBoard.isIllegalShipPlacement(coordinate, axis)) return;
    const shipIndex = playerGameBoard.getPlacementIndex();
    playerGameBoard.placeShip(coordinate);
    displayGrid.addShipToGrid({ coordinate, axis, shipIndex });
  }

  function enemyGridClick({ target, enemyDisplayGrid, playerDisplayGrid }) {
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("enemyGridClick", _getIndexOf(target));
  }

  function playAgainClick() {
    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("playAgainClick");
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.clearContent();
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.titleScreen();
  }

  function quitClick() {
    window.open("", "_self").document.write("");
    window.open("", "_self").close();
    window.location.href = "https://github.com/palmerusaf/battle-ship";
  }

  function _getIndexOf(pTarget) {
    if (!pTarget.classList.contains("grid-container__element"))
      pTarget = pTarget.parentElement;
    return Array.from(pTarget.parentElement.children).indexOf(pTarget);
  }

  return {
    startGameClick,
    flipShipClick,
    resetClick,
    continueClick,
    placementGridClick,
    enemyGridClick,
    playAgainClick,
    quitClick,
  };
})();


/***/ }),

/***/ "./src/modules/new-grid-area.js":
/*!**************************************!*\
  !*** ./src/modules/new-grid-area.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newGridAreaFor": () => (/* binding */ newGridAreaFor)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");



function newGridAreaFor(playerName) {
  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area", `grid-area--${playerName}`);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = `${playerName} Grid`;
  gridArea.appendChild(gridLabel);

  const grid = _components__WEBPACK_IMPORTED_MODULE_0__.Components.newGrid();
  if (playerName === "Enemy") addEnemyAttributes();
  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

  function addEnemyAttributes() {
    grid.setClickable();
    grid.addEventToElements("click", _interface__WEBPACK_IMPORTED_MODULE_1__.Interface.enemyGridClick);
    grid.setCoordinateHoverMsg("Attack coordinate");
  }

  return gridArea;
}


/***/ }),

/***/ "./src/modules/new-grid.js":
/*!*********************************!*\
  !*** ./src/modules/new-grid.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newGrid": () => (/* binding */ newGrid)
/* harmony export */ });
/* harmony import */ var _index_to_ship_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-to-ship-name */ "./src/modules/index-to-ship-name.js");

const newGrid = () => {
  const GRID_SIZE = 100;
  const gridContainer = initGridWithElements();

  function initGridWithElements() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    for (let i = 0; i < GRID_SIZE; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-container__element");
      gridContainer.appendChild(gridElement);
    }
    return gridContainer;
  }

  const _modElements = (mod) => [...gridContainer.children].forEach(mod);

  const render = () => gridContainer;

  const setClickable = () =>
    _modElements((gridElement) => {
      gridElement.setAttribute("tabindex", "0");
      gridElement.classList.add("clickable");
    });

  const setCoordinateHoverMsg = (message) => {
    _modElements(
      (gridElement, index) =>
        (gridElement.title = `${message} ${xYCoordinate(index)}`)
    );

    function xYCoordinate(index) {
      return `(${(index % 10) + 1}, ${Math.floor(index / 10 + 1)})`;
    }
  };

  const addParentClass = (className) => gridContainer.classList.add(className);

  const addChildClass = (className) => {
    _modElements((gridElement) => gridElement.classList.add(className));
  };

  const addEventToElements = (pEventType, pEvent) => {
    _modElements((gridElement) =>
      gridElement.addEventListener(pEventType, pEvent)
    );
  };

  const addShipToGrid = (placementData) => {
    const { coordinate, shipIndex, axis } = placementData;
    const ship = document.createElement("img");
    ship.classList.add("grid-container__ship", `ship-index-${shipIndex}`);
    if (axis === "y") ship.classList.add("grid-container__ship--rotated");
    ship.src = `/src/imgs/${(0,_index_to_ship_name__WEBPACK_IMPORTED_MODULE_0__.indexToShipName)(shipIndex)}.png`;
    gridContainer.children[coordinate].appendChild(ship);
    gridContainer.children[coordinate].classList.remove("clickable");
  };

  const resetShips = () => {
    _modElements((gridElement) => (gridElement.textContent = ""));
    setClickable();
  };

  return {
    render,
    setClickable,
    setCoordinateHoverMsg,
    addParentClass,
    addChildClass,
    addEventToElements,
    addShipToGrid,
    resetShips,
  };
};


/***/ }),

/***/ "./src/modules/new-ship-list.js":
/*!**************************************!*\
  !*** ./src/modules/new-ship-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newShipListFor": () => (/* binding */ newShipListFor)
/* harmony export */ });
/* harmony import */ var _index_to_ship_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-to-ship-name */ "./src/modules/index-to-ship-name.js");


function newShipListFor(playerName) {
  const shipArea = document.createElement("div");
  shipArea.classList.add("ship-area", `ship-area--${playerName}`);

  const shipLabel = document.createElement("h3");
  shipLabel.classList.add("ship-area__label");
  shipLabel.textContent = `${playerName} Ships`;
  shipArea.appendChild(shipLabel);

  const shipList = document.createElement("ul");
  shipList.classList.add("ship-area__list");
  shipArea.appendChild(shipList);

  addShipsTo(shipList);

  return shipArea;
  function addShipsTo(shipList) {
    const NUM_SHIPS_IN_FLEET = 7;
    for (let i = 0; i < NUM_SHIPS_IN_FLEET; i++) {
      const shipItem = document.createElement("li");
      shipItem.classList.add(
        "ship-area__item",
        `${playerName}-ship-list-item-${i}`
      );
      shipList.appendChild(shipItem);

      const shipImg = document.createElement("img");
      shipImg.src = `/src/imgs/${(0,_index_to_ship_name__WEBPACK_IMPORTED_MODULE_0__.indexToShipName)(i)}.png`;
      shipImg.classList.add("ship-area__img");
      shipItem.appendChild(shipImg);
    }
  }
}


/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
const pubsub = {
    events: {},
    subscribe: function(eventName, callbackFuncToSub) {
      //add an event with a name as new or to existing list
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callbackFuncToSub);
    },
    unsubscribe: function(eventName, callbackFuncToUnSub) {
      //remove an event function by name
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(callbackFunc => callbackFunc !== callbackFuncToUnSub);
      }
    },
    publish: function(eventName, data) {
      //emit|publish|announce the event to anyone who is subscribed
      if (this.events[eventName]) {
        this.events[eventName].forEach(callbackFunc => {
          callbackFunc(data);
        });
      }
    }
  };

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render": () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _battle_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battle-screen */ "./src/modules/battle-screen.js");
/* harmony import */ var _title_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title-screen */ "./src/modules/title-screen.js");
/* harmony import */ var _ship_placement_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship-placement-screen */ "./src/modules/ship-placement-screen.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-over-screen */ "./src/modules/game-over-screen.js");





const Render = (() => {
  const clearContent = () =>
    (document.querySelector(".content").textContent = "");

  const attack = (playerName, coordinate, isHit) => {
    const gridContainer = document.querySelector(
      `.grid-area--${playerName} > .grid-area__grid`
    );
    playBombAnimation(thenMarkHitOrMiss);

    function playBombAnimation(callBack) {
      const bombDropAnimation = document.createElement("div");
      bombDropAnimation.classList.add("attack-grid", "attack-grid__bomb");
      bombDropAnimation.textContent = "💣";
      bombDropAnimation.addEventListener("animationend", callBack);
      gridContainer.children[coordinate].appendChild(bombDropAnimation);
    }

    function thenMarkHitOrMiss() {
      gridContainer.children[coordinate].textContent = "";
      gridContainer.children[coordinate].classList.remove("clickable");
      const hitOrMiss = document.createElement("div");
      hitOrMiss.classList.add("attack-grid", "attack-grid");
      hitOrMiss.textContent = isHit ? "💥" : "💦";
      gridContainer.children[coordinate].appendChild(hitOrMiss);
    }
  };

  return {
    battleScreen: _battle_screen__WEBPACK_IMPORTED_MODULE_0__.battleScreen,
    titleScreen: _title_screen__WEBPACK_IMPORTED_MODULE_1__.titleScreen,
    shipPlacementScreen: _ship_placement_screen__WEBPACK_IMPORTED_MODULE_2__.shipPlacementScreen,
    gameOverScreen: _game_over_screen__WEBPACK_IMPORTED_MODULE_3__.gameOverScreen,
    clearContent,
    attack,
  };
})();


/***/ }),

/***/ "./src/modules/ship-fleet.js":
/*!***********************************!*\
  !*** ./src/modules/ship-fleet.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipFleet": () => (/* binding */ ShipFleet)
/* harmony export */ });
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ship */ "./src/modules/ship.js");


const ShipFleet = () => [
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(5),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(1),
  (0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(1),
];


/***/ }),

/***/ "./src/modules/ship-placement-screen.js":
/*!**********************************************!*\
  !*** ./src/modules/ship-placement-screen.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipPlacementScreen": () => (/* binding */ shipPlacementScreen)
/* harmony export */ });
/* harmony import */ var _styles_ship_placement_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ship-placement-screen.scss */ "./src/styles/ship-placement-screen.scss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");





const shipPlacementScreen=()=> {
  const content = document.querySelector(".content");

  const shipPlacementScreen = document.createElement("div");
  shipPlacementScreen.classList.add("ship-placement-screen");
  content.appendChild(shipPlacementScreen);

  const welcomeMsg = document.createElement("h1");
  welcomeMsg.classList.add("welcome-msg");
  welcomeMsg.textContent = "Welcome";
  shipPlacementScreen.appendChild(welcomeMsg);

  const directions = document.createElement("p");
  directions.classList.add("directions");
  directions.textContent =
    "Place your ships by clicking or tapping on the grid. When you are ready press continue.";
  shipPlacementScreen.appendChild(directions);

  const buttonField = document.createElement("div");
  buttonField.classList.add("button-field");
  shipPlacementScreen.appendChild(buttonField);

  const flipShipButton = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Flip Ship");
  flipShipButton.classList.add("flip-button");
  flipShipButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.flipShipClick);
  buttonField.appendChild(flipShipButton);

  const reset = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Reset");
  reset.addEventListener("click", () => _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.resetClick(placementGrid));
  buttonField.appendChild(reset);

  const placementGrid = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newGrid();
  placementGrid.setClickable();
  placementGrid.addParentClass("placement-grid");
  placementGrid.setCoordinateHoverMsg("Place Ship at");
  placementGrid.addEventToElements("click", (e) =>
    _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.placementGridClick({
      target: e.target,
      displayGrid: placementGrid,
    })
  );
  shipPlacementScreen.appendChild(placementGrid.render());

  const continueButton = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Continue");
  continueButton.classList.add("continue");
  continueButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.continueClick);
  shipPlacementScreen.appendChild(continueButton);
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  let hitPoints = length;
  let sunk = false;
  let coordinates = [];
  let _axis = "";

  const isSunk = () => sunk;
  const getLength = () => length;
  const getCoordinates = () => coordinates;
  const getStartingCoordinate = () => coordinates[0];
  const getAxis = () => _axis;

  const hit = () => {
    hitPoints--;
    if (hitPoints === 0) sunk = true;
  };

  const setCoordinates = (pStartingPosition, pAxis) => {
    _axis = pAxis;
    for (let i = 0; i < length; i++) {
      if (pAxis === "y") coordinates.push(pStartingPosition + i * 10);
      else coordinates.push(pStartingPosition + i);
    }
  };
  
  const resetCoordinates = () => (coordinates = []);

  // check what coordinates would be without setting them
  const checkCoordinates = (pStartingPosition, pAxis) => {
    setCoordinates(pStartingPosition, pAxis);
    const hypoCoordinates = getCoordinates();
    resetCoordinates();
    return hypoCoordinates;
  };
  return {
    isSunk,
    getLength,
    getCoordinates,
    getStartingCoordinate,
    getAxis,
    hit,
    setCoordinates,
    checkCoordinates,
    resetCoordinates,
  };
}


/***/ }),

/***/ "./src/modules/title-screen.js":
/*!*************************************!*\
  !*** ./src/modules/title-screen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "titleScreen": () => (/* binding */ titleScreen)
/* harmony export */ });
/* harmony import */ var _styles_title_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/title-screen.scss */ "./src/styles/title-screen.scss");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");




const titleScreen = () => {
  const content = document.querySelector(".content");

  const titleScreen = document.createElement("div");
  titleScreen.classList.add("title-screen");
  content.appendChild(titleScreen);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "BATTLESHIP";
  titleScreen.appendChild(title);

  const playButton = _components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Start Game");
  playButton.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.Interface.startGameClick);
  playButton.classList.add("play-button");

  titleScreen.appendChild(playButton);
};


/***/ }),

/***/ "./src/fonts/BlackOpsOne-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/BlackOpsOne-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f15052702222e52fee9.ttf";

/***/ }),

/***/ "./src/fonts/SpecialElite-Regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/SpecialElite-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cefed1373df28714f8e5.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/styles/footer.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");
/* harmony import */ var _modules_game_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/game-board */ "./src/modules/game-board.js");
/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pubsub */ "./src/modules/pubsub.js");






_modules_render__WEBPACK_IMPORTED_MODULE_2__.Render.shipPlacementScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjhCO0FBQ0Q7QUFDYTtBQUNPO0FBQ1A7O0FBRTFDLHVFQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9iYXR0bGUtc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvc2hpcC1wbGFjZW1lbnQtc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5zY3NzP2FjZDQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2Nzcz9kODBiIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzcz9kNWFlIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLnNjc3M/NWYwYSIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzcz9lMzMxIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9zaGlwLXBsYWNlbWVudC1zY3JlZW4uc2Nzcz82NmNlIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy90aXRsZS1zY3JlZW4uc2Nzcz82YjczIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9iYXR0bGUtc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLW92ZXItc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvaW5kZXgtdG8tc2hpcC1uYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LWdyaWQtYXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL25ldy1ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LXNoaXAtbGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAtZmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLXBsYWNlbWVudC1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvdGl0bGUtc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uYmF0dGxlLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ncmlkLWFyZWFfX2xhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgY29sb3I6ICNjYWNhY2E7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdyaWQtYXJlYV9fZ3JpZCB7XFxuICB3aWR0aDogNzV2bWluO1xcbiAgaGVpZ2h0OiA3NXZtaW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcblxcbiAgLmdyaWQtYXJlYSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19sYWJlbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDYuNXJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5iYXR0bGUtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5ncmlkLWFyZWFfX2dyaWQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19ncmlkIC5jbGlja2FibGUge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIH1cXG5cXG4gIC5zaGlwLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaGlwLWFyZWEtLVBsYXllciB7XFxuICAgIGdyaWQtYXJlYTogMjtcXG4gIH1cXG4gIC5zaGlwLWFyZWFfX2xhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICAgIGNvbG9yOiAjOTY5Njk2O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgfVxcbiAgLnNoaXAtYXJlYV9fbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzk2OTY5NjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIC5zaGlwLWFyZWFfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MXB4O1xcbiAgfVxcbiAgLnNoaXAtYXJlYSAuc3VuayB7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBU0Y7QUFSRTtFQUNFLDBCQUFBO0VBQ0EsY0RQYztFQ1FkLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkU7RUFFRSxhQURZO0VBRVosY0FGWTtBQVdoQjs7QUFOQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSx1QkFBQTtFQVNGOztFQVBBO0lBQ0UsbUJBQUE7RUFVRjtFQVRFO0lBQ0UsU0FBQTtJQUNBLGFBQUE7RUFXSjs7RUFSQTtJQUNFLGFBQUE7RUFXRjtBQUNGO0FBUkE7RUFDRTtJQUNFLGtDQUFBO0lBQ0EscUNBQUE7RUFVRjs7RUFQRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBVUo7RUFUSTtJQUNFLGlCQUFBO0VBV047O0VBUEE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBVUY7RUFURTtJQUNFLFlBQUE7RUFXSjtFQVRFO0lBQ0UsMEJBQUE7SUFDQSxjRDFEZTtJQzJEZixpQkFBQTtJQUNBLHFCQUFBO0VBV0o7RUFURTtJQUNFLHlCRGhFWTtJQ2lFWixhQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBV0o7RUFURTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBV0o7RUFURTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtFQVdKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5iYXR0bGUtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNoaXAtYXJlYSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ3JpZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICZfX2xhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICAgIGNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19ncmlkIHtcXG4gICAgJHZtaW4tc2l6ZTogNzV2bWluO1xcbiAgICB3aWR0aDogJHZtaW4tc2l6ZTtcXG4gICAgaGVpZ2h0OiAkdm1pbi1zaXplO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLmJhdHRsZS1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIH1cXG4gIC5ncmlkLWFyZWEge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAmX19sYWJlbCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHdpZHRoOiA2LjVyZW07XFxuICAgIH1cXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4vL2Rlc2t0b3Agc3R5bGluZ1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLmJhdHRsZS1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbiAgLmdyaWQtYXJlYSB7XFxuICAgICZfX2dyaWQge1xcbiAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgIC5jbGlja2FibGUge1xcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAuc2hpcC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICYtLVBsYXllciB7XFxuICAgICAgZ3JpZC1hcmVhOiAyO1xcbiAgICB9XFxuICAgICZfX2xhYmVsIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgICBjb2xvcjogJG5hdnktY2hhaW4tb3V0bGluZTtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICAgIH1cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgJl9faW1nIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiA0MXB4O1xcbiAgICB9XFxuICAgIC5zdW5rIHtcXG4gICAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogIzk2OTY5NiBzb2xpZCAycHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmdyaWQtY29udGFpbmVyX19lbGVtZW50IHtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM5Njk2OTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX3NoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX3NoaXAtLXJvdGF0ZWQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuXFxuLnNoaXAtaW5kZXgtMCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uc2hpcC1pbmRleC0xIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbi5zaGlwLWluZGV4LTIge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLnNoaXAtaW5kZXgtMywgLnNoaXAtaW5kZXgtNCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4uc2hpcC1pbmRleC01LCAuc2hpcC1pbmRleC02IHtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbi5jbGlja2FibGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG4uYXR0YWNrLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5hdHRhY2stZ3JpZF9fYm9tYiB7XFxuICBhbmltYXRpb246IGRyb3BJbiA2MDBtcztcXG59XFxuQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSwgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJET2dCO0VDTmhCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBUUY7QUFQRTtFQUNFLHlCQUFBO0VBQ0EseUJETGM7QUNjbEI7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFTSjtBQVJJO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQVVOOztBQUxFO0VBQ0UsVUFBQTtBQVFKO0FBTkU7RUFDRSxVQUFBO0FBUUo7QUFORTtFQUNFLFVBQUE7QUFRSjtBQU5FO0VBRUUsVUFBQTtBQU9KO0FBTEU7RUFFRSxVQUFBO0FBTUo7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUxFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBT0Y7QUFORTtFQUNFLHVCQUFBO0FBUUo7QUFQSTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0VBU047RUFQSTtJQUVFLFVBQUE7RUFRTjtFQU5JO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBUU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogJG5hdnktY2hhaW4tb3V0bGluZSBzb2xpZCAycHg7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICZfX2VsZW1lbnQge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgfVxcbiAgJl9fc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgICYtLXJvdGF0ZWQge1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgICB9XFxuICB9XFxufVxcbi5zaGlwLWluZGV4IHtcXG4gICYtMCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAmLTEge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbiAgJi0yIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG4gICYtMyxcXG4gICYtNCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAmLTUsXFxuICAmLTYge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgfVxcbn1cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgfVxcbn1cXG4uYXR0YWNrLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAmX19ib21iIHtcXG4gICAgYW5pbWF0aW9uOiBkcm9wSW4gNjAwbXM7XFxuICAgIEBrZXlmcmFtZXMgZHJvcEluIHtcXG4gICAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgfVxcbiAgICAgIDI1JSxcXG4gICAgICA3NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5mb290ZXJzLXBhcmVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJkNmE7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG59XFxuLmZvb3Rlcl9fcmVwby1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5mb290ZXJfX2dpdGh1Yi1pY29uIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQUxBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCREdVO0FDSVo7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFRRjtBQVBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVNKO0FBUEU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFTSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCI7XFxuXFxuLmZvb3RlcnMtcGFyZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktYmx1ZTtcXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgJl9fcmVwby1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICB9XFxuICAmX19naXRodWItaWNvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICM5Njk2OTY7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmdhbWUtb3Zlcl9fdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgY29sb3I6ICM3MzM5MWY7XFxufVxcbi5nYW1lLW92ZXJfX3dpbm5lci1tc2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzc2NWYzYTtcXG59XFxuLmdhbWUtb3Zlcl9fYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFRRjtBQVBFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNEVmU7QUNtQm5CO0FBUEU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjRGxCaUI7QUMyQnJCO0FBUEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICZfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgIGNvbG9yOiAkbmF2eS1icm93bi1lYWdsZTtcXG4gIH1cXG4gICZfX3dpbm5lci1tc2cge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogJG5hdnktYnJvd24tb3V0bGluZTtcXG4gIH1cXG4gICZfX2J1dHRvbi1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDRyxxQkFBQTtBQUFKOztBQUVBLGdEQUFBO0FBRUE7O0VBRUMsY0FBQTtBQUFEOztBQUVBLG9CQUFBO0FBQ0EsZ0RBQUE7QUFDQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTs7RUFFRSxnQkFBQTtBQUVGOztBQUFBOztFQUVFLFlBQUE7QUFHRjs7QUFEQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQU1GXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG4vL3ByZXR0aWVyLWlnbm9yZVxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuLy9wcmV0dGllci1pZ25vcmVcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5zaGlwLXBsYWNlbWVudC1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgNS41ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjOTY5Njk2O1xcbn1cXG5cXG4uZGlyZWN0aW9ucyB7XFxuICBjb2xvcjogI2NhY2FjYTtcXG4gIG1hcmdpbjogMCAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uYnV0dG9uLWZpZWxkIC5mbGlwLWJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuLmJ1dHRvbi1maWVsZCAuZmxpcC1idXR0b24tLWZsaXBwZWQge1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogOTV2bWluO1xcbiAgaGVpZ2h0OiA5NXZtaW47XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAuc2hpcC1wbGFjZW1lbnQtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDFmcjtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcblxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQtZ3JpZCB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgICB3aWR0aDogNjV2bWluO1xcbiAgICBoZWlnaHQ6IDY1dm1pbjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY29udGludWUge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWluLWhlaWdodDogMzc2cHgpIHtcXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG5cXG4gIC5kaXJlY3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcC1wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQUxBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGNEQ21CO0FDT3JCOztBQU5BO0VBQ0UsY0RIZ0I7RUNJaEIsY0FBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQVVGO0FBVEU7RUFDRSxpQkFBQTtBQVdKO0FBVkk7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FBWU47O0FBUkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxvQ0FBQTtFQVlGOztFQVZBO0lBQ0UsaUJBQUE7RUFhRjs7RUFYQTtJQUNFLGNBQUE7RUFjRjs7RUFaQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBZUY7O0VBYkE7SUFDRSxpQkFBQTtFQWdCRjtBQUNGO0FBZEE7RUFDRTtJQUNFLGVBQUE7RUFnQkY7O0VBZEE7SUFDRSxpQkFBQTtFQWlCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uc2hpcC1wbGFjZW1lbnQtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpIDUuNWZyIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53ZWxjb21lLW1zZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogJG5hdnktY2hhaW4tb3V0bGluZTtcXG59XFxuLmRpcmVjdGlvbnMge1xcbiAgY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ1dHRvbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIC5mbGlwLWJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICAmLS1mbGlwcGVkIHtcXG4gICAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIH1cXG4gIH1cXG59XFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA5NXZtaW47XFxuICBoZWlnaHQ6IDk1dm1pbjtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcXG4gIC5zaGlwLXBsYWNlbWVudC1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMWZyO1xcbiAgfVxcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB9XFxuICAuZGlyZWN0aW9ucyB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgfVxcbiAgLnBsYWNlbWVudC1ncmlkIHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIHdpZHRoOiA2NXZtaW47XFxuICAgIGhlaWdodDogNjV2bWluO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG4gIC5jb250aW51ZSB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzZweCkge1xcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi50aXRsZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG4gIGNvbG9yOiAjZmViOTMyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUFMQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0REVTtFQ0VWLG1CQUFBO0VBQ0EsNEJBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFTRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4udGl0bGUtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjlyZW07XFxuICBjb2xvcjogJG5hdnktZ29sZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbn1cXG4ucGxheS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcC1wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwLXBsYWNlbWVudC1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGl0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aXRsZS1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvYmF0dGxlLXNjcmVlbi5zY3NzXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IG5ld0dyaWRBcmVhRm9yIH0gZnJvbSBcIi4vbmV3LWdyaWQtYXJlYVwiO1xuaW1wb3J0IHsgbmV3U2hpcExpc3RGb3IgfSBmcm9tIFwiLi9uZXctc2hpcC1saXN0XCI7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhdHRsZVNjcmVlbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBiYXR0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXR0bGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcImJhdHRsZS1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmF0dGxlU2NyZWVuKTtcblxuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3R3JpZEFyZWFGb3IoXCJFbmVteVwiKSk7XG4gIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChuZXdTaGlwTGlzdEZvcihcIkVuZW15XCIpKTtcblxuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3R3JpZEFyZWFGb3IoXCJQbGF5ZXJcIikpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3U2hpcExpc3RGb3IoXCJQbGF5ZXJcIikpO1xuXG4gIGZ1bmN0aW9uIGVyYXNlU2hpcEZyb21MaXN0KGRhdGEpIHtcbiAgICBjb25zdCB7IHBsYXllck5hbWUsIHNoaXBJbmRleCB9ID0gZGF0YTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwbGF5ZXJOYW1lfS1zaGlwLWxpc3QtaXRlbS0ke3NoaXBJbmRleH1gXG4gICAgKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICB9XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJzaGlwSGFzU3Vua1wiLCBlcmFzZVNoaXBGcm9tTGlzdCk7XG4gIFJlbmRlci5hdHRhY2soJ0VuZW15JywzMyx0cnVlKVxuICBSZW5kZXIuYXR0YWNrKCdFbmVteScsMjMsZmFsc2UpXG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvY29tcG9uZW50cy5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHcmlkIH0gZnJvbSBcIi4vbmV3LWdyaWRcIjtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdCdXR0b24gPSAobGFiZWwpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwiY2xpY2thYmxlXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdCdXR0b24sXG4gICAgbmV3R3JpZCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwRmxlZXQgfSBmcm9tIFwiLi9zaGlwLWZsZWV0XCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgR1JJRF9TSVpFID0gMTAwO1xuZXhwb3J0IGZ1bmN0aW9uIEdhbWVCb2FyZChwTmFtZSkge1xuICBjb25zdCBfZ3JpZCA9IGJ1aWxkR3JpZChHUklEX1NJWkUpO1xuICBjb25zdCBfZmxlZXQgPSBTaGlwRmxlZXQoKTtcbiAgY29uc3QgX3BsYXllck5hbWUgPSBwTmFtZTtcbiAgbGV0IF9wbGFjZW1lbnRJbmRleCA9IDA7XG4gIGxldCBfcGxhY2VtZW50QXhpcyA9IFwieFwiO1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVTdGF0dXMgPSAoaW5kZXgpID0+IF9ncmlkW2luZGV4XTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzID0gZ2V0UGxhY2VtZW50QXhpcygpKSA9PiB7XG4gICAgc2V0U2hpcENvb3JkaW5hdGVzKCk7XG4gICAgdXBkYXRlR3JpZFdpdGhTaGlwSW5kZXgoKTtcbiAgICBfcGxhY2VtZW50SW5kZXgrKztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUdyaWRXaXRoU2hpcEluZGV4KCkge1xuICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKFxuICAgICAgICAoY29vcmRpbmF0ZSkgPT4gKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9IF9wbGFjZW1lbnRJbmRleClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2hpcENvb3JkaW5hdGVzKCkge1xuICAgICAgX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uc2V0Q29vcmRpbmF0ZXMoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCA9IChzdGFydGluZ0Nvb3JkaW5hdGUsIGF4aXMpID0+IHtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBfcGxhY2VtZW50SW5kZXg7XG4gICAgcmV0dXJuIG92ZXJGbG93c0dyaWQoKSB8fCBvdmVyTGFwc0Fub3RoZXJTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkKCkge1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IF9mbGVldFtzaGlwSW5kZXhdLmdldExlbmd0aCgpO1xuICAgICAgcmV0dXJuIG92ZXJGbG93c0dyaWRPblhBeGlzKCkgfHwgb3ZlckZsb3dzR3JpZE9uWUF4aXMoKTtcblxuICAgICAgZnVuY3Rpb24gb3ZlckZsb3dzR3JpZE9uWEF4aXMoKSB7XG4gICAgICAgIGlmIChheGlzICE9PSBcInhcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgPSBzdGFydGluZ0Nvb3JkaW5hdGUgJSAxMDtcbiAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGggKyBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgLSAxID49IDEwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkT25ZQXhpcygpIHtcbiAgICAgICAgaWYgKGF4aXMgIT09IFwieVwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVuZE9mU2hpcENvb3JkaW5hdGUgPSAoc2hpcExlbmd0aCAtIDEpICogMTAgKyBzdGFydGluZ0Nvb3JkaW5hdGU7XG4gICAgICAgIHJldHVybiBlbmRPZlNoaXBDb29yZGluYXRlID49IF9ncmlkLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZWRPbkFub3RoZXJTaGlwKHBDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gX2dyaWRbcENvb3JkaW5hdGVdLnNoaXBJbmRleCAhPT0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3ZlckxhcHNBbm90aGVyU2hpcCgpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9DaGVjayA9IF9mbGVldFtzaGlwSW5kZXhdLmNoZWNrQ29vcmRpbmF0ZXMoXG4gICAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZSxcbiAgICAgICAgYXhpc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlc1RvQ2hlY2suc29tZShwbGFjZWRPbkFub3RoZXJTaGlwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFyZUFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBfcGxhY2VtZW50SW5kZXggPT09IF9mbGVldC5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLmlzUGxheWVkKSByZXR1cm47XG4gICAgX2dyaWRbY29vcmRpbmF0ZV0uaXNQbGF5ZWQgPSB0cnVlO1xuXG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9PT0gXCJub25lXCIpIHJldHVybjtcbiAgICBhdHRhY2tTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2tTaGlwKCkge1xuICAgICAgY29uc3Qgc2hpcEluZGV4ID0gX2dyaWRbY29vcmRpbmF0ZV0uc2hpcEluZGV4O1xuICAgICAgY29uc3Qgc2hpcFRvQXR0YWNrID0gX2ZsZWV0W3NoaXBJbmRleF07XG4gICAgICBzaGlwVG9BdHRhY2suaGl0KCk7XG5cbiAgICAgIGlmIChzaGlwVG9BdHRhY2suaXNTdW5rKCkpIHB1Ymxpc2hTaGlwU2lua2luZygpO1xuXG4gICAgICBmdW5jdGlvbiBwdWJsaXNoU2hpcFNpbmtpbmcoKSB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2hpcEhhc1N1bmtcIiwge1xuICAgICAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZTogc2hpcFRvQXR0YWNrLmdldFN0YXJ0aW5nQ29vcmRpbmF0ZSgpLFxuICAgICAgICAgIHNoaXBJbmRleDogc2hpcEluZGV4LFxuICAgICAgICAgIHBsYXllck5hbWU6IF9wbGF5ZXJOYW1lLFxuICAgICAgICAgIGF4aXM6IHNoaXBUb0F0dGFjay5nZXRBeGlzKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0ZsZWV0U3VuayA9ICgpID0+IF9mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKCFhcmVBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICBjb25zdCBbbGVnYWxDb29yZGluYXRlLCBsZWdhbEF4aXNdID0gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKTtcbiAgICAgIHBsYWNlU2hpcChsZWdhbENvb3JkaW5hdGUsIGxlZ2FsQXhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKSB7XG4gICAgICBsZXQgW2Nvb3JkaW5hdGUsIGF4aXNdID0gZ2V0UmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICB3aGlsZSAoaXNJbGxlZ2FsU2hpcFBsYWNlbWVudChjb29yZGluYXRlLCBheGlzKSkge1xuICAgICAgICBbY29vcmRpbmF0ZSwgYXhpc10gPSBnZXRSYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbY29vcmRpbmF0ZSwgYXhpc107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgYXhlcyA9IFtcInhcIiwgXCJ5XCJdO1xuICAgICAgY29uc3QgcmFuZG9tQXhpcyA9IGF4ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhlcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpO1xuICAgICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21BeGlzXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxhY2VtZW50QXhpcyA9ICgpID0+IF9wbGFjZW1lbnRBeGlzO1xuXG4gIGNvbnN0IHRvZ2dsZVBsYWNlbWVudEF4aXMgPSAoKSA9PlxuICAgIChfcGxhY2VtZW50QXhpcyA9IF9wbGFjZW1lbnRBeGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCIpO1xuXG4gIGNvbnN0IHJlc2V0UGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIF9wbGFjZW1lbnRJbmRleCA9IDA7XG4gICAgX2dyaWQuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc2hpcEluZGV4ID0gXCJub25lXCIpKTtcbiAgICBfZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZXNldENvb3JkaW5hdGVzKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlbWVudEluZGV4ID0gKCkgPT4gX3BsYWNlbWVudEluZGV4O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q29vcmRpbmF0ZVN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCxcbiAgICBhcmVBbGxTaGlwc1BsYWNlZCxcbiAgICBwbGFjZUFsbFNoaXBzQXRSYW5kb21Db29yZGluYXRlcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRmxlZXRTdW5rLFxuICAgIGdldFBsYWNlbWVudEF4aXMsXG4gICAgZ2V0UGxhY2VtZW50SW5kZXgsXG4gICAgdG9nZ2xlUGxhY2VtZW50QXhpcyxcbiAgICByZXNldFBsYWNlbWVudCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRHcmlkKHNpemUpIHtcbiAgbGV0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICBncmlkLnB1c2gobmV3R3JpZEl0ZW0oKSk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG5cbiAgZnVuY3Rpb24gbmV3R3JpZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHsgaXNQbGF5ZWQ6IGZhbHNlLCBzaGlwSW5kZXg6IFwibm9uZVwiIH07XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLnNjc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuKGlzV2lubmVyKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgZ2FtZU92ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lT3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICBjb250ZW50LmFwcGVuZChnYW1lT3ZlckNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX3RpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyXCI7XG4gIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCB3aW5uZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2lubmVyTXNnLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX3dpbm5lci1tc2dcIik7XG4gIHdpbm5lck1zZy50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSAke2lzV2lubmVyID8gXCJ3b24uXCIgOiBcImxvc3QuXCJ9YDtcbiAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyTXNnKTtcblxuICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX2J1dHRvbi1maWVsZFwiKTtcbiAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRmllbGQpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiUGxheSBBZ2Fpbj9cIik7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLnBsYXlBZ2FpbkNsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKTtcblxuICBjb25zdCBxdWl0QnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJRdWl0XCIpO1xuICBxdWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2UucXVpdENsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocXVpdEJ1dHRvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5kZXhUb1NoaXBOYW1lKGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIFwiY2FycmllclwiO1xuICBpZiAoaW5kZXggPT09IDEpIHJldHVybiBcImJhdHRsZXNoaXBcIjtcbiAgaWYgKGluZGV4ID09PSAyKSByZXR1cm4gXCJjcnVpc2VyXCI7XG4gIGlmIChpbmRleCA9PT0gMyB8fCBpbmRleCA9PT0gNCkgcmV0dXJuIFwiZGVzdHJveWVyXCI7XG4gIGlmIChpbmRleCA9PT0gNSB8fCBpbmRleCA9PT0gNikgcmV0dXJuIFwic3VibWFyaW5lXCI7XG59XG4iLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZS1ib2FyZFwiO1xuXG5leHBvcnQgY29uc3QgSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZW5lbXlHYW1lQm9hcmQgPSBHYW1lQm9hcmQoXCJFbmVteVwiKTtcbiAgZW5lbXlHYW1lQm9hcmQucGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKFwiUGxheWVyXCIpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZUNsaWNrKCkge1xuICAgIFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBSZW5kZXIuc2hpcFBsYWNlbWVudFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcFNoaXBDbGljayhlKSB7XG4gICAgcGxheWVyR2FtZUJvYXJkLnRvZ2dsZVBsYWNlbWVudEF4aXMoKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcC1idXR0b24tLWZsaXBwZWRcIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENsaWNrKGRpc3BsYXlHcmlkKSB7XG4gICAgZGlzcGxheUdyaWQucmVzZXRTaGlwcygpO1xuICAgIHBsYXllckdhbWVCb2FyZC5yZXNldFBsYWNlbWVudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVDbGljaygpIHtcbiAgICBpZiAoIXBsYXllckdhbWVCb2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSByZXR1cm47XG4gICAgUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIFJlbmRlci5iYXR0bGVTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlbWVudEdyaWRDbGljayh7IHRhcmdldCwgZGlzcGxheUdyaWQgfSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBfZ2V0SW5kZXhPZih0YXJnZXQpO1xuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYXJlQWxsU2hpcHNQbGFjZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGF4aXMgPSBwbGF5ZXJHYW1lQm9hcmQuZ2V0UGxhY2VtZW50QXhpcygpO1xuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuaXNJbGxlZ2FsU2hpcFBsYWNlbWVudChjb29yZGluYXRlLCBheGlzKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IHBsYXllckdhbWVCb2FyZC5nZXRQbGFjZW1lbnRJbmRleCgpO1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSk7XG4gICAgZGlzcGxheUdyaWQuYWRkU2hpcFRvR3JpZCh7IGNvb3JkaW5hdGUsIGF4aXMsIHNoaXBJbmRleCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZW15R3JpZENsaWNrKHsgdGFyZ2V0LCBlbmVteURpc3BsYXlHcmlkLCBwbGF5ZXJEaXNwbGF5R3JpZCB9KSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJlbmVteUdyaWRDbGlja1wiLCBfZ2V0SW5kZXhPZih0YXJnZXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlBZ2FpbkNsaWNrKCkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwicGxheUFnYWluQ2xpY2tcIik7XG4gICAgUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIFJlbmRlci50aXRsZVNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpdENsaWNrKCkge1xuICAgIHdpbmRvdy5vcGVuKFwiXCIsIFwiX3NlbGZcIikuZG9jdW1lbnQud3JpdGUoXCJcIik7XG4gICAgd2luZG93Lm9wZW4oXCJcIiwgXCJfc2VsZlwiKS5jbG9zZSgpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vcGFsbWVydXNhZi9iYXR0bGUtc2hpcFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldEluZGV4T2YocFRhcmdldCkge1xuICAgIGlmICghcFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncmlkLWNvbnRhaW5lcl9fZWxlbWVudFwiKSlcbiAgICAgIHBUYXJnZXQgPSBwVGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKHBUYXJnZXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydEdhbWVDbGljayxcbiAgICBmbGlwU2hpcENsaWNrLFxuICAgIHJlc2V0Q2xpY2ssXG4gICAgY29udGludWVDbGljayxcbiAgICBwbGFjZW1lbnRHcmlkQ2xpY2ssXG4gICAgZW5lbXlHcmlkQ2xpY2ssXG4gICAgcGxheUFnYWluQ2xpY2ssXG4gICAgcXVpdENsaWNrLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dyaWRBcmVhRm9yKHBsYXllck5hbWUpIHtcbiAgY29uc3QgZ3JpZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkQXJlYS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1hcmVhXCIsIGBncmlkLWFyZWEtLSR7cGxheWVyTmFtZX1gKTtcblxuICBjb25zdCBncmlkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGdyaWRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1hcmVhX19sYWJlbFwiKTtcbiAgZ3JpZExhYmVsLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0gR3JpZGA7XG4gIGdyaWRBcmVhLmFwcGVuZENoaWxkKGdyaWRMYWJlbCk7XG5cbiAgY29uc3QgZ3JpZCA9IENvbXBvbmVudHMubmV3R3JpZCgpO1xuICBpZiAocGxheWVyTmFtZSA9PT0gXCJFbmVteVwiKSBhZGRFbmVteUF0dHJpYnV0ZXMoKTtcbiAgZ3JpZC5hZGRQYXJlbnRDbGFzcyhcImdyaWQtYXJlYV9fZ3JpZFwiKTtcbiAgZ3JpZEFyZWEuYXBwZW5kQ2hpbGQoZ3JpZC5yZW5kZXIoKSk7XG5cbiAgZnVuY3Rpb24gYWRkRW5lbXlBdHRyaWJ1dGVzKCkge1xuICAgIGdyaWQuc2V0Q2xpY2thYmxlKCk7XG4gICAgZ3JpZC5hZGRFdmVudFRvRWxlbWVudHMoXCJjbGlja1wiLCBJbnRlcmZhY2UuZW5lbXlHcmlkQ2xpY2spO1xuICAgIGdyaWQuc2V0Q29vcmRpbmF0ZUhvdmVyTXNnKFwiQXR0YWNrIGNvb3JkaW5hdGVcIik7XG4gIH1cblxuICByZXR1cm4gZ3JpZEFyZWE7XG59XG4iLCJpbXBvcnQgeyBpbmRleFRvU2hpcE5hbWUgfSBmcm9tIFwiLi9pbmRleC10by1zaGlwLW5hbWVcIjtcbmV4cG9ydCBjb25zdCBuZXdHcmlkID0gKCkgPT4ge1xuICBjb25zdCBHUklEX1NJWkUgPSAxMDA7XG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBpbml0R3JpZFdpdGhFbGVtZW50cygpO1xuXG4gIGZ1bmN0aW9uIGluaXRHcmlkV2l0aEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR1JJRF9TSVpFOyBpKyspIHtcbiAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lcl9fZWxlbWVudFwiKTtcbiAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IF9tb2RFbGVtZW50cyA9IChtb2QpID0+IFsuLi5ncmlkQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKG1vZCk7XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4gZ3JpZENvbnRhaW5lcjtcblxuICBjb25zdCBzZXRDbGlja2FibGUgPSAoKSA9PlxuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+IHtcbiAgICAgIGdyaWRFbGVtZW50LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbGlja2FibGVcIik7XG4gICAgfSk7XG5cbiAgY29uc3Qgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnID0gKG1lc3NhZ2UpID0+IHtcbiAgICBfbW9kRWxlbWVudHMoXG4gICAgICAoZ3JpZEVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICAoZ3JpZEVsZW1lbnQudGl0bGUgPSBgJHttZXNzYWdlfSAke3hZQ29vcmRpbmF0ZShpbmRleCl9YClcbiAgICApO1xuXG4gICAgZnVuY3Rpb24geFlDb29yZGluYXRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gYCgkeyhpbmRleCAlIDEwKSArIDF9LCAke01hdGguZmxvb3IoaW5kZXggLyAxMCArIDEpfSlgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQYXJlbnRDbGFzcyA9IChjbGFzc05hbWUpID0+IGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIGNvbnN0IGFkZENoaWxkQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT4gZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBhZGRFdmVudFRvRWxlbWVudHMgPSAocEV2ZW50VHlwZSwgcEV2ZW50KSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT5cbiAgICAgIGdyaWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocEV2ZW50VHlwZSwgcEV2ZW50KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcFRvR3JpZCA9IChwbGFjZW1lbnREYXRhKSA9PiB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlLCBzaGlwSW5kZXgsIGF4aXMgfSA9IHBsYWNlbWVudERhdGE7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJfX3NoaXBcIiwgYHNoaXAtaW5kZXgtJHtzaGlwSW5kZXh9YCk7XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSBzaGlwLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lcl9fc2hpcC0tcm90YXRlZFwiKTtcbiAgICBzaGlwLnNyYyA9IGAvc3JjL2ltZ3MvJHtpbmRleFRvU2hpcE5hbWUoc2hpcEluZGV4KX0ucG5nYDtcbiAgICBncmlkQ29udGFpbmVyLmNoaWxkcmVuW2Nvb3JkaW5hdGVdLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIGdyaWRDb250YWluZXIuY2hpbGRyZW5bY29vcmRpbmF0ZV0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfTtcblxuICBjb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+IChncmlkRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCIpKTtcbiAgICBzZXRDbGlja2FibGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBzZXRDbGlja2FibGUsXG4gICAgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnLFxuICAgIGFkZFBhcmVudENsYXNzLFxuICAgIGFkZENoaWxkQ2xhc3MsXG4gICAgYWRkRXZlbnRUb0VsZW1lbnRzLFxuICAgIGFkZFNoaXBUb0dyaWQsXG4gICAgcmVzZXRTaGlwcyxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBpbmRleFRvU2hpcE5hbWUgfSBmcm9tIFwiLi9pbmRleC10by1zaGlwLW5hbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1NoaXBMaXN0Rm9yKHBsYXllck5hbWUpIHtcbiAgY29uc3Qgc2hpcEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwQXJlYS5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhXCIsIGBzaGlwLWFyZWEtLSR7cGxheWVyTmFtZX1gKTtcblxuICBjb25zdCBzaGlwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHNoaXBMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhX19sYWJlbFwiKTtcbiAgc2hpcExhYmVsLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0gU2hpcHNgO1xuICBzaGlwQXJlYS5hcHBlbmRDaGlsZChzaGlwTGFiZWwpO1xuXG4gIGNvbnN0IHNoaXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBzaGlwTGlzdC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhX19saXN0XCIpO1xuICBzaGlwQXJlYS5hcHBlbmRDaGlsZChzaGlwTGlzdCk7XG5cbiAgYWRkU2hpcHNUbyhzaGlwTGlzdCk7XG5cbiAgcmV0dXJuIHNoaXBBcmVhO1xuICBmdW5jdGlvbiBhZGRTaGlwc1RvKHNoaXBMaXN0KSB7XG4gICAgY29uc3QgTlVNX1NISVBTX0lOX0ZMRUVUID0gNztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TSElQU19JTl9GTEVFVDsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHNoaXBJdGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwic2hpcC1hcmVhX19pdGVtXCIsXG4gICAgICAgIGAke3BsYXllck5hbWV9LXNoaXAtbGlzdC1pdGVtLSR7aX1gXG4gICAgICApO1xuICAgICAgc2hpcExpc3QuYXBwZW5kQ2hpbGQoc2hpcEl0ZW0pO1xuXG4gICAgICBjb25zdCBzaGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHNoaXBJbWcuc3JjID0gYC9zcmMvaW1ncy8ke2luZGV4VG9TaGlwTmFtZShpKX0ucG5nYDtcbiAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYV9faW1nXCIpO1xuICAgICAgc2hpcEl0ZW0uYXBwZW5kQ2hpbGQoc2hpcEltZyk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgcHVic3ViID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrRnVuY1RvU3ViKSB7XG4gICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2tGdW5jVG9TdWIpO1xuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9VblN1Yikge1xuICAgICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGNhbGxiYWNrRnVuYyA9PiBjYWxsYmFja0Z1bmMgIT09IGNhbGxiYWNrRnVuY1RvVW5TdWIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2tGdW5jID0+IHtcbiAgICAgICAgICBjYWxsYmFja0Z1bmMoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTsiLCJpbXBvcnQgeyBiYXR0bGVTY3JlZW4gfSBmcm9tIFwiLi9iYXR0bGUtc2NyZWVuXCI7XG5pbXBvcnQgeyB0aXRsZVNjcmVlbiB9IGZyb20gXCIuL3RpdGxlLXNjcmVlblwiO1xuaW1wb3J0IHsgc2hpcFBsYWNlbWVudFNjcmVlbiB9IGZyb20gXCIuL3NoaXAtcGxhY2VtZW50LXNjcmVlblwiO1xuaW1wb3J0IHsgZ2FtZU92ZXJTY3JlZW4gfSBmcm9tIFwiLi9nYW1lLW92ZXItc2NyZWVuXCI7XG5cbmV4cG9ydCBjb25zdCBSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PlxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikudGV4dENvbnRlbnQgPSBcIlwiKTtcblxuICBjb25zdCBhdHRhY2sgPSAocGxheWVyTmFtZSwgY29vcmRpbmF0ZSwgaXNIaXQpID0+IHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuZ3JpZC1hcmVhLS0ke3BsYXllck5hbWV9ID4gLmdyaWQtYXJlYV9fZ3JpZGBcbiAgICApO1xuICAgIHBsYXlCb21iQW5pbWF0aW9uKHRoZW5NYXJrSGl0T3JNaXNzKTtcblxuICAgIGZ1bmN0aW9uIHBsYXlCb21iQW5pbWF0aW9uKGNhbGxCYWNrKSB7XG4gICAgICBjb25zdCBib21iRHJvcEFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib21iRHJvcEFuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrLWdyaWRcIiwgXCJhdHRhY2stZ3JpZF9fYm9tYlwiKTtcbiAgICAgIGJvbWJEcm9wQW5pbWF0aW9uLnRleHRDb250ZW50ID0gXCLwn5KjXCI7XG4gICAgICBib21iRHJvcEFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGNhbGxCYWNrKTtcbiAgICAgIGdyaWRDb250YWluZXIuY2hpbGRyZW5bY29vcmRpbmF0ZV0uYXBwZW5kQ2hpbGQoYm9tYkRyb3BBbmltYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW5NYXJrSGl0T3JNaXNzKCkge1xuICAgICAgZ3JpZENvbnRhaW5lci5jaGlsZHJlbltjb29yZGluYXRlXS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBncmlkQ29udGFpbmVyLmNoaWxkcmVuW2Nvb3JkaW5hdGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gICAgICBjb25zdCBoaXRPck1pc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGl0T3JNaXNzLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2stZ3JpZFwiLCBcImF0dGFjay1ncmlkXCIpO1xuICAgICAgaGl0T3JNaXNzLnRleHRDb250ZW50ID0gaXNIaXQgPyBcIvCfkqVcIiA6IFwi8J+SplwiO1xuICAgICAgZ3JpZENvbnRhaW5lci5jaGlsZHJlbltjb29yZGluYXRlXS5hcHBlbmRDaGlsZChoaXRPck1pc3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZVNjcmVlbixcbiAgICB0aXRsZVNjcmVlbixcbiAgICBzaGlwUGxhY2VtZW50U2NyZWVuLFxuICAgIGdhbWVPdmVyU2NyZWVuLFxuICAgIGNsZWFyQ29udGVudCxcbiAgICBhdHRhY2ssXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9tb2R1bGVzL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IFNoaXBGbGVldCA9ICgpID0+IFtcbiAgU2hpcCg1KSxcbiAgU2hpcCg0KSxcbiAgU2hpcCgzKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgxKSxcbiAgU2hpcCgxKSxcbl07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvc2hpcC1wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5leHBvcnQgY29uc3Qgc2hpcFBsYWNlbWVudFNjcmVlbj0oKT0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBzaGlwUGxhY2VtZW50U2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcFBsYWNlbWVudFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZW1lbnQtc2NyZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNoaXBQbGFjZW1lbnRTY3JlZW4pO1xuXG4gIGNvbnN0IHdlbGNvbWVNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVNc2cuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtbXNnXCIpO1xuICB3ZWxjb21lTXNnLnRleHRDb250ZW50ID0gXCJXZWxjb21lXCI7XG4gIHNoaXBQbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQod2VsY29tZU1zZyk7XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25zXCIpO1xuICBkaXJlY3Rpb25zLnRleHRDb250ZW50ID1cbiAgICBcIlBsYWNlIHlvdXIgc2hpcHMgYnkgY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgZ3JpZC4gV2hlbiB5b3UgYXJlIHJlYWR5IHByZXNzIGNvbnRpbnVlLlwiO1xuICBzaGlwUGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKGRpcmVjdGlvbnMpO1xuXG4gIGNvbnN0IGJ1dHRvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRmllbGQuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1maWVsZFwiKTtcbiAgc2hpcFBsYWNlbWVudFNjcmVlbi5hcHBlbmRDaGlsZChidXR0b25GaWVsZCk7XG5cbiAgY29uc3QgZmxpcFNoaXBCdXR0b24gPSBDb21wb25lbnRzLm5ld0J1dHRvbihcIkZsaXAgU2hpcFwiKTtcbiAgZmxpcFNoaXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImZsaXAtYnV0dG9uXCIpO1xuICBmbGlwU2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLmZsaXBTaGlwQ2xpY2spO1xuICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChmbGlwU2hpcEJ1dHRvbik7XG5cbiAgY29uc3QgcmVzZXQgPSBDb21wb25lbnRzLm5ld0J1dHRvbihcIlJlc2V0XCIpO1xuICByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gSW50ZXJmYWNlLnJlc2V0Q2xpY2socGxhY2VtZW50R3JpZCkpO1xuICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChyZXNldCk7XG5cbiAgY29uc3QgcGxhY2VtZW50R3JpZCA9IENvbXBvbmVudHMubmV3R3JpZCgpO1xuICBwbGFjZW1lbnRHcmlkLnNldENsaWNrYWJsZSgpO1xuICBwbGFjZW1lbnRHcmlkLmFkZFBhcmVudENsYXNzKFwicGxhY2VtZW50LWdyaWRcIik7XG4gIHBsYWNlbWVudEdyaWQuc2V0Q29vcmRpbmF0ZUhvdmVyTXNnKFwiUGxhY2UgU2hpcCBhdFwiKTtcbiAgcGxhY2VtZW50R3JpZC5hZGRFdmVudFRvRWxlbWVudHMoXCJjbGlja1wiLCAoZSkgPT5cbiAgICBJbnRlcmZhY2UucGxhY2VtZW50R3JpZENsaWNrKHtcbiAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgICBkaXNwbGF5R3JpZDogcGxhY2VtZW50R3JpZCxcbiAgICB9KVxuICApO1xuICBzaGlwUGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKHBsYWNlbWVudEdyaWQucmVuZGVyKCkpO1xuXG4gIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJDb250aW51ZVwiKTtcbiAgY29udGludWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRpbnVlXCIpO1xuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLmNvbnRpbnVlQ2xpY2spO1xuICBzaGlwUGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICBsZXQgaGl0UG9pbnRzID0gbGVuZ3RoO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IF9heGlzID0gXCJcIjtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKCkgPT4gY29vcmRpbmF0ZXM7XG4gIGNvbnN0IGdldFN0YXJ0aW5nQ29vcmRpbmF0ZSA9ICgpID0+IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBnZXRBeGlzID0gKCkgPT4gX2F4aXM7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdFBvaW50cy0tO1xuICAgIGlmIChoaXRQb2ludHMgPT09IDApIHN1bmsgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldENvb3JkaW5hdGVzID0gKHBTdGFydGluZ1Bvc2l0aW9uLCBwQXhpcykgPT4ge1xuICAgIF9heGlzID0gcEF4aXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBBeGlzID09PSBcInlcIikgY29vcmRpbmF0ZXMucHVzaChwU3RhcnRpbmdQb3NpdGlvbiArIGkgKiAxMCk7XG4gICAgICBlbHNlIGNvb3JkaW5hdGVzLnB1c2gocFN0YXJ0aW5nUG9zaXRpb24gKyBpKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCByZXNldENvb3JkaW5hdGVzID0gKCkgPT4gKGNvb3JkaW5hdGVzID0gW10pO1xuXG4gIC8vIGNoZWNrIHdoYXQgY29vcmRpbmF0ZXMgd291bGQgYmUgd2l0aG91dCBzZXR0aW5nIHRoZW1cbiAgY29uc3QgY2hlY2tDb29yZGluYXRlcyA9IChwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpID0+IHtcbiAgICBzZXRDb29yZGluYXRlcyhwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpO1xuICAgIGNvbnN0IGh5cG9Db29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKCk7XG4gICAgcmVzZXRDb29yZGluYXRlcygpO1xuICAgIHJldHVybiBoeXBvQ29vcmRpbmF0ZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaXNTdW5rLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBnZXRTdGFydGluZ0Nvb3JkaW5hdGUsXG4gICAgZ2V0QXhpcyxcbiAgICBoaXQsXG4gICAgc2V0Q29vcmRpbmF0ZXMsXG4gICAgY2hlY2tDb29yZGluYXRlcyxcbiAgICByZXNldENvb3JkaW5hdGVzLFxuICB9O1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzXCI7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCB0aXRsZVNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCB0aXRsZVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVTY3JlZW4pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG4gIHRpdGxlU2NyZWVuLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwbGF5QnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJTdGFydCBHYW1lXCIpO1xuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2Uuc3RhcnRHYW1lQ2xpY2spO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWJ1dHRvblwiKTtcblxuICB0aXRsZVNjcmVlbi5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGVzL2Zvb3Rlci5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5zY3NzXCI7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lLWJvYXJkXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xuXG5SZW5kZXIuc2hpcFBsYWNlbWVudFNjcmVlbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9