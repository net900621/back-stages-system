import {
  Form,
  Input,
  Select,
  Button,
  Table,
  TablePaginationConfig,
} from 'antd';
import { useEffect, useState } from 'react';
import { redirect } from '@modern-js/runtime/router';

type TableDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};
type SearchType = {
  name?: string;
  type?: string;
};

export const TableDemo = () => {
  const [data, setData] = useState<TableDataType[]>();
  const [paginationData, setPaginationData] = useState<TablePaginationConfig>();
  const [searchData, setSearchData] = useState<SearchType>();
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'active',
      render: (e: TableDataType) => {
        return (
          <div>
            <a
              onClick={() => {
                redirect(`/detail?id=${e.key}`);
              }}
              style={{ marginRight: 20 }}
            >
              详情
            </a>
            <a
              onClick={() => {
                redirect(`/detail?id=${e.key}&type=1`);
              }}
            >
              修改
            </a>
          </div>
        );
      },
    },
  ];
  const onFinish = (params: SearchType) => {
    setSearchData(params);
  };
  const changeData = (pagination: TablePaginationConfig) => {
    setPaginationData(pagination);
  };
  const search = () => {
    setData([
      {
        key: '1',
        name: '1',
        age: 32,
        address: '111',
      },
    ]);
  };
  useEffect(() => {
    setPaginationData({
      total: 100,
      pageSize: 20,
      current: 1,
    });
  }, []);
  useEffect(() => {
    search();
  }, [paginationData, searchData]);
  return (
    <div>
      <Form name="search" layout="inline" onFinish={onFinish}>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="类型" name="type">
          <Select placeholder="请输入类型">
            <Select.Option value="1">类型一</Select.Option>
            <Select.Option value="2">类型二</Select.Option>
            <Select.Option value="3">类型三</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={data}
        columns={columns}
        pagination={paginationData}
        onChange={changeData}
      />
    </div>
  );
};
