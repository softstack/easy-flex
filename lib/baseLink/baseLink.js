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
var StyledBaseLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\talign-self: ", ";\n\tcolor: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\talign-self: ", ";\n\tcolor: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var alignSelf = _a["data-align-self"];
    return alignSelf;
}, function (_a) {
    var color = _a["data-color"];
    return color;
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
    var hoverColor = _a["data-hover-color"];
    return hoverColor;
});
var BaseLink = function (_a) {
    var alignSelf = _a.alignSelf, children = _a.children, _b = _a.color, color = _b === void 0 ? 'inherit' : _b, hoverColor = _a.hoverColor, margin = _a.margin, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginX = _a.marginX, marginY = _a.marginY, _c = _a.newTab, newTab = _c === void 0 ? false : _c, props = __rest(_a, ["alignSelf", "children", "color", "hoverColor", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "marginX", "marginY", "newTab"]);
    var processedColor = (0, utils_1.useColor)(color, undefined);
    var processedHoverColor = (0, utils_1.useColor)(hoverColor, undefined);
    var target = (0, react_1.useMemo)(function () { return (newTab ? '_blank' : undefined); }, [newTab]);
    var distance = (0, utils_1.useDistance)({
        margin: margin,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginX: marginX,
        marginY: marginY,
    });
    return ((0, jsx_runtime_1.jsx)(StyledBaseLink, __assign({ "data-align-self": alignSelf, "data-color": processedColor, "data-hover-color": processedHoverColor, "data-margin-bottom": distance.margin.bottom, "data-margin-left": distance.margin.left, "data-margin-right": distance.margin.right, "data-margin-top": distance.margin.top, rel: "noopener noreferrer", target: target }, props, { children: children })));
};
exports.BaseLink = BaseLink;
var templateObject_1;
