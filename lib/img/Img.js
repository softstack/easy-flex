"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImg = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var border_1 = require("../utils/border");
var color_1 = require("../utils/color");
var flexItem_1 = require("../utils/flexItem");
var gridItem_1 = require("../utils/gridItem");
var margin_1 = require("../utils/margin");
var misc_1 = require("../utils/misc");
var size_1 = require("../utils/size");
var StyledImg = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tobject-fit: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\tbox-sizing: border-box;\n\tobject-fit: ", ";\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"])), function (_a) {
    var objectFit = _a["data-object-fit"];
    return objectFit;
}, border_1.borderStyle, color_1.colorStyle, flexItem_1.flexItemStyle, gridItem_1.gridItemStyle, margin_1.marginStyle, misc_1.miscStyle, size_1.sizeStyle);
var createImg = function () {
    var Img = (0, react_1.memo)((0, react_1.forwardRef)(function (_a, ref) {
        var alignSelf = _a.alignSelf, aspectRatio = _a.aspectRatio, backgroundColor = _a.backgroundColor, basis = _a.basis, borderColor = _a.borderColor, borderRadius = _a.borderRadius, borderStyle = _a.borderStyle, borderWidth = _a.borderWidth, bottom = _a.bottom, color = _a.color, display = _a.display, flex = _a.flex, grow = _a.grow, height = _a.height, justifySelf = _a.justifySelf, left = _a.left, margin = _a.margin, marginBottom = _a.marginBottom, marginHorizontal = _a.marginHorizontal, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginVertical = _a.marginVertical, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, minHeight = _a.minHeight, minWidth = _a.minWidth, objectFit = _a.objectFit, opacity = _a.opacity, position = _a.position, right = _a.right, shrink = _a.shrink, top = _a.top, userSelect = _a.userSelect, visibility = _a.visibility, width = _a.width, props = __rest(_a, ["alignSelf", "aspectRatio", "backgroundColor", "basis", "borderColor", "borderRadius", "borderStyle", "borderWidth", "bottom", "color", "display", "flex", "grow", "height", "justifySelf", "left", "margin", "marginBottom", "marginHorizontal", "marginLeft", "marginRight", "marginTop", "marginVertical", "maxHeight", "maxWidth", "minHeight", "minWidth", "objectFit", "opacity", "position", "right", "shrink", "top", "userSelect", "visibility", "width"]);
        var borderStyleProps = (0, border_1.useBorderStyleProps)({ borderColor: borderColor, borderRadius: borderRadius, borderStyle: borderStyle, borderWidth: borderWidth });
        var colorStyleProps = (0, color_1.useColorStyleProps)({ backgroundColor: backgroundColor, color: color });
        var flexItemStyleProps = (0, flexItem_1.useFlexItemStyleProps)({ alignSelf: alignSelf, basis: basis, flex: flex, grow: grow, shrink: shrink });
        var gridItemStyleProps = (0, gridItem_1.useGridItemStyleProps)({ justifySelf: justifySelf });
        var marginStyleProps = (0, margin_1.useMarginStyleProps)({
            margin: margin,
            marginBottom: marginBottom,
            marginHorizontal: marginHorizontal,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginVertical: marginVertical,
        });
        var miscStyleProps = (0, misc_1.useMiscStyleProps)({
            bottom: bottom,
            display: display,
            left: left,
            opacity: opacity,
            position: position,
            right: right,
            top: top,
            userSelect: userSelect,
            visibility: visibility,
        });
        var sizeStyleProps = (0, size_1.useSizeStyleProps)({
            aspectRatio: aspectRatio,
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
            width: width,
        });
        return ((0, jsx_runtime_1.jsx)(StyledImg, __assign({ "data-object-fit": objectFit }, borderStyleProps, colorStyleProps, flexItemStyleProps, gridItemStyleProps, marginStyleProps, miscStyleProps, sizeStyleProps, { ref: ref }, props)));
    }));
    Img.displayName = 'Img';
    return Img;
};
exports.createImg = createImg;
var templateObject_1;
