"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorStyle = exports.useColorStyleProps = exports.useColor = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useColor = function (color, defaultColor) {
    var theme = (0, base_1.useEasyFlexTheme)();
    return (0, react_1.useMemo)(function () { return (color === undefined ? defaultColor : (0, base_1.getColor)(theme, color)); }, [color, defaultColor, theme]);
};
exports.useColor = useColor;
var useColorStyleProps = function (props, defaultBackgroundColor, defaultColor) {
    var processedBackgroundColor = (0, exports.useColor)(props.backgroundColor, defaultBackgroundColor);
    var processedColor = (0, exports.useColor)(props.color, defaultColor);
    return (0, react_1.useMemo)(function () { return ({
        backgroundColor: processedBackgroundColor,
        color: processedColor,
    }); }, [processedBackgroundColor, processedColor]);
};
exports.useColorStyleProps = useColorStyleProps;
exports.colorStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"], ["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"])), function (_a) {
    var backgroundColor = _a["data-background-color"];
    return backgroundColor;
}, function (_a) {
    var color = _a["data-color"];
    return color;
});
var templateObject_1;
