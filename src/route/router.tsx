import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { SiderDom } from '@/components/layout/index';

import { Home } from '@/pages/home/index';
import { Login } from '@/pages/login/index';
import { TableDemo } from '@/pages/table';
import { DetailDemo } from '@/pages/table/detail';

export const routeUl = [
  { path: '/', compontent: Home, name: 'home' },
  { path: '/login', compontent: Login, name: 'login', noBar: true },
  { path: '/home', compontent: Home, name: 'homeback' },
  { path: '/table', compontent: TableDemo, name: 'table' },
  { path: '/detail', compontent: DetailDemo, name: 'detail' },
];

export const RouteList = (/* { nobar }: { nobar: boolean } */) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routeUl.map(item => {
            return (
              <Route
                path={item.path}
                key={item.name}
                element={<item.compontent />}
              >
                {/* {!item.noBar && !nobar ? (
                  <SiderDom>
                    <item.compontent />
                  </SiderDom>
                ) : (
                  <item.compontent />
                )} */}
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
