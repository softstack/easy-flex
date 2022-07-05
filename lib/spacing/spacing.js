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
var StyledSpacing = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n"], ["\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tbackground-color: transparent;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-width: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-height: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n"])), function (_a) {
    var horizontal = _a["data-horizontal"];
    return horizontal;
}, function (_a) {
    var horizontal = _a["data-horizontal"];
    return horizontal;
}, function (_a) {
    var horizontal = _a["data-horizontal"];
    return horizontal;
}, function (_a) {
    var vertical = _a["data-vertical"];
    return vertical;
}, function (_a) {
    var vertical = _a["data-vertical"];
    return vertical;
}, function (_a) {
    var vertical = _a["data-vertical"];
    return vertical;
});
var Spacing = function (_a) {
    var flip = _a.flip, _b = _a.flipDirection, flipDirection = _b === void 0 ? false : _b, flipThreshold = _a.flipThreshold, _c = _a.horizontal, horizontal = _c === void 0 ? 0 : _c, _d = _a.vertical, vertical = _d === void 0 ? 0 : _d, props = __rest(_a, ["flip", "flipDirection", "flipThreshold", "horizontal", "vertical"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var width = (0, utils_1.useDimension)().width;
    var processedHorizontal = (0, react_1.useMemo)(function () {
        return flipDirection &&
            (flip ||
                (flip === undefined &&
                    (flipThreshold ? width < (0, utils_1.getFlipThreshold)(theme, flipThreshold) : width < theme.fallbackFlipThreshold)))
            ? (0, utils_1.toPx)((0, utils_1.getDistance)(theme, vertical))
            : (0, utils_1.toPx)((0, utils_1.getDistance)(theme, horizontal));
    }, [flip, flipDirection, flipThreshold, horizontal, theme, vertical, width]);
    var processedVertical = (0, react_1.useMemo)(function () {
        return flipDirection &&
            (flip ||
                (flip === undefined &&
                    (flipThreshold ? width < (0, utils_1.getFlipThreshold)(theme, flipThreshold) : width < theme.fallbackFlipThreshold)))
            ? (0, utils_1.toPx)((0, utils_1.getDistance)(theme, horizontal))
            : (0, utils_1.toPx)((0, utils_1.getDistance)(theme, vertical));
    }, [flip, flipDirection, flipThreshold, horizontal, theme, vertical, width]);
    return (0, jsx_runtime_1.jsx)(StyledSpacing, __assign({ "data-horizontal": processedHorizontal, "data-vertical": processedVertical }, props));
};
exports.Spacing = Spacing;
var templateObject_1;
