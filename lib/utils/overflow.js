"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.overflowStyle = exports.useOverflowStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useOverflowStyleProps = function (props) {
    return (0, react_1.useMemo)(function () { return ({
        'data-overflow': props.overflow,
        'data-overflow-x': props.overflowX,
        'data-overflow-y': props.overflowY,
    }); }, [props]);
};
exports.useOverflowStyleProps = useOverflowStyleProps;
exports.overflowStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n"], ["\n\toverflow: ", ";\n\toverflow-x: ", ";\n\toverflow-y: ", ";\n"])), function (_a) {
    var overflow = _a["data-overflow"];
    return overflow;
}, function (_a) {
    var overflowX = _a["data-overflow-x"];
    return overflowX;
}, function (_a) {
    var overflowY = _a["data-overflow-y"];
    return overflowY;
});
var templateObject_1;
