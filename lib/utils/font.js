"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyle = exports.useFontStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("./utils");
var useFontStyleProps = function (data) {
    var font = (0, utils_1.useFont)(data);
    return (0, react_1.useMemo)(function () { return ({
        'data-font-family': font.family,
        'data-font-size': font.size,
        'data-font-weight': font.weight,
        'data-font-style': font.style,
        'data-line-height': font.lineHeight,
    }); }, [font]);
};
exports.useFontStyleProps = useFontStyleProps;
exports.fontStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\tline-height: ", ";\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\tline-height: ", ";\n"])), function (_a) {
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
});
var templateObject_1;
