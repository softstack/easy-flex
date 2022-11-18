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
var misc_1 = require("../utils/misc");
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\t", "\n"])), function (_a) {
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
}, misc_1.miscStyle);
var createSpacing = function () {
    var Spacing = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var displayNone = _a.displayNone, flip = _a.flip, _b = _a.flipEnabled, flipEnabled = _b === void 0 ? false : _b, viewport = _a.viewport, height = _a.height, visibility = _a.visibility, width = _a.width, props = __rest(_a, ["displayNone", "flip", "flipEnabled", "viewport", "height", "visibility", "width"]);
        var theme = (0, base_1.useEasyFlexTheme)();
        var displayWidth = (0, base_1.useDimension)().width;
        var processedHeight = (0, react_1.useMemo)(function () {
            var _a, _b;
            return flipEnabled &&
                (flip ||
                    (flip === undefined &&
                        (viewport !== false && viewport !== undefined
                            ? displayWidth < (0, base_1.getViewportThreshold)(theme, viewport)
                            : displayWidth < theme.viewport.defaultThreshold)))
                ? (0, base_1.getDistance)(theme, (_a = (0, base_1.defalsify)(width)) !== null && _a !== void 0 ? _a : '0px')
                : (0, base_1.getDistance)(theme, (_b = (0, base_1.defalsify)(height)) !== null && _b !== void 0 ? _b : '0px');
        }, [displayWidth, flip, flipEnabled, height, theme, viewport, width]);
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({ displayNone: displayNone, visibility: visibility });
        var processedWidth = (0, react_1.useMemo)(function () {
            var _a, _b;
            return flipEnabled &&
                (flip ||
                    (flip === undefined &&
                        (viewport !== false && viewport !== undefined
                            ? displayWidth < (0, base_1.getViewportThreshold)(theme, viewport)
                            : displayWidth < theme.viewport.defaultThreshold)))
                ? (0, base_1.getDistance)(theme, (_a = (0, base_1.defalsify)(height)) !== null && _a !== void 0 ? _a : '0px')
                : (0, base_1.getDistance)(theme, (_b = (0, base_1.defalsify)(width)) !== null && _b !== void 0 ? _b : '0px');
        }, [displayWidth, flip, flipEnabled, height, theme, viewport, width]);
        return ((0, jsx_runtime_1.jsx)(StyledDiv, __assign({ "data-height": processedHeight, "data-width": processedWidth }, miscStyleProps, { ref: ref }, props)));
    }));
    Spacing.displayName = 'Spacing';
    return Spacing;
};
exports.createSpacing = createSpacing;
var templateObject_1;
