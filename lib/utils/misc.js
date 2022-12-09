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
    var displayNone = _a.displayNone, opacity = _a.opacity, visibility = _a.visibility;
    var processedDisplayNone = (0, react_1.useMemo)(function () { return (displayNone ? 'none' : undefined); }, [displayNone]);
    var processedOpacity = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(opacity, function (opacity) { return opacity; }); }, [opacity]);
    var processedVisibility = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(visibility, function (visibility) { return visibility; }); }, [visibility]);
    return (0, react_1.useMemo)(function () { return ({
        'data-display-none': processedDisplayNone,
        'data-opacity': processedOpacity,
        'data-visibility': processedVisibility,
    }); }, [processedDisplayNone, processedOpacity, processedVisibility]);
};
exports.useMiscStyleProps = useMiscStyleProps;
exports.miscStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: ", ";\n\topacity: ", ";\n\tvisibility: ", ";\n"], ["\n\tdisplay: ", ";\n\topacity: ", ";\n\tvisibility: ", ";\n"])), function (_a) {
    var displayNone = _a["data-display-none"];
    return displayNone;
}, function (_a) {
    var opacity = _a["data-opacity"];
    return opacity;
}, function (_a) {
    var visibility = _a["data-visibility"];
    return visibility;
});
var templateObject_1;
