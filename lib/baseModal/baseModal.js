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
exports.BaseModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var col_1 = require("../col/col");
var utils_1 = require("../utils");
var Background = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: ", ";\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tdisplay: flex;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: ", ";\n\talign-items: center;\n\tjustify-content: center;\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
});
var Container = (0, styled_components_1.default)(col_1.Col)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmax-height: 100vh;\n\tmax-width: 100vw;\n"], ["\n\tmax-height: 100vh;\n\tmax-width: 100vw;\n"])));
var BaseModal = function (_a) {
    var children = _a.children, onClose = _a.onClose, props = __rest(_a, ["children", "onClose"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var modalRoot = (0, react_1.useMemo)(function () { return document.getElementById(theme.modalRootId); }, [theme]);
    var handlePropagation = (0, react_1.useCallback)(function (event) { return event.stopPropagation(); }, []);
    if (!modalRoot) {
        return null;
    }
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(Background, __assign({ "data-background-color": theme.color.modalBackground, onClick: onClose }, { children: (0, jsx_runtime_1.jsx)(Container, __assign({ onClick: handlePropagation }, props, { children: children })) })), modalRoot);
};
exports.BaseModal = BaseModal;
var templateObject_1, templateObject_2;
