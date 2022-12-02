"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gridItemStyle = exports.useGridItemStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useGridItemStyleProps = function (_a) {
    var justifySelf = _a.justifySelf;
    return (0, react_1.useMemo)(function () { return ({
        'data-justify-self': justifySelf,
    }); }, [justifySelf]);
};
exports.useGridItemStyleProps = useGridItemStyleProps;
exports.gridItemStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tjustify-self: ", ";\n"], ["\n\tjustify-self: ", ";\n"])), function (_a) {
    var justifySelf = _a["data-justify-self"];
    return justifySelf;
});
var templateObject_1;
