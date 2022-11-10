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
exports.createStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importStar(require("styled-components"));
var color_1 = require("../utils/color");
var font_1 = require("../utils/font");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\t", "\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\t", "\n\t", "\n"])), color_1.colorStyle, font_1.fontStyle);
var StyledB = styled_components_1.default.b(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledCite = styled_components_1.default.cite(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledCode = styled_components_1.default.code(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledEm = styled_components_1.default.em(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledI = styled_components_1.default.i(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledKbd = styled_components_1.default.kbd(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledMark = styled_components_1.default.mark(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledS = styled_components_1.default.s(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSamp = styled_components_1.default.samp(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSmall = styled_components_1.default.small(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSpan = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledStrong = styled_components_1.default.strong(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSub = styled_components_1.default.sub(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledSup = styled_components_1.default.sup(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledU = styled_components_1.default.u(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var StyledVar = styled_components_1.default.var(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var createStyle = function () {
    var Style = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var backgroundColor = _a.backgroundColor, children = _a.children, color = _a.color, _b = _a.element, element = _b === void 0 ? 'span' : _b, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, italic = _a.italic, lineHeight = _a.lineHeight, opacity = _a.opacity, underline = _a.underline, whiteSpace = _a.whiteSpace, wordBreak = _a.wordBreak;
        var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: color, opacity: opacity });
        var fontStyleProps = (0, font_1.useFontStyleProps)({
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
            italic: italic,
            lineHeight: lineHeight,
            underline: underline,
            whiteSpace: whiteSpace,
            wordBreak: wordBreak,
        });
        var Element = (0, react_1.useMemo)(function () {
            switch (element) {
                case 'b':
                    return StyledB;
                case 'cite':
                    return StyledCite;
                case 'code':
                    return StyledCode;
                case 'em':
                    return StyledEm;
                case 'i':
                    return StyledI;
                case 'kbd':
                    return StyledKbd;
                case 'mark':
                    return StyledMark;
                case 's':
                    return StyledS;
                case 'samp':
                    return StyledSamp;
                case 'small':
                    return StyledSmall;
                case 'span':
                case false:
                    return StyledSpan;
                case 'strong':
                    return StyledStrong;
                case 'sub':
                    return StyledSub;
                case 'sup':
                    return StyledSup;
                case 'u':
                    return StyledU;
                case 'var':
                    return StyledVar;
            }
        }, [element]);
        return ((0, jsx_runtime_1.jsx)(Element, __assign({}, colorStyleProps, fontStyleProps, { ref: ref }, { children: children })));
    }));
    Style.displayName = 'Style';
    return Style;
};
exports.createStyle = createStyle;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
