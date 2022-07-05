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
exports.Spacing = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
var StyledSpacing = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n"])), function (_a) {
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
});
var Spacing = function (_a) {
    var flip = _a.flip, _b = _a.flipDirection, flipDirection = _b === void 0 ? false : _b, flipThreshold = _a.flipThreshold, _c = _a.height, height = _c === void 0 ? 0 : _c, _d = _a.width, width = _d === void 0 ? 0 : _d, props = __rest(_a, ["flip", "flipDirection", "flipThreshold", "height", "width"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var displayWidth = (0, utils_1.useDimension)().width;
    var processedHeight = (0, react_1.useMemo)(function () {
        return flipDirection &&
            (flip ||
                (flip === undefined &&
                    (flipThreshold
                        ? displayWidth < (0, utils_1.getFlipThreshold)(theme, flipThreshold)
                        : displayWidth < theme.fallbackFlipThreshold)))
            ? (0, utils_1.toPx)((0, utils_1.getDistance)(theme, width))
            : (0, utils_1.toPx)((0, utils_1.getDistance)(theme, height));
    }, [displayWidth, flip, flipDirection, flipThreshold, height, theme, width]);
    var processedWidth = (0, react_1.useMemo)(function () {
        return flipDirection &&
            (flip ||
                (flip === undefined &&
                    (flipThreshold
                        ? displayWidth < (0, utils_1.getFlipThreshold)(theme, flipThreshold)
                        : displayWidth < theme.fallbackFlipThreshold)))
            ? (0, utils_1.toPx)((0, utils_1.getDistance)(theme, height))
            : (0, utils_1.toPx)((0, utils_1.getDistance)(theme, width));
    }, [displayWidth, flip, flipDirection, flipThreshold, height, theme, width]);
    return (0, jsx_runtime_1.jsx)(StyledSpacing, __assign({ "data-height": processedHeight, "data-width": processedWidth }, props));
};
exports.Spacing = Spacing;
var templateObject_1;
