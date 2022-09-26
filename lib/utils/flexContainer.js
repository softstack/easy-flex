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
    var direction = _a.direction, gap = _a.gap;
    var theme = (0, base_1.useEasyFlexTheme)();
    var columnGap = (0, react_1.useMemo)(function () {
        return (0, base_1.ifDefined)(gap, function (gap) {
            return direction === 'row' || direction === 'row-reverse' ? (0, base_1.getDistance)(theme, gap) : undefined;
        });
    }, [direction, gap, theme]);
    var rowGap = (0, react_1.useMemo)(function () {
        return (0, base_1.ifDefined)(gap, function (gap) {
            return direction === 'column' || direction === 'column-reverse' ? (0, base_1.getDistance)(theme, gap) : undefined;
        });
    }, [direction, gap, theme]);
    return (0, react_1.useMemo)(function () { return ({
        column: columnGap,
        row: rowGap,
    }); }, [columnGap, rowGap]);
};
exports.useGap = useGap;
var useFlexContainerStyleProps = function (_a) {
    var align = _a.align, direction = _a.direction, gap = _a.gap, justify = _a.justify;
    var processedGap = (0, exports.useGap)({ direction: direction, gap: gap });
    return (0, react_1.useMemo)(function () { return ({
        'data-align': align,
        'data-direction': direction,
        'data-column-gap': processedGap.column,
        'data-row-gap': processedGap.row,
        'data-justify': justify,
    }); }, [align, direction, justify, processedGap]);
};
exports.useFlexContainerStyleProps = useFlexContainerStyleProps;
exports.flexContainerStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\talign-items: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tjustify-content: ", ";\n"], ["\n\talign-items: ", ";\n\tflex-direction: ", ";\n\tcolumn-gap: ", ";\n\trow-gap: ", ";\n\tjustify-content: ", ";\n"])), function (_a) {
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
});
var templateObject_1;
