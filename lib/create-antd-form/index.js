"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const create_1 = __importDefault(require("./create"));
// 创建文件
function createFile(fileName, content) {
    fs_1.default.writeFile(`${fileName}.tsx`, content, {
        encoding: "utf8",
    }, (err) => {
        if (err)
            console.log(err);
    });
}
function init() {
    const { fileName = 'demo' } = process.env;
    const content = (0, create_1.default)(Object.assign(Object.assign({}, process.env), { fileName: fileName }));
    createFile(fileName, content);
}
init();
