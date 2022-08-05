"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.useSize = exports.useDistance = exports.useDimension = exports.useColor = exports.useEasyFlexTheme = exports.getWidth = exports.getViewportThreshold = exports.getHeight = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.getColor = exports.getBorderWidth = exports.getBorderRadius = exports.isISize = exports.isIAbsoluteSize = exports.isIRem = exports.isIPx = exports.isIPercent = exports.toIRem = exports.toIPx = exports.toIPercent = exports.ifNotUndefined = exports.ifNotNull = exports.ifDefined = exports.isIBaseColor = void 0;
var react_1 = require("react");
var constants_1 = require("./constants");
var isIBaseColor = function (color) { return constants_1.baseColors.includes(color); };
exports.isIBaseColor = isIBaseColor;
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
var getBorderRadius = function (theme, borderRadius) {
    return (0, exports.isIAbsoluteSize)(borderRadius) ? borderRadius : theme.border.radius[borderRadius];
};
exports.getBorderRadius = getBorderRadius;
var getBorderWidth = function (theme, borderWidth) {
    return (0, exports.isIAbsoluteSize)(borderWidth) ? borderWidth : theme.border.width[borderWidth];
};
exports.getBorderWidth = getBorderWidth;
var getColor = function (theme, color) {
    return (0, exports.isIBaseColor)(color) ? theme.color[color] : color;
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
    var margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginBottom !== null && marginBottom !== void 0 ? marginBottom : marginY) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginBottom, marginY, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginLeft !== null && marginLeft !== void 0 ? marginLeft : marginX) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginLeft, marginX, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginRight !== null && marginRight !== void 0 ? marginRight : marginX) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginRight, marginX, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = marginTop !== null && marginTop !== void 0 ? marginTop : marginY) !== null && _a !== void 0 ? _a : margin) !== null && _b !== void 0 ? _b : '0px'); }, [margin, marginTop, marginY, theme]);
    var processedPaddingBottom = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : paddingY) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingBottom, paddingY, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : paddingX) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingLeft, paddingX, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingRight !== null && paddingRight !== void 0 ? paddingRight : paddingX) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingRight, paddingX, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { var _a, _b; return (0, exports.getDistance)(theme, (_b = (_a = paddingTop !== null && paddingTop !== void 0 ? paddingTop : paddingY) !== null && _a !== void 0 ? _a : padding) !== null && _b !== void 0 ? _b : '0px'); }, [padding, paddingTop, paddingY, theme]);
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
