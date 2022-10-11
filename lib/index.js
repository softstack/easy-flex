"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponents = void 0;
var BaseButton_1 = require("./baseButton/BaseButton");
var BaseFlex_1 = require("./baseFlex/BaseFlex");
var BaseGrid_1 = require("./baseGrid/BaseGrid");
var BaseInput_1 = require("./baseInput/BaseInput");
var BaseTextArea_1 = require("./baseTextArea/BaseTextArea");
var Col_1 = require("./col/Col");
var EasyFlexProvider_1 = require("./easyFlexProvider/EasyFlexProvider");
var Img_1 = require("./img/Img");
var Link_1 = require("./link/Link");
var Modal_1 = require("./modal/Modal");
var Row_1 = require("./row/Row");
var Spacing_1 = require("./spacing/Spacing");
var Style_1 = require("./style/Style");
var Text_1 = require("./text/Text");
__exportStar(require("./baseButton/BaseButton"), exports);
__exportStar(require("./baseFlex/BaseFlex"), exports);
__exportStar(require("./baseGrid/BaseGrid"), exports);
__exportStar(require("./baseInput/BaseInput"), exports);
__exportStar(require("./baseTextArea/BaseTextArea"), exports);
__exportStar(require("./col/Col"), exports);
__exportStar(require("./constants"), exports);
__exportStar(require("./easyFlexProvider/EasyFlexProvider"), exports);
__exportStar(require("./img/Img"), exports);
__exportStar(require("./link/Link"), exports);
__exportStar(require("./modal/Modal"), exports);
__exportStar(require("./row/Row"), exports);
__exportStar(require("./spacing/Spacing"), exports);
__exportStar(require("./style/Style"), exports);
__exportStar(require("./text/Text"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./utils/base"), exports);
__exportStar(require("./utils/border"), exports);
__exportStar(require("./utils/distance"), exports);
__exportStar(require("./utils/font"), exports);
__exportStar(require("./utils/margin"), exports);
__exportStar(require("./utils/padding"), exports);
__exportStar(require("./utils/size"), exports);
var createComponents = function () { return ({
    BaseButton: (0, BaseButton_1.createBaseButton)(),
    BaseFlex: (0, BaseFlex_1.createBaseFlex)(),
    BaseGrid: (0, BaseGrid_1.createBaseGrid)(),
    BaseInput: (0, BaseInput_1.createBaseInput)(),
    BaseTextArea: (0, BaseTextArea_1.createBaseTextArea)(),
    Col: (0, Col_1.createCol)(),
    EasyFlexProvider: (0, EasyFlexProvider_1.createEasyFlexProvider)(),
    Img: (0, Img_1.createImg)(),
    Link: (0, Link_1.createLink)(),
    Modal: (0, Modal_1.createModal)(),
    Row: (0, Row_1.createRow)(),
    Spacing: (0, Spacing_1.createSpacing)(),
    Style: (0, Style_1.createStyle)(),
    Text: (0, Text_1.createText)(),
}); };
exports.createComponents = createComponents;
