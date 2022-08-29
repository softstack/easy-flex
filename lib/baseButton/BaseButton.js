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
var distance_1 = require("../utils/distance");
var font_1 = require("../utils/font");
var size_1 = require("../utils/size");
var utils_1 = require("../utils/utils");
var StyledBaseButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tflex-direction: row;\n\tborder: none;\n\tcursor: pointer;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tborder-radius: ", ";\n\tborder-style: ", ";\n\tborder-width: ", ";\n\tcolor: ", ";\n\tflex-grow: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\tjustify-content: ", ";\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n\tflex-shrink: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tflex-direction: row;\n\tborder: none;\n\tcursor: pointer;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tborder-color: ", ";\n\tborder-radius: ", ";\n\tborder-style: ", ";\n\tborder-width: ", ";\n\tcolor: ", ";\n\tflex-grow: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\tjustify-content: ", ";\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n\tflex-shrink: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: 0;\n\t}\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var borderColor = _a["data-border-color"];
    return borderColor;
}, function (_a) {
    var borderRadius = _a["data-border-radius"];
    return borderRadius;
}, function (_a) {
    var borderStyle = _a["data-border-style"];
    return borderStyle;
}, function (_a) {
    var borderWidth = _a["data-border-width"];
    return borderWidth;
}, function (_a) {
    var color = _a["data-color"];
    return color;
}, function (_a) {
    var grow = _a["data-grow"];
    return grow;
}, function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var heightMax = _a["data-height-max"];
    return heightMax;
}, function (_a) {
    var heightMin = _a["data-height-min"];
    return heightMin;
}, function (_a) {
    var justify = _a["data-justify"];
    return justify;
}, function (_a) {
    var overflow = _a["data-overflow"];
    return overflow;
}, function (_a) {
    var overflowX = _a["data-overflow-x"];
    return overflowX;
}, function (_a) {
    var overflowY = _a["data-overflow-y"];
    return overflowY;
}, function (_a) {
    var shrink = _a["data-shrink"];
    return shrink;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, function (_a) {
    var widthMax = _a["data-width-max"];
    return widthMax;
}, function (_a) {
    var widthMin = _a["data-width-min"];
    return widthMin;
}, distance_1.distanceStyle, font_1.fontStyle, size_1.sizeStyle);
exports.BaseButton = (0, react_1.forwardRef)(function (_a, ref) {
    var align = _a.align, alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderWidth = _a.borderWidth, children = _a.children, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, grow = _a.grow, height = _a.height, italic = _a.italic, justify = _a.justify, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingHorizontal = _a.paddingHorizontal, paddingVertical = _a.paddingVertical, shrink = _a.shrink, width = _a.width, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "borderColor", "borderRadius", "borderWidth", "children", "color", "fontFamily", "fontSize", "fontWeight", "fullHeight", "fullWidth", "grow", "height", "italic", "justify", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginHorizontal", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingHorizontal", "paddingVertical", "shrink", "width"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, utils_1.useColor)(backgroundColor, 'transparent');
    var processedBorderColor = (0, utils_1.useColor)(borderColor, undefined);
    var processedBorderRadius = (0, react_1.useMemo)(function () { return (0, utils_1.ifNotUndefined)(borderRadius, function (borderRadius) { return (0, utils_1.getBorderRadius)(theme, borderRadius); }); }, [borderRadius, theme]);
    var processedBorderStyle = (0, react_1.useMemo)(function () { return (borderWidth ? 'solid' : undefined); }, [borderWidth]);
    var processedBorderWidth = (0, react_1.useMemo)(function () { return (0, utils_1.ifNotUndefined)(borderWidth, function (borderWidth) { return (0, utils_1.getBorderWidth)(theme, borderWidth); }); }, [borderWidth, theme]);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var distanceStyleProps = (0, distance_1.useDistanceStyleProps)({
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
    });
    var fontStyleProps = (0, font_1.useFontStyleProps)({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, italic: italic, lineHeight: lineHeight });
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
    return ((0, jsx_runtime_1.jsx)(StyledBaseButton, __assign({ "data-align": align, "data-align-self": alignSelf, "data-background-color": processedBackgroundColor, "data-border-color": processedBorderColor, "data-border-radius": processedBorderRadius, "data-border-style": processedBorderStyle, "data-border-width": processedBorderWidth, "data-color": processedColor, "data-grow": grow, "data-justify": justify, "data-overflow": overflow, "data-overflow-x": overflowX, "data-overflow-y": overflowY, "data-shrink": shrink }, distanceStyleProps, fontStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
});
exports.BaseButton.displayName = 'BaseButton';
var templateObject_1;
