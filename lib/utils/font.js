"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyle = exports.useFontStyleProps = exports.useFont = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var color_1 = require("./color");
var useFont = function (_a) {
    var fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, italic = _a.italic, lineHeight = _a.lineHeight, underline = _a.underline, underlineColor = _a.underlineColor;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedFontFamily = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(fontFamily, function (fontFamily) { return theme.font.family[fontFamily]; }); }, [fontFamily, theme]);
    var processedFontSize = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(fontSize, function (fontSize) { return (0, base_1.getFontSize)(theme, fontSize); }); }, [fontSize, theme]);
    var processedFontWeight = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(fontWeight, function (fontWeight) { return (0, base_1.getFontWeight)(theme, fontWeight); }); }, [fontWeight, theme]);
    var processedItalic = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(italic, function (italic) { return (italic ? 'italic' : 'normal'); }); }, [italic]);
    var processedLineHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(lineHeight, function (lineHeight) { return (0, base_1.getLineHeight)(theme, lineHeight); }); }, [lineHeight, theme]);
    var processedUnderline = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(underline, function (underline) { return (underline ? 'underline' : 'none'); }); }, [underline]);
    var processedUnderlineColor = (0, color_1.useColor)(underlineColor);
    return (0, react_1.useMemo)(function () { return ({
        family: processedFontFamily,
        size: processedFontSize,
        weight: processedFontWeight,
        style: processedItalic,
        lineHeight: processedLineHeight,
        textDecoration: processedUnderline,
        textDecorationColor: processedUnderlineColor,
    }); }, [
        processedFontFamily,
        processedFontSize,
        processedFontWeight,
        processedItalic,
        processedLineHeight,
        processedUnderline,
        processedUnderlineColor,
    ]);
};
exports.useFont = useFont;
var useFontStyleProps = function (props) {
    var font = (0, exports.useFont)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-font-family': font.family,
        'data-font-size': font.size,
        'data-font-weight': font.weight,
        'data-font-style': font.style,
        'data-line-height': font.lineHeight,
        'data-text-decoration': font.textDecoration,
        'data-text-decoration-color': font.textDecorationColor,
    }); }, [font]);
};
exports.useFontStyleProps = useFontStyleProps;
exports.fontStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\tline-height: ", ";\n\ttext-decoration: ", ";\n\ttext-decoration-color: ", ";\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\tline-height: ", ";\n\ttext-decoration: ", ";\n\ttext-decoration-color: ", ";\n"])), function (_a) {
    var fontFamily = _a["data-font-family"];
    return fontFamily;
}, function (_a) {
    var fontSize = _a["data-font-size"];
    return fontSize;
}, function (_a) {
    var fontWeight = _a["data-font-weight"];
    return fontWeight;
}, function (_a) {
    var fontStyle = _a["data-font-style"];
    return fontStyle;
}, function (_a) {
    var lineHeight = _a["data-line-height"];
    return lineHeight;
}, function (_a) {
    var textDecoration = _a["data-text-decoration"];
    return textDecoration;
}, function (_a) {
    var textDecorationColor = _a["data-text-decoration-color"];
    return textDecorationColor;
});
var templateObject_1;
