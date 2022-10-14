type Rule = {
  message?: string;
  [x: string]: any;
}

type Obj = {
  [x: string]: any;
}

export type FormComponentType = {
  type: string,
  label: string,
  name?: string,
  required?: boolean,
  rules?: Rule[],
  children?: FormComponentType[],
  span?: number;
  formItemClassname?: string;
  options?: Obj;
  props?: Obj,
}

export type FormType = {
  fileName?: string;
  layout: string,
  initialValues: Obj,
  labelCol?: Obj,
  wrapperCol?: Obj,
  children: FormComponentType[],
}

const data: FormType =  {
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

export default data;