import { Layout } from 'antd';
import { useEffect } from 'react';
// import { loginSdk } from '@/config/login';
import './index.scss';

export const Login = () => {
  useEffect(() => {
    const loginDom = document.getElementById('login-box');
    if (loginDom) {
      // loginSdk.init(loginDom);
    }
  }, []);
  return (
    <Layout className="login-container animated fadeIn white">
      <div id="login-box" />
    </Layout>
  );
};
