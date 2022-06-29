"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensions = exports.useEasyFlexTheme = exports.getFlipThreshold = exports.getColor = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.toRem = exports.toPx = void 0;
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
        return color;
    }
    return theme.color[color];
};
exports.getColor = getColor;
var getFlipThreshold = function (theme, flipThreshold) {
    return theme.flipThreshold[flipThreshold];
};
exports.getFlipThreshold = getFlipThreshold;
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
var useDimensions = function () {
    var _a = (0, react_1.useState)(window.innerHeight), height = _a[0], setHeight = _a[1];
    var _b = (0, react_1.useState)(document.body.clientWidth), bodyWidth = _b[0], setBodyWidth = _b[1];
    var _c = (0, react_1.useState)(window.innerWidth), windowWidth = _c[0], setWindowWidth = _c[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        // Width via ResizeObserver too because the browser's scrollbar does not influence window.innerWidth
        var resizeObserver = new ResizeObserver(function (entries) {
            setBodyWidth(entries[0].contentRect.width);
        });
        resizeObserver.observe(document.body);
        return function () {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    });
    var dimensions = (0, react_1.useMemo)(function () { return ({ height: height, width: Math.min(bodyWidth, windowWidth) }); }, [height, bodyWidth, windowWidth]);
    return dimensions;
};
exports.useDimensions = useDimensions;
