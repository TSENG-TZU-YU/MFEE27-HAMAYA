import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      {/* Outlet相當於props.children，呈現區域頁面的內容 */}
      {/* 代表子頁區域內容 */}
      <Outlet />
    </>
  );
}
export default Layout;
