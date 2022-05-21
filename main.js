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




function gameOverScreen({ isWinner }) {
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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");


const Game = (() => {
  const playerTurn = ({ coordinate, enemyDisplayGrid, enemyGameBoard }) => {
    takeTurn({
      coordinate,
      displayGrid: enemyDisplayGrid,
      gameBoard: enemyGameBoard,
    });
    if (enemyGameBoard.isFleetSunk()) {
      _render__WEBPACK_IMPORTED_MODULE_0__.Render.gameOverScreen({ isWinner: true });
    }
  };

  const enemyTurn = ({ playerGameBoard, playerDisplayGrid }) => {
    const legalAttack = playerGameBoard.generateRandomLegalAttack();
    takeTurn({
      coordinate: legalAttack,
      displayGrid: playerDisplayGrid,
      gameBoard: playerGameBoard,
      isPlayer: true,
    });
    if (playerGameBoard.isFleetSunk()) {
      _render__WEBPACK_IMPORTED_MODULE_0__.Render.gameOverScreen({ isWinner: false });
    }
  };

  function takeTurn({ coordinate, displayGrid, gameBoard, isPlayer }) {
    gameBoard.receiveAttack(coordinate);
    const isHit =
      gameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
    displayGrid.receiveAttack({ coordinate, isHit });

    if (gameBoard.getIsNewSinkingReport()) {
      const report = gameBoard.getLatestSinkingReport();
      eraseShipFromList(report);
      if (!isPlayer) displayGrid.addShipToGrid(report);
    }

    function eraseShipFromList({ playerName, shipIndex }) {
      const ship = document.querySelector(
        `.${playerName}-ship-list-item-${shipIndex}`
      );
      ship.classList.add("sunk");
    }
  }

  return { playerTurn, enemyTurn };
})();


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
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-board */ "./src/modules/game-board.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/modules/game.js");




const Interface = (() => {
  const enemyGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_1__.GameBoard)("Enemy");
  enemyGameBoard.placeAllShipsAtRandomCoordinates();
  const playerGameBoard = (0,_game_board__WEBPACK_IMPORTED_MODULE_1__.GameBoard)("Player");

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
    if (playerGameBoard.areAllShipsPlaced()) return;

    const coordinate = _getIndexOf(target);
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

    _game_js__WEBPACK_IMPORTED_MODULE_2__.Game.playerTurn({ coordinate, enemyDisplayGrid, enemyGameBoard });
    _game_js__WEBPACK_IMPORTED_MODULE_2__.Game.enemyTurn({ playerGameBoard, playerDisplayGrid });
  }

  function playAgainClick() {
    playerGameBoard.resetPlacement();
    enemyGameBoard.resetPlacement();
    enemyGameBoard.placeAllShipsAtRandomCoordinates();
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

/***/ }),

/***/ "./src/imgs/battleship.png":
/*!*********************************!*\
  !*** ./src/imgs/battleship.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5f06468c5f4214f480f.png";

/***/ }),

/***/ "./src/imgs/carrier.png":
/*!******************************!*\
  !*** ./src/imgs/carrier.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e913926b256ad70e5afa.png";

/***/ }),

/***/ "./src/imgs/cruiser.png":
/*!******************************!*\
  !*** ./src/imgs/cruiser.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dafa4bf4b2a43918995.png";

/***/ }),

/***/ "./src/imgs/destroyer.png":
/*!********************************!*\
  !*** ./src/imgs/destroyer.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b8915849a865524269a.png";

/***/ }),

/***/ "./src/imgs/submarine.png":
/*!********************************!*\
  !*** ./src/imgs/submarine.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ace2e5d36110a2dbc61e.png";

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
/* harmony import */ var _imgs_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/battleship.png */ "./src/imgs/battleship.png");
/* harmony import */ var _imgs_carrier_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/carrier.png */ "./src/imgs/carrier.png");
/* harmony import */ var _imgs_cruiser_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/cruiser.png */ "./src/imgs/cruiser.png");
/* harmony import */ var _imgs_destroyer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/destroyer.png */ "./src/imgs/destroyer.png");
/* harmony import */ var _imgs_submarine_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/submarine.png */ "./src/imgs/submarine.png");









