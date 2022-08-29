"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceStyle = exports.useDistanceStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var margin_1 = require("./margin");
var padding_1 = require("./padding");
var utils_1 = require("./utils");
var useDistanceStyleProps = function (data) {
    var distance = (0, utils_1.useDistance)(data);
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
