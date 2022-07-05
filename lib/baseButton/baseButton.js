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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
var StyledBaseButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tflex-direction: row;\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\twidth: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\tflex-shrink: ", ";\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tflex-direction: row;\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\twidth: ", ";\n\tflex-grow: ", ";\n\tjustify-content: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n\tflex-shrink: ", ";\n"])), function (_a) {
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
    var fullWidth = _a["data-full-width"];
    return fullWidth;
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
var BaseButton = function (_a) {
    var align = _a.align, alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, children = _a.children, color = _a.color, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, grow = _a.grow, justify = _a.justify, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingX = _a.paddingX, paddingY = _a.paddingY, shrink = _a.shrink, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "children", "color", "fullWidth", "grow", "justify", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingX", "paddingY", "shrink"]);
    var processedBackgroundColor = (0, utils_1.useColor)(backgroundColor, 'transparent');
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var processedFullWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : undefined); }, [fullWidth]);
    var _c = (0, utils_1.useDistance)({
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
    }), margin = _c.margin, padding = _c.padding;
    return ((0, jsx_runtime_1.jsx)(StyledBaseButton, __assign({ "data-align": align, "data-align-self": alignSelf, "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-full-width": processedFullWidth, "data-grow": grow, "data-justify": justify, "data-margin-bottom": margin.bottom, "data-margin-left": margin.left, "data-margin-right": margin.right, "data-margin-top": margin.top, "data-padding-bottom": padding.bottom, "data-padding-left": padding.left, "data-padding-right": padding.right, "data-padding-top": padding.top, "data-shrink": shrink }, props, { children: children })));
};
exports.BaseButton = BaseButton;
var templateObject_1;
