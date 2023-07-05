import { Link, useLocation } from '@modern-js/runtime/router';
import { Breadcrumb } from 'antd';
import React from 'react';
import { useModel } from '@modern-js/runtime/model';
import { MenuType } from '@/model/menu';
import { BreadcrumbModel } from '@/model/breadcrumb';

export const BreadCrumbList = (opt: {
  list: string[];
  menuList: MenuType[];
}) => {
  const { list, menuList } = opt;
  const location = useLocation();
  const [state] = useModel(BreadcrumbModel);
  const menuRouter: {
    [index: string]: string;
  } = {};
  menuList.forEach(v => {
    if (v.name) {
      menuRouter[v.name] = v.url || '';
    }
  });
  const menu: {
    name?: string;
    url?: string;
  }[] =
    list.map((v, i) => {
      return {
        name: v,
        url: list.slice(0, i + 1).join('/'),
      };
    }) || [];
  return state.hide ? (
    <div></div>
  ) : (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {menu.map(item => {
        return (
          <Breadcrumb.Item key={item.name}>
            {!menuRouter[item.url || ''] ||
            location.pathname === menuRouter[item.url || ''] ? (
              item.name
            ) : (
              <Link to={menuRouter[item.url || ''] || '/'}>{item.name}</Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
