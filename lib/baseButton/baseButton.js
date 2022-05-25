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
var StyledBaseButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-sizing: border-box;\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\twidth: ", ";\n\tflex-grow: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tjustify-content: ", ";\n\tflex-shrink: ", ";\n\tmargin-top: ", ";\n\tmargin-bottom: ", ";\n\tpadding-top: ", ";\n\tpadding-bottom: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-sizing: border-box;\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\talign-items: ", ";\n\talign-self: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\twidth: ", ";\n\tflex-grow: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tjustify-content: ", ";\n\tflex-shrink: ", ";\n\tmargin-top: ", ";\n\tmargin-bottom: ", ";\n\tpadding-top: ", ";\n\tpadding-bottom: ", ";\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor === undefined ? 'transparent' : backgroundColor;
}, function (_a) {
    var color = _a["data-color"];
    return color;
}, function (_a) {
    var fullWidth = _a["data-full-width"];
    return fullWidth;
}, function (_a) {
    var grow = _a["data-grow"];
    return (grow === undefined ? undefined : grow);
}, function (_a) {
    var horizontalMargin = _a["data-horizontal-margin"];
    return horizontalMargin;
}, function (_a) {
    var horizontalMargin = _a["data-horizontal-margin"];
    return horizontalMargin;
}, function (_a) {
    var horizontalPadding = _a["data-horizontal-padding"];
    return horizontalPadding;
}, function (_a) {
    var horizontalPadding = _a["data-horizontal-padding"];
    return horizontalPadding;
}, function (_a) {
    var justify = _a["data-justify"];
    return justify;
}, function (_a) {
    var shrink = _a["data-shrink"];
    return (shrink === undefined ? undefined : shrink);
}, function (_a) {
    var verticalMargin = _a["data-vertical-margin"];
    return verticalMargin;
}, function (_a) {
    var verticalMargin = _a["data-vertical-margin"];
    return verticalMargin;
}, function (_a) {
    var verticalPadding = _a["data-vertical-padding"];
    return verticalPadding;
}, function (_a) {
    var verticalPadding = _a["data-vertical-padding"];
    return verticalPadding;
});
var BaseButton = function (_a) {
    var align = _a.align, alignSelf = _a.alignSelf, backgroundColor = _a.backgroundColor, children = _a.children, color = _a.color, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, grow = _a.grow, _c = _a.horizontalMargin, horizontalMargin = _c === void 0 ? 0 : _c, _d = _a.horizontalPadding, horizontalPadding = _d === void 0 ? 0 : _d, justify = _a.justify, shrink = _a.shrink, _e = _a.verticalMargin, verticalMargin = _e === void 0 ? 0 : _e, _f = _a.verticalPadding, verticalPadding = _f === void 0 ? 0 : _f, props = __rest(_a, ["align", "alignSelf", "backgroundColor", "children", "color", "fullWidth", "grow", "horizontalMargin", "horizontalPadding", "justify", "shrink", "verticalMargin", "verticalPadding"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedBackgroundColor = (0, react_1.useMemo)(function () { return (backgroundColor === undefined ? undefined : (0, utils_1.getColor)(theme, backgroundColor)); }, [theme, backgroundColor]);
    var processedColor = (0, react_1.useMemo)(function () { return (color === undefined ? undefined : (0, utils_1.getColor)(theme, color)); }, [theme, color]);
    var processedFullWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : undefined); }, [fullWidth]);
    var processedHorizontalMargin = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, horizontalMargin)); }, [theme, horizontalMargin]);
    var processedHorizontalPadding = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, horizontalPadding)); }, [theme, horizontalPadding]);
    var processedVerticalMargin = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, verticalMargin)); }, [theme, verticalMargin]);
    var processedVerticalPadding = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, verticalPadding)); }, [theme, verticalPadding]);
    return ((0, jsx_runtime_1.jsx)(StyledBaseButton, __assign({ "data-align": align, "data-align-self": alignSelf, "data-background-color": processedBackgroundColor, "data-color": processedColor, "data-full-width": processedFullWidth, "data-grow": grow, "data-horizontal-margin": processedHorizontalMargin, "data-horizontal-padding": processedHorizontalPadding, "data-justify": justify, "data-shrink": shrink, "data-vertical-margin": processedVerticalMargin, "data-vertical-padding": processedVerticalPadding }, props, { children: children })));
};
exports.BaseButton = BaseButton;
var templateObject_1;
