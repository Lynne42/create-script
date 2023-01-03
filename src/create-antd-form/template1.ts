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
  fileName?: string; layout: string; initialValues: Obj;labelCol?: Obj;wrapperCol?: Obj;
  children: FormComponentType[];
};

const data: FormType = {
  layout: "horizontal", initialValues: {}, labelCol: { span: 4 }, wrapperCol: { span: 20 },
  children: [
    {
      type: "select",
      label: "负载均衡算法",
      name: "strategic",
      span: 24,
      required: true,
      rules: [{ require: true, message: "请选择" }],
      props: {
        placeholder: "请选择",
      },
    },
  ],
};

export default data;
