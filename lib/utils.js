"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSize = exports.useDistance = exports.useDimension = exports.useColor = exports.useEasyFlexTheme = exports.getWidth = exports.getHeight = exports.getFontWeight = exports.getFontSize = exports.getFlipThreshold = exports.getDistance = exports.getColor = exports.getBorderWidth = exports.getBorderRadius = exports.toRem = exports.toPx = exports.ifNotUndefined = exports.ifNotNull = exports.ifDefined = void 0;
var react_1 = require("react");
var constants_1 = require("./constants");
var ifDefined = function (value, fn) {
    if (value === null) {
        return null;
    }
    if (value === undefined) {
        return undefined;
    }
    return fn(value);
};
exports.ifDefined = ifDefined;
var ifNotNull = function (value, fn) {
    if (value === null) {
        return null;
    }
    return fn(value);
};
exports.ifNotNull = ifNotNull;
var ifNotUndefined = function (value, fn) {
    if (value === undefined) {
        return undefined;
    }
    return fn(value);
};
exports.ifNotUndefined = ifNotUndefined;
var toPx = function (value) { return "".concat(value, "px"); };
exports.toPx = toPx;
var toRem = function (value) { return "".concat(value, "rem"); };
exports.toRem = toRem;
var getBorderRadius = function (theme, borderRadius) {
    return typeof borderRadius === 'number' ? borderRadius : theme.border.radius[borderRadius];
};
exports.getBorderRadius = getBorderRadius;
var getBorderWidth = function (theme, borderWidth) {
    return typeof borderWidth === 'number' ? borderWidth : theme.border.width[borderWidth];
};
exports.getBorderWidth = getBorderWidth;
var getColor = function (theme, color) {
    return color === 'inherit' ? 'inherit' : theme.color[color];
};
exports.getColor = getColor;
var getDistance = function (theme, distance) {
    return typeof distance === 'number' ? distance : theme.distance[distance];
};
exports.getDistance = getDistance;
var getFlipThreshold = function (theme, flipThreshold) {
    return theme.flip.threshold[flipThreshold];
};
exports.getFlipThreshold = getFlipThreshold;
var getFontSize = function (theme, fontSize) {
    return typeof fontSize === 'number' ? fontSize : theme.font.size[fontSize];
};
exports.getFontSize = getFontSize;
var getFontWeight = function (theme, fontWeight) {
    return typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];
};
exports.getFontWeight = getFontWeight;
var getHeight = function (theme, height) {
    return typeof height === 'number' ? height : theme.size.height[height];
};
exports.getHeight = getHeight;
var getWidth = function (theme, width) {
    return typeof width === 'number' ? width : theme.size.width[width];
};
exports.getWidth = getWidth;
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
var useColor = function (color, fallback) {
    var theme = (0, exports.useEasyFlexTheme)();
    var processedColor = (0, react_1.useMemo)(function () { return (color === undefined ? fallback : (0, exports.getColor)(theme, color)); }, [color, fallback, theme]);
    return processedColor;
};
exports.useColor = useColor;
var useDimension = function () {
    var _a = (0, react_1.useState)(document.documentElement.clientHeight), height = _a[0], setHeight = _a[1];
    var _b = (0, react_1.useState)(document.documentElement.clientWidth), width = _b[0], setWidth = _b[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setHeight(document.documentElement.clientHeight);
            setWidth(document.documentElement.clientWidth);
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    var dimension = (0, react_1.useMemo)(function () { return ({ height: height, width: width }); }, [height, width]);
    return dimension;
};
exports.useDimension = useDimension;
var useDistance = function (_a) {
    var margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = marginBottom !== null && marginBottom !== void 0 ? marginBottom : marginY) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : 0)); }, [margin, marginBottom, marginY, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = marginLeft !== null && marginLeft !== void 0 ? marginLeft : marginX) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : 0)); }, [margin, marginLeft, marginX, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = marginRight !== null && marginRight !== void 0 ? marginRight : marginX) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : 0)); }, [margin, marginRight, marginX, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = marginTop !== null && marginTop !== void 0 ? marginTop : marginY) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : 0)); }, [margin, marginTop, marginY, theme]);
    var processedPaddingBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : paddingY) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : 0)); }, [padding, paddingBottom, paddingY, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : paddingX) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : 0)); }, [padding, paddingLeft, paddingX, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = paddingRight !== null && paddingRight !== void 0 ? paddingRight : paddingX) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : 0)); }, [padding, paddingRight, paddingX, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.toPx)((0, exports.getDistance)(theme, (_b = (_a = paddingTop !== null && paddingTop !== void 0 ? paddingTop : paddingY) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : 0)); }, [padding, paddingTop, paddingY, theme]);
    var processedMargin = (0, react_1.useMemo)(function () { return ({
        bottom: processedMarginBottom,
        left: processedMarginLeft,
        right: processedMarginRight,
        top: processedMarginTop,
    }); }, [processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]);
    var processedPadding = (0, react_1.useMemo)(function () { return ({
        bottom: processedPaddingBottom,
        left: processedPaddingLeft,
        right: processedPaddingRight,
        top: processedPaddingTop,
    }); }, [processedPaddingBottom, processedPaddingLeft, processedPaddingRight, processedPaddingTop]);
    var distance = (0, react_1.useMemo)(function () { return ({
        margin: processedMargin,
        padding: processedPadding,
    }); }, [processedMargin, processedPadding]);
    return distance;
};
exports.useDistance = useDistance;
var useSize = function (_a) {
    var fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, height = _a.height, heightMax = _a.heightMax, heightMin = _a.heightMin, width = _a.width, widthMax = _a.widthMax, widthMin = _a.widthMin;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedHeight = (0, react_1.useMemo)(function () { return (fullHeight ? '100%' : (0, exports.ifNotUndefined)(height, function (height) { return (0, exports.toPx)((0, exports.getHeight)(theme, height)); })); }, [fullHeight, height, theme]);
    var processedHeightMax = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(heightMax, function (heightMax) { return (0, exports.toPx)((0, exports.getHeight)(theme, heightMax)); }); }, [heightMax, theme]);
    var processedHeightMin = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(heightMin, function (heightMin) { return (0, exports.toPx)((0, exports.getHeight)(theme, heightMin)); }); }, [heightMin, theme]);
    var processedWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : (0, exports.ifNotUndefined)(width, function (width) { return (0, exports.toPx)((0, exports.getWidth)(theme, width)); })); }, [fullWidth, theme, width]);
    var processedWidthMax = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(widthMax, function (widthMax) { return (0, exports.toPx)((0, exports.getWidth)(theme, widthMax)); }); }, [theme, widthMax]);
    var processedWidthMin = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(widthMin, function (widthMin) { return (0, exports.toPx)((0, exports.getWidth)(theme, widthMin)); }); }, [theme, widthMin]);
    var size = (0, react_1.useMemo)(function () { return ({
        height: processedHeight,
        heightMax: processedHeightMax,
        heightMin: processedHeightMin,
        width: processedWidth,
        widthMax: processedWidthMax,
        widthMin: processedWidthMin,
    }); }, [processedHeight, processedHeightMax, processedHeightMin, processedWidth, processedWidthMax, processedWidthMin]);
    return size;
};
exports.useSize = useSize;
