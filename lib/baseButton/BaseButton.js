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
exports.createBaseButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var base_1 = require("../utils/base");
var border_1 = require("../utils/border");
var color_1 = require("../utils/color");
var distance_1 = require("../utils/distance");
var flexContainer_1 = require("../utils/flexContainer");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var gridItem_1 = require("../utils/gridItem");
var misc_1 = require("../utils/misc");
var overflow_1 = require("../utils/overflow");
var size_1 = require("../utils/size");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: transparent;\n\tborder: none;\n\tbox-sizing: border-box;\n\tcolor: inherit; /* For Safari on iOS */\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: none;\n\t}\n"], ["\n\tbackground-color: transparent;\n\tborder: none;\n\tbox-sizing: border-box;\n\tcolor: inherit; /* For Safari on iOS */\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t}\n\n\t&:focus:not(:focus-visible) {\n\t\toutline: none;\n\t}\n"])), border_1.borderStyle, color_1.colorStyle, distance_1.distanceStyle, flexContainer_1.flexContainerStyle, flexItem_1.flexItemStyle, font_1.fontStyle, gridItem_1.gridItemStyle, misc_1.miscStyle, overflow_1.overflowStyle, size_1.sizeStyle);
var createBaseButton = function () {
    var BaseButton = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var _b, _c, _d;
        var align = _a.align, alignSelf = _a.alignSelf, aspectRatio = _a.aspectRatio, backgroundColor = _a.backgroundColor, basis = _a.basis, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, bottom = _a.bottom, children = _a.children, color = _a.color, direction = _a.direction, display = _a.display, flex = _a.flex, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, gap = _a.gap, grow = _a.grow, height = _a.height, italic = _a.italic, justify = _a.justify, justifySelf = _a.justifySelf, left = _a.left, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, opacity = _a.opacity, overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical, position = _a.position, right = _a.right, shrink = _a.shrink, textOverflow = _a.textOverflow, top = _a.top, underline = _a.underline, userSelect = _a.userSelect, visibility = _a.visibility, whiteSpace = _a.whiteSpace, width = _a.width, wordBreak = _a.wordBreak, wrap = _a.wrap, wrapGap = _a.wrapGap, zIndex = _a.zIndex, props = __rest(_a, ["align", "alignSelf", "aspectRatio", "backgroundColor", "basis", "borderColor", "borderRadius", "borderStyle", "borderWidth", "bottom", "children", "color", "direction", "display", "flex", "fontFamily", "fontSize", "fontWeight", "gap", "grow", "height", "italic", "justify", "justifySelf", "left", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical", "position", "right", "shrink", "textOverflow", "top", "underline", "userSelect", "visibility", "whiteSpace", "width", "wordBreak", "wrap", "wrapGap", "zIndex"]);
        var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth });
        var colorStyleProps = (0, color_1.useColorStyleProps)({
            backgroundColor: (_b = (0, base_1.defalsify)(backgroundColor)) !== null && _b !== void 0 ? _b : 'transparent',
            color: color,
        });
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
        var flexContainerStyleProps = (0, flexContainer_1.useFlexContainerStyleProps)({
            align: align,
            direction: (_c = (0, base_1.defalsify)(direction)) !== null && _c !== void 0 ? _c : 'row',
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
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({
            bottom: bottom,
            display: (_d = (0, base_1.defalsify)(display)) !== null && _d !== void 0 ? _d : 'flex',
            left: left,
            opacity: opacity,
            position: position,
            right: right,
            top: top,
            userSelect: userSelect,
            visibility: visibility,
            zIndex: zIndex,
        });
        var overflowStyleProps = (0, overflow_1.useOverflowStyleProps)({ overflow: overflow, overflowX: overflowX, overflowY: overflowY });
        var sizeStyleProps = (0, size_1.useSizeStyleProps)({
            aspectRatio: aspectRatio,
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
            width: width,
        });
        return ((0, jsx_runtime_1.jsx)(StyledButton, __assign({}, borderStyleProps, colorStyleProps, distanceStyleProps, flexContainerStyleProps, flexItemStyleProps, fontStyleProps, gridItemStyleProps, miscStyleProps, overflowStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
    }));
    BaseButton.displayName = 'BaseButton';
    return BaseButton;
};
exports.createBaseButton = createBaseButton;
var templateObject_1;
