"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.useSize = exports.useDistance = exports.useDimension = exports.useColor = exports.useEasyFlexTheme = exports.getWidth = exports.getViewportThreshold = exports.getLineHeight = exports.getHeight = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.getColor = exports.getBorderWidth = exports.getBorderRadius = exports.toIRem = exports.toIPx = exports.toIPercent = exports.ifNotUndefined = exports.ifNotNull = exports.ifDefined = exports.isISize = exports.isIAbsoluteSize = exports.isIRem = exports.isIPx = exports.isIPercent = exports.isIThemeSize = exports.isIThemeColor = void 0;
var react_1 = require("react");
var constants_1 = require("./constants");
var isIThemeColor = function (color) { return constants_1.themeColors.includes(color); };
exports.isIThemeColor = isIThemeColor;
var isIThemeSize = function (size) {
    return typeof size === 'string' && constants_1.themeSizes.includes(size);
};
exports.isIThemeSize = isIThemeSize;
var isIPercent = function (value) {
    return typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?%$/) : false;
};
exports.isIPercent = isIPercent;
var isIPx = function (value) {
    return typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?px$/) : false;
};
exports.isIPx = isIPx;
var isIRem = function (value) {
    return typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?rem$/) : false;
};
exports.isIRem = isIRem;
var isIAbsoluteSize = function (value) { return (0, exports.isIPx)(value) || (0, exports.isIRem)(value); };
exports.isIAbsoluteSize = isIAbsoluteSize;
var isISize = function (value) { return (0, exports.isIPercent)(value) || (0, exports.isIAbsoluteSize)(value); };
exports.isISize = isISize;
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
var toIPercent = function (value) { return "".concat(value, "%"); };
exports.toIPercent = toIPercent;
var toIPx = function (value) { return "".concat(value, "px"); };
exports.toIPx = toIPx;
var toIRem = function (value) { return "".concat(value, "rem"); };
exports.toIRem = toIRem;
var getBorderRadius = function (theme, borderRadius) {
    return (0, exports.isIAbsoluteSize)(borderRadius) ? borderRadius : theme.border.radius[borderRadius];
};
exports.getBorderRadius = getBorderRadius;
var getBorderWidth = function (theme, borderWidth) {
    return (0, exports.isIAbsoluteSize)(borderWidth) ? borderWidth : theme.border.width[borderWidth];
};
exports.getBorderWidth = getBorderWidth;
var getColor = function (theme, color) {
    return (0, exports.isIThemeColor)(color) ? theme.color[color] : color;
};
exports.getColor = getColor;
var getDistance = function (theme, distance) {
    return (0, exports.isIAbsoluteSize)(distance) ? distance : theme.distance[distance];
};
exports.getDistance = getDistance;
var getFontSize = function (theme, fontSize) {
    return (0, exports.isISize)(fontSize) ? fontSize : theme.font.size[fontSize];
};
exports.getFontSize = getFontSize;
var getFontWeight = function (theme, fontWeight) {
    return typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];
};
exports.getFontWeight = getFontWeight;
var getHeight = function (theme, height) {
    return (0, exports.isISize)(height) ? height : theme.size.height[height];
};
exports.getHeight = getHeight;
var getLineHeight = function (theme, lineHeight) {
    return (0, exports.isIThemeSize)(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;
};
exports.getLineHeight = getLineHeight;
var getViewportThreshold = function (theme, viewportThreshold) {
    return typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];
};
exports.getViewportThreshold = getViewportThreshold;
var getWidth = function (theme, width) {
    return (0, exports.isISize)(width) ? width : theme.size.width[width];
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
    var margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingHorizontal = _a.paddingHorizontal, paddingVertical = _a.paddingVertical;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginBottom !== null && marginBottom !== void 0 ? marginBottom : marginVertical) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginBottom, marginVertical, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginLeft !== null && marginLeft !== void 0 ? marginLeft : marginHorizontal) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginLeft, marginHorizontal, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginRight !== null && marginRight !== void 0 ? marginRight : marginHorizontal) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginRight, marginHorizontal, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginTop !== null && marginTop !== void 0 ? marginTop : marginVertical) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginTop, marginVertical, theme]);
    var processedPaddingBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : paddingVertical) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingBottom, paddingVertical, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : paddingHorizontal) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingLeft, paddingHorizontal, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingRight !== null && paddingRight !== void 0 ? paddingRight : paddingHorizontal) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingRight, paddingHorizontal, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingTop !== null && paddingTop !== void 0 ? paddingTop : paddingVertical) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingTop, paddingVertical, theme]);
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
    var processedHeight = (0, react_1.useMemo)(function () { return (fullHeight ? '100%' : (0, exports.ifNotUndefined)(height, function (height) { return (0, exports.getHeight)(theme, height); })); }, [fullHeight, height, theme]);
    var processedHeightMax = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(heightMax, function (heightMax) { return (0, exports.getHeight)(theme, heightMax); }); }, [heightMax, theme]);
    var processedHeightMin = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(heightMin, function (heightMin) { return (0, exports.getHeight)(theme, heightMin); }); }, [heightMin, theme]);
    var processedWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : (0, exports.ifNotUndefined)(width, function (width) { return (0, exports.getWidth)(theme, width); })); }, [fullWidth, theme, width]);
    var processedWidthMax = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(widthMax, function (widthMax) { return (0, exports.getWidth)(theme, widthMax); }); }, [theme, widthMax]);
    var processedWidthMin = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(widthMin, function (widthMin) { return (0, exports.getWidth)(theme, widthMin); }); }, [theme, widthMin]);
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
var useViewport = function () {
    var theme = (0, exports.useEasyFlexTheme)();
    var width = (0, exports.useDimension)().width;
    var viewport = (0, react_1.useMemo)(function () { return ({
        fallback: width < theme.viewport.fallbackThreshold,
        '8xs': width < (0, exports.getViewportThreshold)(theme, '8xs'),
        '7xs': width < (0, exports.getViewportThreshold)(theme, '7xs'),
        '6xs': width < (0, exports.getViewportThreshold)(theme, '6xs'),
        '5xs': width < (0, exports.getViewportThreshold)(theme, '5xs'),
        '4xs': width < (0, exports.getViewportThreshold)(theme, '4xs'),
        '3xs': width < (0, exports.getViewportThreshold)(theme, '3xs'),
        xxs: width < (0, exports.getViewportThreshold)(theme, 'xxs'),
        xs: width < (0, exports.getViewportThreshold)(theme, 'xs'),
        s: width < (0, exports.getViewportThreshold)(theme, 's'),
        m: width < (0, exports.getViewportThreshold)(theme, 'm'),
        l: width < (0, exports.getViewportThreshold)(theme, 'l'),
        xl: width < (0, exports.getViewportThreshold)(theme, 'xl'),
        xxl: width < (0, exports.getViewportThreshold)(theme, 'xxl'),
        '3xl': width < (0, exports.getViewportThreshold)(theme, '3xl'),
        '4xl': width < (0, exports.getViewportThreshold)(theme, '4xl'),
        '5xl': width < (0, exports.getViewportThreshold)(theme, '5xl'),
        '6xl': width < (0, exports.getViewportThreshold)(theme, '6xl'),
        '7xl': width < (0, exports.getViewportThreshold)(theme, '7xl'),
        '8xl': width < (0, exports.getViewportThreshold)(theme, '8xl'),
    }); }, [theme, width]);
    return viewport;
};
exports.useViewport = useViewport;
