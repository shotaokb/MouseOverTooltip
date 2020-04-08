!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var _=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});
const svgIcons = [
  '<svg id="svgicon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" style="height: 100%; opacity: 1;"><style type="text/css">.iconstyle{fill:#ffffff;}</style><g><path class="iconstyle" d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path><path class="iconstyle" d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path><path class="iconstyle" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path></g></svg></body></html>',
  '<svg id="svgicon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" style="height: 100%; opacity: 1;"><style type="text/css">.iconstyle{fill:#ffffff;}</style><g><path class="iconstyle" d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM12 7c0 0.28-0.21 0.8-0.42 1l-1.58 1.58c-0.57 0.58-1 1.6-1 2.42v1h2v-1c0-0.29 0.21-0.8 0.42-1l1.58-1.58c0.57-0.58 1-1.6 1-2.42 0-2.209-1.791-4-4-4s-4 1.791-4 4v0h2c0-1.105 0.895-2 2-2s2 0.895 2 2v0zM9 15v2h2v-2h-2z"></path></g></svg></body></html>',
  '<svg id="svgicon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" style="height: 100%; opacity: 1;"><style type="text/css">.iconstyle{fill:#ffffff;}</style><g><path class="iconstyle" d="M16 0c-6.076 0-11 4.924-11 11 0 4.031 3.688 8.303 5.031 12.055 2.003 5.595 1.781 8.945 5.969 8.945 4.25 0 3.965-3.334 5.969-8.922 1.347-3.76 5.031-8.078 5.031-12.078 0-6.076-4.926-11-11-11zM18.592 27.176l-4.958 0.619c-0.177-0.512-0.367-1.111-0.598-1.893-0.003-0.010-0.007-0.021-0.009-0.031l6.188-0.773c-0.088 0.295-0.182 0.605-0.264 0.883-0.131 0.449-0.248 0.839-0.359 1.195zM12.736 24.908c-0.182-0.602-0.387-1.236-0.615-1.908h7.766c-0.123 0.359-0.246 0.719-0.352 1.059l-6.799 0.849zM16 30c-1.013 0-1.479-0.117-1.997-1.25l4.238-0.531c-0.614 1.654-1.061 1.781-2.241 1.781zM20.672 21h-9.333c-0.498-1.080-1.096-2.16-1.686-3.217-1.305-2.335-2.653-4.75-2.653-6.783 0-4.963 4.037-9 9-9s9 4.037 9 9c0 2.018-1.35 4.446-2.656 6.795-0.584 1.053-1.178 2.131-1.672 3.205zM16 5c0.275 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-2.757 0-5 2.243-5 5 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-3.309 2.691-6 6-6z"></path></g></svg></body></html>'
];
//rf. https://so-zou.jp/web-app/tech/programming/javascript/sample/tooltip.htm
const Tooltip = function(){
      //content
      this.content = document.createElement("div");
      this.content.className = "tooltip-content";

      //shadow
      this.shadow = document.createElement("div");
      this.shadow.className = "tooltip-shadow";
      this.shadow.style.visibility = "hidden";

      this.shadow.appendChild(this.content);
      document.body.appendChild(this.shadow);
}

Tooltip.DELAY = 300; //delay time
Tooltip.OFFSET = 5; //mouse pointer offset

//prototype
Tooltip.prototype ={
  Show: function(text, x, y, tcolor, bcolor, tfont, tsize, bwidth, bstyle, bradius, bgcolor) {
    //content and styles
    this.content.innerText = text;
    this.content.style.color = tcolor;
    //this.content.style.border = bwidth+"px "+bstyle+" "+bcolor;
    this.content.style.border = `${bwidth}px ${bstyle} ${bcolor}`;
    //this.content.style.borderRadius = bradius+"px";
    this.content.style.borderRadius = `${bradius}px`;
    this.content.style.fontFamily = tfont;
    //this.content.style.fontSize = tsize + "px";
    this.content.style.fontSize = `${tsize}px`;
    this.content.style.backgroundColor = bgcolor;

    //shadow
    //this.shadow.style.left = x + "px";
    this.shadow.style.left = `${x}px`;
    //this.shadow.style.top = y + "px";
    this.shadow.style.top = `${y}px`;
    this.shadow.style.visibility = "visible";
  },

  Hide: function() {
    this.shadow.style.visibility = "hidden";
  },

  Schedule: function(targetElement, event, tColor, bColor, tFont, tSize, bWidth, bStyle, bRadius, bgColor) {
    let e = event || window.event;

    let x = e.clientX;
    let y = e.clientY;

    x += window.pageXOffset || document.documentElement.scrollLeft;
    y += window.pageYOffset || document.documentElement.scrollTop;

    const _this = this;

    const timerID = setTimeout(function() {

      const text = targetElement.getAttribute("tooltip");
      _this.Show(text, x + Tooltip.OFFSET, y + Tooltip.OFFSET, tColor, bColor, tFont, tSize, bWidth, bStyle, bRadius, bgColor);
    },
    Tooltip.DELAY);

    function MouseOut() {
      _this.Hide();

      clearTimeout(timerID);

      if (targetElement.removeEventListener) {
        targetElement.removeEventListener("mouseout", MouseOut, false);
      }
    }
    targetElement.addEventListener("mouseout", MouseOut, false);
  }
}
function drawViz(data) {

  const tooltip = new Tooltip();
  const divIcon = document.getElementById("iconDiv");

  const st = {
    textColor: data.style.textcolor.value.color,
    borderColor: data.style.bordercolor.value.color,
    textFont: data.style.textfont.value,
    textSize: data.style.textsize.value,
    borderWidth: data.style.borderwidth.value,
    borderStyle: data.style.borderstyle.value,
    borderRadius: data.style.borderradius.value,
    iconSize: data.style.iconsize.value,
    iconColor: data.style.iconcolor.value.color,
    backgroundColor: data.style.backgroundcolor.value.color,
    tooltipIcon: data.style.tooltipicon.value,
    tooltipText: data.style.tooltiptext.value,
  };

  //change icon
  divIcon.innerHTML = svgIcons[st.tooltipIcon];

  //append style
  const svg = document.getElementById("svgicon");

  //tooltip area
  svg.setAttribute("tooltip", st.tooltipText);
  svg.addEventListener("mouseover", function(event) {
    tooltip.Schedule(this, event, st.textColor, st.borderColor, st.textFont, st.textSize, st.borderWidth, st.borderStyle, st.borderRadius, st.backgroundColor);
  });

  //icon size setting
  //divIcon.style.width = st.iconSize + "px";
  divIcon.style.width = `${st.iconSize}px`;
  //divIcon.style.height = st.iconSize + "px";
  divIcon.style.height = `${st.iconSize}px`;

  //icon color setting
  const tpclass = document.getElementsByClassName("iconstyle");
  for(let i=0; i<tpclass.length; i++){
    //tpclass[i].setAttribute("style","fill: "+st.iconColor);
    tpclass[i].setAttribute("style",`fill: ${st.iconColor}`);
  }
}

// subscribe to data and style changes
const div = document.createElement("div");
div.setAttribute("id", "iconDiv");
document.body.appendChild(div);
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
