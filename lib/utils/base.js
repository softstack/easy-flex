"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.useDimension = exports.useEasyFlexTheme = exports.getWidth = exports.getViewportThreshold = exports.getLineHeight = exports.getHeight = exports.getFontWeight = exports.getFontSize = exports.getDistance = exports.getColor = exports.getBorderWidth = exports.getBorderRadius = exports.sizeToNumber = exports.absoluteSizeToNumber = exports.vwToNumber = exports.vhToNumber = exports.remToNumber = exports.pxToNumber = exports.percentToNumber = exports.toVw = exports.toVh = exports.toRem = exports.toPx = exports.toPercent = exports.defalsify = exports.ifDefined = exports.isSize = exports.isAbsoluteSize = exports.isVw = exports.isVh = exports.isRem = exports.isPx = exports.isPercent = exports.isThemeSize = exports.isThemeSizeName = exports.isThemeSizeX = exports.isThemeColor = exports.mergeDeep = void 0;
var react_1 = require("react");
var constants_1 = require("../constants");
var mergeDeep = function (a, b) {
    if (b === undefined) {
        return a;
    }
    else if (typeof b === 'object') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var tmp = {};
        for (var _i = 0, _a = Object.entries(a); _i < _a.length; _i++) {
            var key = _a[_i][0];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            tmp[key] = (0, exports.mergeDeep)(a[key], b[key]);
        }
        return tmp;
    }
    return b;
};
exports.mergeDeep = mergeDeep;
var isThemeColor = function (color) { return constants_1.themeColors.includes(color); };
exports.isThemeColor = isThemeColor;
var isThemeSizeX = function (size) {
    return typeof size === 'string' && constants_1.themeSizes.includes(size);
};
exports.isThemeSizeX = isThemeSizeX;
var isThemeSizeName = function (size) {
    return typeof size === 'string' && constants_1.themeSizeNames.includes(size);
};
exports.isThemeSizeName = isThemeSizeName;
var isThemeSize = function (size) { return (0, exports.isThemeSizeX)(size) || (0, exports.isThemeSizeName)(size); };
exports.isThemeSize = isThemeSize;
var isPercent = function (value) { return typeof value === 'string' && !!value.match(/^\d+(\.\d+)?%$/); };
exports.isPercent = isPercent;
var isPx = function (value) { return typeof value === 'string' && !!value.match(/^\d+(\.\d+)?px$/i); };
exports.isPx = isPx;
var isRem = function (value) { return typeof value === 'string' && !!value.match(/^\d+(\.\d+)?rem$/i); };
exports.isRem = isRem;
var isVh = function (value) { return typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vh$/i); };
exports.isVh = isVh;
var isVw = function (value) { return typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vw$/i); };
exports.isVw = isVw;
var isAbsoluteSize = function (value) { return (0, exports.isPx)(value) || (0, exports.isRem)(value); };
exports.isAbsoluteSize = isAbsoluteSize;
var isSize = function (value) { return (0, exports.isPercent)(value) || (0, exports.isAbsoluteSize)(value); };
exports.isSize = isSize;
var ifDefined = function (value, fn) {
    if (value === false || value === undefined) {
        return undefined;
    }
    return fn(value);
};
exports.ifDefined = ifDefined;
var defalsify = function (value) { return (value === false ? undefined : value); };
exports.defalsify = defalsify;
var toPercent = function (value) { return "".concat(value, "%"); };
exports.toPercent = toPercent;
var toPx = function (value) { return "".concat(value, "px"); };
exports.toPx = toPx;
var toRem = function (value) { return "".concat(value, "rem"); };
exports.toRem = toRem;
var toVh = function (value) { return "".concat(value, "vh"); };
exports.toVh = toVh;
var toVw = function (value) { return "".concat(value, "vw"); };
exports.toVw = toVw;
var percentToNumber = function (value) {
    var match = value.match(/^(\d+(?:\.\d+)?)%$/i);
    if (!match) {
        throw new Error('Value is not of type Percent');
    }
    return Number(match[1]);
};
exports.percentToNumber = percentToNumber;
var pxToNumber = function (value) {
    var match = value.match(/^(\d+(?:\.\d+)?)px$/i);
    if (!match) {
        throw new Error('Value is not of type Px');
    }
    return Number(match[1]);
};
exports.pxToNumber = pxToNumber;
var remToNumber = function (value) {
    var match = value.match(/^(\d+(?:\.\d+)?)rem$/i);
    if (!match) {
        throw new Error('Value is not of type Rem');
    }
    return Number(match[1]);
};
exports.remToNumber = remToNumber;
var vhToNumber = function (value) {
    var match = value.match(/^(\d+(?:\.\d+)?)vh$/i);
    if (!match) {
        throw new Error('Value is not of type Vh');
    }
    return Number(match[1]);
};
exports.vhToNumber = vhToNumber;
var vwToNumber = function (value) {
    var match = value.match(/^(\d+(?:\.\d+)?)vw$/i);
    if (!match) {
        throw new Error('Value is not of type Vw');
    }
    return Number(match[1]);
};
exports.vwToNumber = vwToNumber;
var absoluteSizeToNumber = function (value) {
    if ((0, exports.isPx)(value)) {
        return (0, exports.pxToNumber)(value);
    }
    else if ((0, exports.isRem)(value)) {
        return (0, exports.remToNumber)(value);
    }
    else if ((0, exports.isVh)(value)) {
        return (0, exports.vhToNumber)(value);
    }
    return (0, exports.vwToNumber)(value);
};
exports.absoluteSizeToNumber = absoluteSizeToNumber;
var sizeToNumber = function (value) {
    if ((0, exports.isAbsoluteSize)(value)) {
        return (0, exports.absoluteSizeToNumber)(value);
    }
    return (0, exports.percentToNumber)(value);
};
exports.sizeToNumber = sizeToNumber;
var getBorderRadius = function (theme, borderRadius) {
    return (0, exports.isThemeSize)(borderRadius) ? theme.border.radius[borderRadius] : borderRadius;
};
exports.getBorderRadius = getBorderRadius;
var getBorderWidth = function (theme, borderWidth) {
    return (0, exports.isThemeSize)(borderWidth) ? theme.border.width[borderWidth] : borderWidth;
};
exports.getBorderWidth = getBorderWidth;
var getColor = function (theme, color) {
    return (0, exports.isThemeColor)(color) ? theme.color[color] : color;
};
exports.getColor = getColor;
var getDistance = function (theme, distance) {
    return (0, exports.isThemeSize)(distance) ? theme.distance[distance] : distance;
};
exports.getDistance = getDistance;
var getFontSize = function (theme, fontSize) {
    return (0, exports.isThemeSize)(fontSize) ? theme.font.size[fontSize] : fontSize;
};
exports.getFontSize = getFontSize;
var getFontWeight = function (theme, fontWeight) {
    return typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];
};
exports.getFontWeight = getFontWeight;
var getHeight = function (theme, height) {
    return (0, exports.isThemeSize)(height) ? theme.size.height[height] : height;
};
exports.getHeight = getHeight;
var getLineHeight = function (theme, lineHeight) {
    return (0, exports.isThemeSize)(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;
};
exports.getLineHeight = getLineHeight;
var getViewportThreshold = function (theme, viewportThreshold) {
    return typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];
};
exports.getViewportThreshold = getViewportThreshold;
var getWidth = function (theme, width) {
    return (0, exports.isThemeSize)(width) ? theme.size.width[width] : width;
};
exports.getWidth = getWidth;
var useEasyFlexTheme = function () { return (0, react_1.useContext)(constants_1.EasyFlexContext); };
exports.useEasyFlexTheme = useEasyFlexTheme;
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
    return (0, react_1.useMemo)(function () { return ({ height: height, width: width }); }, [height, width]);
};
exports.useDimension = useDimension;
var useViewport = function () {
    var theme = (0, exports.useEasyFlexTheme)();
    var width = (0, exports.useDimension)().width;
    return (0, react_1.useMemo)(function () { return ({
        default: width >= theme.viewport.defaultThreshold,
        '8xs': width >= (0, exports.getViewportThreshold)(theme, '8xs'),
        '7xs': width >= (0, exports.getViewportThreshold)(theme, '7xs'),
        '6xs': width >= (0, exports.getViewportThreshold)(theme, '6xs'),
        '5xs': width >= (0, exports.getViewportThreshold)(theme, '5xs'),
        '4xs': width >= (0, exports.getViewportThreshold)(theme, '4xs'),
        '3xs': width >= (0, exports.getViewportThreshold)(theme, '3xs'),
        xxs: width >= (0, exports.getViewportThreshold)(theme, 'xxs'),
        xs: width >= (0, exports.getViewportThreshold)(theme, 'xs'),
        s: width >= (0, exports.getViewportThreshold)(theme, 's'),
        m: width >= (0, exports.getViewportThreshold)(theme, 'm'),
        l: width >= (0, exports.getViewportThreshold)(theme, 'l'),
        xl: width >= (0, exports.getViewportThreshold)(theme, 'xl'),
        xxl: width >= (0, exports.getViewportThreshold)(theme, 'xxl'),
        '3xl': width >= (0, exports.getViewportThreshold)(theme, '3xl'),
        '4xl': width >= (0, exports.getViewportThreshold)(theme, '4xl'),
        '5xl': width >= (0, exports.getViewportThreshold)(theme, '5xl'),
        '6xl': width >= (0, exports.getViewportThreshold)(theme, '6xl'),
        '7xl': width >= (0, exports.getViewportThreshold)(theme, '7xl'),
        '8xl': width >= (0, exports.getViewportThreshold)(theme, '8xl'),
    }); }, [theme, width]);
};
exports.useViewport = useViewport;
