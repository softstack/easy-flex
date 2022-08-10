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
var mergeDeep = function (a, b) {
    if (b === undefined) {
        return a;
    }
    else if (typeof b === 'object') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var tmp = {};
        for (var _i = 0, _a = Object.entries(a); _i < _a.length; _i++) {
            var key = _a[_i][0];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            tmp[key] = mergeDeep(a[key], b[key]);
        }
        return tmp;
    }
    return b;
};
var EasyFlexProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var mergedTheme = (0, react_1.useMemo)(function () { return mergeDeep(constants_1.initialFlexTheme, theme); }, [theme]);
    return (0, jsx_runtime_1.jsx)(constants_1.EasyFlexContext.Provider, __assign({ value: mergedTheme }, { children: children }));
};
exports.EasyFlexProvider = EasyFlexProvider;
