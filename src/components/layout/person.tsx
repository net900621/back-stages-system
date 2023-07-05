import { Dropdown, Avatar, Menu, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './person.scss';
import { useModel } from '@modern-js/runtime/model';
import { UserModel } from '@/model/user';
// import { loginSdk } from '@/config/login';

export const Person = () => {
  const [state] = useModel(UserModel);
  const menu = () => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            // loginSdk.logout();
            message.success('登出成功!');
          }}
        >
          退出登录
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <Dropdown overlay={menu} className="wrap-header-person">
      <div>
        <Avatar
          className="wrap-header-avatar"
          size="small"
          src={state?.user?.avatar || ''}
          style={{ marginRight: '10px' }}
        />
        <div className="wrap-header-name">您好，{state?.user?.name}</div>
        <DownOutlined className="wrap-header-arrow" />
      </div>
    </Dropdown>
  );
};
