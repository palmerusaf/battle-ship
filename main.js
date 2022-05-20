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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/placement-screen.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/placement-screen.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.placement-screen {\n  display: grid;\n  height: 100%;\n  font-family: \"Mil Stencil\";\n  align-items: center;\n  grid-template-rows: repeat(3, 1fr) 5.5fr 1fr;\n  place-items: center;\n}\n\n.welcome-msg {\n  font-size: 2rem;\n  color: #969696;\n}\n\n.directions {\n  color: #cacaca;\n  margin: 0 2rem;\n  text-align: center;\n}\n\n.button-field {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 1rem;\n}\n.button-field .flip-button {\n  transition: 500ms;\n}\n.button-field .flip-button--flipped {\n  transition: 500ms;\n  transform: rotate(90deg);\n}\n\n.placement-grid {\n  width: 95vmin;\n  height: 95vmin;\n  max-width: 500px;\n  max-height: 500px;\n}\n\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .placement-screen {\n    grid-template-rows: 0.7fr auto auto;\n    grid-template-columns: 1fr 1.5fr 1fr;\n  }\n\n  .welcome-msg {\n    grid-column: 1/-1;\n  }\n\n  .directions {\n    grid-row: 2/-1;\n  }\n\n  .placement-grid {\n    grid-row: 2/-1;\n    width: 65vmin;\n    height: 65vmin;\n    align-self: start;\n  }\n\n  .continue {\n    align-self: start;\n  }\n}\n@media screen and (min-width: 500px) and (min-height: 376px) {\n  .welcome-msg {\n    font-size: 4rem;\n  }\n\n  .directions {\n    font-size: 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/placement-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,aAAA;EACA,YAAA;EACA,0BAAA;EACA,mBAAA;EACA,4CAAA;EACA,mBAAA;AAOF;;AALA;EACE,eAAA;EACA,cDCmB;ACOrB;;AANA;EACE,cDHgB;ECIhB,cAAA;EACA,kBAAA;AASF;;AAPA;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,SAAA;AAUF;AATE;EACE,iBAAA;AAWJ;AAVI;EACE,iBAAA;EACA,wBAAA;AAYN;;AARA;EACE,aAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;AAWF;;AATA;EACE;IACE,mCAAA;IACA,oCAAA;EAYF;;EAVA;IACE,iBAAA;EAaF;;EAXA;IACE,cAAA;EAcF;;EAZA;IACE,cAAA;IACA,aAAA;IACA,cAAA;IACA,iBAAA;EAeF;;EAbA;IACE,iBAAA;EAgBF;AACF;AAdA;EACE;IACE,eAAA;EAgBF;;EAdA;IACE,iBAAA;EAiBF;AACF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.placement-screen {\n  display: grid;\n  height: 100%;\n  font-family: \"Mil Stencil\";\n  align-items: center;\n  grid-template-rows: repeat(3, 1fr) 5.5fr 1fr;\n  place-items: center;\n}\n.welcome-msg {\n  font-size: 2rem;\n  color: $navy-chain-outline;\n}\n.directions {\n  color: $navy-gray-chain;\n  margin: 0 2rem;\n  text-align: center;\n}\n.button-field {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 1rem;\n  .flip-button {\n    transition: 500ms;\n    &--flipped {\n      transition: 500ms;\n      transform: rotate(90deg);\n    }\n  }\n}\n.placement-grid {\n  width: 95vmin;\n  height: 95vmin;\n  max-width: 500px;\n  max-height: 500px;\n}\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .placement-screen {\n    grid-template-rows: 0.7fr auto auto;\n    grid-template-columns: 1fr 1.5fr 1fr;\n  }\n  .welcome-msg {\n    grid-column: 1/-1;\n  }\n  .directions {\n    grid-row: 2/-1;\n  }\n  .placement-grid {\n    grid-row: 2/-1;\n    width: 65vmin;\n    height: 65vmin;\n    align-self: start;\n  }\n  .continue {\n    align-self: start;\n  }\n}\n@media screen and (min-width: 500px) and (min-height: 376px) {\n  .welcome-msg {\n    font-size: 4rem;\n  }\n  .directions {\n    font-size: 1.5rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/placement-screen.scss":
/*!******************************************!*\
  !*** ./src/styles/placement-screen.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./placement-screen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/placement-screen.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_placement_screen_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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






function battleScreen(pFleetLocationInfo) {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_2__.newGridAreaFor)("Enemy"));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_3__.newShipListFor)("Enemy"));

  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_2__.newGridAreaFor)("Player", pFleetLocationInfo));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_3__.newShipListFor)("Player"));

  function eraseShipFromList(data) {
    const { playerName, shipIndex } = data;
    const ship = document.querySelector(
      `.${playerName}-ship-list-item-${shipIndex}`
    );
    ship.classList.add("sunk");
  }
  _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("shipHasSunk", eraseShipFromList);
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

  const getFleetLocationInfo = () =>
    _fleet.map((ship, index) => {
      return {
        coordinate: ship.getStartingCoordinate(),
        shipIndex: index,
        axis: ship.getAxis(),
      };
    });

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
    getFleetLocationInfo,
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
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.battleScreen(playerGameBoard.getFleetLocationInfo());
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



function newGridAreaFor(playerName, pFleetLocationInfo) {
  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area", `grid-area--${playerName}`);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = `${playerName} Grid`;
  gridArea.appendChild(gridLabel);

  const grid = _components__WEBPACK_IMPORTED_MODULE_0__.Components.newGrid();
  if (playerName === "Enemy") addEnemyAttributes();
  else {
    renderShips();
  }
  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

  function renderShips() {
    pFleetLocationInfo.forEach((shipLocation) =>
      grid.addShipToGrid(shipLocation)
    );
  }

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

  const addShipToGrid = ({ coordinate, shipIndex, axis }) => {
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

  const receiveAttack = ({ coordinate, isHit }) => {
    const gridElement = gridContainer.children[coordinate];
    playBombAnimation(thenMarkHitOrMiss);

    function playBombAnimation(callBack) {
      const bombDrop = document.createElement("div");
      bombDrop.classList.add("attack-grid", "attack-grid__bomb");
      bombDrop.textContent = "💣";
      bombDrop.addEventListener("animationend", callBack);
      gridElement.appendChild(bombDrop);
    }

    function thenMarkHitOrMiss() {
      gridElement.textContent = "";
      gridElement.classList.remove("clickable");
      const mark = document.createElement("div");
      mark.classList.add("attack-grid");
      mark.textContent = isHit ? "💥" : "💦";
      gridElement.appendChild(mark);
    }
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
    receiveAttack,
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

/***/ "./src/modules/placement-screen.js":
/*!*****************************************!*\
  !*** ./src/modules/placement-screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipPlacementScreen": () => (/* binding */ shipPlacementScreen)
