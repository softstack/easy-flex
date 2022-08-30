"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeStyle = exports.useSizeStyleProps = exports.useSize = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useSize = function (_a) {
    var _b = _a.fullHeight, fullHeight = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, height = _a.height, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, width = _a.width;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedHeight = (0, react_1.useMemo)(function () { return (fullHeight ? '100%' : (0, base_1.ifNotUndefined)(height, function (height) { return (0, base_1.getHeight)(theme, height); })); }, [fullHeight, height, theme]);
    var processedMaxHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(maxHeight, function (maxHeight) { return (0, base_1.getHeight)(theme, maxHeight); }); }, [maxHeight, theme]);
    var processedMaxWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(maxWidth, function (maxWidth) { return (0, base_1.getWidth)(theme, maxWidth); }); }, [theme, maxWidth]);
    var processedMinHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(minHeight, function (minHeight) { return (0, base_1.getHeight)(theme, minHeight); }); }, [minHeight, theme]);
    var processedMinWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifNotUndefined)(minWidth, function (minWidth) { return (0, base_1.getWidth)(theme, minWidth); }); }, [theme, minWidth]);
    var processedWidth = (0, react_1.useMemo)(function () { return (fullWidth ? '100%' : (0, base_1.ifNotUndefined)(width, function (width) { return (0, base_1.getWidth)(theme, width); })); }, [fullWidth, theme, width]);
    return (0, react_1.useMemo)(function () { return ({
        height: processedHeight,
        maxHeight: processedMaxHeight,
        maxWidth: processedMaxWidth,
        minHeight: processedMinHeight,
        minWidth: processedMinWidth,
        width: processedWidth,
    }); }, [processedHeight, processedMaxHeight, processedMaxWidth, processedMinHeight, processedMinWidth, processedWidth]);
};
exports.useSize = useSize;
var useSizeStyleProps = function (props) {
    var size = (0, exports.useSize)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-height': size.height,
        'data-height-max': size.maxHeight,
        'data-height-min': size.minHeight,
        'data-width': size.width,
        'data-width-max': size.maxWidth,
        'data-width-min': size.minWidth,
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
