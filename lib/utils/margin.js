"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginStyle = exports.useMarginStyleProps = exports.useMargin = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useMargin = function (_a) {
    var margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedMarginBottom = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(marginBottom)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(marginVertical)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(margin)) !== null && _c !== void 0 ? _c : '0px'); }, [margin, marginBottom, marginVertical, theme]);
    var processedMarginLeft = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(marginLeft)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(marginHorizontal)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(margin)) !== null && _c !== void 0 ? _c : '0px'); }, [margin, marginHorizontal, marginLeft, theme]);
    var processedMarginRight = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(marginRight)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(marginHorizontal)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(margin)) !== null && _c !== void 0 ? _c : '0px'); }, [margin, marginHorizontal, marginRight, theme]);
    var processedMarginTop = (0, react_1.useMemo)(function () { var _a, _b, _c; return (0, base_1.getDistance)(theme, (_c = (_b = (_a = (0, base_1.defalsify)(marginTop)) !== null && _a !== void 0 ? _a : (0, base_1.defalsify)(marginVertical)) !== null && _b !== void 0 ? _b : (0, base_1.defalsify)(margin)) !== null && _c !== void 0 ? _c : '0px'); }, [margin, marginTop, marginVertical, theme]);
    return (0, react_1.useMemo)(function () { return ({
        bottom: processedMarginBottom,
        left: processedMarginLeft,
        right: processedMarginRight,
        top: processedMarginTop,
    }); }, [processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]);
};
exports.useMargin = useMargin;
var useMarginStyleProps = function (props) {
    var margin = (0, exports.useMargin)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-margin-bottom': margin.bottom,
        'data-margin-left': margin.left,
        'data-margin-right': margin.right,
        'data-margin-top': margin.top,
    }); }, [margin]);
};
exports.useMarginStyleProps = useMarginStyleProps;
exports.marginStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n"], ["\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n\tmargin-top: ", ";\n"])), function (_a) {
    var marginBottom = _a["data-margin-bottom"];
    return marginBottom;
}, function (_a) {
    var marginLeft = _a["data-margin-left"];
    return marginLeft;
}, function (_a) {
    var marginRight = _a["data-margin-right"];
    return marginRight;
}, function (_a) {
    var marginTop = _a["data-margin-top"];
    return marginTop;
});
var templateObject_1;
