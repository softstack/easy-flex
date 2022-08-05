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
var utils_1 = require("../utils");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-align: ", ";\n\talign-self: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n\tword-break: ", ";\n"], ["\n\tbox-sizing: border-box;\n\ttext-align: ", ";\n\talign-self: ", ";\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: ", ";\n\tfont-style: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n\tword-break: ", ";\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
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
}, function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var heightMax = _a["data-height-max"];
    return heightMax;
}, function (_a) {
    var heightMin = _a["data-height-min"];
    return heightMin;
}, function (_a) {
    var marginBottom = _a["data-margin-bottom"];
    return marginBottom;
}, function (_a) {
    var marginLeft = _a["data-margin-left"];
    return marginLeft;
}, function (_a) {
    var marginRight = _a["data-margin-right"];
    return marginRight;
}, function (_a) {
    var marginTop = _a["data-margin-top"];
    return marginTop;
}, function (_a) {
    var paddingBottom = _a["data-padding-bottom"];
    return paddingBottom;
}, function (_a) {
    var paddingLeft = _a["data-padding-left"];
    return paddingLeft;
}, function (_a) {
    var paddingRight = _a["data-padding-right"];
    return paddingRight;
}, function (_a) {
    var paddingTop = _a["data-padding-top"];
    return paddingTop;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, function (_a) {
    var widthMax = _a["data-width-max"];
    return widthMax;
}, function (_a) {
    var widthMin = _a["data-width-min"];
    return widthMin;
}, function (_a) {
    var wordBreak = _a["data-word-break"];
    return wordBreak;
});
var H1 = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H2 = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H3 = styled_components_1.default.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H4 = styled_components_1.default.h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H5 = styled_components_1.default.h5(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var H6 = styled_components_1.default.h6(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var P = styled_components_1.default.p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), style);
var Text = function (_a) {
    var align = _a.align, alignSelf = _a.alignSelf, children = _a.children, _b = _a.color, color = _b === void 0 ? 'primaryText' : _b, _c = _a.element, element = _c === void 0 ? 'p' : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 'm' : _d, _e = _a.fontWeight, fontWeight = _e === void 0 ? 'normal' : _e, _f = _a.fullHeight, fullHeight = _f === void 0 ? false : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, height = _a.height, italic = _a.italic, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY, width = _a.width, wordBreak = _a.wordBreak, props = __rest(_a, ["align", "alignSelf", "children", "color", "element", "fontSize", "fontWeight", "fullHeight", "fullWidth", "height", "italic", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "maxHeight", "maxWidth", "minHeight", "minWidth", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "width", "wordBreak"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedColor = (0, react_1.useMemo)(function () { return (0, utils_1.getColor)(theme, color); }, [color, theme]);
    var processedFontSize = (0, react_1.useMemo)(function () {
        var fontSizeValue = (0, utils_1.getFontSize)(theme, fontSize);
        if (theme.font.sizeType === 'rem') {
            return (0, utils_1.toRem)(fontSizeValue);
        }
        return (0, utils_1.toPx)(fontSizeValue);
    }, [fontSize, theme]);
    var processedFontWeight = (0, react_1.useMemo)(function () { return (0, utils_1.getFontWeight)(theme, fontWeight); }, [fontWeight, theme]);
    var fontStyle = (0, react_1.useMemo)(function () { return (0, utils_1.ifNotUndefined)(italic, function (italic) { return (italic ? 'italic' : 'normal'); }); }, [italic]);
    var distance = (0, utils_1.useDistance)({
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginX: marginX,
        marginY: marginY,
        padding: padding,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingX: paddingX,
        paddingY: paddingY,
    });
    var size = (0, utils_1.useSize)({
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
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-align": align, "data-align-self": alignSelf, "data-color": processedColor, "data-font-size": processedFontSize, "data-font-weight": processedFontWeight, "data-font-style": fontStyle, "data-height": size.height, "data-height-max": size.heightMax, "data-height-min": size.heightMin, "data-margin-bottom": distance.margin.bottom, "data-margin-left": distance.margin.left, "data-margin-right": distance.margin.right, "data-margin-top": distance.margin.top, "data-padding-bottom": distance.padding.bottom, "data-padding-left": distance.padding.left, "data-padding-right": distance.padding.right, "data-padding-top": distance.padding.top, "data-width": size.width, "data-width-max": size.widthMax, "data-width-min": size.widthMin, "data-word-break": wordBreak }, props, { children: children })));
};
exports.Text = Text;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
