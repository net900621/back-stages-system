// import { ISBOE } from '@/api/config';
// import { message } from 'antd';

export const loginConfig = {
  aid: 5035,
};

// export const loginSdk = new WebLoginSDK({
//   aid: 5035,
//   // aid: '6717',
//   isBoe: ISBOE,
//   host: window.location.origin,
//   // TODO 为啥没生效
//   next: `${window.location.origin}/login`,
//   loginType: ['LOGIN_MOBILE_CODE', 'LOGIN_ACCOUNT_PWD'],
//   appName: '青牛',
//   globalMobileSupport: true, // 手机号前面是否带 +86那个下拉框 boolean值
//   registerType: ['REGISTER_MOBILE_CODE'], // 注册类型 商家后台只支持验证码注册所以就写了一种
//   phoneSeparate: true, // 输入手机号时分割成 "XXX XXXX XXXX"格式
//   mobileCodeLength: 4, // 验证码的长度
//   region: 'cn',
//   textConfig: {
//     // 自定义登录框的文案
//     mobileCodeLoginText: {
//       title: '验证码登录',
//     },
//     accountPwdLoginText: {
//       title: '密码登录',
//     },
//   },
//   success: res => {
//     localStorage.setItem('user', JSON.stringify(res));
//     message.success('登录成功!');
//     window.location.href = window.location.origin;
//   },
// });
export const loginSdk = {};
