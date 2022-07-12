"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDistance = exports.useDimension = exports.useColor = exports.useEasyFlexTheme = exports.getFontWeight = exports.getFontSize = exports.getFlipThreshold = exports.getDistance = exports.getColor = exports.getBorderWidth = exports.getBorderRadius = exports.toRem = exports.toPx = exports.ifNotUndefined = exports.ifNotNull = exports.ifDefined = void 0;
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
    return typeof borderWidth === 'number' ? borderWidth : theme.border.radius[borderWidth];
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
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
var useColor = function (color, fallback) {
    var theme = (0, exports.useEasyFlexTheme)();
    var processedColor = (0, react_1.useMemo)(function () { return (color === undefined ? fallback : (0, exports.getColor)(theme, color)); }, [color, fallback, theme]);
    return processedColor;
};
exports.useColor = useColor;
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
var useDistance = function (_a) {
    var marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY;
    var theme = (0, exports.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(marginBottom !== null && marginBottom !== void 0 ? marginBottom : marginY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginBottom, marginY, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(marginLeft !== null && marginLeft !== void 0 ? marginLeft : marginX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginLeft, marginX, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(marginRight !== null && marginRight !== void 0 ? marginRight : marginX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginRight, marginX, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(marginTop !== null && marginTop !== void 0 ? marginTop : marginY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [marginTop, marginY, theme]);
    var processedPaddingBottom = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : paddingY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingBottom, paddingY, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : paddingX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingLeft, paddingX, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(paddingRight !== null && paddingRight !== void 0 ? paddingRight : paddingX, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingRight, paddingX, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { return (0, exports.ifNotUndefined)(paddingTop !== null && paddingTop !== void 0 ? paddingTop : paddingY, function (margin) { return (0, exports.toPx)((0, exports.getDistance)(theme, margin)); }); }, [paddingTop, paddingY, theme]);
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
