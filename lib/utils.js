"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDistance = exports.useColor = exports.useDimension = exports.useEasyFlexTheme = exports.getFlipThreshold = exports.getColor = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.toRem = exports.toPx = exports.ifDefined = void 0;
var react_1 = require("react");
var constants_1 = require("./constants");
var ifDefined = function (value, fn) {
    if (value === undefined || value === null) {
        return undefined;
    }
    return fn(value);
};
exports.ifDefined = ifDefined;
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
var getFlipThreshold = function (theme, flipThreshold) {
    return theme.flipThreshold[flipThreshold];
};
exports.getFlipThreshold = getFlipThreshold;
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
var useDimension = function () {
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
    var dimension = (0, react_1.useMemo)(function () { return ({ height: height, width: Math.min(bodyWidth, windowWidth) }); }, [height, bodyWidth, windowWidth]);
    return dimension;
};
exports.useDimension = useDimension;
var useColor = function (color, fallback) {
    var theme = (0, exports.useEasyFlexTheme)();
    var processedColor = (0, react_1.useMemo)(function () { return (color === undefined ? fallback : (0, exports.getColor)(theme, color)); }, [color, fallback, theme]);
    return processedColor;
};
exports.useColor = useColor;
var useDistance = function (_a) {
    var marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(marginBottom !== null && marginBottom !== void 0 ? marginBottom : marginY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginBottom, marginY, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(marginLeft !== null && marginLeft !== void 0 ? marginLeft : marginX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginLeft, marginX, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(marginRight !== null && marginRight !== void 0 ? marginRight : marginX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginRight, marginX, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(marginTop !== null && marginTop !== void 0 ? marginTop : marginY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginTop, marginY, theme]);
    var processedPaddingBottom = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : paddingY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingBottom, paddingY, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : paddingX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingLeft, paddingX, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(paddingRight !== null && paddingRight !== void 0 ? paddingRight : paddingX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingRight, paddingX, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { return (0, exports.ifDefined)(paddingTop !== null && paddingTop !== void 0 ? paddingTop : paddingY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingTop, paddingY, theme]);
    var margin = (0, react_1.useMemo)(function () { return ({
        bottom: processedMarginBottom,
        left: processedMarginLeft,
        right: processedMarginRight,
        top: processedMarginTop,
    }); }, [processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]);
    var padding = (0, react_1.useMemo)(function () { return ({
        bottom: processedPaddingBottom,
        left: processedPaddingLeft,
        right: processedPaddingRight,
        top: processedPaddingTop,
    }); }, [processedPaddingBottom, processedPaddingLeft, processedPaddingRight, processedPaddingTop]);
    var distance = (0, react_1.useMemo)(function () { return ({
        margin: margin,
        padding: padding,
    }); }, [margin, padding]);
    return distance;
};
exports.useDistance = useDistance;
