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
    var bottom = _a.bottom, displayNone = _a.displayNone, left = _a.left, opacity = _a.opacity, position = _a.position, right = _a.right, top = _a.top, visibility = _a.visibility;
    var processedBottom = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(bottom, function (bottom) { return bottom; }); }, [bottom]);
    var processedDisplayNone = (0, react_1.useMemo)(function () { return (displayNone ? 'none' : undefined); }, [displayNone]);
    var processedLeft = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(left, function (left) { return left; }); }, [left]);
    var processedOpacity = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(opacity, function (opacity) { return opacity; }); }, [opacity]);
    var processedPosition = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(position, function (position) { return position; }); }, [position]);
    var processedRight = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(right, function (right) { return right; }); }, [right]);
    var processedTop = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(top, function (top) { return top; }); }, [top]);
    var processedVisibility = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(visibility, function (visibility) { return visibility; }); }, [visibility]);
    return (0, react_1.useMemo)(function () { return ({
        'data-bottom': processedBottom,
        'data-display-none': processedDisplayNone,
        'data-left': processedLeft,
        'data-opacity': processedOpacity,
        'data-position': processedPosition,
        'data-right': processedRight,
        'data-top': processedTop,
        'data-visibility': processedVisibility,
    }); }, [
        processedBottom,
        processedDisplayNone,
        processedLeft,
        processedOpacity,
        processedPosition,
        processedRight,
        processedTop,
        processedVisibility,
    ]);
};
exports.useMiscStyleProps = useMiscStyleProps;
exports.miscStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tvisibility: ", ";\n"], ["\n\tbottom: ", ";\n\tdisplay: ", ";\n\tleft: ", ";\n\topacity: ", ";\n\tposition: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tvisibility: ", ";\n"])), function (_a) {
    var bottom = _a["data-bottom"];
    return bottom;
}, function (_a) {
    var displayNone = _a["data-display-none"];
    return displayNone;
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
    var visibility = _a["data-visibility"];
    return visibility;
});
var templateObject_1;
