"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeStyle = exports.useSizeStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("./utils");
var useSizeStyleProps = function (data) {
    var size = (0, utils_1.useSize)(data);
    return (0, react_1.useMemo)(function () { return ({
        'data-height': size.height,
        'data-height-max': size.heightMax,
        'data-height-min': size.heightMin,
        'data-width': size.width,
        'data-width-max': size.widthMax,
        'data-width-min': size.widthMin,
    }); }, [size]);
};
exports.useSizeStyleProps = useSizeStyleProps;
exports.sizeStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n"], ["\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n"])), function (_a) {
    var height = _a["data-height"];
    return height;
}, function (_a) {
    var heightMax = _a["data-height-max"];
    return heightMax;
}, function (_a) {
    var heightMin = _a["data-height-min"];
    return heightMin;
}, function (_a) {
    var width = _a["data-width"];
    return width;
}, function (_a) {
    var widthMax = _a["data-width-max"];
    return widthMax;
}, function (_a) {
    var widthMin = _a["data-width-min"];
    return widthMin;
});
var templateObject_1;
