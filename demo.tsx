
        import React, { useCallback} from 'react';
        import {Form, Row, Col, Select} from 'antd';
        
        type Props = {

        }
        const DemoComponent: React.FunctionComponent<Props> = (props) => {
            const { vvListConfig } = props;
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
        label='负载均衡算法'
        name='vv'
        rules={[]}
        initialValue='undefined'
        className=''
    >
        <Select options={vvListConfig} placeholder='请选择'/>
    </Form.Item>
        </Form>
              </div>
            )
        }
        export default DemoComponent;
    