import { useLocation } from '@modern-js/runtime/router';
import { Descriptions, Form, Input, Button, Row, Col, message } from 'antd';
import { useEffect, useState } from 'react';
import { getParams } from '@/common';

type DetailType = {
  id?: string;
  tel?: number;
  city?: string;
  addr?: string;
  desc?: string;
};
export const DetailDemo = () => {
  const location = useLocation();
  const params = getParams(location.search);
  const [data, setData] = useState<DetailType>({});
  const saveEvent = (e: DetailType) => {
    setData(e);
    message.success('修改成功！');
  };
  const [form] = Form.useForm();
  useEffect(() => {
    const _data = {
      id: params.id,
      tel: 1810000000,
      city: 'Hangzhou, Zhejiang',
      addr: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      desc: '无',
    };
    setData(_data);
    form.setFieldsValue(_data);
  }, []);
  return (
    <div>
      {params.type !== '1' ? (
        <Descriptions title="详情">
          <Descriptions.Item label="id">{data.id}</Descriptions.Item>
          <Descriptions.Item label="电话">{data.tel}</Descriptions.Item>
          <Descriptions.Item label="居住地">{data.city}</Descriptions.Item>
          <Descriptions.Item label="详细地址" span={2}>
            {data.addr}
          </Descriptions.Item>
          <Descriptions.Item label="备注">{data.desc}</Descriptions.Item>
        </Descriptions>
      ) : (
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
          title="详情"
          onFinish={saveEvent}
        >
          <Row>
            <Col span={8}>
              <Form.Item name="id" label="id">
                <Input disabled={true} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="tel" label="电话">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="city" label="居住地">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item name="addr" label="详细地址">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="desc" label="备注">
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Button htmlType="submit">提交</Button>
        </Form>
      )}
    </div>
  );
};
