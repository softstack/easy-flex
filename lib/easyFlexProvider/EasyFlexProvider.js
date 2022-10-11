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
exports.createEasyFlexProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var constants_1 = require("../constants");
var base_1 = require("../utils/base");
var createEasyFlexProvider = function () {
    var EasyFlexProvider = function (_a) {
        var children = _a.children, theme = _a.theme;
        var mergedTheme = (0, react_1.useMemo)(function () {
            return (0, base_1.mergeDeep)(constants_1.defaultEasyFlexTheme, theme);
        }, [theme]);
        return (0, jsx_runtime_1.jsx)(constants_1.EasyFlexContext.Provider, __assign({ value: mergedTheme }, { children: children }));
    };
    return EasyFlexProvider;
};
exports.createEasyFlexProvider = createEasyFlexProvider;
