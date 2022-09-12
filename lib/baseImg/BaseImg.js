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
var border_1 = require("../utils/border");
var margin_1 = require("../utils/margin");
var size_1 = require("../utils/size");
var StyledBaseImg = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tobject-fit: ", ";\n\t", "\n\t", "\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tobject-fit: ", ";\n\t", "\n\t", "\n\t", "\n"])), function (_a) {
    var objectFit = _a["data-object-fit"];
    return objectFit;
}, border_1.borderStyle, margin_1.marginStyle, size_1.sizeStyle);
exports.BaseImg = (0, react_1.forwardRef)(function (_a, ref) {
    var borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, height = _a.height, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, objectFit = _a.objectFit, round = _a.round, width = _a.width, props = __rest(_a, ["borderColor", "borderRadius", "borderStyle", "borderWidth", "fullHeight", "fullWidth", "height", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "objectFit", "round", "width"]);
    var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth, round: round });
    var marginStyleProps = (0, margin_1.useMarginStyleProps)({
        margin: margin,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginVertical: marginVertical,
    });
    var sizeStyleProps = (0, size_1.useSizeStyleProps)({
        fullHeight: fullHeight,
        fullWidth: fullWidth,
        height: height,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        minHeight: minHeight,
        minWidth: minWidth,
        width: width,
    });
    return ((0, jsx_runtime_1.jsx)(StyledBaseImg, __assign({ "data-object-fit": objectFit }, borderStyleProps, marginStyleProps, sizeStyleProps, { ref: ref }, props)));
});
exports.BaseImg.displayName = 'BaseImg';
var templateObject_1;
