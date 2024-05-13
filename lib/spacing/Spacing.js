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
exports.createSpacing = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var base_1 = require("../utils/base");
var flexItem_1 = require("../utils/flexItem");
var misc_1 = require("../utils/misc");
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: transparent;\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\t", "\n\t", "\n"], ["\n\tbackground-color: transparent;\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\t", "\n\t", "\n"])), function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, flexItem_1.flexItemStyle, misc_1.miscStyle);
var createSpacing = function () {
    var Spacing = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var _b;
        var alignSelf = _a.alignSelf, basis = _a.basis, bottom = _a.bottom, display = _a.display, flex = _a.flex, flip = _a.flip, grow = _a.grow, height = _a.height, left = _a.left, position = _a.position, right = _a.right, shrink = _a.shrink, top = _a.top, userSelect = _a.userSelect, visibility = _a.visibility, width = _a.width, zIndex = _a.zIndex, props = __rest(_a, ["alignSelf", "basis", "bottom", "display", "flex", "flip", "grow", "height", "left", "position", "right", "shrink", "top", "userSelect", "visibility", "width", "zIndex"]);
        var theme = (0, base_1.useEasyFlexTheme)();
        var processedHeight = (0, react_1.useMemo)(function () {
            var _a, _b;
            return flip === undefined || flip === false
                ? (0, base_1.getDistance)(theme, (_a = (0, base_1.defalsify)(height)) !== null && _a !== void 0 ? _a : '0px')
                : (0, base_1.getDistance)(theme, (_b = (0, base_1.defalsify)(width)) !== null && _b !== void 0 ? _b : '0px');
        }, [flip, height, theme, width]);
        var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({
            bottom: bottom,
            display: (_b = (0, base_1.defalsify)(display)) !== null && _b !== void 0 ? _b : 'flex',
            left: left,
            position: position,
            right: right,
            top: top,
            userSelect: userSelect,
            visibility: visibility,
            zIndex: zIndex,
        });
        var processedWidth = (0, react_1.useMemo)(function () {
            var _a, _b;
            return flip === undefined || flip === false
                ? (0, base_1.getDistance)(theme, (_a = (0, base_1.defalsify)(width)) !== null && _a !== void 0 ? _a : '0px')
                : (0, base_1.getDistance)(theme, (_b = (0, base_1.defalsify)(height)) !== null && _b !== void 0 ? _b : '0px');
        }, [flip, height, theme, width]);
        return ((0, jsx_runtime_1.jsx)(StyledDiv, __assign({ "data-height": processedHeight, "data-width": processedWidth }, flexItemStyleProps, miscStyleProps, { ref: ref }, props)));
    }));
    Spacing.displayName = 'Spacing';
    return Spacing;
};
exports.createSpacing = createSpacing;
var templateObject_1;
