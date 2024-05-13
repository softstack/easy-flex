"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.miscStyle = exports.useMiscStyleProps = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var base_1 = require("./base");
var useMiscStyleProps = function (_a) {
    var bottom = _a.bottom, display = _a.display, left = _a.left, opacity = _a.opacity, position = _a.position, right = _a.right, top = _a.top, userSelect = _a.userSelect, visibility = _a.visibility, zIndex = _a.zIndex;
    var theme = (0, base_1.useEasyFlexTheme)();
    var processedBottom = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(bottom, function (bottom) { return ((0, base_1.isThemeSize)(bottom) ? theme.distance[bottom] : bottom); }); }, [bottom, theme]);
    var processedDisplay = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(display); }, [display]);
    var processedLeft = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(left, function (left) { return ((0, base_1.isThemeSize)(left) ? theme.distance[left] : left); }); }, [left, theme]);
    var processedOpacity = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(opacity); }, [opacity]);
    var processedPosition = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(position); }, [position]);
    var processedRight = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(right, function (right) { return ((0, base_1.isThemeSize)(right) ? theme.distance[right] : right); }); }, [right, theme]);
    var processedTop = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(top, function (top) { return ((0, base_1.isThemeSize)(top) ? theme.distance[top] : top); }); }, [theme, top]);
    var processedUserSelect = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(userSelect); }, [userSelect]);
    var processedVisibility = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(visibility); }, [visibility]);
    var processedZIndex = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(zIndex); }, [zIndex]);
    return (0, react_1.useMemo)(function () { return ({
        'data-bottom': processedBottom,
        'data-display': processedDisplay,
        'data-left': processedLeft,
        'data-opacity': processedOpacity,
        'data-position': processedPosition,
        'data-right': processedRight,
        'data-top': processedTop,
        'data-user-select': processedUserSelect,
        'data-visibility': processedVisibility,
        'data-z-index': processedZIndex,
    }); }, [
        processedBottom,
        processedDisplay,
        processedLeft,
        processedOpacity,
        processedPosition,
        processedRight,
        processedTop,
        processedUserSelect,
        processedVisibility,
        processedZIndex,
    ]);
};
exports.useMiscStyleProps = useMiscStyleProps;
exports.miscStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tuser-select: ", ";\n\tvisibility: ", ";\n\tz-index: ", ";\n"], ["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tuser-select: ", ";\n\tvisibility: ", ";\n\tz-index: ", ";\n"])), function (_a) {
    var bottom = _a["data-bottom"];
    return bottom;
}, function (_a) {
    var display = _a["data-display"];
    return display;
}, function (_a) {
    var left = _a["data-left"];
    return left;
}, function (_a) {
    var opacity = _a["data-opacity"];
    return opacity;
}, function (_a) {
    var position = _a["data-position"];
    return position;
}, function (_a) {
    var right = _a["data-right"];
    return right;
}, function (_a) {
    var top = _a["data-top"];
    return top;
}, function (_a) {
    var userSelect = _a["data-user-select"];
    return userSelect;
}, function (_a) {
    var visibility = _a["data-visibility"];
    return visibility;
}, function (_a) {
    var zIndex = _a["data-z-index"];
    return zIndex;
});
var templateObject_1;
