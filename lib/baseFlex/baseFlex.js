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
var utils_1 = require("../utils");
var style = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-direction: ", ";\n\twidth: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\tflex-shrink: ", ";\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tflex-direction: ", ";\n\twidth: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\tflex-shrink: ", ";\n"])), function (_a) {
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
    var fullWidth = _a["data-full-width"];
    return fullWidth;
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
    var shrink = _a["data-shrink"];
    return shrink;
});
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
var BaseFlex = function (_a) {
    var align = _a.align, alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, children = _a.children, color = _a.color, _b = _a.element, element = _b === void 0 ? 'div' : _b, flexDirection = _a.flexDirection, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, gap = _a.gap, grow = _a.grow, justify = _a.justify, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY, shrink = _a.shrink, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "children", "color", "element", "flexDirection", "fullWidth", "gap", "grow", "justify", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "shrink"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, utils_1.useColor)(backgroundColor, undefined);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var processedFullWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : undefined); }, [fullWidth]);
    var columnGap = (0, react_1.useMemo)(function () {
        if (gap === undefined) {
            return undefined;
        }
        switch (flexDirection) {
            case 'row':
            case 'row-reverse':
                return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, gap));
            default:
                undefined;
        }
    }, [flexDirection, gap, theme]);
    var rowGap = (0, react_1.useMemo)(function () {
        if (gap === undefined) {
            return undefined;
        }
        switch (flexDirection) {
            case 'column':
            case 'column-reverse':
                return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, gap));
            default:
                undefined;
        }
    }, [flexDirection, gap, theme]);
    var _d = (0, utils_1.useDistance)({
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginX: marginX,
        marginY: marginY,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingX: paddingX,
        paddingY: paddingY,
    }), margin = _d.margin, padding = _d.padding;
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
    return ((0, jsx_runtime_1.jsx)(Element, __assign({ "data-align": align, "data-align-self": alignSelf, "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-flex-direction": flexDirection, "data-full-width": processedFullWidth, "data-column-gap": columnGap, "data-row-gap": rowGap, "data-grow": grow, "data-justify": justify, "data-margin-bottom": margin.bottom, "data-margin-left": margin.left, "data-margin-right": margin.right, "data-margin-top": margin.top, "data-padding-bottom": padding.bottom, "data-padding-left": padding.left, "data-padding-right": padding.right, "data-padding-top": padding.top, "data-shrink": shrink }, props, { children: children })));
};
exports.BaseFlex = BaseFlex;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
