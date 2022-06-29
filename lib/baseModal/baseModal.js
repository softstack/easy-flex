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
var utils_1 = require("../utils");
var Background = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\tbackground-color: ", ";\n\talign-items: center;\n\tjustify-content: center;\n\n\t& :only-child {\n\t\tmax-height: ", ";\n\t\tmax-width: ", ";\n\t}\n"], ["\n\tdisplay: flex;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tmin-height: 100vh;\n\tmin-width: 100vw;\n\tbackground-color: ", ";\n\talign-items: center;\n\tjustify-content: center;\n\n\t& :only-child {\n\t\tmax-height: ", ";\n\t\tmax-width: ", ";\n\t}\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var maxChildHeight = _a["data-max-child-height"];
    return maxChildHeight;
}, function (_a) {
    var maxChildWidth = _a["data-max-child-width"];
    return maxChildWidth;
});
var BaseModal = function (_a) {
    var children = _a.children, _b = _a.keepChildInside, keepChildInside = _b === void 0 ? false : _b, blur = _a.blur, onClose = _a.onClose, props = __rest(_a, ["children", "keepChildInside", "blur", "onClose"]);
    var theme = (0, utils_1.useEasyFlexTheme)();
    var backgroundElement = (0, react_1.useRef)(null);
    var handleClick = (0, react_1.useCallback)(function (event) {
        if (event.target === backgroundElement.current) {
            onClose();
        }
    }, [onClose]);
    var maxChildHeight = (0, react_1.useMemo)(function () { return (keepChildInside ? '100vh' : undefined); }, [keepChildInside]);
    var maxChildWidth = (0, react_1.useMemo)(function () { return (keepChildInside ? '100vw' : undefined); }, [keepChildInside]);
    (0, react_1.useEffect)(function () {
        if (typeof blur === 'number' || (blur !== false && theme.modal.blur)) {
            var styleElement_1 = document.createElement('style');
            styleElement_1.textContent = "\n\t\t\t\t#root {\n\t\t\t\t\tfilter: blur(".concat(typeof blur === 'number' ? (0, utils_1.toPx)(blur) : (0, utils_1.toPx)(theme.modal.blur), ")\n\t\t\t\t}\n\t\t\t");
            document.head.append(styleElement_1);
            return function () {
                document.head.removeChild(styleElement_1);
            };
        }
    }, [blur, theme]);
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(Background, __assign({ ref: backgroundElement, "data-background-color": theme.modal.backgroundColor, "data-max-child-height": maxChildHeight, "data-max-child-width": maxChildWidth, onClick: handleClick }, props, { children: children })), document.body);
};
exports.BaseModal = BaseModal;
var templateObject_1;
