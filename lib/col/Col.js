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
exports.createCol = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var BaseFlex_1 = require("../baseFlex/BaseFlex");
var base_1 = require("../utils/base");
var createCol = function () {
    var BaseFlex = (0, BaseFlex_1.createBaseFlex)();
    var Col = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var children = _a.children, direction = _a.direction, props = __rest(_a, ["children", "direction"]);
        var processedDirection = (0, react_1.useMemo)(function () { var _a; return (_a = (0, base_1.defalsify)(direction)) !== null && _a !== void 0 ? _a : 'column'; }, [direction]);
        return ((0, jsx_runtime_1.jsx)(BaseFlex, __assign({ direction: processedDirection, ref: ref }, props, { children: children })));
    }));
    Col.displayName = 'Col';
    return Col;
};
exports.createCol = createCol;
