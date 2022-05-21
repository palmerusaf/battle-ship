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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@keyframes dropIn {\n  0% {\n    transform: scale(10);\n    opacity: 0;\n  }\n  25%, 75% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes shrinkOut {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0);\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes popInRotated {\n  from {\n    transform: scale(0) rotate(90deg) translate(0, -100%);\n  }\n  to {\n    transform: scale(1) rotate(90deg) translate(0, -100%);\n  }\n}\n.battle-screen {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n.ship-area {\n  display: none;\n}\n\n.grid-area {\n  display: flex;\n  flex-direction: column;\n  place-self: center;\n  align-items: center;\n}\n.grid-area__label {\n  font-family: \"Mil Stencil\";\n  color: #cacaca;\n  font-size: 1.7rem;\n  margin-bottom: 0.3rem;\n  text-align: center;\n}\n.grid-area__grid {\n  width: 75vmin;\n  height: 75vmin;\n}\n\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .battle-screen {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n  }\n\n  .grid-area {\n    flex-direction: row;\n  }\n  .grid-area__label {\n    margin: 0;\n    width: 6.5rem;\n  }\n\n  .footer {\n    display: none;\n  }\n}\n@media screen and (min-width: 1000px) {\n  .battle-screen {\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .grid-area__grid {\n    width: 400px;\n    height: 400px;\n  }\n  .grid-area__grid .grid-container__element--clickable {\n    cursor: crosshair;\n  }\n\n  .ship-area {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ship-area--Player {\n    grid-area: 2;\n  }\n  .ship-area__label {\n    font-family: \"Mil Stencil\";\n    color: #969696;\n    font-size: 1.1rem;\n    margin-bottom: 0.2rem;\n  }\n  .ship-area__list {\n    background-color: #cacaca;\n    padding: 1rem;\n    width: fit-content;\n    border: solid 2px #969696;\n    border-radius: 10px;\n  }\n  .ship-area__img {\n    width: 100px;\n    height: 41px;\n  }\n  .ship-area .sunk {\n    animation: shrinkOut 600ms;\n    animation-fill-mode: forwards;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/battle-screen.scss","webpack://./src/styles/animations.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;ACPA;EACE;IACE,oBAAA;IACA,UAAA;EDSF;ECPA;IAEE,UAAA;EDQF;ECNA;IACE,mBAAA;IACA,UAAA;EDQF;AACF;ACNA;EACE;IACE,mBAAA;EDQF;ECNA;IACE,mBAAA;EDQF;AACF;ACNA;EACE;IACE,mBAAA;EDQF;ECNA;IACE,mBAAA;EDQF;AACF;ACNA;EACE;IACE,qDAAA;EDQF;ECNA;IACE,qDAAA;EDQF;AACF;AAzCA;EACE,aAAA;EACA,kCAAA;EACA,0BAAA;EACA,YAAA;EACA,WAAA;AA2CF;;AAzCA;EACE,aAAA;AA4CF;;AA1CA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AA6CF;AA5CE;EACE,0BAAA;EACA,cDRc;ECSd,iBAAA;EACA,qBAAA;EACA,kBAAA;AA8CJ;AA5CE;EAEE,aADY;EAEZ,cAFY;AA+ChB;;AA1CA;EACE;IACE,qCAAA;IACA,uBAAA;EA6CF;;EA3CA;IACE,mBAAA;EA8CF;EA7CE;IACE,SAAA;IACA,aAAA;EA+CJ;;EA5CA;IACE,aAAA;EA+CF;AACF;AA5CA;EACE;IACE,kCAAA;IACA,qCAAA;EA8CF;;EA3CE;IACE,YAAA;IACA,aAAA;EA8CJ;EA7CI;IACE,iBAAA;EA+CN;;EA3CA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EA8CF;EA7CE;IACE,YAAA;EA+CJ;EA7CE;IACE,0BAAA;IACA,cD3De;IC4Df,iBAAA;IACA,qBAAA;EA+CJ;EA7CE;IACE,yBDjEY;ICkEZ,aAAA;IACA,kBAAA;IACA,yBAAA;IACA,mBAAA;EA+CJ;EA7CE;IACE,YAAA;IACA,YAAA;EA+CJ;EA7CE;IACE,0BAAA;IACA,6BAAA;EA+CJ;AACF","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n@import \"./animations.scss\";\n\n.battle-screen {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: 1fr;\n  height: 100%;\n  width: 100%;\n}\n.ship-area {\n  display: none;\n}\n.grid-area {\n  display: flex;\n  flex-direction: column;\n  place-self: center;\n  align-items: center;\n  &__label {\n    font-family: \"Mil Stencil\";\n    color: $navy-gray-chain;\n    font-size: 1.7rem;\n    margin-bottom: 0.3rem;\n    text-align: center;\n  }\n  &__grid {\n    $vmin-size: 75vmin;\n    width: $vmin-size;\n    height: $vmin-size;\n  }\n}\n@media screen and (orientation: landscape) and (max-height: 500px) {\n  .battle-screen {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n  }\n  .grid-area {\n    flex-direction: row;\n    &__label {\n      margin: 0;\n      width: 6.5rem;\n    }\n  }\n  .footer {\n    display: none;\n  }\n}\n//desktop styling\n@media screen and (min-width: 1000px) {\n  .battle-screen {\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .grid-area {\n    &__grid {\n      width: 400px;\n      height: 400px;\n      .grid-container__element--clickable {\n        cursor: crosshair;\n      }\n    }\n  }\n  .ship-area {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    &--Player {\n      grid-area: 2;\n    }\n    &__label {\n      font-family: \"Mil Stencil\";\n      color: $navy-chain-outline;\n      font-size: 1.1rem;\n      margin-bottom: 0.2rem;\n    }\n    &__list {\n      background-color: $navy-gray-chain;\n      padding: 1rem;\n      width: fit-content;\n      border: solid 2px $navy-chain-outline;\n      border-radius: 10px;\n    }\n    &__img {\n      width: 100px;\n      height: 41px;\n    }\n    .sunk {\n      animation: shrinkOut 600ms;\n      animation-fill-mode: forwards;\n    }\n  }\n}\n","@keyframes dropIn {\n  0% {\n    transform: scale(10);\n    opacity: 0;\n  }\n  25%,\n  75% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes shrinkOut {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0);\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes popInRotated {\n  from {\n    transform: scale(0) rotate(90deg) translate(0, -100%);\n  }\n  to {\n    transform: scale(1) rotate(90deg) translate(0, -100%);\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@keyframes dropIn {\n  0% {\n    transform: scale(10);\n    opacity: 0;\n  }\n  25%, 75% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes shrinkOut {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0);\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes popInRotated {\n  from {\n    transform: scale(0) rotate(90deg) translate(0, -100%);\n  }\n  to {\n    transform: scale(1) rotate(90deg) translate(0, -100%);\n  }\n}\n.button {\n  font-size: 1.2rem;\n  padding: 0.4rem 1rem;\n  background-color: #cacaca;\n  border-radius: 50px;\n  border: none;\n  border: #969696 solid 2px;\n}\n\n.grid-container {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-container__element {\n  position: relative;\n  border: solid 1px #969696;\n  background-color: #cacaca;\n}\n.grid-container__element--clickable {\n  cursor: pointer;\n}\n.grid-container__element .attack-grid {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  z-index: 2;\n}\n.grid-container__element .attack-grid__bomb {\n  z-index: 3;\n  animation: dropIn 600ms;\n}\n.grid-container__ship {\n  position: absolute;\n  height: 100%;\n  z-index: 1;\n  animation: popIn 500ms;\n  cursor: default;\n}\n.grid-container__ship--rotated {\n  transform-origin: top left;\n  transform: rotate(90deg) translate(0, -100%);\n  animation: popInRotated 600ms;\n}\n\n.ship-index-0 {\n  width: 500%;\n}\n.ship-index-1 {\n  width: 400%;\n}\n.ship-index-2 {\n  width: 300%;\n}\n.ship-index-3, .ship-index-4 {\n  width: 200%;\n}\n.ship-index-5, .ship-index-6 {\n  width: 100%;\n}\n\n.clickable {\n  cursor: pointer;\n  transition: 300ms;\n}\n.clickable:hover {\n  transform: scale(1.08);\n  transition: 300ms;\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/components.scss","webpack://./src/styles/animations.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;ACPA;EACE;IACE,oBAAA;IACA,UAAA;EDSF;ECPA;IAEE,UAAA;EDQF;ECNA;IACE,mBAAA;IACA,UAAA;EDQF;AACF;ACNA;EACE;IACE,mBAAA;EDQF;ECNA;IACE,mBAAA;EDQF;AACF;ACNA;EACE;IACE,mBAAA;EDQF;ECNA;IACE,mBAAA;EDQF;AACF;ACNA;EACE;IACE,qDAAA;EDQF;ECNA;IACE,qDAAA;EDQF;AACF;AAzCA;EACE,iBAAA;EACA,oBAAA;EACA,yBDMgB;ECLhB,mBAAA;EACA,YAAA;EACA,yBAAA;AA2CF;;AAzCA;EACE,aAAA;EACA,kBAAA;EACA,sCAAA;EACA,mCAAA;AA4CF;AA3CE;EACE,kBAAA;EACA,yBAAA;EACA,yBDPc;ACoDlB;AA5CI;EACE,eAAA;AA8CN;AA5CI;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;AA8CN;AA7CM;EACE,UAAA;EACA,uBAAA;AA+CR;AA3CE;EACE,kBAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,eAAA;AA6CJ;AA5CI;EACE,0BAAA;EACA,4CAAA;EACA,6BAAA;AA8CN;;AAzCE;EACE,WAAA;AA4CJ;AA1CE;EACE,WAAA;AA4CJ;AA1CE;EACE,WAAA;AA4CJ;AA1CE;EAEE,WAAA;AA2CJ;AAzCE;EAEE,WAAA;AA0CJ;;AAvCA;EACE,eAAA;EACA,iBAAA;AA0CF;AAzCE;EACE,sBAAA;EACA,iBAAA;AA2CJ","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"../styles/variables.scss\";\n@import \"../styles/animations.scss\";\n\n.button {\n  font-size: 1.2rem;\n  padding: 0.4rem 1rem;\n  background-color: $navy-gray-chain;\n  border-radius: 50px;\n  border: none;\n  border: $navy-chain-outline solid 2px;\n}\n.grid-container {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  &__element {\n    position: relative;\n    border: solid 1px $navy-chain-outline;\n    background-color: $navy-gray-chain;\n    &--clickable {\n      cursor: pointer;\n    }\n    .attack-grid {\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      user-select: none;\n      z-index: 2;\n      &__bomb {\n        z-index: 3;\n        animation: dropIn 600ms;\n      }\n    }\n  }\n  &__ship {\n    position: absolute;\n    height: 100%;\n    z-index: 1;\n    animation: popIn 500ms;\n    cursor: default;\n    &--rotated {\n      transform-origin: top left;\n      transform: rotate(90deg) translate(0, -100%);\n      animation: popInRotated 600ms;\n    }\n  }\n}\n.ship-index {\n  &-0 {\n    width: 500%;\n  }\n  &-1 {\n    width: 400%;\n  }\n  &-2 {\n    width: 300%;\n  }\n  &-3,\n  &-4 {\n    width: 200%;\n  }\n  &-5,\n  &-6 {\n    width: 100%;\n  }\n}\n.clickable {\n  cursor: pointer;\n  transition: 300ms;\n  &:hover {\n    transform: scale(1.08);\n    transition: 300ms;\n  }\n}\n","@keyframes dropIn {\n  0% {\n    transform: scale(10);\n    opacity: 0;\n  }\n  25%,\n  75% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes shrinkOut {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0);\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes popInRotated {\n  from {\n    transform: scale(0) rotate(90deg) translate(0, -100%);\n  }\n  to {\n    transform: scale(1) rotate(90deg) translate(0, -100%);\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Special Elite\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.content {\n  position: relative;\n}\n\n.game-over {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  background-color: #cacaca;\n  padding: 1.6rem;\n  width: 18rem;\n  height: 13rem;\n  border: solid 3px #969696;\n  border-radius: 15px;\n  opacity: 0.92;\n  align-items: center;\n  justify-content: space-evenly;\n  z-index: 9;\n}\n.game-over__title {\n  font-family: \"Special Elite\";\n  font-size: 3.4rem;\n  color: #73391f;\n}\n.game-over__winner-msg {\n  font-family: \"Mil Stencil\";\n  font-size: 2rem;\n  color: #765f3a;\n}\n.game-over__button-field {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/game-over-screen.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,4CAAA;ACCF;ADCA;EACE,0BAAA;EACA,4CAAA;ACCF;AALA;EACE,kBAAA;AAOF;;AALA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,UAAA;AAQF;AAPE;EACE,4BAAA;EACA,iBAAA;EACA,cDXe;ACoBnB;AAPE;EACE,0BAAA;EACA,eAAA;EACA,cDnBiB;AC4BrB;AAPE;EACE,aAAA;EACA,WAAA;EACA,6BAAA;AASJ","sourcesContent":["@font-face {\n  font-family: \"Special Elite\";\n  src: url(\"../fonts/SpecialElite-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Mil Stencil\";\n  src: url(\"../fonts/BlackOpsOne-Regular.ttf\");\n}\n\n$navy-blue: #062d6a;\n$navy-gold: #feb932;\n$navy-brown-outline: #765f3a;\n$navy-gray-chain: #cacaca;\n$navy-chain-outline: #969696;\n$navy-brown-eagle: #73391f;\n","@import \"./variables.scss\";\n\n.content {\n  position: relative;\n}\n.game-over {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  background-color: $navy-gray-chain;\n  padding: 1.6rem;\n  width: 18rem;\n  height: 13rem;\n  border: solid 3px $navy-chain-outline;\n  border-radius: 15px;\n  opacity: 0.92;\n  align-items: center;\n  justify-content: space-evenly;\n  z-index: 9;\n  &__title {\n    font-family: \"Special Elite\";\n    font-size: 3.4rem;\n    color: $navy-brown-eagle;\n  }\n  &__winner-msg {\n    font-family: \"Mil Stencil\";\n    font-size: 2rem;\n    color: $navy-brown-outline;\n  }\n  &__button-field {\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _new_grid_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-grid-area */ "./src/modules/new-grid-area.js");
/* harmony import */ var _new_ship_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-ship-list */ "./src/modules/new-ship-list.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");






function battleScreen(playerFleetLocationInfo) {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  const enemyDisplayGrid = _components__WEBPACK_IMPORTED_MODULE_3__.Components.newGrid();
  addEnemyAttributesTo(enemyDisplayGrid);
  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_1__.newGridAreaFor)("Enemy", enemyDisplayGrid));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_2__.newShipListFor)("Enemy"));

  const playerDisplayGrid = _components__WEBPACK_IMPORTED_MODULE_3__.Components.newGrid();
  renderShipsOn(playerDisplayGrid);
  battleScreen.appendChild((0,_new_grid_area__WEBPACK_IMPORTED_MODULE_1__.newGridAreaFor)("Player", playerDisplayGrid));
  battleScreen.appendChild((0,_new_ship_list__WEBPACK_IMPORTED_MODULE_2__.newShipListFor)("Player"));

  function renderShipsOn(grid) {
    playerFleetLocationInfo.forEach((shipLocation) =>
      grid.addShipToGrid(shipLocation)
    );
  }

  function addEnemyAttributesTo(grid) {
    grid.setClickable();
    grid.addEventToElements("click", (e) =>
      _interface__WEBPACK_IMPORTED_MODULE_4__.Interface.enemyGridClick({
        target: e.target,
        enemyDisplayGrid,
        playerDisplayGrid,
      })
    );
    grid.setCoordinateHoverMsg("Attack coordinate");
  }
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
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");




