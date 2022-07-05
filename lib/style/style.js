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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
var StyledStyle = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var color = _a["data-color"];
    return color;
}, function (_a) {
    var fontSize = _a["data-font-size"];
    return fontSize;
}, function (_a) {
    var fontWeight = _a["data-font-weight"];
    return fontWeight;
}, function (_a) {
    var fontStyle = _a["data-font-style"];
    return fontStyle;
});
var Style = function (_a) {
    var backgroundColor = _a.backgroundColor, color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, italic = _a.italic, children = _a.children;
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, utils_1.useColor)(backgroundColor, undefined);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var processedFontSize = (0, react_1.useMemo)(function () {
        if (fontSize === undefined) {
            return fontSize;
        }
        var fontSizeValue = (0, utils_1.getFontSize)(theme, fontSize);
        if (theme.fontSizeType === 'rem') {
            return (0, utils_1.toRem)(fontSizeValue);
        }
        return (0, utils_1.toPx)(fontSizeValue);
    }, [fontSize, theme]);
    var processedFontWeight = (0, react_1.useMemo)(function () { return (fontWeight === undefined ? undefined : (0, utils_1.getFontWeight)(theme, fontWeight)); }, [fontWeight, theme]);
    var fontStyle = (0, react_1.useMemo)(function () { return (italic === undefined ? undefined : italic ? 'italic' : 'normal'); }, [italic]);
    return ((0, jsx_runtime_1.jsx)(StyledStyle, __assign({ "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-font-size": processedFontSize, "data-font-weight": processedFontWeight, "data-font-wtyle": fontStyle }, { children: children })));
};
exports.Style = Style;
var templateObject_1;
