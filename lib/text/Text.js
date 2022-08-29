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
exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var distance_1 = require("../utils/distance");
var font_1 = require("../utils/font");
var size_1 = require("../utils/size");
var utils_1 = require("../utils/utils");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-align: ", ";\n\talign-self: ", ";\n\tcolor: ", ";\n\tword-break: ", ";\n\t", "\n\t", "\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\ttext-align: ", ";\n\talign-self: ", ";\n\tcolor: ", ";\n\tword-break: ", ";\n\t", "\n\t", "\n\t", "\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var color = _a["data-color"];
    return color;
}, function (_a) {
    var wordBreak = _a["data-word-break"];
    return wordBreak;
}, distance_1.distanceStyle, font_1.fontStyle, size_1.sizeStyle);
var H1 = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H2 = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H3 = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H4 = styled_components_1.default.h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H5 = styled_components_1.default.h5(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H6 = styled_components_1.default.h6(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var P = styled_components_1.default.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
exports.Text = (0, react_1.forwardRef)(function (_a, ref) {
    var align = _a.align, alignSelf = _a.alignSelf, children = _a.children, color = _a.color, _b = _a.element, element = _b === void 0 ? 'p' : _b, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, fullHeight = _a.fullHeight, fullWidth = _a.fullWidth, height = _a.height, italic = _a.italic, lineHeight = _a.lineHeight, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingHorizontal = _a.paddingHorizontal, paddingVertical = _a.paddingVertical, width = _a.width, wordBreak = _a.wordBreak, props = __rest(_a, ["align", "alignSelf", "children", "color", "element", "fontFamily", "fontSize", "fontWeight", "fullHeight", "fullWidth", "height", "italic", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginHorizontal", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingHorizontal", "paddingVertical", "width", "wordBreak"]);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var fontStyleProps = (0, font_1.useFontStyleProps)({ fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, italic: italic, lineHeight: lineHeight });
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
    var Element = (0, react_1.useMemo)(function () {
        switch (element) {
            case 'h1':
                return H1;
            case 'h2':
                return H2;
            case 'h3':
                return H3;
            case 'h4':
                return H4;
            case 'h5':
                return H5;
            case 'h6':
                return H6;
            case 'p':
                return P;
        }
    }, [element]);
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-align": align, "data-align-self": alignSelf, "data-color": processedColor, "data-word-break": wordBreak }, distanceStyleProps, fontStyleProps, sizeStyleProps, { ref: ref }, props, { children: children })));
});
exports.Text.displayName = 'Text';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;