/* harmony export */ });
/* harmony import */ var _src_styles_placement_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/styles/placement-screen.scss */ "./src/styles/placement-screen.scss");
/* harmony import */ var _src_modules_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/components */ "./src/modules/components.js");
/* harmony import */ var _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/interface */ "./src/modules/interface.js");
/* harmony import */ var _src_modules_pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/modules/pubsub */ "./src/modules/pubsub.js");





const shipPlacementScreen = () => {
  const content = document.querySelector(".content");

  const shipPlacementScreen = document.createElement("div");
  shipPlacementScreen.classList.add("placement-screen");
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

  const flipShipButton = _src_modules_components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Flip Ship");
  flipShipButton.classList.add("flip-button");
  flipShipButton.addEventListener("click", _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__.Interface.flipShipClick);
  buttonField.appendChild(flipShipButton);

  const reset = _src_modules_components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Reset");
  reset.addEventListener("click", () => _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__.Interface.resetClick(placementGrid));
  buttonField.appendChild(reset);

  const placementGrid = _src_modules_components__WEBPACK_IMPORTED_MODULE_1__.Components.newGrid();
  placementGrid.setClickable();
  placementGrid.addParentClass("placement-grid");
  placementGrid.setCoordinateHoverMsg("Place Ship at");
  placementGrid.addEventToElements("click", (e) =>
    _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__.Interface.placementGridClick({
      target: e.target,
      displayGrid: placementGrid,
    })
  );
  shipPlacementScreen.appendChild(placementGrid.render());

  const continueButton = _src_modules_components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Continue");
  continueButton.classList.add("continue");
  continueButton.addEventListener("click", _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__.Interface.continueClick);
  shipPlacementScreen.appendChild(continueButton);
};


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
/* harmony import */ var _placement_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placement-screen */ "./src/modules/placement-screen.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-over-screen */ "./src/modules/game-over-screen.js");





