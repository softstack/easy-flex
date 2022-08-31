"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexItemStyle = exports.useFlexItemStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useFlexItemStyleProps = function (_a) {
    var alignSelf = _a.alignSelf, basis = _a.basis, flex = _a.flex, grow = _a.grow, shrink = _a.shrink;
    return (0, react_1.useMemo)(function () { return ({
        'data-align-self': alignSelf,
        'data-basis': basis,
        'data-flex': flex,
        'data-grow': grow,
        'data-shrink': shrink,
    }); }, [alignSelf, basis, flex, grow, shrink]);
};
exports.useFlexItemStyleProps = useFlexItemStyleProps;
exports.flexItemStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tflex: ", ";\n\tflex-basis: ", ";\n\tflex-grow: ", ";\n\tflex-shrink: ", ";\n"], ["\n\tflex: ", ";\n\tflex-basis: ", ";\n\tflex-grow: ", ";\n\tflex-shrink: ", ";\n"])), function (_a) {
    var flex = _a["data-flex"];
    return flex;
}, function (_a) {
    var basis = _a["data-basis"];
    return basis;
}, function (_a) {
    var grow = _a["data-grow"];
    return grow;
}, function (_a) {
    var shrink = _a["data-shrink"];
    return shrink;
});
var templateObject_1;
