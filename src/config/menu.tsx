import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { MenuType } from '@/model/menu';

export const menuList: MenuType[] = [
  {
    icon: <SettingOutlined />,
    name: '首页',
    child: [
      {
        name: '首页',
        url: '/consult/setting',
      },
    ],
  },
];
