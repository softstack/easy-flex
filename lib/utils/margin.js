"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marginStyle = exports.useMarginStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("./utils");
var useMarginStyleProps = function (data) {
    var distance = (0, utils_1.useDistance)(data);
    return (0, react_1.useMemo)(function () { return ({
        'data-margin-bottom': distance.margin.bottom,
        'data-margin-left': distance.margin.left,
        'data-margin-right': distance.margin.right,
        'data-margin-top': distance.margin.top,
    }); }, [distance]);
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
