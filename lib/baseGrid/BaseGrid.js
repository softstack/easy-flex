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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBaseGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var base_1 = require("../utils/base");
var border_1 = require("../utils/border");
var color_1 = require("../utils/color");
var distance_1 = require("../utils/distance");
var flexItem_1 = require("../utils/flexItem");
var font_1 = require("../utils/font");
var gridItem_1 = require("../utils/gridItem");
var misc_1 = require("../utils/misc");
var overflow_1 = require("../utils/overflow");
var size_1 = require("../utils/size");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\talign-content: ", ";\n\talign-items: ", ";\n\tcolumn-gap: ", ";\n\tjustify-content: ", ";\n\tjustify-items: ", ";\n\trow-gap: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\talign-content: ", ";\n\talign-items: ", ";\n\tcolumn-gap: ", ";\n\tjustify-content: ", ";\n\tjustify-items: ", ";\n\trow-gap: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"])), function (_a) {
    var alignContent = _a["data-align-content"];
    return alignContent;
}, function (_a) {
    var alignItems = _a["data-align-items"];
    return alignItems;
}, function (_a) {
    var columnGap = _a["data-column-gap"];
    return columnGap;
}, function (_a) {
    var justifyContent = _a["data-justify-content"];
    return justifyContent;
}, function (_a) {
    var justifyItems = _a["data-justify-items"];
    return justifyItems;
}, function (_a) {
    var rowGap = _a["data-row-gap"];
    return rowGap;
}, border_1.borderStyle, color_1.colorStyle, distance_1.distanceStyle, flexItem_1.flexItemStyle, font_1.fontStyle, gridItem_1.gridItemStyle, misc_1.miscStyle, overflow_1.overflowStyle, size_1.sizeStyle);
var StyledArticle = styled_components_1.default.article(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledAside = styled_components_1.default.aside(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledDiv = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledFigure = styled_components_1.default.figure(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledFooter = styled_components_1.default.footer(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledHeader = styled_components_1.default.header(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledMain = styled_components_1.default.main(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledNav = styled_components_1.default.nav(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSection = styled_components_1.default.section(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSummary = styled_components_1.default.summary(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var createBaseGrid = function () {
    var BaseGrid = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var _b;
        var alignContent = _a.alignContent, alignItems = _a.alignItems, alignSelf = _a.alignSelf, aspectRatio = _a.aspectRatio, backgroundColor = _a.backgroundColor, basis = _a.basis, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, bottom = _a.bottom, children = _a.children, color = _a.color, columnGap = _a.columnGap, display = _a.display, element = _a.element, flex = _a.flex, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, grow = _a.grow, height = _a.height, italic = _a.italic, justifyContent = _a.justifyContent, justifyItems = _a.justifyItems, justifySelf = _a.justifySelf, left = _a.left, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, opacity = _a.opacity, overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical, position = _a.position, right = _a.right, rowGap = _a.rowGap, shrink = _a.shrink, textOverflow = _a.textOverflow, top = _a.top, underline = _a.underline, userSelect = _a.userSelect, visibility = _a.visibility, whiteSpace = _a.whiteSpace, width = _a.width, wordBreak = _a.wordBreak, zIndex = _a.zIndex, props = __rest(_a, ["alignContent", "alignItems", "alignSelf", "aspectRatio", "backgroundColor", "basis", "borderColor", "borderRadius", "borderStyle", "borderWidth", "bottom", "children", "color", "columnGap", "display", "element", "flex", "fontFamily", "fontSize", "fontWeight", "grow", "height", "italic", "justifyContent", "justifyItems", "justifySelf", "left", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical", "position", "right", "rowGap", "shrink", "textOverflow", "top", "underline", "userSelect", "visibility", "whiteSpace", "width", "wordBreak", "zIndex"]);
        var theme = (0, base_1.useEasyFlexTheme)();
        var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth });
        var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: color });
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
        var gridItemStyleProps = (0, gridItem_1.useGridItemStyleProps)({ justifySelf: justifySelf });
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({
            bottom: bottom,
            display: (_b = (0, base_1.defalsify)(display)) !== null && _b !== void 0 ? _b : 'grid',
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
        var processedAlignContent = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(alignContent); }, [alignContent]);
        var processedAlignItems = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(alignItems); }, [alignItems]);
        var processedColumnGap = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(columnGap, function (columnGap) { return (0, base_1.getDistance)(theme, columnGap); }); }, [columnGap, theme]);
        var processedJustifyContent = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(justifyContent); }, [justifyContent]);
        var processedJustifyItems = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(justifyItems); }, [justifyItems]);
        var processedRowGap = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(rowGap, function (rowGap) { return (0, base_1.getDistance)(theme, rowGap); }); }, [rowGap, theme]);
        var Element = (0, react_1.useMemo)(function () {
            var _a;
            switch ((_a = (0, base_1.defalsify)(element)) !== null && _a !== void 0 ? _a : 'div') {
                case 'article':
                    return StyledArticle;
                case 'aside':
                    return StyledAside;
                case 'div':
                    return StyledDiv;
                case 'figure':
                    return StyledFigure;
                case 'footer':
                    return StyledFooter;
                case 'header':
                    return StyledHeader;
                case 'main':
                    return StyledMain;
                case 'nav':
                    return StyledNav;
                case 'section':
                    return StyledSection;
                case 'summary':
                    return StyledSummary;
            }
        }, [element]);
        return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-align-content": processedAlignContent, "data-align-items": processedAlignItems, "data-column-gap": processedColumnGap, "data-justify-content": processedJustifyContent, "data-justify-items": processedJustifyItems, "data-row-gap": processedRowGap }, borderStyleProps, colorStyleProps, distanceStyleProps, flexItemStyleProps, fontStyleProps, gridItemStyleProps, miscStyleProps, overflowStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
    }));
    BaseGrid.displayName = 'BaseGrid';
    return BaseGrid;
};
exports.createBaseGrid = createBaseGrid;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
