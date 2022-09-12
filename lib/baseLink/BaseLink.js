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
exports.BaseLink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var color_1 = require("../utils/color");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var margin_1 = require("../utils/margin");
var size_1 = require("../utils/size");
var StyledBaseLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"])), color_1.colorStyle, flexItem_1.flexItemStyle, font_1.fontStyle, margin_1.marginStyle, size_1.sizeStyle, function (_a) {
    var hoverColor = _a["data-hover-color"];
    return hoverColor;
});
exports.BaseLink = (0, react_1.forwardRef)(function (_a, ref) {
    var alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, basis = _a.basis, children = _a.children, _b = _a.color, color = _b === void 0 ? 'inherit' : _b, flex = _a.flex, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, grow = _a.grow, height = _a.height, hoverColor = _a.hoverColor, italic = _a.italic, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, _c = _a.newTab, newTab = _c === void 0 ? false : _c, shrink = _a.shrink, underline = _a.underline, width = _a.width, props = __rest(_a, ["alignSelf", "backgroundColor", "basis", "children", "color", "flex", "fontFamily", "fontSize", "fontWeight", "fullHeight", "fullWidth", "grow", "height", "hoverColor", "italic", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "newTab", "shrink", "underline", "width"]);
    var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: color }, undefined, undefined);
    var processedHoverColor = (0, color_1.useColor)(hoverColor, undefined);
    var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
    var fontStyleProps = (0, font_1.useFontStyleProps)({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, italic: italic, lineHeight: lineHeight, underline: underline });
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
    var newTabProps = (0, react_1.useMemo)(function () {
        return newTab
            ? {
                rel: 'noopener noreferrer',
                target: '_blank',
            }
            : undefined;
    }, [newTab]);
    return ((0, jsx_runtime_1.jsx)(StyledBaseLink, __assign({ "data-hover-color": processedHoverColor }, colorStyleProps, flexItemStyleProps, fontStyleProps, marginStyleProps, sizeStyleProps, newTabProps, { ref: ref }, props, { children: children })));
});
exports.BaseLink.displayName = 'BaseLink';
var templateObject_1;