const Render = (() => {
  const clearContent = () =>
    (document.querySelector(".content").textContent = "");

  return {
    battleScreen: _battle_screen__WEBPACK_IMPORTED_MODULE_0__.battleScreen,
    titleScreen: _title_screen__WEBPACK_IMPORTED_MODULE_1__.titleScreen,
    shipPlacementScreen: _placement_screen__WEBPACK_IMPORTED_MODULE_2__.shipPlacementScreen,
    gameOverScreen: _game_over_screen__WEBPACK_IMPORTED_MODULE_3__.gameOverScreen,
    clearContent,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjhCO0FBQ0Q7QUFDYTtBQUNPO0FBQ1A7O0FBRTFDLHVFQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9iYXR0bGUtc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvcGxhY2VtZW50LXNjcmVlbi5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy90aXRsZS1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzcz9hY2Q0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzLnNjc3M/ZDgwYiIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3M/ZDVhZSIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5zY3NzPzVmMGEiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3BsYWNlbWVudC1zY3JlZW4uc2Nzcz9kOTc3Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzPzZiNzMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2JhdHRsZS1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUtb3Zlci1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9pbmRleC10by1zaGlwLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9uZXctZ3JpZC1hcmVhLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LWdyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9uZXctc2hpcC1saXN0LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvcGxhY2VtZW50LXNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAtZmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvdGl0bGUtc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uYmF0dGxlLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ncmlkLWFyZWFfX2xhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgY29sb3I6ICNjYWNhY2E7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdyaWQtYXJlYV9fZ3JpZCB7XFxuICB3aWR0aDogNzV2bWluO1xcbiAgaGVpZ2h0OiA3NXZtaW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcblxcbiAgLmdyaWQtYXJlYSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19sYWJlbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDYuNXJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5iYXR0bGUtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5ncmlkLWFyZWFfX2dyaWQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19ncmlkIC5jbGlja2FibGUge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIH1cXG5cXG4gIC5zaGlwLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaGlwLWFyZWEtLVBsYXllciB7XFxuICAgIGdyaWQtYXJlYTogMjtcXG4gIH1cXG4gIC5zaGlwLWFyZWFfX2xhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICAgIGNvbG9yOiAjOTY5Njk2O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgfVxcbiAgLnNoaXAtYXJlYV9fbGlzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzk2OTY5NjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIC5zaGlwLWFyZWFfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MXB4O1xcbiAgfVxcbiAgLnNoaXAtYXJlYSAuc3VuayB7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBU0Y7QUFSRTtFQUNFLDBCQUFBO0VBQ0EsY0RQYztFQ1FkLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkU7RUFFRSxhQURZO0VBRVosY0FGWTtBQVdoQjs7QUFOQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSx1QkFBQTtFQVNGOztFQVBBO0lBQ0UsbUJBQUE7RUFVRjtFQVRFO0lBQ0UsU0FBQTtJQUNBLGFBQUE7RUFXSjs7RUFSQTtJQUNFLGFBQUE7RUFXRjtBQUNGO0FBUkE7RUFDRTtJQUNFLGtDQUFBO0lBQ0EscUNBQUE7RUFVRjs7RUFQRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBVUo7RUFUSTtJQUNFLGlCQUFBO0VBV047O0VBUEE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBVUY7RUFURTtJQUNFLFlBQUE7RUFXSjtFQVRFO0lBQ0UsMEJBQUE7SUFDQSxjRDFEZTtJQzJEZixpQkFBQTtJQUNBLHFCQUFBO0VBV0o7RUFURTtJQUNFLHlCRGhFWTtJQ2lFWixhQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBV0o7RUFURTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBV0o7RUFURTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtFQVdKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5iYXR0bGUtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNoaXAtYXJlYSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ3JpZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICZfX2xhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICAgIGNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAmX19ncmlkIHtcXG4gICAgJHZtaW4tc2l6ZTogNzV2bWluO1xcbiAgICB3aWR0aDogJHZtaW4tc2l6ZTtcXG4gICAgaGVpZ2h0OiAkdm1pbi1zaXplO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLmJhdHRsZS1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIH1cXG4gIC5ncmlkLWFyZWEge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAmX19sYWJlbCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHdpZHRoOiA2LjVyZW07XFxuICAgIH1cXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4vL2Rlc2t0b3Agc3R5bGluZ1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLmJhdHRsZS1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbiAgLmdyaWQtYXJlYSB7XFxuICAgICZfX2dyaWQge1xcbiAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICAgIC5jbGlja2FibGUge1xcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAuc2hpcC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICYtLVBsYXllciB7XFxuICAgICAgZ3JpZC1hcmVhOiAyO1xcbiAgICB9XFxuICAgICZfX2xhYmVsIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgICBjb2xvcjogJG5hdnktY2hhaW4tb3V0bGluZTtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICAgIH1cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgJl9faW1nIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiA0MXB4O1xcbiAgICB9XFxuICAgIC5zdW5rIHtcXG4gICAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogIzk2OTY5NiBzb2xpZCAycHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmdyaWQtY29udGFpbmVyX19lbGVtZW50IHtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM5Njk2OTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX3NoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX3NoaXAtLXJvdGF0ZWQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuXFxuLnNoaXAtaW5kZXgtMCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uc2hpcC1pbmRleC0xIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbi5zaGlwLWluZGV4LTIge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLnNoaXAtaW5kZXgtMywgLnNoaXAtaW5kZXgtNCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4uc2hpcC1pbmRleC01LCAuc2hpcC1pbmRleC02IHtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcbi5jbGlja2FibGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG4uYXR0YWNrLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5hdHRhY2stZ3JpZF9fYm9tYiB7XFxuICBhbmltYXRpb246IGRyb3BJbiA2MDBtcztcXG59XFxuQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSwgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJET2dCO0VDTmhCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBUUY7QUFQRTtFQUNFLHlCQUFBO0VBQ0EseUJETGM7QUNjbEI7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFTSjtBQVJJO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQVVOOztBQUxFO0VBQ0UsVUFBQTtBQVFKO0FBTkU7RUFDRSxVQUFBO0FBUUo7QUFORTtFQUNFLFVBQUE7QUFRSjtBQU5FO0VBRUUsVUFBQTtBQU9KO0FBTEU7RUFFRSxVQUFBO0FBTUo7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjtBQUxFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBT0Y7QUFORTtFQUNFLHVCQUFBO0FBUUo7QUFQSTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0VBU047RUFQSTtJQUVFLFVBQUE7RUFRTjtFQU5JO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBUU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogJG5hdnktY2hhaW4tb3V0bGluZSBzb2xpZCAycHg7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICZfX2VsZW1lbnQge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgfVxcbiAgJl9fc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgICYtLXJvdGF0ZWQge1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgICB9XFxuICB9XFxufVxcbi5zaGlwLWluZGV4IHtcXG4gICYtMCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAmLTEge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbiAgJi0yIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG4gICYtMyxcXG4gICYtNCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAmLTUsXFxuICAmLTYge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgfVxcbn1cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgfVxcbn1cXG4uYXR0YWNrLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAmX19ib21iIHtcXG4gICAgYW5pbWF0aW9uOiBkcm9wSW4gNjAwbXM7XFxuICAgIEBrZXlmcmFtZXMgZHJvcEluIHtcXG4gICAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgfVxcbiAgICAgIDI1JSxcXG4gICAgICA3NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5mb290ZXJzLXBhcmVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJkNmE7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG59XFxuLmZvb3Rlcl9fcmVwby1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5mb290ZXJfX2dpdGh1Yi1pY29uIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQUxBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCREdVO0FDSVo7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFRRjtBQVBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVNKO0FBUEU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFTSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCI7XFxuXFxuLmZvb3RlcnMtcGFyZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktYmx1ZTtcXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgJl9fcmVwby1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICB9XFxuICAmX19naXRodWItaWNvbiB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICM5Njk2OTY7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmdhbWUtb3Zlcl9fdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgY29sb3I6ICM3MzM5MWY7XFxufVxcbi5nYW1lLW92ZXJfX3dpbm5lci1tc2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzc2NWYzYTtcXG59XFxuLmdhbWUtb3Zlcl9fYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFRRjtBQVBFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNEVmU7QUNtQm5CO0FBUEU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjRGxCaUI7QUMyQnJCO0FBUEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICZfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgIGNvbG9yOiAkbmF2eS1icm93bi1lYWdsZTtcXG4gIH1cXG4gICZfX3dpbm5lci1tc2cge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogJG5hdnktYnJvd24tb3V0bGluZTtcXG4gIH1cXG4gICZfX2J1dHRvbi1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5wbGFjZW1lbnQtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpIDUuNWZyIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzk2OTY5NjtcXG59XFxuXFxuLmRpcmVjdGlvbnMge1xcbiAgY29sb3I6ICNjYWNhY2E7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmJ1dHRvbi1maWVsZCAuZmxpcC1idXR0b24ge1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxufVxcbi5idXR0b24tZmllbGQgLmZsaXAtYnV0dG9uLS1mbGlwcGVkIHtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ucGxhY2VtZW50LWdyaWQge1xcbiAgd2lkdGg6IDk1dm1pbjtcXG4gIGhlaWdodDogOTV2bWluO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLnBsYWNlbWVudC1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMWZyO1xcbiAgfVxcblxcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB9XFxuXFxuICAuZGlyZWN0aW9ucyB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgfVxcblxcbiAgLnBsYWNlbWVudC1ncmlkIHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIHdpZHRoOiA2NXZtaW47XFxuICAgIGhlaWdodDogNjV2bWluO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jb250aW51ZSB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzZweCkge1xcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcblxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQUxBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGNEQ21CO0FDT3JCOztBQU5BO0VBQ0UsY0RIZ0I7RUNJaEIsY0FBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQVVGO0FBVEU7RUFDRSxpQkFBQTtBQVdKO0FBVkk7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FBWU47O0FBUkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFXRjs7QUFUQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxvQ0FBQTtFQVlGOztFQVZBO0lBQ0UsaUJBQUE7RUFhRjs7RUFYQTtJQUNFLGNBQUE7RUFjRjs7RUFaQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBZUY7O0VBYkE7SUFDRSxpQkFBQTtFQWdCRjtBQUNGO0FBZEE7RUFDRTtJQUNFLGVBQUE7RUFnQkY7O0VBZEE7SUFDRSxpQkFBQTtFQWlCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4ucGxhY2VtZW50LXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSA1LjVmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4ud2VsY29tZS1tc2cge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxufVxcbi5kaXJlY3Rpb25zIHtcXG4gIGNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idXR0b24tZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICAuZmxpcC1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gICAgJi0tZmxpcHBlZCB7XFxuICAgICAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICB9XFxuICB9XFxufVxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogOTV2bWluO1xcbiAgaGVpZ2h0OiA5NXZtaW47XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAucGxhY2VtZW50LXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC43ZnIgYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxZnI7XFxuICB9XFxuICAud2VsY29tZS1tc2cge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIH1cXG4gIC5kaXJlY3Rpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICB9XFxuICAucGxhY2VtZW50LWdyaWQge1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgd2lkdGg6IDY1dm1pbjtcXG4gICAgaGVpZ2h0OiA2NXZtaW47XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcbiAgLmNvbnRpbnVlIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM3NnB4KSB7XFxuICAud2VsY29tZS1tc2cge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuICAuZGlyZWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNHLHFCQUFBO0FBQUo7O0FBRUEsZ0RBQUE7QUFFQTs7RUFFQyxjQUFBO0FBQUQ7O0FBRUEsb0JBQUE7QUFDQSxnREFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGOztBQUNBOztFQUVFLGdCQUFBO0FBRUY7O0FBQUE7O0VBRUUsWUFBQTtBQUdGOztBQURBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBTUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbi8vcHJldHRpZXItaWdub3JlXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4vL3ByZXR0aWVyLWlnbm9yZVxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLnRpdGxlLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgY29sb3I6ICNmZWI5MzI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGl0bGUtc2NyZWVuLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQUxBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRERVO0VDRVYsbUJBQUE7RUFDQSw0QkFBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQVNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi50aXRsZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG4gIGNvbG9yOiAkbmF2eS1nb2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxufVxcbi5wbGF5LWJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZS1zY3JlZW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZS1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLW92ZXItc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLW92ZXItc2NyZWVuLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYWNlbWVudC1zY3JlZW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYWNlbWVudC1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpdGxlLXNjcmVlbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGl0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBuZXdHcmlkQXJlYUZvciB9IGZyb20gXCIuL25ldy1ncmlkLWFyZWFcIjtcbmltcG9ydCB7IG5ld1NoaXBMaXN0Rm9yIH0gZnJvbSBcIi4vbmV3LXNoaXAtbGlzdFwiO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXR0bGVTY3JlZW4ocEZsZWV0TG9jYXRpb25JbmZvKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgYmF0dGxlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmF0dGxlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGUtc2NyZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJhdHRsZVNjcmVlbik7XG5cbiAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKG5ld0dyaWRBcmVhRm9yKFwiRW5lbXlcIikpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3U2hpcExpc3RGb3IoXCJFbmVteVwiKSk7XG5cbiAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKG5ld0dyaWRBcmVhRm9yKFwiUGxheWVyXCIsIHBGbGVldExvY2F0aW9uSW5mbykpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3U2hpcExpc3RGb3IoXCJQbGF5ZXJcIikpO1xuXG4gIGZ1bmN0aW9uIGVyYXNlU2hpcEZyb21MaXN0KGRhdGEpIHtcbiAgICBjb25zdCB7IHBsYXllck5hbWUsIHNoaXBJbmRleCB9ID0gZGF0YTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwbGF5ZXJOYW1lfS1zaGlwLWxpc3QtaXRlbS0ke3NoaXBJbmRleH1gXG4gICAgKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICB9XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJzaGlwSGFzU3Vua1wiLCBlcmFzZVNoaXBGcm9tTGlzdCk7XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvY29tcG9uZW50cy5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHcmlkIH0gZnJvbSBcIi4vbmV3LWdyaWRcIjtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdCdXR0b24gPSAobGFiZWwpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwiY2xpY2thYmxlXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdCdXR0b24sXG4gICAgbmV3R3JpZCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwRmxlZXQgfSBmcm9tIFwiLi9zaGlwLWZsZWV0XCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgR1JJRF9TSVpFID0gMTAwO1xuZXhwb3J0IGZ1bmN0aW9uIEdhbWVCb2FyZChwTmFtZSkge1xuICBjb25zdCBfZ3JpZCA9IGJ1aWxkR3JpZChHUklEX1NJWkUpO1xuICBjb25zdCBfZmxlZXQgPSBTaGlwRmxlZXQoKTtcbiAgY29uc3QgX3BsYXllck5hbWUgPSBwTmFtZTtcbiAgbGV0IF9wbGFjZW1lbnRJbmRleCA9IDA7XG4gIGxldCBfcGxhY2VtZW50QXhpcyA9IFwieFwiO1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVTdGF0dXMgPSAoaW5kZXgpID0+IF9ncmlkW2luZGV4XTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzID0gZ2V0UGxhY2VtZW50QXhpcygpKSA9PiB7XG4gICAgc2V0U2hpcENvb3JkaW5hdGVzKCk7XG4gICAgdXBkYXRlR3JpZFdpdGhTaGlwSW5kZXgoKTtcbiAgICBfcGxhY2VtZW50SW5kZXgrKztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUdyaWRXaXRoU2hpcEluZGV4KCkge1xuICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKFxuICAgICAgICAoY29vcmRpbmF0ZSkgPT4gKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9IF9wbGFjZW1lbnRJbmRleClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2hpcENvb3JkaW5hdGVzKCkge1xuICAgICAgX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uc2V0Q29vcmRpbmF0ZXMoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCA9IChzdGFydGluZ0Nvb3JkaW5hdGUsIGF4aXMpID0+IHtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBfcGxhY2VtZW50SW5kZXg7XG4gICAgcmV0dXJuIG92ZXJGbG93c0dyaWQoKSB8fCBvdmVyTGFwc0Fub3RoZXJTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkKCkge1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IF9mbGVldFtzaGlwSW5kZXhdLmdldExlbmd0aCgpO1xuICAgICAgcmV0dXJuIG92ZXJGbG93c0dyaWRPblhBeGlzKCkgfHwgb3ZlckZsb3dzR3JpZE9uWUF4aXMoKTtcblxuICAgICAgZnVuY3Rpb24gb3ZlckZsb3dzR3JpZE9uWEF4aXMoKSB7XG4gICAgICAgIGlmIChheGlzICE9PSBcInhcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgPSBzdGFydGluZ0Nvb3JkaW5hdGUgJSAxMDtcbiAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGggKyBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgLSAxID49IDEwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkT25ZQXhpcygpIHtcbiAgICAgICAgaWYgKGF4aXMgIT09IFwieVwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVuZE9mU2hpcENvb3JkaW5hdGUgPSAoc2hpcExlbmd0aCAtIDEpICogMTAgKyBzdGFydGluZ0Nvb3JkaW5hdGU7XG4gICAgICAgIHJldHVybiBlbmRPZlNoaXBDb29yZGluYXRlID49IF9ncmlkLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZWRPbkFub3RoZXJTaGlwKHBDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gX2dyaWRbcENvb3JkaW5hdGVdLnNoaXBJbmRleCAhPT0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3ZlckxhcHNBbm90aGVyU2hpcCgpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9DaGVjayA9IF9mbGVldFtzaGlwSW5kZXhdLmNoZWNrQ29vcmRpbmF0ZXMoXG4gICAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZSxcbiAgICAgICAgYXhpc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlc1RvQ2hlY2suc29tZShwbGFjZWRPbkFub3RoZXJTaGlwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFyZUFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBfcGxhY2VtZW50SW5kZXggPT09IF9mbGVldC5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLmlzUGxheWVkKSByZXR1cm47XG4gICAgX2dyaWRbY29vcmRpbmF0ZV0uaXNQbGF5ZWQgPSB0cnVlO1xuXG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9PT0gXCJub25lXCIpIHJldHVybjtcbiAgICBhdHRhY2tTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2tTaGlwKCkge1xuICAgICAgY29uc3Qgc2hpcEluZGV4ID0gX2dyaWRbY29vcmRpbmF0ZV0uc2hpcEluZGV4O1xuICAgICAgY29uc3Qgc2hpcFRvQXR0YWNrID0gX2ZsZWV0W3NoaXBJbmRleF07XG4gICAgICBzaGlwVG9BdHRhY2suaGl0KCk7XG5cbiAgICAgIGlmIChzaGlwVG9BdHRhY2suaXNTdW5rKCkpIHB1Ymxpc2hTaGlwU2lua2luZygpO1xuXG4gICAgICBmdW5jdGlvbiBwdWJsaXNoU2hpcFNpbmtpbmcoKSB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic2hpcEhhc1N1bmtcIiwge1xuICAgICAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZTogc2hpcFRvQXR0YWNrLmdldFN0YXJ0aW5nQ29vcmRpbmF0ZSgpLFxuICAgICAgICAgIHNoaXBJbmRleDogc2hpcEluZGV4LFxuICAgICAgICAgIHBsYXllck5hbWU6IF9wbGF5ZXJOYW1lLFxuICAgICAgICAgIGF4aXM6IHNoaXBUb0F0dGFjay5nZXRBeGlzKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0ZsZWV0U3VuayA9ICgpID0+IF9mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKCFhcmVBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICBjb25zdCBbbGVnYWxDb29yZGluYXRlLCBsZWdhbEF4aXNdID0gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKTtcbiAgICAgIHBsYWNlU2hpcChsZWdhbENvb3JkaW5hdGUsIGxlZ2FsQXhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKSB7XG4gICAgICBsZXQgW2Nvb3JkaW5hdGUsIGF4aXNdID0gZ2V0UmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICB3aGlsZSAoaXNJbGxlZ2FsU2hpcFBsYWNlbWVudChjb29yZGluYXRlLCBheGlzKSkge1xuICAgICAgICBbY29vcmRpbmF0ZSwgYXhpc10gPSBnZXRSYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbY29vcmRpbmF0ZSwgYXhpc107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgYXhlcyA9IFtcInhcIiwgXCJ5XCJdO1xuICAgICAgY29uc3QgcmFuZG9tQXhpcyA9IGF4ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhlcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpO1xuICAgICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21BeGlzXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxhY2VtZW50QXhpcyA9ICgpID0+IF9wbGFjZW1lbnRBeGlzO1xuXG4gIGNvbnN0IHRvZ2dsZVBsYWNlbWVudEF4aXMgPSAoKSA9PlxuICAgIChfcGxhY2VtZW50QXhpcyA9IF9wbGFjZW1lbnRBeGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCIpO1xuXG4gIGNvbnN0IHJlc2V0UGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIF9wbGFjZW1lbnRJbmRleCA9IDA7XG4gICAgX2dyaWQuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc2hpcEluZGV4ID0gXCJub25lXCIpKTtcbiAgICBfZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZXNldENvb3JkaW5hdGVzKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlbWVudEluZGV4ID0gKCkgPT4gX3BsYWNlbWVudEluZGV4O1xuXG4gIGNvbnN0IGdldEZsZWV0TG9jYXRpb25JbmZvID0gKCkgPT5cbiAgICBfZmxlZXQubWFwKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29vcmRpbmF0ZTogc2hpcC5nZXRTdGFydGluZ0Nvb3JkaW5hdGUoKSxcbiAgICAgICAgc2hpcEluZGV4OiBpbmRleCxcbiAgICAgICAgYXhpczogc2hpcC5nZXRBeGlzKCksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q29vcmRpbmF0ZVN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCxcbiAgICBhcmVBbGxTaGlwc1BsYWNlZCxcbiAgICBwbGFjZUFsbFNoaXBzQXRSYW5kb21Db29yZGluYXRlcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRmxlZXRTdW5rLFxuICAgIGdldFBsYWNlbWVudEF4aXMsXG4gICAgZ2V0UGxhY2VtZW50SW5kZXgsXG4gICAgdG9nZ2xlUGxhY2VtZW50QXhpcyxcbiAgICByZXNldFBsYWNlbWVudCxcbiAgICBnZXRGbGVldExvY2F0aW9uSW5mbyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRHcmlkKHNpemUpIHtcbiAgbGV0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICBncmlkLnB1c2gobmV3R3JpZEl0ZW0oKSk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG5cbiAgZnVuY3Rpb24gbmV3R3JpZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHsgaXNQbGF5ZWQ6IGZhbHNlLCBzaGlwSW5kZXg6IFwibm9uZVwiIH07XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLnNjc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuKGlzV2lubmVyKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgZ2FtZU92ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lT3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICBjb250ZW50LmFwcGVuZChnYW1lT3ZlckNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX3RpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyXCI7XG4gIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCB3aW5uZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2lubmVyTXNnLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX3dpbm5lci1tc2dcIik7XG4gIHdpbm5lck1zZy50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSAke2lzV2lubmVyID8gXCJ3b24uXCIgOiBcImxvc3QuXCJ9YDtcbiAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyTXNnKTtcblxuICBjb25zdCBidXR0b25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJfX2J1dHRvbi1maWVsZFwiKTtcbiAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRmllbGQpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiUGxheSBBZ2Fpbj9cIik7XG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLnBsYXlBZ2FpbkNsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKTtcblxuICBjb25zdCBxdWl0QnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJRdWl0XCIpO1xuICBxdWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2UucXVpdENsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocXVpdEJ1dHRvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5kZXhUb1NoaXBOYW1lKGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIFwiY2FycmllclwiO1xuICBpZiAoaW5kZXggPT09IDEpIHJldHVybiBcImJhdHRsZXNoaXBcIjtcbiAgaWYgKGluZGV4ID09PSAyKSByZXR1cm4gXCJjcnVpc2VyXCI7XG4gIGlmIChpbmRleCA9PT0gMyB8fCBpbmRleCA9PT0gNCkgcmV0dXJuIFwiZGVzdHJveWVyXCI7XG4gIGlmIChpbmRleCA9PT0gNSB8fCBpbmRleCA9PT0gNikgcmV0dXJuIFwic3VibWFyaW5lXCI7XG59XG4iLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZS1ib2FyZFwiO1xuXG5leHBvcnQgY29uc3QgSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZW5lbXlHYW1lQm9hcmQgPSBHYW1lQm9hcmQoXCJFbmVteVwiKTtcbiAgZW5lbXlHYW1lQm9hcmQucGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKFwiUGxheWVyXCIpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZUNsaWNrKCkge1xuICAgIFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBSZW5kZXIuc2hpcFBsYWNlbWVudFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcFNoaXBDbGljayhlKSB7XG4gICAgcGxheWVyR2FtZUJvYXJkLnRvZ2dsZVBsYWNlbWVudEF4aXMoKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcC1idXR0b24tLWZsaXBwZWRcIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENsaWNrKGRpc3BsYXlHcmlkKSB7XG4gICAgZGlzcGxheUdyaWQucmVzZXRTaGlwcygpO1xuICAgIHBsYXllckdhbWVCb2FyZC5yZXNldFBsYWNlbWVudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVDbGljaygpIHtcbiAgICBpZiAoIXBsYXllckdhbWVCb2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSByZXR1cm47XG4gICAgUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIFJlbmRlci5iYXR0bGVTY3JlZW4ocGxheWVyR2FtZUJvYXJkLmdldEZsZWV0TG9jYXRpb25JbmZvKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VtZW50R3JpZENsaWNrKHsgdGFyZ2V0LCBkaXNwbGF5R3JpZCB9KSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IF9nZXRJbmRleE9mKHRhcmdldCk7XG4gICAgaWYgKHBsYXllckdhbWVCb2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSByZXR1cm47XG4gICAgY29uc3QgYXhpcyA9IHBsYXllckdhbWVCb2FyZC5nZXRQbGFjZW1lbnRBeGlzKCk7XG4gICAgaWYgKHBsYXllckdhbWVCb2FyZC5pc0lsbGVnYWxTaGlwUGxhY2VtZW50KGNvb3JkaW5hdGUsIGF4aXMpKSByZXR1cm47XG4gICAgY29uc3Qgc2hpcEluZGV4ID0gcGxheWVyR2FtZUJvYXJkLmdldFBsYWNlbWVudEluZGV4KCk7XG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlKTtcbiAgICBkaXNwbGF5R3JpZC5hZGRTaGlwVG9HcmlkKHsgY29vcmRpbmF0ZSwgYXhpcywgc2hpcEluZGV4IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5lbXlHcmlkQ2xpY2soeyB0YXJnZXQsIGVuZW15RGlzcGxheUdyaWQsIHBsYXllckRpc3BsYXlHcmlkIH0pIHtcbiAgICBwdWJzdWIucHVibGlzaChcImVuZW15R3JpZENsaWNrXCIsIF9nZXRJbmRleE9mKHRhcmdldCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluQ2xpY2soKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJwbGF5QWdhaW5DbGlja1wiKTtcbiAgICBSZW5kZXIuY2xlYXJDb250ZW50KCk7XG4gICAgUmVuZGVyLnRpdGxlU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWl0Q2xpY2soKSB7XG4gICAgd2luZG93Lm9wZW4oXCJcIiwgXCJfc2VsZlwiKS5kb2N1bWVudC53cml0ZShcIlwiKTtcbiAgICB3aW5kb3cub3BlbihcIlwiLCBcIl9zZWxmXCIpLmNsb3NlKCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9wYWxtZXJ1c2FmL2JhdHRsZS1zaGlwXCI7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0SW5kZXhPZihwVGFyZ2V0KSB7XG4gICAgaWYgKCFwVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdyaWQtY29udGFpbmVyX19lbGVtZW50XCIpKVxuICAgICAgcFRhcmdldCA9IHBUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwVGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmluZGV4T2YocFRhcmdldCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0R2FtZUNsaWNrLFxuICAgIGZsaXBTaGlwQ2xpY2ssXG4gICAgcmVzZXRDbGljayxcbiAgICBjb250aW51ZUNsaWNrLFxuICAgIHBsYWNlbWVudEdyaWRDbGljayxcbiAgICBlbmVteUdyaWRDbGljayxcbiAgICBwbGF5QWdhaW5DbGljayxcbiAgICBxdWl0Q2xpY2ssXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3R3JpZEFyZWFGb3IocGxheWVyTmFtZSwgcEZsZWV0TG9jYXRpb25JbmZvKSB7XG4gIGNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZEFyZWEuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYVwiLCBgZ3JpZC1hcmVhLS0ke3BsYXllck5hbWV9YCk7XG5cbiAgY29uc3QgZ3JpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBncmlkTGFiZWwuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYV9fbGFiZWxcIik7XG4gIGdyaWRMYWJlbC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9IEdyaWRgO1xuICBncmlkQXJlYS5hcHBlbmRDaGlsZChncmlkTGFiZWwpO1xuXG4gIGNvbnN0IGdyaWQgPSBDb21wb25lbnRzLm5ld0dyaWQoKTtcbiAgaWYgKHBsYXllck5hbWUgPT09IFwiRW5lbXlcIikgYWRkRW5lbXlBdHRyaWJ1dGVzKCk7XG4gIGVsc2Uge1xuICAgIHJlbmRlclNoaXBzKCk7XG4gIH1cbiAgZ3JpZC5hZGRQYXJlbnRDbGFzcyhcImdyaWQtYXJlYV9fZ3JpZFwiKTtcbiAgZ3JpZEFyZWEuYXBwZW5kQ2hpbGQoZ3JpZC5yZW5kZXIoKSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2hpcHMoKSB7XG4gICAgcEZsZWV0TG9jYXRpb25JbmZvLmZvckVhY2goKHNoaXBMb2NhdGlvbikgPT5cbiAgICAgIGdyaWQuYWRkU2hpcFRvR3JpZChzaGlwTG9jYXRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVuZW15QXR0cmlidXRlcygpIHtcbiAgICBncmlkLnNldENsaWNrYWJsZSgpO1xuICAgIGdyaWQuYWRkRXZlbnRUb0VsZW1lbnRzKFwiY2xpY2tcIiwgSW50ZXJmYWNlLmVuZW15R3JpZENsaWNrKTtcbiAgICBncmlkLnNldENvb3JkaW5hdGVIb3Zlck1zZyhcIkF0dGFjayBjb29yZGluYXRlXCIpO1xuICB9XG5cbiAgcmV0dXJuIGdyaWRBcmVhO1xufVxuIiwiaW1wb3J0IHsgaW5kZXhUb1NoaXBOYW1lIH0gZnJvbSBcIi4vaW5kZXgtdG8tc2hpcC1uYW1lXCI7XG5leHBvcnQgY29uc3QgbmV3R3JpZCA9ICgpID0+IHtcbiAgY29uc3QgR1JJRF9TSVpFID0gMTAwO1xuICBjb25zdCBncmlkQ29udGFpbmVyID0gaW5pdEdyaWRXaXRoRWxlbWVudHMoKTtcblxuICBmdW5jdGlvbiBpbml0R3JpZFdpdGhFbGVtZW50cygpIHtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdSSURfU0laRTsgaSsrKSB7XG4gICAgICBjb25zdCBncmlkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJfX2VsZW1lbnRcIik7XG4gICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG4gIH1cblxuICBjb25zdCBfbW9kRWxlbWVudHMgPSAobW9kKSA9PiBbLi4uZ3JpZENvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaChtb2QpO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IGdyaWRDb250YWluZXI7XG5cbiAgY29uc3Qgc2V0Q2xpY2thYmxlID0gKCkgPT5cbiAgICBfbW9kRWxlbWVudHMoKGdyaWRFbGVtZW50KSA9PiB7XG4gICAgICBncmlkRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xpY2thYmxlXCIpO1xuICAgIH0pO1xuXG4gIGNvbnN0IHNldENvb3JkaW5hdGVIb3Zlck1zZyA9IChtZXNzYWdlKSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKFxuICAgICAgKGdyaWRFbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgKGdyaWRFbGVtZW50LnRpdGxlID0gYCR7bWVzc2FnZX0gJHt4WUNvb3JkaW5hdGUoaW5kZXgpfWApXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHhZQ29vcmRpbmF0ZShpbmRleCkge1xuICAgICAgcmV0dXJuIGAoJHsoaW5kZXggJSAxMCkgKyAxfSwgJHtNYXRoLmZsb29yKGluZGV4IC8gMTAgKyAxKX0pYDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkUGFyZW50Q2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICBjb25zdCBhZGRDaGlsZENsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+IGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkRXZlbnRUb0VsZW1lbnRzID0gKHBFdmVudFR5cGUsIHBFdmVudCkgPT4ge1xuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+XG4gICAgICBncmlkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHBFdmVudFR5cGUsIHBFdmVudClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBUb0dyaWQgPSAoeyBjb29yZGluYXRlLCBzaGlwSW5kZXgsIGF4aXMgfSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyX19zaGlwXCIsIGBzaGlwLWluZGV4LSR7c2hpcEluZGV4fWApO1xuICAgIGlmIChheGlzID09PSBcInlcIikgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJfX3NoaXAtLXJvdGF0ZWRcIik7XG4gICAgc2hpcC5zcmMgPSBgL3NyYy9pbWdzLyR7aW5kZXhUb1NoaXBOYW1lKHNoaXBJbmRleCl9LnBuZ2A7XG4gICAgZ3JpZENvbnRhaW5lci5jaGlsZHJlbltjb29yZGluYXRlXS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICBncmlkQ29udGFpbmVyLmNoaWxkcmVuW2Nvb3JkaW5hdGVdLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBfbW9kRWxlbWVudHMoKGdyaWRFbGVtZW50KSA9PiAoZ3JpZEVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiKSk7XG4gICAgc2V0Q2xpY2thYmxlKCk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh7IGNvb3JkaW5hdGUsIGlzSGl0IH0pID0+IHtcbiAgICBjb25zdCBncmlkRWxlbWVudCA9IGdyaWRDb250YWluZXIuY2hpbGRyZW5bY29vcmRpbmF0ZV07XG4gICAgcGxheUJvbWJBbmltYXRpb24odGhlbk1hcmtIaXRPck1pc3MpO1xuXG4gICAgZnVuY3Rpb24gcGxheUJvbWJBbmltYXRpb24oY2FsbEJhY2spIHtcbiAgICAgIGNvbnN0IGJvbWJEcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJvbWJEcm9wLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2stZ3JpZFwiLCBcImF0dGFjay1ncmlkX19ib21iXCIpO1xuICAgICAgYm9tYkRyb3AudGV4dENvbnRlbnQgPSBcIvCfkqNcIjtcbiAgICAgIGJvbWJEcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgY2FsbEJhY2spO1xuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9tYkRyb3ApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW5NYXJrSGl0T3JNaXNzKCkge1xuICAgICAgZ3JpZEVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFyay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrLWdyaWRcIik7XG4gICAgICBtYXJrLnRleHRDb250ZW50ID0gaXNIaXQgPyBcIvCfkqVcIiA6IFwi8J+SplwiO1xuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQobWFyayk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICAgIHNldENsaWNrYWJsZSxcbiAgICBzZXRDb29yZGluYXRlSG92ZXJNc2csXG4gICAgYWRkUGFyZW50Q2xhc3MsXG4gICAgYWRkQ2hpbGRDbGFzcyxcbiAgICBhZGRFdmVudFRvRWxlbWVudHMsXG4gICAgYWRkU2hpcFRvR3JpZCxcbiAgICByZXNldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgaW5kZXhUb1NoaXBOYW1lIH0gZnJvbSBcIi4vaW5kZXgtdG8tc2hpcC1uYW1lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdTaGlwTGlzdEZvcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcEFyZWEuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYVwiLCBgc2hpcC1hcmVhLS0ke3BsYXllck5hbWV9YCk7XG5cbiAgY29uc3Qgc2hpcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzaGlwTGFiZWwuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYV9fbGFiZWxcIik7XG4gIHNoaXBMYWJlbC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9IFNoaXBzYDtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQoc2hpcExhYmVsKTtcblxuICBjb25zdCBzaGlwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgc2hpcExpc3QuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYV9fbGlzdFwiKTtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQoc2hpcExpc3QpO1xuXG4gIGFkZFNoaXBzVG8oc2hpcExpc3QpO1xuXG4gIHJldHVybiBzaGlwQXJlYTtcbiAgZnVuY3Rpb24gYWRkU2hpcHNUbyhzaGlwTGlzdCkge1xuICAgIGNvbnN0IE5VTV9TSElQU19JTl9GTEVFVCA9IDc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU0hJUFNfSU5fRkxFRVQ7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBzaGlwSXRlbS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcInNoaXAtYXJlYV9faXRlbVwiLFxuICAgICAgICBgJHtwbGF5ZXJOYW1lfS1zaGlwLWxpc3QtaXRlbS0ke2l9YFxuICAgICAgKTtcbiAgICAgIHNoaXBMaXN0LmFwcGVuZENoaWxkKHNoaXBJdGVtKTtcblxuICAgICAgY29uc3Qgc2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBzaGlwSW1nLnNyYyA9IGAvc3JjL2ltZ3MvJHtpbmRleFRvU2hpcE5hbWUoaSl9LnBuZ2A7XG4gICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFfX2ltZ1wiKTtcbiAgICAgIHNoaXBJdGVtLmFwcGVuZENoaWxkKHNoaXBJbWcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFwiL3NyYy9zdHlsZXMvcGxhY2VtZW50LXNjcmVlbi5zY3NzXCI7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSBcIi9zcmMvbW9kdWxlcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiL3NyYy9tb2R1bGVzL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi9zcmMvbW9kdWxlcy9wdWJzdWJcIjtcblxuZXhwb3J0IGNvbnN0IHNoaXBQbGFjZW1lbnRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3Qgc2hpcFBsYWNlbWVudFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBQbGFjZW1lbnRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcFBsYWNlbWVudFNjcmVlbik7XG5cbiAgY29uc3Qgd2VsY29tZU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2VsY29tZU1zZy5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1tc2dcIik7XG4gIHdlbGNvbWVNc2cudGV4dENvbnRlbnQgPSBcIldlbGNvbWVcIjtcbiAgc2hpcFBsYWNlbWVudFNjcmVlbi5hcHBlbmRDaGlsZCh3ZWxjb21lTXNnKTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRpcmVjdGlvbnMuY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbnNcIik7XG4gIGRpcmVjdGlvbnMudGV4dENvbnRlbnQgPVxuICAgIFwiUGxhY2UgeW91ciBzaGlwcyBieSBjbGlja2luZyBvciB0YXBwaW5nIG9uIHRoZSBncmlkLiBXaGVuIHlvdSBhcmUgcmVhZHkgcHJlc3MgY29udGludWUuXCI7XG4gIHNoaXBQbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XG5cbiAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWZpZWxkXCIpO1xuICBzaGlwUGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKGJ1dHRvbkZpZWxkKTtcblxuICBjb25zdCBmbGlwU2hpcEJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiRmxpcCBTaGlwXCIpO1xuICBmbGlwU2hpcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxpcC1idXR0b25cIik7XG4gIGZsaXBTaGlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2UuZmxpcFNoaXBDbGljayk7XG4gIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKGZsaXBTaGlwQnV0dG9uKTtcblxuICBjb25zdCByZXNldCA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiUmVzZXRcIik7XG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBJbnRlcmZhY2UucmVzZXRDbGljayhwbGFjZW1lbnRHcmlkKSk7XG4gIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKHJlc2V0KTtcblxuICBjb25zdCBwbGFjZW1lbnRHcmlkID0gQ29tcG9uZW50cy5uZXdHcmlkKCk7XG4gIHBsYWNlbWVudEdyaWQuc2V0Q2xpY2thYmxlKCk7XG4gIHBsYWNlbWVudEdyaWQuYWRkUGFyZW50Q2xhc3MoXCJwbGFjZW1lbnQtZ3JpZFwiKTtcbiAgcGxhY2VtZW50R3JpZC5zZXRDb29yZGluYXRlSG92ZXJNc2coXCJQbGFjZSBTaGlwIGF0XCIpO1xuICBwbGFjZW1lbnRHcmlkLmFkZEV2ZW50VG9FbGVtZW50cyhcImNsaWNrXCIsIChlKSA9PlxuICAgIEludGVyZmFjZS5wbGFjZW1lbnRHcmlkQ2xpY2soe1xuICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcbiAgICAgIGRpc3BsYXlHcmlkOiBwbGFjZW1lbnRHcmlkLFxuICAgIH0pXG4gICk7XG4gIHNoaXBQbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQocGxhY2VtZW50R3JpZC5yZW5kZXIoKSk7XG5cbiAgY29uc3QgY29udGludWVCdXR0b24gPSBDb21wb25lbnRzLm5ld0J1dHRvbihcIkNvbnRpbnVlXCIpO1xuICBjb250aW51ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGludWVcIik7XG4gIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2UuY29udGludWVDbGljayk7XG4gIHNoaXBQbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xufTtcbiIsImV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9TdWIpIHtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0Z1bmNUb1N1Yik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFja0Z1bmNUb1VuU3ViKSB7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoY2FsbGJhY2tGdW5jID0+IGNhbGxiYWNrRnVuYyAhPT0gY2FsbGJhY2tGdW5jVG9VblN1Yik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFja0Z1bmMgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9OyIsImltcG9ydCB7IGJhdHRsZVNjcmVlbiB9IGZyb20gXCIuL2JhdHRsZS1zY3JlZW5cIjtcbmltcG9ydCB7IHRpdGxlU2NyZWVuIH0gZnJvbSBcIi4vdGl0bGUtc2NyZWVuXCI7XG5pbXBvcnQgeyBzaGlwUGxhY2VtZW50U2NyZWVuIH0gZnJvbSBcIi4vcGxhY2VtZW50LXNjcmVlblwiO1xuaW1wb3J0IHsgZ2FtZU92ZXJTY3JlZW4gfSBmcm9tIFwiLi9nYW1lLW92ZXItc2NyZWVuXCI7XG5cbmV4cG9ydCBjb25zdCBSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PlxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikudGV4dENvbnRlbnQgPSBcIlwiKTtcblxuICByZXR1cm4ge1xuICAgIGJhdHRsZVNjcmVlbixcbiAgICB0aXRsZVNjcmVlbixcbiAgICBzaGlwUGxhY2VtZW50U2NyZWVuLFxuICAgIGdhbWVPdmVyU2NyZWVuLFxuICAgIGNsZWFyQ29udGVudCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uL21vZHVsZXMvc2hpcFwiO1xuXG5leHBvcnQgY29uc3QgU2hpcEZsZWV0ID0gKCkgPT4gW1xuICBTaGlwKDUpLFxuICBTaGlwKDQpLFxuICBTaGlwKDMpLFxuICBTaGlwKDIpLFxuICBTaGlwKDIpLFxuICBTaGlwKDEpLFxuICBTaGlwKDEpLFxuXTtcbiIsImV4cG9ydCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICBsZXQgaGl0UG9pbnRzID0gbGVuZ3RoO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IF9heGlzID0gXCJcIjtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKCkgPT4gY29vcmRpbmF0ZXM7XG4gIGNvbnN0IGdldFN0YXJ0aW5nQ29vcmRpbmF0ZSA9ICgpID0+IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBnZXRBeGlzID0gKCkgPT4gX2F4aXM7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdFBvaW50cy0tO1xuICAgIGlmIChoaXRQb2ludHMgPT09IDApIHN1bmsgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldENvb3JkaW5hdGVzID0gKHBTdGFydGluZ1Bvc2l0aW9uLCBwQXhpcykgPT4ge1xuICAgIF9heGlzID0gcEF4aXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBBeGlzID09PSBcInlcIikgY29vcmRpbmF0ZXMucHVzaChwU3RhcnRpbmdQb3NpdGlvbiArIGkgKiAxMCk7XG4gICAgICBlbHNlIGNvb3JkaW5hdGVzLnB1c2gocFN0YXJ0aW5nUG9zaXRpb24gKyBpKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCByZXNldENvb3JkaW5hdGVzID0gKCkgPT4gKGNvb3JkaW5hdGVzID0gW10pO1xuXG4gIC8vIGNoZWNrIHdoYXQgY29vcmRpbmF0ZXMgd291bGQgYmUgd2l0aG91dCBzZXR0aW5nIHRoZW1cbiAgY29uc3QgY2hlY2tDb29yZGluYXRlcyA9IChwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpID0+IHtcbiAgICBzZXRDb29yZGluYXRlcyhwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpO1xuICAgIGNvbnN0IGh5cG9Db29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKCk7XG4gICAgcmVzZXRDb29yZGluYXRlcygpO1xuICAgIHJldHVybiBoeXBvQ29vcmRpbmF0ZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaXNTdW5rLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBnZXRTdGFydGluZ0Nvb3JkaW5hdGUsXG4gICAgZ2V0QXhpcyxcbiAgICBoaXQsXG4gICAgc2V0Q29vcmRpbmF0ZXMsXG4gICAgY2hlY2tDb29yZGluYXRlcyxcbiAgICByZXNldENvb3JkaW5hdGVzLFxuICB9O1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzXCI7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjb25zdCB0aXRsZVNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCB0aXRsZVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVTY3JlZW4pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG4gIHRpdGxlU2NyZWVuLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwbGF5QnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJTdGFydCBHYW1lXCIpO1xuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2Uuc3RhcnRHYW1lQ2xpY2spO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWJ1dHRvblwiKTtcblxuICB0aXRsZVNjcmVlbi5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGVzL2Zvb3Rlci5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5zY3NzXCI7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lLWJvYXJkXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xuXG5SZW5kZXIuc2hpcFBsYWNlbWVudFNjcmVlbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9