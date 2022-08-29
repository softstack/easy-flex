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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var BaseFlex_1 = require("../baseFlex/BaseFlex");
var utils_1 = require("../utils/utils");
exports.Row = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, flip = _a.flip, flipDirection = _a.flipDirection, viewportThreshold = _a.viewportThreshold, props = __rest(_a, ["children", "flip", "flipDirection", "viewportThreshold"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var width = (0, utils_1.useDimension)().width;
    var flexDirection = (0, react_1.useMemo)(function () {
        if (flipDirection !== undefined &&
            (flip ||
                (flip === undefined &&
                    (viewportThreshold !== undefined
                        ? width < (0, utils_1.getViewportThreshold)(theme, viewportThreshold)
                        : width < theme.viewport.fallbackThreshold)))) {
            switch (flipDirection) {
                case 'flip':
                    return 'column';
                case 'reverse':
                    return 'row-reverse';
                case 'flip-reverse':
                    return 'column-reverse';
            }
        }
        return 'row';
    }, [flip, flipDirection, theme, viewportThreshold, width]);
    return ((0, jsx_runtime_1.jsx)(BaseFlex_1.BaseFlex, __assign({ flexDirection: flexDirection, ref: ref }, props, { children: children })));
});
exports.Row.displayName = 'Row';