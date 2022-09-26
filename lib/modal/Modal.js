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
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var base_1 = require("../utils/base");
var color_1 = require("../utils/color");
var Background = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: ", ";\n"], ["\n\tbox-sizing: border-box;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: ", ";\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
});
var Modal = function (_a) {
    var children = _a.children, backgroundColor = _a.backgroundColor, blur = _a.blur, blurElementId = _a.blurElementId, containerElementId = _a.containerElementId, onClose = _a.onClose, props = __rest(_a, ["children", "backgroundColor", "blur", "blurElementId", "containerElementId", "onClose"]);
    var theme = (0, base_1.useEasyFlexTheme)();
    var backgroundElement = (0, react_1.useRef)(null);
    var handleClick = (0, react_1.useCallback)(function (event) {
        if (event.target === backgroundElement.current) {
            onClose();
        }
    }, [onClose]);
    var processedBackgroundColor = (0, color_1.useDefaultColor)(backgroundColor, theme.modal.backgroundColor);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (((_a = (0, base_1.defalsify)(blurElementId)) !== null && _a !== void 0 ? _a : theme.modal.blurElementId) &&
            ((0, base_1.isAbsoluteSize)(blur) || (blur !== false && theme.modal.blur))) {
            var styleElement_1 = document.createElement('style');
            styleElement_1.textContent = "\n\t\t\t\t#".concat((_b = (0, base_1.defalsify)(blurElementId)) !== null && _b !== void 0 ? _b : theme.modal.blurElementId, " {\n\t\t\t\t\tfilter: blur(").concat((0, base_1.isAbsoluteSize)(blur) ? blur : theme.modal.blur, ");\n\t\t\t\t}\n\t\t\t");
            document.head.append(styleElement_1);
            return function () {
                document.head.removeChild(styleElement_1);
            };
        }
    }, [blur, blurElementId, theme]);
    var container = (0, react_1.useMemo)(function () { var _a, _b; return (_b = document.getElementById((_a = (0, base_1.defalsify)(containerElementId)) !== null && _a !== void 0 ? _a : theme.modal.containerElementId)) !== null && _b !== void 0 ? _b : document.body; }, [containerElementId, theme]);
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(Background, __assign({ ref: backgroundElement, "data-background-color": processedBackgroundColor, onClick: handleClick }, props, { children: children })), container);
};
exports.Modal = Modal;
var templateObject_1;
