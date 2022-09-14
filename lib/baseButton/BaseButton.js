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
exports.BaseButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var border_1 = require("../utils/border");
var color_1 = require("../utils/color");
var distance_1 = require("../utils/distance");
var flexContainer_1 = require("../utils/flexContainer");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var overflow_1 = require("../utils/overflow");
var size_1 = require("../utils/size");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tborder: none;\n\tcursor: pointer;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: none;\n\t}\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tborder: none;\n\tcursor: pointer;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: none;\n\t}\n"])), border_1.borderStyle, color_1.colorStyle, distance_1.distanceStyle, flexContainer_1.flexContainerStyle, flexItem_1.flexItemStyle, font_1.fontStyle, overflow_1.overflowStyle, size_1.sizeStyle);
exports.BaseButton = (0, react_1.forwardRef)(function (_a, ref) {
    var align = _a.align, alignSelf = _a.alignSelf, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b, basis = _a.basis, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, children = _a.children, color = _a.color, flex = _a.flex, _c = _a.direction, direction = _c === void 0 ? 'row' : _c, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, gap = _a.gap, grow = _a.grow, height = _a.height, italic = _a.italic, justify = _a.justify, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical, round = _a.round, shrink = _a.shrink, underline = _a.underline, width = _a.width, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "basis", "borderColor", "borderRadius", "borderStyle", "borderWidth", "children", "color", "flex", "direction", "fontFamily", "fontSize", "fontWeight", "fullHeight", "fullWidth", "gap", "grow", "height", "italic", "justify", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical", "round", "shrink", "underline", "width"]);
    var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth, round: round });
    var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: color });
    var distanceStyleProps = (0, distance_1.useDistanceStyleProps)({
        margin: margin,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginVertical: marginVertical,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingHorizontal: paddingHorizontal,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingVertical: paddingVertical,
    });
    var fontStyleProps = (0, font_1.useFontStyleProps)({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, italic: italic, lineHeight: lineHeight, underline: underline });
    var flexContainerStyleProps = (0, flexContainer_1.useFlexContainerStyleProps)({ align: align, direction: direction, gap: gap, justify: justify });
    var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
    var overflowStyleProps = (0, overflow_1.useOverflowStyleProps)({ overflow: overflow, overflowX: overflowX, overflowY: overflowY });
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
    return ((0, jsx_runtime_1.jsx)(StyledButton, __assign({}, borderStyleProps, colorStyleProps, distanceStyleProps, flexContainerStyleProps, flexItemStyleProps, fontStyleProps, overflowStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
});
exports.BaseButton.displayName = 'BaseButton';
var templateObject_1;
