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
var base_1 = require("../utils/base");
var flexItem_1 = require("../utils/flexItem");
var margin_1 = require("../utils/margin");
var StyledBaseLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\tcolor: ", ";\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tbox-sizing: border-box;\n\ttext-decoration: none;\n\tpadding: 0;\n\tcolor: ", ";\n\t", "\n\t", "\n\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"])), function (_a) {
    var color = _a["data-color"];
    return color;
}, flexItem_1.flexItemStyle, margin_1.marginStyle, function (_a) {
    var hoverColor = _a["data-hover-color"];
    return hoverColor;
});
exports.BaseLink = (0, react_1.forwardRef)(function (_a, ref) {
    var alignSelf = _a.alignSelf, basis = _a.basis, children = _a.children, _b = _a.color, color = _b === void 0 ? 'inherit' : _b, flex = _a.flex, grow = _a.grow, hoverColor = _a.hoverColor, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, _c = _a.newTab, newTab = _c === void 0 ? false : _c, shrink = _a.shrink, props = __rest(_a, ["alignSelf", "basis", "children", "color", "flex", "grow", "hoverColor", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "newTab", "shrink"]);
    var processedColor = (0, base_1.useColor)(color, undefined);
    var processedHoverColor = (0, base_1.useColor)(hoverColor, undefined);
    var target = (0, react_1.useMemo)(function () { return (newTab ? '_blank' : undefined); }, [newTab]);
    var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
    var marginStyleProps = (0, margin_1.useMarginStyleProps)({
        margin: margin,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginVertical: marginVertical,
    });
    return ((0, jsx_runtime_1.jsx)(StyledBaseLink, __assign({ "data-color": processedColor, "data-hover-color": processedHoverColor }, flexItemStyleProps, marginStyleProps, { rel: "noopener noreferrer", target: target, ref: ref }, props, { children: children })));
});
exports.BaseLink.displayName = 'BaseLink';
var templateObject_1;
