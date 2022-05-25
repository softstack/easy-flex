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
exports.BaseLink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
var StyledBaseLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\talign-self: ", ";\n\tcolor: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tmargin-bottom: ", ";\n"], ["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\talign-self: ", ";\n\tcolor: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\tmargin-bottom: ", ";\n"])), function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var color = _a["data-color"];
    return (color === undefined ? undefined : color);
}, function (_a) {
    var horizontalMargin = _a["data-horizontal-margin"];
    return horizontalMargin;
}, function (_a) {
    var horizontalMargin = _a["data-horizontal-margin"];
    return horizontalMargin;
}, function (_a) {
    var verticalMargin = _a["data-vertical-margin"];
    return verticalMargin;
}, function (_a) {
    var verticalMargin = _a["data-vertical-margin"];
    return verticalMargin;
});
var BaseLink = function (_a) {
    var alignSelf = _a.alignSelf, children = _a.children, color = _a.color, _b = _a.horizontalMargin, horizontalMargin = _b === void 0 ? 0 : _b, newTab = _a.newTab, _c = _a.verticalMargin, verticalMargin = _c === void 0 ? 0 : _c, props = __rest(_a, ["alignSelf", "children", "color", "horizontalMargin", "newTab", "verticalMargin"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var processedColor = (0, react_1.useMemo)(function () { return (color === undefined ? undefined : (0, utils_1.getColor)(theme, color)); }, [theme, color]);
    var processedHorizontalMargin = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, horizontalMargin)); }, [theme, horizontalMargin]);
    var target = (0, react_1.useMemo)(function () { return (newTab ? '_blank' : undefined); }, [newTab]);
    var processedVerticalMargin = (0, react_1.useMemo)(function () { return (0, utils_1.toPx)((0, utils_1.getDistance)(theme, verticalMargin)); }, [theme, verticalMargin]);
    return ((0, jsx_runtime_1.jsx)(StyledBaseLink, __assign({ "data-align-self": alignSelf, "data-color": processedColor, "data-horizontal-margin": processedHorizontalMargin, "data-vertical-margin": processedVerticalMargin, rel: "noopener noreferrer", target: target }, props, { children: children })));
};
exports.BaseLink = BaseLink;
var templateObject_1;
