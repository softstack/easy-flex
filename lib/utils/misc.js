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
    var displayNone = _a.displayNone, visibility = _a.visibility;
    var processedDisplayNone = (0, react_1.useMemo)(function () { return (displayNone ? 'none' : undefined); }, [displayNone]);
    var processedVisibility = (0, react_1.useMemo)(function () { return (0, base_1.ifDefined)(visibility, function (visibility) { return visibility; }); }, [visibility]);
    return (0, react_1.useMemo)(function () { return ({ 'data-display-none': processedDisplayNone, 'data-visibility': processedVisibility }); }, [processedDisplayNone, processedVisibility]);
};
exports.useMiscStyleProps = useMiscStyleProps;
exports.miscStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: ", ";\n\tvisibility: ", ";\n"], ["\n\tdisplay: ", ";\n\tvisibility: ", ";\n"])), function (_a) {
    var displayNone = _a["data-display-none"];
    return displayNone;
}, function (_a) {
    var visibility = _a["data-visibility"];
    return visibility;
});
var templateObject_1;
