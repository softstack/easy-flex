"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyFlexProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var constants_1 = require("../constants");
var EasyFlexProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var mergedTheme = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e;
        return (__assign(__assign(__assign({}, constants_1.initialFlexTheme), theme), { border: __assign(__assign(__assign({}, constants_1.initialFlexTheme.border), theme.border), { radius: __assign(__assign({}, constants_1.initialFlexTheme.border.radius), (_a = theme.border) === null || _a === void 0 ? void 0 : _a.radius), width: __assign(__assign({}, constants_1.initialFlexTheme.border.width), (_b = theme.border) === null || _b === void 0 ? void 0 : _b.width) }), color: __assign(__assign({}, constants_1.initialFlexTheme.color), theme.color), distance: __assign(__assign({}, constants_1.initialFlexTheme.distance), theme.distance), flip: __assign(__assign(__assign({}, constants_1.initialFlexTheme.flip), theme.flip), { threshold: __assign(__assign({}, constants_1.initialFlexTheme.flip.threshold), (_c = theme.flip) === null || _c === void 0 ? void 0 : _c.threshold) }), font: __assign(__assign(__assign({}, constants_1.initialFlexTheme.font), theme.font), { size: __assign(__assign({}, constants_1.initialFlexTheme.font.size), (_d = theme.font) === null || _d === void 0 ? void 0 : _d.size), weight: __assign(__assign({}, constants_1.initialFlexTheme.font.weight), (_e = theme.font) === null || _e === void 0 ? void 0 : _e.weight) }), height: __assign(__assign({}, constants_1.initialFlexTheme.height), theme.height), modal: __assign(__assign({}, constants_1.initialFlexTheme.modal), theme.modal), width: __assign(__assign({}, constants_1.initialFlexTheme.width), theme.width) }));
    }, [theme]);
    return (0, jsx_runtime_1.jsx)(constants_1.EasyFlexContext.Provider, __assign({ value: mergedTheme }, { children: children }));
};
exports.EasyFlexProvider = EasyFlexProvider;
