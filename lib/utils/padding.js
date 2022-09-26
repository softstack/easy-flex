"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingStyle = exports.usePaddingStyleProps = exports.usePadding = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var usePadding = function (_a) {
    var padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedPaddingBottom = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(paddingBottom)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(paddingVertical)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(padding)) !== null && _c !== void 0 ? _c : '0px'); }, [padding, paddingBottom, paddingVertical, theme]);
    var processedPaddingLeft = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(paddingLeft)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(paddingHorizontal)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(padding)) !== null && _c !== void 0 ? _c : '0px'); }, [padding, paddingHorizontal, paddingLeft, theme]);
    var processedPaddingRight = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(paddingRight)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(paddingHorizontal)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(padding)) !== null && _c !== void 0 ? _c : '0px'); }, [padding, paddingHorizontal, paddingRight, theme]);
    var processedPaddingTop = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(paddingTop)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(paddingVertical)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(padding)) !== null && _c !== void 0 ? _c : '0px'); }, [padding, paddingTop, paddingVertical, theme]);
    return (0, react_1.useMemo)(function () { return ({
        bottom: processedPaddingBottom,
        left: processedPaddingLeft,
        right: processedPaddingRight,
        top: processedPaddingTop,
    }); }, [processedPaddingBottom, processedPaddingLeft, processedPaddingRight, processedPaddingTop]);
};
exports.usePadding = usePadding;
var usePaddingStyleProps = function (props) {
    var padding = (0, exports.usePadding)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-padding-bottom': padding.bottom,
        'data-padding-left': padding.left,
        'data-padding-right': padding.right,
        'data-padding-top': padding.top,
    }); }, [padding]);
};
exports.usePaddingStyleProps = usePaddingStyleProps;
exports.paddingStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n"], ["\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tpadding-top: ", ";\n"])), function (_a) {
    var paddingBottom = _a["data-padding-bottom"];
    return paddingBottom;
}, function (_a) {
    var paddingLeft = _a["data-padding-left"];
    return paddingLeft;
}, function (_a) {
    var paddingRight = _a["data-padding-right"];
    return paddingRight;
}, function (_a) {
    var paddingTop = _a["data-padding-top"];
    return paddingTop;
});
var templateObject_1;
