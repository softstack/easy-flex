"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseImg = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var margin_1 = require("../utils/margin");
var size_1 = require("../utils/size");
var utils_1 = require("../utils/utils");
var StyledBaseImg = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tborder-radius: ", ";\n\tobject-fit: ", ";\n\t", "\n\t", "\n"], ["\n\tdisplay: flex;\n\tborder-radius: ", ";\n\tobject-fit: ", ";\n\t", "\n\t", "\n"])), function (_a) {
    var borderRadius = _a["data-border-radius"];
    return borderRadius;
}, function (_a) {
    var objectFit = _a["data-object-fit"];
    return objectFit;
}, margin_1.marginStyle, size_1.sizeStyle);
exports.BaseImg = (0, react_1.forwardRef)(function (_a, ref) {
    var borderRadius = _a.borderRadius, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, height = _a.height, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, objectFit = _a.objectFit, _b = _a.round, round = _b === void 0 ? false : _b, width = _a.width, props = __rest(_a, ["borderRadius", "fullHeight", "fullWidth", "height", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginHorizontal", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "objectFit", "round", "width"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBorderRadius = (0, react_1.useMemo)(function () { return (round ? '100000px' : (0, utils_1.ifNotUndefined)(borderRadius, function (borderRadius) { return (0, utils_1.getBorderRadius)(theme, borderRadius); })); }, [borderRadius, round, theme]);
    var marginStyleProps = (0, margin_1.useMarginStyleProps)({
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
    });
    var sizeStyleProps = (0, size_1.useSizeStyleProps)({
        fullHeight: fullHeight,
        fullWidth: fullWidth,
        height: height,
        heightMax: maxHeight,
        heightMin: minHeight,
        width: width,
        widthMax: maxWidth,
        widthMin: minWidth,
    });
    return ((0, jsx_runtime_1.jsx)(StyledBaseImg, __assign({ "data-border-radius": processedBorderRadius, "data-object-fit": objectFit }, marginStyleProps, sizeStyleProps, { ref: ref }, props)));
});
exports.BaseImg.displayName = 'BaseImg';
var templateObject_1;
