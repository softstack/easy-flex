"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexContainerStyle = exports.useFlexContainerStyleProps = exports.useGap = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useGap = function (_a) {
    var direction = _a.direction, gap = _a.gap, wrapGap = _a.wrapGap;
    var theme = (0, base_1.useEasyFlexTheme)();
    var columnGap = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = (0, base_1.ifDefined)(gap, function (gap) {
            return direction === 'row' || direction === 'row-reverse' ? (0, base_1.getDistance)(theme, gap) : undefined;
        })) !== null && _a !== void 0 ? _a : (0, base_1.ifDefined)(wrapGap, function (wrapGap) {
            return direction === 'column' || direction === 'column-reverse' ? (0, base_1.getDistance)(theme, wrapGap) : undefined;
        });
    }, [direction, gap, theme, wrapGap]);
    var rowGap = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = (0, base_1.ifDefined)(gap, function (gap) {
            return direction === 'column' || direction === 'column-reverse' ? (0, base_1.getDistance)(theme, gap) : undefined;
        })) !== null && _a !== void 0 ? _a : (0, base_1.ifDefined)(wrapGap, function (wrapGap) {
            return direction === 'row' || direction === 'row-reverse' ? (0, base_1.getDistance)(theme, wrapGap) : undefined;
        });
    }, [direction, gap, theme, wrapGap]);
    return (0, react_1.useMemo)(function () { return ({
        column: columnGap,
        row: rowGap,
    }); }, [columnGap, rowGap]);
};
exports.useGap = useGap;
var useFlexContainerStyleProps = function (_a) {
    var align = _a.align, direction = _a.direction, gap = _a.gap, justify = _a.justify, wrap = _a.wrap, wrapGap = _a.wrapGap;
    var processedGap = (0, exports.useGap)({ direction: direction, gap: gap, wrapGap: wrapGap });
    return (0, react_1.useMemo)(function () { return ({
        'data-align': align,
        'data-direction': direction,
        'data-column-gap': processedGap.column,
        'data-row-gap': processedGap.row,
        'data-justify': justify,
        'data-wrap': wrap,
    }); }, [align, direction, justify, processedGap, wrap]);
};
exports.useFlexContainerStyleProps = useFlexContainerStyleProps;
exports.flexContainerStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\talign-items: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tjustify-content: ", ";\n\tflex-wrap: ", ";\n"], ["\n\talign-items: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tjustify-content: ", ";\n\tflex-wrap: ", ";\n"])), function (_a) {
    var align = _a["data-align"];
    return align;
}, function (_a) {
    var direction = _a["data-direction"];
    return direction;
}, function (_a) {
    var columnGap = _a["data-column-gap"];
    return columnGap;
}, function (_a) {
    var rowGap = _a["data-row-gap"];
    return rowGap;
}, function (_a) {
    var justify = _a["data-justify"];
    return justify;
}, function (_a) {
    var wrap = _a["data-wrap"];
    return wrap;
});
var templateObject_1;
