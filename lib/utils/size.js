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
    var aspectRatio = _a.aspectRatio, height = _a.height, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, width = _a.width;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedAspectRatio = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(aspectRatio, function (aspectRatio) { return (0, base_1.getAspectRatio)(theme, aspectRatio); }); }, [aspectRatio, theme]);
    var processedHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(height, function (height) { return (0, base_1.getHeight)(theme, height); }); }, [height, theme]);
    var processedMaxHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(maxHeight, function (maxHeight) { return (0, base_1.getHeight)(theme, maxHeight); }); }, [maxHeight, theme]);
    var processedMaxWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(maxWidth, function (maxWidth) { return (0, base_1.getWidth)(theme, maxWidth); }); }, [theme, maxWidth]);
    var processedMinHeight = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(minHeight, function (minHeight) { return (0, base_1.getHeight)(theme, minHeight); }); }, [minHeight, theme]);
    var processedMinWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(minWidth, function (minWidth) { return (0, base_1.getWidth)(theme, minWidth); }); }, [theme, minWidth]);
    var processedWidth = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(width, function (width) { return (0, base_1.getWidth)(theme, width); }); }, [theme, width]);
    return (0, react_1.useMemo)(function () { return ({
        aspectRatio: processedAspectRatio,
        height: processedHeight,
        maxHeight: processedMaxHeight,
        maxWidth: processedMaxWidth,
        minHeight: processedMinHeight,
        minWidth: processedMinWidth,
        width: processedWidth,
    }); }, [
        processedAspectRatio,
        processedHeight,
        processedMaxHeight,
        processedMaxWidth,
        processedMinHeight,
        processedMinWidth,
        processedWidth,
    ]);
};
exports.useSize = useSize;
var useSizeStyleProps = function (props) {
    var size = (0, exports.useSize)(props);
    return (0, react_1.useMemo)(function () { return ({
        'data-aspect-ratio': size.aspectRatio,
        'data-height': size.height,
        'data-height-max': size.maxHeight,
        'data-height-min': size.minHeight,
        'data-width': size.width,
        'data-width-max': size.maxWidth,
        'data-width-min': size.minWidth,
    }); }, [size]);
};
exports.useSizeStyleProps = useSizeStyleProps;
exports.sizeStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\taspect-ratio: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n"], ["\n\taspect-ratio: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n"])), function (_a) {
    var aspectRatio = _a["data-aspect-ratio"];
    return aspectRatio;
}, function (_a) {
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
