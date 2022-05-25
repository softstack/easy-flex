"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEasyFlexTheme = exports.getColor = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.toRem = exports.toPx = void 0;
var react_1 = require("react");
var constants_1 = require("./constants");
var toPx = function (value) { return "".concat(value, "px"); };
exports.toPx = toPx;
var toRem = function (value) { return "".concat(value, "rem"); };
exports.toRem = toRem;
var getDistance = function (theme, distance) {
    if (typeof distance === 'number') {
        return distance;
    }
    return theme.distance[distance];
};
exports.getDistance = getDistance;
var getFontSize = function (theme, fontSize) {
    if (typeof fontSize === 'number') {
        return fontSize;
    }
    return theme.fontSize[fontSize];
};
exports.getFontSize = getFontSize;
var getFontWeight = function (theme, fontWeight) {
    if (typeof fontWeight === 'number') {
        return fontWeight;
    }
    return theme.fontWeight[fontWeight];
};
exports.getFontWeight = getFontWeight;
var getColor = function (theme, color) {
    if (color === 'inherit') {
        return 'inherit';
    }
    return theme.color[color];
};
exports.getColor = getColor;
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
