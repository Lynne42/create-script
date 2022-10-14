"use strict";
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
const template_1 = __importDefault(require("./template"));
const antdImport = ["Form", "Row", "Col"];
const otherAntdConst = [];
const propsName = [];
// 字符串首字母转大写
const titleCase = (str) => {
    const newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
    return newStr;
};
// 创建Form表单结构
const createReactComponent = (props, children) => {
    const { layout, initialValues, labelCol, wrapperCol } = props;
    return `<Form
            name="basic"
            layout='${layout}'
            form={form}
            labelCol={${JSON.stringify(labelCol)}}
            wrapperCol={${JSON.stringify(wrapperCol)}}
            initialValues={${JSON.stringify(initialValues)}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="define-form define-task-create-form"
        >
            ${children.join(" ")}
        </Form>`;
};
// 创建form.item
const createAntdFormItem = (props, children) => {
    const { type, label, name, rules, formItemClassname = "", props: childProps, } = props;
    if (type === "layer") {
        return `<Form.Item
            label='${label}'
            noStyle
            className='${formItemClassname}'>

            ${children}
        </Form.Item>`;
    }
    return `<Form.Item
        label='${label}'
        name='${name}'
        rules={${rules}}
        className='${formItemClassname}'
    >
        ${children}
    </Form.Item>`;
};
// 创建antd form组件
const createAntdFormComponentType = (type, props) => {
    const _a = props || {}, { placeholder } = _a, other = __rest(_a, ["placeholder"]);
    const optionsConfigName = `${props.name}ListConfig`;
    const ot = Object.keys(other)
        .map((item) => `${item}='${other[item]}'`)
        .join(" ");
    switch (type) {
        case "input": {
            antdImport.push("Input");
            return `<Input allowClear ${ot} />`;
        }
        case "select": {
            antdImport.push("Select");
            otherAntdConst.push(`const { Option } = Select;`);
            propsName.push(optionsConfigName);
            return `<Select ${ot} >
              {(${optionsConfigName}).map(
                (item: any) =>
                  <Option value={item.value}>{item.label}</Option>
              )}
                </Select>`;
        }
        default: {
            return "";
        }
    }
};
// 获取所有用到的form children组件
const getFormComponentType = (data) => {
    const comps = [];
    data.forEach((item) => {
        const childs = item.children;
        if (childs && childs.length) {
            const cols = [];
            childs.forEach((child) => {
                const { type, span } = child, other = __rest(child, ["type", "span"]);
                const cpm = createAntdFormItem(child, createAntdFormComponentType(type, Object.assign(Object.assign({}, other.props), { name: child.name })));
                cols.push(`<Col span='${span}'>${cpm}</Col>`);
            });
            comps.push(createAntdFormItem(item, `<Row>${cols.join(" ")}</Row>`));
        }
        else {
            comps.push(createAntdFormItem(item, createAntdFormComponentType(item.type, Object.assign(Object.assign({}, item.props), { name: item.name }))));
        }
    });
    return comps;
};
function main(processEnv) {
    const nowTemplate = Object.assign(Object.assign({}, template_1.default), processEnv);
    const { fileName = "demo" } = nowTemplate;
    const componentName = `${titleCase(fileName)}Component`;
    const formChildren = getFormComponentType(nowTemplate.children);
    const form = createReactComponent(nowTemplate, formChildren);
    const importAntd = Array.from(new Set(antdImport)).join(", ");
    const propsNames = Array.from(new Set(propsName)).join(", ");
    return `
        import React, { useCallback} from 'react';
        import {${importAntd}} from 'antd';
        ${Array.from(new Set(otherAntdConst)).join(' ')}
        type Props = {

        }
        const ${componentName}: React.FunctionComponent<Props> = (props) => {
            const { ${propsNames} } = props;
            const [form] = Form.useForm();

            // 提交
            const onFinish = useCallback((values) => {
              
            }, [])

            // 提交校验失败
            const onFinishFailed = useCallback((error) => {
              console.log(error)
            }, [])
            
            return (
              <div className="flex">
                ${form}
              </div>
            )
        }
        export default ${componentName};
    `;
}
exports.default = main;
