"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingStyle = exports.usePaddingStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("./utils");
var usePaddingStyleProps = function (data) {
    var distance = (0, utils_1.useDistance)(data);
    return (0, react_1.useMemo)(function () { return ({
        'data-padding-bottom': distance.padding.bottom,
        'data-padding-left': distance.padding.left,
        'data-padding-right': distance.padding.right,
        'data-padding-top': distance.padding.top,
    }); }, [distance]);
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
