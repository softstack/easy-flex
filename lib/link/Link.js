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
exports.createLink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var base_1 = require("../utils/base");
var color_1 = require("../utils/color");
var flexContainer_1 = require("../utils/flexContainer");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var gridItem_1 = require("../utils/gridItem");
var margin_1 = require("../utils/margin");
var misc_1 = require("../utils/misc");
var size_1 = require("../utils/size");
var StyledA = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tpadding: 0;\n\ttext-decoration: none;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tbox-sizing: border-box;\n\tpadding: 0;\n\ttext-decoration: none;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"])), color_1.colorStyle, flexContainer_1.flexContainerStyle, flexItem_1.flexItemStyle, font_1.fontStyle, gridItem_1.gridItemStyle, margin_1.marginStyle, misc_1.miscStyle, size_1.sizeStyle, function (_a) {
    var hoverColor = _a["data-hover-color"];
    return hoverColor;
});
var createLink = function () {
    var Link = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var _b;
        var align = _a.align, alignSelf = _a.alignSelf, aspectRatio = _a.aspectRatio, backgroundColor = _a.backgroundColor, basis = _a.basis, bottom = _a.bottom, children = _a.children, color = _a.color, display = _a.display, direction = _a.direction, flex = _a.flex, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, gap = _a.gap, grow = _a.grow, height = _a.height, hoverColor = _a.hoverColor, italic = _a.italic, justify = _a.justify, justifySelf = _a.justifySelf, left = _a.left, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, _c = _a.newTab, newTab = _c === void 0 ? false : _c, opacity = _a.opacity, position = _a.position, right = _a.right, shrink = _a.shrink, textOverflow = _a.textOverflow, top = _a.top, underline = _a.underline, userSelect = _a.userSelect, visibility = _a.visibility, whiteSpace = _a.whiteSpace, width = _a.width, wordBreak = _a.wordBreak, wrap = _a.wrap, wrapGap = _a.wrapGap, zIndex = _a.zIndex, props = __rest(_a, ["align", "alignSelf", "aspectRatio", "backgroundColor", "basis", "bottom", "children", "color", "display", "direction", "flex", "fontFamily", "fontSize", "fontWeight", "gap", "grow", "height", "hoverColor", "italic", "justify", "justifySelf", "left", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "newTab", "opacity", "position", "right", "shrink", "textOverflow", "top", "underline", "userSelect", "visibility", "whiteSpace", "width", "wordBreak", "wrap", "wrapGap", "zIndex"]);
        var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: (_b = (0, base_1.defalsify)(color)) !== null && _b !== void 0 ? _b : 'inherit' });
        var processedHoverColor = (0, color_1.useColor)(hoverColor);
        var flexContainerStyleProps = (0, flexContainer_1.useFlexContainerStyleProps)({
            align: align,
            direction: direction,
            gap: gap,
            justify: justify,
            wrap: wrap,
            wrapGap: wrapGap,
        });
        var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
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
        var gridItemStyleProps = (0, gridItem_1.useGridItemStyleProps)({ justifySelf: justifySelf });
        var marginStyleProps = (0, margin_1.useMarginStyleProps)({
            margin: margin,
            marginBottom: marginBottom,
            marginHorizontal: marginHorizontal,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginVertical: marginVertical,
        });
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
            zIndex: zIndex,
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
        var newTabProps = (0, react_1.useMemo)(function () {
            return newTab
                ? {
                    rel: 'noopener noreferrer',
                    target: '_blank',
                }
                : undefined;
        }, [newTab]);
        return ((0, jsx_runtime_1.jsx)(StyledA, __assign({ "data-hover-color": processedHoverColor }, colorStyleProps, flexContainerStyleProps, flexItemStyleProps, fontStyleProps, gridItemStyleProps, marginStyleProps, miscStyleProps, sizeStyleProps, newTabProps, { ref: ref }, props, { children: children })));
    }));
    Link.displayName = 'Link';
    return Link;
};
exports.createLink = createLink;
var templateObject_1;
