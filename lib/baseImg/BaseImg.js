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
var utils_1 = require("../utils");
var StyledBaseImg = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tborder-radius: ", ";\n\theight: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tobject-fit: ", ";\n\twidth: ", ";\n"], ["\n\tdisplay: flex;\n\tborder-radius: ", ";\n\theight: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tobject-fit: ", ";\n\twidth: ", ";\n"])), function (_a) {
    var borderRadius = _a["data-border-radius"];
    return borderRadius;
}, function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var marginBottom = _a["data-margin-bottom"];
    return marginBottom;
}, function (_a) {
    var marginLeft = _a["data-margin-left"];
    return marginLeft;
}, function (_a) {
    var marginRight = _a["data-margin-right"];
    return marginRight;
}, function (_a) {
    var marginTop = _a["data-margin-top"];
    return marginTop;
}, function (_a) {
    var objectFit = _a["data-object-fit"];
    return objectFit;
}, function (_a) {
    var width = _a["data-width"];
    return width;
});
exports.BaseImg = (0, react_1.forwardRef)(function (_a, ref) {
    var borderRadius = _a.borderRadius, height = _a.height, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, objectFit = _a.objectFit, _b = _a.round, round = _b === void 0 ? false : _b, width = _a.width, props = __rest(_a, ["borderRadius", "height", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginHorizontal", "marginVertical", "objectFit", "round", "width"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBorderRadius = (0, react_1.useMemo)(function () { return (round ? '100000px' : (0, utils_1.ifNotUndefined)(borderRadius, function (borderRadius) { return (0, utils_1.getBorderRadius)(theme, borderRadius); })); }, [borderRadius, round, theme]);
    var distance = (0, utils_1.useDistance)({
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
    });
    var size = (0, utils_1.useSize)({
        fullHeight: false,
        fullWidth: false,
        height: height,
        width: width,
    });
    return ((0, jsx_runtime_1.jsx)(StyledBaseImg, __assign({ "data-border-radius": processedBorderRadius, "data-height": size.height, "data-margin-bottom": distance.margin.bottom, "data-margin-left": distance.margin.left, "data-margin-right": distance.margin.right, "data-margin-top": distance.margin.top, "data-object-fit": objectFit, "data-width": size.width, ref: ref }, props)));
});
exports.BaseImg.displayName = 'BaseImg';
var templateObject_1;