const GRID_SIZE = 100;
function GameBoard(pName) {
  const _grid = buildGrid(GRID_SIZE);
  const _fleet = (0,_ship_fleet__WEBPACK_IMPORTED_MODULE_0__.ShipFleet)();
  const _playerName = pName;
  let _placementIndex = 0;
  let _placementAxis = "x";
  let _isNewSinkingReport = false;
  let _latestSinkingReport = {};

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

      if (shipToAttack.isSunk()) recordShipSinking();

      function recordShipSinking() {
        _latestSinkingReport = {
          coordinate: shipToAttack.getStartingCoordinate(),
          shipIndex: shipIndex,
          playerName: _playerName,
          axis: shipToAttack.getAxis(),
        };
        _isNewSinkingReport = true;
      }
    }
  };

  const generateRandomLegalAttack = () => {
    let randomCoordinate = Math.floor(Math.random() * GRID_SIZE);
    while (getCoordinateStatus(randomCoordinate).isPlayed) {
      randomCoordinate = Math.floor(Math.random() * GRID_SIZE);
    }
    return randomCoordinate;
  };

  const isFleetSunk = () => _fleet.every((ship) => ship.isSunk());

  const getIsNewSinkingReport = () => _isNewSinkingReport;

  const getLatestSinkingReport = () => {
    _isNewSinkingReport = false;
    return _latestSinkingReport;
  };

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
    generateRandomLegalAttack,
    isFleetSunk,
    getIsNewSinkingReport,
    getLatestSinkingReport,
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

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
const Game = {
  playerTurn: function ({ coordinate, enemyDisplayGrid, enemyGameBoard }) {
    enemyGameBoard.receiveAttack(coordinate);
    const isHit =
      enemyGameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
    enemyDisplayGrid.receiveAttack({ coordinate, isHit });

    if (enemyGameBoard.getIsNewSinkingReport()) {
      const report = enemyGameBoard.getLatestSinkingReport();
      eraseShipFromList(report);
      enemyDisplayGrid.addShipToGrid(report);
    }

    if (enemyGameBoard.isFleetSunk()) {
      Render.gameOverScreen({ isWinner: false });
    }
  },

  enemyTurn: function ({ playerGameBoard, playerDisplayGrid }) {

  },
};

function eraseShipFromList({ playerName, shipIndex }) {
  const ship = document.querySelector(
    `.${playerName}-ship-list-item-${shipIndex}`
  );
  ship.classList.add("sunk");
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
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ "./src/modules/game.js");





const Interface = (() => {
  const enemyGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_2__.GameBoard)("Enemy");
  enemyGameBoard.placeAllShipsAtRandomCoordinates();
  const playerGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_2__.GameBoard)("Player");
  playerGameBoard.placeAllShipsAtRandomCoordinates();

  function startGameClick() {
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.clearContent();
    _render__WEBPACK_IMPORTED_MODULE_0__.Render.placementScreen();
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
    if (enemyGameBoard.isFleetSunk() || playerGameBoard.isFleetSunk()) return;
    const coordinate = _getIndexOf(target);
    if (enemyGameBoard.getCoordinateStatus(coordinate).isPlayed) return;

    takeTurn({
      coordinate,
      displayGrid: enemyDisplayGrid,
      gameBoard: enemyGameBoard,
    });
    if (enemyGameBoard.isFleetSunk()) {
      _render__WEBPACK_IMPORTED_MODULE_0__.Render.gameOverScreen({ isWinner: true });
    }

    const legalAttack = playerGameBoard.generateRandomLegalAttack();
    console.log(legalAttack);
    takeTurn({
      coordinate: legalAttack,
      displayGrid: playerDisplayGrid,
      gameBoard: playerGameBoard,
    });
    if (playerGameBoard.isFleetSunk()) {
      _render__WEBPACK_IMPORTED_MODULE_0__.Render.gameOverScreen({ isWinner: false });
    }

    function takeTurn({ coordinate, displayGrid, gameBoard }) {
      gameBoard.receiveAttack(coordinate);
      const isHit =
        gameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
      displayGrid.receiveAttack({ coordinate, isHit });

      if (gameBoard.getIsNewSinkingReport()) {
        const report = gameBoard.getLatestSinkingReport();
        eraseShipFromList(report);
        displayGrid.addShipToGrid(report);
      }
    }
  }

  function eraseShipFromList({ playerName, shipIndex }) {
    const ship = document.querySelector(
      `.${playerName}-ship-list-item-${shipIndex}`
    );
    ship.classList.add("sunk");
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

function newGridAreaFor(playerName, grid) {
  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area", `grid-area--${playerName}`);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = `${playerName} Grid`;
  gridArea.appendChild(gridLabel);

  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

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
      gridElement.classList.add("grid-container__element--clickable");
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
      bombDrop.addEventListener("animationend", () => {
        gridElement.removeChild(bombDrop);
        callBack();
      });
      gridElement.appendChild(bombDrop);
    }

    function thenMarkHitOrMiss() {
      gridElement.classList.remove("grid-container__element--clickable");
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
/* harmony export */   "placementScreen": () => (/* binding */ placementScreen)
/* harmony export */ });
/* harmony import */ var _src_styles_placement_screen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/styles/placement-screen.scss */ "./src/styles/placement-screen.scss");
/* harmony import */ var _src_modules_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/components */ "./src/modules/components.js");
/* harmony import */ var _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/interface */ "./src/modules/interface.js");




