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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var utils_1 = require("../utils");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n"], ["\n\tbox-sizing: border-box;\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n"])), function (_a) {
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
var B = styled_components_1.default.b(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Cite = styled_components_1.default.cite(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Code = styled_components_1.default.code(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Em = styled_components_1.default.em(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var I = styled_components_1.default.i(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Kbd = styled_components_1.default.kbd(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Mark = styled_components_1.default.mark(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var S = styled_components_1.default.s(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Samp = styled_components_1.default.samp(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Small = styled_components_1.default.small(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Span = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Strong = styled_components_1.default.strong(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Sub = styled_components_1.default.sub(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Sup = styled_components_1.default.sup(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var U = styled_components_1.default.u(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Var = styled_components_1.default.var(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Style = function (_a) {
    var backgroundColor = _a.backgroundColor, color = _a.color, _b = _a.element, element = _b === void 0 ? 'span' : _b, fontSize = _a.fontSize, fontWeight = _a.fontWeight, italic = _a.italic, children = _a.children;
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, utils_1.useColor)(backgroundColor, undefined);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var processedFontSize = (0, react_1.useMemo)(function () {
        if (fontSize === undefined) {
            return undefined;
        }
        var fontSizeValue = (0, utils_1.getFontSize)(theme, fontSize);
        if (theme.font.sizeType === 'rem') {
            return (0, utils_1.toRem)(fontSizeValue);
        }
        return (0, utils_1.toPx)(fontSizeValue);
    }, [fontSize, theme]);
    var processedFontWeight = (0, react_1.useMemo)(function () { return (0, utils_1.ifNotUndefined)(fontWeight, function (fontWeight) { return (0, utils_1.getFontWeight)(theme, fontWeight); }); }, [fontWeight, theme]);
    var fontStyle = (0, react_1.useMemo)(function () { return (0, utils_1.ifNotUndefined)(italic, function (italic) { return (italic ? 'italic' : 'normal'); }); }, [italic]);
    var Element = (0, react_1.useMemo)(function () {
        switch (element) {
            case 'b':
                return B;
            case 'cite':
                return Cite;
            case 'code':
                return Code;
            case 'em':
                return Em;
            case 'i':
                return I;
            case 'kbd':
                return Kbd;
            case 'mark':
                return Mark;
            case 's':
                return S;
            case 'samp':
                return Samp;
            case 'small':
                return Small;
            case 'span':
                return Span;
            case 'strong':
                return Strong;
            case 'sub':
                return Sub;
            case 'sup':
                return Sup;
            case 'u':
                return U;
            case 'var':
                return Var;
        }
    }, [element]);
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-font-size": processedFontSize, "data-font-weight": processedFontWeight, "data-font-wtyle": fontStyle }, { children: children })));
};
exports.Style = Style;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
