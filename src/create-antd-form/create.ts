import template from "./template";
import { FormType, FormComponentType } from "./template";

const antdImport = ["Form", "Row", "Col"];
const otherAntdConst: string[] = [];
const propsName: string[] = [];

// 字符串首字母转大写
const titleCase = (str: string) => {
  const newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
  return newStr;
};

// 创建Form表单结构
const createReactComponent = (props: FormType, children: any) => {
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
            ${children.join("")}
        </Form>`;
};

// 创建form.item
const createAntdFormItem = (props: FormComponentType, children: any) => {
  const {
    type,
    label,
    name,
    initialValue,
    rules = [],
    formItemClassname = "",
    props: childProps,
  } = props;
  if (type === "layer") {
    return `<Form.Item
            label='${label}'
            className='${formItemClassname}'
            style={{marginBottom: 0}}>
            ${children}
        </Form.Item>`;
  }
  return `<Form.Item
        label='${label}'
        name='${name}'
        rules={[]}
        initialvalue='${initialValue}'
        className='${formItemClassname}'
    >
        ${children}
    </Form.Item>`;
};

// 创建antd form 各个组件
const createAntdFormComponentType = (type: string, props: any) => {
  const { name, options, ...other } = props || {};
  const optionsConfigName = `${props.name}ListConfig`;

  const ot = Object.keys(other)
    .map((item) => `${item}='${other[item]}'`)
    .join("");
  switch (type) {
    case "input": {
      antdImport.push("Input");
      return `<Input allowClear ${ot} />`;
    }
    case "select": {
      antdImport.push("Select");
      propsName.push(optionsConfigName);
      return `<Select options={${
        options ? JSON.stringify(options) : optionsConfigName
      }} ${ot}/>`;
    }

    case "radio": {
      antdImport.push("Radio");
      propsName.push(optionsConfigName);
      return `<Radio.Group options={${
        options ? JSON.stringify(options) : optionsConfigName
      }} ${ot}/>`;
    }

    case "textarea": {
      antdImport.push("Input");
      otherAntdConst.push("const { TextArea } = Input;");

      propsName.push(optionsConfigName);
      return `<TextArea  ${ot}/>`;
    }

    default: {
      return "";
    }
  }
};

// 获取所有用到的form children组件
const getFormComponentType = (data: FormComponentType[]) => {
  const comps: any = [];
  data.forEach((item) => {
    const childs = item.children;
    if (childs && childs.length) {
      const cols: any = [];
      childs.forEach((child) => {
        const { type, span, ...other } = child;
        const cpm = createAntdFormItem(
          child,
          createAntdFormComponentType(type, {
            ...other.props,
            name: child.name,
          })
        );
        cols.push(`<Col span='${span}'>${cpm}</Col>`);
      });
      comps.push(createAntdFormItem(item, `<Row>${cols.join("")}</Row>`));
    } else {
      comps.push(
        createAntdFormItem(
          item,
          createAntdFormComponentType(item.type, {
            ...item.props,
            name: item.name,
          })
        )
      );
    }
  });
  return comps;
};

function main(processEnv: any) {
  const nowTemplate: FormType = {
    ...template,
    ...processEnv,
  };

  const { fileName = "demo" } = nowTemplate;
  const componentName = `${titleCase(fileName)}Component`;

  const formChildren = getFormComponentType(nowTemplate.children);
  const form = createReactComponent(nowTemplate, formChildren);

  const importAntd = Array.from(new Set(antdImport)).join(", ");

  const propsNames = Array.from(new Set(propsName)).join(", ");

  return `
        import React, { useCallback} from 'react';
        import {${importAntd}} from 'antd';
        ${Array.from(new Set(otherAntdConst)).join(" ")}
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

export default main;
