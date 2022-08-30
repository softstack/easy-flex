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
exports.BaseFlex = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var base_1 = require("../utils/base");
var border_1 = require("../utils/border");
var distance_1 = require("../utils/distance");
var font_1 = require("../utils/font");
var size_1 = require("../utils/size");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n\tflex-shrink: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n\tflex-shrink: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var color = _a["data-color"];
    return color;
}, function (_a) {
    var flexDirection = _a["data-flex-direction"];
    return flexDirection;
}, function (_a) {
    var columnGap = _a["data-column-gap"];
    return columnGap;
}, function (_a) {
    var rowGap = _a["data-row-gap"];
    return rowGap;
}, function (_a) {
    var grow = _a["data-grow"];
    return grow;
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
}, border_1.borderStyle, distance_1.distanceStyle, font_1.fontStyle, size_1.sizeStyle);
var Article = styled_components_1.default.article(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Aside = styled_components_1.default.aside(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Div = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Figure = styled_components_1.default.figure(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Footer = styled_components_1.default.footer(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Header = styled_components_1.default.header(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Main = styled_components_1.default.main(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Nav = styled_components_1.default.nav(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Section = styled_components_1.default.section(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Summary = styled_components_1.default.summary(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
exports.BaseFlex = (0, react_1.forwardRef)(function (_a, ref) {
    var align = _a.align, alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, children = _a.children, color = _a.color, _b = _a.element, element = _b === void 0 ? 'div' : _b, flexDirection = _a.flexDirection, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, gap = _a.gap, grow = _a.grow, height = _a.height, italic = _a.italic, justify = _a.justify, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical, round = _a.round, shrink = _a.shrink, width = _a.width, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "borderColor", "borderRadius", "borderStyle", "borderWidth", "children", "color", "element", "flexDirection", "fontFamily", "fontSize", "fontWeight", "fullHeight", "fullWidth", "gap", "grow", "height", "italic", "justify", "lineHeight", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingHorizontal", "paddingLeft", "paddingRight", "paddingTop", "paddingVertical", "round", "shrink", "width"]);
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, base_1.useColor)(backgroundColor, undefined);
    var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth, round: round });
    var processedColor = (0, base_1.useColor)(color, undefined);
    var fontStyleProps = (0, font_1.useFontStyleProps)({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, italic: italic, lineHeight: lineHeight });
    var columnGap = (0, react_1.useMemo)(function () {
        if (gap === undefined) {
            return undefined;
        }
        if (flexDirection === 'row' || flexDirection === 'row-reverse') {
            return (0, base_1.getDistance)(theme, gap);
        }
        return undefined;
    }, [flexDirection, gap, theme]);
    var rowGap = (0, react_1.useMemo)(function () {
        if (gap === undefined) {
            return undefined;
        }
        if (flexDirection === 'column' || flexDirection === 'column-reverse') {
            return (0, base_1.getDistance)(theme, gap);
        }
        return undefined;
    }, [flexDirection, gap, theme]);
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
    var Element = (0, react_1.useMemo)(function () {
        switch (element) {
            case 'article':
                return Article;
            case 'aside':
                return Aside;
            case 'div':
                return Div;
            case 'figure':
                return Figure;
            case 'footer':
                return Footer;
            case 'header':
                return Header;
            case 'main':
                return Main;
            case 'nav':
                return Nav;
            case 'section':
                return Section;
            case 'summary':
                return Summary;
        }
    }, [element]);
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-align": align, "data-align-self": alignSelf, "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-flex-direction": flexDirection, "data-column-gap": columnGap, "data-row-gap": rowGap, "data-grow": grow, "data-justify": justify, "data-overflow": overflow, "data-overflow-x": overflowX, "data-overflow-y": overflowY, "data-shrink": shrink }, borderStyleProps, distanceStyleProps, fontStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
});
exports.BaseFlex.displayName = 'BaseFlex';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
