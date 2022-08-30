"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceStyle = exports.useDistanceStyleProps = exports.useDistance = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var margin_1 = require("./margin");
var padding_1 = require("./padding");
var useDistance = function (_a) {
    var margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, padding = _a.padding, paddingBottom = _a.paddingBottom, paddingHorizontal = _a.paddingHorizontal, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingVertical = _a.paddingVertical;
    var processedMargin = (0, margin_1.useMargin)({
        margin: margin,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginVertical: marginVertical,
    });
    var processedPadding = (0, padding_1.usePadding)({
        padding: padding,
        paddingBottom: paddingBottom,
        paddingHorizontal: paddingHorizontal,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingVertical: paddingVertical,
    });
    return (0, react_1.useMemo)(function () { return ({ margin: processedMargin, padding: processedPadding }); }, [processedMargin, processedPadding]);
};
exports.useDistance = useDistance;
var useDistanceStyleProps = function (props) {
    var distance = (0, exports.useDistance)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-margin-bottom': distance.margin.bottom,
        'data-margin-left': distance.margin.left,
        'data-margin-right': distance.margin.right,
        'data-margin-top': distance.margin.top,
        'data-padding-bottom': distance.padding.bottom,
        'data-padding-left': distance.padding.left,
        'data-padding-right': distance.padding.right,
        'data-padding-top': distance.padding.top,
    }); }, [distance]);
};
exports.useDistanceStyleProps = useDistanceStyleProps;
exports.distanceStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", "\n\t", "\n"], ["\n\t", "\n\t", "\n"])), margin_1.marginStyle, padding_1.paddingStyle);
var templateObject_1;
