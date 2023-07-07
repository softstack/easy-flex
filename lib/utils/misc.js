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
    var bottom = _a.bottom, display = _a.display, left = _a.left, opacity = _a.opacity, position = _a.position, right = _a.right, top = _a.top, userSelect = _a.userSelect, visibility = _a.visibility;
    var processedBottom = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(bottom); }, [bottom]);
    var processedDisplay = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(display); }, [display]);
    var processedLeft = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(left); }, [left]);
    var processedOpacity = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(opacity); }, [opacity]);
    var processedPosition = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(position); }, [position]);
    var processedRight = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(right); }, [right]);
    var processedTop = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(top); }, [top]);
    var processedUserSelect = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(userSelect); }, [userSelect]);
    var processedVisibility = (0, react_1.useMemo)(function () { return (0, base_1.defalsify)(visibility); }, [visibility]);
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
    ]);
};
exports.useMiscStyleProps = useMiscStyleProps;
exports.miscStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tuser-select: ", ";\n\tvisibility: ", ";\n"], ["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tuser-select: ", ";\n\tvisibility: ", ";\n"])), function (_a) {
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
});
var templateObject_1;
