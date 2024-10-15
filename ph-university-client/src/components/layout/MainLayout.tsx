import React, { createElement } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { adminPath, adminSidebarItems } from '../../routes/adminRoutes';
import { itemsGenarator } from '../../utils/ItemsGenarator';
import { facultyPath } from '../../routes/facultyRoutes';
import { studentPath } from '../../routes/studentRoutes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';

const { Header, Content, Footer, Sider } = Layout;

const userRole = {
  ADMIN : "admin",
  FACULTY : "faculty",
  STUDENT : "student"
}


const MainLayout = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  let sidebarItems;
switch (user!.role) {
  case userRole.ADMIN:
    sidebarItems = itemsGenarator(adminPath, "admin")
    break;
    case userRole.FACULTY:
      sidebarItems = itemsGenarator(facultyPath, "faculty")
      break;
      case userRole.STUDENT:
    sidebarItems = itemsGenarator(studentPath, "student")
    break;
  default:
    break;
}
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='logo' style={{height : "4rem", display : "flex", "alignItems" : "center", justifyContent : "center"}}>
            <h1 style={{color : "white", fontSize : "24px"}}>PH Uni</h1>
        </div>
        <Menu theme="dark" mode="inline" items={sidebarItems} defaultSelectedKeys={['1']}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}><Button onClick={handleLogout}>Logout</Button> </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;