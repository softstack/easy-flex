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
exports.createBaseTextArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var border_1 = require("../utils/border");
var color_1 = require("../utils/color");
var distance_1 = require("../utils/distance");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var gridItem_1 = require("../utils/gridItem");
var misc_1 = require("../utils/misc");
var size_1 = require("../utils/size");
var StyledTextArea = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tborder: none;\n\tbox-sizing: border-box;\n\tcolor: inherit;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&::placeholder {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tborder: none;\n\tbox-sizing: border-box;\n\tcolor: inherit;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&::placeholder {\n\t\tcolor: ", ";\n\t}\n"])), border_1.borderStyle, color_1.colorStyle, distance_1.distanceStyle, flexItem_1.flexItemStyle, font_1.fontStyle, gridItem_1.gridItemStyle, misc_1.miscStyle, size_1.sizeStyle, function (_a) {
    var placeholderColor = _a["data-placeholder-color"];
    return placeholderColor;
});
var createBaseTextArea = function () {
    var BaseTextArea = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var alignSelf = _a.alignSelf, aspectRatio = _a.aspectRatio, backgroundColor = _a.backgroundColor, basis = _a.basis, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, bottom = _a.bottom, children = _a.children, color = _a.color, display = _a.display, flex = _a.flex, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, grow = _a.grow, height = _a.height, italic = _a.italic, justifySelf = _a.justifySelf, left = _a.left, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, opacity = _a.opacity, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical, placeholderColor = _a.placeholderColor, position = _a.position, right = _a.right, shrink = _a.shrink, textOverflow = _a.textOverflow, top = _a.top, underline = _a.underline, userSelect = _a.userSelect, visibility = _a.visibility, whiteSpace = _a.whiteSpace, width = _a.width, wordBreak = _a.wordBreak, props = __rest(_a, ["alignSelf", "aspectRatio", "backgroundColor", "basis", "borderColor", "borderRadius", "borderStyle", "borderWidth", "bottom", "children", "color", "display", "flex", "fontFamily", "fontSize", "fontWeight", "grow", "height", "italic", "justifySelf", "left", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical", "placeholderColor", "position", "right", "shrink", "textOverflow", "top", "underline", "userSelect", "visibility", "whiteSpace", "width", "wordBreak"]);
        var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth });
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
        var fontStyleProps = (0, font_1.useFontStyleProps)({
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
            italic: italic,
            lineHeight: lineHeight,
            textOverflow: textOverflow,
            underline: underline,
            whiteSpace: whiteSpace,
            wordBreak: wordBreak,
        });
        var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
        var gridItemStyleProps = (0, gridItem_1.useGridItemStyleProps)({ justifySelf: justifySelf });
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({
            bottom: bottom,
            display: display,
            left: left,
            opacity: opacity,
            position: position,
            right: right,
            top: top,
            userSelect: userSelect,
            visibility: visibility,
        });
        var sizeStyleProps = (0, size_1.useSizeStyleProps)({
            aspectRatio: aspectRatio,
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
            width: width,
        });
        var processedPlaceholderColor = (0, color_1.useColor)(placeholderColor);
        return ((0, jsx_runtime_1.jsx)(StyledTextArea, __assign({ "data-placeholder-color": processedPlaceholderColor }, borderStyleProps, colorStyleProps, distanceStyleProps, flexItemStyleProps, fontStyleProps, gridItemStyleProps, miscStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
    }));
    BaseTextArea.displayName = 'BaseTextArea';
    return BaseTextArea;
};
exports.createBaseTextArea = createBaseTextArea;
var templateObject_1;