_modules_render__WEBPACK_IMPORTED_MODULE_2__.Render.titleScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENtQztBQUNFOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ1A7QUFDTTs7QUFFeEM7QUFDTztBQUNQO0FBQ0EsaUJBQWlCLHNEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjhCO0FBQ0Q7QUFDYTtBQUNYO0FBQ0g7QUFDQTtBQUNFO0FBQ0E7O0FBRTlCLCtEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9iYXR0bGUtc2NyZWVuLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvcGxhY2VtZW50LXNjcmVlbi5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy90aXRsZS1zY3JlZW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzcz9hY2Q0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzLnNjc3M/ZDgwYiIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3M/ZDVhZSIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZS1vdmVyLXNjcmVlbi5zY3NzPzVmMGEiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3BsYWNlbWVudC1zY3JlZW4uc2Nzcz9kOTc3Iiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGVzL3RpdGxlLXNjcmVlbi5zY3NzPzZiNzMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2JhdHRsZS1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUtb3Zlci1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvaW5kZXgtdG8tc2hpcC1uYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LWdyaWQtYXJlYS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL25ldy1ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvbmV3LXNoaXAtbGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3BsYWNlbWVudC1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLWZsZWV0LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2R1bGVzL3RpdGxlLXNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSwgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNocmlua091dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwb3BJbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwb3BJblJvdGF0ZWQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIH1cXG59XFxuLmJhdHRsZS1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1hcmVhIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ncmlkLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZ3JpZC1hcmVhX19sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIGNvbG9yOiAjY2FjYWNhO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ncmlkLWFyZWFfX2dyaWQge1xcbiAgd2lkdGg6IDc1dm1pbjtcXG4gIGhlaWdodDogNzV2bWluO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xcbiAgLmJhdHRsZS1zY3JlZW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIH1cXG5cXG4gIC5ncmlkLWFyZWEge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLmdyaWQtYXJlYV9fbGFiZWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA2LjVyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICAuZ3JpZC1hcmVhX19ncmlkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgfVxcbiAgLmdyaWQtYXJlYV9fZ3JpZCAuZ3JpZC1jb250YWluZXJfX2VsZW1lbnQtLWNsaWNrYWJsZSB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgfVxcblxcbiAgLnNoaXAtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLnNoaXAtYXJlYS0tUGxheWVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyO1xcbiAgfVxcbiAgLnNoaXAtYXJlYV9fbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgY29sb3I6ICM5Njk2OTY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICB9XFxuICAuc2hpcC1hcmVhX19saXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjOTY5Njk2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgLnNoaXAtYXJlYV9faW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQxcHg7XFxuICB9XFxuICAuc2hpcC1hcmVhIC5zdW5rIHtcXG4gICAgYW5pbWF0aW9uOiBzaHJpbmtPdXQgNjAwbXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhdHRsZS1zY3JlZW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0VBQ0EsNENBQUE7QUNDRjtBQ1BBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7RURTRjtFQ1BBO0lBRUUsVUFBQTtFRFFGO0VDTkE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RURRRjtBQUNGO0FDTkE7RUFDRTtJQUNFLG1CQUFBO0VEUUY7RUNOQTtJQUNFLG1CQUFBO0VEUUY7QUFDRjtBQ05BO0VBQ0U7SUFDRSxtQkFBQTtFRFFGO0VDTkE7SUFDRSxtQkFBQTtFRFFGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UscURBQUE7RURRRjtFQ05BO0lBQ0UscURBQUE7RURRRjtBQUNGO0FBekNBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTJDRjs7QUF6Q0E7RUFDRSxhQUFBO0FBNENGOztBQTFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE2Q0Y7QUE1Q0U7RUFDRSwwQkFBQTtFQUNBLGNEUmM7RUNTZCxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUE4Q0o7QUE1Q0U7RUFFRSxhQURZO0VBRVosY0FGWTtBQStDaEI7O0FBMUNBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLHVCQUFBO0VBNkNGOztFQTNDQTtJQUNFLG1CQUFBO0VBOENGO0VBN0NFO0lBQ0UsU0FBQTtJQUNBLGFBQUE7RUErQ0o7O0VBNUNBO0lBQ0UsYUFBQTtFQStDRjtBQUNGO0FBNUNBO0VBQ0U7SUFDRSxrQ0FBQTtJQUNBLHFDQUFBO0VBOENGOztFQTNDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBOENKO0VBN0NJO0lBQ0UsaUJBQUE7RUErQ047O0VBM0NBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQThDRjtFQTdDRTtJQUNFLFlBQUE7RUErQ0o7RUE3Q0U7SUFDRSwwQkFBQTtJQUNBLGNEM0RlO0lDNERmLGlCQUFBO0lBQ0EscUJBQUE7RUErQ0o7RUE3Q0U7SUFDRSx5QkRqRVk7SUNrRVosYUFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQStDSjtFQTdDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBK0NKO0VBN0NFO0lBQ0UsMEJBQUE7SUFDQSw2QkFBQTtFQStDSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2FuaW1hdGlvbnMuc2Nzc1xcXCI7XFxuXFxuLmJhdHRsZS1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2hpcC1hcmVhIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ncmlkLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgJl9fbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gICZfX2dyaWQge1xcbiAgICAkdm1pbi1zaXplOiA3NXZtaW47XFxuICAgIHdpZHRoOiAkdm1pbi1zaXplO1xcbiAgICBoZWlnaHQ6ICR2bWluLXNpemU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgfVxcbiAgLmdyaWQtYXJlYSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICZfX2xhYmVsIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgd2lkdGg6IDYuNXJlbTtcXG4gICAgfVxcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi8vZGVza3RvcCBzdHlsaW5nXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAuYmF0dGxlLXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuICAuZ3JpZC1hcmVhIHtcXG4gICAgJl9fZ3JpZCB7XFxuICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgIGhlaWdodDogNDAwcHg7XFxuICAgICAgLmdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGUge1xcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICAuc2hpcC1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICYtLVBsYXllciB7XFxuICAgICAgZ3JpZC1hcmVhOiAyO1xcbiAgICB9XFxuICAgICZfX2xhYmVsIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gICAgICBjb2xvcjogJG5hdnktY2hhaW4tb3V0bGluZTtcXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICAgIH1cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgJl9faW1nIHtcXG4gICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgaGVpZ2h0OiA0MXB4O1xcbiAgICB9XFxuICAgIC5zdW5rIHtcXG4gICAgICBhbmltYXRpb246IHNocmlua091dCA2MDBtcztcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBrZXlmcmFtZXMgZHJvcEluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAyNSUsXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hyaW5rT3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluUm90YXRlZCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuQGtleWZyYW1lcyBkcm9wSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSwgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNocmlua091dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwb3BJbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwb3BJblJvdGF0ZWQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIH1cXG59XFxuLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6ICM5Njk2OTYgc29saWQgMnB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5ncmlkLWNvbnRhaW5lcl9fZWxlbWVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjOTY5Njk2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG59XFxuLmdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZC1jb250YWluZXJfX2VsZW1lbnQgLmF0dGFjay1ncmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmdyaWQtY29udGFpbmVyX19lbGVtZW50IC5hdHRhY2stZ3JpZF9fYm9tYiB7XFxuICB6LWluZGV4OiAzO1xcbiAgYW5pbWF0aW9uOiBkcm9wSW4gNjAwbXM7XFxufVxcbi5ncmlkLWNvbnRhaW5lcl9fc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBwb3BJbiA1MDBtcztcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmdyaWQtY29udGFpbmVyX19zaGlwLS1yb3RhdGVkIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICBhbmltYXRpb246IHBvcEluUm90YXRlZCA2MDBtcztcXG59XFxuXFxuLnNoaXAtaW5kZXgtMCB7XFxuICB3aWR0aDogNTAwJTtcXG59XFxuLnNoaXAtaW5kZXgtMSB7XFxuICB3aWR0aDogNDAwJTtcXG59XFxuLnNoaXAtaW5kZXgtMiB7XFxuICB3aWR0aDogMzAwJTtcXG59XFxuLnNoaXAtaW5kZXgtMywgLnNoaXAtaW5kZXgtNCB7XFxuICB3aWR0aDogMjAwJTtcXG59XFxuLnNoaXAtaW5kZXgtNSwgLnNoaXAtaW5kZXgtNiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNsaWNrYWJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuLmNsaWNrYWJsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FDUEE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EsVUFBQTtFRFNGO0VDUEE7SUFFRSxVQUFBO0VEUUY7RUNOQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFRFFGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UsbUJBQUE7RURRRjtFQ05BO0lBQ0UsbUJBQUE7RURRRjtBQUNGO0FDTkE7RUFDRTtJQUNFLG1CQUFBO0VEUUY7RUNOQTtJQUNFLG1CQUFBO0VEUUY7QUFDRjtBQ05BO0VBQ0U7SUFDRSxxREFBQTtFRFFGO0VDTkE7SUFDRSxxREFBQTtFRFFGO0FBQ0Y7QUF6Q0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJETWdCO0VDTGhCLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBMkNGOztBQXpDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7QUE0Q0Y7QUEzQ0U7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJEUGM7QUNvRGxCO0FBNUNJO0VBQ0UsZUFBQTtBQThDTjtBQTVDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQThDTjtBQTdDTTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQStDUjtBQTNDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUE2Q0o7QUE1Q0k7RUFDRSwwQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7QUE4Q047O0FBekNFO0VBQ0UsV0FBQTtBQTRDSjtBQTFDRTtFQUNFLFdBQUE7QUE0Q0o7QUExQ0U7RUFDRSxXQUFBO0FBNENKO0FBMUNFO0VBRUUsV0FBQTtBQTJDSjtBQXpDRTtFQUVFLFdBQUE7QUEwQ0o7O0FBdkNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBMENGO0FBekNFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQTJDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY2lhbCBFbGl0ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuJG5hdnktYmx1ZTogIzA2MmQ2YTtcXG4kbmF2eS1nb2xkOiAjZmViOTMyO1xcbiRuYXZ5LWJyb3duLW91dGxpbmU6ICM3NjVmM2E7XFxuJG5hdnktZ3JheS1jaGFpbjogI2NhY2FjYTtcXG4kbmF2eS1jaGFpbi1vdXRsaW5lOiAjOTY5Njk2O1xcbiRuYXZ5LWJyb3duLWVhZ2xlOiAjNzMzOTFmO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi9zdHlsZXMvYW5pbWF0aW9ucy5zY3NzXFxcIjtcXG5cXG4uYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ncmF5LWNoYWluO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogJG5hdnktY2hhaW4tb3V0bGluZSBzb2xpZCAycHg7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICZfX2VsZW1lbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICRuYXZ5LWNoYWluLW91dGxpbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICAgICYtLWNsaWNrYWJsZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5hdHRhY2stZ3JpZCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICAmX19ib21iIHtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBhbmltYXRpb246IGRyb3BJbiA2MDBtcztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gICZfX3NoaXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYW5pbWF0aW9uOiBwb3BJbiA1MDBtcztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAmLS1yb3RhdGVkIHtcXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gICAgICBhbmltYXRpb246IHBvcEluUm90YXRlZCA2MDBtcztcXG4gICAgfVxcbiAgfVxcbn1cXG4uc2hpcC1pbmRleCB7XFxuICAmLTAge1xcbiAgICB3aWR0aDogNTAwJTtcXG4gIH1cXG4gICYtMSB7XFxuICAgIHdpZHRoOiA0MDAlO1xcbiAgfVxcbiAgJi0yIHtcXG4gICAgd2lkdGg6IDMwMCU7XFxuICB9XFxuICAmLTMsXFxuICAmLTQge1xcbiAgICB3aWR0aDogMjAwJTtcXG4gIH1cXG4gICYtNSxcXG4gICYtNiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgfVxcbn1cXG5cIixcIkBrZXlmcmFtZXMgZHJvcEluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAyNSUsXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2hyaW5rT3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHBvcEluUm90YXRlZCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLmZvb3RlcnMtcGFyZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MmQ2YTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4uZm9vdGVyX19yZXBvLWxpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLmZvb3Rlcl9fZ2l0aHViLWljb24ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJER1U7QUNJWjs7QUFMQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVFGO0FBUEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBU0o7QUFQRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQVNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uZm9vdGVycy1wYXJlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eS1ibHVlO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICAmX19yZXBvLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG4gICZfX2dpdGh1Yi1pY29uIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICB3aWR0aDogMThyZW07XFxuICBoZWlnaHQ6IDEzcmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzk2OTY5NjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBvcGFjaXR5OiAwLjkyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgei1pbmRleDogOTtcXG59XFxuLmdhbWUtb3Zlcl9fdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgY29sb3I6ICM3MzM5MWY7XFxufVxcbi5nYW1lLW92ZXJfX3dpbm5lci1tc2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaWwgU3RlbmNpbFxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzc2NWYzYTtcXG59XFxuLmdhbWUtb3Zlcl9fYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBUUY7QUFQRTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRFhlO0FDb0JuQjtBQVBFO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0RuQmlCO0FDNEJyQjtBQVBFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQVNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9TcGVjaWFsRWxpdGUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4kbmF2eS1ibHVlOiAjMDYyZDZhO1xcbiRuYXZ5LWdvbGQ6ICNmZWI5MzI7XFxuJG5hdnktYnJvd24tb3V0bGluZTogIzc2NWYzYTtcXG4kbmF2eS1ncmF5LWNoYWluOiAjY2FjYWNhO1xcbiRuYXZ5LWNoYWluLW91dGxpbmU6ICM5Njk2OTY7XFxuJG5hdnktYnJvd24tZWFnbGU6ICM3MzM5MWY7XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5nYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnktZ3JheS1jaGFpbjtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIGhlaWdodDogMTNyZW07XFxuICBib3JkZXI6IHNvbGlkIDNweCAkbmF2eS1jaGFpbi1vdXRsaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG9wYWNpdHk6IDAuOTI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB6LWluZGV4OiA5O1xcbiAgJl9fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgICBmb250LXNpemU6IDMuNHJlbTtcXG4gICAgY29sb3I6ICRuYXZ5LWJyb3duLWVhZ2xlO1xcbiAgfVxcbiAgJl9fd2lubmVyLW1zZyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAkbmF2eS1icm93bi1vdXRsaW5lO1xcbiAgfVxcbiAgJl9fYnV0dG9uLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLnBsYWNlbWVudC1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgNS41ZnIgMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjOTY5Njk2O1xcbn1cXG5cXG4uZGlyZWN0aW9ucyB7XFxuICBjb2xvcjogI2NhY2FjYTtcXG4gIG1hcmdpbjogMCAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uYnV0dG9uLWZpZWxkIC5mbGlwLWJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiA1MDBtcztcXG59XFxuLmJ1dHRvbi1maWVsZCAuZmxpcC1idXR0b24tLWZsaXBwZWQge1xcbiAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5wbGFjZW1lbnQtZ3JpZCB7XFxuICB3aWR0aDogOTV2bWluO1xcbiAgaGVpZ2h0OiA5NXZtaW47XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XFxuICAucGxhY2VtZW50LXNjcmVlbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC43ZnIgYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxZnI7XFxuICB9XFxuXFxuICAud2VsY29tZS1tc2cge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIH1cXG5cXG4gIC5kaXJlY3Rpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuICB9XFxuXFxuICAucGxhY2VtZW50LWdyaWQge1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gICAgd2lkdGg6IDY1dm1pbjtcXG4gICAgaGVpZ2h0OiA2NXZtaW47XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNvbnRpbnVlIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM3NnB4KSB7XFxuICAud2VsY29tZS1tc2cge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuXFxuICAuZGlyZWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BsYWNlbWVudC1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsY0RDbUI7QUNPckI7O0FBTkE7RUFDRSxjREhnQjtFQ0loQixjQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBVUY7QUFURTtFQUNFLGlCQUFBO0FBV0o7QUFWSTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFZTjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVdGOztBQVRBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLG9DQUFBO0VBWUY7O0VBVkE7SUFDRSxpQkFBQTtFQWFGOztFQVhBO0lBQ0UsY0FBQTtFQWNGOztFQVpBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUFlRjs7RUFiQTtJQUNFLGlCQUFBO0VBZ0JGO0FBQ0Y7QUFkQTtFQUNFO0lBQ0UsZUFBQTtFQWdCRjs7RUFkQTtJQUNFLGlCQUFBO0VBaUJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiO1xcblxcbi5wbGFjZW1lbnQtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIk1pbCBTdGVuY2lsXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpIDUuNWZyIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53ZWxjb21lLW1zZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogJG5hdnktY2hhaW4tb3V0bGluZTtcXG59XFxuLmRpcmVjdGlvbnMge1xcbiAgY29sb3I6ICRuYXZ5LWdyYXktY2hhaW47XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ1dHRvbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIC5mbGlwLWJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICAmLS1mbGlwcGVkIHtcXG4gICAgICB0cmFuc2l0aW9uOiA1MDBtcztcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIH1cXG4gIH1cXG59XFxuLnBsYWNlbWVudC1ncmlkIHtcXG4gIHdpZHRoOiA5NXZtaW47XFxuICBoZWlnaHQ6IDk1dm1pbjtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcXG4gIC5wbGFjZW1lbnQtc2NyZWVuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDFmcjtcXG4gIH1cXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgfVxcbiAgLmRpcmVjdGlvbnMge1xcbiAgICBncmlkLXJvdzogMi8tMTtcXG4gIH1cXG4gIC5wbGFjZW1lbnQtZ3JpZCB7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcbiAgICB3aWR0aDogNjV2bWluO1xcbiAgICBoZWlnaHQ6IDY1dm1pbjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB9XFxuICAuY29udGludWUge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWluLWhlaWdodDogMzc2cHgpIHtcXG4gIC53ZWxjb21lLW1zZyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG4gIC5kaXJlY3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0cscUJBQUE7QUFBSjs7QUFFQSxnREFBQTtBQUVBOztFQUVDLGNBQUE7QUFBRDs7QUFFQSxvQkFBQTtBQUNBLGdEQUFBO0FBQ0E7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsZ0JBQUE7QUFFRjs7QUFBQTs7RUFFRSxZQUFBO0FBR0Y7O0FBREE7Ozs7RUFJRSxXQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFNRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuLy9wcmV0dGllci1pZ25vcmVcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbi8vcHJldHRpZXItaWdub3JlXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLyogcHJldHRpZXItaWdub3JlICovXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU3BlY2lhbEVsaXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4udGl0bGUtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjlyZW07XFxuICBjb2xvcjogI2ZlYjkzMjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90aXRsZS1zY3JlZW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsNENBQUE7QUNDRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FBTEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNERFU7RUNFVixtQkFBQTtFQUNBLDRCQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBU0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWNpYWwgRWxpdGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1NwZWNpYWxFbGl0ZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWlsIFN0ZW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbiRuYXZ5LWJsdWU6ICMwNjJkNmE7XFxuJG5hdnktZ29sZDogI2ZlYjkzMjtcXG4kbmF2eS1icm93bi1vdXRsaW5lOiAjNzY1ZjNhO1xcbiRuYXZ5LWdyYXktY2hhaW46ICNjYWNhY2E7XFxuJG5hdnktY2hhaW4tb3V0bGluZTogIzk2OTY5NjtcXG4kbmF2eS1icm93bi1lYWdsZTogIzczMzkxZjtcXG5cIixcIkBpbXBvcnQgXFxcIi4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCI7XFxuXFxuLnRpdGxlLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4udGl0bGUge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgY29sb3I6ICRuYXZ5LWdvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjaWFsIEVsaXRlXFxcIjtcXG59XFxuLnBsYXktYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlLXNjcmVlbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlLXNjcmVlbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtb3Zlci1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VtZW50LXNjcmVlbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VtZW50LXNjcmVlbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGl0bGUtc2NyZWVuLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aXRsZS1zY3JlZW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvYmF0dGxlLXNjcmVlbi5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHcmlkQXJlYUZvciB9IGZyb20gXCIuL25ldy1ncmlkLWFyZWFcIjtcbmltcG9ydCB7IG5ld1NoaXBMaXN0Rm9yIH0gZnJvbSBcIi4vbmV3LXNoaXAtbGlzdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYmF0dGxlU2NyZWVuKHBsYXllckZsZWV0TG9jYXRpb25JbmZvKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgYmF0dGxlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmF0dGxlU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGUtc2NyZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJhdHRsZVNjcmVlbik7XG5cbiAgY29uc3QgZW5lbXlEaXNwbGF5R3JpZCA9IENvbXBvbmVudHMubmV3R3JpZCgpO1xuICBhZGRFbmVteUF0dHJpYnV0ZXNUbyhlbmVteURpc3BsYXlHcmlkKTtcbiAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKG5ld0dyaWRBcmVhRm9yKFwiRW5lbXlcIiwgZW5lbXlEaXNwbGF5R3JpZCkpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3U2hpcExpc3RGb3IoXCJFbmVteVwiKSk7XG5cbiAgY29uc3QgcGxheWVyRGlzcGxheUdyaWQgPSBDb21wb25lbnRzLm5ld0dyaWQoKTtcbiAgcmVuZGVyU2hpcHNPbihwbGF5ZXJEaXNwbGF5R3JpZCk7XG4gIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChuZXdHcmlkQXJlYUZvcihcIlBsYXllclwiLCBwbGF5ZXJEaXNwbGF5R3JpZCkpO1xuICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQobmV3U2hpcExpc3RGb3IoXCJQbGF5ZXJcIikpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclNoaXBzT24oZ3JpZCkge1xuICAgIHBsYXllckZsZWV0TG9jYXRpb25JbmZvLmZvckVhY2goKHNoaXBMb2NhdGlvbikgPT5cbiAgICAgIGdyaWQuYWRkU2hpcFRvR3JpZChzaGlwTG9jYXRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVuZW15QXR0cmlidXRlc1RvKGdyaWQpIHtcbiAgICBncmlkLnNldENsaWNrYWJsZSgpO1xuICAgIGdyaWQuYWRkRXZlbnRUb0VsZW1lbnRzKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICBJbnRlcmZhY2UuZW5lbXlHcmlkQ2xpY2soe1xuICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgICBlbmVteURpc3BsYXlHcmlkLFxuICAgICAgICBwbGF5ZXJEaXNwbGF5R3JpZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBncmlkLnNldENvb3JkaW5hdGVIb3Zlck1zZyhcIkF0dGFjayBjb29yZGluYXRlXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvY29tcG9uZW50cy5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHcmlkIH0gZnJvbSBcIi4vbmV3LWdyaWRcIjtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdCdXR0b24gPSAobGFiZWwpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwiY2xpY2thYmxlXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdCdXR0b24sXG4gICAgbmV3R3JpZCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBTaGlwRmxlZXQgfSBmcm9tIFwiLi9zaGlwLWZsZWV0XCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5jb25zdCBHUklEX1NJWkUgPSAxMDA7XG5leHBvcnQgZnVuY3Rpb24gR2FtZUJvYXJkKHBOYW1lKSB7XG4gIGNvbnN0IF9ncmlkID0gYnVpbGRHcmlkKEdSSURfU0laRSk7XG4gIGNvbnN0IF9mbGVldCA9IFNoaXBGbGVldCgpO1xuICBjb25zdCBfcGxheWVyTmFtZSA9IHBOYW1lO1xuICBsZXQgX3BsYWNlbWVudEluZGV4ID0gMDtcbiAgbGV0IF9wbGFjZW1lbnRBeGlzID0gXCJ4XCI7XG4gIGxldCBfaXNOZXdTaW5raW5nUmVwb3J0ID0gZmFsc2U7XG4gIGxldCBfbGF0ZXN0U2lua2luZ1JlcG9ydCA9IHt9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVTdGF0dXMgPSAoaW5kZXgpID0+IF9ncmlkW2luZGV4XTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzID0gZ2V0UGxhY2VtZW50QXhpcygpKSA9PiB7XG4gICAgc2V0U2hpcENvb3JkaW5hdGVzKCk7XG4gICAgdXBkYXRlR3JpZFdpdGhTaGlwSW5kZXgoKTtcbiAgICBfcGxhY2VtZW50SW5kZXgrKztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUdyaWRXaXRoU2hpcEluZGV4KCkge1xuICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKFxuICAgICAgICAoY29vcmRpbmF0ZSkgPT4gKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9IF9wbGFjZW1lbnRJbmRleClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2hpcENvb3JkaW5hdGVzKCkge1xuICAgICAgX2ZsZWV0W19wbGFjZW1lbnRJbmRleF0uc2V0Q29vcmRpbmF0ZXMoc3RhcnRpbmdDb29yZGluYXRlLCBheGlzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNJbGxlZ2FsU2hpcFBsYWNlbWVudCA9IChzdGFydGluZ0Nvb3JkaW5hdGUsIGF4aXMpID0+IHtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBfcGxhY2VtZW50SW5kZXg7XG4gICAgcmV0dXJuIG92ZXJGbG93c0dyaWQoKSB8fCBvdmVyTGFwc0Fub3RoZXJTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkKCkge1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IF9mbGVldFtzaGlwSW5kZXhdLmdldExlbmd0aCgpO1xuICAgICAgcmV0dXJuIG92ZXJGbG93c0dyaWRPblhBeGlzKCkgfHwgb3ZlckZsb3dzR3JpZE9uWUF4aXMoKTtcblxuICAgICAgZnVuY3Rpb24gb3ZlckZsb3dzR3JpZE9uWEF4aXMoKSB7XG4gICAgICAgIGlmIChheGlzICE9PSBcInhcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgPSBzdGFydGluZ0Nvb3JkaW5hdGUgJSAxMDtcbiAgICAgICAgcmV0dXJuIHNoaXBMZW5ndGggKyBmaXJzdERpZ2l0T2ZTdGFydGluZ0Nvb3JkaW5hdGUgLSAxID49IDEwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvdmVyRmxvd3NHcmlkT25ZQXhpcygpIHtcbiAgICAgICAgaWYgKGF4aXMgIT09IFwieVwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVuZE9mU2hpcENvb3JkaW5hdGUgPSAoc2hpcExlbmd0aCAtIDEpICogMTAgKyBzdGFydGluZ0Nvb3JkaW5hdGU7XG4gICAgICAgIHJldHVybiBlbmRPZlNoaXBDb29yZGluYXRlID49IF9ncmlkLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZWRPbkFub3RoZXJTaGlwKHBDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gX2dyaWRbcENvb3JkaW5hdGVdLnNoaXBJbmRleCAhPT0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3ZlckxhcHNBbm90aGVyU2hpcCgpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9DaGVjayA9IF9mbGVldFtzaGlwSW5kZXhdLmNoZWNrQ29vcmRpbmF0ZXMoXG4gICAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZSxcbiAgICAgICAgYXhpc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlc1RvQ2hlY2suc29tZShwbGFjZWRPbkFub3RoZXJTaGlwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFyZUFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBfcGxhY2VtZW50SW5kZXggPT09IF9mbGVldC5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLmlzUGxheWVkKSByZXR1cm47XG4gICAgX2dyaWRbY29vcmRpbmF0ZV0uaXNQbGF5ZWQgPSB0cnVlO1xuXG4gICAgaWYgKF9ncmlkW2Nvb3JkaW5hdGVdLnNoaXBJbmRleCA9PT0gXCJub25lXCIpIHJldHVybjtcbiAgICBhdHRhY2tTaGlwKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2tTaGlwKCkge1xuICAgICAgY29uc3Qgc2hpcEluZGV4ID0gX2dyaWRbY29vcmRpbmF0ZV0uc2hpcEluZGV4O1xuICAgICAgY29uc3Qgc2hpcFRvQXR0YWNrID0gX2ZsZWV0W3NoaXBJbmRleF07XG4gICAgICBzaGlwVG9BdHRhY2suaGl0KCk7XG5cbiAgICAgIGlmIChzaGlwVG9BdHRhY2suaXNTdW5rKCkpIHJlY29yZFNoaXBTaW5raW5nKCk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlY29yZFNoaXBTaW5raW5nKCkge1xuICAgICAgICBfbGF0ZXN0U2lua2luZ1JlcG9ydCA9IHtcbiAgICAgICAgICBjb29yZGluYXRlOiBzaGlwVG9BdHRhY2suZ2V0U3RhcnRpbmdDb29yZGluYXRlKCksXG4gICAgICAgICAgc2hpcEluZGV4OiBzaGlwSW5kZXgsXG4gICAgICAgICAgcGxheWVyTmFtZTogX3BsYXllck5hbWUsXG4gICAgICAgICAgYXhpczogc2hpcFRvQXR0YWNrLmdldEF4aXMoKSxcbiAgICAgICAgfTtcbiAgICAgICAgX2lzTmV3U2lua2luZ1JlcG9ydCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmFuZG9tTGVnYWxBdHRhY2sgPSAoKSA9PiB7XG4gICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpO1xuICAgIHdoaWxlIChnZXRDb29yZGluYXRlU3RhdHVzKHJhbmRvbUNvb3JkaW5hdGUpLmlzUGxheWVkKSB7XG4gICAgICByYW5kb21Db29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR1JJRF9TSVpFKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XG4gIH07XG5cbiAgY29uc3QgaXNGbGVldFN1bmsgPSAoKSA9PiBfZmxlZXQuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldElzTmV3U2lua2luZ1JlcG9ydCA9ICgpID0+IF9pc05ld1NpbmtpbmdSZXBvcnQ7XG5cbiAgY29uc3QgZ2V0TGF0ZXN0U2lua2luZ1JlcG9ydCA9ICgpID0+IHtcbiAgICBfaXNOZXdTaW5raW5nUmVwb3J0ID0gZmFsc2U7XG4gICAgcmV0dXJuIF9sYXRlc3RTaW5raW5nUmVwb3J0O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIHdoaWxlICghYXJlQWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgY29uc3QgW2xlZ2FsQ29vcmRpbmF0ZSwgbGVnYWxBeGlzXSA9IGdldFJhbmRvbUxlZ2FsUGxhY2VtZW50KCk7XG4gICAgICBwbGFjZVNoaXAobGVnYWxDb29yZGluYXRlLCBsZWdhbEF4aXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUxlZ2FsUGxhY2VtZW50KCkge1xuICAgICAgbGV0IFtjb29yZGluYXRlLCBheGlzXSA9IGdldFJhbmRvbVBsYWNlbWVudCgpO1xuICAgICAgd2hpbGUgKGlzSWxsZWdhbFNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZSwgYXhpcykpIHtcbiAgICAgICAgW2Nvb3JkaW5hdGUsIGF4aXNdID0gZ2V0UmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2Nvb3JkaW5hdGUsIGF4aXNdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBsYWNlbWVudCgpIHtcbiAgICAgIGNvbnN0IGF4ZXMgPSBbXCJ4XCIsIFwieVwiXTtcbiAgICAgIGNvbnN0IHJhbmRvbUF4aXMgPSBheGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4ZXMubGVuZ3RoKV07XG4gICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR1JJRF9TSVpFKTtcbiAgICAgIHJldHVybiBbcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tQXhpc107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFBsYWNlbWVudEF4aXMgPSAoKSA9PiBfcGxhY2VtZW50QXhpcztcblxuICBjb25zdCB0b2dnbGVQbGFjZW1lbnRBeGlzID0gKCkgPT5cbiAgICAoX3BsYWNlbWVudEF4aXMgPSBfcGxhY2VtZW50QXhpcyA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiKTtcblxuICBjb25zdCByZXNldFBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBfcGxhY2VtZW50SW5kZXggPSAwO1xuICAgIF9ncmlkLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNoaXBJbmRleCA9IFwibm9uZVwiKSk7XG4gICAgX2ZsZWV0LmZvckVhY2goKHNoaXApID0+IHNoaXAucmVzZXRDb29yZGluYXRlcygpKTtcbiAgfTtcblxuICBjb25zdCBnZXRQbGFjZW1lbnRJbmRleCA9ICgpID0+IF9wbGFjZW1lbnRJbmRleDtcblxuICBjb25zdCBnZXRGbGVldExvY2F0aW9uSW5mbyA9ICgpID0+XG4gICAgX2ZsZWV0Lm1hcCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvb3JkaW5hdGU6IHNoaXAuZ2V0U3RhcnRpbmdDb29yZGluYXRlKCksXG4gICAgICAgIHNoaXBJbmRleDogaW5kZXgsXG4gICAgICAgIGF4aXM6IHNoaXAuZ2V0QXhpcygpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICByZXR1cm4ge1xuICAgIGdldENvb3JkaW5hdGVTdGF0dXMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGlzSWxsZWdhbFNoaXBQbGFjZW1lbnQsXG4gICAgYXJlQWxsU2hpcHNQbGFjZWQsXG4gICAgcGxhY2VBbGxTaGlwc0F0UmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZW5lcmF0ZVJhbmRvbUxlZ2FsQXR0YWNrLFxuICAgIGlzRmxlZXRTdW5rLFxuICAgIGdldElzTmV3U2lua2luZ1JlcG9ydCxcbiAgICBnZXRMYXRlc3RTaW5raW5nUmVwb3J0LFxuICAgIGdldFBsYWNlbWVudEF4aXMsXG4gICAgZ2V0UGxhY2VtZW50SW5kZXgsXG4gICAgdG9nZ2xlUGxhY2VtZW50QXhpcyxcbiAgICByZXNldFBsYWNlbWVudCxcbiAgICBnZXRGbGVldExvY2F0aW9uSW5mbyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRHcmlkKHNpemUpIHtcbiAgbGV0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICBncmlkLnB1c2gobmV3R3JpZEl0ZW0oKSk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG5cbiAgZnVuY3Rpb24gbmV3R3JpZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHsgaXNQbGF5ZWQ6IGZhbHNlLCBzaGlwSW5kZXg6IFwibm9uZVwiIH07XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nYW1lLW92ZXItc2NyZWVuLnNjc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyU2NyZWVuKHsgaXNXaW5uZXIgfSkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIGNvbnN0IGdhbWVPdmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZU92ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgY29udGVudC5hcHBlbmQoZ2FtZU92ZXJDb250YWluZXIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyX190aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdhbWUgT3ZlclwiO1xuICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3Qgd2lubmVyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdpbm5lck1zZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyX193aW5uZXItbXNnXCIpO1xuICB3aW5uZXJNc2cudGV4dENvbnRlbnQgPSBgWW91IGhhdmUgJHtpc1dpbm5lciA/IFwid29uLlwiIDogXCJsb3N0LlwifWA7XG4gIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lck1zZyk7XG5cbiAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyX19idXR0b24tZmllbGRcIik7XG4gIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkZpZWxkKTtcblxuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBDb21wb25lbnRzLm5ld0J1dHRvbihcIlBsYXkgQWdhaW4/XCIpO1xuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEludGVyZmFjZS5wbGF5QWdhaW5DbGljayk7XG4gIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ1dHRvbik7XG5cbiAgY29uc3QgcXVpdEJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiUXVpdFwiKTtcbiAgcXVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLnF1aXRDbGljayk7XG4gIGJ1dHRvbkZpZWxkLmFwcGVuZENoaWxkKHF1aXRCdXR0b24pO1xufVxuIiwiaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyVHVybiA9ICh7IGNvb3JkaW5hdGUsIGVuZW15RGlzcGxheUdyaWQsIGVuZW15R2FtZUJvYXJkIH0pID0+IHtcbiAgICB0YWtlVHVybih7XG4gICAgICBjb29yZGluYXRlLFxuICAgICAgZGlzcGxheUdyaWQ6IGVuZW15RGlzcGxheUdyaWQsXG4gICAgICBnYW1lQm9hcmQ6IGVuZW15R2FtZUJvYXJkLFxuICAgIH0pO1xuICAgIGlmIChlbmVteUdhbWVCb2FyZC5pc0ZsZWV0U3VuaygpKSB7XG4gICAgICBSZW5kZXIuZ2FtZU92ZXJTY3JlZW4oeyBpc1dpbm5lcjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZW5lbXlUdXJuID0gKHsgcGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJEaXNwbGF5R3JpZCB9KSA9PiB7XG4gICAgY29uc3QgbGVnYWxBdHRhY2sgPSBwbGF5ZXJHYW1lQm9hcmQuZ2VuZXJhdGVSYW5kb21MZWdhbEF0dGFjaygpO1xuICAgIHRha2VUdXJuKHtcbiAgICAgIGNvb3JkaW5hdGU6IGxlZ2FsQXR0YWNrLFxuICAgICAgZGlzcGxheUdyaWQ6IHBsYXllckRpc3BsYXlHcmlkLFxuICAgICAgZ2FtZUJvYXJkOiBwbGF5ZXJHYW1lQm9hcmQsXG4gICAgICBpc1BsYXllcjogdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocGxheWVyR2FtZUJvYXJkLmlzRmxlZXRTdW5rKCkpIHtcbiAgICAgIFJlbmRlci5nYW1lT3ZlclNjcmVlbih7IGlzV2lubmVyOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdGFrZVR1cm4oeyBjb29yZGluYXRlLCBkaXNwbGF5R3JpZCwgZ2FtZUJvYXJkLCBpc1BsYXllciB9KSB7XG4gICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgY29uc3QgaXNIaXQgPVxuICAgICAgZ2FtZUJvYXJkLmdldENvb3JkaW5hdGVTdGF0dXMoY29vcmRpbmF0ZSkuc2hpcEluZGV4ICE9PSBcIm5vbmVcIjtcbiAgICBkaXNwbGF5R3JpZC5yZWNlaXZlQXR0YWNrKHsgY29vcmRpbmF0ZSwgaXNIaXQgfSk7XG5cbiAgICBpZiAoZ2FtZUJvYXJkLmdldElzTmV3U2lua2luZ1JlcG9ydCgpKSB7XG4gICAgICBjb25zdCByZXBvcnQgPSBnYW1lQm9hcmQuZ2V0TGF0ZXN0U2lua2luZ1JlcG9ydCgpO1xuICAgICAgZXJhc2VTaGlwRnJvbUxpc3QocmVwb3J0KTtcbiAgICAgIGlmICghaXNQbGF5ZXIpIGRpc3BsYXlHcmlkLmFkZFNoaXBUb0dyaWQocmVwb3J0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzZVNoaXBGcm9tTGlzdCh7IHBsYXllck5hbWUsIHNoaXBJbmRleCB9KSB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC4ke3BsYXllck5hbWV9LXNoaXAtbGlzdC1pdGVtLSR7c2hpcEluZGV4fWBcbiAgICAgICk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHBsYXllclR1cm4sIGVuZW15VHVybiB9O1xufSkoKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpbmRleFRvU2hpcE5hbWUoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gXCJjYXJyaWVyXCI7XG4gIGlmIChpbmRleCA9PT0gMSkgcmV0dXJuIFwiYmF0dGxlc2hpcFwiO1xuICBpZiAoaW5kZXggPT09IDIpIHJldHVybiBcImNydWlzZXJcIjtcbiAgaWYgKGluZGV4ID09PSAzIHx8IGluZGV4ID09PSA0KSByZXR1cm4gXCJkZXN0cm95ZXJcIjtcbiAgaWYgKGluZGV4ID09PSA1IHx8IGluZGV4ID09PSA2KSByZXR1cm4gXCJzdWJtYXJpbmVcIjtcbn1cbiIsImltcG9ydCB7IFJlbmRlciB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZS1ib2FyZFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcblxuZXhwb3J0IGNvbnN0IEludGVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGVuZW15R2FtZUJvYXJkID0gR2FtZUJvYXJkKFwiRW5lbXlcIik7XG4gIGVuZW15R2FtZUJvYXJkLnBsYWNlQWxsU2hpcHNBdFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZChcIlBsYXllclwiKTtcblxuICBmdW5jdGlvbiBzdGFydEdhbWVDbGljaygpIHtcbiAgICBSZW5kZXIuY2xlYXJDb250ZW50KCk7XG4gICAgUmVuZGVyLnBsYWNlbWVudFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxpcFNoaXBDbGljayhlKSB7XG4gICAgcGxheWVyR2FtZUJvYXJkLnRvZ2dsZVBsYWNlbWVudEF4aXMoKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcC1idXR0b24tLWZsaXBwZWRcIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENsaWNrKGRpc3BsYXlHcmlkKSB7XG4gICAgZGlzcGxheUdyaWQucmVzZXRTaGlwcygpO1xuICAgIHBsYXllckdhbWVCb2FyZC5yZXNldFBsYWNlbWVudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVDbGljaygpIHtcbiAgICBpZiAoIXBsYXllckdhbWVCb2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSByZXR1cm47XG4gICAgUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIFJlbmRlci5iYXR0bGVTY3JlZW4ocGxheWVyR2FtZUJvYXJkLmdldEZsZWV0TG9jYXRpb25JbmZvKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VtZW50R3JpZENsaWNrKHsgdGFyZ2V0LCBkaXNwbGF5R3JpZCB9KSB7XG4gICAgaWYgKHBsYXllckdhbWVCb2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb29yZGluYXRlID0gX2dldEluZGV4T2YodGFyZ2V0KTtcbiAgICBjb25zdCBheGlzID0gcGxheWVyR2FtZUJvYXJkLmdldFBsYWNlbWVudEF4aXMoKTtcbiAgICBpZiAocGxheWVyR2FtZUJvYXJkLmlzSWxsZWdhbFNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZSwgYXhpcykpIHJldHVybjtcblxuICAgIGNvbnN0IHNoaXBJbmRleCA9IHBsYXllckdhbWVCb2FyZC5nZXRQbGFjZW1lbnRJbmRleCgpO1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSk7XG4gICAgZGlzcGxheUdyaWQuYWRkU2hpcFRvR3JpZCh7IGNvb3JkaW5hdGUsIGF4aXMsIHNoaXBJbmRleCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZW15R3JpZENsaWNrKHsgdGFyZ2V0LCBlbmVteURpc3BsYXlHcmlkLCBwbGF5ZXJEaXNwbGF5R3JpZCB9KSB7XG4gICAgaWYgKGVuZW15R2FtZUJvYXJkLmlzRmxlZXRTdW5rKCkgfHwgcGxheWVyR2FtZUJvYXJkLmlzRmxlZXRTdW5rKCkpIHJldHVybjtcbiAgICBjb25zdCBjb29yZGluYXRlID0gX2dldEluZGV4T2YodGFyZ2V0KTtcbiAgICBpZiAoZW5lbXlHYW1lQm9hcmQuZ2V0Q29vcmRpbmF0ZVN0YXR1cyhjb29yZGluYXRlKS5pc1BsYXllZCkgcmV0dXJuO1xuXG4gICAgR2FtZS5wbGF5ZXJUdXJuKHsgY29vcmRpbmF0ZSwgZW5lbXlEaXNwbGF5R3JpZCwgZW5lbXlHYW1lQm9hcmQgfSk7XG4gICAgR2FtZS5lbmVteVR1cm4oeyBwbGF5ZXJHYW1lQm9hcmQsIHBsYXllckRpc3BsYXlHcmlkIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluQ2xpY2soKSB7XG4gICAgcGxheWVyR2FtZUJvYXJkLnJlc2V0UGxhY2VtZW50KCk7XG4gICAgZW5lbXlHYW1lQm9hcmQucmVzZXRQbGFjZW1lbnQoKTtcbiAgICBlbmVteUdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzQXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgIFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBSZW5kZXIudGl0bGVTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aXRDbGljaygpIHtcbiAgICB3aW5kb3cub3BlbihcIlwiLCBcIl9zZWxmXCIpLmRvY3VtZW50LndyaXRlKFwiXCIpO1xuICAgIHdpbmRvdy5vcGVuKFwiXCIsIFwiX3NlbGZcIikuY2xvc2UoKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3BhbG1lcnVzYWYvYmF0dGxlLXNoaXBcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRJbmRleE9mKHBUYXJnZXQpIHtcbiAgICBpZiAoIXBUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZC1jb250YWluZXJfX2VsZW1lbnRcIikpXG4gICAgICBwVGFyZ2V0ID0gcFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihwVGFyZ2V0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRHYW1lQ2xpY2ssXG4gICAgZmxpcFNoaXBDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIGNvbnRpbnVlQ2xpY2ssXG4gICAgcGxhY2VtZW50R3JpZENsaWNrLFxuICAgIGVuZW15R3JpZENsaWNrLFxuICAgIHBsYXlBZ2FpbkNsaWNrLFxuICAgIHF1aXRDbGljayxcbiAgfTtcbn0pKCk7XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHcmlkQXJlYUZvcihwbGF5ZXJOYW1lLCBncmlkKSB7XG4gIGNvbnN0IGdyaWRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZEFyZWEuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYVwiLCBgZ3JpZC1hcmVhLS0ke3BsYXllck5hbWV9YCk7XG5cbiAgY29uc3QgZ3JpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBncmlkTGFiZWwuY2xhc3NMaXN0LmFkZChcImdyaWQtYXJlYV9fbGFiZWxcIik7XG4gIGdyaWRMYWJlbC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9IEdyaWRgO1xuICBncmlkQXJlYS5hcHBlbmRDaGlsZChncmlkTGFiZWwpO1xuXG4gIGdyaWQuYWRkUGFyZW50Q2xhc3MoXCJncmlkLWFyZWFfX2dyaWRcIik7XG4gIGdyaWRBcmVhLmFwcGVuZENoaWxkKGdyaWQucmVuZGVyKCkpO1xuXG4gIHJldHVybiBncmlkQXJlYTtcbn1cbiIsImltcG9ydCB7IGluZGV4VG9TaGlwTmFtZSB9IGZyb20gXCIuL2luZGV4LXRvLXNoaXAtbmFtZVwiO1xuZXhwb3J0IGNvbnN0IG5ld0dyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IEdSSURfU0laRSA9IDEwMDtcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGluaXRHcmlkV2l0aEVsZW1lbnRzKCk7XG5cbiAgZnVuY3Rpb24gaW5pdEdyaWRXaXRoRWxlbWVudHMoKSB7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHUklEX1NJWkU7IGkrKykge1xuICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyX19lbGVtZW50XCIpO1xuICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgX21vZEVsZW1lbnRzID0gKG1vZCkgPT4gWy4uLmdyaWRDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2gobW9kKTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiBncmlkQ29udGFpbmVyO1xuXG4gIGNvbnN0IHNldENsaWNrYWJsZSA9ICgpID0+XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT4ge1xuICAgICAgZ3JpZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGVcIik7XG4gICAgfSk7XG5cbiAgY29uc3Qgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnID0gKG1lc3NhZ2UpID0+IHtcbiAgICBfbW9kRWxlbWVudHMoXG4gICAgICAoZ3JpZEVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICAoZ3JpZEVsZW1lbnQudGl0bGUgPSBgJHttZXNzYWdlfSAke3hZQ29vcmRpbmF0ZShpbmRleCl9YClcbiAgICApO1xuXG4gICAgZnVuY3Rpb24geFlDb29yZGluYXRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gYCgkeyhpbmRleCAlIDEwKSArIDF9LCAke01hdGguZmxvb3IoaW5kZXggLyAxMCArIDEpfSlgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQYXJlbnRDbGFzcyA9IChjbGFzc05hbWUpID0+IGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIGNvbnN0IGFkZENoaWxkQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT4gZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBhZGRFdmVudFRvRWxlbWVudHMgPSAocEV2ZW50VHlwZSwgcEV2ZW50KSA9PiB7XG4gICAgX21vZEVsZW1lbnRzKChncmlkRWxlbWVudCkgPT5cbiAgICAgIGdyaWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocEV2ZW50VHlwZSwgcEV2ZW50KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcFRvR3JpZCA9ICh7IGNvb3JkaW5hdGUsIHNoaXBJbmRleCwgYXhpcyB9KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJfX3NoaXBcIiwgYHNoaXAtaW5kZXgtJHtzaGlwSW5kZXh9YCk7XG4gICAgaWYgKGF4aXMgPT09IFwieVwiKSBzaGlwLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lcl9fc2hpcC0tcm90YXRlZFwiKTtcbiAgICBzaGlwLnNyYyA9IGAvc3JjL2ltZ3MvJHtpbmRleFRvU2hpcE5hbWUoc2hpcEluZGV4KX0ucG5nYDtcbiAgICBncmlkQ29udGFpbmVyLmNoaWxkcmVuW2Nvb3JkaW5hdGVdLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIGdyaWRDb250YWluZXIuY2hpbGRyZW5bY29vcmRpbmF0ZV0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfTtcblxuICBjb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICAgIF9tb2RFbGVtZW50cygoZ3JpZEVsZW1lbnQpID0+IChncmlkRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCIpKTtcbiAgICBzZXRDbGlja2FibGUoKTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHsgY29vcmRpbmF0ZSwgaXNIaXQgfSkgPT4ge1xuICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZ3JpZENvbnRhaW5lci5jaGlsZHJlbltjb29yZGluYXRlXTtcbiAgICBwbGF5Qm9tYkFuaW1hdGlvbih0aGVuTWFya0hpdE9yTWlzcyk7XG5cbiAgICBmdW5jdGlvbiBwbGF5Qm9tYkFuaW1hdGlvbihjYWxsQmFjaykge1xuICAgICAgY29uc3QgYm9tYkRyb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm9tYkRyb3AuY2xhc3NMaXN0LmFkZChcImF0dGFjay1ncmlkXCIsIFwiYXR0YWNrLWdyaWRfX2JvbWJcIik7XG4gICAgICBib21iRHJvcC50ZXh0Q29udGVudCA9IFwi8J+So1wiO1xuICAgICAgYm9tYkRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGdyaWRFbGVtZW50LnJlbW92ZUNoaWxkKGJvbWJEcm9wKTtcbiAgICAgICAgY2FsbEJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgZ3JpZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9tYkRyb3ApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW5NYXJrSGl0T3JNaXNzKCkge1xuICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtY29udGFpbmVyX19lbGVtZW50LS1jbGlja2FibGVcIik7XG4gICAgICBjb25zdCBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1hcmsuY2xhc3NMaXN0LmFkZChcImF0dGFjay1ncmlkXCIpO1xuICAgICAgbWFyay50ZXh0Q29udGVudCA9IGlzSGl0ID8gXCLwn5KlXCIgOiBcIvCfkqZcIjtcbiAgICAgIGdyaWRFbGVtZW50LmFwcGVuZENoaWxkKG1hcmspO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBzZXRDbGlja2FibGUsXG4gICAgc2V0Q29vcmRpbmF0ZUhvdmVyTXNnLFxuICAgIGFkZFBhcmVudENsYXNzLFxuICAgIGFkZENoaWxkQ2xhc3MsXG4gICAgYWRkRXZlbnRUb0VsZW1lbnRzLFxuICAgIGFkZFNoaXBUb0dyaWQsXG4gICAgcmVzZXRTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGluZGV4VG9TaGlwTmFtZSB9IGZyb20gXCIuL2luZGV4LXRvLXNoaXAtbmFtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2hpcExpc3RGb3IocGxheWVyTmFtZSkge1xuICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFcIiwgYHNoaXAtYXJlYS0tJHtwbGF5ZXJOYW1lfWApO1xuXG4gIGNvbnN0IHNoaXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc2hpcExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFfX2xhYmVsXCIpO1xuICBzaGlwTGFiZWwudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSBTaGlwc2A7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBMYWJlbCk7XG5cbiAgY29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHNoaXBMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFfX2xpc3RcIik7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBMaXN0KTtcblxuICBhZGRTaGlwc1RvKHNoaXBMaXN0KTtcblxuICByZXR1cm4gc2hpcEFyZWE7XG4gIGZ1bmN0aW9uIGFkZFNoaXBzVG8oc2hpcExpc3QpIHtcbiAgICBjb25zdCBOVU1fU0hJUFNfSU5fRkxFRVQgPSA3O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NISVBTX0lOX0ZMRUVUOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgc2hpcEl0ZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJzaGlwLWFyZWFfX2l0ZW1cIixcbiAgICAgICAgYCR7cGxheWVyTmFtZX0tc2hpcC1saXN0LWl0ZW0tJHtpfWBcbiAgICAgICk7XG4gICAgICBzaGlwTGlzdC5hcHBlbmRDaGlsZChzaGlwSXRlbSk7XG5cbiAgICAgIGNvbnN0IHNoaXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgc2hpcEltZy5zcmMgPSBgL3NyYy9pbWdzLyR7aW5kZXhUb1NoaXBOYW1lKGkpfS5wbmdgO1xuICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhX19pbWdcIik7XG4gICAgICBzaGlwSXRlbS5hcHBlbmRDaGlsZChzaGlwSW1nKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBcIi9zcmMvc3R5bGVzL3BsYWNlbWVudC1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIvc3JjL21vZHVsZXMvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW50ZXJmYWNlIH0gZnJvbSBcIi9zcmMvbW9kdWxlcy9pbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNvbnN0IHBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGFjZW1lbnRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZW1lbnRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1zY3JlZW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhY2VtZW50U2NyZWVuKTtcblxuICBjb25zdCB3ZWxjb21lTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB3ZWxjb21lTXNnLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLW1zZ1wiKTtcbiAgd2VsY29tZU1zZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZVwiO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQod2VsY29tZU1zZyk7XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25zXCIpO1xuICBkaXJlY3Rpb25zLnRleHRDb250ZW50ID1cbiAgICBcIlBsYWNlIHlvdXIgc2hpcHMgYnkgY2xpY2tpbmcgb3IgdGFwcGluZyBvbiB0aGUgZ3JpZC4gV2hlbiB5b3UgYXJlIHJlYWR5IHByZXNzIGNvbnRpbnVlLlwiO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XG5cbiAgY29uc3QgYnV0dG9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25GaWVsZC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWZpZWxkXCIpO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9uRmllbGQpO1xuXG4gIGNvbnN0IGZsaXBTaGlwQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJGbGlwIFNoaXBcIik7XG4gIGZsaXBTaGlwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWJ1dHRvblwiKTtcbiAgZmxpcFNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEludGVyZmFjZS5mbGlwU2hpcENsaWNrKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQoZmxpcFNoaXBCdXR0b24pO1xuXG4gIGNvbnN0IHJlc2V0ID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJSZXNldFwiKTtcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEludGVyZmFjZS5yZXNldENsaWNrKHBsYWNlbWVudEdyaWQpKTtcbiAgYnV0dG9uRmllbGQuYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gIGNvbnN0IHBsYWNlbWVudEdyaWQgPSBDb21wb25lbnRzLm5ld0dyaWQoKTtcbiAgcGxhY2VtZW50R3JpZC5zZXRDbGlja2FibGUoKTtcbiAgcGxhY2VtZW50R3JpZC5hZGRQYXJlbnRDbGFzcyhcInBsYWNlbWVudC1ncmlkXCIpO1xuICBwbGFjZW1lbnRHcmlkLnNldENvb3JkaW5hdGVIb3Zlck1zZyhcIlBsYWNlIFNoaXAgYXRcIik7XG4gIHBsYWNlbWVudEdyaWQuYWRkRXZlbnRUb0VsZW1lbnRzKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgSW50ZXJmYWNlLnBsYWNlbWVudEdyaWRDbGljayh7XG4gICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxuICAgICAgZGlzcGxheUdyaWQ6IHBsYWNlbWVudEdyaWQsXG4gICAgfSlcbiAgKTtcbiAgcGxhY2VtZW50U2NyZWVuLmFwcGVuZENoaWxkKHBsYWNlbWVudEdyaWQucmVuZGVyKCkpO1xuXG4gIGNvbnN0IGNvbnRpbnVlQnV0dG9uID0gQ29tcG9uZW50cy5uZXdCdXR0b24oXCJDb250aW51ZVwiKTtcbiAgY29udGludWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRpbnVlXCIpO1xuICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLmNvbnRpbnVlQ2xpY2spO1xuICBwbGFjZW1lbnRTY3JlZW4uYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xufTtcbiIsImV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9TdWIpIHtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0Z1bmNUb1N1Yik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFja0Z1bmNUb1VuU3ViKSB7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoY2FsbGJhY2tGdW5jID0+IGNhbGxiYWNrRnVuYyAhPT0gY2FsbGJhY2tGdW5jVG9VblN1Yik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFja0Z1bmMgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9OyIsImltcG9ydCB7IGJhdHRsZVNjcmVlbiB9IGZyb20gXCIuL2JhdHRsZS1zY3JlZW5cIjtcbmltcG9ydCB7IHRpdGxlU2NyZWVuIH0gZnJvbSBcIi4vdGl0bGUtc2NyZWVuXCI7XG5pbXBvcnQgeyBwbGFjZW1lbnRTY3JlZW4gfSBmcm9tIFwiLi9wbGFjZW1lbnQtc2NyZWVuXCI7XG5pbXBvcnQgeyBnYW1lT3ZlclNjcmVlbiB9IGZyb20gXCIuL2dhbWUtb3Zlci1zY3JlZW5cIjtcblxuZXhwb3J0IGNvbnN0IFJlbmRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS50ZXh0Q29udGVudCA9IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgYmF0dGxlU2NyZWVuLFxuICAgIHRpdGxlU2NyZWVuLFxuICAgIHBsYWNlbWVudFNjcmVlbixcbiAgICBnYW1lT3ZlclNjcmVlbixcbiAgICBjbGVhckNvbnRlbnQsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi9tb2R1bGVzL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IFNoaXBGbGVldCA9ICgpID0+IFtcbiAgU2hpcCg1KSxcbiAgU2hpcCg0KSxcbiAgU2hpcCgzKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgyKSxcbiAgU2hpcCgxKSxcbiAgU2hpcCgxKSxcbl07XG4iLCJleHBvcnQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdFBvaW50cyA9IGxlbmd0aDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gIGxldCBfYXhpcyA9IFwiXCI7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc3VuaztcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IGNvb3JkaW5hdGVzO1xuICBjb25zdCBnZXRTdGFydGluZ0Nvb3JkaW5hdGUgPSAoKSA9PiBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgZ2V0QXhpcyA9ICgpID0+IF9heGlzO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRQb2ludHMtLTtcbiAgICBpZiAoaGl0UG9pbnRzID09PSAwKSBzdW5rID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZGluYXRlcyA9IChwU3RhcnRpbmdQb3NpdGlvbiwgcEF4aXMpID0+IHtcbiAgICBfYXhpcyA9IHBBeGlzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwQXhpcyA9PT0gXCJ5XCIpIGNvb3JkaW5hdGVzLnB1c2gocFN0YXJ0aW5nUG9zaXRpb24gKyBpICogMTApO1xuICAgICAgZWxzZSBjb29yZGluYXRlcy5wdXNoKHBTdGFydGluZ1Bvc2l0aW9uICsgaSk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgcmVzZXRDb29yZGluYXRlcyA9ICgpID0+IChjb29yZGluYXRlcyA9IFtdKTtcblxuICAvLyBjaGVjayB3aGF0IGNvb3JkaW5hdGVzIHdvdWxkIGJlIHdpdGhvdXQgc2V0dGluZyB0aGVtXG4gIGNvbnN0IGNoZWNrQ29vcmRpbmF0ZXMgPSAocFN0YXJ0aW5nUG9zaXRpb24sIHBBeGlzKSA9PiB7XG4gICAgc2V0Q29vcmRpbmF0ZXMocFN0YXJ0aW5nUG9zaXRpb24sIHBBeGlzKTtcbiAgICBjb25zdCBoeXBvQ29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcygpO1xuICAgIHJlc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICByZXR1cm4gaHlwb0Nvb3JkaW5hdGVzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGlzU3VuayxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0U3RhcnRpbmdDb29yZGluYXRlLFxuICAgIGdldEF4aXMsXG4gICAgaGl0LFxuICAgIHNldENvb3JkaW5hdGVzLFxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsXG4gICAgcmVzZXRDb29yZGluYXRlcyxcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy90aXRsZS1zY3JlZW4uc2Nzc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgdGl0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVNjcmVlbi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtc2NyZWVuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlU2NyZWVuKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICB0aXRsZVNjcmVlbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGxheUJ1dHRvbiA9IENvbXBvbmVudHMubmV3QnV0dG9uKFwiU3RhcnQgR2FtZVwiKTtcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSW50ZXJmYWNlLnN0YXJ0R2FtZUNsaWNrKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGxheS1idXR0b25cIik7XG5cbiAgdGl0bGVTY3JlZW4uYXBwZW5kQ2hpbGQocGxheUJ1dHRvbik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlcy9mb290ZXIuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXJcIjtcbmltcG9ydCBcIi4vaW1ncy9iYXR0bGVzaGlwLnBuZ1wiO1xuaW1wb3J0IFwiLi9pbWdzL2NhcnJpZXIucG5nXCI7XG5pbXBvcnQgXCIuL2ltZ3MvY3J1aXNlci5wbmdcIjtcbmltcG9ydCBcIi4vaW1ncy9kZXN0cm95ZXIucG5nXCI7XG5pbXBvcnQgXCIuL2ltZ3Mvc3VibWFyaW5lLnBuZ1wiO1xuXG5SZW5kZXIudGl0bGVTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==