"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    layout: "vertical",
    initialValues: {},
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    children: [
        {
            type: "input",
            label: "名称",
            name: "name",
            required: true,
            rules: [],
            props: {
                placeHolder: "请输入名称",
            },
        },
        {
            type: "layer",
            label: "嵌套",
            children: [{
                    type: "select",
                    label: "算法",
                    name: "vv",
                    span: 12,
                    required: true,
                    rules: [],
                    props: {
                        placeHolder: "请选择算法",
                    },
                }, {
                    type: "select",
                    label: "版本",
                    name: "version",
                    options: [],
                    span: 12,
                    required: true,
                    rules: [],
                    props: {
                        placeHolder: "请选择版本",
                    },
                }]
        },
    ],
};
exports.default = data;
