
        import React, { useCallback} from 'react';
        import {Form, Row, Col, Input, Select, Radio, InputNumber} from 'antd';
        const { TextArea } = Input;
        type Props = {

        }
        const DemoComponent: React.FunctionComponent<Props> = (props) => {
            const { vvListConfig, select2ListConfig } = props;
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
                <Form
            name="basic"
            layout='horizontal'
            form={form}
            labelCol={{"span":4}}
            wrapperCol={{"span":20}}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="define-form define-task-create-form"
        >
            <Form.Item
        label='名称'
        name='name'
        rules={[]}
        initialvalue='undefined'
        className=''
    >
        <Input allowClear placeHolder='请输入名称' />
    </Form.Item><Form.Item
            label='嵌套'
            className=''
            style={{marginBottom: 0}}>
            <Row><Col span='12'><Form.Item
        label='select1'
        name='vv'
        rules={[]}
        initialvalue='undefined'
        className=''
    >
        <Select options={vvListConfig} placeHolder='请选择select1'/>
    </Form.Item></Col><Col span='12'><Form.Item
        label='版本'
        name='select2'
        rules={[]}
        initialvalue='undefined'
        className=''
    >
        <Select options={select2ListConfig} placeHolder='请选择select2'/>
    </Form.Item></Col></Row>
        </Form.Item><Form.Item
        label='单选'
        name='radio1'
        rules={[]}
        initialvalue='r1'
        className=''
    >
        <Radio.Group options={[{"label":"r1","value":"r1"},{"label":"r2","value":"r2"}]} placeHolder='请选择'/>
    </Form.Item><Form.Item
        label='文本域'
        name='textarea1'
        rules={[]}
        initialvalue='undefined'
        className=''
    >
        <TextArea  placeHolder='请输入'/>
    </Form.Item><Form.Item
        label='数字输入框'
        name='InputNumber1'
        rules={[]}
        initialvalue='undefined'
        className=''
    >
        <InputNumber style={{ width: '100%' }} placeHolder='请输入'min='1'max='10' />
    </Form.Item>
        </Form>
              </div>
            )
        }
        export default DemoComponent;
    