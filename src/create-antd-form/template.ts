type Rule = {
  message?: string;
  [x: string]: any;
};

type Obj = {
  [x: string]: any;
};

export type FormComponentType = {
  type: string;
  label: string;
  name?: string;
  required?: boolean;
  rules?: Rule[];
  children?: FormComponentType[];
  span?: number;
  formItemClassname?: string;
  options?: Obj;
  initialValue?: any;
  props?: Obj;
};

export type FormType = {
  fileName?: string;
  layout: string;
  initialValues: Obj;
  labelCol?: Obj;
  wrapperCol?: Obj;
  children: FormComponentType[];
};

const data: FormType = {
  layout: "horizontal",
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
      children: [
        {
          type: "select",
          label: "select1",
          name: "vv",
          span: 12,
          required: true,
          rules: [{ require: true, message: "请填写" }],
          props: {
            placeHolder: "请选择select1",
          },
        },
        {
          type: "select",
          label: "版本",
          name: "select2",
          options: [],
          span: 12,
          required: true,
          rules: [],
          props: {
            placeHolder: "请选择select2",
          },
        },
      ],
    },
    {
      type: "radio",
      label: "单选",
      name: "radio1",
      rules: [],
      props: {
        placeHolder: "请选择",
        options: [
          { label: "r1", value: "r1" },
          { label: "r2", value: "r2" },
        ],
      },
      initialValue: "r1",
    },
    {
      type: "textarea",
      label: "文本域",
      name: "textarea1",
      rules: [],
      props: {
        placeHolder: "请输入",
      },
    },
    {
      type: "InputNumber",
      label: "数字输入框",
      name: "InputNumber1",
      rules: [],
      props: {
        placeHolder: "请输入",
        min: 1,
        max: 10,
      },
    },
  ],
};

export default data;
