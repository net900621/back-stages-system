import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import { useModel } from '@modern-js/runtime/model';
import { Person } from './person';
import { MenuItemType, MenuList } from '@/components/menu/index';
import { BreadCrumbList } from '@/components/breadcrumb/index';
import { MenuModel, MenuType } from '@/model/menu';
import './index.scss';

import { getData } from '@/api';
import { UserModel } from '@/model/user';
import { menuList as menuListDef } from '@/config/menu';
import { DEFAULT_CONFIG } from '@/config/base';

const { Header } = Layout;

const { Content } = Layout;

export const SiderDom = (props: any) => {
  const { children } = props;
  const [state, menuActions] = useModel(MenuModel);
  const [, actions] = useModel(UserModel);

  const getUserInfo = async () => {
    let data;
    try {
      data = await getData.get('/hospital/v1/user/info');
    } catch (error) {
      data = {
        data: {
          data: {
            name: '我',
            avatar: '',
            title: '称号',
            permission: {
              name: 'root',
              url: '',
              child: [
                {
                  name: '首页',
                  url: '',
                  child: [
                    {
                      name: '首页',
                      url: '/',
                    },
                  ],
                },
                {
                  name: '登录',
                  url: '/login',
                },
                {
                  name: 'demo',
                  url: '',
                  child: [
                    {
                      name: '表格',
                      url: '/table',
                    },
                  ],
                },
              ],
            },
          },
          msg: '提交成功',
          code: 0,
        },
      };
      actions.add(data.data.data);
      data.data?.data?.permission?.child?.map((item: MenuItemType) => {
        const _item = menuListDef.filter(v => {
          return v.name === item.name;
        });
        item.icon = _item[0]?.icon;
        return item;
      });
      menuActions.add(data.data.data?.permission.child || []);
    }
    actions.add(data.data.data);
    data.data?.data?.permission?.child?.map((item: MenuItemType) => {
      const _item = menuListDef.filter(v => {
        return v.name === item.name;
      });
      item.icon = _item[0]?.icon;
      return item;
    });
    menuActions.add(data.data.data?.permission.child || []);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const location = useLocation();
  const _arr = JSON.parse(JSON.stringify(state.items));
  const arr = state.items.length
    ? _arr.reduce((l: MenuType | MenuType[], v: MenuType) => {
        let list;
        if (l instanceof Array) {
          list = l;
        } else if (l.child) {
          list = [
            l,
            ...l.child.map(item => {
              return { ...item, name: `${l.name || ''}/${item.name || ''}` };
            }),
          ];
        } else {
          list = [l];
        }
        return v.child
          ? [
              ...list,
              v,
              ...v.child.map(item => {
                return { ...item, name: `${v.name || ''}/${item.name || ''}` };
              }),
            ]
          : [...list, v];
      })
    : [];
  let menuList: string[] = [];
  arr.forEach((v: MenuType) => {
    if (v.url === location.pathname) {
      menuList = v.name?.split('/') || [];
    }
  });

  return (
    <Layout className="wrap">
      <Header className="wrap-header" style={{ padding: 0 }}>
        <div className="wrap-header-logo">{/* <img src="" /> */}</div>
        <div className="wrap-header-title">
          <p>{DEFAULT_CONFIG?.header_name}</p>
          <p>{DEFAULT_CONFIG?.header_desc}</p>
        </div>
        <Person />
      </Header>
      <Layout className="wrap-content">
        <div className="side-bar">
          <MenuList location={location.pathname} />
        </div>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <BreadCrumbList list={menuList} menuList={arr} />
            {state.items.length ? children : ''}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
