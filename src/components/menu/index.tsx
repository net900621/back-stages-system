import React, { ReactNode, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useModel } from '@modern-js/runtime/model';
import { MenuModel } from '@/model/menu';
import { BreadcrumbModel } from '@/model/breadcrumb';

const { Sider } = Layout;
const { SubMenu } = Menu;
export interface MenuItemType {
  child?: MenuItemType[];
  icon?: ReactNode;
  name?: string;
  url?: string;
}

const MenuItem = ({ child, icon, name, url }: MenuItemType) => {
  const key = `${name || ''}`;
  const _render = child?.length ? (
    <SubMenu key={key} icon={icon} title={name}>
      {child.map(item => {
        return MenuItem(item);
      })}
    </SubMenu>
  ) : (
    <Menu.Item key={key} icon={icon}>
      <Link to={url || ''}>{name}</Link>
    </Menu.Item>
  );
  return _render;
};

const getDefaultKey = (list: MenuItemType[], location: string) => {
  let link: string[] = [];
  if (location === '' || location === '/') {
    if (list[0].child?.length) {
      link.push(list[0]?.name || '');
      link.push(list[0]?.child[0]?.name || '');
    } else {
      link.push(list[0]?.name || '');
    }
    return link;
  }
  list?.forEach((v: MenuItemType) => {
    if (v.url === location) {
      link.push(v.name || '');
    }
    if (v.child?.length) {
      if (getDefaultKey(v.child, location).length) {
        link = getDefaultKey(v.child, location);
        link.unshift(v.name || '');
      }
    }
  });
  return link;
};

export const MenuList = ({ location }: { location: string }) => {
  const [collapsed, changeCollapsed] = useState(false);
  const [state] = useModel(MenuModel);
  const [defaultKey, setDefaultKey] = useState<string[]>(['1']);
  const [defaultOpenKey, setDefaultOpen] = useState<string[]>([]);
  const [, actions] = useModel(BreadcrumbModel);
  useEffect(() => {
    getMenuList();
  }, [state]);

  const getMenuList = () => {
    if (state.items?.length) {
      setDefaultKey(getDefaultKey(state.items, location));
      setDefaultOpen([getDefaultKey(state.items, location)[0]]);
    }
  };

  const onCollapse = (e: boolean) => {
    changeCollapsed(e);
  };
  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={e => {
        onCollapse(e);
      }}
    >
      <Menu
        theme="dark"
        selectedKeys={defaultKey}
        openKeys={defaultOpenKey}
        defaultSelectedKeys={['咨询设置']}
        onClick={() => {
          actions.add(false);
        }}
        onOpenChange={openKeys => {
          const keys = openKeys.map(v => {
            return `${v}`;
          });
          setDefaultOpen(keys);
        }}
        mode="inline"
      >
        {state.items.map((item: MenuItemType) => {
          return MenuItem(item);
        })}
      </Menu>
    </Sider>
  );
};