const placementScreen = () => {
  const content = document.querySelector(".content");

  const placementScreen = document.createElement("div");
  placementScreen.classList.add("placement-screen");
  content.appendChild(placementScreen);

  const welcomeMsg = document.createElement("h1");
  welcomeMsg.classList.add("welcome-msg");
  welcomeMsg.textContent = "Welcome";
  placementScreen.appendChild(welcomeMsg);

  const directions = document.createElement("p");
  directions.classList.add("directions");
  directions.textContent =
    "Place your ships by clicking or tapping on the grid. When you are ready press continue.";
  placementScreen.appendChild(directions);

  const buttonField = document.createElement("div");
  buttonField.classList.add("button-field");
  placementScreen.appendChild(buttonField);

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
  placementScreen.appendChild(placementGrid.render());

  const continueButton = _src_modules_components__WEBPACK_IMPORTED_MODULE_1__.Components.newButton("Continue");
  continueButton.classList.add("continue");
  continueButton.addEventListener("click", _src_modules_interface__WEBPACK_IMPORTED_MODULE_2__.Interface.continueClick);
  placementScreen.appendChild(continueButton);
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
    placementScreen: _placement_screen__WEBPACK_IMPORTED_MODULE_2__.placementScreen,
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





const playerGameBoard = (0,_modules_game_board__WEBPACK_IMPORTED_MODULE_3__.GameBoard)("Player");
playerGameBoard.placeAllShipsAtRandomCoordinates();
_modules_render__WEBPACK_IMPORTED_MODULE_2__.Render.battleScreen(playerGameBoard.getFleetLocationInfo());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENtQztBQUNFOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ1A7QUFDTTs7QUFFeEM7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLHNEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckI4QjtBQUNEO0FBQ2E7QUFDTzs7QUFFakQsd0JBQXdCLDhEQUFTO0FBQ2pDO0FBQ0EsZ0VBQW1CLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9wbGFjZW1lbnQtc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5zY3NzP2FjZDQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2Nzcz9kODBiIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzcz9kNWFlIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLnNjc3M/NWYwYSIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvcGxhY2VtZW50LXNjcmVlbi5zY3NzP2Q5NzciLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3M/ZTMzMSIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvdGl0bGUtc2NyZWVuLnNjc3M/NmI3MyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlLXNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS1vdmVyLXNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9pbmRleC10by1zaGlwLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9uZXctZ3JpZC1hcmVhLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LWdyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9uZXctc2hpcC1saXN0LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvcGxhY2VtZW50LXNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAtZmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvdGl0bGUtc2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5Aa2V5ZnJhbWVzIGRyb3BJbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMjUlLCA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hyaW5rT3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluUm90YXRlZCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbn1cXG4uYmF0dGxlLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdyaWQtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ncmlkLWFyZWFfX2xhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgY29sb3I6ICNjYWNhY2E7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdyaWQtYXJlYV9fZ3JpZCB7XFxuICB3aWR0aDogNzV2bWluO1xcbiAgaGVpZ2h0OiA3NXZtaW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcblxcbiAgLmdyaWQtYXJlYSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19sYWJlbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDYuNXJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5iYXR0bGUtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG5cXG4gIC5ncmlkLWFyZWFfX2dyaWQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICB9XFxuICAuZ3JpZC1hcmVhX19ncmlkIC5ncmlkLWNvbnRhaW5lcl9fZWxlbWVudC0tY2xpY2thYmxlIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICB9XFxuXFxuICAuc2hpcC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuc2hpcC1hcmVhLS1QbGF5ZXIge1xcbiAgICBncmlkLWFyZWE6IDI7XFxuICB9XFxuICAuc2hpcC1hcmVhX19sYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgICBjb2xvcjogIzk2OTY5NjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gIH1cXG4gIC5zaGlwLWFyZWFfX2xpc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogc29saWQgMnB4ICM5Njk2OTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICAuc2hpcC1hcmVhX19pbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDFweDtcXG4gIH1cXG4gIC5zaGlwLWFyZWEgLnN1bmsge1xcbiAgICBhbmltYXRpb246IHNocmlua091dCA2MDBtcztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmF0dGxlLXNjcmVlbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FDUEE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsVUFBQTtFRFNGO0VDUEE7SUFFRSxVQUFBO0VEUUY7RUNOQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFRFFGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UsbUJBQUE7RURRRjtFQ05BO0lBQ0UsbUJBQUE7RURRRjtBQUNGO0FDTkE7RUFDRTtJQUNFLG1CQUFBO0VEUUY7RUNOQTtJQUNFLG1CQUFBO0VEUUY7QUFDRjtBQ05BO0VBQ0U7SUFDRSxxREFBQTtFRFFGO0VDTkE7SUFDRSxxREFBQTtFRFFGO0FBQ0Y7QUF6Q0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMkNGOztBQXpDQTtFQUNFLGFBQUE7QUE0Q0Y7O0FBMUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTZDRjtBQTVDRTtFQUNFLDBCQUFBO0VBQ0EsY0RSYztFQ1NkLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQThDSjtBQTVDRTtFQUVFLGFBRFk7RUFFWixjQUZZO0FBK0NoQjs7QUExQ0E7RUFDRTtJQUNFLHFDQUFBO0lBQ0EsdUJBQUE7RUE2Q0Y7O0VBM0NBO0lBQ0UsbUJBQUE7RUE4Q0Y7RUE3Q0U7SUFDRSxTQUFBO0lBQ0EsYUFBQTtFQStDSjs7RUE1Q0E7SUFDRSxhQUFBO0VBK0NGO0FBQ0Y7QUE1Q0E7RUFDRTtJQUNFLGtDQUFBO0lBQ0EscUNBQUE7RUE4Q0Y7O0VBM0NFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUE4Q0o7RUE3Q0k7SUFDRSxpQkFBQTtFQStDTjs7RUEzQ0E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBOENGO0VBN0NFO0lBQ0UsWUFBQTtFQStDSjtFQTdDRTtJQUNFLDBCQUFBO0lBQ0EsY0QzRGU7SUM0RGYsaUJBQUE7SUFDQSxxQkFBQTtFQStDSjtFQTdDRTtJQUNFLHlCRGpFWTtJQ2tFWixhQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0VBK0NKO0VBN0NFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUErQ0o7RUE3Q0U7SUFDRSwwQkFBQTtJQUNBLDZCQUFBO0VBK0NKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vYW5pbWF0aW9ucy5zY3NzXFxcIjtcXG5cXG4uYmF0dGxlLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdyaWQtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAmX19sYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgICBjb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgJl9fZ3JpZCB7XFxuICAgICR2bWluLXNpemU6IDc1dm1pbjtcXG4gICAgd2lkdGg6ICR2bWluLXNpemU7XFxuICAgIGhlaWdodDogJHZtaW4tc2l6ZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcXG4gIC5iYXR0bGUtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICB9XFxuICAuZ3JpZC1hcmVhIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgJl9fbGFiZWwge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB3aWR0aDogNi41cmVtO1xcbiAgICB9XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLy9kZXNrdG9wIHN0eWxpbmdcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5iYXR0bGUtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG4gIC5ncmlkLWFyZWEge1xcbiAgICAmX19ncmlkIHtcXG4gICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgICAuZ3JpZC1jb250YWluZXJfX2VsZW1lbnQtLWNsaWNrYWJsZSB7XFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC5zaGlwLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgJi0tUGxheWVyIHtcXG4gICAgICBncmlkLWFyZWE6IDI7XFxuICAgIH1cXG4gICAgJl9fbGFiZWwge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgICAgIGNvbG9yOiAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gICAgfVxcbiAgICAmX19saXN0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGJvcmRlcjogc29saWQgMnB4ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAmX19pbWcge1xcbiAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICBoZWlnaHQ6IDQxcHg7XFxuICAgIH1cXG4gICAgLnN1bmsge1xcbiAgICAgIGFuaW1hdGlvbjogc2hyaW5rT3V0IDYwMG1zO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSxcXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaHJpbmtPdXQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcG9wSW5Sb3RhdGVkIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5Aa2V5ZnJhbWVzIGRyb3BJbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMjUlLCA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hyaW5rT3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluUm90YXRlZCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbn1cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogIzk2OTY5NiBzb2xpZCAycHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmdyaWQtY29udGFpbmVyX19lbGVtZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM5Njk2OTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX2VsZW1lbnQtLWNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkLWNvbnRhaW5lcl9fZWxlbWVudCAuYXR0YWNrLWdyaWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX2VsZW1lbnQgLmF0dGFjay1ncmlkX19ib21iIHtcXG4gIHotaW5kZXg6IDM7XFxuICBhbmltYXRpb246IGRyb3BJbiA2MDBtcztcXG59XFxuLmdyaWQtY29udGFpbmVyX19zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IHBvcEluIDUwMG1zO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX3NoaXAtLXJvdGF0ZWQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIGFuaW1hdGlvbjogcG9wSW5Sb3RhdGVkIDYwMG1zO1xcbn1cXG5cXG4uc2hpcC1pbmRleC0wIHtcXG4gIHdpZHRoOiA1MDAlO1xcbn1cXG4uc2hpcC1pbmRleC0xIHtcXG4gIHdpZHRoOiA0MDAlO1xcbn1cXG4uc2hpcC1pbmRleC0yIHtcXG4gIHdpZHRoOiAzMDAlO1xcbn1cXG4uc2hpcC1pbmRleC0zLCAuc2hpcC1pbmRleC00IHtcXG4gIHdpZHRoOiAyMDAlO1xcbn1cXG4uc2hpcC1pbmRleC01LCAuc2hpcC1pbmRleC02IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG4uY2xpY2thYmxlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUNQQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0VEU0Y7RUNQQTtJQUVFLFVBQUE7RURRRjtFQ05BO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VEUUY7QUFDRjtBQ05BO0VBQ0U7SUFDRSxtQkFBQTtFRFFGO0VDTkE7SUFDRSxtQkFBQTtFRFFGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UsbUJBQUE7RURRRjtFQ05BO0lBQ0UsbUJBQUE7RURRRjtBQUNGO0FDTkE7RUFDRTtJQUNFLHFEQUFBO0VEUUY7RUNOQTtJQUNFLHFEQUFBO0VEUUY7QUFDRjtBQXpDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkRNZ0I7RUNMaEIsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUEyQ0Y7O0FBekNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtBQTRDRjtBQTNDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkRQYztBQ29EbEI7QUE1Q0k7RUFDRSxlQUFBO0FBOENOO0FBNUNJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBOENOO0FBN0NNO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBK0NSO0FBM0NFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQTZDSjtBQTVDSTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtBQThDTjs7QUF6Q0U7RUFDRSxXQUFBO0FBNENKO0FBMUNFO0VBQ0UsV0FBQTtBQTRDSjtBQTFDRTtFQUNFLFdBQUE7QUE0Q0o7QUExQ0U7RUFFRSxXQUFBO0FBMkNKO0FBekNFO0VBRUUsV0FBQTtBQTBDSjs7QUF2Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUEwQ0Y7QUF6Q0U7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBMkNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4uL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcXFwiO1xcblxcbi5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAkbmF2eS1jaGFpbi1vdXRsaW5lIHNvbGlkIDJweDtcXG59XFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgJl9fZWxlbWVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJG5hdnktY2hhaW4tb3V0bGluZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICAgJi0tY2xpY2thYmxlIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLmF0dGFjay1ncmlkIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgICZfX2JvbWIge1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcEluIDYwMG1zO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgJl9fc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBhbmltYXRpb246IHBvcEluIDUwMG1zO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICYtLXJvdGF0ZWQge1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgICAgIGFuaW1hdGlvbjogcG9wSW5Sb3RhdGVkIDYwMG1zO1xcbiAgICB9XFxuICB9XFxufVxcbi5zaGlwLWluZGV4IHtcXG4gICYtMCB7XFxuICAgIHdpZHRoOiA1MDAlO1xcbiAgfVxcbiAgJi0xIHtcXG4gICAgd2lkdGg6IDQwMCU7XFxuICB9XFxuICAmLTIge1xcbiAgICB3aWR0aDogMzAwJTtcXG4gIH1cXG4gICYtMyxcXG4gICYtNCB7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgfVxcbiAgJi01LFxcbiAgJi02IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAmOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB9XFxufVxcblwiLFwiQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSxcXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaHJpbmtPdXQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcG9wSW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcG9wSW5Sb3RhdGVkIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uZm9vdGVycy1wYXJlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyZDZhO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XFxufVxcbi5mb290ZXJfX3JlcG8tbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uZm9vdGVyX19naXRodWItaWNvbiB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUFMQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkRHVTtBQ0laOztBQUxBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUY7QUFQRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFTSjtBQVBFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5mb290ZXJzLXBhcmVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5LWJsdWU7XFxufVxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICZfX3JlcG8tbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcbiAgJl9fZ2l0aHViLWljb24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIGhlaWdodDogMTNyZW07XFxuICBib3JkZXI6IHNvbGlkIDNweCAjOTY5Njk2O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG9wYWNpdHk6IDAuOTI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB6LWluZGV4OiA5O1xcbn1cXG4uZ2FtZS1vdmVyX190aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgZm9udC1zaXplOiAzLjRyZW07XFxuICBjb2xvcjogIzczMzkxZjtcXG59XFxuLmdhbWUtb3Zlcl9fd2lubmVyLW1zZyB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjNzY1ZjNhO1xcbn1cXG4uZ2FtZS1vdmVyX19idXR0b24tZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUFMQTtFQUNFLGtCQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFRRjtBQVBFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNEWGU7QUNvQm5CO0FBUEU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjRG5CaUI7QUM0QnJCO0FBUEU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBU0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHotaW5kZXg6IDk7XFxuICAmX190aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgICBjb2xvcjogJG5hdnktYnJvd24tZWFnbGU7XFxuICB9XFxuICAmX193aW5uZXItbXNnIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICRuYXZ5LWJyb3duLW91dGxpbmU7XFxuICB9XFxuICAmX19idXR0b24tZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4ucGxhY2VtZW50LXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSA1LjVmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM5Njk2OTY7XFxufVxcblxcbi5kaXJlY3Rpb25zIHtcXG4gIGNvbG9yOiAjY2FjYWNhO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5idXR0b24tZmllbGQgLmZsaXAtYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbn1cXG4uYnV0dG9uLWZpZWxkIC5mbGlwLWJ1dHRvbi0tZmxpcHBlZCB7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA5NXZtaW47XFxuICBoZWlnaHQ6IDk1dm1pbjtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcXG4gIC5wbGFjZW1lbnQtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDFmcjtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcblxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQtZ3JpZCB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgICB3aWR0aDogNjV2bWluO1xcbiAgICBoZWlnaHQ6IDY1dm1pbjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB9XFxuXFxuICAuY29udGludWUge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWluLWhlaWdodDogMzc2cHgpIHtcXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG5cXG4gIC5kaXJlY3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcGxhY2VtZW50LXNjcmVlbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUFMQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxjRENtQjtBQ09yQjs7QUFOQTtFQUNFLGNESGdCO0VDSWhCLGNBQUE7RUFDQSxrQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFVRjtBQVRFO0VBQ0UsaUJBQUE7QUFXSjtBQVZJO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQVlOOztBQVJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRTtJQUNFLG1DQUFBO0lBQ0Esb0NBQUE7RUFZRjs7RUFWQTtJQUNFLGlCQUFBO0VBYUY7O0VBWEE7SUFDRSxjQUFBO0VBY0Y7O0VBWkE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQWVGOztFQWJBO0lBQ0UsaUJBQUE7RUFnQkY7QUFDRjtBQWRBO0VBQ0U7SUFDRSxlQUFBO0VBZ0JGOztFQWRBO0lBQ0UsaUJBQUE7RUFpQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCI7XFxuXFxuLnBsYWNlbWVudC1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgNS41ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLndlbGNvbWUtbXNnIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbn1cXG4uZGlyZWN0aW9ucyB7XFxuICBjb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gIG1hcmdpbjogMCAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgLmZsaXAtYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICAgICYtLWZsaXBwZWQge1xcbiAgICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgfVxcbiAgfVxcbn1cXG4ucGxhY2VtZW50LWdyaWQge1xcbiAgd2lkdGg6IDk1dm1pbjtcXG4gIGhlaWdodDogOTV2bWluO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLnBsYWNlbWVudC1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMWZyO1xcbiAgfVxcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB9XFxuICAuZGlyZWN0aW9ucyB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgfVxcbiAgLnBsYWNlbWVudC1ncmlkIHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICAgIHdpZHRoOiA2NXZtaW47XFxuICAgIGhlaWdodDogNjV2bWluO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG4gIC5jb250aW51ZSB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzZweCkge1xcbiAgLndlbGNvbWUtbXNnIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogcHJldHRpZXItaWdub3JlICovXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDRyxxQkFBQTtBQUFKOztBQUVBLGdEQUFBO0FBRUE7O0VBRUMsY0FBQTtBQUFEOztBQUVBLG9CQUFBO0FBQ0EsZ0RBQUE7QUFDQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTs7RUFFRSxnQkFBQTtBQUVGOztBQUFBOztFQUVFLFlBQUE7QUFHRjs7QUFEQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQU1GXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG4vL3ByZXR0aWVyLWlnbm9yZVxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuLy9wcmV0dGllci1pZ25vcmVcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi50aXRsZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG4gIGNvbG9yOiAjZmViOTMyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QUFMQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0REVTtFQ0VWLG1CQUFBO0VBQ0EsNEJBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFTRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4udGl0bGUtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjlyZW07XFxuICBjb2xvcjogJG5hdnktZ29sZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbn1cXG4ucGxheS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1vdmVyLXNjcmVlbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZW1lbnQtc2NyZWVuLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aXRsZS1zY3JlZW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpdGxlLXNjcmVlbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlcy9iYXR0bGUtc2NyZWVuLnNjc3NcIjtcbmltcG9ydCB7IG5ld0dyaWRBcmVhRm9yIH0gZnJvbSBcIi4vbmV3LWdyaWQtYXJlYVwiO1xuaW1wb3J0IHsgbmV3U2hpcExpc3RGb3IgfSBmcm9tIFwiLi9uZXctc2hpcC1saXN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXR0bGVTY3JlZW4ocGxheWVyRmxlZXRMb2NhdGlvbkluZm8pIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBiYXR0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXR0bGVTY3JlZW4uY2xhc3NMaXN0LmFkZChcImJhdHRsZS1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmF0dGxlU2NyZWVuKTtcblxuICBjb25zdCBlbmVteURpc3BsYXlHcmlkID0gQ29tcG9uZW50cy5uZXdHcmlkKCk7XG4gIGFkZEVuZW15QXR0cmlidXRlc1RvKGVuZW15RGlzcGxheUdyaWQpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3R3JpZEFyZWFGb3IoXCJFbmVteVwiLCBlbmVteURpc3BsYXlHcmlkKSk7XG4gIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChuZXdTaGlwTGlzdEZvcihcIkVuZW15XCIpKTtcblxuICBjb25zdCBwbGF5ZXJEaXNwbGF5R3JpZCA9IENvbXBvbmVudHMubmV3R3JpZCgpO1xuICByZW5kZXJTaGlwc09uKHBsYXllckRpc3BsYXlHcmlkKTtcbiAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKG5ld0dyaWRBcmVhRm9yKFwiUGxheWVyXCIsIHBsYXllckRpc3BsYXlHcmlkKSk7XG4gIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChuZXdTaGlwTGlzdEZvcihcIlBsYXllclwiKSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2hpcHNPbihncmlkKSB7XG4gICAgcGxheWVyRmxlZXRMb2NhdGlvbkluZm8uZm9yRWFjaCgoc2hpcExvY2F0aW9uKSA9PlxuICAgICAgZ3JpZC5hZGRTaGlwVG9HcmlkKHNoaXBMb2NhdGlvbilcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRW5lbXlBdHRyaWJ1dGVzVG8oZ3JpZCkge1xuICAgIGdyaWQuc2V0Q2xpY2thYmxlKCk7XG4gICAgZ3JpZC5hZGRFdmVudFRvRWxlbWVudHMoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIEludGVyZmFjZS5lbmVteUdyaWRDbGljayh7XG4gICAgICAgIHRhcmdldDogZS50YXJnZXQsXG4gICAgICAgIGVuZW15RGlzcGxheUdyaWQsXG4gICAgICAgIHBsYXllckRpc3BsYXlHcmlkLFxuICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuc2V0Q29vcmRpbmF0ZUhvdmVyTXNnKFwiQXR0YWNrIGNvb3JkaW5hdGVcIik7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9jb21wb25lbnRzLnNjc3NcIjtcbmltcG9ydCB7IG5ld0dyaWQgfSBmcm9tIFwiLi9uZXctZ3JpZFwiO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9ICgoKSA9PiB7XG4gIGNvbnN0IG5ld0J1dHRvbiA9IChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIiwgXCJjbGlja2FibGVcIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5ld0J1dHRvbixcbiAgICBuZXdHcmlkLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFNoaXBGbGVldCB9IGZyb20gXCIuL3NoaXAtZmxlZXRcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmNvbnN0IEdSSURfU0laRSA9IDEwMDtcbmV4cG9ydCBmdW5jdGlvbiBHYW1lQm9hcmQocE5hbWUpIHtcbiAgY29uc3QgX2dyaWQgPSBidWlsZEdyaWQoR1JJRF9TSVpFKTtcbiAgY29uc3QgX2ZsZWV0ID0gU2hpcEZsZWV0KCk7XG4gIGNvbnN0IF9wbGF5ZXJOYW1lID0gcE5hbWU7XG4gIGxldCBfcGxhY2VtZW50SW5kZXggPSAwO1xuICBsZXQgX3BsYWNlbWVudEF4aXMgPSBcInhcIjtcbiAgbGV0IF9pc05ld1NpbmtpbmdSZXBvcnQgPSBmYWxzZTtcbiAgbGV0IF9sYXRlc3RTaW5raW5nUmVwb3J0ID0ge307XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZVN0YXR1cyA9IChpbmRleCkgPT4gX2dyaWRbaW5kZXhdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydGluZ0Nvb3JkaW5hdGUsIGF4aXMgPSBnZXRQbGFjZW1lbnRBeGlzKCkpID0+IHtcbiAgICBzZXRTaGlwQ29vcmRpbmF0ZXMoKTtcbiAgICB1cGRhdGVHcmlkV2l0aFNoaXBJbmRleCgpO1xuICAgIF9wbGFjZW1lbnRJbmRleCsrO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlR3JpZFdpdGhTaGlwSW5kZXgoKSB7XG4gICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBfZmxlZXRbX3BsYWNlbWVudEluZGV4XS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goXG4gICAgICAgIChjb29yZGluYXRlKSA9PiAoX2dyaWRbY29vcmRpbmF0ZV0uc2hpcEluZGV4ID0gX3BsYWNlbWVudEluZGV4KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgICBfZmxlZXRbX3BsYWNlbWVudEluZGV4XS5zZXRDb29yZGluYXRlcyhzdGFydGluZ0Nvb3JkaW5hdGUsIGF4aXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0lsbGVnYWxTaGlwUGxhY2VtZW50ID0gKHN0YXJ0aW5nQ29vcmRpbmF0ZSwgYXhpcykgPT4ge1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IF9wbGFjZW1lbnRJbmRleDtcbiAgICByZXR1cm4gb3ZlckZsb3dzR3JpZCgpIHx8IG92ZXJMYXBzQW5vdGhlclNoaXAoKTtcblxuICAgIGZ1bmN0aW9uIG92ZXJGbG93c0dyaWQoKSB7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gX2ZsZWV0W3NoaXBJbmRleF0uZ2V0TGVuZ3RoKCk7XG4gICAgICByZXR1cm4gb3ZlckZsb3dzR3JpZE9uWEF4aXMoKSB8fCBvdmVyRmxvd3NHcmlkT25ZQXhpcygpO1xuXG4gICAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkT25YQXhpcygpIHtcbiAgICAgICAgaWYgKGF4aXMgIT09IFwieFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZpcnN0RGlnaXRPZlN0YXJ0aW5nQ29vcmRpbmF0ZSA9IHN0YXJ0aW5nQ29vcmRpbmF0ZSAlIDEwO1xuICAgICAgICByZXR1cm4gc2hpcExlbmd0aCArIGZpcnN0RGlnaXRPZlN0YXJ0aW5nQ29vcmRpbmF0ZSAtIDEgPj0gMTA7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG92ZXJGbG93c0dyaWRPbllBeGlzKCkge1xuICAgICAgICBpZiAoYXhpcyAhPT0gXCJ5XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgZW5kT2ZTaGlwQ29vcmRpbmF0ZSA9IChzaGlwTGVuZ3RoIC0gMSkgKiAxMCArIHN0YXJ0aW5nQ29vcmRpbmF0ZTtcbiAgICAgICAgcmV0dXJuIGVuZE9mU2hpcENvb3JkaW5hdGUgPj0gX2dyaWQubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlZE9uQW5vdGhlclNoaXAocENvb3JkaW5hdGUpIHtcbiAgICAgIHJldHVybiBfZ3JpZFtwQ29vcmRpbmF0ZV0uc2hpcEluZGV4ICE9PSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdmVyTGFwc0Fub3RoZXJTaGlwKCkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXNUb0NoZWNrID0gX2ZsZWV0W3NoaXBJbmRleF0uY2hlY2tDb29yZGluYXRlcyhcbiAgICAgICAgc3RhcnRpbmdDb29yZGluYXRlLFxuICAgICAgICBheGlzXG4gICAgICApO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzVG9DaGVjay5zb21lKHBsYWNlZE9uQW5vdGhlclNoaXApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXJlQWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wbGFjZW1lbnRJbmRleCA9PT0gX2ZsZWV0Lmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoX2dyaWRbY29vcmRpbmF0ZV0uaXNQbGF5ZWQpIHJldHVybjtcbiAgICBfZ3JpZFtjb29yZGluYXRlXS5pc1BsYXllZCA9IHRydWU7XG5cbiAgICBpZiAoX2dyaWRbY29vcmRpbmF0ZV0uc2hpcEluZGV4ID09PSBcIm5vbmVcIikgcmV0dXJuO1xuICAgIGF0dGFja1NoaXAoKTtcblxuICAgIGZ1bmN0aW9uIGF0dGFja1NoaXAoKSB7XG4gICAgICBjb25zdCBzaGlwSW5kZXggPSBfZ3JpZFtjb29yZGluYXRlXS5zaGlwSW5kZXg7XG4gICAgICBjb25zdCBzaGlwVG9BdHRhY2sgPSBfZmxlZXRbc2hpcEluZGV4XTtcbiAgICAgIHNoaXBUb0F0dGFjay5oaXQoKTtcblxuICAgICAgaWYgKHNoaXBUb0F0dGFjay5pc1N1bmsoKSkgcmVjb3JkU2hpcFNpbmtpbmcoKTtcblxuICAgICAgZnVuY3Rpb24gcmVjb3JkU2hpcFNpbmtpbmcoKSB7XG4gICAgICAgIF9sYXRlc3RTaW5raW5nUmVwb3J0ID0ge1xuICAgICAgICAgIGNvb3JkaW5hdGU6IHNoaXBUb0F0dGFjay5nZXRTdGFydGluZ0Nvb3JkaW5hdGUoKSxcbiAgICAgICAgICBzaGlwSW5kZXg6IHNoaXBJbmRleCxcbiAgICAgICAgICBwbGF5ZXJOYW1lOiBfcGxheWVyTmFtZSxcbiAgICAgICAgICBheGlzOiBzaGlwVG9BdHRhY2suZ2V0QXhpcygpLFxuICAgICAgICB9O1xuICAgICAgICBfaXNOZXdTaW5raW5nUmVwb3J0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjayA9ICgpID0+IHtcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEdSSURfU0laRSk7XG4gICAgd2hpbGUgKGdldENvb3JkaW5hdGVTdGF0dXMocmFuZG9tQ29vcmRpbmF0ZSkuaXNQbGF5ZWQpIHtcbiAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcbiAgfTtcblxuICBjb25zdCBpc0ZsZWV0U3VuayA9ICgpID0+IF9mbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgY29uc3QgZ2V0SXNOZXdTaW5raW5nUmVwb3J0ID0gKCkgPT4gX2lzTmV3U2lua2luZ1JlcG9ydDtcblxuICBjb25zdCBnZXRMYXRlc3RTaW5raW5nUmVwb3J0ID0gKCkgPT4ge1xuICAgIF9pc05ld1NpbmtpbmdSZXBvcnQgPSBmYWxzZTtcbiAgICByZXR1cm4gX2xhdGVzdFNpbmtpbmdSZXBvcnQ7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKCFhcmVBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICBjb25zdCBbbGVnYWxDb29yZGluYXRlLCBsZWdhbEF4aXNdID0gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKTtcbiAgICAgIHBsYWNlU2hpcChsZWdhbENvb3JkaW5hdGUsIGxlZ2FsQXhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tTGVnYWxQbGFjZW1lbnQoKSB7XG4gICAgICBsZXQgW2Nvb3JkaW5hdGUsIGF4aXNdID0gZ2V0UmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICB3aGlsZSAoaXNJbGxlZ2FsU2hpcFBsYWNlbWVudChjb29yZGluYXRlLCBheGlzKSkge1xuICAgICAgICBbY29vcmRpbmF0ZSwgYXhpc10gPSBnZXRSYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbY29vcmRpbmF0ZSwgYXhpc107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgYXhlcyA9IFtcInhcIiwgXCJ5XCJdO1xuICAgICAgY29uc3QgcmFuZG9tQXhpcyA9IGF4ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhlcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpO1xuICAgICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21BeGlzXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxhY2VtZW50QXhpcyA9ICgpID0+IF9wbGFjZW1lbnRBeGlzO1xuXG4gIGNvbnN0IHRvZ2dsZVBsYWNlbWVudEF4aXMgPSAoKSA9PlxuICAgIChfcGxhY2VtZW50QXhpcyA9IF9wbGFjZW1lbnRBeGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCIpO1xuXG4gIGNvbnN0IHJlc2V0UGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIF9wbGFjZW1lbnRJbmRleCA9IDA7XG4gICAgX2dyaWQuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc2hpcEluZGV4ID0gXCJub25lXCIpKTtcbiAgICBfZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5yZXNldENvb3JkaW5hdGVzKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlbWVudEluZGV4ID0gKCkgPT4gX3BsYWNlbWVudEluZGV4O1xuXG4gIGNvbnN0IGdldEZsZWV0TG9jYXRpb25JbmZvID0gKCkgPT5cbiAgICBfZmxlZXQubWFwKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29vcmRpbmF0ZTogc2hpcC5nZXRTdGFydGluZ0Nvb3JkaW5hdGUoKSxcbiAgICAgICAgc2hpcEluZGV4OiBpbmRleCxcbiAgICAgICAgYXhpczogc2hpcC5nZXRBeGlzKCksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q29vcmRpbmF0ZVN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCxcbiAgICBhcmVBbGxTaGlwc1BsYWNlZCxcbiAgICBwbGFjZUFsbFNoaXBzQXRSYW5kb21Db29yZGluYXRlcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2ssXG4gICAgaXNGbGVldFN1bmssXG4gICAgZ2V0SXNOZXdTaW5raW5nUmVwb3J0LFxuICAgIGdldExhdGVzdFNpbmtpbmdSZXBvcnQsXG4gICAgZ2V0UGxhY2VtZW50QXhpcyxcbiAgICBnZXRQbGFjZW1lbnRJbmRleCxcbiAgICB0b2dnbGVQbGFjZW1lbnRBeGlzLFxuICAgIHJlc2V0UGxhY2VtZW50LFxuICAgIGdldEZsZWV0TG9jYXRpb25JbmZvLFxuICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZEdyaWQoc2l6ZSkge1xuICBsZXQgZ3JpZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIGdyaWQucHVzaChuZXdHcmlkSXRlbSgpKTtcbiAgfVxuICByZXR1cm4gZ3JpZDtcblxuICBmdW5jdGlvbiBuZXdHcmlkSXRlbSgpIHtcbiAgICByZXR1cm4geyBpc1BsYXllZDogZmFsc2UsIHNoaXBJbmRleDogXCJub25lXCIgfTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZU92ZXJTY3JlZW4oaXNXaW5uZXIpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBnYW1lT3ZlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kKGdhbWVPdmVyQ29udGFpbmVyKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlcl9fdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXJcIjtcbiAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHdpbm5lck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5uZXJNc2cuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlcl9fd2lubmVyLW1zZ1wiKTtcbiAgd2lubmVyTXNnLnRleHRDb250ZW50ID0gYFlvdSBoYXZlICR7aXNXaW5uZXIgPyBcIndvbi5cIiA6IFwibG9zdC5cIn1gO1xuICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5uZXJNc2cpO1xuXG4gIGNvbnN0IGJ1dHRvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRmllbGQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlcl9fYnV0dG9uLWZpZWxkXCIpO1xuICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25GaWVsZCk7XG5cbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJQbGF5IEFnYWluP1wiKTtcbiAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBJbnRlcmZhY2UucGxheUFnYWluQ2xpY2spO1xuICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdXR0b24pO1xuXG4gIGNvbnN0IHF1aXRCdXR0b24gPSBDb21wb25lbnRzLm5ld0J1dHRvbihcIlF1aXRcIik7XG4gIHF1aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEludGVyZmFjZS5xdWl0Q2xpY2spO1xuICBidXR0b25GaWVsZC5hcHBlbmRDaGlsZChxdWl0QnV0dG9uKTtcbn1cbiIsImV4cG9ydCBjb25zdCBHYW1lID0ge1xuICBwbGF5ZXJUdXJuOiBmdW5jdGlvbiAoeyBjb29yZGluYXRlLCBlbmVteURpc3BsYXlHcmlkLCBlbmVteUdhbWVCb2FyZCB9KSB7XG4gICAgZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICBjb25zdCBpc0hpdCA9XG4gICAgICBlbmVteUdhbWVCb2FyZC5nZXRDb29yZGluYXRlU3RhdHVzKGNvb3JkaW5hdGUpLnNoaXBJbmRleCAhPT0gXCJub25lXCI7XG4gICAgZW5lbXlEaXNwbGF5R3JpZC5yZWNlaXZlQXR0YWNrKHsgY29vcmRpbmF0ZSwgaXNIaXQgfSk7XG5cbiAgICBpZiAoZW5lbXlHYW1lQm9hcmQuZ2V0SXNOZXdTaW5raW5nUmVwb3J0KCkpIHtcbiAgICAgIGNvbnN0IHJlcG9ydCA9IGVuZW15R2FtZUJvYXJkLmdldExhdGVzdFNpbmtpbmdSZXBvcnQoKTtcbiAgICAgIGVyYXNlU2hpcEZyb21MaXN0KHJlcG9ydCk7XG4gICAgICBlbmVteURpc3BsYXlHcmlkLmFkZFNoaXBUb0dyaWQocmVwb3J0KTtcbiAgICB9XG5cbiAgICBpZiAoZW5lbXlHYW1lQm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgICAgUmVuZGVyLmdhbWVPdmVyU2NyZWVuKHsgaXNXaW5uZXI6IGZhbHNlIH0pO1xuICAgIH1cbiAgfSxcblxuICBlbmVteVR1cm46IGZ1bmN0aW9uICh7IHBsYXllckdhbWVCb2FyZCwgcGxheWVyRGlzcGxheUdyaWQgfSkge1xuXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBlcmFzZVNoaXBGcm9tTGlzdCh7IHBsYXllck5hbWUsIHNoaXBJbmRleCB9KSB7XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtwbGF5ZXJOYW1lfS1zaGlwLWxpc3QtaXRlbS0ke3NoaXBJbmRleH1gXG4gICk7XG4gIHNoaXAuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5kZXhUb1NoaXBOYW1lKGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIFwiY2FycmllclwiO1xuICBpZiAoaW5kZXggPT09IDEpIHJldHVybiBcImJhdHRsZXNoaXBcIjtcbiAgaWYgKGluZGV4ID09PSAyKSByZXR1cm4gXCJjcnVpc2VyXCI7XG4gIGlmIChpbmRleCA9PT0gMyB8fCBpbmRleCA9PT0gNCkgcmV0dXJuIFwiZGVzdHJveWVyXCI7XG4gIGlmIChpbmRleCA9PT0gNSB8fCBpbmRleCA9PT0gNikgcmV0dXJuIFwic3VibWFyaW5lXCI7XG59XG4iLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZS1ib2FyZFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcblxuZXhwb3J0IGNvbnN0IEludGVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGVuZW15R2FtZUJvYXJkID0gR2FtZUJvYXJkKFwiRW5lbXlcIik7XG4gIGVuZW15R2FtZUJvYXJkLnBsYWNlQWxsU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZChcIlBsYXllclwiKTtcbiAgcGxheWVyR2FtZUJvYXJkLnBsYWNlQWxsU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKCk7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lQ2xpY2soKSB7XG4gICAgUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIFJlbmRlci5wbGFjZW1lbnRTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsaXBTaGlwQ2xpY2soZSkge1xuICAgIHBsYXllckdhbWVCb2FyZC50b2dnbGVQbGFjZW1lbnRBeGlzKCk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImZsaXAtYnV0dG9uLS1mbGlwcGVkXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDbGljayhkaXNwbGF5R3JpZCkge1xuICAgIGRpc3BsYXlHcmlkLnJlc2V0U2hpcHMoKTtcbiAgICBwbGF5ZXJHYW1lQm9hcmQucmVzZXRQbGFjZW1lbnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVlQ2xpY2soKSB7XG4gICAgaWYgKCFwbGF5ZXJHYW1lQm9hcmQuYXJlQWxsU2hpcHNQbGFjZWQoKSkgcmV0dXJuO1xuICAgIFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBSZW5kZXIuYmF0dGxlU2NyZWVuKHBsYXllckdhbWVCb2FyZC5nZXRGbGVldExvY2F0aW9uSW5mbygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlbWVudEdyaWRDbGljayh7IHRhcmdldCwgZGlzcGxheUdyaWQgfSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBfZ2V0SW5kZXhPZih0YXJnZXQpO1xuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYXJlQWxsU2hpcHNQbGFjZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGF4aXMgPSBwbGF5ZXJHYW1lQm9hcmQuZ2V0UGxhY2VtZW50QXhpcygpO1xuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuaXNJbGxlZ2FsU2hpcFBsYWNlbWVudChjb29yZGluYXRlLCBheGlzKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IHBsYXllckdhbWVCb2FyZC5nZXRQbGFjZW1lbnRJbmRleCgpO1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSk7XG4gICAgZGlzcGxheUdyaWQuYWRkU2hpcFRvR3JpZCh7IGNvb3JkaW5hdGUsIGF4aXMsIHNoaXBJbmRleCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZW15R3JpZENsaWNrKHsgdGFyZ2V0LCBlbmVteURpc3BsYXlHcmlkLCBwbGF5ZXJEaXNwbGF5R3JpZCB9KSB7XG4gICAgaWYgKGVuZW15R2FtZUJvYXJkLmlzRmxlZXRTdW5rKCkgfHwgcGxheWVyR2FtZUJvYXJkLmlzRmxlZXRTdW5rKCkpIHJldHVybjtcbiAgICBjb25zdCBjb29yZGluYXRlID0gX2dldEluZGV4T2YodGFyZ2V0KTtcbiAgICBpZiAoZW5lbXlHYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZVN0YXR1cyhjb29yZGluYXRlKS5pc1BsYXllZCkgcmV0dXJuO1xuXG4gICAgdGFrZVR1cm4oe1xuICAgICAgY29vcmRpbmF0ZSxcbiAgICAgIGRpc3BsYXlHcmlkOiBlbmVteURpc3BsYXlHcmlkLFxuICAgICAgZ2FtZUJvYXJkOiBlbmVteUdhbWVCb2FyZCxcbiAgICB9KTtcbiAgICBpZiAoZW5lbXlHYW1lQm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgICAgUmVuZGVyLmdhbWVPdmVyU2NyZWVuKHsgaXNXaW5uZXI6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVnYWxBdHRhY2sgPSBwbGF5ZXJHYW1lQm9hcmQuZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjaygpO1xuICAgIGNvbnNvbGUubG9nKGxlZ2FsQXR0YWNrKTtcbiAgICB0YWtlVHVybih7XG4gICAgICBjb29yZGluYXRlOiBsZWdhbEF0dGFjayxcbiAgICAgIGRpc3BsYXlHcmlkOiBwbGF5ZXJEaXNwbGF5R3JpZCxcbiAgICAgIGdhbWVCb2FyZDogcGxheWVyR2FtZUJvYXJkLFxuICAgIH0pO1xuICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuaXNGbGVldFN1bmsoKSkge1xuICAgICAgUmVuZGVyLmdhbWVPdmVyU2NyZWVuKHsgaXNXaW5uZXI6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHsgY29vcmRpbmF0ZSwgZGlzcGxheUdyaWQsIGdhbWVCb2FyZCB9KSB7XG4gICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgIGNvbnN0IGlzSGl0ID1cbiAgICAgICAgZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVTdGF0dXMoY29vcmRpbmF0ZSkuc2hpcEluZGV4ICE9PSBcIm5vbmVcIjtcbiAgICAgIGRpc3BsYXlHcmlkLnJlY2VpdmVBdHRhY2soeyBjb29yZGluYXRlLCBpc0hpdCB9KTtcblxuICAgICAgaWYgKGdhbWVCb2FyZC5nZXRJc05ld1NpbmtpbmdSZXBvcnQoKSkge1xuICAgICAgICBjb25zdCByZXBvcnQgPSBnYW1lQm9hcmQuZ2V0TGF0ZXN0U2lua2luZ1JlcG9ydCgpO1xuICAgICAgICBlcmFzZVNoaXBGcm9tTGlzdChyZXBvcnQpO1xuICAgICAgICBkaXNwbGF5R3JpZC5hZGRTaGlwVG9HcmlkKHJlcG9ydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXJhc2VTaGlwRnJvbUxpc3QoeyBwbGF5ZXJOYW1lLCBzaGlwSW5kZXggfSkge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3BsYXllck5hbWV9LXNoaXAtbGlzdC1pdGVtLSR7c2hpcEluZGV4fWBcbiAgICApO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5QWdhaW5DbGljaygpIHtcbiAgICBwdWJzdWIucHVibGlzaChcInBsYXlBZ2FpbkNsaWNrXCIpO1xuICAgIFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBSZW5kZXIudGl0bGVTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aXRDbGljaygpIHtcbiAgICB3aW5kb3cub3BlbihcIlwiLCBcIl9zZWxmXCIpLmRvY3VtZW50LndyaXRlKFwiXCIpO1xuICAgIHdpbmRvdy5vcGVuKFwiXCIsIFwiX3NlbGZcIikuY2xvc2UoKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3BhbG1lcnVzYWYvYmF0dGxlLXNoaXBcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRJbmRleE9mKHBUYXJnZXQpIHtcbiAgICBpZiAoIXBUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZC1jb250YWluZXJfX2VsZW1lbnRcIikpXG4gICAgICBwVGFyZ2V0ID0gcFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihwVGFyZ2V0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRHYW1lQ2xpY2ssXG4gICAgZmxpcFNoaXBDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIGNvbnRpbnVlQ2xpY2ssXG4gICAgcGxhY2VtZW50R3JpZENsaWNrLFxuICAgIGVuZW15R3JpZENsaWNrLFxuICAgIHBsYXlBZ2FpbkNsaWNrLFxuICAgIHF1aXRDbGljayxcbiAgfTtcbn0pKCk7XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHcmlkQXJlYUZvcihwbGF5ZXJOYW1lLCBncmlkKSB7XG4gIGNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZEFyZWEuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYVwiLCBgZ3JpZC1hcmVhLS0ke3BsYXllck5hbWV9YCk7XG5cbiAgY29uc3QgZ3JpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBncmlkTGFiZWwuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYV9fbGFiZWxcIik7XG4gIGdyaWRMYWJlbC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9IEdyaWRgO1xuICBncmlkQXJlYS5hcHBlbmRDaGlsZChncmlkTGFiZWwpO1xuXG4gIGdyaWQuYWRkUGFyZW50Q2xhc3MoXCJncmlkLWFyZWFfX2dyaWRcIik7XG4gIGdyaWRBcmVhLmFwcGVuZENoaWxkKGdyaWQucmVuZGVyKCkpO1xuXG4gIHJldHVybiBncmlkQXJlYTtcbn1cbiIsImltcG9ydCB7IGluZGV4VG9TaGlwTmFtZSB9IGZyb20gXCIuL2luZGV4LXRvLXNoaXAtbmFtZVwiO1xuZXhwb3J0IGNvbnN0IG5ld0dyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IEdSSURfU0laRSA9IDEwMDtcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGluaXRHcmlkV2l0aEVsZW1lbnRzKCk7XG5cbiAgZnVuY3Rpb24gaW5pdEdyaWRXaXRoRWxlbWVudHMoKSB7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHUklEX1NJWkU7IGkrKykge1xuICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyX19lbGVtZW50XCIpO1xuICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgX21vZEVsZW1lbnRzID0gKG1vZCkgPT4gWy4uLmdyaWRDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2gobW9kKTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiBncmlkQ29udGFpbmVyO1xuXG4gIGNvbnN0IHNldENsaWNrYWJsZSA9ICgpID0+XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT4ge1xuICAgICAgZ3JpZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGVcIik7XG4gICAgfSk7XG5cbiAgY29uc3Qgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnID0gKG1lc3NhZ2UpID0+IHtcbiAgICBfbW9kRWxlbWVudHMoXG4gICAgICAoZ3JpZEVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICAoZ3JpZEVsZW1lbnQudGl0bGUgPSBgJHttZXNzYWdlfSAke3hZQ29vcmRpbmF0ZShpbmRleCl9YClcbiAgICApO1xuXG4gICAgZnVuY3Rpb24geFlDb29yZGluYXRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gYCgkeyhpbmRleCAlIDEwKSArIDF9LCAke01hdGguZmxvb3IoaW5kZXggLyAxMCArIDEpfSlgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQYXJlbnRDbGFzcyA9IChjbGFzc05hbWUpID0+IGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIGNvbnN0IGFkZENoaWxkQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT4gZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBhZGRFdmVudFRvRWxlbWVudHMgPSAocEV2ZW50VHlwZSwgcEV2ZW50KSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT5cbiAgICAgIGdyaWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocEV2ZW50VHlwZSwgcEV2ZW50KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcFRvR3JpZCA9ICh7IGNvb3JkaW5hdGUsIHNoaXBJbmRleCwgYXhpcyB9KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJfX3NoaXBcIiwgYHNoaXAtaW5kZXgtJHtzaGlwSW5kZXh9YCk7XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSBzaGlwLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lcl9fc2hpcC0tcm90YXRlZFwiKTtcbiAgICBzaGlwLnNyYyA9IGAvc3JjL2ltZ3MvJHtpbmRleFRvU2hpcE5hbWUoc2hpcEluZGV4KX0ucG5nYDtcbiAgICBncmlkQ29udGFpbmVyLmNoaWxkcmVuW2Nvb3JkaW5hdGVdLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIGdyaWRDb250YWluZXIuY2hpbGRyZW5bY29vcmRpbmF0ZV0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfTtcblxuICBjb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+IChncmlkRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCIpKTtcbiAgICBzZXRDbGlja2FibGUoKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHsgY29vcmRpbmF0ZSwgaXNIaXQgfSkgPT4ge1xuICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZ3JpZENvbnRhaW5lci5jaGlsZHJlbltjb29yZGluYXRlXTtcbiAgICBwbGF5Qm9tYkFuaW1hdGlvbih0aGVuTWFya0hpdE9yTWlzcyk7XG5cbiAgICBmdW5jdGlvbiBwbGF5Qm9tYkFuaW1hdGlvbihjYWxsQmFjaykge1xuICAgICAgY29uc3QgYm9tYkRyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm9tYkRyb3AuY2xhc3NMaXN0LmFkZChcImF0dGFjay1ncmlkXCIsIFwiYXR0YWNrLWdyaWRfX2JvbWJcIik7XG4gICAgICBib21iRHJvcC50ZXh0Q29udGVudCA9IFwi8J+So1wiO1xuICAgICAgYm9tYkRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGdyaWRFbGVtZW50LnJlbW92ZUNoaWxkKGJvbWJEcm9wKTtcbiAgICAgICAgY2FsbEJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9tYkRyb3ApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW5NYXJrSGl0T3JNaXNzKCkge1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGVcIik7XG4gICAgICBjb25zdCBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1hcmsuY2xhc3NMaXN0LmFkZChcImF0dGFjay1ncmlkXCIpO1xuICAgICAgbWFyay50ZXh0Q29udGVudCA9IGlzSGl0ID8gXCLwn5KlXCIgOiBcIvCfkqZcIjtcbiAgICAgIGdyaWRFbGVtZW50LmFwcGVuZENoaWxkKG1hcmspO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBzZXRDbGlja2FibGUsXG4gICAgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnLFxuICAgIGFkZFBhcmVudENsYXNzLFxuICAgIGFkZENoaWxkQ2xhc3MsXG4gICAgYWRkRXZlbnRUb0VsZW1lbnRzLFxuICAgIGFkZFNoaXBUb0dyaWQsXG4gICAgcmVzZXRTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGluZGV4VG9TaGlwTmFtZSB9IGZyb20gXCIuL2luZGV4LXRvLXNoaXAtbmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2hpcExpc3RGb3IocGxheWVyTmFtZSkge1xuICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFcIiwgYHNoaXAtYXJlYS0tJHtwbGF5ZXJOYW1lfWApO1xuXG4gIGNvbnN0IHNoaXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc2hpcExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFfX2xhYmVsXCIpO1xuICBzaGlwTGFiZWwudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSBTaGlwc2A7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBMYWJlbCk7XG5cbiAgY29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHNoaXBMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFfX2xpc3RcIik7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBMaXN0KTtcblxuICBhZGRTaGlwc1RvKHNoaXBMaXN0KTtcblxuICByZXR1cm4gc2hpcEFyZWE7XG4gIGZ1bmN0aW9uIGFkZFNoaXBzVG8oc2hpcExpc3QpIHtcbiAgICBjb25zdCBOVU1fU0hJUFNfSU5fRkxFRVQgPSA3O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NISVBTX0lOX0ZMRUVUOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgc2hpcEl0ZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJzaGlwLWFyZWFfX2l0ZW1cIixcbiAgICAgICAgYCR7cGxheWVyTmFtZX0tc2hpcC1saXN0LWl0ZW0tJHtpfWBcbiAgICAgICk7XG4gICAgICBzaGlwTGlzdC5hcHBlbmRDaGlsZChzaGlwSXRlbSk7XG5cbiAgICAgIGNvbnN0IHNoaXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgc2hpcEltZy5zcmMgPSBgL3NyYy9pbWdzLyR7aW5kZXhUb1NoaXBOYW1lKGkpfS5wbmdgO1xuICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhX19pbWdcIik7XG4gICAgICBzaGlwSXRlbS5hcHBlbmRDaGlsZChzaGlwSW1nKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBcIi9zcmMvc3R5bGVzL3BsYWNlbWVudC1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIvc3JjL21vZHVsZXMvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi9zcmMvbW9kdWxlcy9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGFjZW1lbnRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZW1lbnRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhY2VtZW50U2NyZWVuKTtcblxuICBjb25zdCB3ZWxjb21lTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB3ZWxjb21lTXNnLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLW1zZ1wiKTtcbiAgd2VsY29tZU1zZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZVwiO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQod2VsY29tZU1zZyk7XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25zXCIpO1xuICBkaXJlY3Rpb25zLnRleHRDb250ZW50ID1cbiAgICBcIlBsYWNlIHlvdXIgc2hpcHMgYnkgY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgZ3JpZC4gV2hlbiB5b3UgYXJlIHJlYWR5IHByZXNzIGNvbnRpbnVlLlwiO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XG5cbiAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWZpZWxkXCIpO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9uRmllbGQpO1xuXG4gIGNvbnN0IGZsaXBTaGlwQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJGbGlwIFNoaXBcIik7XG4gIGZsaXBTaGlwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWJ1dHRvblwiKTtcbiAgZmxpcFNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEludGVyZmFjZS5mbGlwU2hpcENsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQoZmxpcFNoaXBCdXR0b24pO1xuXG4gIGNvbnN0IHJlc2V0ID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJSZXNldFwiKTtcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEludGVyZmFjZS5yZXNldENsaWNrKHBsYWNlbWVudEdyaWQpKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gIGNvbnN0IHBsYWNlbWVudEdyaWQgPSBDb21wb25lbnRzLm5ld0dyaWQoKTtcbiAgcGxhY2VtZW50R3JpZC5zZXRDbGlja2FibGUoKTtcbiAgcGxhY2VtZW50R3JpZC5hZGRQYXJlbnRDbGFzcyhcInBsYWNlbWVudC1ncmlkXCIpO1xuICBwbGFjZW1lbnRHcmlkLnNldENvb3JkaW5hdGVIb3Zlck1zZyhcIlBsYWNlIFNoaXAgYXRcIik7XG4gIHBsYWNlbWVudEdyaWQuYWRkRXZlbnRUb0VsZW1lbnRzKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgSW50ZXJmYWNlLnBsYWNlbWVudEdyaWRDbGljayh7XG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgZGlzcGxheUdyaWQ6IHBsYWNlbWVudEdyaWQsXG4gICAgfSlcbiAgKTtcbiAgcGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKHBsYWNlbWVudEdyaWQucmVuZGVyKCkpO1xuXG4gIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJDb250aW51ZVwiKTtcbiAgY29udGludWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRpbnVlXCIpO1xuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLmNvbnRpbnVlQ2xpY2spO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xufTtcbiIsImV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9TdWIpIHtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0Z1bmNUb1N1Yik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFja0Z1bmNUb1VuU3ViKSB7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoY2FsbGJhY2tGdW5jID0+IGNhbGxiYWNrRnVuYyAhPT0gY2FsbGJhY2tGdW5jVG9VblN1Yik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFja0Z1bmMgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9OyIsImltcG9ydCB7IGJhdHRsZVNjcmVlbiB9IGZyb20gXCIuL2JhdHRsZS1zY3JlZW5cIjtcbmltcG9ydCB7IHRpdGxlU2NyZWVuIH0gZnJvbSBcIi4vdGl0bGUtc2NyZWVuXCI7XG5pbXBvcnQgeyBwbGFjZW1lbnRTY3JlZW4gfSBmcm9tIFwiLi9wbGFjZW1lbnQtc2NyZWVuXCI7XG5pbXBvcnQgeyBnYW1lT3ZlclNjcmVlbiB9IGZyb20gXCIuL2dhbWUtb3Zlci1zY3JlZW5cIjtcblxuZXhwb3J0IGNvbnN0IFJlbmRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS50ZXh0Q29udGVudCA9IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgYmF0dGxlU2NyZWVuLFxuICAgIHRpdGxlU2NyZWVuLFxuICAgIHBsYWNlbWVudFNjcmVlbixcbiAgICBnYW1lT3ZlclNjcmVlbixcbiAgICBjbGVhckNvbnRlbnQsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9tb2R1bGVzL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IFNoaXBGbGVldCA9ICgpID0+IFtcbiAgU2hpcCg1KSxcbiAgU2hpcCg0KSxcbiAgU2hpcCgzKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgxKSxcbiAgU2hpcCgxKSxcbl07XG4iLCJleHBvcnQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdFBvaW50cyA9IGxlbmd0aDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gIGxldCBfYXhpcyA9IFwiXCI7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc3VuaztcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IGNvb3JkaW5hdGVzO1xuICBjb25zdCBnZXRTdGFydGluZ0Nvb3JkaW5hdGUgPSAoKSA9PiBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgZ2V0QXhpcyA9ICgpID0+IF9heGlzO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRQb2ludHMtLTtcbiAgICBpZiAoaGl0UG9pbnRzID09PSAwKSBzdW5rID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZGluYXRlcyA9IChwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpID0+IHtcbiAgICBfYXhpcyA9IHBBeGlzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwQXhpcyA9PT0gXCJ5XCIpIGNvb3JkaW5hdGVzLnB1c2gocFN0YXJ0aW5nUG9zaXRpb24gKyBpICogMTApO1xuICAgICAgZWxzZSBjb29yZGluYXRlcy5wdXNoKHBTdGFydGluZ1Bvc2l0aW9uICsgaSk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgcmVzZXRDb29yZGluYXRlcyA9ICgpID0+IChjb29yZGluYXRlcyA9IFtdKTtcblxuICAvLyBjaGVjayB3aGF0IGNvb3JkaW5hdGVzIHdvdWxkIGJlIHdpdGhvdXQgc2V0dGluZyB0aGVtXG4gIGNvbnN0IGNoZWNrQ29vcmRpbmF0ZXMgPSAocFN0YXJ0aW5nUG9zaXRpb24sIHBBeGlzKSA9PiB7XG4gICAgc2V0Q29vcmRpbmF0ZXMocFN0YXJ0aW5nUG9zaXRpb24sIHBBeGlzKTtcbiAgICBjb25zdCBoeXBvQ29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcygpO1xuICAgIHJlc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICByZXR1cm4gaHlwb0Nvb3JkaW5hdGVzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGlzU3VuayxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0U3RhcnRpbmdDb29yZGluYXRlLFxuICAgIGdldEF4aXMsXG4gICAgaGl0LFxuICAgIHNldENvb3JkaW5hdGVzLFxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsXG4gICAgcmVzZXRDb29yZGluYXRlcyxcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy90aXRsZS1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgdGl0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtc2NyZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlU2NyZWVuKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICB0aXRsZVNjcmVlbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGxheUJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiU3RhcnQgR2FtZVwiKTtcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLnN0YXJ0R2FtZUNsaWNrKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGxheS1idXR0b25cIik7XG5cbiAgdGl0bGVTY3JlZW4uYXBwZW5kQ2hpbGQocGxheUJ1dHRvbik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlcy9mb290ZXIuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXJcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZS1ib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoXCJQbGF5ZXJcIik7XG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcblJlbmRlci5iYXR0bGVTY3JlZW4ocGxheWVyR2FtZUJvYXJkLmdldEZsZWV0TG9jYXRpb25JbmZvKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==