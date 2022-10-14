import React, { useCallback } from "react";
import { Form, Row, Col, Input, Select } from "antd";
const { Option } = Select;
type Props = {};
const DemoComponent: React.FunctionComponent<Props> = (props) => {
  const { vvListConfig, versionListConfig } = props;
  const [form] = Form.useForm();

  // 提交
  const onFinish = useCallback((values) => {}, []);

  // 提交校验失败
  const onFinishFailed = useCallback((error) => {
    console.log(error);
  }, []);

  return (
    <div className="flex">
      <Form
        name="basic"
        layout="vertical"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="define-form define-task-create-form"
      >
        <Form.Item label="名称" name="name" rules={} className="">
          <Input allowClear placeHolder="请输入名称" name="name" />
        </Form.Item>{" "}
        <Form.Item label="嵌套" noStyle className="">
          <Row>
            <Col span="12">
              <Form.Item label="算法" name="vv" rules={} className="">
                <Select placeHolder="请选择算法" name="vv">
                  {vvListConfig.map((item: any) => (
                    <Option value={item.value}>{item.label}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>{" "}
            <Col span="12">
              <Form.Item label="版本" name="version" rules={} className="">
                <Select placeHolder="请选择版本" name="version">
                  {versionListConfig.map((item: any) => (
                    <Option value={item.value}>{item.label}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};
export default DemoComponent;
